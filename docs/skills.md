---
type: reference
created: "2026-10-04"
updated: "2026-10-04"
curated: false
---

# Repository skills

Skills are agent instructions under `.agents/skills/`, independent of the website's runtime. The imported instructions are unchanged upstream copies, with licenses and bundled references preserved. They are versioned with this repository and do not update automatically.

| Skill | Purpose | Pinned source |
| --- | --- | --- |
| `frontend-design` | Subject-specific visual direction, planning, implementation, and critique | [Anthropic](https://github.com/anthropics/skills/tree/8a1541c4a3ffa5a20a5a91de0dcf3f0bab1d1ef4/skills/frontend-design) |
| `find-skills` | Discover skills through skills.sh and the Skills CLI | [Vercel Labs](https://github.com/vercel-labs/skills/tree/18f96ea131dab3b0fcc9b27cf7c6f6cbb6174680/skills/find-skills) |
| `grill-with-docs` | Explicitly requested interview with domain documentation | [Matt Pocock](https://github.com/mattpocock/skills/tree/24fe0ef7737efae15c87225755e9f6f5965e4888/skills/engineering/grill-with-docs) |
| `grilling` | Supporting interview workflow required by `grill-with-docs` | [Matt Pocock](https://github.com/mattpocock/skills/tree/24fe0ef7737efae15c87225755e9f6f5965e4888/skills/productivity/grilling) |
| `domain-modeling` | Supporting terminology and architectural-decision workflow | [Matt Pocock](https://github.com/mattpocock/skills/tree/24fe0ef7737efae15c87225755e9f6f5965e4888/skills/engineering/domain-modeling) |

The existing `clarify-intent` remains the local workflow for small, consequential ambiguities.

## Use and compatibility

- Mention `$frontend-design`, `$find-skills`, or `$grill-with-docs` in a request. Codex discovers repository skills and can select applicable skills by description; the imported `grill-with-docs` metadata explicitly disables implicit invocation. See [official skill documentation](https://learn.chatgpt.com/docs/build-skills).
- A request to install a skill is not a request to perform its workflow. Use the deeper interview when requested, rather than on every implementation task.
- `grill-with-docs` names a host-specific `Skill` tool. In Codex without that tool, read and apply both supporting skills directly. Its interview is more extensive than `clarify-intent`; retain the repository's question limits and existing answers unless the owner explicitly requests otherwise.
- Skills work during planning and implementation. In Plan mode, use research, questions, and design reasoning; defer repository edits requested by a skill until implementation is permitted.
- Preserve this repository's single maintained home for facts and protected human backlog. Use existing docs where appropriate; create glossary/ADR files only when their content earns a separate home, and link any new document from the index. Do not create empty documentation scaffolding.
- `find-skills` includes a global-install example. For this project, use repository-local installation unless the user asks for global scope. Search results are candidates to inspect, not proof of quality or authorization to install more skills.
- No npm dependency or external service was added. Using the Skills CLI for a future search may require network access; merely installing these Markdown workflows does not run it.

## Updating

Review the upstream diff, replace the relevant skill folder with a chosen revision, preserve its license and supporting files, and update the pinned source above. Recheck the wrapper dependencies and host compatibility notes. Installation used Codex's skill-installer with an explicit repository-local destination; no Skills CLI lockfile is claimed.
