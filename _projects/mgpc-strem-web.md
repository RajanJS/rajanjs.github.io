---
layout: project
title: "MGPC Stream"
description: "A real-time web scoreboard and leaderboard for MGPC games, built to share live Marriage, CallBreak, and Kitti scoring beyond the mobile app."
image: "/assets/img/project/mgpc/mgpc-stream-banner.png"
sort_order: 9
tags:
  - React
  - Firebase
  - Real-Time Scoreboard
---

## Context

mgpc-stream extends the Marriage Game Point Calculator ecosystem with a browser-based live scoreboard and leaderboard. It is designed for players and spectators who need to follow active Marriage, CallBreak, or Kitti games without opening the mobile app. The web version focuses on shareable game links, TV-friendly scoreboard views, and simple recovery paths when a game has ended or cannot be found.

![Project Image](/assets/img/project/mgpc/mgpc-tv-scoreboard-1.png)

## My Role

I built the web streaming experience around the existing MGPC scoring domain and Firebase-backed game state. I focused on turning mobile game data into a readable public scoreboard while keeping the implementation lightweight enough to deploy as a static site.

- Implemented hash-based routing for home, join, transfer, scoreboard, leaderboard, and landscape scoreboard views
- Integrated Firestore real-time listeners for active game updates
- Built responsive scoreboard and leaderboard screens for mobile, desktop, and TV-style landscape display
- Added game-type handling for Marriage, CallBreak, and Kitti scoring data
- Connected deep links and store download paths for users who need to join from the mobile app
- Configured Firebase App Check with reCAPTCHA v3 and environment-based Firebase settings
- Set up GitHub Actions deployment into the portfolio-hosted `mgpc-stream` path

## Technical Challenges

- Mapping shared game state into web views without duplicating the mobile app as a full rewrite
- Supporting multiple score schemas across Marriage, CallBreak, and Kitti
- Keeping live Firestore updates readable when rounds and player totals change during active play
- Designing a 1920 by 1080 landscape scoreboard that scales cleanly on larger screens
- Handling missing, ended, or invalid games with useful fallbacks instead of blank states
- Protecting Firebase access with App Check while still supporting public scoreboard links

## Stack

- React
- Vite
- JavaScript
- React Router
- Firebase Firestore
- Firebase App Check
- reCAPTCHA v3
- GitHub Actions
- GitHub Pages
- Google AdSense configuration

## Outcomes

- Created a shareable live web scoreboard for MGPC game sessions
- Added a dedicated landscape scoreboard for larger screens and group viewing
- Reduced dependency on the mobile app for spectators who only need to view scores
- Reused the MGPC scoring model across web views for Marriage, CallBreak, and Kitti games
- Established an automated build and deploy path for the static web app

## What This Proves

This project shows how I can extend a mobile-first product into a complementary web experience without losing the domain behavior that makes the original app useful. It also demonstrates my ability to combine real-time data, responsive UI, deployment automation, and conservative security controls into a focused product surface.

## Learn More

[Open mgpc-stream](https://mrajan.com.np/mgpc-stream/#/scoreboard?gameId=GM6G2V)
