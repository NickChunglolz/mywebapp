---
title: "About — the one-pager"
date: "2026-06-29"
summary: "Who I am, what I'm shipping, how I work, what I won't do. The intro version, honest and short."
tags: ["personal", "about"]
---

![Nick — character sketch](/avatar.png)

Hi — I'm Nick. Backend engineer at **Caper.ai** (Instacart), working on a catalog pipeline that processes 100M+ items a day. Before that: a high-speed rail booking platform at **IBM**, an event-sourced security product at **SUSE**. About ten years of writing code other people depend on.

I run side projects in parallel with the day job — usually three or four in flight. Right now: **stock-advisor** (LightGBM models trying to beat SPY, with three trained variants and a backtest harness I trust more than I trust the predictions), **eng-agent** (a personal CLI agent I use between Jira tickets), and this site (Vue 2 → Next.js 16 over a weekend, mostly via AI-written diffs I reviewed but didn't type).

## How I work

Honestly, kind of messily. I rarely plan a session before starting one — I push something half-formed out and react to it. Most of what I'd defend in my work took ten commits to get to that shape, and the first draft is almost never right. I've stopped expecting it to be.

I run three or four projects in parallel because I get bored on any single thread for too long. The cost is that nothing moves at maximum speed; the upside is that when one project hits a wall I switch instead of staring at it. A surprising number of bugs solve themselves when you walk away for two days.

I delete more than I add. Almost every PR I open shrinks the file I'm editing. Single-project assumptions, explicit "not doing" lists, features I haven't bothered to scaffold — those are choices, not gaps. The default move when I read any diff is *can this be shorter*.

I skip the ERD on side projects all the time, and then lose half a day to something the ERD would have caught — an Amplify Secrets quirk, an IAM gap, a rate-limit assumption. The upfront cost feels real; the cost of skipping feels theoretical, right up until it isn't. I keep doing it anyway. I write about it partly so future-me has to look at it.

If a paragraph I wrote sounds like a LinkedIn post or a generic engineering blog, I rewrite it — even if it's technically right. The bar isn't "is this correct," it's "does this sound like me." This section took four attempts.

## How I think about AI

AI is a sparring partner, not a tool. It drafts, critiques, parses logs, scaffolds. I keep three things: *what to build*, *what to assert*, and *when "enough" is reached*. The bottleneck moved from typing to clarity-of-intent and observability — and that's where my attention now goes.

The rest of how I work with AI is across three posts: [the method](/blog/shipping-with-ai), [the rigor](/blog/quality-and-testing-with-ai), [the scar tissue](/blog/lessons-coding-with-ai).

## What I won't do

- **Optimize for sounding good over being honest.** Sharpe 0.57 is "useful as a UI dissent badge," not "exciting baseline performance."
- **Add scaffolding for a future I'm not sure I want.** YAGNI is a principle, not a slogan.
- **Pretend AI did more or less than it actually did.** My posts call out exactly what I delegate vs hold. Nothing performative.
- **Bundle changes that should be separate.** "Add feature X" and "clean up Y" are never the same PR. The cleanup gets ignored otherwise.

## What I'm looking for

Interesting problems where the domain is rich enough to need real engineering, the team is honest about tradeoffs, and shipping > planning past a threshold. Bonus points if there's an ML or data-pipeline edge — that's where my recent work has been the most fun.

If any of that lands, the contact form on the [home page](/) works. Otherwise — thanks for reading.
