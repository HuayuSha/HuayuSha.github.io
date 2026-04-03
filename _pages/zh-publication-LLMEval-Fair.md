---
layout: single
title: "LLMEval-Fair: A Large-Scale Longitudinal Study on Robust and Fair Evaluation of Large Language Models"
permalink: /zh/publication/LLMEval-Fair/
lang: zh
author_profile: false
share: false
related: false
excerpt: 'LLMEval-Fair 通过动态采样、反作弊约束与长期时间轴分析，研究大模型评测中的公平性与稳健性问题，避免静态公开测试集带来的污染与误判。'
date: 2025-08-07
venue: 'ACL 2026 Submission (Under Review)'
paperurl: 'https://arxiv.org/abs/2508.05452'
bibtexurl: 'https://dblp.org/rec/journals/corr/abs-2508-05452.bib'
codeurl: 'https://github.com/llmeval/LLMEval-Fair'
authors:
  - Ming Zhang
  - Yujiong Shen
  - Jingyi Deng
  - Yuhui Wang
  - Huayu Sha
  - Kexin Tan
  - Qiyuan Peng
  - Yue Zhang
  - Junzhe Wang
  - Shichun Liu
  - Yueyuan Huang
  - Changhao Jiang
  - Jingqi Tong
  - Yilong Wu
  - Zhihao Zhang
  - Mingqi Wu
  - Mingxu Chai
  - Zhiheng Xi
  - Shihan Dou
  - Tao Gui
  - Qi Zhang
  - Xuanjing Huang
equal_contrib_authors:
  - Ming Zhang
  - Yujiong Shen
  - Jingyi Deng
  - Yuhui Wang
corresponding_authors:
  - Ming Zhang
  - Qi Zhang
citation: |-
  @article{abs-2508-05452,
    author       = {Ming Zhang and
                    Yujiong Shen and
                    Jingyi Deng and
                    Yuhui Wang and
                    Yue Zhang and
                    Junzhe Wang and
                    Shichun Liu and
                    Shihan Dou and
                    Huayu Sha and
                    Qiyuan Peng and
                    Changhao Jiang and
                    Jingqi Tong and
                    Yilong Wu and
                    Zhihao Zhang and
                    Mingqi Wu and
                    Zhiheng Xi and
                    Mingxu Chai and
                    Tao Liang and
                    Zhihui Fei and
                    Zhen Wang and
                    Mingyang Wan and
                    Guojun Ma and
                    Tao Gui and
                    Qi Zhang and
                    Xuanjing Huang},
    title        = {LLMEval-3: {A} Large-Scale Longitudinal Study on Robust and Fair Evaluation
                    of Large Language Models},
    journal      = {CoRR},
    volume       = {abs/2508.05452},
    year         = {2025},
    url          = {https://doi.org/10.48550/arXiv.2508.05452},
    doi          = {10.48550/ARXIV.2508.05452},
    eprinttype   = {arXiv},
    eprint       = {2508.05452},
    biburl       = {https://dblp.org/rec/journals/corr/abs-2508-05452.bib},
    bibsource    = {dblp computer science bibliography, https://dblp.org}
  }
---

LLMEval-Fair 关注大模型评测中的一个核心问题：排行榜分数的提升，究竟代表了模型能力真的在变强，还是只是对公开静态测试集的部分“过拟合”与污染利用。

**当前状态：** 已投稿至 **ACL 2026**（under review）。  
**公开版本：** arXiv preprint 已可访问。

> 说明：DBLP 当前仍以 **LLMEval-3** (`abs-2508-05452`) 的标题收录该预印本条目。

![LLMEval logo](https://raw.githubusercontent.com/HuayuSha/LLMEval-3/main/pic/llmeval-logo.png)

## 基准规模

根据公开仓库与说明，LLMEval-Fair 当前覆盖：

- 13 个一级学科方向
- 50+ 个二级子领域
- 约 20 万条生成式问答题目
- 面向更大规模题库的持续扩展目标

与只做选择题的传统 benchmark 不同，它更强调**生成式作答**，包括简答、分析、计算与论述等形式。

## 核心评测设计

### 动态采样 + 反作弊协议

- 每次评测从大题库中重新抽取新题子集
- 同机构模型的重复暴露会被控制
- 题目按在线顺序发放，降低批量爬取与泄漏风险

这一设计的核心目标，是尽量减少“模型提前见过题”对排行榜的污染。

### Judge-based 自动评分

- 使用与评分 rubric 对齐的自动化判分流程
- 单题分数映射到离散评分尺度
- 同时关注**答案正确性**与**推理合理性**

### 双指标报告

- **Absolute score：** 原始归一化表现
- **Relative score：** 相对当前 SOTA 的归一化对比结果

双视角报告可以减少由于“模型总体天花板变化”带来的解释偏差。

## 长期追踪视角

LLMEval-Fair 的另一个重要特点，是它强调**时间轴上的动态比较**。公开排行榜与模型趋势分析表明：

- 不同学科上的模型进步并不同步
- 单次 benchmark snapshot 很容易误导判断
- 如果缺少污染控制，仅看某一时刻分数并不能稳定反映真实能力变化

![Model trend over time](https://raw.githubusercontent.com/HuayuSha/LLMEval-3/main/pic/trend_of_models.png)

## 项目使用原则

从仓库定位来看，它不仅是数据集，也是 benchmark + leaderboard 系统。要想让比较结果可信，关键在于同时保持：

- 评分协议固定
- 每次评测动态抽题
- 提交流程与评测流程严格受控

项目地址：[github.com/HuayuSha/LLMEval-3](https://github.com/HuayuSha/LLMEval-3)  
排行榜网站：[llmeval.com](http://llmeval.com/)

## 实用理解

如果你的目标是做**长期、稳健、尽量公平的大模型比较**，LLMEval-Fair 的价值不只是题目规模，更在于它把**评测治理机制**本身纳入了系统设计：动态测试、反泄漏控制、时间轴分析，这些都被当作一等公民来处理。
