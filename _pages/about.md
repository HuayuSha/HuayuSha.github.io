---
layout: home
permalink: /
title: "Huayu Sha"
excerpt: "Research homepage of Huayu Sha at Fudan University, focusing on trustworthy LLM evaluation, medical benchmarks, novelty assessment, and scientific intelligence."
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

        <p class="prism-profile-kicker">Research Homepage</p>
        <h1 class="prism-name">{{ site.author.name }}</h1>
        <p class="prism-role">Software Engineering Undergraduate</p>
        <p class="prism-affiliation">{{ site.author.employer }} · Shanghai</p>
        <p class="prism-profile-note">
          Building careful evaluation pipelines for language models, medical benchmarks,
          and scientific agents for research workflows.
        </p>

        <div class="prism-status-chips" aria-label="Research themes">
          <span>LLM Evaluation</span>
          <span>Medical AI</span>
          <span>Scientific Agents</span>
        </div>

        <div class="prism-socials">
          <a href="mailto:{{ site.author.email }}" aria-label="Email"><i class="fa-solid fa-envelope"></i></a>
          <a href="https://github.com/{{ site.author.github }}" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i class="fab fa-github"></i></a>
          <a href="{{ site.author.orcid }}" target="_blank" rel="noopener noreferrer" aria-label="ORCID"><i class="fab fa-orcid"></i></a>
          <a href="{{ site.author.openreview }}" target="_blank" rel="noopener noreferrer" aria-label="OpenReview"><i class="fa-solid fa-link"></i></a>
          <a href="{{ '/publications/' | relative_url }}" aria-label="Publications"><i class="fa-solid fa-book-open"></i></a>
          <a href="{{ '/cv/' | relative_url }}" aria-label="CV"><i class="fa-solid fa-file-lines"></i></a>
        </div>
      </div>

      <div class="prism-side-card prism-side-card--combined reveal" id="research">
        <h3>Research Interests</h3>
        <ul class="prism-interest-list">
          <li>Trustworthy LLM evaluation</li>
          <li>Medical benchmark design</li>
          <li>Novelty assessment</li>
          <li>Scientific intelligence systems</li>
        </ul>

        <hr class="prism-side-divider">

        <h3 id="contact">Contact</h3>
        <ul class="prism-contact-list">
          <li>
            <span class="prism-contact-label">Email</span>
            <a href="mailto:{{ site.author.email }}">{{ site.author.email }}</a>
          </li>
          <li>
            <span class="prism-contact-label">Location</span>
            <span>Shanghai, China</span>
          </li>
          <li>
            <span class="prism-contact-label">GitHub</span>
            <a href="https://github.com/{{ site.author.github }}" target="_blank" rel="noopener noreferrer">@{{ site.author.github }}</a>
          </li>
          <li>
            <span class="prism-contact-label">ORCID</span>
            <a href="{{ site.author.orcid }}" target="_blank" rel="noopener noreferrer">0009-0006-1742-5816</a>
          </li>
          <li>
            <span class="prism-contact-label">OpenReview</span>
            <a href="{{ site.author.openreview }}" target="_blank" rel="noopener noreferrer">~Huayu_Sha1</a>
          </li>
        </ul>
      </div>
    </aside>

    <div class="prism-main">
      <section class="prism-content-card prism-content-card--hero reveal">
        <div class="prism-section-head prism-section-head--hero">
          <span class="prism-eyebrow">Research Profile</span>
          <h2>About</h2>
          <p class="prism-hero-subtitle">Started undergraduate research in March 2025 at the Fudan NLP Lab.</p>
        </div>

        <div class="prism-hero-flow">
          <div class="prism-tagline prism-tagline--hero">
            <p>To be, or not to be, that is the question.</p>
          </div>

          <aside class="prism-note-card prism-note-card--hero prism-note-card--hero-float">
            <span class="prism-note-card__eyebrow">Research Snapshot</span>
            <div class="prism-stat-grid prism-stat-grid--hero">
              <div class="prism-stat">
                <span class="prism-stat-label">Publications</span>
                <span class="prism-stat-value">{{ site.publications | size }} Papers</span>
              </div>
              <div class="prism-stat">
                <span class="prism-stat-label">Research Since</span>
                <span class="prism-stat-value">2025.03</span>
              </div>
              <div class="prism-stat">
                <span class="prism-stat-label">Research Group</span>
                <span class="prism-stat-value">Fudan NLP Group</span>
              </div>
              <div class="prism-stat">
                <span class="prism-stat-label">Current Status</span>
                <span class="prism-stat-value">Undergrad · 2026</span>
              </div>
            </div>
          </aside>

          <div class="prism-prose prism-prose--hero">
            <p class="prism-lead">
              I am Huayu Sha, an undergraduate student in Software Engineering at Fudan University,
              working on <strong>trustworthy LLM evaluation</strong>,
              <strong>medical benchmark construction</strong>, and
              <strong>AI systems for scientific research workflows</strong>.
            </p>
            <p>
              Since joining the <strong>Fudan NLP Group</strong> in <strong>March 2025</strong>, I have been focusing on
              evaluation protocols, realistic benchmark design, and research tools that make experimental results
              easier to verify, reproduce, and trust.
            </p>
          </div>
        </div>
      </section>

      <section class="prism-content-card prism-content-card--news reveal">
        <div class="prism-section-head prism-section-head--split">
          <div>
            <span class="prism-eyebrow">News</span>
            <h2>Recent Updates</h2>
          </div>
        </div>

        <div class="prism-timeline-scroll" data-scroll-fade tabindex="0" aria-label="Scrollable news timeline">
          <div class="prism-scroll-fade prism-scroll-fade--top" aria-hidden="true"></div>
          <ol class="prism-timeline">
            {% for item in site.data.news %}
            <li class="prism-timeline__item">
              <span class="prism-timeline__date">{{ item.date }}</span>
              <div class="prism-timeline__body">
                <span class="prism-timeline__badge">{{ item.badge }}</span>
                <p class="prism-timeline__text">{{ item.text }}</p>
                {% if item.links and item.links.size > 0 %}
                <div class="prism-paper-actions">
                  {% for link in item.links %}
                    {% if link.external %}
                      <a class="prism-link-button{% if link.primary %} button-pill--primary{% endif %}" href="{{ link.url }}" target="_blank" rel="noopener noreferrer">{% if link.icon %}<i class="{{ link.icon }}"></i> {% endif %}{{ link.label }}</a>
                    {% else %}
                      <a class="prism-link-button{% if link.primary %} button-pill--primary{% endif %}" href="{{ link.url | relative_url }}">{{ link.label }}</a>
                    {% endif %}
                  {% endfor %}
                </div>
                {% endif %}
              </div>
            </li>
            {% endfor %}
          </ol>
          <div class="prism-scroll-fade prism-scroll-fade--bottom" aria-hidden="true"></div>
        </div>
      </section>

      <section class="prism-content-card reveal">
        <div class="prism-section-head prism-section-head--split">
          <div>
            <span class="prism-eyebrow">Publications</span>
            <h2>Selected Publications</h2>
          </div>
          <a class="prism-view-all" href="{{ '/publications/' | relative_url }}">View All <i class="fa-solid fa-arrow-right-long"></i></a>
        </div>

        <div class="prism-paper-list" id="publications">
          {% for post in featured_pubs limit: 3 %}
            <article class="prism-paper-card">
              <div class="prism-paper-meta">
                <span class="prism-paper-meta-text">{{ post.date | date: "%Y" }}</span>
                <span class="prism-paper-meta-dot"></span>
                <span class="prism-paper-venue-badge">{{ post.venue | default: "Preprint" }}</span>
                {% if post.status %}
                  <span class="prism-paper-status prism-paper-status--{{ post.status }}">
                    {% if post.status == 'accepted' %}Accepted
                    {% elsif post.status == 'published' %}Published
                    {% elsif post.status == 'under-review' %}Under Review
                    {% else %}Preprint{% endif %}
                  </span>
                {% endif %}
              </div>
              <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
              {% include publication-authors-inline.html authors=post.authors equal_contrib=post.equal_contrib_authors corresponding=post.corresponding_authors class="publication-authors-line--card" max=6 %}
              <p>{{ post.excerpt | strip_html | truncate: 210 }}</p>
              <div class="prism-paper-actions">
                <a class="prism-link-button button-pill--primary" href="{{ post.url | relative_url }}">Details</a>
                {% if post.paperurl %}
                  <a class="prism-link-button" href="{{ post.paperurl }}" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-file-pdf"></i> Paper</a>
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
        <div class="prism-section-head prism-section-head--split">
          <div>
            <span class="prism-eyebrow">Current Work</span>
            <h2>Current Focus</h2>
          </div>
        </div>

        <div class="prism-focus-grid">
          <div class="prism-tag-list">
            <span>Robust evaluation</span>
            <span>Contamination resistance</span>
            <span>Medical NLP</span>
            <span>Expert validation</span>
            <span>Novelty assessment</span>
            <span>Scientific review</span>
          </div>

          <aside class="prism-note-card prism-note-card--compact">
            <span class="prism-note-card__eyebrow">Working Style</span>
            <p>
              I prefer simple, verifiable systems: clear task setups, careful annotation,
              faithful baselines, and tooling that makes research easier to reproduce.
            </p>
          </aside>
        </div>
      </section>
    </div>
  </div>
</section>
