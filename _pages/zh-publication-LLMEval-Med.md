---
layout: single
title: "LLMEval-Med: A Real-world Clinical Benchmark for Medical LLMs with Physician Validation"
permalink: /zh/publication/LLMEval-Med/
lang: zh
author_profile: false
share: false
related: false
excerpt: 'LLMEval-Med 是一个经过医生验证的真实临床评测基准，强调面向临床场景的医学推理、检查清单打分与更贴近部署环境的安全评估。'
date: 2025-06-04
venue: 'Findings of EMNLP 2025'
paperurl: 'https://aclanthology.org/2025.findings-emnlp.263/'
bibtexurl: 'https://dblp.org/rec/conf/emnlp/ZhangSLSHWHLTJCXDGZH25.bib'
codeurl: 'https://github.com/llmeval/LLMEval-Med'
authors:
  - Ming Zhang
  - Yujiong Shen
  - Zelin Li
  - Huayu Sha
  - Binze Hu
  - Yuhui Wang
  - Chenhao Huang
  - Shichun Liu
  - Jingqi Tong
  - Changhao Jiang
  - Mingxu Chai
  - Zhiheng Xi
  - Shihan Dou
  - Tao Gui
  - Qi Zhang
  - Xuanjing Huang
equal_contrib_authors:
  - Ming Zhang
  - Yujiong Shen
  - Zelin Li
corresponding_authors:
  - Qi Zhang
  - Xuanjing Huang
citation: |-
  @inproceedings{Zhang2025,
    author       = {Ming Zhang and
                    Yujiong Shen and
                    Zelin Li and
                    Huayu Sha and
                    Binze Hu and
                    Yuhui Wang and
                    Chenhao Huang and
                    Shichun Liu and
                    Jingqi Tong and
                    Changhao Jiang and
                    Mingxu Chai and
                    Zhiheng Xi and
                    Shihan Dou and
                    Tao Gui and
                    Qi Zhang and
                    Xuanjing Huang},
    editor       = {Christos Christodoulopoulos and
                    Tanmoy Chakraborty and
                    Carolyn Rose and
                    Violet Peng},
    title        = {LLMEval-Med: {A} Real-world Clinical Benchmark for Medical LLMs with
                    Physician Validation},
    booktitle    = {Findings of the Association for Computational Linguistics: {EMNLP}
                    2025, Suzhou, China, November 4-9, 2025},
    pages        = {4888--4914},
    publisher    = {Association for Computational Linguistics},
    year         = {2025},
    url          = {https://aclanthology.org/2025.findings-emnlp.263/},
    biburl       = {https://dblp.org/rec/conf/emnlp/ZhangSLSHWHLTJCXDGZH25.bib},
    bibsource    = {dblp computer science bibliography, https://dblp.org}
  }
---

LLMEval-Med 面向一个高风险且极其实际的场景：**真实临床环境中的医学大模型评测**。在这个场景里，评测质量本身会直接影响人们对模型安全性与可部署性的判断。

## 项目亮点

- 不再只停留在考试式医学问答，而是强调**真实临床场景**
- 使用**医生设计的检查清单**，让评分标准更明确、更可解释
- 覆盖五类核心能力：
  - 医学知识
  - 医学语言理解
  - 医学推理
  - 医学伦理与安全
  - 医学文本生成
- 采用结构化 LLM-judge 流程，并尽量与专家评估标准保持一致

## 仓库中包含什么

```text
.
├── dataset/
│   └── dataset.json       # 医学评测数据
├── evaluate/
│   ├── Answer.py          # 生成模型回答
│   └── Evaluate.py        # 基于检查清单的自动评分
```

项目地址：[github.com/llmeval/LLMEval-Med](https://github.com/llmeval/LLMEval-Med)

## 数据集格式与规模

根据公开仓库说明，`dataset.json` 中包含数百条经过医生审核的测试样本；README 提到当前测试集规模为 **667 道问题**。论文则进一步介绍了更完整的基准构建过程。

每个样本都包含结构化字段，例如：

- `category1` / `category2`
- `scene`
- `problem`
- `sanswer`（参考答案）
- `checklist`（必须覆盖的评分点）

这种设计使它不仅能给出总体分数，也适合做**细粒度错误分析**。

## 评测流程

### 第一步：生成模型回答

```bash
python evaluate/Answer.py
```

### 第二步：执行自动评测

```bash
python evaluate/Evaluate.py
```

评测脚本会根据不同医学类别使用相应提示模板，最终输出每条回答的分数与反馈。

## 评分标准

该基准采用 5 分制临床质量 rubric：

- 5：结论正确且临床安全，覆盖关键与次要检查点
- 4：基本正确，仅存在少量非关键问题
- 3：部分正确，但缺失重要要点
- 2：存在严重错误或明显安全隐患
- 1：不可接受，含严重事实性或安全性错误

## 为什么它有实际价值

- 比纯考试式 benchmark 更贴近**真实部署场景下的医学问答**
- 通过**检查清单约束**提升判断的一致性与可复现性
- 支持在医学专用模型、开源模型与闭源模型之间进行更可信的比较

## 相关链接

- 论文（ACL Anthology）：[2025.findings-emnlp.263](https://aclanthology.org/2025.findings-emnlp.263/)
- arXiv：[2506.04078](https://arxiv.org/abs/2506.04078)
- 数据集（Hugging Face）：[HuayuSha/LLMeval-Med](https://huggingface.co/datasets/HuayuSha/LLMeval-Med)
- 代码：[LLMEval-Med](https://github.com/llmeval/LLMEval-Med)
