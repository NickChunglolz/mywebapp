---
title: "Building Claude Code agents that don't waste your context"
date: "2026-06-18"
summary: "Lessons from claude-toolkit: why agents should default to terse, why most skills should be deleted, and what 'lazy' means when an LLM is doing the work."
tags: ["claude-code", "agents", "tooling"]
---

I run [claude-toolkit](https://github.com/NickChunglolz/claude-toolkit) — a personal marketplace of Claude Code agents and skills I use every day. After a few months of iterating, here's what I keep coming back to.

## Agents are not microservices

The first instinct is to spawn an agent for everything: a planner agent, an executor agent, a reviewer agent, a "researcher" agent for any question that takes more than one tool call. Resist it. Each agent has its own context window, its own system prompt overhead, and its own latency. Most "let me delegate this" moments are really "let me grep this in one tool call and stay in the main loop."

My rule: **spawn a subagent only when the task is parallelizable, the output is large enough to clutter main context, or it requires a fundamentally different system prompt (e.g. an adversarial reviewer).**

## Skills should be deleted, not added

Skills are slash commands. They're cheap to write and cheaper to forget about. After six months you have 40 of them, you remember 5, and the rest are dead weight that still ship in every session as instructions the model reads.

Once a month I run `/audit-overhead` — a skill that scans my agents/skills/memory for bloat and proposes cuts. The first run deleted a third of what I had. It's a real-world example of why I make agents propose, not apply: I want to read the diff and say yes.

## Lazy means writing less code

The "ponytail" mode I run in is a deliberate counterweight to LLMs' instinct to over-build. The ladder:

1. Does this need to exist? (YAGNI)
2. Does the stdlib do it?
3. Does the platform do it natively?
4. Does an already-installed dependency do it?
5. Can it be one line?
6. Only then: minimum code that works.

Sounds obvious, but the difference between an LLM that asks these questions and one that doesn't is the difference between a 12-line PR and a 400-line one.

## What I'd build next

A skill that watches my Jira board and pre-loads the right context before I switch tickets. A planner that doesn't try to break every task into 10 subtasks. An agent that knows when to give up and ask me instead of trying three more things.

The throughline: every agent should make the developer's day shorter, not longer.
