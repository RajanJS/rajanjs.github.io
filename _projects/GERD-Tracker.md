---
layout: project
title: "GERD-Tracker"
description: "GERD-Tracker is a React Native prototype for logging reflux symptoms, sleep quality, meal photos, and mobile trend charts with local storage."
image: "/assets/img/project/gerd-tracker/GERD-Tracker.png"
sort_order: 15
tags:
  - React Native
  - Expo
  - Health Tracking
---

## Context

GERD-Tracker is a mobile prototype for people tracking gastroesophageal reflux symptoms and related daily habits. The app focuses on simple self-reporting for symptom severity, sleep quality, meals, and bedtime events. It keeps the workflow local-first so users can record health observations without relying on a backend service.

![Project Image](/assets/img/project/gerd-tracker/GERD-Tracker.png)

## My Role

I built the prototype as a focused mobile health-tracking experience using Expo and React Native. I worked across navigation, local persistence, questionnaire UI, camera capture, and exploratory chart screens.

My contributions included:

- implemented name-based onboarding and local session persistence
- built daily GERD symptom tracking with date navigation and severity scales
- added PSQI-style sleep quality questionnaire screens
- implemented camera capture flows for breakfast, lunch, and dinner records
- created analysis screens using mobile chart components
- structured the app around tab and stack navigation for core tracking workflows

## Technical Challenges

- keeping health-entry flows fast enough for daily use without a server-backed account system
- modeling date-specific symptom records with AsyncStorage keys and JSON serialization
- presenting multiple symptom severity choices clearly on small mobile screens
- supporting camera permissions and capture behavior across native platforms
- using chart components to explore how symptom and habit history could be visualized

## Stack

- React Native
- Expo
- TypeScript
- React Navigation
- AsyncStorage
- Expo Image Picker
- React Native Elements
- React Native Chart Kit
- Moment.js
- Jest with jest-expo

## Outcomes

- Created a working prototype for daily GERD symptom and habit tracking
- Replaced paper-style symptom notes with structured date-based mobile entries
- Added sleep quality and meal-photo workflows to support broader reflux pattern tracking
- Demonstrated a local-first data model suitable for early product validation
- Established a foundation for future server sync, stronger analytics, and clinical review features

## What This Proves

This project shows I can turn a health-tracking concept into a usable mobile prototype with structured data entry, persistence, media capture, and early analytics. It also demonstrates my ability to keep sensitive domains conservative by avoiding claims beyond what the code supports.
