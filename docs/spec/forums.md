# ThreeSteps — Forums (Spec)

Forums are a first-class organization primitive used to group circles so followers can keep their circles organized. Forums can also be published, and ThreeSteps (3S) itself creates public forums that highlight circles.

See also: [Interview](../interview/interview.md) • [Glossary](../product/glossary.md) • [Circles](./circles.md) • [Indexing](./indexing.md) • [Social primitives](./social-primitives.md) • [Project README](../../README.md)

---

## 1. Core statements (from interview)

- Forums are personally created, but can be published.
- A forum is a group of circles for organization.
- 3S creates public forums where circles are listed/highlighted.
- Circles are created only in the 3S follower app; forums are created only on Conscia nodes (indexing layer).

---

## 2. Working definition

A **forum** is a container that:
- has an owner/creator (initially)
- contains references to multiple circles
- can be private (personal organization) or published (discoverable)

Forums do not replace circles; they organize them.

## 2.2 Forums as indexing surfaces (Conscia-only)

Decision direction:
- Forums are the primary way circles are **indexed/listed**.
- Forums exist on Conscia nodes (including 3S-hosted Conscia and follower-hosted Conscia).
- Conscia nodes may expose non-authenticated public surfaces derived from forum state, but must respect the layered permission model.

See: [Indexing](./indexing.md)

## 2.1 Forum chat

Forums have chats that behave like circle chat, unless we later identify a strong reason to diverge.

---

## 3. Publishing model (to lock)

We still need to specify:
- What “published” means precisely:
  - discoverable only, or also readable?
  - can non-members see the list of circles inside?
  - can non-members request to join circles from the forum?
- Who can publish/unpublish:
  - owner only, or also delegates/moderators?
- Whether publishing is revocable and how that behaves offline-first.

---

## 4. 3S public forums (highlighting circles)

3S creates one or more public forums that “highlight” circles.

We still need to decide:
- Criteria: who gets highlighted and why (featured list vs chronological vs curated)
- Trust: these are “official” and project-authored/published
- Abuse resistance: how to prevent spam circles from being highlighted
- Offline distribution: how followers discover the public forums under limited connectivity

## 4.1 Interview decisions (current)

From interview:
- **Published means public**: non-members can see the list of circles inside a published forum.
- Any circle included in a forum is highlighted by inclusion (that is the forum’s purpose).
- Followers can pay for “professional advertising grade” highlighting (paid promotion) similar to mainstream listing services.
  - This ties directly to how 3S funds Conscia nodes and related infrastructure.

---

## 5. Open questions

- Can a circle appear in multiple forums?
- Can followers subscribe/follow a forum?
- Are forums hierarchical (forums containing subforums), or flat?
- Do forums have their own chat/feed, or are they purely an index?

---

**Docs navigation**  
[Docs index](../README.md) • [Specs index](./README.md) • [Interview hub](../interview/interview.md) • [Vision](../vision.md) • [Product index](../product/README.md) • [UI index](../ui/README.md) • [Tech index](../tech/README.md) • [Project README](../../README.md)
