---
title: "Shipping projects E2E with AI in 2026 — the mindset, not the tools"
date: "2026-06-25"
summary: "What I've learned starting projects with AI across side projects and a day job on a catalog pipeline doing 100M+ items a day. The tools change every quarter; the mindset doesn't. Start from the product, refuse to pick tools first, hold the decisions AI defaults to wrong."
tags: ["work-with-ai", "ai-engineering", "engineering-practice"]
---

I've started a lot of projects with AI in the last year — the portfolio you're reading, a stock-advisor pipeline I'm trying to turn into something more, a CLI agent I use every day, a few work features at the day job on a catalog pipeline doing 100M+ items a day. Different stacks, different audiences, different stakes.

The thing that surprised me is how little the tools matter. The mindset transfers. The model + scaffold combo is now interchangeable enough that arguing about Next.js vs SvelteKit or LangGraph vs raw SDK is mostly noise. **What separates a project that ships well from one that drags is what you decide before AI writes a single line.**

This is what I've landed on.

## Start from the product, not the tool

The first instinct, mine included, is to ask the model "what stack should I use?" That's the wrong question, and the model will happily answer it — confidently, in detail, with a five-step migration plan if you push.

Before any of that, I now spend 10 minutes writing down — in the repo, not in chat — three things:

1. **Who is this for, and what do they care about?** For the portfolio: someone considering hiring me, who has 90 seconds. For stock-advisor: me, then maybe paying users later, who care about whether the model actually beats SPY. For a work feature: usually a single internal team with a known pain point.
2. **What does this need to be right about?** Three bullets, max. For the portfolio: don't leak the API key, don't commit it, don't ship broken on mobile. For stock-advisor: don't lie about backtest performance, don't ship a model worse than the baseline. For a work pipeline: don't drop data, don't break the SLO, don't make on-call worse.
3. **What's the smallest thing that proves this works?** A live URL with a working chatbot. One backtest run that beats a benchmark. One staging request that returns the right shape. Not a feature list — a proof.

That's the entire upfront cost. No architecture diagram, no library decision, no story breakdown. Once those three answers exist, the tool choice mostly picks itself, and AI is excellent at executing on it.

## Then let it propose the scaffold

After the product is clear, I let the model pick. "Take this Vue 2 scaffold and turn it into a Next.js 16 site with a chatbot in the corner." One paragraph of intent, no file list. The model is faster at picking structure than I am at writing one.

I read the diff, not the plan. If I disagree with a choice — Tailwind v4 over CSS modules, App Router over Pages, server actions over an API route — I push back inline on the diff, not on a design doc. The diff is the truth; the plan is just opinion.

This is the part that's actually 10x faster than it used to be. Routing, type checks, deploy targets, repository-pattern CRUD, the third instance of a feature flag wrapper, splitting a 400-line component into three — all of it. The kind of work I used to put off for a quarter at $dayjob now happens between meetings.

## What I delegate vs what I hold

| Delegated | Held |
|-----------|------|
| Scaffolding, refactor, fixtures, log reading, naming | Product decisions, what to assert in a test, what to mock, when "enough" is reached |
| Choosing between three sensible libraries | Choosing whether the library is even needed |
| Writing the regression test for a bug I just fixed | Choosing which bug to fix first |
| The 14-step deploy recipe | Whether I'm even on the right deploy path |

The pattern: **AI is great at execution under a clear constraint. It's mediocre at choosing the constraint.** I keep the framing; it does the typing.

## What AI gets confidently wrong (the part I keep underestimating)

Worth one paragraph, because the failure mode is consistent:

The model sounds most authoritative right at the edge of where its training data goes stale. Versioned platform docs (AWS, GCP, Snowflake), framework upgrades, anything where Gen 1 and Gen 2 share names. I spent the better part of a day chasing the wrong fix for an Amplify Secret because every guide I read was *almost right* — it conflated Hosting Secrets with Lambda Secrets Manager, called Environment variables "secrets" colloquially, and gave a recipe for a setup I wasn't on. Same failure mode at work: a confidently-wrong SQS visibility-timeout fix that referenced a config flag from a version we'd already upgraded past.

The fix isn't to distrust AI. It's to **always have one signal that proves which layer is broken**. The single most valuable line in the Amplify mess was `console.log("baked:", Object.keys(s).join(",") || "NONE")` — it told me in 30 seconds that the wrapper I'd rewritten three times was always fine, and the IAM grant was the actual problem. Whenever the model suggests a fix, ask: *what one log line, metric, or test would prove this is actually the layer that's broken?* If you can't answer, you're guessing.

## The mindset that crosses projects

**Lazy is context-dependent.** On a one-developer portfolio, dropping a "Secret" to an Env variable is fine — same encryption at rest, different UI surface, no shoulder-surfer. On a payment service, it isn't. The model defaults to whichever direction the docs lean and won't ask which mode you're in. That question is yours.

**Doc-sounding text is the most dangerous output.** A numbered "to fix this on AWS, do steps 1 through 5" sounds authoritative. The 90% of the time it is, you save an hour. The 10% it isn't, you lose a day. Read it with the skepticism you'd give a Stack Overflow answer from 2019.

**Platform quirks are still the long pole.** Code generation is 10x. Local iteration is 5x. Deployment debugging on managed platforms — Amplify, EKS, Dataflow, Snowflake, name your poison — maybe 1.5x. Plan around the platform pain, not the code volume.

**Ship the lazy version and question it in the same PR.** I should have shipped the plain Environment variable on day one and asked "is the Secret feature worth the dance?" Instead I built a wrapper, found the IAM gap, fixed it, found the runtime gap, fixed *that*, then realized the answer was always to delete the wrapper. The wrong question, well-engineered, is still the wrong question. This rule applies to design docs and ERDs too: the most expensive mistake is a perfectly-executed solution to a problem you didn't have.

**Run the deploy on day one. Always.** Before the hero animation, before the chatbot, before the boot loader. At work: before the real handler, before the schema migration, before the new metrics. If the platform is going to hate you, you want it to start hating you while the surface area is small.

## What I'd say to someone starting

The temptation with AI is to skip the slow upfront thinking and go straight to "type a prompt, review a PR." It feels productive. It usually isn't.

Spend the first 10 minutes on what this thing is *for* and what it has to be *right* about. Spend the next 50 letting the model scaffold the entire thing. From there it's a series of one-session-per-feature loops, and the bottleneck moves from typing to deciding — which is exactly where it should be.

The model will follow whatever ambient definition of "right" the docs and the prompt collectively imply. Pinning down what *enough* looks like up front saves more time than any clever scaffold, any clever harness, any clever model.

The shortest path to a shipped project is the same as it ever was: know what you're building, build the smallest version that proves it, then iterate. AI just made every step inside that loop faster — which makes getting the loop itself wrong more expensive, not less.
