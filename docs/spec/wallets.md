# ThreeSteps — Wallets (Spec)

This document specifies wallets in ThreeSteps: their purpose, visibility model, and how they relate to real-money processors, crypto wallets, and voucher records.

See also: [Interview](../interview/interview.md) • [Monetization](../product/monetization.md) • [Vouchers](./vouchers.md) • [Project README](../../README.md)

---

## 1. Core intent (from interview)

- Every follower can have a wallet.
- 3S (as a follower) also has its own payment accounts and wallet.
- The wallet is part of the social paradigm. We avoid the term “private wallet”; followers may still interact with real private wallets externally.
- The wallet is not a bank account and does not “hold” fiat money:
  - fiat is processed/held by payment processors
  - crypto is received into actual crypto wallets
  - ThreeSteps stores metadata/references “to the extent possible”
- Wallet also stores/organizes voucher records.

Wallet types (planned):
- **Personal wallet** (follower wallet): exists first; its activity can seed the follower’s public social feed by default.
- **Circle wallet** (communal): required for circle-level communal features; to be specified when we design circle economics.

Personal wallet feed behavior:
- The set of wallet event types that auto-post is expected to evolve over time.
- Each wallet event type can be configured by the follower to:
  - auto-post (on/off)
  - choose visibility targets
  - choose whether to send push notifications to those targets
  - control propagation in Sync Settings (“I sync, therefore, we are.”)

---

## 2. Payment processor connections

Current direction:
- 3S supports at least **3** payment processors/providers at launch (Stripe is one).
- Followers can connect their own accounts with supported providers.
- In-app payment solutions are acceptable (Apple/Google, etc.), where relevant.

We need to specify:
- which processors are in the initial set (3+)
- whether each follower connects their own account vs uses a 3S platform account (or both)
- which payment methods each processor enables

---

## 3. Visibility model (to lock)

Wallet visibility is follower-controlled.

From interview:
- Authors have the final say over how their wallet information is presented publicly.
- Followers manage this via a robust **Settings** page (and separately, a **Profile** page).

### 3.1 What is configurable
We still need to specify which wallet fields are configurable (and at what granularity):
- amounts
- currencies
- payer/payee identity
- transaction memo/notes
- voucher details
- processor reference IDs

### 3.2 Safe defaults (recommended options)

Because ThreeSteps is offline-first and “public-circle” by design, a follower might accidentally publish sensitive financial metadata if defaults are too open. We should choose a conservative default while still honoring the “treasury/public purse” spirit.

Below are three viable default profiles; we can ship one as the default and let followers switch at any time.

#### Option A — “Personal (minimal) until configured” (Most protective)
Default behavior:
- Wallet exists, but displays **no amounts**, **no counterparties**, and **no voucher details** publicly until the follower explicitly enables visibility.
- Shows only a minimal public handle and a “wallet exists” badge.

What this means for app owners (3S):
- Lowest support risk: fewer “I accidentally exposed my finances” incidents.
- Slower adoption of the “public purse” paradigm because followers must opt in.

What this means for followers:
- Safest starting point (especially for new followers).
- Requires a deliberate setup step to participate in public fundraising/treasury workflows.

#### Option B — “Personal wallet seeds the feed” (Aligned to your stated ethos)
Default behavior:
- The personal wallet generates public feed items by default (e.g., “received a donation”, “issued a voucher”, “fulfilled a voucher”), subject to follower settings.
- Wallet metadata is visible in a basic public form (configurable):
  - may show **amount + currency**
  - may show voucher titles/requirements (but redacts sensitive notes)
  - hides processor reference IDs by default
  - counterparties shown as follower handles (configurable)

What this means for app owners (3S):
- Strongly supports the “shining a light” culture and public mutual aid.
- Higher support and safety burden (followers can misunderstand what becomes public).

What this means for followers:
- Immediate ability to participate in public purse / fundraising and voucher ecosystems.
- Higher responsibility from day one.

#### Option C — “Circle-scoped by default” (Practical middle)
Default behavior:
- Wallet is visible to:
  - the follower
  - circles/forums they explicitly select (default to “none”)
- Public visibility exists but is disabled until enabled.

What this means for app owners (3S):
- Better safety than fully public defaults, while still enabling community transparency inside circles.
- Adds complexity to the product (scope selectors, defaults, education).

What this means for followers:
- A clear “share with my community” posture without making everything globally visible.
- Requires understanding circles/forums selection.

### 3.3 Recommended starting choice

Recommendation for first release (preliminary): **Option C**.
- It respects the public ethos, but avoids “global accidental disclosure” on day one.
- It provides a path for highly transparent communities while keeping a safety valve.

### 3.4 Onboarding UX requirement

Regardless of which option we choose, the first time a follower opens Wallet, we should show:
- a plain-language explanation of what “public” means in ThreeSteps
- a single screen to pick one of the default profiles above
- a confirmation step (“I understand what will be visible”)

### 3.5 Still-open items

We still need to specify:
- which wallet fields are configurable (and at what granularity):
- safe defaults for first-run (before a follower changes settings)
- whether “public” means globally discoverable, circle-scoped, forum-scoped, or follower-profile scoped

This is a critical privacy/security decision.

---

## 4. Wallet contents (types)

Expected wallet-adjacent objects:
- payment processor account references (IDs, status)
- payout destination references (where permitted)
- crypto wallet addresses (per-chain)
- voucher objects (see voucher spec)
- sponsored/promotion purchases (ads/highlighting purchases) records

---

## 5. Open questions

- Is a wallet attached to a follower only, or can circles/forums have wallets too?
- Is “public wallet” the default, or do followers opt in?
- How do we prevent harassment/fraud if wallets are public?
- What is the minimum metadata we must store to reconcile payments without central control?
- What is the default onboarding flow for wallet visibility settings (required first-run checklist vs optional)?

---

**Docs navigation**  
[Docs index](../README.md) • [Specs index](./README.md) • [Interview hub](../interview/interview.md) • [Vision](../vision.md) • [Product index](../product/README.md) • [UI index](../ui/README.md) • [Tech index](../tech/README.md) • [Project README](../../README.md)
