---
layout: home
permalink: /zh/
title: "沙华煜"
excerpt: "沙华煜的个人学术主页，复旦大学软件工程专业学生，研究方向为大语言模型可信评测、医疗基准构建与科学智能。"
lang: zh
---

{% assign featured_pubs = site.publications | sort: "date" | reverse %}

<section class="home-section prism-shell" id="about">
  <div class="prism-grid">
    <aside class="prism-sidebar reveal">
      <div class="prism-profile-card">
        <div class="prism-avatar-wrap">
          <img class="prism-avatar" src="{{ '/images/' | append: site.author.avatar | relative_url }}" alt="{{ site.author.name }}">
        </div>

        <h1 class="prism-name">沙华煜</h1>
        <p class="prism-role">软件工程 · 复旦大学</p>
        <p class="prism-affiliation">复旦大学</p>

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
          <li>医疗基准构建</li>
          <li>科学智能系统</li>
          <li>评测体系设计</li>
        </ul>
      </div>

      <div class="prism-side-card prism-side-card--soft reveal" id="contact">
        <h3>联系方式</h3>
        <p>邮箱：<a href="mailto:{{ site.author.email }}">{{ site.author.email }}</a></p>
        <p>地区：中国上海</p>
        <p>GitHub：<a href="https://github.com/{{ site.author.github }}" target="_blank" rel="noopener noreferrer">@{{ site.author.github }}</a></p>
        <p>ORCID：<a href="{{ site.author.orcid }}" target="_blank" rel="noopener noreferrer">0009-0006-1742-5816</a></p>
        <p>OpenReview：<a href="{{ site.author.openreview }}" target="_blank" rel="noopener noreferrer">~Huayu_Sha1</a></p>
      </div>
    </aside>

    <div class="prism-main">
      <section class="prism-content-card reveal">
        <div class="prism-section-head">
          <h2>关于我</h2>
        </div>
        <div class="prism-tagline">
          <p>生存还是死亡，这是一个问题。</p>
        </div>
        <div class="prism-prose">
          <p>
            我是沙华煜，复旦大学软件工程专业本科生。我的研究主要围绕
            <strong>大语言模型评测</strong>、
            <strong>医疗基准构建</strong>，以及
            <strong>面向科研流程的智能系统</strong>。
          </p>
          <p>
            我关注把研究做得可复现、可落地、可解释：
            从数据与评测设计，到工具链实现与系统化验证。
          </p>
        </div>
      </section>

      <section class="prism-content-card reveal">
        <div class="prism-section-head prism-section-head--split">
          <h2>代表论文</h2>
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
                <a class="prism-link-button" href="{{ '/zh' | append: post.url | relative_url }}">详情</a>
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
        <div class="prism-section-head">
          <h2>当前方向</h2>
        </div>
        <div class="prism-tag-list">
          <span>评测鲁棒性</span>
          <span>数据污染防御</span>
          <span>医疗 NLP</span>
          <span>专家验证</span>
          <span>新颖性评估</span>
          <span>科学评审</span>
        </div>
      </section>
    </div>
  </div>
</section>
