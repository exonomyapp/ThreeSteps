# ThreeSteps — Interview (Specs in Progress)

This is the “hub” document for the iterative interview that drives ThreeSteps’ specifications. It tracks:

- the questions (that you *should* be asked, even if you wouldn’t think to ask them)
- your answers
- my follow-up notes and decisions
- links to deeper-dive documents where we elaborate and lock decisions

See also: [Vision](../vision.md) • [Tech vision](../tech/tech.md) • [Tech index](../tech/README.md) • [Project README](../../README.md)

---

## How we’ll use this interview

We work in cycles:
1) We answer a small set of questions.
2) We write/adjust one or more spec documents.
3) We keep going until:
   - I have no remaining questions about **what** needs to be built, and
   - you have no remaining questions about **how** it will be built.

This document stays readable and navigable: the **main body** holds the hierarchical interview outline; the **footer navigation** shows the doc panel structure.

---

## 0. Document map (what we still need to write)

Beyond `vision.md` and the tech docs we already have, these are the main document families typically needed for a project like ThreeSteps.

### Product & scope
- `docs/product/prd.md` — product requirements (initial release vs v1 vs later)
- `docs/product/personas.md` — roles: parents, catechists, sponsors, missionaries, etc.
- `docs/product/user-stories.md` — user stories + acceptance criteria
- `docs/product/requirements.md` — functional + non-functional requirements (offline, latency, storage, power)
- `docs/product/glossary.md` — consistent terminology (Conscia, DID, meadowcap, “journey”, “formation”, etc.)

### UX / UI design
- `docs/ui/information-architecture.md` — nav model + screen map
- `docs/ui/user-flows.md` — key journeys (onboarding, adding a child, formation progress, sharing)
- `docs/ui/design-system.md` — typography, color, spacing, components
- `docs/ui/accessibility.md` — accessibility principles and constraints
- `docs/ui/copy-tone.md` — voice/tone rules for UI and docs

### Data & protocol specs (implementation-facing)
- `docs/spec/data-model.md` — entities, relationships, local storage model
- `docs/spec/sync.md` — Willow/Iroh sync semantics, conflict rules, retention, quotas
- `docs/spec/identity.md` — did:peer lifecycle, device binding, key rotation, recovery
- `docs/spec/capabilities.md` — meadowcap usage patterns, delegation, verification rules
- `docs/spec/sharing.md` — “explicit sharing imperatives” model + UX consequences
- `docs/spec/threat-model.md` — adversaries, risks, out-of-scope, mitigations
- `docs/spec/transport.md` — WebRTC, TURN/STUN, relay, discovery constraints

### Release & operations (still “docs only”, but crucial)
- `docs/release/versioning.md` — version rules, changelog rules, migration policy
- `docs/release/android-updates.md` — in-app updater + F-Droid publishing workflow
- `docs/release/keys-and-signing.md` — Android keystore, release keys, signing policy

### End-user documentation (what users will read)
- `docs/user/getting-started.md`
- `docs/user/privacy-and-safety.md`
- `docs/user/offline-use.md`
- `docs/user/formation-guide.md` — how “ThreeSteps” supports the sacraments journey
- `docs/user/troubleshooting.md`

We’ll create these gradually as the interview uncovers decisions and needs.

---

## 1. Interview outline (with placeholders)

Each subsection follows this structure:
- **Questions**
- **Your answers** (to be filled in)
- **Decisions / notes**
- **Links** (to deeper documents)

### 1.1 Users, roles, and relationships
**Questions**
- Who are the primary roles at launch (parents, catechists, sponsors, missionaries, youth, clergy)?
- What relationships exist between roles (e.g., parent ↔ child, catechist ↔ class, sponsor ↔ candidate)?
- What’s the minimum viable “social graph”?

**Your answers**
- All of the above (parents/children, catechists/classes, sponsors/mentors, missionaries), plus more roles to be defined.
- We refer to people on the app as **followers** (not “users”).
- Primary organization units are **circles** (not groups/orgs), and circles have **members**.

**Decisions / notes**
- Treat “roles” as a combination of:
  - *circle membership semantics* (what type of circle a follower is in), and
  - *capabilities* (meadowcap) that define what actions are permitted.
- Next: define circle types and the minimum capability set per type.
  - Circles have two governance types: **owned** (default) and **shared** (study/prayer groups).
  - See glossary for baseline definitions.
  - Shared-circle moderation spirit: **all moderator actions are revocable by any moderator**.

