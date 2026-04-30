---
layout: project
title: "TriageJ"
description: "TriageJ is a desktop survey workflow prototype built with Electron, React, and TypeScript for starting triage surveys and reviewing prior entries."
image: "/assets/img/project/triagej/TriageJ.png"
sort_order: 16
tags:
  - Electron
  - React
  - TypeScript
---

## Context

TriageJ is a desktop application prototype for guided triage survey workflows. The app provides a simple home screen, a new-survey path, and a previous-survey search path, with packaging support for desktop distribution. The available code suggests the project prioritized a local desktop experience over a hosted web application.

![Project Image](/assets/img/project/triagej/TriageJ.png)

## My Role

I maintained and shaped the TriageJ desktop application. I worked across the Electron shell, React renderer, routing, packaging configuration, and CI workflow needed to turn the prototype into a distributable app.

My contributions included:

- configured the Electron and React application structure for a desktop survey workflow
- implemented route boundaries for home, survey, search, and not-found screens
- built reusable Material UI button styling for the main user actions
- set up TypeScript compiler settings with strict checks for the renderer code
- maintained package scripts for development, build, linting, testing, and packaging
- configured GitHub Actions workflows for cross-platform validation and release publishing

## Technical Challenges

- balancing rapid prototype development with a desktop packaging toolchain
- keeping Electron main-process behavior, renderer routing, and bundled assets aligned
- supporting macOS, Windows, and Linux packaging targets from one codebase
- preserving a clear survey/search workflow while the domain model was still early
- working from Electron React Boilerplate while replacing generic starter behavior with product-specific screens

## Stack

- Electron
- React
- TypeScript
- React Router
- Material UI
- Webpack
- Electron Builder
- Jest and Testing Library
- ESLint, Prettier, and Husky
- GitHub Actions

## Outcomes

- Produced a working desktop prototype for starting new triage surveys
- Added navigation for checking previous survey records by user flow
- Established local development, production build, and packaging scripts
- Configured release packaging for macOS, Windows, and Linux targets
- Added baseline render testing and CI validation for pull requests and pushes

## What This Proves

This project shows I can move from a boilerplate foundation to a focused desktop application with clear routing, packaged builds, and automated checks. It also shows my ability to keep an early-stage health workflow practical and conservative while the product requirements are still forming.