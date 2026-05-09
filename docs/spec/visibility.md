# ThreeSteps — Visibility (Circles, Chats, and Publicness)

This document defines the visibility model: what is public vs private, and how that changes (including “100% consensus” publicness for chats outside circles).

See also: [Interview](../interview/interview.md) • [Circles](./circles.md) • [Social primitives](./social-primitives.md) • [Project README](../../README.md)

---

## 1. Core statements (from interview)

- A **circle is not a private concept**.
- A **chat is private to its members by default**.
- Each **circle has exactly one chat**.
- Chats outside circles *can* be made public with **100% consensus**.

Expanded meaning of “public circle” (street-corner model):
- Circles are **publicly present** and **discoverable**.
- A circle is like a group of people gathering on a street corner: “anyone walking by can hear them talking.”

---

## 2. Definitions (working)

### 2.1 Public circle
A circle whose existence and membership are not treated as “private by default.” This does not automatically mean its content is world-readable; it means the circle is a public container in the product model.

### 2.2 Private to members
Content visible only to members of the relevant container (circle members for circle chat; DM participants for DMs), by default.

### 2.3 Chat outside of a circle
A chat that is not attached to a circle container (e.g., an ad-hoc multi-party chat).

---

## 3. “100% consensus” publicness (spec to lock)

We will treat “make this chat public” (for chats outside circles) as a governance action that requires unanimous consent of the chat’s **moderators** (not members).

Rules from interview:
- A dissenting moderator can veto while they remain a moderator.
- A dissenting moderator can be removed only by **consensus of remaining moderators**, at which point their veto is removed.
- Moderators of an out-of-circle chat are selected by the chat’s creator.

See also: [Chats](./chats.md)

We still need to lock:
- **Who is a moderator for an out-of-circle chat**: how moderators are chosen and how that set is represented.
- **How consent is expressed**: explicit vote/approval events, signed by each member.
- **Timeouts**: what happens if a member is offline for a long time?
- **Revocation**: can “public” be reverted, and if so does it require 100% consensus again?
- **Offline-first semantics**: how the chat behaves before consensus is complete (e.g., remain private until unanimity is observed).

Until specified otherwise, the default rule is conservative:
- A chat remains private-to-members until 100% consent is achieved and verified.

---

## 4. Open questions

- Are circle feed posts public-by-circle-membership only, or public-to-non-members too?
- Is circle membership itself visible outside the circle?
- What is the meaning of “public” in a decentralized system (discoverable vs readable vs shareable)?

## 5. Layered visibility control (creator vs author)

From interview:
- Visibility is controlled by both **creators** and **authors** (“meaning levels”).
- A circle creator cannot force visibility on a post outside that circle if the author refuses.
- And vice versa: an author cannot force visibility outside that circle if the circle creator refuses.

Working interpretation:
- Container governance can define the *maximum* publication scope.
- Content authors control whether their content is published up to that maximum.
- Publication outside a container requires satisfying *both* container policy and author intent.

We will codify this per content type (posts, chat transcripts, voucher visibility, wallet feed items).

### 5.1 Circle creator “publishing the circle” vs author overrides

From interview:
- The follower posting is typically not worried about circle members; they are worried about the circle creator publishing the circle’s content outside the circle.
- Circle-level settings can allow the circle’s content to be visible to non-members (publish outward).
- An author can override the circle’s outward visibility by restricting their own content to circle members only.
- If an author does not override, their content can be visible to non-members according to the circle’s setting.

Working precedence (draft):
1) Circle outward visibility policy sets the default/maximum for what can be surfaced outside the circle.
2) Author policy can further restrict their own content (down to “members only”).

Open detail to lock:
- Can an author ever expand beyond the circle creator’s outward policy (e.g., “I want this public even if the circle is not published”)? Your current answer implies “no”.

### 5.2 Two settings: author scope + circle localization (decision)

Decision:
- We explicitly model **two settings**:
  1) **Author scope** (chosen per post)
  2) **Circle scope policy** (chosen by circle owner/creator)

Author scope values (terms from interview):
- **Exclusive (endocircular)**: members of the circle only
- **Public (circular)**: visible per circle’s outward publishing rules
- **Global (extracircular)**: author intends it to be global public

Circle scope policy values (minimum needed):
- **Published outward**: allows circular posts to be visible to non-members
- **Localized circle**: prevents any member content from going global via this circle; even if an author selects “global”, the circle policy limits reach to the circle (endocircular/circle-only effective reach)

Working effective rule:
- Effective reach = intersection of (author intent) and (circle owner policy ceiling).

### 5.3 Forum indexing ceiling (non-authenticated public surfaces)

When content is surfaced via **forums** (which live on Conscia nodes and may be viewable by non-authenticated audiences), there is an additional governance layer:
- the **forum creator/owner** decides what the forum indexes/surfaces.

Working rule for forum-based public surfacing:
- Effective reach = intersection of:
  1) author scope
  2) circle owner policy ceiling
  3) forum indexing/surfacing policy ceiling

See: [Indexing (metadata vs content)](./indexing.md)

## 6. Moderation philosophy (author-first, shared responsibility)

From interview:
- We want to offer followers a first-class experience as content moderators, emphasizing shared communal responsibility rather than power.
- We prioritize authorship.
- Where useful, we prefer giving *multiple parties* to an event ways to express preferences (for and against) so desires are satisfied maximally without impinging on others.

Implication for specs:
- Moderation actions should be modeled as revocable events where appropriate.
- UI should support “my view” vs “our view”:
  - e.g., a follower can hide content locally without deleting it globally,
  - while circles/forums can curate what they surface without forcing authorship changes.

---

**Docs navigation**  
[Docs index](../README.md) • [Specs index](./README.md) • [Interview hub](../interview/interview.md) • [Vision](../vision.md) • [Product index](../product/README.md) • [UI index](../ui/README.md) • [Tech index](../tech/README.md) • [Project README](../../README.md)