**Links**
- `docs/product/glossary.md`
- (create later) `docs/product/personas.md`
- (create later) `docs/spec/circles.md`

### 1.2 Formation model (Baptism / First Communion / Confirmation)
**Questions**
- What does “progress” mean (lessons completed, meetings attended, reflections logged, approvals)?
- Who can mark progress and under what capability rules?
- How does the “order preference” work in practice?

**Your answers**
- TBD

**Decisions / notes**
- TBD

**Links**
- (create later) `docs/spec/data-model.md`
- (create later) `docs/product/user-stories.md`

### 1.3 Content types & sharing imperatives
**Questions**
- What content types exist (messages, posts, prayer intentions, resources, media, checklists, events)?
- What are the default sharing imperatives for each type?
- What is *never* shared (even accidentally)?

**Your answers**
- In scope: all listed types (messages+attachments, formation milestones, resource library, events/reminders).
- Catholic-specific content primitives are **out of scope for now** (they are not part of “social media” features yet).
- We need all the core “social media primitives” (see next sections). Nothing exists yet—we are defining what will be built.

**Decisions / notes**
- Next: define the “social media” content primitives precisely (what is a post vs a message, whether a feed exists, what gets indexed/searchable).

**Links**
- (create later) `docs/spec/sharing.md`
- `docs/spec/social-primitives.md`
- `docs/spec/visibility.md`

### 1.8 Social media primitives (definition of “what exists”)
**Questions**
- Which primitives exist: feed posts, stories/ephemeral, direct messages, circle chat, comments, reactions, profiles, search?

**Your answers**
- We need all of those primitives.
- Clarification: “list what exists” means “list the primitives that will exist in the product,” not what exists in code right now.

**Decisions / notes**
- Next: define each primitive’s:
  - data model (what fields exist)
  - defaults (visibility, retention, offline rules)
  - UX surface (where it appears in the UI)

**Links**
- `docs/spec/social-primitives.md`

### 1.9 Visibility model (circles vs chats)
**Questions**
- Are circles private by default or public by default?
- What is the relationship between a circle and its chat?
- Can chats exist outside circles, and can they be public?

**Your answers**
- A circle is **not** a private concept.
- A circle is like a group of people gathering on a street corner: it is **publicly present**, **discoverable**, and “anyone walking by can hear them talking.”
- A chat is private to its **members** by default.
- Each circle has **one chat**, and it is part of a **public circle**.
- Any chat outside of a circle can be made public with **100% consensus**.
  - Consensus is among **moderators**, not members.
  - A dissenting moderator can veto while they remain a moderator.
  - A dissenting moderator can be removed only by **consensus of the remaining moderators**, at which point their veto is removed as well.

**Decisions / notes**
- Next: define what “100% consensus” means operationally (who counts, timeouts, revocations, and how it behaves offline).

**Links**
- `docs/spec/visibility.md`

### 1.10 Circle types & creation
**Questions**
- Which circle types exist initially?
- Does the app come with pre-created circles?
- Can followers create custom circle types?

**Your answers**
- Circle types are centrally managed lists distributed over Willow (updates eventually sync).
- ThreeSteps (3S) loads with **no circles** by default.
- Family is the first recommended type, but any follower can create a circle from provided options.
- Followers can choose **Other** to create a new kind of circle.

**Decisions / notes**
- Next: define how “Other” works (naming rules, icon rules, capability defaults, and whether types can be renamed later).

**Links**
- `docs/spec/circle-types.md`

### 1.11 Forums (organizing circles)
**Questions**
- What is a forum in ThreeSteps?
- Who can create a forum and how is it organized?
- What does it mean to publish a forum?
- How does 3S “highlight circles” via public forums?

**Your answers**
- Add **forums** (personally created, but can be published).
- A forum is a **group of circles** to help followers keep circles organized.
- 3S also creates **public forums** where we list/highlight circles.
- Published means public: non-members can see the list of circles inside.
- Forums have chats that are identical to circle chat (unless we later identify a strong reason to differ).
- Highlighting:
  - Inclusion in a forum is itself a form of highlighting (that is the forum’s purpose).
  - Followers can pay for “professional advertising grade” highlighting (paid promotion).
  - Monetization is tied to funding Conscia nodes and related infrastructure.

**Decisions / notes**
- Next: define forum governance, visibility, and discovery rules (especially for “public forums” created by 3S).

