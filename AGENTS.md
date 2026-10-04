# Project instructions

## Purpose

Build a personal landing website that presents the owner's projects and work in a representative, aesthetic way. Learning React is part of the project: favor understandable code and explain consequential choices briefly.

## Engineering approach

- Choose the simplest complete solution that meets the current need. Simplicity includes correctness, accessibility, maintainability, performance, and visual quality.
- Every dependency, abstraction, file, and process should earn its place through a present use. Add structure when it reduces real complexity; avoid speculative features, empty scaffolding, and duplicated documentation.
- Prefer direct code and framework conventions. Extract shared behavior when a real pattern emerges. Do not build generic infrastructure for one use case.
- Keep changes focused on the requested outcome. Fix issues caused by the current work; record unrelated findings in the agent backlog rather than expanding scope.
- Use checks appropriate to the change. Read actual package scripts before running commands; report what was verified and what remains uncertain.

## Orientation and layout

For a new substantive task, read [docs/index.md](docs/index.md), then only the documents relevant to the task. A mechanical edit does not require a full documentation pass. Inspect the working tree before changing files; implementation files are evidence of what exists.

| Location | Responsibility |
| --- | --- |
| `src/` | Application source; intended Next.js App Router structure below |
| `public/` | Public images and downloads |
| `docs/` | Project context, conventions, backlogs, and history |
| `.agents/skills/` | Repository skills |
| Root configuration | Dependencies and tool configuration, when initialized |

The intended application layout is `src/app/` for routes and shared layouts, `src/components/` for reusable UI, and `src/data/` for portfolio content. In the App Router, `page` exposes a page, `layout` shares its surrounding UI, and nested folders define URL segments. Create these only when implementing the site. Current status and stack decisions live in the docs index.

## Persistent context

- [Human backlog](docs/backlog/human.md) preserves the owner's intent. Agents may append explicitly supplied human requests with their source. Changing, reordering, overriding, or removing an existing item requires explicit user authorization covering that change, even after implementation. Preserve the original in the backlog log before an authorized amendment or removal. Do not relabel agent ideas as human requests.
- [Agent backlog](docs/backlog/agent.md) is the editable interpretation and working plan. Link tasks to their source, label assumptions, preserve unresolved findings, and keep a short handoff there when work spans sessions. A backlog entry by itself is not authorization to implement it.
- [Backlog log](docs/backlog/log.md) preserves item amendments, completions, withdrawals, dismissals, and reopenings. [Project log](docs/log.md) records meaningful additions, decisions, and changes to persistent context. Both are append-only: correct mistakes with a new entry referring to the original.
- Human review applies to a particular version. Never mark agent-written material as human reviewed without an explicit review statement. Follow [conventions](docs/conventions.md) for metadata and item lifecycle.
- Keep each fact in one maintained home and link to it. Update relevant context when a task changes it; batch related changes into one useful log entry. Do not log every command, chat reply, or cosmetic edit.
- A current user instruction takes precedence over older project notes. Distinguish user decisions, verified observations, and agent proposals. If they disagree, surface the discrepancy instead of silently rewriting history.

## Clarification

Use [clarify-intent](.agents/skills/clarify-intent/SKILL.md) when unresolved ambiguity could materially affect scope, correctness, user experience, or substantial rework. First inspect available context. Ask the smallest useful set of questions, usually 1-3 and at most 10 for one clarification episode. Routine reversible choices should use a reasonable stated assumption. Existing authorization remains valid; do not repeatedly ask for it.

## Repository skills

Installed third-party skills, pinned sources, and integration notes live in [docs/skills.md](docs/skills.md). Read its compatibility notes when using them. Keep `clarify-intent` as the lightweight default; use `grill-with-docs` for an explicitly requested deeper interview. When its wrapper asks for a `Skill` tool unavailable in this host, read and apply the installed `grilling` and `domain-modeling` instructions directly. Existing project documentation ownership rules and the host's current mode still apply.

## Completion and handoff

After meaningful work, record its outcome and relevant verification once, update affected links/context, and leave any unfinished work with a concrete next action. Only add durable documentation that will help a later task. Do not create a separate session diary or duplicate the Git diff in prose.

Read the active human and agent backlogs at the start of substantive work. After each verified logical work segment and before the final response or handoff, compare the work against active items and apply the [automatic completion checks](docs/conventions.md#automatic-completion-checks). Log verified completed agent tasks as `done` before removing them automatically, including tasks linked to human requests. Record completed human work separately; ask for removal with a bold, informative, item-specific message and remove the human entry only on explicit authorization. Without that authorization, skip removal and continue other work. Partial completion must leave the remaining scope active.
