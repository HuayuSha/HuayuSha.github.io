---
layout: default
title: "简历"
excerpt: "沙华煜的个人简历页面，包含教育背景、研究方向、链接信息与代表论文。"
permalink: /zh/cv/
lang: zh
author_profile: false
share: false
related: false
redirect_from:
  - /zh/resume
---

{% include base_path %}

{%- comment -%}
  Source the Chinese publication list from `_pages/zh-publication-*.md`,
  matching the strategy used by `publications-zh.html`.
{%- endcomment -%}
{%- assign zh_pubs_unsorted = "" | split: "" -%}
{%- for p in site.pages -%}
  {%- if p.lang == 'zh' and p.permalink contains '/zh/publication/' -%}
    {%- assign zh_pubs_unsorted = zh_pubs_unsorted | push: p -%}
  {%- endif -%}
{%- endfor -%}
{%- assign all_pubs = zh_pubs_unsorted | sort: "date" | reverse -%}

<section class="prism-shell prism-shell--cv">
  <div class="prism-cv">

    <header class="prism-cv-hero">
      <p class="prism-cv-hero__eyebrow">
        <span class="prism-cv-hero__rule" aria-hidden="true"></span>简历
      </p>
      <h1 class="prism-cv-hero__title">沙华煜</h1>
      <p class="prism-cv-hero__lead">
        <strong>复旦大学</strong> 软件工程本科生 ·
        2025 年 3 月起在 <strong>复旦大学自然语言处理实验室</strong> 担任研究学生。
      </p>
    </header>

    <div class="prism-cv-grid">

      <aside class="prism-cv-sidebar">

        <div class="prism-cv-card prism-cv-card--identity">
          <img class="prism-cv-avatar" src="{{ '/images/' | append: site.author.avatar | relative_url }}" alt="沙华煜">
          <div class="prism-cv-identity__body">
            <p class="prism-cv-identity__name">沙华煜</p>
            <p class="prism-cv-identity__role">本科生 · 软件工程</p>
            <p class="prism-cv-identity__affil">复旦大学</p>
          </div>
        </div>

        <div class="prism-cv-card">
          <h3 class="prism-cv-card__title">联系方式</h3>
          <ul class="prism-cv-links">
            <li>
              <a href="mailto:{{ site.author.email }}">
                <span class="prism-cv-links__label">邮箱</span>
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
                <span class="prism-cv-links__label">主页</span>
                <span class="prism-cv-links__value">huayusha.org<span aria-hidden="true">&nbsp;↗</span></span>
              </a>
            </li>
          </ul>
        </div>

      </aside>

      <div class="prism-cv-main">

        <section class="prism-cv-section" aria-labelledby="edu-h">
          <h2 class="prism-cv-h2" id="edu-h">
            <span class="prism-cv-eyebrow">教育背景</span>
          </h2>
          <ol class="prism-cv-timeline">
            <li class="prism-cv-timeline__item">
              <span class="prism-cv-timeline__when">2023 — 至今</span>
              <div class="prism-cv-timeline__body">
                <p class="prism-cv-timeline__head">软件工程本科</p>
                <p class="prism-cv-timeline__org">复旦大学，上海</p>
              </div>
            </li>
          </ol>
        </section>

        <section class="prism-cv-section" aria-labelledby="aff-h">
          <h2 class="prism-cv-h2" id="aff-h">
            <span class="prism-cv-eyebrow">研究经历</span>
          </h2>
          <ol class="prism-cv-timeline">
            <li class="prism-cv-timeline__item">
              <span class="prism-cv-timeline__when">2025 年 3 月 — 至今</span>
              <div class="prism-cv-timeline__body">
                <p class="prism-cv-timeline__head">研究学生</p>
                <p class="prism-cv-timeline__org">复旦大学自然语言处理实验室 · 大语言模型可信评测、医疗基准</p>
              </div>
            </li>
          </ol>
        </section>

        <section class="prism-cv-section" aria-labelledby="int-h">
          <h2 class="prism-cv-h2" id="int-h">
            <span class="prism-cv-eyebrow">研究方向</span>
          </h2>
          <ul class="prism-cv-tags">
            <li>大语言模型可信评测</li>
            <li>医疗基准与临床 NLP</li>
            <li>开放式新颖性评估</li>
            <li>科学智能系统</li>
            <li>抗污染评测方法</li>
          </ul>
        </section>

        <section class="prism-cv-section" aria-labelledby="pubs-h">
          <header class="prism-cv-section__head">
            <h2 class="prism-cv-h2" id="pubs-h">
              <span class="prism-cv-eyebrow">代表论文</span>
            </h2>
            <a class="prism-cv-more" href="{{ '/zh/publications/' | relative_url }}">所有论文 →</a>
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
                        {%- if post.status == 'accepted' -%}已接收
                        {%- elsif post.status == 'published' -%}已发表
                        {%- elsif post.status == 'under-review' -%}审稿中
                        {%- else -%}预印本{%- endif -%}
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
                    {% if post.codeurl %}<a class="prism-cv-link" href="{{ post.codeurl }}" target="_blank" rel="noopener noreferrer">代码<span aria-hidden="true">&nbsp;↗</span></a>{% endif %}
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
      <a class="prism-cv-footer__link" href="{{ '/zh/' | relative_url }}">
        <span aria-hidden="true">←</span> 返回首页
      </a>
      <span class="prism-cv-footer__divider" aria-hidden="true">·</span>
      <a class="prism-cv-footer__link" href="{{ '/zh/publications/' | relative_url }}">
        论文 <span aria-hidden="true">→</span>
      </a>
    </footer>

  </div>
</section>
