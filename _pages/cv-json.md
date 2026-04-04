---
layout: archive
title: "CV"
excerpt: "JSON-rendered CV of Huayu Sha with profile, education, research interests, and publications."
description: "JSON-rendered CV of Huayu Sha with profile, education, research interests, and publications."
permalink: /cv-json/
author_profile: false
redirect_from:
  - /resume-json
---

{% include base_path %}

<link rel="stylesheet" href="{{ base_path }}/assets/css/cv-style.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">

<style>
  .archive {
    width: 80%;
    margin: 0 auto;
    float: none;
    padding-right: 0;
  }
  
  @media (min-width: 80em) {
    .archive {
      width: 70%;
    }
  }
</style>

{% include cv-template.html %}

<div class="cv-download-links">
  <a href="{{ base_path }}/cv/" class="btn btn--primary">View CV</a>
  <a href="{{ base_path }}/publications/" class="btn btn--inverse">Browse Publications</a>
</div>
