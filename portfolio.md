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


<style>

.page-container {
  box-sizing: border-box;
  margin-top: 30px;
}

.text-center {
  text-align: center; /* Center-aligns the text */
  margin-bottom: 30px; /* Optional: adds spacing below the text */
}

.portfolio-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 30px; /* Space between items */
  justify-content: center; /* Center-align items horizontally */
}

.portfolio-item {
  width: calc(20% - 30px); /* Adjusted width to account for the gap */
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  border: 1px solid #d3d3d3; /* Light grey border */
  border-radius: 15px;
}

.image-wrapper {
  width: 100%;
  height: 150px; /* Set a fixed height for the image wrapper, adjust as needed */
  overflow: hidden;
  position: relative;
}

.portfolio-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the image covers the entire container */
  border-radius: 15px;
}

.portfolio-description {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 14px;
  box-sizing: border-box;
  text-align: center;
  height: 150px
}

.portfolio-description h2 {
  font-size: 0.9em; /* Responsive font size */
  margin: 0; /* Remove default margin */
  margin-top: 15px; /* Remove default margin */
  margin-bottom: 20px; /* Remove default margin */
  overflow: hidden; /* Hide overflowing text */
  text-overflow: ellipsis; /* Add ellipsis if text overflows */
  white-space: nowrap; /* Prevent text wrapping */
}

.portfolio-description p {
  font-size: clamp(0.8em, 1.5vw, 0.8em); /* Responsive font size */
  margin: 0; /* Remove default margin */
  overflow: hidden; /* Hide overflowing text */
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Number of lines to show */
  -webkit-box-orient: vertical;
  text-overflow: ellipsis; /* Add ellipsis if text overflows */
}

.portfolio-item a {
  text-decoration: none;
  color: inherit;
}

/* Media queries for responsive design */
@media (max-width: 768px) {
  .portfolio-item {
    width: calc(50% - 30px); /* 2 items per row on medium screens */
  }
}

@media (max-width: 480px) {
  .portfolio-item {
    width: calc(100% - 30px); /* 1 item per row on small screens */
  }
}


</style>
