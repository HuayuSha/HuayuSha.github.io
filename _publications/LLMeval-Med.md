---
title: "LLMEval-Med: A Real-world Clinical Benchmark for Medical LLMs with Physician Validation"
collection: publications
category: manuscripts
permalink: /publication/LLMEval-Med
excerpt: 'LLMEval-Med is a physician-validated clinical benchmark built from real-world electronic health records and expert-designed scenarios. It targets the weaknesses of existing medical LLM evaluations by moving beyond exam-style questions toward realistic clinical reasoning and checklist-based expert assessment.'
date: 2025-06-04
venue: 'Findings of EMNLP 2025'
paperurl: 'https://aclanthology.org/2025.findings-emnlp.263/'
bibtexurl: 'https://aclanthology.org/2025.findings-emnlp.263.bib'
codeurl: 'https://github.com/llmeval/LLMEval-Med'
citation: 'Ming Zhang, Yujiong Shen, Zelin Li, Huayu Sha, Binze Hu, Yuhui Wang, Chenhao Huang, Shichun Liu, Jingqi Tong, Changhao Jiang, Mingxu Chai, Zhiheng Xi, Shihan Dou, Tao Gui, Qi Zhang, and Xuanjing Huang. 2025. LLMEval-Med: A Real-world Clinical Benchmark for Medical LLMs with Physician Validation. Findings of EMNLP 2025.'
---

LLMEval-Med focuses on a high-stakes setting where benchmark design quality directly affects safety conclusions: medical LLM evaluation.

## Why this benchmark is needed

Many prior medical evaluations rely heavily on exam-style multiple-choice questions, which do not fully reflect clinical workflow and reasoning complexity. LLMEval-Med is designed to move toward **real-world clinical scenarios** and **expert-grounded assessment criteria**.

## Dataset and evaluation design

- Constructed from real-world clinical context and expert-designed scenarios
- Covers five core medical capability areas:
  - Medical Knowledge
  - Medical Language Understanding
  - Medical Reasoning
  - Medical Ethics and Safety
  - Medical Text Generation
- Uses checklist-based assessment to ensure critical clinical points are explicitly evaluated

## Methodological strengths

1. **Physician validation** is integrated into benchmark development and evaluation refinement.
2. **LLM-as-a-Judge with checklist grounding** improves consistency over free-form judgment.
3. **Human-machine agreement analysis** is used to calibrate prompts and scoring reliability.

## What this paper shows

By testing multiple model families (medical-specialized, open-source, closed-source), the study provides a more realistic capability map for medical deployment contexts, especially where explanation quality and safety constraints both matter.

## Resources

- Anthology paper: https://aclanthology.org/2025.findings-emnlp.263/
- arXiv preprint: https://arxiv.org/abs/2506.04078
- Dataset/code: https://github.com/llmeval/LLMEval-Med
