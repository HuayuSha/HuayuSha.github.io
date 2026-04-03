---
layout: single
title: "简历"
permalink: /zh/cv/
lang: zh
author_profile: false
use_publication_sidebar: true
share: false
related: false
redirect_from:
  - /zh/resume
---

{% include base_path %}

## 教育背景

- 复旦大学软件工程专业本科生，2023–至今

## 研究方向

- 大语言模型可信评测
- 医疗 NLP 与真实世界临床基准
- 开放式新颖性评估与科学智能

## 链接

<ul class="cv-link-list">
  <li><a href="https://www.huayusha.org" target="_blank" rel="noopener noreferrer"><span>主页</span><span>huayusha.org</span></a></li>
  <li><a href="https://github.com/HuayuSha" target="_blank" rel="noopener noreferrer"><span>GitHub</span><span>@HuayuSha</span></a></li>
  <li><a href="https://orcid.org/0009-0006-1742-5816" target="_blank" rel="noopener noreferrer"><span>ORCID</span><span>0009-0006-1742-5816</span></a></li>
  <li><a href="https://openreview.net/profile?id=~Huayu_Sha1" target="_blank" rel="noopener noreferrer"><span>OpenReview</span><span>~Huayu_Sha1</span></a></li>
  <li><a href="mailto:23302010032@m.fudan.edu.cn"><span>邮箱</span><span>23302010032@m.fudan.edu.cn</span></a></li>
</ul>

## 代表论文

<ul class="cv-publication-list">{% for post in site.publications reversed %}
  {% include archive-single-cv.html %}
{% endfor %}</ul>
