---
layout: default
---

<link rel="icon" href="/favicon.ico" type="image/x-icon" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">

<div class="main-content">

  <!-- Profile Picture -->
  <div class="profile-picture">
    <img src="/assets/profile.jpg" alt="Rajan Maharjan" />
  </div>

  <h1>I am Rajan Maharjan</h1>
  <p>A Software Engineer, Crafting Cutting-Edge Web and Mobile Solutions with Expert JavaScript Engineering</p>

  <!-- Social Media Links -->
  <p class="follow-social-title">Follow me for updates:</p>

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

  body {
      font-family: 'Poppins', sans-serif;
  }

  .main-content {
    text-align: center;
    margin-top: 50px;
    font-family: 'Poppins', sans-serif;
    max-width: 600px;
    margin: 50px auto;
    padding: 20px;
  }
  
  .profile-picture {
    text-align: center; /* Center the profile picture */
    margin-bottom: 20px; /* Space between the picture and the following content */
  }

  .profile-picture img {
    width: 150px; /* Adjust as needed */
    height: 150px; /* Ensure the height matches the width for a perfect circle */
    border-radius: 50%; /* Makes the image circular */
    object-fit: cover; /* Ensures the image covers the area without distortion */
    border: 4px solid #d3d3d3; /* Gray border */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Gray shadow */
  }

  h1 {
    font-family: 'Lora', serif;
    font-size: 2.5em; /* Larger font size */
    color: #333; /* Darker color for better contrast */
    text-align: center; /* Center align the header */
    margin-bottom: 10px; /* Space below the header */
    border-bottom: 2px solid #d3d3d3; /* Gray underline */
    padding-bottom: 10px; /* Space between text and underline */
    letter-spacing: 1px; /* Slightly increase letter spacing */
  }

  p {
    font-size: 1.1em;
  }

  .follow-social-title {
    font-size: 1em;
    margin-top: 50px;
   }

  .social-icons img {
    margin: 0 5px;
    vertical-align: middle;
  }
</style>
