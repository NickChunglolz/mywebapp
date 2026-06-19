---
title: "DDD and SAGA for 200K passengers a day"
date: "2026-06-19"
summary: "Lessons from architecting the Taiwan High-Speed Rail booking platform at IBM Consulting — where event-driven microservices stop being a buzzword and start being the only thing that works."
tags: ["ddd", "saga", "event-driven", "microservices"]
---

For three years at IBM Consulting in Taipei I led full-stack delivery on the Taiwan High-Speed Rail booking platform. Roughly 200K passengers book through it on a normal day. Spikes — Chinese New Year, long weekends — are an order of magnitude worse. You can't ship a "we'll fix it later" architecture into that.

## Why DDD wasn't optional

A booking is not a row. It's a small saga: search → hold → confirm → pay → ticket → notify, with a real-world clock running the whole time and a refund path running in reverse. The domains don't share a database; they share a contract.

We carved the system along the bounded contexts that already existed in the business:

- **Scheduling** owns the timetable and seat inventory.
- **Reservation** owns holds and confirmations.
- **Payment** owns the money path and refunds.
- **Notification** owns the SMS/email side effects.

Every team owned their database, their schema, and their deploy. Anyone who wanted to read another team's data went through an event or an API, not a SQL join. Painful at first. Saved us every time inventory changed shape.

## SAGA, not 2PC

The naive booking flow is a distributed transaction. The honest version is a SAGA:

1. Hold seats (Reservation).
2. Charge card (Payment).
3. Issue ticket (Reservation).
4. Notify (Notification).

Each step has a compensating action: release the hold, refund the card, void the ticket. If step 2 fails, you undo step 1. If step 4 fails, you don't undo — the ticket is valid, you retry the notification.

The thing nobody tells you about SAGA is that **the compensating actions are the system**. Designing them up front (instead of bolting them on after the first incident) is the difference between a robust booking flow and a Slack channel full of `#refund-stuck` tickets.

## What I'd do differently

- **Idempotency keys earlier.** We added them in year two. Should have been day one.
- **Replay tooling first, dashboards second.** When something fails, you want to replay the event stream against a fixed service, not stare at a Grafana panel.
- **Don't share the event schema with the UI.** We did, briefly. The frontend started caring about internal state transitions, and refactoring a service became a frontend migration.

## The takeaway

DDD and SAGA aren't architectural decoration. They're load-bearing for any system where the business has more than one verb. The Rail platform survives spikes because the contracts are small, the failure modes are designed, and the compensations are first-class.

When somebody asks me "should we use SAGA," the answer is usually: you're already using one — it's just hidden inside a try/catch nobody trusts.
