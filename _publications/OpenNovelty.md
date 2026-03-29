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
citation: 'Ming Zhang et al. 2026. OpenNovelty: An LLM-powered Agentic System for Verifiable Scholarly Novelty Assessment. arXiv:2601.01576.'
---

OpenNovelty tackles a central bottleneck in peer review: novelty checking is important but difficult to do consistently at scale.

## What problem does it solve?

In real reviewing, novelty is rarely a simple keyword match. Reviewers must align **task definitions**, **claimed contributions**, and **prior literature evidence** under limited time. OpenNovelty frames this as a structured pipeline problem rather than a single LLM prompt.

## Core idea

The system decomposes novelty assessment into four phases:

1. **Claim extraction** from paper text (core task + contribution claims)
2. **Literature retrieval** via semantic search from extracted queries
3. **Contribution-level comparison** against retrieved full papers
4. **Report generation** with explicit citation evidence and traceable judgments

This design turns novelty analysis into an auditable process with intermediate artifacts, instead of only final model opinions.

## Why this matters

- **Evidence-grounded judgments**: every conclusion is tied to retrieved papers/snippets.
- **Higher reviewer efficiency**: helps surface potentially related work earlier.
- **Better consistency**: reduces variance from ad-hoc reviewer search habits.

## Practical takeaway

OpenNovelty is useful when you need a **repeatable novelty workflow** for paper triage, internal pre-review, or large-scale scholarly analysis. It is especially helpful for rapidly moving areas where manual literature coverage is hard.
