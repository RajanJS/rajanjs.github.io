---
layout: page
title: What I’ve Built
subtitle: Here you can find a showcase of all my recent projects.
full-width: true
---

<div class="page-container">
  <div class="portfolio-gallery">
    {% assign sorted_projects = site.projects | sort: 'sort_order' %}
    {% for project in sorted_projects %}
      <div class="portfolio-item">
        <a href="{{ project.url }}">
          <img src="{{ project.image | default: '/path/to/default-image.jpg' }}" alt="{{ project.title }}" class="portfolio-image">
          <div class="portfolio-description">
            <h2>{{ project.title }}</h2>
            <p>{{ project.description }}</p>
          </div>
        </a>
      </div>
    {% else %}
      <p>No projects found.</p>
    {% endfor %}
  </div>
</div>