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
          <img class="prism-avatar" src="{{ '/images/' | append: site.author.avatar | relative_url }}" alt="沙华煜">
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

      <div class="prism-side-card reveal" id="research">
        <h3>研究方向</h3>
        <ul class="prism-interest-list">
          <li>大语言模型可信评测</li>
          <li>医疗基准设计与构建</li>
          <li>新颖性评估</li>
          <li>科学智能系统</li>
        </ul>
      </div>

      <div class="prism-side-card prism-side-card--soft reveal" id="contact">
        <h3>联系方式</h3>
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
        </div>

        <div class="prism-hero-grid">
          <div class="prism-hero-copy">
            <div class="prism-tagline">
              <p>生存还是死亡，这是一个问题。</p>
            </div>

            <div class="prism-prose">
              <p class="prism-lead">
                我是沙华煜，复旦大学软件工程专业本科生。我的研究主要围绕
                <strong>大语言模型可信评测</strong>、
                <strong>医疗基准构建</strong>，以及
                <strong>服务科研工作流的智能系统</strong>。
              </p>
              <p>
                我希望把研究做得更可复现、更可落地，也更容易被验证与信任：
                从数据和协议设计，到工具链实现，再到系统化评估与分析。
              </p>
            </div>
          </div>

          <aside class="prism-note-card prism-note-card--hero">
            <span class="prism-note-card__eyebrow">快速概览</span>
            <div class="prism-stat-grid">
              <div class="prism-stat">
                <span class="prism-stat-label">核心关注</span>
                <span class="prism-stat-value">可信 AI 评测</span>
              </div>
              <div class="prism-stat">
                <span class="prism-stat-label">应用场景</span>
                <span class="prism-stat-value">医疗 NLP 与科学智能体</span>
              </div>
              <div class="prism-stat">
                <span class="prism-stat-label">所在地</span>
                <span class="prism-stat-value">复旦大学，上海</span>
              </div>
            </div>
          </aside>
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
                <span class="prism-paper-meta-text">{{ post.venue | default: "预印本" }}</span>
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
