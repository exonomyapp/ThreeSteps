# iOS

This document describes how ThreeSteps targets iOS, what you need locally to build/sign, and how GitHub sync fits into your iOS workflow.

See also: [Tech vision](./tech.md) • [Tech index](./README.md) • [Project README](../../README.md)

## 1. What can and cannot be decentralized on iOS

iOS distribution is constrained by Apple’s platform rules:
- Installation and updates are typically delivered via the App Store / TestFlight.
- Peer-to-peer distribution of installable “app updates” is not generally viable for mainstream iOS users.

The P2P layer (iroh/Willow) still powers **in-app content sync and messaging** on iOS. It’s the *app binary update channel* that is constrained.

## 2. What you need (local Mac workflow)

To build and sign iOS artifacts after I push code to GitHub, you need:
- A Mac with Xcode installed
- Flutter SDK installed on the Mac
- CocoaPods (`pod install` for iOS dependencies)
- An Apple Developer account (required for TestFlight / App Store distribution and most device provisioning)

Signing assets you’ll manage:
- App Identifier / Bundle ID
- Certificates
- Provisioning profiles

## 3. Build flow (typical)

From a fresh clone:
1) `flutter pub get`
2) `cd ios && pod install`
3) Open `ios/Runner.xcworkspace` in Xcode
4) Select your signing team + provisioning
5) Build/Run to device or archive for distribution

## 4. CI/CD option (GitHub Actions macOS runners)

If you want the build to happen automatically when I push to GitHub:
- Use GitHub Actions macOS runners
- Use `fastlane` for build automation
- Store signing materials in GitHub Secrets

Common patterns:
- `fastlane match` to manage certificates/profiles in an encrypted repo
- Build + upload to TestFlight

## 5. What I provide vs what you provide

When I sync to GitHub:
- Flutter + Rust code, build scripts, and docs live in the repo.

You provide (because it’s tied to your Apple identity):
- signing certificates / provisioning profiles
- App Store Connect access for TestFlight/App Store

## 6. Rust integration notes (FFI)

On iOS:
- Rust builds as a static library or framework artifact linked into the Flutter iOS build.
- Ensure the Rust layer is cross-compiled for iOS targets (e.g., arm64).

---

**Docs navigation**  
[Docs index](../README.md) • [Interview hub](../interview/interview.md) • [Vision](../vision.md) • [Specs index](../spec/README.md) • [Product index](../product/README.md) • [UI index](../ui/README.md) • [Tech index](./README.md) • [Project README](../../README.md)
