# ThreeSteps — decisions.md (Resolved Decisions Log)

This file exists to prevent re-litigating decisions and to avoid “looping” on already settled topics. When something here changes, we treat it as an explicit new decision.

---

## 1) Project workflow decisions

### 1.1 GitHub push procedure (this environment)
- **Use HTTPS + PAT** for `git push`.
- Do **not** attempt SSH deploy key pushes from this environment (SSH to GitHub times out here).
- Do **not** attempt browser-based GitHub login/edits unless explicitly requested.

Security note:
- If a PAT is pasted into chat, treat it as exposed and rotate/revoke it after use.

---

## 2) Roles, primitives, and governance

### 2.1 People and identity
- People on the network are called **followers**.
- Identity is built around **did:peer** (and aligned with Willow/Iroh + meadowcap).

### 2.2 Circles
- Circles are **publicly present and discoverable** (street-corner model).
- Circle governance can be **owned** or **shared**.

### 2.3 Forums (indexing layer)
- **Circles are created only in the 3S follower app.**
- **Forums are created only on Conscia nodes.**
- Forums are the primary mechanism for **indexing/listing** circles.

### 2.4 Chats
- Owned chat: creator is the owner (unless shared chat).
- Shared chat:
  - moderators are equal and can recruit each other
  - no exclusive owner/persistence custodian
  - **last moderator out triggers deletion** via a **tombstone** event

---

## 3) Visibility and publishing

### 3.1 Author scope per content item
Authors can choose:
- **Exclusive / endocircular** (circle members only)
- **Public / circular**
- **Global / extracircular**

### 3.2 Circle owner ceiling (“localized circle”)
- Circle owners can **localize** a circle, preventing member content from going global via that circle even if an author selects “global”.

### 3.3 Forum ceiling (public, non-authenticated surfacing)
- When content is surfaced through a forum (Conscia public surface), effective reach is the intersection of:
  1) author scope
  2) circle owner ceiling
  3) forum owner indexing/surfacing policy

---

## 4) Wallets, vouchers, and mutual aid

### 4.1 Wallet types
- We avoid framing 3S wallets as “private wallets”.
- We need multiple wallet modes:
  - **personal wallet** (default; can seed the follower feed)
  - **circle wallet** (communal; defined when circle economics are designed)

### 4.2 Wallet → feed + notifications
- Wallet event types that auto-post will evolve over time.
- Each event type is configurable by the follower:
  - whether it auto-posts
  - which predefined visibility targets it uses
  - whether it triggers notifications
  - controlled via Sync Settings (offline-safe, precedence-aware)

### 4.3 Vouchers
- Vouchers can be posted anywhere.
- Vouchers can be claimed by anyone who satisfies the voucher author’s requirements.

---

## 5) Conscia and monetization

### 5.1 Conscia federation
- Anyone can deploy a Conscia node and pay for their own hosting.
- Followers can federate Conscia nodes at will.

### 5.2 3S managed Conscia hosting (business model)
- 3S can offer managed Conscia hosting while preserving decentralization:
  - follower uses their own cloud credentials/billing
  - 3S charges a management fee
  - provisioned via OpenTofu automation

### 5.3 Indexing tiers (proposal direction)
- Consider **metadata indexing** as free/baseline.
- Consider **content indexing** as paid (resource + sensitivity).

### 5.4 Advertising direction (P2P)
- Circles/forums may disable hiding ads (cost to membership).
- Advertising can be tied to content (“ad-gated” content) where viewing the ad unlocks access, subject to governance and authorship rules.
- “Sponsored” must be clearly labeled.

---

**Docs navigation**  
[Docs index](./README.md) • [Progress log](./progress.md) • [Interview hub](./interview/interview.md) • [Specs index](./spec/README.md) • [Product index](./product/README.md) • [UI index](./ui/README.md) • [Tech index](./tech/README.md) • [Project README](../README.md)

