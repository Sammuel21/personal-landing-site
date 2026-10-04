---
type: conventions
schema_version: 2
created: "2026-10-03"
updated: "2026-10-04"
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
3. **Work.** Agent statuses are `proposed`, `ready`, `in_progress`, `blocked`, and `awaiting_human`. Here, `ready` means the task is understood and authorized; record the authorization source. Use `awaiting_human` when a required human decision leaves work unfinished, not solely to retain a finished agent task while its human source awaits removal approval. Keep pending decisions, evidence, and next action with the task. Existing authorization need not be requested again.
4. **Verify.** After each verified logical work segment, check the active backlogs using the completion procedure below. Record what was actually checked. Completing an agent subtask does not complete its entire human source item. Verified completed agent tasks are logged as `done` and removed automatically. Verified completed human work is also logged as `done`, while the original human entry remains active until removal is explicitly authorized. Completion and permission to archive are separate facts.
5. **Archive or amend.** On explicit authorization covering the exact human-item change, first append the entire original entry to the backlog log, with outcome, reason, verification, and approval evidence. Then apply the approved change to the active human backlog. A request to implement an item alone does not authorize removing or rewriting it. All verified completed agent tasks may be closed autonomously within existing scope, including those linked to human items; log their final outcome and evidence before removing them from the working list.
6. **Reopen.** Append a reopening event that links the earlier history. Restore a human item only with user authorization; agent tasks can be reopened with evidence. Preserve IDs and never reuse them for unrelated work.

Choose the next ID by checking both active files and the backlog log. Record outcomes as `done`, `withdrawn`, `superseded`, or `dismissed`; use `amended`, `reopened`, and `archived` for those lifecycle events. A human `done` event records completion without authorizing removal; a later `archived` event preserves the original entry and explicit removal approval. Keep related edits in the same change. If interrupted after logging but before editing, reconcile the existing event instead of adding a duplicate. Concurrent writers must reread before appending and resolve ID collisions without dropping entries.

The agent backlog may be reorganized or rewritten freely, but retain unresolved work or give it an explicit disposition in the backlog log. Do not let a fresh summary silently erase a bug or unresolved question.

## Automatic completion checks

This monitoring is part of agent work. Its triggers are the end of a verified logical segment (such as an implemented feature, resolved finding, or documentation change) and the final response or handoff. Read-only commands, individual edits, and unverified work do not each need a log entry. Backlog placement still does not authorize implementing unrelated tasks.

1. **Compare scope and evidence.** Read the current human and agent backlogs and compare the completed work with each potentially affected item's full requested outcome or acceptance criteria. Use actual implementation and appropriate checks as evidence. If only part is complete, retain the remaining work, evidence, and concrete next action in the agent backlog. Do not declare a broad human request complete because one linked agent task is done.
2. **Close completed agent tasks automatically.** Append a `done` event to the backlog log containing the task ID and title, actor, source and authorization where applicable, final outcome, verification, and any remaining limitations. Then remove the completed task from the active agent backlog. This does not require approval, even when its human source is still active. Keep unresolved findings active and update affected links and the current handoff.
3. **Record completed human work and request removal.** Once the entire human outcome is verified, append one `done` event with evidence and an explicit statement that removal approval has not been received and the active entry is retained. Leave the original human text untouched. Ask in a **bold, informative message** naming the ID and title, stating the completed outcome and verification, and explaining that the original will be preserved in the backlog log before removal. For example: **H-003 - Agentic backlog monitoring is complete: the workflow is implemented and document checks passed. May I remove H-003 from the human backlog? Its original request will be preserved in the backlog log; without explicit approval it stays.** Tailor the evidence to the actual item. Ask only for items whose full scope is complete.
4. **Apply the explicit response.** Authorization must identify the item or unambiguously answer its specific removal request. Silence, an ambiguous reply, a selected-but-unsubmitted option, general praise, or authorization to execute work is not removal approval. Without explicit approval, skip removal, retain the human entry, and continue independent work. Do not repeatedly prompt on unchanged completion checks; ask again only if the owner requests a review or new evidence changes the proposed removal. If approval arrives, reread the entry, append an `archived` event with its entire original text, completion evidence or a link to the `done` event, and the exact approval source; then remove only the authorized entry. If its substantive content has changed since the request, verify completion and request approval for the changed scope.
5. **Reconcile before handoff.** Reread affected files before writing to preserve concurrent changes. Reuse an existing completion event instead of logging the same completion twice. If an agent `done` event was written before an interruption, finish its removal only if the scope and evidence still match. A human `done` event alone never permits removal. Refresh affected maintained links to archived items to target their backlog-log entries; prior append-only history remains untouched. Keep any outstanding human removal approval in the completion event so a later agent can distinguish completed work from permission to remove it.

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
