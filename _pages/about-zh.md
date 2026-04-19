---
layout: home
permalink: /zh/
title: "沙华煜"
excerpt: "沙华煜的个人学术主页，聚焦大语言模型可信评测、医疗基准、新颖性评估与科学智能。"
lang: zh
---

{% assign featured_pubs = site.publications | sort: "date" | reverse %}

<section class="home-section prism-shell" id="about">
  <div class="prism-grid">
    <aside class="prism-sidebar reveal">
      <div class="prism-profile-card">
        <div class="prism-avatar-wrap">
          <img class="prism-avatar" src="{{ '/images/' | append: site.author.avatar | relative_url }}" alt="沙华煜" width="320" height="320" loading="eager" decoding="async" fetchpriority="high">
        </div>

        <p class="prism-profile-kicker">个人学术主页</p>
        <h1 class="prism-name">沙华煜</h1>
        <p class="prism-role">软件工程本科生</p>
        <p class="prism-affiliation">复旦大学 · 上海</p>
        <p class="prism-profile-note">
          主要关注大语言模型可信评测、医疗基准构建，以及服务科研流程的智能体与工具系统。
        </p>

        <div class="prism-status-chips" aria-label="研究主题">
          <span>大模型评测</span>
          <span>医疗 AI</span>
          <span>科学智能体</span>
        </div>

        <div class="prism-socials">
          <a href="mailto:{{ site.author.email }}" aria-label="邮箱"><i class="fa-solid fa-envelope"></i></a>
          <a href="https://github.com/{{ site.author.github }}" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i class="fab fa-github"></i></a>
          <a href="{{ site.author.orcid }}" target="_blank" rel="noopener noreferrer" aria-label="ORCID"><i class="fab fa-orcid"></i></a>
          <a href="{{ site.author.openreview }}" target="_blank" rel="noopener noreferrer" aria-label="OpenReview"><i class="fa-solid fa-link"></i></a>
          <a href="{{ '/zh/publications/' | relative_url }}" aria-label="论文"><i class="fa-solid fa-book-open"></i></a>
          <a href="{{ '/zh/cv/' | relative_url }}" aria-label="简历"><i class="fa-solid fa-file-lines"></i></a>
        </div>
      </div>

      <div class="prism-side-card prism-side-card--combined reveal" id="research">
        <h3>研究方向</h3>
        <ul class="prism-interest-list">
          <li>大语言模型可信评测</li>
          <li>医疗基准设计与构建</li>
          <li>新颖性评估</li>
          <li>科学智能系统</li>
        </ul>

        <hr class="prism-side-divider">

        <h3 id="contact">联系方式</h3>
        <ul class="prism-contact-list">
          <li>
            <span class="prism-contact-label">邮箱</span>
            <a href="mailto:{{ site.author.email }}">{{ site.author.email }}</a>
          </li>
          <li>
            <span class="prism-contact-label">地区</span>
            <span>中国上海</span>
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
          <span class="prism-eyebrow">研究简介</span>
          <h2>关于我</h2>
          <p class="prism-hero-subtitle">自 2025 年 3 月起在复旦 NLP 组开展本科科研。</p>
        </div>

        <div class="prism-hero-flow">
          <div class="prism-tagline prism-tagline--hero">
            <p>生存还是死亡，这是一个问题。</p>
          </div>

          <aside class="prism-note-card prism-note-card--hero prism-note-card--hero-float">
            <span class="prism-note-card__eyebrow">研究概览</span>
            <div class="prism-stat-grid prism-stat-grid--hero">
              <div class="prism-stat">
                <span class="prism-stat-label">论文数量</span>
                <span class="prism-stat-value">{{ site.publications | size }} 篇</span>
              </div>
              <div class="prism-stat">
                <span class="prism-stat-label">科研起始</span>
                <span class="prism-stat-value">2025.03</span>
              </div>
              <div class="prism-stat">
                <span class="prism-stat-label">所在课题组</span>
                <span class="prism-stat-value">复旦 NLP 组</span>
              </div>
              <div class="prism-stat">
                <span class="prism-stat-label">当前状态</span>
                <span class="prism-stat-value">本科在读 · 2026届</span>
              </div>
            </div>
          </aside>

          <div class="prism-prose prism-prose--hero">
            <p class="prism-lead">
              我是沙华煜，复旦大学软件工程专业本科生，研究主要围绕
              <strong>大语言模型可信评测</strong>、
              <strong>医疗基准构建</strong>，以及
              <strong>服务科研工作流的智能系统</strong>。
            </p>
            <p>
              自 <strong>2025 年 3 月</strong> 加入 <strong>复旦 NLP 组</strong> 以来，我持续关注评测协议设计、
              真实场景基准构建，以及让实验结果更易验证、更可复现的科研工具系统。
            </p>
          </div>
        </div>
      </section>

      <section class="prism-content-card prism-content-card--news reveal">
        <div class="prism-section-head prism-section-head--split">
          <div>
            <span class="prism-eyebrow">最新动态</span>
            <h2>近期动态</h2>
          </div>
        </div>

        <div class="prism-timeline-scroll" data-scroll-fade tabindex="0" aria-label="可滚动的动态时间线">
          <div class="prism-scroll-fade prism-scroll-fade--top" aria-hidden="true"></div>
          <ol class="prism-timeline">
          {% for item in site.data.news %}
            <li class="prism-timeline__item">
              <span class="prism-timeline__date">{{ item.date }}</span>
              <div class="prism-timeline__body">
                <span class="prism-timeline__badge">{{ item.badge_zh }}</span>
                <p class="prism-timeline__text">{{ item.text_zh }}</p>
                {% if item.links and item.links.size > 0 %}
                <div class="prism-paper-actions">
                  {% for link in item.links %}
                    {% if link.external %}
                      <a class="prism-link-button{% if link.primary %} button-pill--primary{% endif %}" href="{{ link.url }}" target="_blank" rel="noopener noreferrer">{% if link.icon %}<i class="{{ link.icon }}"></i> {% endif %}{{ link.label_zh }}</a>
                    {% else %}
                      <a class="prism-link-button{% if link.primary %} button-pill--primary{% endif %}" href="{{ link.url | prepend: '/zh' | relative_url }}">{{ link.label_zh }}</a>
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
            <span class="prism-eyebrow">论文与项目</span>
            <h2>代表论文</h2>
          </div>
          <a class="prism-view-all" href="{{ '/zh/publications/' | relative_url }}">全部论文 <i class="fa-solid fa-arrow-right-long"></i></a>
        </div>

        <div class="prism-paper-list" id="publications">
          {% for post in featured_pubs limit: 3 %}
            <article class="prism-paper-card">
              <div class="prism-paper-meta">
                <span class="prism-paper-meta-text">{{ post.date | date: "%Y" }}</span>
                <span class="prism-paper-meta-dot"></span>
                <span class="prism-paper-venue-badge">{{ post.venue | default: "预印本" }}</span>
                {% if post.status %}
                  <span class="prism-paper-status prism-paper-status--{{ post.status }}">
                    {% if post.status == 'accepted' %}已接收
                    {% elsif post.status == 'published' %}已发表
                    {% elsif post.status == 'under-review' %}审稿中
                    {% else %}预印本{% endif %}
                  </span>
                {% endif %}
              </div>
              <h3><a href="{{ '/zh' | append: post.url | relative_url }}">{{ post.title }}</a></h3>
              {% include publication-authors-inline.html authors=post.authors equal_contrib=post.equal_contrib_authors corresponding=post.corresponding_authors class="publication-authors-line--card" max=6 %}
              <p class="prism-paper-excerpt-zh">{{ post.excerpt_zh | default: post.excerpt | strip_html | truncate: 160 }}</p>
              <div class="prism-paper-actions">
                <a class="prism-link-button button-pill--primary" href="{{ '/zh' | append: post.url | relative_url }}">详情</a>
                {% if post.paperurl %}
                  <a class="prism-link-button" href="{{ post.paperurl }}" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-file-pdf"></i> 论文</a>
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
            <span class="prism-eyebrow">近期工作</span>
            <h2>当前方向</h2>
          </div>
        </div>

        <div class="prism-focus-grid">
          <div class="prism-tag-list">
            <span>评测鲁棒性</span>
            <span>数据污染防御</span>
            <span>医疗 NLP</span>
            <span>专家验证</span>
            <span>新颖性评估</span>
            <span>科学评审</span>
          </div>

          <aside class="prism-note-card prism-note-card--compact">
            <span class="prism-note-card__eyebrow">做事方式</span>
            <p>
              我更偏好简洁而可验证的系统：任务定义清楚、数据来源可靠、基线充分，
              并且让后续研究者可以方便地复现与复查。
            </p>
          </aside>
        </div>
      </section>
    </div>
  </div>
</section>
