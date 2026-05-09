# ThreeSteps — Indexing (Metadata vs Content)

This document defines “indexing” in ThreeSteps: how circles and content become discoverable, and how Conscia nodes can expose non-authenticated public surfaces while respecting author and governance permissions.

See also: [Forums](./forums.md) • [Visibility](./visibility.md) • [Discovery](./discovery.md) • [Monetization](../product/monetization.md) • [Project README](../../README.md)

---

## 1. Key decisions (from interview)

- **Circles are created only in the 3S follower app.**
- **Forums are created only on Conscia nodes.**
- Forums are the primary way circles are indexed/listed.
- Conscia nodes may generate **non-authenticated public content** from their own local storage.
- All public indexing/surfacing must respect follower-authored capabilities and restrictions.

---

## 2. What “indexing” can mean

Indexing is not one thing. We distinguish:

### 2.1 Metadata indexing (directory)
Index *about* a thing, such as:
- circle name, type, description, icon
- forum name, description
- tags/categories
- “how to request access / join”

This enables discovery without necessarily exposing content.

### 2.2 Content indexing (searchable content)
Index the content itself, such as:
- post titles/bodies
- media captions
- excerpts/teasers
- full-text search indexes

This is much more sensitive and resource-intensive.

---

## 3. Permission intersections (3D model)

To surface follower-authored content outside authenticated membership contexts (e.g., on a Conscia public web surface), we apply layered permissioning.

### 3.1 The three “locks”

For a given content item to be surfaced publicly, we require:

1) **Author setting** (per item): author chooses scope (endocircular / circular / extracircular)  
2) **Circle owner setting** (per circle): circle can be localized or published outward (caps reach)  
3) **Forum creator setting** (per forum): forum owner/creator decides what is surfaced/indexed via that forum

Working rule:
- Effective public surfacing is allowed only if **all three layers permit it**.

---

## 4. Monetization idea: “free metadata, paid content indexing” (proposal)

To align with the mission and fund infrastructure:
- **Metadata indexing** can be offered as a free baseline service (directory-style discovery).
- **Content indexing** can be offered as a paid add-on (resource-intensive + more sensitive).

This allows:
- broad discovery without paywalls
- optional paid amplification/search for those who want it

We must ensure paid indexing does not become “surveillance ads”; it should be transparent and follower-controlled.

---

## 5. Open questions

- Do Conscia nodes host a public web UI for forums, or only an API?
- What does “content indexing” mean at minimum: teaser excerpts only, or full text search?
- How do we prevent spam while keeping discovery open?

---

**Docs navigation**  
[Docs index](../README.md) • [Specs index](./README.md) • [Interview hub](../interview/interview.md) • [Vision](../vision.md) • [Product index](../product/README.md) • [UI index](../ui/README.md) • [Tech index](../tech/README.md) • [Project README](../../README.md)
