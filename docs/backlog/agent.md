---
type: agent-backlog
updated: "2026-10-17"
---

# Agent backlog

Editable working interpretation. Preserve links to human intent and evidence; apply the [lifecycle](../conventions.md) when closing or replacing work. Do not silently discard unresolved findings.

## Current handoff

- Objective: Develop the portfolio incrementally while learning React. The latest completed phase is design research and calibration; consult the [confirmed brief](../design/brief.md) before further UI work.
- State: Ten complete layouts support ten independent palettes and shared, source-backed thesis content. Broadside, Fieldnotes, Index, Gallery, and Wayfinder join the original five families; comparison controls use a native disclosure with mobile grids. Existing Eclipse artwork and motion are preserved. Public configuration remains Editorial + Olive; Eclipse's configured artwork is Abstract. Configuration and editing instructions live in the [README](../../README.md#designs-and-content).
- Evidence: [A-009 completion](log.md#2026-10-17-done--a-009---five-additional-independent-portfolio-designs) records passing lint/build, 262 live routes, metadata/404/navigation checks, 60 responsive light/dark captures, remaining-palette contrast checks, no-JavaScript/reduced-motion checks, and limitations. The [capture index](../../local/design-review/captures.md) is a local ignored artifact. Earlier Eclipse-specific verification remains in [A-008](log.md#2026-10-08-done--a-008---refine-eclipse-artwork-typography-and-motion).
- Review: Reference documents remain explicitly unreviewed by a human. The proposed conventions are available for the owner to inspect; review metadata does not create an extra approval gate for otherwise authorized work.
- Backlog monitoring: [Automatic completion checks](../conventions.md#automatic-completion-checks) are now required after verified logical work segments and before handoff. [A-006](log.md#2026-10-04-done--a-006---apply-backlog-completion-checks-after-logical-work-segments) is complete and removed; the [H-003 completion event](log.md#2026-10-04-done--h-003---agentic-backlog-monitoring) records pending human removal approval.
- Research state: [A-010 is complete](log.md#2026-10-17-done--a-010---research-and-calibrate-the-portfolio-identity). [Reference analyses](../design/analysis/README.md) cover Apple, Anthropic, OpenAI, Linear, Stripe, and the current portfolio. Q1–Q9 settled audience, character, personal voice, app-family relationship, and one future identity; the owner confirmed shared direction. The [ADR](../adr/0001-deliberate-portfolio-identity.md) preserves the deliberate departure from the ten-palette constraint for future work. Existing UI and public configuration are unchanged.
- Evidence limits: [Visual appendix](../design/analysis/appendix.md) records local ignored captures and provenance. OpenAI's direct browser captures returned 403; its current rendered layout remains unverified. This phase is design analysis, not a new accessibility audit or app-content verification.
- Next action: A future design task should develop one identity through a small desktop/mobile visual calibration using the brief, before UI implementation. No interview question remains pending. [Gallery / Lagoon](http://localhost:3000/preview/gallery/palette/lagoon) was reachable during research capture; restart with `npm start` if needed. A-009 remains complete. Deployment, H-002, and unrelated A-003 remain outside this phase.

## Active tasks

### A-003 - Recheck ESLint's transitive dependency advisory

- Status: proposed.
- Source: agent finding during A-002; `npm audit --json` reports [GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm) in `braces`, through `micromatch` / `fast-glob` / `@next/eslint-plugin-next` / `eslint-config-next`.
- Evidence: Five high-severity entries describe this one development-tool dependency chain. `npm audit --omit=dev --json` reports zero production advisories as of 2026-10-04. Current linting passes. npm's suggested fix downgrades the Next lint configuration to 14.2.35, which is incompatible with the chosen configuration; no forced downgrade was applied.
- Next action: Recheck for a patched compatible lint-tool dependency chain and update it when available. Keep dependency updates separate from the design implementation.

Backend, accounts, and a database currently have no requirement.
