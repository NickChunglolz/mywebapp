---
title: "Shipping projects E2E with AI in 2026 — and the parts AI can't save you from"
date: "2026-06-25"
summary: "A real arc from one weekend (Vue 2 scaffold → Next.js 16 cockpit → live on Amplify with a Gemini chatbot) and the same patterns I'm running at the day job on a catalog pipeline doing 100M+ items a day. The fast parts were faster than I expected. The slow parts were exactly where I expected them to be."
tags: ["claude-code", "ai-engineering", "aws", "engineering-practice"]
---

This is the third weekend of a personal portfolio rewrite. By the end of it the site you're reading was live, the chatbot in the corner was streaming Gemini responses, and I had four merged-and-reverted PRs documenting the exact way AWS Amplify Hosting eats your lunch with secrets.

The story is a side project. The lessons are the same ones I'm running at $dayjob, where I work on a catalog pipeline that processes 100M+ items a day. The shape of the problem changes — code review, on-call, blast radius, reviewers who'll catch what I miss — but the way AI helps and the way it misleads are surprisingly consistent across both.

Here's how I start a project end-to-end with an AI pair today, side or work, and what I had to stop trusting it on.

## How I actually start

Forget "type a prompt and review a PR." The flow that works for me now:

1. **One paragraph of intent, not a spec.** "Take the Vue 2 portfolio in this repo and turn it into a Next.js 16 site with a cockpit-HUD aesthetic and a chatbot in the corner that can talk about my work." At work the equivalent is the goal at the top of the ERD, not the implementation plan. The model is faster at picking structure than I am at writing one.
2. **Let it propose the scaffold.** I read the diff, not the plan. If I disagree with a choice (Tailwind v4 over CSS modules, App Router over Pages), I push back inline on the diff.
3. **Ship the boring path first.** Routing, Tailwind, type-checking, deploy target — green before adding a single hero animation. Same rule at work: get the new service deployed to staging with a stub endpoint before writing the real handler. Most "stuck" moments later are really "stuck because the deploy wasn't green to start with."
4. **Add one delightful (or risky) thing per session.** The robot in the corner. The boot loader. Or at work: the one new query plan, the one new index, the one new compaction strategy. Concrete, scoped, instantly visible.

That got me from `git clone` to "Next.js skeleton on localhost" in an hour. From there it's a series of one-session-per-feature loops. The cadence is the same on a work feature; the loop is just longer because there's code review and a staging dance in between.

## What was genuinely faster

- **Boilerplate.** The MDX-rendered blog you're reading was 40 minutes including the `[slug]` route, frontmatter parsing, and styling. At work, the equivalent wins are protobuf scaffolds, repository-pattern CRUD, the third instance of a feature flag wrapper.
- **Refactors I'd never bother with manually.** Splitting the chat panel out of the layout, extracting `lib/persona.ts`, moving stats out of JSX into typed constants. At work: renaming a domain object across 80 files, moving a handler from one service to another, normalizing 15 slightly-different error wrappers. The kind of thing you put off for a quarter.
- **Reading other people's code.** "Here's an Amplify build log, what does it say?" beats reading the log myself, every time. Same trick on a 600-line SQL query plan, a noisy CI failure, a Datadog flame graph.
- **Naming.** Still the most fatiguing thing in coding. AI suggests three, I pick one, move on.

## What AI got confidently wrong

This is the part that matters.

When the chatbot wouldn't read my Gemini API key on Amplify, the model and I burned **four merged-and-reverted PRs** chasing the wrong path:

1. Set the key as an Amplify **Secret** (sounds right — it's a credential).
2. Add a `preBuild` wrapper that parses `process.env.secrets` JSON into `.env.production`.
3. It silently bakes `NONE`.
4. Suspect the wrapper. Rewrite the wrapper. Same result.
5. Suspect the YAML quoting. Rewrite again. Same result.
6. **Finally** read the actual log line — `$secrets` was empty because the Amplify service role had no `kms:Decrypt`. The wrapper was always fine.
7. Grant the IAM. Still doesn't work — **Amplify Hosting SSR doesn't auto-inject console env vars into the Lambda runtime**. You have to bake them into `.env.production` at build time so Next.js loads them on boot.
8. Move the value from Secret → Environment variable. Add one `echo "GEMINI_API_KEY=$GEMINI_API_KEY" >> .env.production`. Ship.

The whole detour was avoidable. The cost wasn't the code — it was that every "what about this guide that says X" the model and I read was *almost right*: it conflated Gen 1 and Gen 2, it called Environment variables "secrets" colloquially, it gave a fix for a Lambda-direct invocation flow when I was on Hosting SSR.

I've seen the exact same failure mode at work, just dressed up differently: a confidently wrong fix for an SQS visibility-timeout issue that referenced a config flag from a version we weren't on; a "definitive" recipe for a Postgres index hint that didn't apply to our query planner. AI is faster than me at writing — and just as fast as me at being wrong with confidence. The professional context doesn't filter this; if anything, the doc-sounding output blends in better when the rest of the room is also speaking in docs.

## Lessons I'm taking forward

**Verify the assumption before fixing the symptom.** The single most valuable line I wrote in that whole dance was `console.log("baked:", Object.keys(s).join(",") || "NONE")`. It proved which layer was broken in 30 seconds. The same pattern wins on production debugging: before reaching for a fix, write the one log line or one metric that proves the bug is where you think it is. Whenever an AI suggests a fix, ask: *what one signal would prove this is actually the layer that's broken?*

**The lazy version is often the right version, and the model will not propose it.** I needed someone — myself — to ask "do you actually need this to be a Secret? It's the same SSM encryption either way." For a one-developer portfolio there's no shoulder-surfer; most security ceremonies on side projects are theater. **At work the calculus is the opposite**: you have reviewers, an attack surface, a security team, an audit trail. The lazy version is still usually right, but the bar for "lazy" moves: dropping a Secret to an env var on a portfolio is fine; doing it on a service that handles payment data is not. The skill is knowing which mode you're in, and the model defaults to neither — it builds whatever ambient definition of "right" the docs imply.

**Doc-sounding text is the most dangerous output.** When the model produces a numbered "to fix this on AWS, do steps 1 through 5" it sounds authoritative. Most of the time it is. The 10% of the time it isn't, it costs you a day. Read it with the same skepticism you'd read a Stack Overflow answer from 2019. This applies harder at work, not less — production stakes raise the cost of every confidently-wrong suggestion.

**Platform quirks are still the long pole.** Code generation is 10x. Local iteration is 5x. Deployment debugging on managed platforms (Amplify, EKS, Dataflow, Snowflake, name your poison)? Maybe 1.5x. The bottleneck moved, but it didn't disappear. Plan project schedules around the platform pain, not the code volume.

**Ship the lazy version and question it in the same PR.** I should have shipped the plain Environment variable on day one and asked "is the Secret feature worth the IAM dance for this app?" Instead I built the wrapper, found the IAM gap, fixed it, found the Lambda-runtime gap, fixed *that*, then realized the answer was always to delete the wrapper. The wrong question, well-engineered, is still the wrong question. This applies word-for-word to design docs too: the most expensive mistake is a perfectly-executed solution to a problem you didn't have.

## What I'd do differently next time

Start the project by writing down — in the repo, not in chat — the **three things this app actually needs to be right about**. For the portfolio: don't leak the Gemini key to the browser, don't commit it, don't let it sit in build logs. That's the whole list. The Amplify Secrets feature solves a problem I didn't have.

At work the list is longer and the items are different (data correctness, throughput SLOs, blast radius, on-call ergonomics), but the exercise is the same: name what *enough* looks like before you start. The model will follow whatever ambient definition of "right" the docs and the prompt collectively imply. Pinning down what *enough* looks like up front saves more time than any clever scaffold.

And run the deploy on day one. Always. Before the hero animation, before the chatbot, before the boot loader. At work, before the real handler, before the schema migration, before the new metrics. If the platform is going to hate you, you want it to start hating you while the surface area is small.
