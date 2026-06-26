---
title: "Lessons from years of coding with AI"
date: "2026-06-28"
summary: "Scar-tissue notes from years of shipping AI-assisted code across side projects and a 100M+ items/day catalog pipeline. The rules I now follow are the ones earned by losing a day to a confidently-wrong answer, a green test that mocked the bug, or a polished diff that wasn't actually done."
tags: ["work-with-ai", "ai-engineering", "engineering-practice"]
---

The [shipping post](/blog/shipping-with-ai) covers the method and the [testing post](/blog/quality-and-testing-with-ai) covers the rigor. This one is the scar tissue — the rules I actually follow now, each one earned by losing hours (or a day) to a mistake worth remembering.

No methodology, no framework. Eleven short lessons, each with the incident that taught me.

## 1. AI confidence is uncorrelated with correctness

I lost most of a day on the Amplify Hosting Secrets pipeline. Every guide I read sounded definitive — numbered steps, AWS-flavored prose, official-looking diagrams. They were all *almost right*. They conflated Hosting Secrets with Lambda Secrets Manager, called Env variables "secrets" colloquially, gave recipes for setups I wasn't on. The model parroted the same shape with the same confidence. The fix took 30 seconds once I knew the actual problem; the day was spent on confidently-wrong answers.

**Rule:** doc-sounding output gets the same skepticism as a 2019 Stack Overflow answer. Always have *one signal* — a log line, a metric, a test — that proves which layer is broken. Without it, you're navigating by vibes.

## 2. "Looks done" is not "is done"

AI-written features look polished. The code reads well, the types pass, the tests are green, the UI renders. None of that is the same as *the user can actually do the thing*. I've shipped chat endpoints that returned the right shape and the wrong content; backtest scripts that printed numbers that turned out to be the wrong numbers; refactors that compiled and broke a downstream consumer I forgot existed.

**Rule:** before declaring done, do the thing as a user. `curl` the endpoint, read the response. Run the backtest, eyeball the chart. Click the button on prod, not on localhost. The demo is part of the definition of done — not an extra step.

## 3. AI doesn't say "I don't know"

It produces an answer. Sometimes the answer is "here are the four ways to do this and the tradeoffs"; sometimes it's "do these five steps." It almost never says *"I don't have enough context to answer; please share X."* So when I'm stuck, the temptation is to keep asking, hoping the next reply will be the one. It won't be — the model is generating from the same context it had three replies ago, getting more confident as it commits to a path.

**Rule:** when two AI answers contradict each other, stop asking the model and start reading the source — official docs, the codebase, the GitHub issue thread. The signal is *contradiction*, not *frustration*. Three bad answers means I'm asking the wrong question, not that the right one is one more prompt away.

## 4. The "explain it back to me" trap

When I ask AI to explain code it just wrote, the explanation sounds confident and is sometimes wrong about its own output. The model rationalizes the code as if a different model wrote it — coherent narrative, plausible reasoning, occasionally hallucinated mechanics. I caught this when an explanation said "this throttles to 5 req/sec" about a function that did no throttling whatsoever.

**Rule:** the diff is the truth, not the explanation. If I want to know what the code does, I read the code or run it — not ask the model to summarize. Explanations are a *sketch* of intent, not ground truth.

## 5. Long context isn't free

It feels like more context = better answer. It's not. Past some threshold, the model's attention degrades — it weights early-context tokens differently from late-context ones, gets distracted by tangentially relevant material, and starts pattern-matching to whichever long-form example happens to be nearest. The Amplify saga got worse the longer the chat got, not better.

**Rule:** trim context aggressively. One paragraph of intent + the specific file or trace beats five pages of dumped chat history. When a session gets long, start a new one and re-paste the *condensed* state — what changed, what's known broken, what's been ruled out. The condensation step is the work.

## 6. The task queue has to live outside the model

The temptation is to treat the chat as working memory — *"we were going to do X next, then Y, then Z."* This breaks the moment the session ends. Next morning the model has no idea what we discussed. I reconstruct from scrollback, lose 20 minutes, and miss the half-finished thing I meant to come back to. Pretending AI remembers is a tax I pay every time I context-switch back into a project.

