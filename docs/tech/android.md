# Android

This document describes how ThreeSteps targets Android, how builds are produced, and how distribution works via **F-Droid** and the **in-app P2P updater**.

See also: [Tech vision](./tech.md) • [Tech index](./README.md) • [Project README](../../README.md)

## 1. Tooling prerequisites (developer machine / CI)

At minimum:
- Flutter SDK (stable)
- Android SDK + build tools (via Android Studio or command-line tools)
- Java (JDK) compatible with the chosen Flutter/Gradle versions
- Rust toolchain (stable) for iroh/Willow + supporting crates

For Rust ↔ Flutter:
- A binding approach such as `flutter_rust_bridge` (or equivalent) to expose Rust APIs to Dart.

## 2. Rust for Android

Common requirements:
- Install Rust Android targets (ABI variants as needed): `aarch64-linux-android`, `armv7-linux-androideabi`, `x86_64-linux-android`
- Build Rust as a shared library (`.so`) per ABI and package it into the Android app.

Notes:
- Keep the Rust layer responsible for P2P transport, sync, crypto, and capability verification.
- Keep Flutter responsible for UI and platform UX workflows.

## 3. Build outputs

Typical outputs:
- **Debug APK** (developer testing)
- **Release APK** (side-load / in-app updater)
- **AAB** (optional; used by Play Store—likely not required for ThreeSteps)

## 4. Signing

Android updates require signature continuity:
- The release APK used for real users must be signed with the same key for upgrades.
- Store signing keys securely (local keystore + backups, or CI secrets with strict access controls).

## 5. Distribution channels

### 5.1 F-Droid
F-Droid is a supported “official channel” (no Google required).

Operationally, you will maintain:
- an F-Droid repo (metadata + signed artifacts)
- a release process that publishes new versions

Users:
- install via the F-Droid client
- receive update notifications via F-Droid in the normal way

### 5.2 In-app updater (P2P)
The in-app updater is a parallel channel intended for field conditions and decentralization goals.

Design steps:
1) **Release artifact creation:** produce a signed APK and a small signed “update manifest.”
2) **Announcement:** nodes learn about new versions via P2P sync / gossip / trusted contacts.
3) **Distribution:** APK is fetched over iroh from peers and/or Conscia relays as content-addressed data.
4) **Verification:** app verifies signature/hash before offering install.
5) **Install:** Android prompts the user to confirm installation (required on stock Android).

User/device prerequisites:
- The user must allow installation from this app (“Install unknown apps”) if the APK is not installed via a store client.

Delta strategy (optional):
- Distribute a smaller patch over iroh.
- Reconstruct the full APK on-device.
- Install the reconstructed APK normally.

## 6. Update policy & safety checks

Recommended policy:
- Require a signed manifest (release signing key).
- Display version + changelog.
- Allow “update over Wi‑Fi only” and “ask before downloading.”
- Fail closed if verification fails.

## 7. CI/CD (GitHub-oriented)

Even if iOS signing happens on your Mac, Android can be produced in CI:
- Build APKs on Linux runners
- Sign in CI using encrypted secrets (or sign locally and only build in CI)
- Publish:
  - to an F-Droid repo pipeline
  - and/or as an artifact for P2P seeding

---

**Docs navigation**  
Previous: [Technology](./tech.md) • [Tech index](./README.md) • Next: [iOS](./ios.md)
