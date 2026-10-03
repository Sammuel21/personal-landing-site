---
type: index
created: "2026-10-03"
updated: "2026-10-03"
curated: false
---

# Project context

This is the entry point for persistent project knowledge. Follow the relevant links; historical logs are for tracing a decision or recovering context, not mandatory reading on every task.

## Where things live

| Document | Read it when | Ownership |
| --- | --- | --- |
| [Project instructions](../AGENTS.md) | Working in this repository | Shared project rules |
| [Conventions](conventions.md) | Maintaining metadata, backlogs, or logs | Shared format and lifecycle |
| [Human backlog](backlog/human.md) | Understanding requested outcomes | Human-controlled existing entries |
| [Agent backlog](backlog/agent.md) | Planning, resuming, or recording findings | Agent-maintained interpretation |
| [Backlog log](backlog/log.md) | Tracing item changes or completed work | Append-only history |
| [Project log](log.md) | Tracing additions and durable decisions | Append-only history |
| [Clarification skill](../.agents/skills/clarify-intent/SKILL.md) | Resolving consequential uncertainty | Reusable conditional workflow |

## Current baseline

As of 2026-10-03, the repository has a README and empty `src/` and `public/` directories. The project memory files are the first setup work. There is no `package.json`, application implementation, or application build/test command yet. Verify the working tree before relying on this snapshot.

The remote is [Sammuel21/personal-landing-site](https://github.com/Sammuel21/personal-landing-site); the branch observed during setup was `main`.

## Direction and rationale

These statements summarize the owner's setup conversation on 2026-10-03; they do not certify human review of this document.

| Direction | Basis / rationale |
| --- | --- |
| Personal portfolio with an aesthetic presentation | User's stated purpose |
| Favor Next.js and React | User favors this option and wants to learn React |
| Use Vercel if proceeding with Next.js | User's hosting preference; account/deployment not yet verified |
| Start without accounts, a database, or custom backend | Current portfolio requirements do not need them |
| Keep repository memory small and inspectable | User requested lightweight statefulness, protected human intent, and append-only history |

JavaScript versus TypeScript and the styling approach are still open. The earlier agent suggested ordinary CSS or CSS Modules; that suggestion is not a user decision. Detailed work and next actions belong in the [agent backlog](backlog/agent.md).

## Maintenance

Update this router when a document is added, moved, or retired. Keep this page limited to orientation and durable project direction. Put implementation details beside the code or in a focused document when they become useful. Record a changed decision and its reason in the project log; link the current decision here.
