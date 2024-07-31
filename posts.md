---
layout: default
title: Blog Posts
permalink: /blog/
---

# Blog Posts

Welcome to my blog! Here you can find a list of all my recent posts.

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a> - {{ post.date | date: "%B %d, %Y" }}
    </li>
  {% endfor %}
</ul>

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
    font-family: 'Poppins', sans-serif;
    font-size: 2em; /* Larger font size */
    color: #333; /* Darker color for better contrast */
    text-align: center; /* Center align the header */
    margin-bottom: 20px; /* Space below the header */
    border-bottom: 2px solid #d3d3d3; /* Gray underline */
    padding-bottom: 20px; /* Space between text and underline */
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
