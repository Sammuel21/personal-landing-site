---
type: index
created: "2026-10-03"
updated: "2026-10-04"
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
| [Repository skills](skills.md) | Using or updating imported design, discovery, and interview workflows | Sources and compatibility notes |

## Current baseline

As of 2026-10-04, the Next.js application includes Editorial, Ambient, Eclipse, Lattice, and Studio portfolio layouts, ten independent colour palettes, shared content, a source-backed thesis page, and comparison previews. Editorial + Olive is the public default. Preview controls switch layout and palette; the public site uses configuration. See the [README](../README.md#designs-and-content) for configuration, content editing, research sources, local fonts, routes, and source layout; verification and remaining findings live in the [agent backlog](backlog/agent.md). Verify the working tree before relying on this snapshot.

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

The approved design milestone uses JavaScript, Next.js App Router server rendering, and CSS Modules, with no animation library or external font/image service. Artwork colours belong to portfolio content independently of page palettes. A small client component progressively adds section reveals. Next.js automatic agent-file generation is disabled because project instructions are maintained explicitly. Detailed work and next actions belong in the [agent backlog](backlog/agent.md).

## Maintenance

Update this router when a document is added, moved, or retired. Keep this page limited to orientation and durable project direction. Put implementation details beside the code or in a focused document when they become useful. Record a changed decision and its reason in the project log; link the current decision here.