**Links**
- `docs/spec/forums.md`
- `docs/product/monetization.md`

### 1.12 Wallets, vouchers, and payments
**Questions**
- What is a “wallet” in ThreeSteps, and what privacy model does it have?
- Which payment processors are supported and how do followers connect them?
- What is a voucher and what problem does it solve?

**Your answers**
- 3S facilitates follower-owned payment processor accounts (starting with at least 3 providers, including Stripe or equivalents).
- Followers can also create a wallet to receive crypto.
- Add a new content type: **voucher** (non-monetary mutual aid; more like an IOU offering a product or service).
- Voucher declares value using amount + currency chosen by its author; may optionally add a payment requirement.
- Wallet is part of the social-media paradigm and is **not private**; it functions like a treasury/public purse for doing the Lord’s work.
- 3S has its own Stripe account/wallet/etc. just like any other follower, and every follower can have their own as well.
- Provider coverage: keep Stripe, but we should add providers that cover large regions where Stripe is not the dominant provider; support followers globally.
- Wallet visibility and disclosure are author-controlled via Settings (robust settings and profile pages); followers are gradually taught to take on more P2P responsibilities.
- Vouchers can be posted anywhere.
- “100% consensus” always applies only to moderators; moderators are selected by the chat’s creator.

**Decisions / notes**
- Next: define wallet visibility (what is public vs member-only), and define the voucher lifecycle (issue, accept, fulfil, dispute, revoke).
- Next: specify how real money is handled:
  - processor handles fiat (wallet is not a bank account and does not “hold” money)
  - crypto lands directly in crypto wallets; ThreeSteps tracks references/metadata where possible
 - Wallet visibility is follower-controlled; we will ship safe defaults and let followers opt into additional transparency.

**Links**
- `docs/product/monetization.md`
- `docs/spec/wallets.md`
- `docs/spec/vouchers.md`
- `docs/product/privacy-monetization.md`
- `docs/product/payment-providers.md`
- `docs/ui/settings-and-profile.md`
- `docs/spec/data-model.md`
- `docs/spec/sync.md`
- `docs/spec/capabilities.md`
- `docs/spec/discovery.md`

### 1.13 Chats governance (owned vs shared)
**Questions**
- Who owns a chat, and how are moderators chosen?
- What is a shared chat and how is it governed?

**Your answers**
- The creator of a chat is always its owner unless it’s a shared chat.
- Moderators are always selected by the chat’s creator.
- In a shared chat:
  - all moderators are equal
  - moderators can recruit each other at will
  - the creator is not its owner
  - anyone can destroy it
  - it is neither ephemeral nor temporary, yet nobody has exclusive control of its persistence
  - last moderator out triggers deletion (tombstone); a shared chat cannot exist without moderation

**Decisions / notes**
- Next: define “destroy” precisely (tombstone semantics, revocability, history retention).
  - Decision: shared chat deletion uses a tombstone event when the moderator set becomes empty.

**Links**
- `docs/spec/chats.md`

### 1.4 Identity & onboarding (did:peer + OAuth bridge)
**Questions**
- How does a new user create or import a did:peer?
- What OAuth providers matter (if any), and what do they enable (contacts, calendar, email, community platforms)?
- When do we bind OAuth tokens to an existing did:peer vs create a new did:peer midstream?

**Your answers**
- TBD

**Decisions / notes**
- TBD

**Links**
- (create later) `docs/spec/identity.md`
- (create later) `docs/spec/capabilities.md`

### 1.5 Offline-first rules
**Questions**
- What is guaranteed to work offline?
- What can be queued?
- What is the conflict policy for edits?

**Your answers**
- TBD

**Decisions / notes**
- TBD

**Links**
- (create later) `docs/spec/sync.md`
- (create later) `docs/user/offline-use.md`

### 1.6 Updates & distribution (F-Droid + in-app P2P)
**Questions**
- What’s the expected cadence of releases?
- Should updates be “recommended” vs “required”?
- How do we seed updates into the network (Conscia, trusted peers, both)?

**Your answers**
- We support both **F-Droid** and an **in-app updater**.
- Everything is designed offline-first.
- Documentation itself is distributed via Willow/Iroh so it can be centrally authored/managed while being rapidly distributed in a decentralized way.
  - End-user documentation is authored and signed exclusively by the project.

**Decisions / notes**
- Next: define how docs are versioned, signed, discovered, and updated offline (docs distribution is part of the product, not just the repo).

