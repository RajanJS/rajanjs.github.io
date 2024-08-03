---
layout: page
title: What I’ve Built
full-width: true
---

<div class="page-container">
  <div class="text-center">
    <p>Welcome to my portfolio! Here you can find a showcase of all my recent projects.</p>
  </div>
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
  margin: 0 15px; /* Adjust the margin as needed */
  box-sizing: border-box;
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
  width: calc(33.333% - 30px); /* Adjusted width to account for the gap */
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
}

.image-wrapper {
  width: 100%;
  height: 200px; /* Set a fixed height for the image wrapper, adjust as needed */
  overflow: hidden;
  position: relative;
}

.portfolio-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the image covers the entire container */
  border-radius: 35px; /* Adjust this value for desired roundness */
}

.portfolio-description {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 10px;
  box-sizing: border-box;
  text-align: center;
  border-radius: 35px; /* Adjust this value for desired roundness */
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
