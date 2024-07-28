---
layout: default
title: "Coming Soon"
---

<div style="text-align: center; margin-top: 50px;">
  <h1 style="font-size: 3em; margin-bottom: 20px;">Coming Soon</h1>
  <p style="font-size: 1.5em;">We are working hard to launch our new website. Stay tuned!</p>
  
  <!-- Optional countdown timer -->
  <div id="countdown" style="margin: 20px 0; font-size: 1.5em;"></div>

  <!-- Social Media Links -->
  <p>Follow me for updates:</p>
  <div class="social-icons">
    <a href="https://dev.to/rajanjs" target="_blank"><img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/devto.svg" alt="Dev.to" height="30" width="40" /></a>
    <a href="https://twitter.com/rajanmaharjn" target="_blank"><img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="Twitter" height="30" width="40" /></a>
    <a href="https://linkedin.com/in/rajanmaharjn" target="_blank"><img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="LinkedIn" height="30" width="40" /></a>
    <a href="https://stackoverflow.com/users/5738760" target="_blank"><img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/stack-overflow.svg" alt="Stack Overflow" height="30" width="40" /></a>
    <a href="https://medium.com/@rajanmaharjan" target="_blank"><img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/medium.svg" alt="Medium" height="30" width="40" /></a>
    <a href="https://www.hackerrank.com/maharjanrajan" target="_blank"><img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/hackerrank.svg" alt="HackerRank" height="30" width="40" /></a>
  </div>
</div>

<script>
  // Optional: Countdown timer script
  const countdownDate = new Date("December 31, 2024 23:59:59").getTime();
  const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "EXPIRED";
    }
  }, 1000);
</script>
