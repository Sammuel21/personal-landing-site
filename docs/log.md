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

## [2026-10-03] fix | Make the development application runnable

- Actor: agent (Codex).
- Cause: Dependencies had been installed, but `package.json` still contained only the default npm test placeholder and application files were absent.
- Changed: Added `dev`, `build`, and `start` scripts, marked the package private, and created the minimal JavaScript application and CSS. Disabled automatic Next.js agent-file generation in `next.config.mjs` and removed its generated addition to the existing project instructions.
- Verification: Production build passed; the development server started and returned the home page with HTTP 200. Application commands and current state are documented in the README and index.
- Lifecycle: See [A-001 completion](backlog/log.md) in the backlog history. The human backlog was not changed by this task.

## [2026-10-03] add | Capture project question-answering idea

- Actor: agent (Codex).
- Added: [H-002](backlog/human.md#h-002---project-questions-through-an-llm-pipeline) preserves the owner's idea for an LLM pipeline supporting questions about a particular project, such as the owner's diploma thesis.
- Verification: Checked active backlogs and backlog history for the next unused human ID; preserved the supplied idea verbatim and left existing entries unchanged.

## [2026-10-04] add | Shared portfolio content and two visual designs

- Actor: agent (Codex).
- Decision: Implemented the owner's approved Editorial/Ambient plan using Next.js server pages and per-design CSS Modules. Shared content and a small registry keep design switching understandable; only progressive section reveals use a client component. No runtime dependency, external asset service, backend, or deployment was added.
- Persistent context: [README](../README.md#designs-and-content) owns the configuration/content-editing guide; the index and agent handoff now describe the implemented portfolio. Human identity, research claims, and unavailable resources remain explicit placeholders.
- Outcome and verification: See [A-002](backlog/log.md#2026-10-04-done--a-002---two-portfolio-designs-with-shared-content) for completed checks and limitations. A-003 records an unresolved advisory in the ESLint development dependency chain; the production dependency audit is clear.

## [2026-10-04] refine | Contain Ambient's decorative hero at intermediate widths

- Actor: agent (Codex).
- Changed: Final screenshot review exposed overflow from the enlarged decorative SVG at an intermediate desktop width. Its container now clips decorative overflow without changing text or navigation.
- Verification: At a 1280px browser viewport the document fits without horizontal overflow; production build passed. Refreshed desktop and mobile captures and restored the browser's normal viewport. A-002 remains complete.

## [2026-10-04] add | Layout-independent palette selection

- Actor: agent (Codex).
- Decision: Following the owner's clarification, colour and composition are independent. Ten presets can be used with either layout; switching controls are restricted to previews, while `site.palette` sets the public choice. Existing schemes remain Olive and Lagoon, with minor text-tone adjustments for readable cross-layout contrast.
- Implementation: A shared palette catalogue drives CSS variables for surfaces, typography, borders, selection, and artwork. Static preview paths preserve palette and project context, with no additional client-side state or dependency.
- Context: The [README](../README.md#available-palettes) owns the palette guide; the index and handoff were updated. See [A-004](backlog/log.md#2026-10-04-done--a-004---independent-configurable-colour-palettes) for verification. Human backlog entries were not changed.

## [2026-10-04] refine | Give artwork its own colours

- Actor: agent (Codex).
- Decision: Following owner feedback about monotony, artwork colour is now independent of the page palette. This supersedes A-004's palette-owned artwork approach: project accents and the Ambient introduction artwork are maintained in portfolio content, while palettes control page surfaces and typography. Light/dark adaptation preserves visibility without assigning every illustration the same hue.
- Context and verification: The [README](../README.md#designs-and-content) documents editing; [A-005](backlog/log.md#2026-10-04-done--a-005---independent-artwork-colours) records verification. No dependency or configuration option was added.

## [2026-10-04] add | Repository design and planning skills

- Actor: agent (Codex).
- Source: Owner explicitly requested Anthropic frontend-design, Vercel Labs find-skills, and Matt Pocock grill-with-docs, with frontend design deferred to the next prompt.
- Outcome: Installed pinned repository-local copies plus grilling and domain-modeling, which the interview wrapper requires. Preserved upstream instructions, supporting references, Codex metadata, and licenses. The [skill guide](skills.md) records sources, use, updates, and host compatibility; AGENTS.md routes to it.
- Verification: All five installed SKILL.md files matched their pinned upstream text; required references and explicit-invocation metadata are present. No application files or npm dependencies changed; frontend lint/build were not rerun for this instruction/documentation-only task. Existing human backlog entries were preserved.
- Research: Read the [thesis README at the inspected revision](https://github.com/Sammuel21/diploma-thesis-block-replacement/blob/e8e6615ecf1119ec666237e5dbb7de898bb18211/README.md): replacement of frozen-model MLP blocks with smaller approximations trained on calibration input/output pairs. This describes research goals, not verified experimental results. The owner's Sol/Luna sun/moon relationship is visual inspiration for the next design request; the README alone does not establish those names or their exact model relationship.

## [2026-10-04] change | Monitor backlog completion during agent work

- Actor: agent (Codex).
- Source: Owner's explicit request to add and execute [H-003](backlog/human.md#h-003---agentic-backlog-monitoring).
- Decision: [Project instructions](../AGENTS.md#completion-and-handoff) now trigger [completion checks](conventions.md#automatic-completion-checks) after verified logical work segments and before handoff. [Conventions](conventions.md) schema version 2 separates human completion from removal approval, replacing version 1's requirement to retain finished agent tasks as `awaiting_human`. Verified agent tasks are logged and removed automatically; human removal requires a bold informative request and explicit item-specific approval.
- Context: Captured the owner's request verbatim. Applied the workflow to this task; [A-006 and H-003 completion records](backlog/log.md#2026-10-04-done--a-006---apply-backlog-completion-checks-after-logical-work-segments) own the outcome, verification, and pending human removal approval. No new document or dependency was needed.

## [2026-10-05] add | Three research-inspired portfolio designs

- Actor: agent (Codex).
- Decision: Implemented the approved Eclipse, Lattice, and Studio compositions with shared thesis content, separate artwork colours, local licensed fonts, and server-rendered HTML/CSS/SVG. The portfolio now offers five layouts with ten interchangeable palettes; public configuration remains Editorial + Olive.
- Research: Thesis descriptions paraphrase the inspected repository sources linked in the [editing guide](../README.md#designs-and-content). The owner confirmed Sol as original and Luna as compressed with replacement MLP blocks. This supersedes the earlier uncertainty about those presentation roles; diagrams remain illustrative and results unpublished.
- Context: Updated the README, project index, and agent handoff. [A-007](backlog/log.md#2026-10-05-done--a-007---eclipse-lattice-and-studio-portfolio-designs) owns verification and remaining native-browser testing limits. Human backlog entries remain unchanged; further review stopped at the owner's request for a feedback handoff.

## [2026-10-05] add | Vercel React performance skill

- Actor: agent (Codex).
- Source and authorization: Owner's explicit request to integrate `vercel-react-best-practices` following the suitability assessment.
- Outcome: Installed the official skill repository-locally at revision `063bee94c3f4df8453406c830b0a7df0f2860278`, preserving its upstream instructions, MIT license declaration, compiled guide, metadata, and rule references. The [skill guide](skills.md) records the pinned source and selective-use guidance: require a concrete benefit before introducing optimization complexity or dependencies.
- Verification: Installer completed successfully; the skill name, compiled guide, and referenced rule files are present (72 files in the bundled rules directory, including support files). Whitespace checks passed. No application code or npm dependency changed, so application tests were not rerun.
- Completion check: This installation does not complete the broader H-001 request, H-002, or A-003. Existing backlog entries and H-003's pending removal approval remain unchanged.
