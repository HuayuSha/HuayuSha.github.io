---
layout: home
permalink: /
title: "Huayu Sha"
excerpt: "Personal site of Huayu Sha — undergraduate at Fudan University doing NLP research (LLM evaluation, medical benchmarks, scientific tooling) while also tinkering with systems, RISC-V, databases, and small dev tools."
redirect_from:
  - /about/
  - /about.html
---

{% assign featured_pubs = site.publications | sort: "date" | reverse %}

<section class="home-section prism-shell prism-shell--academic" id="about">
  <div class="prism-grid">

    <aside class="prism-academic-sidebar reveal">
      <div class="prism-academic-identity">
        <img class="prism-academic-avatar" src="{{ '/images/' | append: site.author.avatar | relative_url }}" alt="{{ site.author.name }}" width="320" height="320" loading="eager" decoding="async" fetchpriority="high">
        <h1 class="prism-academic-name">{{ site.author.name }}</h1>
        <p class="prism-academic-role">Software Engineering, Undergraduate</p>
        <p class="prism-academic-affil">{{ site.author.employer }} · Shanghai</p>

        <ul class="prism-academic-socials" aria-label="Profile links">
          <li><a href="mailto:{{ site.author.email }}" aria-label="Email"><i class="fa-solid fa-envelope"></i></a></li>
          <li><a href="https://github.com/{{ site.author.github }}" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i class="fab fa-github"></i></a></li>
          <li><a href="{{ site.author.orcid }}" target="_blank" rel="noopener noreferrer" aria-label="ORCID"><i class="fab fa-orcid"></i></a></li>
          <li><a href="{{ site.author.openreview }}" target="_blank" rel="noopener noreferrer" aria-label="OpenReview"><i class="fa-solid fa-book-open"></i></a></li>
          <li><a href="{{ '/cv/' | relative_url }}" aria-label="CV"><i class="fa-solid fa-file-lines"></i></a></li>
        </ul>
      </div>

      <div class="prism-academic-aside" id="research">
        <h3 class="prism-academic-aside__title">Current focus</h3>
        <ul class="prism-academic-list">
          <li>Trustworthy LLM evaluation</li>
          <li>Medical benchmark design</li>
          <li>Novelty assessment</li>
          <li>Scientific intelligence systems</li>
        </ul>
      </div>

      <div class="prism-academic-aside" id="contact">
        <h3 class="prism-academic-aside__title">Contact</h3>
        <dl class="prism-academic-contact">
          <dt>Email</dt>
          <dd><a href="mailto:{{ site.author.email }}">{{ site.author.email }}</a></dd>
          <dt>Group</dt>
          <dd>Fudan NLP Group</dd>
          <dt>OpenReview</dt>
          <dd><a href="{{ site.author.openreview }}" target="_blank" rel="noopener noreferrer">~Huayu_Sha1</a></dd>
        </dl>
      </div>
    </aside>

    <div class="prism-main prism-academic-main">

      <section class="prism-academic-section reveal" aria-labelledby="about-h">
        <h2 class="prism-academic-h2" id="about-h"><span class="prism-academic-eyebrow">About</span></h2>
        <blockquote class="prism-academic-quote">
          <p>&ldquo;Whereof one cannot speak, thereof one must be silent.&rdquo;</p>
          <cite>&mdash; Ludwig Wittgenstein, <em>Tractatus Logico-Philosophicus</em>, &sect;7</cite>
        </blockquote>
      </section>

      <section class="prism-academic-section reveal" aria-labelledby="news-h">
        <h2 class="prism-academic-h2" id="news-h"><span class="prism-academic-eyebrow">News</span></h2>
        <ol class="prism-academic-news">
          {% for item in site.data.news limit: 6 %}
            <li class="prism-academic-news__row">
              <span class="prism-academic-news__date">{{ item.date }}</span>
              <span class="prism-academic-news__badge">{{ item.badge }}</span>
              <p class="prism-academic-news__text">
                {{ item.text }}
                {% if item.links and item.links.size > 0 %}
                  {% for link in item.links %}
                    {% if link.external %}
                      <a class="prism-academic-news__link" href="{{ link.url }}" target="_blank" rel="noopener noreferrer">{{ link.label }}&nbsp;<span aria-hidden="true">↗</span></a>
                    {% else %}
                      <a class="prism-academic-news__link" href="{{ link.url | relative_url }}">{{ link.label }}&nbsp;<span aria-hidden="true">→</span></a>
                    {% endif %}
                  {% endfor %}
                {% endif %}
              </p>
            </li>
          {% endfor %}
        </ol>
      </section>

      <section class="prism-academic-section reveal" aria-labelledby="pubs-h" id="publications">
        <header class="prism-academic-section__head">
          <h2 class="prism-academic-h2" id="pubs-h"><span class="prism-academic-eyebrow">Selected Publications</span></h2>
          <a class="prism-academic-more" href="{{ '/publications/' | relative_url }}">All publications →</a>
        </header>

        <ul class="prism-academic-pub-list">
          {% for post in featured_pubs limit: 3 %}
            <li class="prism-academic-pub">
              <span class="prism-academic-pub__year">{{ post.date | date: "%Y" }}</span>
              <div class="prism-academic-pub__body">
                <div class="prism-academic-pub__meta">
                  <span class="prism-academic-pub__venue">{{ post.venue | default: "Preprint" }}</span>
                  {% if post.status %}
                    <span class="prism-academic-pub__status prism-academic-pub__status--{{ post.status }}">
                      {%- if post.status == 'accepted' -%}Accepted
                      {%- elsif post.status == 'published' -%}Published
                      {%- elsif post.status == 'under-review' -%}Under Review
                      {%- else -%}Preprint{%- endif -%}
                    </span>
                  {% endif %}
                </div>
                <h3 class="prism-academic-pub__title"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
                {% include publication-authors-inline.html authors=post.authors equal_contrib=post.equal_contrib_authors corresponding=post.corresponding_authors class="prism-academic-pub__authors" max=8 %}
                <div class="prism-academic-pub__actions">
                  <a class="prism-academic-link" href="{{ post.url | relative_url }}">Details</a>
                  {% if post.paperurl %}<a class="prism-academic-link" href="{{ post.paperurl }}" target="_blank" rel="noopener noreferrer">PDF&nbsp;<span aria-hidden="true">↗</span></a>{% endif %}
                  {% if post.codeurl %}<a class="prism-academic-link" href="{{ post.codeurl }}" target="_blank" rel="noopener noreferrer">Code&nbsp;<span aria-hidden="true">↗</span></a>{% endif %}
                  {% if post.bibtexurl %}<a class="prism-academic-link" href="{{ post.bibtexurl }}" target="_blank" rel="noopener noreferrer">BibTeX&nbsp;<span aria-hidden="true">↗</span></a>{% endif %}
                </div>
              </div>
            </li>
          {% endfor %}
        </ul>
      </section>

    </div>
  </div>
</section>
