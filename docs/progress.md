# ThreeSteps — Progress Log (What We’ve Accomplished)

This repository is being specified via an iterative interview process. The “code” is not the milestone yet—the docs are the source of truth.

## What’s in place now

### Documentation structure
- A navigable docs library with indexes for specs, product docs, UI docs, and tech docs.
- Robust footer navigation across documents to move around the library.

### Product concepts locked (so far)
- **Followers** are the canonical term for people on the app.
- **Circles** are publicly present/discoverable (street-corner model).
- **Owned vs shared governance** for circles and chats, including:
  - shared moderation where actions are revocable
  - shared chat deletion via tombstone when the last moderator leaves
- **Forums** are introduced as the primary indexing/listing mechanism for circles.
  - circles are created in the follower app
  - forums are created on Conscia nodes (indexing layer)

### Visibility and publishing model
- Author scope per content item: **endocircular (exclusive)**, **circular (public)**, **extracircular (global)**.
- Circle owner can **localize** a circle, capping outward/global publishing.
- Forum indexing adds an additional “ceiling” for non-authenticated public surfacing.

### Wallets, vouchers, and mutual aid
- Wallets are part of the social paradigm (not framed as “private wallets”).
- Planned wallet modes:
  - personal wallet (can seed follower feed)
  - circle wallet (communal; to be specified with circle economics)
- Vouchers as a mutual-aid content type:
  - postable anywhere
  - claimable by anyone satisfying author requirements

### Monetization directions (initial)
- Sponsored/highlighted placement (clearly labeled).
- Conscia managed hosting model: 3S can manage Conscia deployments using follower-owned cloud billing/credentials and charge a management fee.
- Indexing tiers proposal: free metadata indexing + paid content indexing (to be locked).
- P2P advertising model exploration (including ad-gated content concepts).

### Technical/spec scaffolding drafted
- Initial specs for:
  - data model
  - sync/conflict semantics
  - meadowcap capability templates
  - discovery and Conscia federation
  - feed + sync settings UX model (precedence-aware, offline-safe)

## Where to read next
- Start with the [Interview hub](./interview/interview.md)
- Then use the [Docs index](./README.md) to jump into Specs/Product/UI

---

**Docs navigation**  
[Docs index](./README.md) • [Interview hub](./interview/interview.md) • [Vision](./vision.md) • [Specs index](./spec/README.md) • [Product index](./product/README.md) • [UI index](./ui/README.md) • [Tech index](./tech/README.md) • [Project README](../README.md)

