---
layout: project
title: "nucleus-segmentation-plugin"
description: "Nucleus Segmentation is a Fiji/ImageJ plugin that automates 3D nucleus and nucleolus segmentation for fluorescence microscopy and exports measurement tables."
image: "/assets/img/project/nucleus-segmentation-plugin/nucleus-segmentation-plugin.png"
sort_order: 17
tags:
  - ImageJ
  - Java
  - Bioimage Analysis
---

## Context

Nucleus Segmentation is a Fiji/ImageJ plugin for automating multichannel fluorescence microscopy analysis. The project focuses on segmenting 3D nucleus objects, identifying nucleolus objects within each nucleus, and exporting measurement tables for later review. It was developed as a Kent State University graduate project in 2021.

![Project Image](/assets/img/project/nucleus-segmentation-plugin/nucleus-segmentation-plugin.png)

## My Role

I led implementation of the plugin and macro workflow for the microscopy analysis pipeline. I worked across the SciJava command wrapper, bundled ImageJ macro, Maven packaging, and Fiji runtime requirements needed to run the workflow from the ImageJ Plugins menu.

My contributions included:

- implemented the `Plugins>NucleusSegmentation` ImageJ command entry point
- packaged the IJM macro inside the plugin JAR and executed it through `ScriptService`
- built the macro flow for nucleus segmentation, per-nucleus masking, and nucleolus segmentation
- added parameter dialogs for blur, background subtraction, threshold, and object-size settings
- exported 3D object statistics into result files under a dedicated downloads folder
- documented Fiji prerequisites, update sites, sample data, and JAR-based installation steps

## Technical Challenges

- bridging Java plugin code with a bundled IJM macro while preserving ImageJ runtime services
- coordinating Fiji, ImageJ2, ImageJ Legacy, 3D ImageJ Suite, Big-EPFL, and ResultsToExcel dependencies
- keeping image windows, temporary masks, object maps, and result tables in sync during batch processing
- allowing user-tuned segmentation parameters without hard-coding microscopy-specific thresholds
- producing repeatable output files while avoiding overwrites across repeated analysis runs

## Stack

- Java
- Maven
- ImageJ2
- Fiji
- SciJava Command API
- ImageJ Legacy
- ImageJ Macro language
- 3D ImageJ Suite
- ResultsToExcel

## Outcomes

- Created a working Fiji plugin for 3D nucleus and nucleolus segmentation workflows
- Automated a manual microscopy-analysis path into guided plugin and macro execution
- Generated object statistics for nucleus counts, nucleolus counts, volume, size, distance, and intensity measures
- Supported sample TIFF datasets, progress screenshots, exported result files, and project report materials
- Documented installation and runtime requirements for users working inside Fiji

## What This Proves

This project shows I can build scientific tooling that connects domain workflows with practical plugin packaging and automation. It also shows my ability to work carefully in a research context, where reproducible processing steps and conservative measurement output matter more than polished product UI.

## Learn More

[View the repository](https://github.com/RajanKent/nucleus-segmentation-plugin)
