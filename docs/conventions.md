---
type: conventions
schema_version: 1
created: "2026-10-03"
updated: "2026-10-03"
curated: false
---

# Project memory conventions

This is a small local schema inspired by Markdown knowledge libraries. It is not a claim of full OKF conformance. Git supplies detailed version history; these files preserve intent, decisions, and the next useful action.

## Metadata

Use this frontmatter for maintained reference documents under `docs/`:

```yaml
type: reference
created: "2026-10-03"
updated: "2026-10-03"
curated: false
```

- `type`: the document's role, such as `index`, `conventions`, or `reference`.
- `created`: creation date, unchanged after creation.
- `updated`: date of the latest substantive change; leave it alone for formatting-only edits.
- `curated`: whether a human explicitly reviewed the current substantive content. It does not mean implementation approval or guaranteed correctness. Set false after a substantive change; only set true on explicit review and record `reviewed_by` and `reviewed_on`. Remove those two fields when review becomes stale; Git retains the earlier review.

Dates use ISO `YYYY-MM-DD` in the owner's timezone (currently Europe/Bratislava). Use an ISO timestamp with a timezone offset only if time-of-day matters.

`schema_version` lives here alone and changes only when these metadata or lifecycle conventions change incompatibly. Avoid per-document version numbers: Git already identifies revisions. The title belongs in the heading. Add tags or other fields only when somebody actually uses them for retrieval.

Use lighter formats where a mutable document header would be misleading:

| Artifact | Metadata |
| --- | --- |
| Root `AGENTS.md` | Plain instructions, versioned in Git |
| Human backlog | Stable `type` and `created` header; each item has an ID, capture date, and source |
| Agent backlog | `type` and `updated`; records have ID, source, status, and next action |
| Append-only logs | Stable `type` and `created`; dates and provenance belong to entries |
| Skill | Standard `name` and `description` frontmatter |

On a meaningful log entry, record `actor` (human or agent). Add `model` and `reasoning_effort` only when the execution environment exposes their actual values; omit unknown values rather than guessing. Put a short decision rationale in ordinary prose. These fields describe provenance, not a hidden reasoning transcript, and do not need repeating on every file.

This is a **metadata schema**. An ontology would additionally define domain concepts and their relationships, for example a Project that demonstrates a Skill. We do not need that extra model yet.

## Backlog lifecycle

The human backlog is the source of requested intent. The agent backlog is an editable interpretation, including proposals and discovered issues. Human-authored text remains authoritative even when unreviewed; agent interpretations remain proposals unless supported by the user. Neither curation nor backlog placement grants permission for future work.

1. **Capture.** Append explicitly supplied human requests verbatim to the human backlog with `H-001` style IDs, a capture date, and enough source context to identify the request. Agents can add a clearly labeled title, but must not alter the quoted intent. Humans may also add raw bullets; leave existing raw text untouched and reference its heading/quote until normalization is authorized.
2. **Interpret.** Use `A-001` style IDs in the agent backlog. Reference the human item or concrete evidence, describe the proposed outcome, list observable acceptance criteria, and label assumptions. Several agent tasks may support one human request. Agent-discovered issues use `source: agent finding` plus file/reproduction evidence; do not manufacture human entries.
3. **Work.** Agent statuses are `proposed`, `ready`, `in_progress`, `blocked`, and `awaiting_human`. Here, `ready` means the task is understood and authorized; record the authorization source. Keep pending decisions, evidence, and next action with the task. Existing authorization need not be requested again.
4. **Verify.** Record what was actually checked. Completing an agent subtask does not complete its entire human source item. For finished human work, use `awaiting_human` with a proposed outcome until the owner authorizes changing or archiving that human item.
5. **Archive or amend.** On explicit authorization covering the exact human-item change, first append the entire original entry to the backlog log, with outcome, reason, verification, and approval evidence. Then apply the approved change to the active human backlog. A request to implement an item alone does not authorize removing or rewriting it. Agent-only tasks may be closed autonomously within existing scope; log their final outcome and evidence before removing them from the working list.
6. **Reopen.** Append a reopening event that links the earlier history. Restore a human item only with user authorization; agent tasks can be reopened with evidence. Preserve IDs and never reuse them for unrelated work.

Choose the next ID by checking both active files and the backlog log. Record outcomes as `done`, `withdrawn`, `superseded`, or `dismissed`; use `amended` and `reopened` for those lifecycle events. Keep related edits in the same change. If interrupted after logging but before editing, reconcile the existing event instead of adding a duplicate. Concurrent writers must reread before appending and resolve ID collisions without dropping entries.

The agent backlog may be reorganized or rewritten freely, but retain unresolved work or give it an explicit disposition in the backlog log. Do not let a fresh summary silently erase a bug or unresolved question.

## Logs and handoffs

Append new events at the bottom. Start entries with `## [YYYY-MM-DD] event | Short description`. Never edit, reorder, or remove prior entries; corrections are new events identifying the earlier entry.

- **Project log:** one short entry per meaningful group of document additions, context changes, or durable decisions. Include what changed, why, relevant file links, and actual validation if applicable. Avoid command transcripts and routine read-only activity.
- **Backlog log:** item lifecycle only. Include item ID, outcome, reason, evidence, and any human approval. Copy the original human entry for amendments and archival. Link from the project log only if there is a wider project decision; do not duplicate the full event.
- **Handoff:** keep one compact current-state section in the agent backlog. Include the remaining objective, verified state, blocker if any, and next action. Replace stale handoff text as work advances.

These are agent operating rules, not filesystem access controls. Git review makes deviations visible. Add automated enforcement only if repeated mistakes or additional collaborators justify it.

## Sources

- [Karpathy's LLM Wiki](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f): retained the distinction between original sources and maintained interpretation, plus an index and chronological history.
- [Google Cloud's OKF introduction](https://cloud.google.com/blog/products/data-analytics/how-the-open-knowledge-format-can-improve-data-sharing): retained portable Markdown, small metadata, and ordinary links.
- [OpenAI AGENTS.md guidance](https://learn.chatgpt.com/docs/agent-configuration/agents-md) and [skill guidance](https://learn.chatgpt.com/docs/build-skills): instructions at the repository root and the conditional skill under `.agents/skills/`.
