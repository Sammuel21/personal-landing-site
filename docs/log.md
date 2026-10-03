---
type: project-log
created: "2026-10-03"
---

# Project history

Append-only record of meaningful additions and durable decisions. Follow the [log conventions](conventions.md). New events go at the bottom; correct an earlier entry with a new entry.

## [2026-10-03] add | Establish project memory

- Actor: agent (Codex).
- Source: Owner's request for lightweight project statefulness before application initialization.
- Added: [Project instructions](../AGENTS.md), [documentation router](index.md), [conventions](conventions.md), [human backlog](backlog/human.md), [agent backlog](backlog/agent.md), and [backlog history](backlog/log.md).
- Captured: H-001 preserves the owner's portfolio and React-learning intent. A-001 is the proposed first application milestone.
- Rationale: Preserve original intent, maintain a replaceable working interpretation, and retain append-only history. Use Git for detailed revisions and load documentation only as needed.
- Review: Maintained reference documents begin with `curated: false`; explicit user review has not occurred.

## [2026-10-03] add | Install clarification skill and validate memory

- Actor: agent (Codex).
- Added: [clarify-intent](../.agents/skills/clarify-intent/SKILL.md), scoped to consequential uncertainty with a usual budget of 1-3 questions and a ceiling of 10 per clarification episode. [README](../README.md) now links to the documentation router.
- Verification: The skill-creator validator passed. A temporary check validated local Markdown links and anchors, YAML metadata, unique backlog IDs, preserved human quotes, and the absence of application initialization. Validation tooling lives outside the repository.
- Scope: Eight new project memory/skill files plus the README link. No application code, application packages, or deployment was added. Automatic skill selection in a new session has not been exercised; the root instructions also link directly to the skill.
- Follow-up: Updated the [current handoff](backlog/agent.md#current-handoff) to the next proposed application milestone. Human review remains pending; no human item has been archived.

## [2026-10-03] add | Ignore generated and local project files

- Actor: agent (Codex).
- Added: [Root .gitignore](../.gitignore) for installed dependencies, Next.js output and generated types, coverage, local environment files, Vercel configuration, npm debug logs, and operating system metadata. Sanitized environment examples remain trackable.
- Verification: Git ignore checks passed for 15 generated/local paths and 9 paths that must remain trackable, including source, lockfiles, documentation, and the repository skill. Whitespace validation passed.
