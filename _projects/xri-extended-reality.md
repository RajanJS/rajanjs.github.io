---
layout: project
title: "Extended Reality Initiative (XRi)"
description: "Focused on developing immersive educational experiences in the realm of extended reality."
image: "/assets/img/project/xri/xri-thumbnail.png"
# gh-repo: "username/repository"
sort_order: 4
gh-badge:
  # - star
  # - fork
tags:
  - JavaScript
  - React.js, 
  - React Native, 
  - Node.js
  - Python, 
  - Babylon.js
  - Research
  - Teaching and Learning
---

## Project Overview

The Extended Reality Initiative (XRi) at Kent State is focused on developing immersive educational experiences in the realm of extended reality. The initiative was recently awarded funding from the National Science Foundation to design and study immersive 360 video experiences incorporating single and multi-perspective video to facilitate teacher education of future elementary mathematics teachers. Materials from this funded project and related initiatives will be shared here as they become available.

![Project Image](/assets/img/project/xri/extended-reality.jpeg)

This project is funded by the National Science Foundation, [Grant # 1908159](https://www.nsf.gov/awardsearch/showAward?AWD_ID=1908159). Any opinions, findings, and conclusions or recommendations expressed on this website are those of the author(s) and do not necessarily reflect the views of the National Science Foundation.

### Immersive Educational Experience

<div class="video-thumbnail-container" onclick="playVideo(this)">
  <img src="/assets/img/project/xri/praxi-video-viewer.png" alt="Video Thumbnail" class="video-thumbnail">
  <div class="play-button">&#9658;</div>
</div>

<div class="video-container" style="display: none;">
  <iframe src="https://www.youtube.com/embed/6nh1CCHtFZo?autoplay=1" frameborder="0" allowfullscreen></iframe>
</div>


NSF funded the XRi project; a system designed to provide immersive educational experiences using extended reality technology.

The development of a system designed to provide immersive educational experiences using extended reality technology. The platform utilizes 360-degree video experiences, incorporating both single and multi-perspective views, to enhance the training of future elementary school teachers. By integrating 360o video footage in a spherical format, the application immerses users in a classroom environment, allowing them to explore the space in all directions. This comprehensive virtual reality experience enables future educators to hone their teaching skills and identify students who may require additional support. While users interact with the 360o videos, we will record and analyze their behavior and perspectives. The analysis of these recordings will inform a summary report that identifies the most effective educational strategies for classroom instruction. These reports will offer educators new insights into effective student interactions and engagement

## Key Features

- Secure authentication login system
- Different types of users (admin, instructor, student and guest)
- Easy registration for students
- Easy application explores as guest
- Easy video management (upload and access)
- 360o Video Viewer with multi perspective
- Video access management using shared codes
- Watch logs analysis and summary report


## Learn More

For more details, visit the [xri.kent.edu](https://xr.kent.edu/).

<style>
.video-thumbnail-container {
  position: relative;
  width: 100%;
  /* max-width: 640px; */
  cursor: pointer;
}

.video-thumbnail {
  width: 100%;
  height: auto;
  display: block;
}

.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 50px;
  color: white;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
  pointer-events: none;
}

.video-container {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  overflow: hidden;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>

<script>
function playVideo(container) {
  container.style.display = 'none';
  const videoContainer = container.nextElementSibling;
  videoContainer.style.display = 'block';
}
</script>