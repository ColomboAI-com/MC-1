# MC-1 Trust

## Trust Infrastructure for Autonomous Intelligence

AI is no longer limited to answering questions. An agent may hold credentials, call tools, access private data, delegate work, and take consequential action. A model evaluation alone does not show whether the deployed agent is identifiable, authorized, contained, or still operating within its approved boundaries.

**Every AI should be identifiable. Every agent should be accountable. Every action should be authorized. Every AI system should be continuously verifiable.**

MC-1 Trust is ColomboAI's proposed **Continuous AI Trust Infrastructure**. It is intended to turn deployment requirements and runtime evidence into a current, inspectable trust state. This document describes the product direction and does not assert that all listed components are live.

## Architecture

| Layer | Question it answers |
|---|---|
| MC-1 Intelligence Control Plane | Which intelligence path is eligible, governed, and economical? |
| Agent Identity | Who is acting, for whom, and with what delegation? |
| Agent Guard | Which exact actions are authorized? |
| Agent Guard Edge | Where is that authorization enforced in connected runtimes? |
| AATS | Which trust requirements apply to this deployment? |
| MC-1 Trust | What current evidence supports or contradicts conformance? |

AATS means **AI & Agentic Trust Standard**. Its v0.9 public working draft is being prepared. It is intended to be model-, provider-, framework-, and product-neutral; an organization should be able to use it without MC-1. ColomboAI-led drafting is the current governance stage, with working-group review and a formal contributor process proposed for subsequent versions.

## Intended capabilities

- **Inventory and ownership:** discover AI systems, agents, operators, versions, environments, and approved capabilities.
- **Data and permissions:** map sensitive data paths, memory, credentials, tools, delegation, and effective authority.
- **Evidence and verification:** retain attributable, scoped, time-bounded evidence and re-evaluate controls after changes or incidents.
- **Independent evaluation:** allow authorized third-party evaluators to submit signed findings without allowing the evaluated organization to alter those findings.
- **Trust Passport and Registry:** present a machine-readable summary of scope, evidence freshness, evaluation, limitations, and current status.
- **Certification workflow:** assess capability-specific AATS requirements, remediate gaps, obtain independent review where required, and monitor continuously.
- **Trust API:** expose verified status and changes to authorized relying parties, with privacy and tenant boundaries enforced.

The proposed certification states are **active**, **degraded**, **review required**, **suspended**, and **revoked**. A status must include its scope, reason, evidence timestamp, evaluator provenance where applicable, and revocation semantics. A badge or score must never replace the underlying evidence or imply a broader scope than was assessed.

## Design principles

Trust evidence should be tenant-scoped, tamper-evident, time-bounded, and revocable. An unavailable source must be reported as unavailable, not silently treated as passing. A changed model, tool, permission, runtime, data source, or critical policy should trigger re-evaluation. Privacy-sensitive evidence should be disclosed only to authorized parties and only to the extent needed for the decision.

Independent evaluation is necessary for high-assurance claims. AATS controls and certification criteria should be public and testable. Product telemetry alone is not independent certification.

## Current status

The existing MC-1 platform has beta Agent Identity and Guard foundations. The broader MC-1 Trust product, AATS certification, public Registry, Passport, evaluator portal, and claims of continuous certification are being developed. No AATS certification, independent evaluator approval, external standards endorsement, or universally available Trust API is claimed here. [Public capability status](CAPABILITY-STATUS.md) is the repository's maturity reference; the authenticated Console is authoritative for tenant-specific availability.

For collaboration on the draft standard, evaluation methods, or an enterprise design partnership, contact [ColomboAI](mailto:sales@colomboai.com). Do not send secrets or sensitive evidence by email.