**Links**
- `docs/tech/android.md`
- (create later) `docs/release/android-updates.md`
- (create later) `docs/release/versioning.md`
- (create later) `docs/user/getting-started.md`

### 1.7 UI principles & navigation
**Questions**
- What is the top-level navigation model (tabs, drawer, hybrid)?
- What are the first 3 screens we must design?
- What does “desktop has a different UI but same app” mean (admin console vs writing-focused vs classroom view)?

**Your answers**
- TBD

**Decisions / notes**
- TBD

**Links**
- (create later) `docs/ui/information-architecture.md`

---

## 2. Interview log (chronological)

We’ll append dated entries here as we go so you can see progress over time.

### 2026-05-07 — Interview round 1 (baseline framing)
- Roles: all core roles (parents/children, catechists/classes, sponsors/mentors, missionaries) + more later.
- Naming: “followers”, “circles”, and “members” are canonical terms.
- Scope framing: no “MVP”; the app evolves over time.
- Content: all baseline content types + Catholic-tradition content primitives.
- Offline-first: everything; docs distribution via Willow/Iroh as well.

Links:
- [Glossary](../product/glossary.md)

### 2026-05-07 — Interview round 2 (circles governance + docs trust)
- Circles: support the initial circle types list, and research additional “trending” circle types in Catholic tradition.
- Governance: two circle kinds:
  - Owned circles (default): single owner + delegated subordinates.
  - Shared circles: prayer/study groups with multiple equal moderators; any moderator can act; any moderator can revoke another moderator’s action.
- Catholic-specific content primitives: not needed yet; outside current “social media” scope.
- Docs trust: follower-facing docs are authored and signed exclusively by the project.

Links:
- [Glossary](../product/glossary.md)

### 2026-05-07 — Recovery note (lost UI answers)
- Shared-circle moderation: **all actions are revocable by any moderator** (“that’s the spirit of sharing”).

### 2026-05-07 — Interview round 3 (primitives, visibility, circle types, delegates)
- Primitives: all core social primitives exist (feed posts, stories, DMs, circle chat, comments, reactions, profiles, search).
- Visibility: circles are not private; chats are private to members by default; each circle has one chat; chats outside circles can become public by 100% consensus.
- Circle types: centrally managed list distributed via Willow; app starts with zero circles; family is recommended; “Other” allows custom types.
- Owned circles: owners exclusively can remove followers; delegates can mute; other circle capabilities are equally shared.

Links:
- [Social primitives](../spec/social-primitives.md)
- [Visibility](../spec/visibility.md)
- [Circle types](../spec/circle-types.md)

### 2026-05-07 — Interview round 4 (public circles + forums + consensus details)
- Public circle meaning: circles are publicly present/discoverable (street-corner model; passersby can hear).
- Forums: followers can create forums to organize circles; forums can be published; 3S creates public forums that highlight circles.
- “100% consensus” (making out-of-circle chats public): unanimous among moderators; veto persists while moderator remains; moderator removal requires consensus of remaining moderators.
- Owned circles: “other circle capabilities” are shared by **owner + delegates** (not all members).

Links:
- [Visibility](../spec/visibility.md)
- [Forums](../spec/forums.md)

### 2026-05-07 — Interview round 5 (wallets, vouchers, and payments)
- Payment processors: support at least 3 providers; Stripe is one option.
- Crypto: followers can create crypto wallets to receive crypto directly.
- Wallet: public/treasury-like; not a private wallet; part of the social media paradigm.
- Voucher content type: non-monetary mutual aid IOU for product/service; declares value; optional payment requirement.
- 3S itself is also a follower with its own payment accounts and wallet.

Links:
- [Monetization](../product/monetization.md)

### 2026-05-07 — Interview round 6 (wallet defaults, vouchers claim rules, chat governance)
- Wallet defaults: provide explicit safe-default profiles; follower can choose and change later.
- Vouchers: postable anywhere; claimable by anyone who satisfies author requirements.
- Chats: owned vs shared governance as described; moderators selected by creator; shared chat has no exclusive persistence owner.

Links:
- [Wallets](../spec/wallets.md)
- [Vouchers](../spec/vouchers.md)
- [Chats](../spec/chats.md)

