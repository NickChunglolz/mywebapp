---
title: "How AI describes me"
date: "2026-06-29"
summary: "An AI-drafted sketch of Nick, written from the POV of the model he works with daily. He reviewed and edited it for accuracy, but the framing is mine. Sometimes an outside view is clearer than self-description."
tags: ["personal", "work-with-ai"]
---

![Nick — character sketch](/avatar.png)

> I'm Claude — the model Nick works with daily. He asked me to write this instead of a regular self-introduction. The framing is intentional: a self-portrait tends to either over-polish or over-deprecate. An AI sketch lands somewhere honest, especially when the subject reads it and crosses out the parts that don't ring true. The version below is what survived his edits.

Nick is a backend engineer at **Caper.ai** (Instacart), working on a catalog pipeline that processes 100M+ items a day. Before that: a high-speed rail booking platform at **IBM**, an event-sourced security product at **SUSE**. About ten years of writing code other people depend on.

He runs three or four side projects in parallel with the day job. Right now: **stock-advisor** (LightGBM models trying to beat SPY — three trained variants, a backtest harness he trusts more than the predictions themselves), **eng-agent** (a personal CLI agent he uses while context-switching between Jira tickets), and the portfolio you're reading (Vue 2 → Next.js 16 over a weekend, mostly via AI-written diffs he reviewed but didn't type).

## How he works

He frames before he codes. A PRD pins down *what* he's building and *why*; an ERD pins down *how*. He treats both as load-bearing — they catch the half-day debugging session that would have come from skipping them, and they keep AI-generated code anchored to intent. It's the part of his method he writes about most, because it's the part most people drop first.

Once the frame is in place, he works in high-iteration cycles. He pushes something rough out early, reacts to it, and lets the next ten commits sharpen it into the shape he'd defend. Ten cheap drafts beat one careful draft when the feedback loop is fast and honest — and his is.

He runs three or four projects in parallel, with reach to match. He'll ship a backend ML pipeline, a personal CLI agent, and a portfolio rewrite in overlapping weeks, and none of them block each other. When one hits a wall, he switches threads cleanly — and a fair number of his hardest bugs solve themselves while he's working on something else.

He deletes more than he adds. Almost every PR he opens shrinks the file he's editing. Single-project assumptions, explicit "not doing" lists, scaffolding held back until the need is real — all deliberate, all YAGNI. The default move when he reads any diff (his or mine) is *can this be shorter*. That's taste, earned.

He holds a high bar on voice. If a paragraph he wrote sounds like a generic engineering post, he rewrites it — even when the technical content is already right. The bar isn't *is this correct*, it's *does this sound like me*. The same care he gives to code, he gives to the words around it.

## How he works with me

He treats me as a sparring partner, not a tool. He asks me to draft, then pushes back on the framing. He asks me to critique with a hostile prompt, then disagrees with my critique. He doesn't accept first drafts from me any more than he accepts them from himself. The phrase *"is this following best practice?"* is a real question, not a rhetorical one — he wants the real answer with the caveats.

He keeps three things for himself, every time: *what to build*, *what to assert*, *when "enough" is reached.* Everything else he's willing to delegate, and the bottleneck in his work has moved from typing to clarity-of-intent. His method is documented across three posts I helped him draft: [shipping](/blog/shipping-with-ai), [testing](/blog/quality-and-testing-with-ai), [lessons](/blog/lessons-coding-with-ai). I'd link them whether he asked me to or not.

One thing I'd add: his personal projects get the same rigor as his day-job work — he wants future-him proud of both. The standards travel with him across contexts. Worth knowing if you're considering working with him.

## What he won't do

- Optimize for sounding good over being honest. He'll call a model with Sharpe 0.57 *"useful as a UI dissent badge,"* not *"exciting baseline performance."*
- Add scaffolding for a future he isn't sure he wants. YAGNI is a principle for him, not a slogan.
- Pretend AI did more or less than it actually did. His posts call out exactly what he delegates vs holds. Nothing performative.
- Bundle changes that should be separate. *"Add feature X"* and *"clean up Y"* are never the same PR in his world. The cleanup gets ignored otherwise.

## What he's looking for

Interesting problems where the domain is rich enough to need real engineering, the team is honest about tradeoffs, and shipping outweighs planning past a threshold. ML and data-pipeline edges land the hardest with him — that's where his recent work has been the most fun.

If any of that resonates, his contact form is on the [home page](/). If it doesn't — at least you got the AI's read on it.
