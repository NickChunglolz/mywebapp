---
title: "Shipping a side project E2E with AI in 2026 — and the parts AI can't save you from"
date: "2026-06-26"
summary: "A real arc: Vue 2 scaffold → Next.js 16 cockpit → live on Amplify with a Gemini chatbot. The fast parts were faster than I expected. The slow parts were exactly where I expected them to be — and where AI confidently led me down the wrong path."
tags: ["claude-code", "ai-engineering", "aws", "side-projects"]
---

This is the third weekend of a personal portfolio rewrite. By the end of it the site you're reading was live, the chatbot in the corner was streaming Gemini responses, and I had four merged-and-reverted PRs documenting the exact way AWS Amplify Hosting eats your lunch with secrets. Here's how I'd start a project end-to-end with an AI pair today, and what I had to stop trusting it on.

## How I actually start

Forget "type a prompt and review a PR." The flow that works for me now:

1. **One paragraph of intent, not a spec.** "Take the Vue 2 portfolio in this repo and turn it into a Next.js 16 site with a cockpit-HUD aesthetic and a chatbot in the corner that can talk about my work." No file list, no component breakdown. The model is faster at picking structure than I am at writing one.
2. **Let it propose the scaffold.** I read the diff, not the plan. If I disagree with a choice (Tailwind v4 over CSS modules, App Router over Pages), I push back inline on the diff.
3. **Ship the boring path first.** Routing, Tailwind, type-checking, deploy target — get all of that green before adding a single hero animation. Most "stuck" moments later are really "stuck because the deploy wasn't green to start with."
4. **Add one delightful thing per session.** The robot in the corner, the boot-loader, the CountUp stats. These are the moments AI is at its best — concrete, scoped, instantly visible.

That got me from `git clone` to "Next.js skeleton on localhost" in an hour. From there it's a series of one-session-per-feature loops.

## What was genuinely faster

- **Boilerplate.** The MDX-rendered blog you're reading was 40 minutes of work including the `[slug]` route, frontmatter parsing, and styling. I wrote zero React by hand.
- **Refactors I'd never bother with manually.** Splitting the chat panel out of the layout, extracting `lib/persona.ts` for the system prompt, moving stats out of JSX into typed constants. Each one was a 90-second ask.
- **Reading other people's code.** "Here's an Amplify build log, what does it say?" beats reading the log myself, every time.
- **Naming.** The single thing I still find the most fatiguing in coding. AI suggests three, I pick one, move on.

## What AI got confidently wrong

This is the part that matters.

When the chatbot wouldn't read my Gemini API key on Amplify, the model and I burned **four merged-and-reverted PRs** chasing the wrong path. The arc:

1. Set the key as an Amplify **Secret** (sounds right — it's a credential).
2. Add a `preBuild` wrapper that parses `process.env.secrets` JSON into `.env.production`.
3. It silently bakes `NONE`.
4. Suspect the wrapper. Rewrite the wrapper. Same result.
5. Suspect the YAML quoting. Rewrite again. Same result.
6. **Finally** read the actual log line — the `$secrets` blob was empty because the Amplify service role had no `kms:Decrypt`. The wrapper was always fine.
7. Grant the IAM. Still doesn't work — turns out **Amplify Hosting SSR doesn't auto-inject console env vars into the Lambda runtime**. You have to bake them into `.env.production` at build time so Next.js loads them on boot.
8. Move the value from Secret → Environment variable. Add one `echo "GEMINI_API_KEY=$GEMINI_API_KEY" >> .env.production`. Ship.

The whole detour was avoidable. The cost wasn't the code — it was that every "what about this guide that says X" the model and I read was *almost right*: it conflated Gen 1 and Gen 2, it called Environment variables "secrets" colloquially, it gave a fix for a Lambda-direct invocation flow when I was on Hosting SSR. AI is faster than me at writing — and just as fast as me at being wrong with confidence.

## Lessons I'm taking forward

**Verify the assumption before fixing the symptom.** The single most valuable line I wrote in that whole dance was `console.log("baked:", Object.keys(s).join(",") || "NONE")`. It proved which layer was broken in 30 seconds. Without it I'd still be rewriting wrappers. Whenever an AI suggests a fix, ask: *what one log line proves the bug is where you think it is?*

**The lazy version is the right version, and the model will not propose it.** I needed someone — myself — to ask "do you actually need this to be a Secret? It's the same SSM encryption either way, just a different UI surface." For a one-developer portfolio there's no shoulder-surfer. Most security ceremonies on side projects are theater. The model will happily build the secure-by-default fortress; it won't ask whether you need the fortress.

**Doc-sounding text is the most dangerous output.** When the model produces a numbered "to fix this on AWS, do steps 1 through 5" it sounds authoritative. Most of the time it is. The 10% of the time it isn't, it costs you a day. Read it with the same skepticism you'd read a Stack Overflow answer from 2019.

**Platform quirks are still the long pole.** Code generation is 10x. Local iteration is 5x. Deployment debugging on managed platforms? Maybe 1.5x. The bottleneck moved, but it didn't disappear.

**Ship the lazy version and question it in the same PR.** I should have shipped the plain Environment variable on day one and then asked "is the Secret feature worth the IAM dance for this app?" Instead I built the wrapper, found the IAM gap, fixed it, found the Lambda-runtime gap, fixed *that*, then realized the answer was always to delete the wrapper. The wrong question, well-engineered, is still the wrong question.

## What I'd do differently next time

Start the project by writing down — in a comment in the repo, not in chat — the **three things this app actually needs to be secure about**. For this portfolio: don't leak the Gemini key to the browser, don't commit it, don't let it sit in build logs. That's the whole list. The Amplify Secrets feature solves a problem I didn't have.

The model will follow whatever ambient definition of "right" the docs and the prompt collectively imply. Pinning down what *enough* looks like for this specific project, at the start, saves more time than any clever scaffold.

And run the deploy on day one. Always. Before the hero animation, before the chatbot, before the boot loader. If the platform is going to hate you, you want it to start hating you while the surface area is small.
