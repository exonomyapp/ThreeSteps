# ThreeSteps — Discovery & Conscia Federation (Spec)

This document defines how followers, circles, forums, and Conscia nodes are discovered in a multi-layer P2P environment, including Conscia federation.

See also: [Tech vision](../tech/tech.md) • [Visibility](./visibility.md) • [Project README](../../README.md)

---

## 1. Conscia model (from interview)

- Anyone can spin up and deploy a Conscia node and pay for their own hosting.
- Conscia is a community “Swiss army knife” multimodal passive supernode.
- Conscia remains lightweight by registering/extending other services (via service workers on cloud providers using live credentials; e.g., OpenTofu).
- Followers can create their own Conscia nodes; we facilitate inter-Conscia communications via peer federation.
- Discovery works on multiple layers.

---

## 2. Discovery layers (draft)

### Layer A — Local proximity
Examples:
- QR codes
- local broadcast (Wi‑Fi / Bluetooth-style proximity)

Use cases:
- missionaries / limited connectivity onboarding
- “street-corner” circles in physical proximity

### Layer B — Direct peer introductions
Examples:
- follower shares a did:peer + endpoints out-of-band
- “invite” artifacts that can be carried offline

### Layer C — Conscia-assisted rendezvous
Examples:
- TURN/STUN
- relay-assisted introductions
- bootstrap rendezvous services (without storing content)

### Layer D — Federated Conscia network
Conscia nodes can peer with one another to improve:
- reachability
- propagation of public catalogs (forums, circle type catalogs, docs bundles)

---

## 3. What is discoverable (ties to “public”)

Circles and published forums are publicly present and discoverable.

We still need to decide whether “discoverable” includes:
- discoverable existence only (name + type), or
- discoverable membership list, or
- discoverable live endpoints for joining/observing

---

## 4. Trust and abuse resistance (to lock)

Key questions we must answer:
- How do followers decide which Conscia nodes to trust/use?
- Can anyone advertise a circle publicly, and how do we mitigate spam?
- Do we have “official” 3S-operated Conscia nodes and public forums, alongside community-run ones?

---

**Docs navigation**  
[Docs index](../README.md) • [Specs index](./README.md) • [Interview hub](../interview/interview.md) • [Vision](../vision.md) • [Product index](../product/README.md) • [UI index](../ui/README.md) • [Tech index](../tech/README.md) • [Project README](../../README.md)
