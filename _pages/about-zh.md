---
layout: home
permalink: /zh/
title: "沙华煜"
excerpt: "沙华煜的个人主页——复旦大学软件工程本科生，在做 NLP 研究（大模型评测、医疗基准、科研工具），同时也在折腾计算机组成、RISC-V、数据库和一些小工具。"
lang: zh
---

{% assign featured_pubs = site.publications | sort: "date" | reverse %}

<section class="home-section prism-shell prism-shell--academic" id="about">
  <div class="prism-grid">

    <aside class="prism-academic-sidebar reveal">
      <div class="prism-academic-identity">
        <img class="prism-academic-avatar" src="{{ '/images/' | append: site.author.avatar | relative_url }}" alt="沙华煜" width="320" height="320" loading="eager" decoding="async" fetchpriority="high">
        <h1 class="prism-academic-name">沙华煜</h1>
        <p class="prism-academic-role">软件工程本科生</p>
        <p class="prism-academic-affil">复旦大学 · 上海</p>

        <ul class="prism-academic-socials" aria-label="个人链接">
          <li><a href="mailto:{{ site.author.email }}" aria-label="邮箱"><i class="fa-solid fa-envelope"></i></a></li>
          <li><a href="https://github.com/{{ site.author.github }}" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i class="fab fa-github"></i></a></li>
          <li><a href="{{ site.author.orcid }}" target="_blank" rel="noopener noreferrer" aria-label="ORCID"><i class="fab fa-orcid"></i></a></li>
          <li><a href="{{ site.author.openreview }}" target="_blank" rel="noopener noreferrer" aria-label="OpenReview"><i class="fa-solid fa-book-open"></i></a></li>
          <li><a href="{{ '/zh/cv/' | relative_url }}" aria-label="简历"><i class="fa-solid fa-file-lines"></i></a></li>
        </ul>
      </div>

      <div class="prism-academic-aside" id="research">
        <h3 class="prism-academic-aside__title">近期方向</h3>
        <ul class="prism-academic-list">
          <li>大语言模型可信评测</li>
          <li>医疗基准设计</li>
          <li>新颖性评估</li>
          <li>科学智能系统</li>
        </ul>
      </div>

      <div class="prism-academic-aside" id="contact">
        <h3 class="prism-academic-aside__title">联系方式</h3>
        <dl class="prism-academic-contact">
          <dt>邮箱</dt>
          <dd><a href="mailto:{{ site.author.email }}">{{ site.author.email }}</a></dd>
          <dt>课题组</dt>
          <dd>复旦 NLP 组</dd>
          <dt>OpenReview</dt>
          <dd><a href="{{ site.author.openreview }}" target="_blank" rel="noopener noreferrer">~Huayu_Sha1</a></dd>
        </dl>
      </div>
    </aside>

    <div class="prism-main prism-academic-main">

      <section class="prism-academic-section reveal" aria-labelledby="about-h">
        <h2 class="prism-academic-h2" id="about-h"><span class="prism-academic-eyebrow">关于</span></h2>
        <blockquote class="prism-academic-quote">
          <p>&ldquo;对于不可言说之事，必须保持沉默。&rdquo;</p>
          <cite>&mdash; 维特根斯坦，<em>逻辑哲学论</em>，&sect;7</cite>
        </blockquote>
      </section>

      <section class="prism-academic-section reveal" aria-labelledby="news-h">
        <h2 class="prism-academic-h2" id="news-h"><span class="prism-academic-eyebrow">动态</span></h2>
        <ol class="prism-academic-news">
          {% for item in site.data.news limit: 6 %}
            <li class="prism-academic-news__row">
              <span class="prism-academic-news__date">{{ item.date }}</span>
              <span class="prism-academic-news__badge">{{ item.badge_zh | default: item.badge }}</span>
              <p class="prism-academic-news__text">
                {{ item.text_zh | default: item.text }}
                {% if item.links and item.links.size > 0 %}
                  {% for link in item.links %}
                    {% if link.external %}
                      <a class="prism-academic-news__link" href="{{ link.url }}" target="_blank" rel="noopener noreferrer">{{ link.label_zh | default: link.label }}&nbsp;<span aria-hidden="true">↗</span></a>
                    {% else %}
                      <a class="prism-academic-news__link" href="{{ link.url | prepend: '/zh' | relative_url }}">{{ link.label_zh | default: link.label }}&nbsp;<span aria-hidden="true">→</span></a>
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
          <h2 class="prism-academic-h2" id="pubs-h"><span class="prism-academic-eyebrow">代表论文</span></h2>
          <a class="prism-academic-more" href="{{ '/zh/publications/' | relative_url }}">全部论文 →</a>
        </header>

        <ul class="prism-academic-pub-list">
          {% for post in featured_pubs limit: 3 %}
            <li class="prism-academic-pub">
              <span class="prism-academic-pub__year">{{ post.date | date: "%Y" }}</span>
              <div class="prism-academic-pub__body">
                <div class="prism-academic-pub__meta">
                  <span class="prism-academic-pub__venue">{{ post.venue | default: "预印本" }}</span>
                  {% if post.status %}
                    <span class="prism-academic-pub__status prism-academic-pub__status--{{ post.status }}">
                      {%- if post.status == 'accepted' -%}已接收
                      {%- elsif post.status == 'published' -%}已发表
                      {%- elsif post.status == 'under-review' -%}审稿中
                      {%- else -%}预印本{%- endif -%}
                    </span>
                  {% endif %}
                </div>
                <h3 class="prism-academic-pub__title"><a href="{{ '/zh' | append: post.url | relative_url }}">{{ post.title }}</a></h3>
                {% include publication-authors-inline.html authors=post.authors equal_contrib=post.equal_contrib_authors corresponding=post.corresponding_authors class="prism-academic-pub__authors" max=8 %}
                <div class="prism-academic-pub__actions">
                  <a class="prism-academic-link" href="{{ '/zh' | append: post.url | relative_url }}">详情</a>
                  {% if post.paperurl %}<a class="prism-academic-link" href="{{ post.paperurl }}" target="_blank" rel="noopener noreferrer">PDF&nbsp;<span aria-hidden="true">↗</span></a>{% endif %}
                  {% if post.codeurl %}<a class="prism-academic-link" href="{{ post.codeurl }}" target="_blank" rel="noopener noreferrer">代码&nbsp;<span aria-hidden="true">↗</span></a>{% endif %}
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
