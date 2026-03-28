---
layout: home
permalink: /
title: "Huayu Sha"
excerpt: "Research homepage of Huayu Sha, a Fudan University student working on trustworthy language-model evaluation, medical benchmarks, and scientific intelligence."
redirect_from:
  - /about/
  - /about.html
---

{% assign featured_pubs = site.publications | sort: "date" | reverse %}

<section class="home-section prism-shell" id="about">
  <div class="prism-grid">
    <aside class="prism-sidebar reveal">
      <div class="prism-profile-card">
        <div class="prism-avatar-wrap">
          <img class="prism-avatar" src="{{ '/images/' | append: site.author.avatar | relative_url }}" alt="{{ site.author.name }}">
        </div>

        <h1 class="prism-name">{{ site.author.name }}</h1>
        <p class="prism-role">Software Engineering · Fudan</p>
        <p class="prism-affiliation">{{ site.author.employer }}</p>

        <div class="prism-socials">
          <a href="mailto:{{ site.author.email }}" aria-label="Email"><i class="fa-solid fa-envelope"></i></a>
          <a href="https://github.com/{{ site.author.github }}" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i class="fab fa-github"></i></a>
          <a href="{{ '/publications/' | relative_url }}" aria-label="Publications"><i class="fa-solid fa-book-open"></i></a>
          <a href="{{ '/cv/' | relative_url }}" aria-label="CV"><i class="fa-solid fa-file-lines"></i></a>
        </div>
      </div>

      <div class="prism-side-card reveal" id="research">
        <h3>Research Interests</h3>
        <ul class="prism-interest-list">
          <li>Trustworthy LLM evaluation</li>
          <li>Medical benchmarks</li>
          <li>Scientific intelligence</li>
          <li>Benchmark design</li>
        </ul>
      </div>

      <div class="prism-side-card prism-side-card--soft reveal" id="contact">
        <h3>Contact</h3>
        <p>{{ site.author.email }}</p>
        <p>Shanghai, China</p>
        <p><a href="https://github.com/{{ site.author.github }}" target="_blank" rel="noopener noreferrer">github.com/{{ site.author.github }}</a></p>
      </div>
    </aside>

    <div class="prism-main">
      <section class="prism-content-card reveal">
        <div class="prism-section-head">
          <h2>About</h2>
        </div>
        <div class="prism-prose">
          <p>
            I am a Software Engineering student at Fudan University. My current research focuses on
            <strong>trustworthy evaluation of large language models</strong>,
            <strong>medical and real-world benchmarks</strong>, and
            <strong>scientific-intelligence systems</strong> for evaluating novelty and reasoning quality.
          </p>
          <p>
            I am especially interested in evaluation pipelines that are more robust to contamination,
            closer to real use cases, and better aligned with the kinds of claims we actually make about modern models.
          </p>
        </div>
      </section>

      <section class="prism-content-card reveal">
        <div class="prism-section-head prism-section-head--split">
          <h2>Selected Publications</h2>
          <a class="prism-view-all" href="{{ '/publications/' | relative_url }}">View All <i class="fa-solid fa-arrow-right-long"></i></a>
        </div>

        <div class="prism-paper-list" id="publications">
          {% for post in featured_pubs limit: 3 %}
            <article class="prism-paper-card">
              <div class="prism-paper-meta">{{ post.date | date: "%Y" }} · {{ post.venue | default: "Preprint" }}</div>
              <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
              <p>{{ post.excerpt | strip_html | truncate: 210 }}</p>
              <div class="prism-paper-actions">
                <a class="prism-link-button" href="{{ post.url | relative_url }}">Details</a>
                {% if post.paperurl %}
                  <a class="prism-link-button" href="{{ post.paperurl }}" target="_blank" rel="noopener noreferrer">Paper</a>
                {% endif %}
                {% if post.bibtexurl %}
                  <a class="prism-link-button" href="{{ post.bibtexurl }}" target="_blank" rel="noopener noreferrer">BibTeX</a>
                {% endif %}
              </div>
            </article>
          {% endfor %}
        </div>
      </section>

      <section class="prism-content-card reveal">
        <div class="prism-section-head">
          <h2>Current Focus</h2>
        </div>
        <div class="prism-tag-list">
          <span>Robust evaluation</span>
          <span>Contamination resistance</span>
          <span>Medical NLP</span>
          <span>Expert validation</span>
          <span>Novelty assessment</span>
          <span>Scientific review</span>
        </div>
      </section>
    </div>
  </div>
</section>
