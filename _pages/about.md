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
  <div class="home-ambient home-ambient--one"></div>
  <div class="home-ambient home-ambient--two"></div>

  <div class="hero-grid">
    <div class="hero-copy reveal">
      <p class="section-eyebrow">Huayu Sha · Fudan University</p>
      <h1>Building trustworthy ways to evaluate language models.</h1>
      <p class="hero-lede">
        I am a Software Engineering student at Fudan University. My current interests center on
        <strong>trustworthy LLM evaluation</strong>, <strong>medical and real-world benchmarks</strong>, and
        <strong>scientific-intelligence systems</strong> that can assess novelty and reasoning quality.
      </p>

      <div class="hero-actions">
        <a class="button-pill button-pill--primary" href="mailto:23302010032@m.fudan.edu.cn">Email me</a>
        <a class="button-pill" href="https://github.com/HuayuSha" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a class="button-pill" href="/publications/">All publications</a>
        <a class="button-pill" href="/cv/">CV</a>
      </div>

      <ul class="hero-stats">
        <li>
          <span class="hero-stat__value">{{ site.publications | size }}</span>
          <span class="hero-stat__label">papers currently listed</span>
        </li>
        <li>
          <span class="hero-stat__value">Fudan</span>
          <span class="hero-stat__label">software engineering · Shanghai</span>
        </li>
        <li>
          <span class="hero-stat__value">NLP</span>
          <span class="hero-stat__label">evaluation · medical AI · scientific agents</span>
        </li>
      </ul>
    </div>

    <aside class="hero-panel interactive-card reveal">
      <p class="section-eyebrow">Current directions</p>
      <h2>What I care about most right now</h2>
      <div class="tag-cloud">
        <span>Robust evaluation</span>
        <span>Fairness and contamination resistance</span>
        <span>Medical LLM benchmarks</span>
        <span>Open-ended novelty assessment</span>
        <span>LLM-as-a-judge reliability</span>
        <span>Scientific intelligence</span>
      </div>
      <p>
        I like research that is both <em>methodologically careful</em> and <em>practically useful</em>:
        better benchmarks, cleaner evaluation pipelines, and systems that make model claims easier to trust.
      </p>
    </aside>
  </div>
</section>

<section class="home-section" id="research">
  <div class="home-section__head reveal">
    <p class="section-eyebrow">Research</p>
    <h2>Three themes shaping this site</h2>
    <p>
      The visual redesign follows a simple principle: keep the information structure clear like a strong research page,
      but add enough motion and pointer response to make the experience feel alive.
    </p>
  </div>

  <div class="feature-grid">
    <article class="feature-card interactive-card reveal">
      <h3>Trustworthy LLM Evaluation</h3>
      <p>
        Designing evaluation pipelines that are harder to game, more resistant to contamination,
        and better aligned with real model capability than static leaderboards.
      </p>
    </article>

    <article class="feature-card interactive-card reveal">
      <h3>Medical &amp; Real-world Benchmarks</h3>
      <p>
        Building benchmarks grounded in clinical practice and expert validation so that evaluation reflects
        the complexity and stakes of real medical use cases.
      </p>
    </article>

    <article class="feature-card interactive-card reveal">
      <h3>Scientific Intelligence</h3>
      <p>
        Exploring how language models can judge novelty, compare research ideas, and support more rigorous
        scientific review workflows.
      </p>
    </article>
  </div>
</section>

<section class="home-section" id="publications">
  <div class="home-section__head reveal">
    <p class="section-eyebrow">Selected papers</p>
    <h2>Recent publications and preprints</h2>
    <p>
      This is a compact view. The full list with detail pages is available on the
      <a href="/publications/">publications page</a>.
    </p>
  </div>

  <div class="publication-grid">
    {% for post in featured_pubs limit: 4 %}
      <article class="paper-card interactive-card reveal">
        <div class="paper-card__meta">
          <span>{{ post.date | date: "%Y" }}</span>
          <span>{{ post.venue | default: "Preprint" }}</span>
        </div>
        <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
        <p>{{ post.excerpt | strip_html | truncate: 260 }}</p>
        <div class="paper-card__actions">
          <a class="button-pill button-pill--ghost" href="{{ post.url | relative_url }}">Details</a>
          {% if post.paperurl %}
            <a class="button-pill button-pill--ghost" href="{{ post.paperurl }}" target="_blank" rel="noopener noreferrer">Paper</a>
          {% endif %}
          {% if post.bibtexurl %}
            <a class="button-pill button-pill--ghost" href="{{ post.bibtexurl }}" target="_blank" rel="noopener noreferrer">BibTeX</a>
          {% endif %}
        </div>
      </article>
    {% endfor %}
  </div>
</section>

<section class="home-section home-section--compact" id="contact">
  <div class="contact-card interactive-card reveal">
    <div>
      <p class="section-eyebrow">Contact</p>
      <h2>Let’s connect</h2>
      <p>
        If you would like to chat about LLM evaluation, medical NLP, or research tooling,
        feel free to reach out.
      </p>
    </div>
    <div class="contact-actions">
      <a class="button-pill button-pill--primary" href="mailto:23302010032@m.fudan.edu.cn">23302010032@m.fudan.edu.cn</a>
      <a class="button-pill" href="https://github.com/HuayuSha" target="_blank" rel="noopener noreferrer">github.com/HuayuSha</a>
      <a class="button-pill" href="https://huayusha.org" target="_blank" rel="noopener noreferrer">huayusha.org</a>
    </div>
  </div>
</section>
