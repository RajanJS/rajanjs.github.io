---
layout: page
title: Cert Bytes
subtitle: A visual showcase of my certifications and credentials.
full-width: true
---

<div class="page-container">
  <div class="portfolio-gallery">
    <!-- {% assign sorted_certs = site.certs | sort: 'date' %} -->
    <!-- {% assign sorted_certs = site.certs | sort: 'sort_order' %} -->
    <!-- {% assign sorted_certs = site.certs | sort: 'date' | reverse %} -->
    {% assign sorted_certs = site.certs | sort: 'sort_order' %}

    {% for cert in sorted_certs %}
      <div class="portfolio-item">
        <a href="{{ cert.url }}">
          <img src="{{ cert.image | default: '/path/to/default-cert.jpg' }}" alt="{{ cert.title }}" class="portfolio-image">
          <div class="portfolio-description">
            <h2>{{ cert.title }}</h2>
            <p>{{ cert.description }}</p>
          </div>
        </a>
      </div>
    {% else %}
      <p>No certifications found.</p>
    {% endfor %}
  </div>
</div>
