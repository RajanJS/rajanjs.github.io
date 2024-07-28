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
