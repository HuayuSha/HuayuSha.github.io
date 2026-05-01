---
title: "SciAgentGym: Benchmarking Multi-Step Scientific Tool-use in LLM Agents"
collection: publications
category: manuscripts
permalink: /publication/SciAgentGym/
redirect_from:
  - /publication/SciAgentGym
excerpt: 'SciAgentGym benchmarks multi-step scientific tool use for LLM agents with 1,780 tools and long-horizon workflows. It reports systematic failures on extended trajectories and introduces SciForge data synthesis to improve tool-use training. Accepted at ICML 2026 (regular).'
excerpt_zh: 'SciAgentGym 面向真实科研流程构建科学智能体评测基准，覆盖多步工具调用、长链任务执行与可审计评测。已被 ICML 2026 接收（Accept, regular）。'
date: 2026-02-13
venue: 'ICML 2026 (Accept, regular)'
status: 'accepted'
paperurl: 'https://arxiv.org/abs/2602.12984'
bibtexurl: 'https://dblp.org/rec/journals/corr/abs-2602-12984.bib'
codeurl: 'https://github.com/CMarsRover/SciAgentGYM'
authors:
  - Yujiong Shen
  - Yajie Yang
  - Zhiheng Xi
  - Binze Hu
  - Huayu Sha
  - Jiazheng Zhang
  - Qiyuan Peng
  - Junlin Shang
  - Jixuan Huang
  - Yutao Fan
  - Jingqi Tong
  - Shihan Dou
  - Ming Zhang
  - Lei Bai
  - Zhenfei Yin
  - Tao Gui
  - Xingjun Ma
  - Qi Zhang
  - Xuanjing Huang
  - Yu-Gang Jiang
equal_contrib_authors:
  - Yujiong Shen
  - Yajie Yang
  - Zhiheng Xi
corresponding_authors:
  - Zhenfei Yin
  - Tao Gui
  - Xuanjing Huang
citation: |-
  @article{abs-2602-12984,
    author       = {Yujiong Shen and
                    Yajie Yang and
                    Zhiheng Xi and
                    Binze Hu and
                    Huayu Sha and
                    Jiazheng Zhang and
                    Qiyuan Peng and
                    Junlin Shang and
                    Jixuan Huang and
                    Yutao Fan and
                    Jingqi Tong and
                    Shihan Dou and
                    Ming Zhang and
                    Lei Bai and
                    Zhenfei Yin and
                    Tao Gui and
                    Xingjun Ma and
                    Qi Zhang and
                    Xuanjing Huang and
                    Yu{-}Gang Jiang},
    title        = {SciAgentGym: Benchmarking Multi-Step Scientific Tool-use in {LLM}
                    Agents},
    journal      = {CoRR},
    volume       = {abs/2602.12984},
    year         = {2026},
    url          = {https://doi.org/10.48550/arXiv.2602.12984},
    doi          = {10.48550/ARXIV.2602.12984},
    eprinttype   = {arXiv},
    eprint       = {2602.12984},
    biburl       = {https://dblp.org/rec/journals/corr/abs-2602-12984.bib},
    bibsource    = {dblp computer science bibliography, https://dblp.org}
  }
---

SciAgentGym is a benchmark project for evaluating scientific AI agents in realistic research workflows.

**Current status:** Accepted at **ICML 2026** (Accept, regular).

## Motivation

General-purpose agent benchmarks are often not enough for scientific workflows, where reproducibility, evidence quality, and multi-step reasoning are all critical.

SciAgentGym focuses on evaluating agents in settings closer to practical research tasks.

## Planned evaluation dimensions

- **Task completion quality:** whether final outputs satisfy scientific task requirements
- **Process reliability:** whether intermediate steps and tool calls are coherent and stable
- **Reproducibility:** whether key results can be regenerated under fixed protocols
- **Evidence grounding:** whether conclusions are supported by verifiable artifacts

## Benchmark design direction

- multi-step tasks instead of single-turn QA only
- explicit scoring rubrics for both process and final output
- support for ablation-style evaluation of tool-use and planning modules
- structured logs for auditability and error analysis

## Notes

The paper has been accepted at ICML 2026 (Accept, regular).  
This page will be updated with the camera-ready, public preprint, and full experimental details after release.
