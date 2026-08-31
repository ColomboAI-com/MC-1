# Public capability status

Last updated: August 30, 2026.

This status separates shipped foundations from configured, connected, beta, staged, and externally gated capability. It is a public product boundary, not an uptime report or certification statement.

| Capability | Status | Public boundary |
|---|---|---|
| OpenAI-compatible chat and Responses control plane | Production | Requires a valid project and an eligible configured provider route |
| Smart, manual-model, and provider-constrained routing | Production | Hard tenant policy and provider eligibility remain authoritative |
| Query and Execution Intelligence | Beta | Deterministic classification and bounded strategy planning; richer orchestration remains independently gated |
| Deterministic response evaluation | Beta | Completion, JSON, and tool-call contracts where applicable |
| Intelligence Trace 3.0 | Production | Route, plan, evaluation, Guard, policy, usage, and operational evidence; shipped foundation does not imply prompt/response persistence |
| Agent Identity and Agent Guard | Beta | Signed tenant/principal binding and exact privileged-tool authorization; fail-closed |
| Intelligence Memory | Experimental | Tenant-scoped evaluated signals after evidence thresholds; no cross-tenant learning claim |
| Adaptive Intelligence | Staged | Route-versus-train, lineage, evaluation, canary, reconciliation, and retirement foundations |
| Live training, RL, and export | Provider/policy gated | Requires authorized data, storage, budget, credentials, provider contracts, and rollout flags |
| MC-1 Everywhere | Staged | Active compatibility program; status varies by released host and synthetic proof is not production verification |
| MC-1 Forward | Staged | Read-only foundation shipped; production-changing autonomy, connectors, sandboxes, builders, and outcome attribution remain gated |
| Advanced Runtime | Staged | External-runtime gated; requires authenticated customer compute, exact origins, policy, identity, idempotency, and reconciliation |
| Guard Edge and Physical AI | Staged | External-runtime and safety gated; never enabled merely from a model label |
| Customer Console | Production | First-party ColomboAI authentication and tenant-scoped MC-1 data |
| Admin Control Center | Production | Internal surface with separate platform-role authorization; normal customer roles cannot enter |
| Billing and FinOps foundations | Production | Feature availability depends on live Stripe/provider configuration and contract scope |

## Status vocabulary

- **Production:** deployed and part of the supported runtime, subject to tenant configuration and eligibility.
- **Beta:** deployed with a deliberately bounded contract and additional validation still planned.
- **Experimental:** evidence-gathering surface without a broad stability promise.
- **Staged:** durable product foundation exists, but execution is protected by rollout gates.
- **Configured:** required settings are present; connectivity or authoritative execution may still be unverified.
- **Connected:** authenticated preflight or authoritative source verification has succeeded.
- **Provider/policy gated:** unavailable until an external provider contract, tenant authorization, budget, and rollout gate pass.
- **Fail-closed:** the platform refuses the operation when required identity, policy, evidence, pricing, credentials, or authoritative integration is missing.

For live operational status, use the authenticated MC-1 Console and the platform readiness endpoint appropriate to your deployment. Repository prose must not be treated as a real-time provider availability guarantee.
