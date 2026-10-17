---
type: agent-backlog
updated: "2026-10-17"
---

# Agent backlog

Editable working interpretation. Preserve links to human intent and evidence; apply the [lifecycle](../conventions.md) when closing or replacing work. Do not silently discard unresolved findings.

## Current handoff

- Objective: Develop the portfolio incrementally while learning React.
- State: Ten complete layouts support ten independent palettes and shared, source-backed thesis content. Broadside, Fieldnotes, Index, Gallery, and Wayfinder join the original five families; comparison controls use a native disclosure with mobile grids. Existing Eclipse artwork and motion are preserved. Public configuration remains Editorial + Olive; Eclipse's configured artwork is Abstract. Configuration and editing instructions live in the [README](../../README.md#designs-and-content).
- Evidence: [A-009 completion](log.md#2026-10-17-done--a-009---five-additional-independent-portfolio-designs) records passing lint/build, 262 live routes, metadata/404/navigation checks, 60 responsive light/dark captures, remaining-palette contrast checks, no-JavaScript/reduced-motion checks, and limitations. The [capture index](../../local/design-review/captures.md) is a local ignored artifact. Earlier Eclipse-specific verification remains in [A-008](log.md#2026-10-08-done--a-008---refine-eclipse-artwork-typography-and-motion).
- Review: Reference documents remain explicitly unreviewed by a human. The proposed conventions are available for the owner to inspect; review metadata does not create an extra approval gate for otherwise authorized work.
- Backlog monitoring: [Automatic completion checks](../conventions.md#automatic-completion-checks) are now required after verified logical work segments and before handoff. [A-006](log.md#2026-10-04-done--a-006---apply-backlog-completion-checks-after-logical-work-segments) is complete and removed; the [H-003 completion event](log.md#2026-10-04-done--h-003---agentic-backlog-monitoring) records pending human removal approval.
- Next action: Review the five new families at [localhost:3000](http://localhost:3000/preview/broadside/palette/silver) and choose any refinements. The production preview was left running; restart with `npm start` if it is no longer reachable. A-009 is complete. Deployment, H-002, and technique-specific Eclipse animations remain future work; unrelated A-003 remains proposed.

## Active tasks

### A-003 - Recheck ESLint's transitive dependency advisory

- Status: proposed.
- Source: agent finding during A-002; `npm audit --json` reports [GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm) in `braces`, through `micromatch` / `fast-glob` / `@next/eslint-plugin-next` / `eslint-config-next`.
- Evidence: Five high-severity entries describe this one development-tool dependency chain. `npm audit --omit=dev --json` reports zero production advisories as of 2026-10-04. Current linting passes. npm's suggested fix downgrades the Next lint configuration to 14.2.35, which is incompatible with the chosen configuration; no forced downgrade was applied.
- Next action: Recheck for a patched compatible lint-tool dependency chain and update it when available. Keep dependency updates separate from the design implementation.

Backend, accounts, and a database currently have no requirement.
