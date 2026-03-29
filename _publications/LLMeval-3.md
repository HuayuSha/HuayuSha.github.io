---
title: "LLMEval-Fair: A Large-Scale Longitudinal Study on Robust and Fair Evaluation of Large Language Models"
collection: publications
category: manuscripts
permalink: /publication/LLMEval-Fair
excerpt: 'LLMEval-Fair proposes a dynamic evaluation framework that samples unseen test sets from a large question bank, combines contamination-resistant curation with anti-cheating design, and studies almost 50 frontier models longitudinally to produce a more reliable picture of progress than static leaderboards.'
date: 2025-08-07
venue: 'arXiv preprint'
paperurl: 'https://arxiv.org/abs/2508.05452'
codeurl: 'https://github.com/HuayuSha/LLMEval-3'
citation: 'Ming Zhang, Yujiong Shen, Jingyi Deng, Yuhui Wang, Yue Zhang, Junzhe Wang, Shichun Liu, Shihan Dou, Huayu Sha, Qiyuan Peng, Changhao Jiang, Jingqi Tong, Yilong Wu, Zhihao Zhang, Mingqi Wu, Zhiheng Xi, Mingxu Chai, Tao Liang, Zhihui Fei, Zhen Wang, Mingyang Wan, Guojun Ma, Tao Gui, Qi Zhang, and Xuanjing Huang. 2025. LLMEval-Fair: A Large-Scale Longitudinal Study on Robust and Fair Evaluation of Large Language Models. arXiv preprint arXiv:2508.05452.'
---

LLMEval-Fair asks a hard but essential question: are current leaderboard gains real capability gains, or partly artifacts of benchmark contamination and overfitting?

## Research question

Static benchmarks can be repeatedly optimized against, making scores easier to game over time. LLMEval-Fair studies whether **dynamic test sampling + anti-cheating evaluation design** gives a more faithful estimate of model capability.

## Benchmark and protocol

- Built on a large graduate-level question bank (reported as 220k scale in the paper)
- Each run dynamically samples unseen test sets
- Includes contamination-resistant curation and anti-cheating mechanisms
- Uses calibrated LLM-as-a-judge scoring, with reported high agreement to human experts
- Supports **longitudinal tracking** across model generations

## Key contributions

1. A dynamic evaluation framework that is harder to overfit than fixed public test sets.
2. A large-scale temporal study (30 months, ~60 models) to analyze real progress trends.
3. A fairness-oriented ranking protocol combining absolute and relative comparison views.

## What to pay attention to

- The paper emphasizes that evaluation pipelines themselves need robustness engineering.
- Leaderboard snapshots can be misleading without temporal and contamination controls.
- For model developers, this work is a reminder to optimize for generalization, not only benchmark familiarity.
