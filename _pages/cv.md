---
layout: default
title: "CV"
excerpt: "Curriculum vitae of Huayu Sha, including education, research interests, links, and selected publications."
permalink: /cv/
author_profile: false
share: false
related: false
redirect_from:
  - /resume
---

{% include base_path %}

{% assign all_pubs = site.publications | sort: "date" | reverse %}

<section class="prism-shell prism-shell--cv">
  <div class="prism-cv">

    <header class="prism-cv-hero">
      <p class="prism-cv-hero__eyebrow">
        <span class="prism-cv-hero__rule" aria-hidden="true"></span>Curriculum Vitae
      </p>
      <h1 class="prism-cv-hero__title">{{ site.author.name }}</h1>
      <p class="prism-cv-hero__lead">
        Software Engineering, B.Eng. student at <strong>{{ site.author.employer }}</strong> ·
        Research student with <strong>Fudan NLP Group</strong> since March 2025.
      </p>
    </header>

    <div class="prism-cv-grid">

      <aside class="prism-cv-sidebar">

        <div class="prism-cv-card prism-cv-card--identity">
          <img class="prism-cv-avatar" src="{{ '/images/' | append: site.author.avatar | relative_url }}" alt="{{ site.author.name }}">
          <div class="prism-cv-identity__body">
            <p class="prism-cv-identity__name">{{ site.author.name }}</p>
            <p class="prism-cv-identity__role">Undergraduate · Software Engineering</p>
            <p class="prism-cv-identity__affil">{{ site.author.employer }}</p>
          </div>
        </div>

        <div class="prism-cv-card">
          <h3 class="prism-cv-card__title">Contact</h3>
          <ul class="prism-cv-links">
            <li>
              <a href="mailto:{{ site.author.email }}">
                <span class="prism-cv-links__label">Email</span>
                <span class="prism-cv-links__value">{{ site.author.email }}</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/{{ site.author.github }}" target="_blank" rel="noopener noreferrer">
                <span class="prism-cv-links__label">GitHub</span>
                <span class="prism-cv-links__value">@{{ site.author.github }}<span aria-hidden="true">&nbsp;↗</span></span>
              </a>
            </li>
            <li>
              <a href="{{ site.author.orcid }}" target="_blank" rel="noopener noreferrer">
                <span class="prism-cv-links__label">ORCID</span>
                <span class="prism-cv-links__value">0009-0006-1742-5816<span aria-hidden="true">&nbsp;↗</span></span>
              </a>
            </li>
            <li>
              <a href="{{ site.author.openreview }}" target="_blank" rel="noopener noreferrer">
                <span class="prism-cv-links__label">OpenReview</span>
                <span class="prism-cv-links__value">~Huayu_Sha1<span aria-hidden="true">&nbsp;↗</span></span>
              </a>
            </li>
            <li>
              <a href="https://www.huayusha.org" target="_blank" rel="noopener noreferrer">
                <span class="prism-cv-links__label">Website</span>
                <span class="prism-cv-links__value">huayusha.org<span aria-hidden="true">&nbsp;↗</span></span>
              </a>
            </li>
          </ul>
        </div>

        <div class="prism-cv-card">
          <h3 class="prism-cv-card__title">Machine-readable</h3>
          <ul class="prism-cv-links prism-cv-links--compact">
            <li>
              <a href="{{ '/cv-json/' | relative_url }}">
                <span class="prism-cv-links__value">JSON Resume<span aria-hidden="true">&nbsp;→</span></span>
              </a>
            </li>
          </ul>
        </div>

      </aside>

      <div class="prism-cv-main">

        <section class="prism-cv-section" aria-labelledby="edu-h">
          <h2 class="prism-cv-h2" id="edu-h">
            <span class="prism-cv-eyebrow">Education</span>
          </h2>
          <ol class="prism-cv-timeline">
            <li class="prism-cv-timeline__item">
              <span class="prism-cv-timeline__when">2023 — Present</span>
              <div class="prism-cv-timeline__body">
                <p class="prism-cv-timeline__head">B.Eng. in Software Engineering</p>
                <p class="prism-cv-timeline__org">Fudan University, Shanghai</p>
              </div>
            </li>
          </ol>
        </section>

        <section class="prism-cv-section" aria-labelledby="aff-h">
          <h2 class="prism-cv-h2" id="aff-h">
            <span class="prism-cv-eyebrow">Research</span>
          </h2>
          <ol class="prism-cv-timeline">
            <li class="prism-cv-timeline__item">
              <span class="prism-cv-timeline__when">Mar 2025 — Present</span>
              <div class="prism-cv-timeline__body">
                <p class="prism-cv-timeline__head">Research student</p>
                <p class="prism-cv-timeline__org">Fudan NLP Group · Trustworthy LLM evaluation, medical benchmarks</p>
              </div>
            </li>
          </ol>
        </section>

        <section class="prism-cv-section" aria-labelledby="int-h">
          <h2 class="prism-cv-h2" id="int-h">
            <span class="prism-cv-eyebrow">Research Interests</span>
          </h2>
          <ul class="prism-cv-tags">
            <li>Trustworthy LLM evaluation</li>
            <li>Medical benchmarks &amp; clinical NLP</li>
            <li>Open-ended novelty assessment</li>
            <li>Scientific intelligence systems</li>
            <li>Contamination-resistant evaluation</li>
          </ul>
        </section>

        <section class="prism-cv-section" aria-labelledby="pubs-h">
          <header class="prism-cv-section__head">
            <h2 class="prism-cv-h2" id="pubs-h">
              <span class="prism-cv-eyebrow">Selected Publications</span>
            </h2>
            <a class="prism-cv-more" href="{{ '/publications/' | relative_url }}">All publications →</a>
          </header>
          <ol class="prism-cv-pubs">
            {% for post in all_pubs %}
              <li class="prism-cv-pub">
                <span class="prism-cv-pub__year">{{ post.date | date: "%Y" }}</span>
                <div class="prism-cv-pub__body">
                  <div class="prism-cv-pub__meta">
                    {% if post.venue %}<span class="prism-cv-pub__venue">{{ post.venue }}</span>{% endif %}
                    {% if post.status %}
                      <span class="prism-cv-pub__status prism-cv-pub__status--{{ post.status }}">
                        {%- if post.status == 'accepted' -%}Accepted
                        {%- elsif post.status == 'published' -%}Published
                        {%- elsif post.status == 'under-review' -%}Under Review
                        {%- else -%}Preprint{%- endif -%}
                      </span>
                    {% endif %}
                  </div>
                  <h3 class="prism-cv-pub__title">
                    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
                  </h3>
                  {% include publication-authors-inline.html
                    authors=post.authors
                    equal_contrib=post.equal_contrib_authors
                    corresponding=post.corresponding_authors
                    class="prism-cv-pub__authors"
                    max=8 %}
                  <div class="prism-cv-pub__actions">
                    {% if post.paperurl %}<a class="prism-cv-link" href="{{ post.paperurl }}" target="_blank" rel="noopener noreferrer">PDF<span aria-hidden="true">&nbsp;↗</span></a>{% endif %}
                    {% if post.codeurl %}<a class="prism-cv-link" href="{{ post.codeurl }}" target="_blank" rel="noopener noreferrer">Code<span aria-hidden="true">&nbsp;↗</span></a>{% endif %}
                    {% if post.bibtexurl %}<a class="prism-cv-link" href="{{ post.bibtexurl }}" target="_blank" rel="noopener noreferrer">BibTeX<span aria-hidden="true">&nbsp;↗</span></a>{% endif %}
                  </div>
                </div>
              </li>
            {% endfor %}
          </ol>
        </section>

      </div>
    </div>

    <footer class="prism-cv-footer">
      <a class="prism-cv-footer__link" href="{{ '/' | relative_url }}">
        <span aria-hidden="true">←</span> Back to home
      </a>
      <span class="prism-cv-footer__divider" aria-hidden="true">·</span>
      <a class="prism-cv-footer__link" href="{{ '/publications/' | relative_url }}">
        Publications <span aria-hidden="true">→</span>
      </a>
    </footer>

  </div>
</section>
