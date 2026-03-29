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
          <a href="{{ '/publications/' | relative_url }}" aria-label="论文"><i class="fa-solid fa-book-open"></i></a>
          <a href="{{ '/cv/' | relative_url }}" aria-label="简历"><i class="fa-solid fa-file-lines"></i></a>
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
        <p>{{ site.author.email }}</p>
        <p>中国上海</p>
        <p><a href="https://github.com/{{ site.author.github }}" target="_blank" rel="noopener noreferrer">github.com/{{ site.author.github }}</a></p>
      </div>
    </aside>

    <div class="prism-main">
      <section class="prism-content-card reveal">
        <div class="prism-section-head">
          <h2>关于我</h2>
        </div>
        <div class="prism-tagline">
          <p>让语言模型的评测更诚实、更稳健、更有意义。</p>
        </div>
        <div class="prism-prose">
          <p>
            我是复旦大学软件工程专业学生，目前的研究聚焦于
            <strong>大语言模型的可信评测</strong>、
            <strong>医疗与真实场景基准构建</strong>，以及
            <strong>面向新颖性与推理质量的科学智能系统</strong>。
          </p>
          <p>
            我尤其关注对抗数据污染的评测管线设计——让评测流程更贴近真实使用场景，并与我们对现代模型能力的实际主张保持一致。
          </p>
        </div>
      </section>

      <section class="prism-content-card reveal">
        <div class="prism-section-head prism-section-head--split">
          <h2>代表论文</h2>
          <a class="prism-view-all" href="{{ '/publications/' | relative_url }}">全部论文 <i class="fa-solid fa-arrow-right-long"></i></a>
        </div>

        <div class="prism-paper-list" id="publications">
          {% for post in featured_pubs limit: 3 %}
            <article class="prism-paper-card">
              <div class="prism-paper-meta">
                <span class="prism-paper-meta-text">{{ post.date | date: "%Y" }}</span>
                <span class="prism-paper-meta-dot"></span>
                <span class="prism-paper-meta-text">{{ post.venue | default: "预印本" }}</span>
              </div>
              <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
              <p class="prism-paper-excerpt-zh">{{ post.excerpt_zh | default: post.excerpt | strip_html | truncate: 160 }}</p>
              <div class="prism-paper-actions">
                <a class="prism-link-button" href="{{ post.url | relative_url }}">详情</a>
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
