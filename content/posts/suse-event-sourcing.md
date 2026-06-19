---
title: "Event sourcing for security operations at SUSE"
date: "2026-06-19"
summary: "Why event sourcing fit a security product better than CRUD ever did — and the parts of Axon, Spring Boot, and OpenTelemetry that earned their keep."
tags: ["event-sourcing", "axon", "spring-boot", "security"]
---

At SUSE I worked on the security side — NeuVector and the services around it. Somewhere in year one I led an internal push to event-source a chunk of the security-operations stack. Java 17, Spring Boot, Axon, OpenTelemetry. This is the short version of why and what I learned.

## Why ES fit a security product

Security tools have a property most CRUD apps don't: **the audit log is the product**. Compliance asks for it. Incident response lives in it. "Who set this policy, when, and from where" is not a footnote — it's the feature.

In a CRUD model that audit log is bolted on. You write to a row, then you write to an `audit_events` table, and you hope the two stay in sync. They don't, eventually. Someone runs a manual SQL fix at 2am and the audit trail quietly disagrees with reality.

Event sourcing inverts that. The events **are** the state. The current view of a policy, a rule, an exception — those are projections derived from the event stream. The audit log isn't a side effect of writing; writing **is** appending to the audit log.

For a security product that match-up is the whole game.

## What we built

The shape was unsurprising once we landed on it:

- **Axon aggregates** for the security-operations domain (policies, exceptions, rule lifecycle). Command in, event out, state derived.
- **Projections per consumer** — one for the operator UI, one for compliance export, one for the alerting pipeline. Each one rebuildable from the event log.
- **Spring Boot** as the boring container. Nothing fancy.
- **OpenTelemetry** end-to-end. Trace IDs flowed from command through aggregate through projection update. When a rule didn't show up where someone expected, you could follow it.

The non-obvious win was the projection-per-consumer shape. Different audiences want different views of the same events. Stop trying to make one read model serve all of them and the system gets calmer.

## What surprised me

- **The event schema is the real API.** Once you publish an event, every projection downstream depends on it. Renaming a field is a migration, not a refactor. Treat the schema like you'd treat a public REST contract — version it, document it, deprecate it on a clock.
- **Replay is debugging.** When a projection is wrong, the move isn't to patch the table — it's to delete the projection and replay. That habit took a quarter to build. Once we had it, "the dashboard looks weird" stopped being a 4-hour investigation.
- **OTel paid for itself the moment something went async.** Without traces, an event handler that quietly throws somewhere is a needle in a multi-service haystack. With traces, you click.

## What I'd do differently

- **Pick the aggregate boundaries with the operator's mental model, not the database's.** Our first cut followed table shapes. The second cut followed how a security engineer thinks about a policy lifecycle. The second cut shipped twice as fast.
- **Don't event-source everything.** A read-only reference table doesn't need a command bus. Reach for ES where the audit trail is load-bearing; reach for plain CRUD where it isn't.

## The takeaway

Event sourcing isn't the right answer for a typical web app. It's the right answer when the history of changes is more valuable than the current state — which, for a security product, it almost always is. Axon takes most of the plumbing off your plate; the schema discipline is what you actually have to learn.
