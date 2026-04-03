---
layout: single
title: "OpenNovelty: An LLM-powered Agentic System for Verifiable Scholarly Novelty Assessment"
permalink: /zh/publication/OpenNovelty/
lang: zh
author_profile: false
share: false
related: false
excerpt: 'OpenNovelty 将学术新颖性判断建模为带证据链的多阶段流程：检索相关工作、比较贡献声明、输出可核验的新颖性报告，而不是只给出黑盒判断。'
date: 2026-01-04
venue: 'arXiv preprint'
paperurl: 'https://arxiv.org/abs/2601.01576'
bibtexurl: 'https://dblp.org/rec/journals/corr/abs-2601-01576.bib'
codeurl: 'https://github.com/january-blue/OpenNovelty'
authors:
  - Ming Zhang
  - Kexin Tan
  - Yueyuan Huang
  - Yujiong Shen
  - Chunchun Ma
  - Li Ju
  - Xinran Zhang
  - Yuhui Wang
  - Wenqing Jing
  - Jingyi Deng
  - Huayu Sha
  - Binze Hu
  - Jingqi Tong
  - Changhao Jiang
  - Yage Geng
  - Yuankai Ying
  - Yue Zhang
  - Zhangyue Yin
  - Zhiheng Xi
  - Shihan Dou
  - Tao Gui
  - Qi Zhang
  - Xuanjing Huang
equal_contrib_authors:
  - Ming Zhang
  - Kexin Tan
  - Yueyuan Huang
corresponding_authors:
  - Ming Zhang
  - Qi Zhang
citation: |-
  @article{abs-2601-01576,
    author       = {Ming Zhang and
                    Kexin Tan and
                    Yueyuan Huang and
                    Yujiong Shen and
                    Chunchun Ma and
                    Li Ju and
                    Xinran Zhang and
                    Yuhui Wang and
                    Wenqing Jing and
                    Jingyi Deng and
                    Huayu Sha and
                    Binze Hu and
                    Jingqi Tong and
                    Changhao Jiang and
                    Yage Geng and
                    Yuankai Ying and
                    Yue Zhang and
                    Zhangyue Yin and
                    Zhiheng Xi and
                    Shihan Dou and
                    Tao Gui and
                    Qi Zhang and
                    Xuanjing Huang},
    title        = {OpenNovelty: An LLM-powered Agentic System for Verifiable Scholarly
                    Novelty Assessment},
    journal      = {CoRR},
    volume       = {abs/2601.01576},
    year         = {2026},
    url          = {https://doi.org/10.48550/arXiv.2601.01576},
    doi          = {10.48550/ARXIV.2601.01576},
    eprinttype   = {arXiv},
    eprint       = {2601.01576},
    biburl       = {https://dblp.org/rec/journals/corr/abs-2601-01576.bib},
    bibsource    = {dblp computer science bibliography, https://dblp.org}
  }
---

OpenNovelty 关注科研评审中一个非常关键、但也非常困难的问题：**如何对论文的新颖性给出可核验、可追踪的判断，而不是一句黑盒式结论**。

![OpenNovelty pipeline](https://raw.githubusercontent.com/january-blue/OpenNovelty/main/docs/images/pipeline_overview.png)

## 为什么这个系统重要

现实中的 novelty review 往往面临几个困难：

- 评审时间非常紧张
- 不同评审人的检索覆盖范围差异很大
- “这篇文章到底新在哪里”常常缺乏显式证据链

OpenNovelty 并不把新颖性判断当成一次性的 LLM 打分，而是把它重构为一个**可复现的多阶段流程问题**。

## 四阶段流程

公开仓库把系统拆成了四个阶段：

1. **阶段一：信息抽取**  
   提取论文文本、任务定义与核心贡献声明。
2. **阶段二：相关工作检索**  
   检索候选相关文献并建立引用索引。
3. **阶段三：深度分析**  
   将论文贡献与检索到的文献逐项比较，并归类新颖性证据。
4. **阶段四：报告生成**  
   输出带引用、证据片段与结构化结论的新颖性报告（Markdown / PDF）。

## 中间产物的价值

它不是只输出一个最终结论，而是保留多个中间文件，例如：

- `phase1_extracted.json`
- `citation_index.json`
- `phase3_complete_report.json`
- 最终新颖性报告（`.md` / `.pdf`）

这意味着整个判断过程可以被审计、调试和回溯，更适合真正用于科研辅助，而不是只做演示。

## 工程实现特点

从仓库结构来看，这个项目的实现思路比较清晰：

- 使用 Python 3.8+ 环境
- 各阶段脚本解耦，可以分步运行
- 检索、分析、渲染之间通过中间 JSON 产物衔接
- 同时支持单篇论文和批处理工作流

## 实用理解

如果你需要的是“为什么它新 / 为什么它不新”的**可解释性新颖性分析**，OpenNovelty 的价值会非常明显。它尤其适合：

- 内部预审
- 大规模投稿初筛
- 需要证据链支撑的 reviewer assistance
- 学术新颖性分析与报告自动生成

## 总结

OpenNovelty 不是简单地让模型替你说“新”或“不新”，而是试图把这个过程变成**带证据、可复查、可调试的系统工程**。这也是它与很多直接用 LLM 做 novelty judgment 的方案最不一样的地方。
