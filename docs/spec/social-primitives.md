# ThreeSteps — Social Primitives (Spec)

This document defines the “social media primitives” that exist in ThreeSteps at a product level (independent of any code). These primitives apply in an offline-first context and are designed to work within the circles model.

See also: [Interview](../interview/interview.md) • [Circles](./circles.md) • [Visibility](./visibility.md) • [Project README](../../README.md)

---

## 1. Canonical primitives (initial set)

ThreeSteps includes all of the following primitives:

1) **Profiles** (followers)
1.1) **Follower feed** (a public social feed scoped to a follower)
2) **Circles** (public containers with members)
3) **Circle chat** (one per circle)
4) **Direct messages (DMs)** (1:1 chat)
5) **Feed posts** (within a circle)
6) **Comments** (on feed posts)
7) **Reactions** (on posts, comments, and chat messages)
8) **Stories / ephemeral content**
9) **Search**
10) **Forums** (groups of circles; may be published)
11) **Wallet activity feed items** (wallet events that can seed the follower feed)

This list describes *what the product supports*, not what is currently implemented.

---

## 2. Notes and constraints (to be specified)

For each primitive, we will define in later specs:
- **Data model** (fields, IDs, attachments)
- **Default visibility** (circle-scoped vs DM-scoped vs public-by-consensus)
- **Retention & deletion** (especially for stories/ephemeral)
- **Offline behavior** (what can be created offline; conflict resolution)
- **Indexing/searchability** (what is searchable locally; what can be shared via sync)

---

## 3. Open questions

- Are “stories” circle-scoped only, or can they be DM-scoped too?
- Are “feed posts” required to be in circles, or can there be follower-to-follower posts?
- What is the minimal viable search (local-only first vs shared indexes)?
- What is the minimal forum model (local-only organization vs publishable catalog)?

---

**Docs navigation**  
[Docs index](../README.md) • [Specs index](./README.md) • [Interview hub](../interview/interview.md) • [Vision](../vision.md) • [Product index](../product/README.md) • [UI index](../ui/README.md) • [Tech index](../tech/README.md) • [Project README](../../README.md)
