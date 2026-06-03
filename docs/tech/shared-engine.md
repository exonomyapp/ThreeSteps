# ThreeSteps — Shared Engine and Conscia Use

ThreeSteps is an exocore product. Exocore provides the shared peer-to-peer behavior used across Exosystem apps.

## What runs where

- On a user device: the ThreeSteps app, identity, Circle content, and Circle chat.
- On a Conscia node (optional): services that improve reachability, discovery, and continuity. Conscia does not own user content.

## Circles as identities

A Circle is a group with:

- a Circle-owned did:peer identity controlled by the Circle owner
- a Circle chat attached to the Circle
- Circle content that follows the same delivery rules used across exocore products

## ConSoul and Circle owners

Circle owners may use ConSoul to:

- choose which Conscia node(s) their Circle uses
- enable or disable Conscia services for their Circle
- review access requests and manage permissions for their Circle

## Blueprints

Blueprints are a feature used across exocore products. A blueprint can change interface and behavior without requiring an app-store update.

- New blueprints are announced to the user.
- A consent step may be required before activation.
- Do Not Disturb suppresses interruptions but still records the event in notification history.

## Repo decision

ThreeSteps can remain a separate repo or move into the main repo. This document records the decision and the reasons once documentation alignment is complete.
