---
title: "LLMEval-Med: A Real-world Clinical Benchmark for Medical LLMs with Physician Validation"
collection: publications
category: manuscripts
permalink: /publication/LLMEval-Med/
redirect_from:
  - /publication/LLMEval-Med
excerpt: 'LLMEval-Med is a physician-validated clinical benchmark built from real-world electronic health records and expert-designed scenarios. It targets the weaknesses of existing medical LLM evaluations by moving beyond exam-style questions toward realistic clinical reasoning and checklist-based expert assessment.'
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

LLMEval-Med targets a high-stakes scenario where evaluation quality directly affects safety conclusions: medical LLM assessment in realistic clinical contexts.

## Project highlights

- Focuses on **real clinical scenarios** rather than only exam-style QA
- Uses **physician-designed checklists** to make scoring criteria explicit
- Covers five core capability areas:
  - Medical Knowledge
  - Medical Language Understanding
  - Medical Reasoning
  - Medical Ethics and Safety
  - Medical Text Generation
- Evaluates models with a structured LLM-judge pipeline and expert-aligned criteria

## What is in the repository

```text
.
├── dataset/
│   └── dataset.json       # Medical evaluation data
├── evaluate/
│   ├── Answer.py          # Generate model responses
│   └── Evaluate.py        # Score responses with checklist prompts
```

Repository: [github.com/llmeval/LLMEval-Med](https://github.com/llmeval/LLMEval-Med)

## Dataset format and scale

According to the public repository, `dataset.json` contains a test split with hundreds of physician-reviewed items (the README describes a 667-question test set). The paper reports a broader benchmark construction scale.  

Each sample includes structured metadata such as:

- `category1` / `category2`
- `scene`
- `problem`
- `sanswer` (reference answer)
- `checklist` (must-cover scoring points)

This makes the benchmark suitable for **fine-grained error analysis**, not just top-line accuracy.

## Evaluation protocol (from code and README)

### Step 1: generate answers

```bash
python evaluate/Answer.py
```

### Step 2: evaluate answers

```bash
python evaluate/Evaluate.py
```

The evaluation script applies category-specific prompts and produces score + feedback pairs for each response.

## Scoring rubric

The benchmark uses a 5-point clinical-quality rubric:

- 5: correct and clinically safe, meets key + secondary checklist points
- 4: mostly correct, minor non-critical issues
- 3: partial correctness, key points missing
- 2: major mistakes or safety concerns
- 1: unacceptable, severe factual/safety errors

## Why this benchmark is practically useful

- Better reflects **deployment-facing** medical QA than pure exam benchmarks
- Makes judgments more reproducible through **checklist grounding**
- Supports comparison across medical-specialized, open-source, and closed-source models

## Links

- Paper (ACL Anthology): [2025.findings-emnlp.263](https://aclanthology.org/2025.findings-emnlp.263/)
- arXiv: [2506.04078](https://arxiv.org/abs/2506.04078)
- Dataset (Hugging Face): [HuayuSha/LLMeval-Med](https://huggingface.co/datasets/HuayuSha/LLMeval-Med)
- Code: [LLMEval-Med](https://github.com/llmeval/LLMEval-Med)
