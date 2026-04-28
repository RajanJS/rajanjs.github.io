---
layout: project
title: "PulseTape ECG monitoring"
description: "PulseTape is a medical ECG monitoring app connecting patients, clinics, and BLE hardware through mobile recording, secure sync, and report workflows."
image: "/assets/img/project/pulse-tape/pulse-tape-thumbnail.png"
sort_order: 2
tags:
  - React Native
  - Django
  - Medical Device
---

## Context


PulseTape is a medical ECG monitoring platform for patients using a BLE-connected hardware patch and clinics managing cardiac recording workflows. The system combines a React Native mobile app, a Django backend, local-first data capture, and third-party ECG analysis integrations. Its core problem is collecting reliable sensor data from constrained hardware, keeping the patient workflow clear, and syncing clinically useful data back to the server.


![PulseTape recording screen](/assets/img/project/pulse-tape/pulse-tape-thumbnail.png)

## My Role

I worked on a focused recording-duration feature in an existing medical device software stack. I reviewed the mobile, backend, API, admin, and test architecture before implementing the change.

My contributions included:

- added clinic/admin-controlled recording duration behavior with a conservative default
- connected duration data through the existing backend schema and generated mobile API types
- implemented automatic recording completion in the mobile background sync flow
- updated local Drizzle state and server-side study state through the existing end-study API
- added patient notification behavior when recording completes
- expanded backend and React Native test coverage for the new workflow

## Feature Screens

![PulseTape recording screen](/assets/img/project/pulse-tape/recording-screen.png)

![PulseTape symptom reporting](/assets/img/project/pulse-tape/symptom.png)

## Technical Challenges

- coordinating patient-facing mobile behavior with server-side study lifecycle state
- handling BLE-connected device workflows where app foreground/background timing is not fully deterministic
- preserving the existing local-first SQLite sync model while updating remote Django records
- using type-safe API generation without adding redundant schema or endpoint changes
- keeping medical-workflow copy and behavior conservative where documentation ownership was outside the code change

## Stack

- React Native and Expo
- TypeScript
- Expo Router and React Navigation
- Drizzle ORM with SQLite for local mobile persistence
- Django and Django Ninja
- PostgreSQL
- openapi-fetch and generated API types
- BLE integration with react-native-ble-plx
- Jest, pytest, Ruff, mypy, and GitHub Actions

## Outcomes

- Delivered automatic session completion for configured recording durations
- Preserved the existing manual end-recording and upload flows
- Added backend tests covering duration defaults and `/mobile/me` API exposure
- Added mobile tests covering expired, already-ended, and not-yet-expired recording states
- Documented validation limits around iOS background scheduling and external IFU updates

## What This Proves

This project shows I can enter a complex regulated-domain codebase, trace behavior across mobile, backend, data sync, and tests, then ship a scoped change without widening risk. I can balance patient UX, API contracts, persistence, and validation discipline in systems where correctness matters more than novelty.