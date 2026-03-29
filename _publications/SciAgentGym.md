---
title: "SciAgentGym: A Benchmark and Evaluation Suite for Scientific AI Agents"
collection: publications
category: manuscripts
permalink: /publication/SciAgentGym
excerpt: 'SciAgentGym is a benchmark-oriented project for evaluating scientific AI agents on task completion quality, tool-use reliability, and reproducibility. Current manuscript status: ICML 2026 submission (under review).'
date: 2026-03-20
venue: 'ICML 2026 Submission (Under Review)'
authors:
  - Huayu Sha
  - et al.
citation: 'Huayu Sha et al. SciAgentGym: A Benchmark and Evaluation Suite for Scientific AI Agents. Submitted to ICML 2026 (under review).'
---

SciAgentGym is an in-progress benchmark project for evaluating scientific AI agents in realistic research workflows.

**Current status:** Submitted to **ICML 2026** (under review).

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

This publication page records the current submission status first.  
I will update it with the public preprint/code links and complete experimental details after release.
