---
title: "Syncing 100M+ items an hour: what the Caper catalog taught me"
date: "2026-06-19"
summary: "Replacing a legacy catalog pipeline with something that could keep up with 1,000+ stores and ~1M SKUs each. The hard part wasn't the volume — it was making it boring."
tags: ["distributed-systems", "catalog", "kotlin", "temporal"]
---

The catalog system I work on at Instacart's Caper.ai keeps every smart cart in every store in sync with what's actually on the shelves. Each store carries ~1M SKUs. Multiply that by 1,000+ stores and sync on an hourly cadence and you get the number that sounds scary on a resume: 100M+ item updates an hour.

The number is the punchline. The real story is the legacy pipeline we replaced.

## Why the old pipeline didn't scale

The previous system did the obvious thing: a single-batch sync per store, run sequentially, with one giant transaction per store. It worked when there were 50 stores. By the time we hit four digits, it was the bottleneck on every "why is price X wrong on cart Y" investigation.

Three things kept biting:

- **Coupling**: a slow retailer integration would block the queue behind it.
- **All-or-nothing transactions**: a single bad row failed the whole store's sync; operators got paged at 3am to find the row.
- **No backpressure**: when the upstream feed spiked, we hit the DB harder, not slower.

## What we built

The redesign is unromantic and that's the point:

- **Fan-out per store, per category** — the unit of work is small enough that one bad item kills one batch, not one store.
- **Temporal for the orchestration** — retries, timeouts, and visibility for free. We stopped writing scheduler code.
- **Backpressure at the source** — the workflow throttles itself off real DB latency, not a static rate.

The 90%+ speedup didn't come from picking a faster language or a fancier database. It came from making the unit of work small enough that nothing big could go wrong.

## The lesson I keep re-learning

Scale problems mostly look like coupling problems wearing a costume. When you can't push the system harder, the first thing to look at isn't the bottleneck — it's what's stuck behind the bottleneck.

The boring version of this post is: we cut transactions smaller and ran them in parallel. That's the whole architecture. Everything else is plumbing.
