---
title: "OpenNovelty: An LLM-powered Agentic System for Verifiable Scholarly Novelty Assessment"
collection: publications
category: manuscripts
permalink: /publication/OpenNovelty
excerpt: 'OpenNovelty builds an evidence-grounded agent pipeline for scholarly novelty assessment. Instead of giving opaque yes/no judgments, it retrieves related literature, compares contribution claims against full texts, and produces verifiable novelty reports with explicit evidence snippets and citations.'
date: 2026-01-04
venue: 'arXiv preprint'
paperurl: 'https://arxiv.org/abs/2601.01576'
codeurl: 'https://github.com/january-blue/OpenNovelty'
authors:
  - Ming Zhang
  - Huayu Sha
  - et al.
citation: 'Ming Zhang et al. 2026. OpenNovelty: An LLM-powered Agentic System for Verifiable Scholarly Novelty Assessment. arXiv:2601.01576.'
---

OpenNovelty focuses on a difficult but essential part of research evaluation: **verifiable novelty assessment** with explicit evidence traces.

![OpenNovelty pipeline](https://raw.githubusercontent.com/january-blue/OpenNovelty/main/docs/images/pipeline_overview.png)

## Why this system matters

Novelty review is usually time-constrained, inconsistent across reviewers, and highly dependent on retrieval coverage. OpenNovelty reframes this as a reproducible pipeline problem instead of a one-shot LLM judgment.

## Four-phase pipeline

The public repository describes a staged workflow:

1. **Phase I — Information Extraction**  
   Extract paper text, core task, and contribution claims.
2. **Phase II — Literature Retrieval**  
   Retrieve related work candidates and build citation indices.
3. **Phase III — Deep Analysis**  
   Compare claims with retrieved literature and classify novelty evidence.
4. **Phase IV — Report Generation**  
   Export structured novelty reports (Markdown/PDF) with citations and snippets.

## Output artifacts

Typical outputs include:

- `phase1_extracted.json`
- `citation_index.json`
- `phase3_complete_report.json`
- final novelty report (`.md` / `.pdf`)

This makes the full process auditable, with intermediate artifacts available for debugging and review.

## Quick-start workflow

The repository provides script entrypoints for each phase:

```bash
# Phase 1
python scripts/run_phase1_batch.py --papers "<paper-url>" --out-root output/demo --force-year 2026

# Phase 2
bash scripts/run_phase2_concurrent.sh <paper_id> --base-dir output/demo

# Phase 3
bash scripts/run_phase3_all.sh output/demo/<paper_id>

# Phase 4
bash scripts/run_phase4.sh output/demo/<paper_id>
```

## Engineering notes from the repo

- Python 3.8+ environment
- modular scripts for batch and single-paper workflows
- retrieval, analysis, and rendering decoupled by intermediate JSON artifacts
- some external service dependencies are marked as evolving in the current release

## Practical takeaway

OpenNovelty is useful when you want **traceable novelty review**, especially for internal pre-review, large-scale triage, or evidence-grounded reviewer assistance where “why this is novel (or not)” must be inspectable.
