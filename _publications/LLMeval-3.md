---
title: "LLMEval-Fair: A Large-Scale Longitudinal Study on Robust and Fair Evaluation of Large Language Models"
collection: publications
category: manuscripts
permalink: /publication/LLMEval-Fair
excerpt: 'LLMEval-Fair proposes a dynamic evaluation framework that samples unseen test sets from a large question bank, combines contamination-resistant curation with anti-cheating design, and studies frontier models longitudinally to produce a more reliable picture of progress than static leaderboards. Current manuscript status: ACL 2026 submission (under review).'
date: 2025-08-07
venue: 'ACL 2026 Submission (Under Review)'
paperurl: 'https://arxiv.org/abs/2508.05452'
codeurl: 'https://github.com/HuayuSha/LLMEval-3'
citation: 'Ming Zhang, Yujiong Shen, Jingyi Deng, Yuhui Wang, Yue Zhang, Junzhe Wang, Shichun Liu, Shihan Dou, Huayu Sha, Qiyuan Peng, Changhao Jiang, Jingqi Tong, Yilong Wu, Zhihao Zhang, Mingqi Wu, Zhiheng Xi, Mingxu Chai, Tao Liang, Zhihui Fei, Zhen Wang, Mingyang Wan, Guojun Ma, Tao Gui, Qi Zhang, and Xuanjing Huang. LLMEval-Fair: A Large-Scale Longitudinal Study on Robust and Fair Evaluation of Large Language Models. Submitted to ACL 2026 (under review); preprint arXiv:2508.05452.'
---

LLMEval-Fair studies a core reliability issue in LLM benchmarking: whether leaderboard gains reflect real capability growth, or partial overfitting to static public tests.

**Current status:** Submitted to **ACL 2026** (under review).  
**Public version:** arXiv preprint available.

![LLMEval logo](https://raw.githubusercontent.com/HuayuSha/LLMEval-3/main/pic/llmeval-logo.png)

## Benchmark scope

From the project repository:

- 13 major disciplines (philosophy to medicine and engineering)
- 50+ sub-disciplines
- ~200,000 generative QA items in the current bank
- design target is continued expansion toward larger-scale coverage

Unlike multiple-choice-only setups, this benchmark emphasizes **generative answering** (short answer, analysis, calculation, essay-style tasks).

## Core evaluation design

### Dynamic sampling + anti-cheating protocol

- Each run samples a fresh subset (reported 1,000 questions per evaluation run)
- For same-institution model submissions, repeated exposure is controlled
- Questions are delivered sequentially online to reduce crawling/harvesting risk

### Judge-based scoring

- Automated scoring with rubric-aligned prompts
- Per-question score mapped from a discrete scale
- Focus on both **answer correctness** and **reasoning validity**

### Two-score reporting

- **Absolute score**: raw normalized performance
- **Relative score**: normalized to current SOTA baseline

This two-view setup reduces interpretation bias caused by changing model ceilings over time.

## Longitudinal finding

The public leaderboard and temporal tracking emphasize that model progress is non-uniform across disciplines, and simple one-time benchmark snapshots can be misleading without contamination controls and timeline context.

![Model trend over time](https://raw.githubusercontent.com/HuayuSha/LLMEval-3/main/pic/trend_of_models.png)

## Repository usage notes

The repository is positioned as a benchmark + leaderboard project. For serious comparison, the key principle is to keep:

- fixed scoring protocol
- fresh question sampling
- strict submission/evaluation process control

Project link: [github.com/HuayuSha/LLMEval-3](https://github.com/HuayuSha/LLMEval-3)  
Leaderboard website: [llmeval.com](http://llmeval.com/)

## Practical takeaway

If your goal is robust model comparison over time, LLMEval-Fair’s main value is not only the dataset size, but the **evaluation governance design**: dynamic tests, anti-leakage constraints, and temporal analysis as first-class components.
