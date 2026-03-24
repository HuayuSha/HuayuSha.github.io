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

<section class="home-section home-hero" id="about">
  <div class="hero-grid hero-grid--minimal">
    <div class="hero-copy reveal">
      <p class="section-eyebrow">Huayu Sha · Fudan University</p>
      <h1>Trustworthy evaluation for language models.</h1>
      <p class="hero-lede">
        I am a Software Engineering student at Fudan University. My research focuses on
        <strong>trustworthy LLM evaluation</strong>, <strong>medical and real-world benchmarks</strong>,
        and <strong>scientific-intelligence systems</strong> for evaluating novelty and reasoning quality.
      </p>

      <div class="hero-actions">
        <a class="button-pill button-pill--primary" href="mailto:23302010032@m.fudan.edu.cn">Email</a>
        <a class="button-pill" href="https://github.com/HuayuSha" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a class="button-pill" href="/publications/">Publications</a>
        <a class="button-pill" href="/cv/">CV</a>
      </div>
    </div>

    <aside class="hero-panel reveal">
      <p class="section-eyebrow">At a glance</p>
      <ul class="clean-list">
        <li><strong>{{ site.publications | size }}</strong> listed papers and preprints</li>
        <li><strong>Fudan University</strong>, Software Engineering</li>
        <li><strong>Based in Shanghai</strong></li>
      </ul>

      <div class="tag-cloud tag-cloud--light">
        <span>LLM evaluation</span>
        <span>Medical NLP</span>
        <span>Benchmark design</span>
        <span>Scientific intelligence</span>
      </div>
    </aside>
  </div>
</section>

<section class="home-section" id="research">
  <div class="home-section__head reveal">
    <p class="section-eyebrow">Research</p>
    <h2>Research themes</h2>
    <p>
      I am interested in evaluation methods that make model claims more reliable, interpretable, and useful in real settings.
    </p>
  </div>

  <div class="feature-grid feature-grid--minimal">
    <article class="feature-card reveal">
      <h3>Trustworthy LLM evaluation</h3>
      <p>
        Dynamic and contamination-resistant evaluation pipelines for measuring real model capability beyond static leaderboards.
      </p>
    </article>

    <article class="feature-card reveal">
      <h3>Medical benchmarks</h3>
      <p>
        Real-world clinical scenarios and expert-validated benchmarks for safer and more meaningful medical LLM assessment.
      </p>
    </article>

    <article class="feature-card reveal">
      <h3>Scientific intelligence</h3>
      <p>
        Systems that help judge novelty, compare ideas, and support more rigorous scientific review workflows.
      </p>
    </article>
  </div>
</section>

<section class="home-section" id="publications">
  <div class="home-section__head reveal">
    <p class="section-eyebrow">Publications</p>
    <h2>Selected work</h2>
    <p>
      A concise selection is shown here. The full list is available on the
      <a href="/publications/">publications page</a>.
    </p>
  </div>

  <div class="publication-grid publication-grid--minimal">
    {% for post in featured_pubs limit: 4 %}
      <article class="paper-card reveal">
        <div class="paper-card__meta">
          <span>{{ post.date | date: "%Y" }}</span>
          <span>{{ post.venue | default: "Preprint" }}</span>
        </div>
        <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
        <p>{{ post.excerpt | strip_html | truncate: 220 }}</p>
        <div class="paper-card__actions">
          <a class="button-pill button-pill--soft" href="{{ post.url | relative_url }}">Details</a>
          {% if post.paperurl %}
            <a class="button-pill button-pill--soft" href="{{ post.paperurl }}" target="_blank" rel="noopener noreferrer">Paper</a>
          {% endif %}
        </div>
      </article>
    {% endfor %}
  </div>
</section>

<section class="home-section home-section--compact" id="contact">
  <div class="contact-card reveal">
    <div>
      <p class="section-eyebrow">Contact</p>
      <h2>Get in touch</h2>
      <p>
        If you are interested in collaboration or would like to discuss evaluation, benchmarks, or research tooling, feel free to reach out.
      </p>
    </div>
    <div class="contact-actions">
      <a class="button-pill button-pill--primary" href="mailto:23302010032@m.fudan.edu.cn">23302010032@m.fudan.edu.cn</a>
      <a class="button-pill" href="https://github.com/HuayuSha" target="_blank" rel="noopener noreferrer">github.com/HuayuSha</a>
    </div>
  </div>
</section>
