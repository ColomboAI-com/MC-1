# MC-1 product suite

MC-1 is ColomboAI's intelligence control plane and the connected product system around it. This document explains the owning boundary of each product without implying that every staged capability is enabled for every tenant.

## MC-1 Intelligence Control Plane

The control plane owns the request lifecycle: understand, authorize, budget, select, execute, evaluate, and improve. The stable `colomboai/mc-1` profile keeps applications independent of a fixed model or provider while preserving manual model and provider controls when deterministic operation is required.

Its internal decision layers are deliberately separated:

- **Query Intelligence** extracts task, modality, complexity, risk, privacy, output, and verification requirements.
- **Execution Intelligence** selects a bounded strategy and allocates routing, evaluation, retry, and escalation budgets.
- **Model Intelligence** represents canonical models, capabilities, provenance, constraints, and measured or explicitly configured evidence.
- **Provider Intelligence** represents the executable provider route: health, cost, latency, capacity, privacy, region, credentials, and availability.
- **Evaluation** validates applicable completion, structured-output, tool, quality, and safety contracts before recovery or escalation.
- **Intelligence Memory** can use sufficiently supported, tenant-scoped operational outcomes without sharing customer evidence across tenants.

## MC-1 Console

The Console is the customer operational surface. It includes projects, API keys, Playground, route activity, Intelligence, models, providers, policies, usage, billing, automatic top-up, team access, BYOK/private compute, adaptation, advanced-runtime readiness, audit, support, and MC-1 Forward.

Console data is tenant scoped. It distinguishes a true zero from unavailable evidence and does not substitute local demo records when a production source is empty or disconnected.

## MC-1 Everywhere

Everywhere is the compatibility and distribution program for bringing `colomboai/mc-1` into the tools teams already use. It covers OpenAI-compatible API clients, agent frameworks, coding agents, orchestration systems, harnesses, and SDKs.

Evidence levels remain explicit:

1. public configuration seam identified;
2. source or released artifact contract verified;
3. bounded synthetic text/tool/streaming continuation demonstrated;
4. authenticated MC-1 production verified;
5. native or upstream integration published.

Passing one level never implies the next. Agent Identity transport, Guard enforcement, cancellation, session behavior, broad tools, or operating-system confinement are claimed only when separately tested.

## MC-1 Forward

Forward is the governed enterprise-transformation product built on MC-1. The shipped foundation is read-only and tenant scoped: workspaces, discovery runs, connector references, Transformation Graph nodes and edges, provenance, confidence, and ranked opportunities.

Forward does not grant itself authority. Sandboxed changes, production writes, deployment orchestration, and autonomous improvement remain gated behind Agent Identity, Agent Guard, organization policy, explicit approvals, evaluation, audit, cost authorization, and rollback.

## Agent Identity and Agent Guard

Agent Identity carries signed, expiring claims about the actor, principal, delegation, trust, certification, and permissions. Agent Guard binds those claims to the authenticated tenant and checks exact permissions for declared tools or advanced actions before provider execution.

Forged, expired, modified, cross-tenant, or insufficient identities fail closed. A model's name or advertised capability never authorizes a tool, edge device, or physical action.

## MC-1 Trust and AATS

MC-1 Trust is the proposed continuous assurance product for AI systems and autonomous agents. AATS, the AI & Agentic Trust Standard, is its implementation-independent requirements framework. The intended chain is: MC-1 governs intelligence decisions; Agent Identity names the actor; Agent Guard authorizes actions; Guard Edge carries enforcement to connected execution environments; AATS defines required controls; MC-1 Trust collects and evaluates evidence of continuing conformity.

The proposed Trust family includes AI Inventory, Agent Registry, AI Data Map, Permission Graph, Evidence Vault, Trust Policies and Events, Continuous Assurance, Trust Passport, public Registry, evaluator portal, red-team evidence, Trust API, certification workflow, compliance crosswalks, Vendor Trust, and Consumer AI Trust. These are **product scope**, not a claim that each surface is deployed or certified. See [the Trust overview](TRUST.md) and [capability status](CAPABILITY-STATUS.md).

AATS must be usable by other implementations. Independent evaluators must retain authority over their own findings, while identity, evidence, certification status, and revocation remain verifiable by relying parties.

## Adaptive Intelligence

Adaptive Intelligence treats routing and specialization as one governed decision. It routes when an existing eligible model meets the objective, recommends a bounded experiment when evidence is incomplete, and permits training only when data authorization, policy, budget, provider, sovereignty, quality, latency, and economic gates pass.

The durable lifecycle covers opportunity analysis, route-versus-train comparison, authorized datasets, training jobs, provider reconciliation, checkpoints, lineage, challenger evaluation, canary traffic, production promotion, rollback, export, and retirement. Customer prompts are not training data by default.

## Advanced Runtime

Advanced Runtime is the fail-closed bridge to authenticated customer-compute systems for replanning, multimodal pipelines, multi-model deliberation, Guard Edge, and Physical AI. A runtime becomes connected only after authenticated capability preflight and exact-origin validation.

Physical or consequential execution additionally requires explicit tenant policy, certified Agent Identity, exact permissions, durable idempotency, outcome reconciliation, and a tested safety boundary.

## FinOps, billing, and enterprise governance

MC-1 separates customer price, provider cost, platform/network fees, credits, reservations, payables, and settlement evidence. BYOK/customer compute stays distinct from ColomboAI-managed provider liability. Enterprise policy can constrain providers, models, regions, privacy, budgets, egress, escalation, and advanced runtime eligibility before optimization.

The platform supports Free, Developer, Pro, Team, Business, Enterprise, Government, and additive Forward plans. Current prices and availability belong to the official [MC-1 pricing page](https://colomboai.com/MC-1/pricing), not this repository.

## Admin Control Center

The Admin Control Center is an internal ColomboAI product surface, not a customer-organization administrator shortcut. Server-side platform roles and narrow permissions protect executive, customer, organization, model, provider, routing, security, finance, Everywhere, CRM, enterprise, notification, feature-readiness, and system-health views.

Operational mutations are individually authorized, validated, idempotent, and audited. Unsupported refunds, disputes, credential rotation, membership changes, or feature mutation remain unavailable until their authoritative production workflows exist.

## Official links

- Product: <https://colomboai.com/MC-1>
- Console: <https://console.colomboai.com/MC-1/console>
- API: `https://api.colomboai.com/v1`
- Enterprise: <https://colomboai.com/MC-1/enterprise>
- Developers: <https://colomboai.com/MC-1/developers>
- Pricing: <https://colomboai.com/MC-1/pricing>
