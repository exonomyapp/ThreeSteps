# ThreeSteps — Vision

ThreeSteps is a decentralized, privacy-first social media application designed for Catholics to practice and share their faith in **total privacy**, including in environments with **limited, intermittent, or no internet connectivity** (e.g., missionary work).

The defining requirement of ThreeSteps is to avoid, in every aspect, the concept of a centralized server that exercises control over user content. Instead, ThreeSteps is built on decentralized P2P technologies that support **direct point-to-point connections**, including communication via **blind peer relay** when direct connectivity is not possible.

See also: [Interview](./interview/interview.md) • [Technology](./tech/tech.md) • [Tech index](./tech/README.md) • [Project README](../README.md)

## 1. Mission

ThreeSteps enables Catholics—especially those operating in sensitive environments—to:

- Share personal and private information safely
- Teach and learn catechism
- Support children as they progress through key sacraments

…all while relying on technology that is private by default and resilient to poor connectivity.

## 2. Product concept (what “social media” means here)

ThreeSteps is “social” in the sense of **relationships, guidance, and formation**, not in the sense of viral reach or public broadcasting.

Primary formation focus: supporting children through the three sacraments:

1. Baptism
2. First Communion
3. Confirmation

Note: The traditional ordering varies (e.g., in some contexts Confirmation may occur earlier). ThreeSteps supports **profile-based settings** to determine the order and progression flow presented to a user or family.

## 3. Guiding principles

### 3.1 Resilient under limited connectivity
The app remains usable when:
- connections are sporadic
- bandwidth is low
- a user is offline for extended periods

Sync and messaging gracefully degrade and recover.

### 3.2 Author-controlled content
Control of content belongs to the author(s). The design emphasizes:
- local-first storage
- explicit sharing imperatives
- cryptographic access control aligned with user intent

## 4. Target users & contexts

- Missionaries in areas with unreliable connectivity
- Families and catechists supporting children’s formation
- Parish groups or small faith communities requiring private coordination
- Users in regions where religious practice may require discretion

## 5. Core capabilities (initial scope)

### 5.1 Identity & profiles
- Profiles that can express formation context (e.g., sacrament order preference)
- Relationship model for families, sponsors, catechists, mentors

### 5.2 Secure sharing
- Private messages and group threads
- Sharing of text, media, and formation resources
- Fine-grained control over who can access what

### 5.3 Formation journeys
- A structured view of a child’s progress through sacrament-related learning goals
- Supportive interactions: encouragement, reminders, Q&A, guidance, reflection prompts

### 5.4 Offline-first operation
- Compose and store content locally
- Queue outbound messages/updates for later delivery
- Conflict-aware sync that prioritizes author intent and consistency guarantees we define

## 6. Architecture direction (high-level)

ThreeSteps is built on decentralized P2P technologies featuring:
- direct point-to-point connectivity when possible
- blind peer relay for indirect connectivity paths

Key implications:
- Local device storage is the “source of truth” for a user’s data.
- Sharing is mediated by cryptographic keys rather than server-side permissions.
- Network membership and discovery avoid central points of control.

This file intentionally describes *direction*, not implementation commitments; specific protocol choices and threat models are defined in later documents.

## 7. Platforms & experience

ThreeSteps focuses on:
- **Mobile application** (primary)
- **Desktop application** (secondary) with a different UI, but the same underlying app and user data model

The experience feels coherent across platforms while respecting differing workflows (e.g., desktop for longer writing, organizing resources, or administration).

## 8. Success criteria (what “good” looks like)

- Users can communicate and share formation materials privately without relying on a central content server.
- The app remains functional and trustworthy under limited connectivity.
- Families/catechists can clearly support sacrament progression in the order appropriate to their context.
- The system is understandable: users can tell who can see what, and why.

## 9. Open questions (to define next)

- Threat model: what adversaries and risks are in scope (local device seizure, traffic analysis, infiltration, etc.)?
- Data model: what content types exist and what are their sharing semantics?
- Key management and recovery: how do users regain access if they lose a device?
- Discovery and relay: how do peers find each other without central control?
- Moderation and abuse: how do we handle harmful behavior while preserving decentralization and privacy?

---

**Docs navigation**  
[Docs index](./README.md) • [Interview hub](./interview/interview.md) • [Vision](./vision.md) • [Specs index](./spec/README.md) • [Product index](./product/README.md) • [UI index](./ui/README.md) • [Tech index](./tech/README.md) • [Project README](../README.md)