### 2026-05-07 — Interview round 7 (delegation + Conscia federation)
- Data modeling: you delegate detailed data model decisions to me based on committed features.
- Sync/conflicts: you delegate inference to me; I will ask mission-driven questions case-by-case.
- Capabilities: you drive the feature set; I infer capability templates to achieve targets.
- Conscia: anyone can deploy their own Conscia node; Conscia is a community Swiss-army-knife passive supernode, extending real-world services via tools like OpenTofu; followers can federate Conscia nodes at will; discovery is multi-layer.

Links:
- [Data model](../spec/data-model.md)
- [Sync](../spec/sync.md)
- [Capabilities](../spec/capabilities.md)
- [Discovery & Conscia federation](../spec/discovery.md)

### 2026-05-07 — Interview round 8 (wallet types, global payments, layered visibility)
- Wallets: we need multiple wallet modes:
  - personal wallet (avoid “private wallet” wording); by default it seeds the follower’s public feed
  - circle wallet (communal), to be specified when circles economics are designed
- Payments: choose providers for global Catholic coverage (not western-only); focus on largest/most widely usable processors with APIs that empower followers.
- Visibility: publication is controlled by both creators and authors (“meaning levels”); neither side can force publication outside the agreed scope.

Links:
- [Wallets](../spec/wallets.md)
- [Feed](../spec/feed.md)
- [Visibility](../spec/visibility.md)
- [Payment providers](../product/payment-providers.md)

### 2026-05-07 — Interview round 9 (event-driven visibility + author-first moderation)
- Wallet/feed: wallet events that auto-post will evolve over time; each event type can be configured to:
  - auto-post to selected visibility targets
  - trigger push notifications to selected targets
  - be toggled in follower Sync Settings (“I sync, therefore, we are.”)
- Moderation philosophy: provide first-class moderation UX emphasizing shared communal responsibility; prioritize authorship; where useful allow multiple parties to express preferences without impinging on others.

Links:
- [Feed](../spec/feed.md)
- [Wallets](../spec/wallets.md)
- [Visibility](../spec/visibility.md)

### 2026-05-07 — Interview round 10 (visibility targets, circle publishing, sync settings clarification)
- Visibility targets: do not hard-cap target types; define targets by criteria and extend them over time to maximize follower autonomy/responsibility.
- Circle publishing vs authorship:
  - Circle creator can publish circle content outward via circle-level settings.
  - Authors can override to restrict their own content to circle members only.
  - If authors do not override, circle outward settings can allow non-members to view their content.
- Sync Settings: context/intent clarified — we need to decide whether sync controls are global defaults, per-target, per-event, or a combination.

Links:
- [Feed](../spec/feed.md)
- [Visibility](../spec/visibility.md)
- [Settings & Profile](../ui/settings-and-profile.md)

### 2026-05-07 — Interview round 11 (predefined targets, author scopes, sync-settings explainer)
- Visibility targets: only predefined types (closed set), documented; no arbitrary user-defined targeting predicates.
- Posts: author chooses scope per post:
  - exclusive/endocircular
  - public/circular
  - global/extracircular
- Circle owner: can “localize” a circle, preventing member content from going global via that circle even if an author selects global.
- Sync Settings: requested a document explaining the model with examples.

Links:
- [Visibility](../spec/visibility.md)
- [Sync Settings](../ui/sync-settings.md)

### 2026-05-07 — Interview round 12 (Conscia forums + indexing tiers + ad-gated content)
- Forums: establish forums as the indexing surface for circles; limit forum creation to Conscia nodes.
- Indexing: distinguish metadata indexing vs content indexing; consider metadata indexing as a free service while content indexing could be a paid service.
- Public web surfaces: Conscia nodes may generate non-authenticated public content from local storage, respecting layered permissions (author → circle owner → forum owner).
- Conscia business model: 3S can host/manage Conscia nodes using follower-owned cloud credentials/billing, charging a management fee; self-hosted Conscia is open source and generates no 3S revenue.
- Advertising: allow circle/forum creators to disable ad hiding (cost to membership) and allow ad-gated content tied to author-controlled items.

Links:
- [Indexing](../spec/indexing.md)
- [Forums](../spec/forums.md)
- [Conscia hosting model](../product/conscia-hosting.md)
- [Advertising model](../product/advertising.md)

---

**Docs navigation**  
[Docs index](../README.md) • [Interview index](./README.md) • [Vision](../vision.md) • [Specs index](../spec/README.md) • [Product index](../product/README.md) • [UI index](../ui/README.md) • [Tech index](../tech/README.md) • [Project README](../../README.md)
