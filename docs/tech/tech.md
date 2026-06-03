# ThreeSteps — Technology (Tech Vision)
This document describes the intended technical design for ThreeSteps as a decentralized, privacy-first application. It relies on end-user devices as first-class nodes and introduces Conscia nodes as always-on participants that provide enabling services without becoming content-controlling servers.
See also: [Interview](../interview/interview.md) • [Vision](../vision.md) • [Tech index](./README.md) • [Shared engine](./shared-engine.md) • [Project README](../../README.md)

## 1. Node types

### 1.1 User nodes
User nodes run on consumer hardware:
- mobile devices
- desktop devices

User nodes:
- author content
- hold local state as the primary source of truth
- participate directly in peer-to-peer transport and synchronization

### 1.2 Conscia nodes
Conscia nodes are also peer nodes, but they are:
- always on
- remotely managed (operations, upgrades, observability)

Conscia nodes exist to improve real-world usability under NAT, intermittent links, and constrained environments.

Key constraint: Conscia nodes do not control user content. They provide help, but they are not the canonical place where content lives.

## 2. Connectivity and reachability

ThreeSteps aims for direct device-to-device connectivity whenever possible.

When direct connectivity is not possible, Conscia nodes can provide services that help devices find each other and exchange updates reliably. The exact connection method can vary by platform and environment, but the user experience goals remain the same:

- devices connect directly when possible
- devices still exchange updates when direct connectivity is blocked
- users remain in control of what is shared

## 3. Discovery and introductions

ThreeSteps supports multiple ways for people to find circles, devices, and Conscia nodes, including local introductions (such as scanning a QR code) and out-of-band invites.

## 4. Data and synchronization

ThreeSteps follows an exocore-style local-first model:

- content is authored and stored on user devices
- updates propagate between peers as connectivity allows
- sharing and replication are driven by explicit user intent

## 5. Backup and recovery support

Conscia nodes can provide enabling services for backup and recovery workflows without holding the keys to user content.

## 6. Security posture (high-level)

- application payloads remain end-to-end encrypted between authorized endpoints
- Conscia nodes may observe the minimum operational metadata needed to run services, but should not be able to read user content
- access control is cryptographic and intent-driven

## 7. Identity and authorization

### 7.1 Primary identity: did:peer
ThreeSteps standardizes on did:peer as the primary identity model across platforms.

### 7.2 Meadowcap capabilities
ThreeSteps standardizes on meadowcap for decentralized capabilities and authorization.

---
**Docs navigation**  
[Docs index](../README.md) • [Interview hub](../interview/interview.md) • [Vision](../vision.md) • [Specs index](../spec/README.md) • [Product index](../product/README.md) • [UI index](../ui/README.md) • [Tech index](./README.md) • [Project README](../../README.md)