Every project I run now has an external task tracker, no exceptions. At $dayjob it's Jira (PODS-XXXXX, with the PRD and ERD linked off the epic). For side projects it's a Notion board or a `TODO.md` in the repo — the format doesn't matter; the *durability outside the chat* does. AI feeds the queue (drafts tickets, summarizes what we just shipped, proposes the next-three list); it doesn't own the queue. The day I stopped using AI's chat history as my task list was the day side projects stopped quietly stalling between sessions.

**Rule:** if you can't name the next three things to ship without scrolling back through a chat, the queue doesn't exist. Pick a tool — Jira, Linear, Notion, even a flat markdown file — and make it the single source of truth. The system of record lives outside the model.

## 7. Two-step prompting beats one-shot

"Add feature X" produces additive code — a new helper, a new route, a new branch, all stacked onto whatever was there. "Refactor X to make room for Y, then add Y" produces the same feature plus a refactor that absorbs it cleanly. Same model, same context, different output — purely because the prompt forced a deletion step before the addition.

**Rule:** never bundle "add" and "clean up" in one prompt. Two prompts, two diffs, two reviews. The cost is one extra round-trip; the saving is months of accumulated rot.

## 8. AI always proposes additions, never deletions

Run years of features through any model and the file tree grows monotonically. The model has no concept that *fewer files is better*; it has no concept that the right move for a 200-line component is to delete 150 of them. Deletion is a human instinct AI hasn't picked up.

**Rule:** every few features, one session whose only allowed verb is "delete." Walk the tree, find the unused exports, the abstractions with one caller, the helpers that wrap a one-liner. The model is excellent at *executing* deletions when given the target. It will never propose them.

## 9. Hostile framing beats approval-seeking

*"Is this code good?"* returns "yes, here are four strengths and one minor suggestion." Useless. The same diff sent with *"spot the over-engineering, be skeptical"* or *"what's the most fragile assumption here?"* gets three real issues and an honest call on which to fix first. The model is a great critic when given a refutation frame; useless as a self-grader.

**Rule:** never ask AI to evaluate its own work in a positive frame. The prompt template is *"refute / criticize / find the flaw,"* not *"review."* The word "review" anchors the model on validation.

## 10. The bottleneck moved from typing to observability

A year ago the slow part was *writing the code*. Now the slow part is *knowing what the system is doing in production*. AI types as fast as I can think; it doesn't help me see whether the thing I shipped is actually working under real traffic. Every project I run hits this — stock-advisor (is the model actually beating SPY in live trading?), the eng-agent (is the tool router picking the right tool 95% of the time?), the catalog pipeline at $dayjob (is throughput holding above SLO on the slow shard?).

**Rule:** observability is now the limiting factor, not code volume. Time saved on writing the feature goes into instrumenting it — the log line, the metric, the dashboard panel that tells me whether it's working without me asking.

## 11. Project conventions are mine; AI defaults to generic

AI doesn't know your codebase's idiom. It defaults to the median pattern from its training set — generic names, conventional file layouts, framework-default folder structures. The first time you let it scaffold without a constraint, it produces a perfectly average codebase that looks nothing like the rest of your project. After three of those, the codebase has two competing styles and a confused junior engineer.

**Rule:** name the convention in the prompt. *"Repository interfaces live in `app/`, implementations in `infra/`. Use the existing `UserRepository` as the template."* The model will follow the convention precisely once it's named. It will never infer one from osmosis.

---

## The meta-lesson

The pattern under all ten is the same: **AI raises the cost of being vague and lowers the cost of being specific.** A loose prompt produces plausible-looking output that quietly diverges from what you wanted. A specific prompt — with a named constraint, a named convention, a named failure mode to avoid — produces output that's often immediately usable.

The skill that compounds isn't prompt-engineering tricks. It's the discipline of *knowing what you actually want* clearly enough to say it in one sentence. The model is now fast enough that the bottleneck is, and will keep being, the clarity of your intent. Everything in this post is a different angle on the same root cause.
