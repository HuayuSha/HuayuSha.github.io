---
layout: publication
title: "SciAgentGym: Benchmarking Multi-Step Scientific Tool-use in LLM Agents"
permalink: /zh/publication/SciAgentGym/
lang: zh
author_profile: false
share: false
related: false
excerpt: 'SciAgentGym 面向真实科研流程构建科学智能体评测基准，覆盖多步工具调用、长链任务执行与可审计评测。当前稿件状态：ICML 2026 投稿中。'
date: 2026-02-13
venue: 'arXiv preprint · ICML 2026 submission (under review)'
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

SciAgentGym 面向**真实科研工作流中的科学智能体**构建评测基准，重点考察大模型智能体在多步工具调用、长程任务执行与科研场景推理中的综合能力。

**当前状态：** 已投稿至 **ICML 2026**（under review）。

## 研究动机

现有通用 Agent benchmark 往往更偏向单轮问答、网页导航或浅层工具调用，但真正的科研任务通常同时要求：

- 多阶段规划与执行
- 中间证据可追踪
- 调用过程稳定且可复现
- 结论与实验产物之间具备明确对应关系

SciAgentGym 的核心价值，在于把评测场景从“会不会调工具”推进到“能不能在科学任务里稳定完成一整条工作链路”。

## 计划评测维度

- **任务完成质量：** 最终产出是否满足科研任务要求
- **过程可靠性：** 中间步骤、工具调用和推理链是否连贯稳定
- **可复现性：** 固定协议下关键结果能否被重新生成
- **证据支撑性：** 模型给出的结论是否有可核验的实验或文献证据支撑

## 基准设计方向

- 以**多步任务**替代单轮问答式评测
- 同时对**过程表现**和**最终结果**建立显式评分标准
- 支持对规划模块、工具调用模块等进行**消融式分析**
- 保留结构化日志，便于错误归因与审计分析

## 实用理解

如果把传统 benchmark 看作“点测”，SciAgentGym 更接近“流程测”。它更适合回答这样的问题：

> 一个科研智能体是否真的能在较长链条的科学任务中稳定工作，而不是只在局部步骤上表现得像是“会做题”。

## 备注

当前页面优先记录投稿状态与项目信息。后续在公开版本完善后，我会继续补充更完整的实验设置、任务分类、错误类型分析与结果解读。
