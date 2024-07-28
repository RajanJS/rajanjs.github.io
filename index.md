---
layout: default
title: "Coming Soon"
---

<div class="coming-soon-container">
  <h1>{{ page.title }}</h1>
  <p>We are working hard to launch our new website. Stay tuned!</p>
  
  <!-- Countdown Timer -->
  <div class="countdown">
    <div class="time-segment">
      <span id="days" class="time-value">00</span>
      <span class="time-label">Days</span>
    </div>
    <div class="time-segment">
      <span id="hours" class="time-value">00</span>
      <span class="time-label">Hours</span>
    </div>
    <div class="time-segment">
      <span id="minutes" class="time-value">00</span>
      <span class="time-label">Minutes</span>
    </div>
    <div class="time-segment">
      <span id="seconds" class="time-value">00</span>
      <span class="time-label">Seconds</span>
    </div>
  </div>

  <!-- Social Media Links -->
  <p>Follow me for updates:</p>
  <div class="social-icons">
    <a href="https://dev.to/{{ site.devto_username }}" target="_blank"><img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/devto.svg" alt="Dev.to" height="30" width="40" /></a>
    <a href="https://linkedin.com/in/{{ site.linkedin_username }}" target="_blank"><img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="LinkedIn" height="30" width="40" /></a>
    <a href="https://stackoverflow.com/users/{{ site.stackoverflow_userid }}" target="_blank"><img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/stack-overflow.svg" alt="Stack Overflow" height="30" width="40" /></a>
    <a href="https://medium.com/@{{ site.medium_username }}" target="_blank"><img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/medium.svg" alt="Medium" height="30" width="40" /></a>
    <a href="https://www.hackerrank.com/{{ site.hackerrank_username }}" target="_blank"><img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/hackerrank.svg" alt="HackerRank" height="30" width="40" /></a>
    <a href="https://twitter.com/{{ site.twitter_username }}" target="_blank"><img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="Twitter" height="30" width="40" /></a>
  </div>
</div>

<style>
  .coming-soon-container {
    text-align: center;
    margin-top: 50px;
    font-family: 'Arial', sans-serif;
  }

  h1 {
    font-size: 3em;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.5em;
  }

  .countdown {
    display: flex;
    justify-content: center;
    margin: 40px 0;
  }

  .time-segment {
    margin: 0 10px;
    text-align: center;
  }

  .time-value {
    display: block;
    font-size: 2.5em;
    color: #333;
    background: #f2f2f2;
    padding: 10px;
    border-radius: 8px;
    margin-bottom: 5px;
  }

  .time-label {
    font-size: 1em;
    color: #666;
  }

  .social-icons img {
    margin: 0 10px;
    vertical-align: middle;
  }
</style>

<script>
  function updateCountdown() {
    const countdownDate = new Date("August 30, 2024 23:59:59").getTime();
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;

    if (distance < 0) {
      clearInterval(countdownInterval);
      document.querySelector(".countdown").innerHTML = "EXPIRED";
    }
  }

  const countdownInterval = setInterval(updateCountdown, 1000);
  updateCountdown();
</script>
