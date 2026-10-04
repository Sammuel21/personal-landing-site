---
type: backlog-log
created: "2026-10-03"
---

# Backlog history

Append-only record of item amendments, archival, dispositions, and reopenings. Follow the [lifecycle](../conventions.md); preserve full original human entries and their approval evidence when changing or archiving them. New events go at the bottom.

## [2026-10-03] done | A-001 - Initialize a minimal Next.js portfolio

- Actor: agent (Codex).
- Source: H-001 and the owner's report of `npm run dev` failing during setup.
- Outcome: Added development/build/start scripts, a root layout, a minimal home page, and global CSS to the application dependencies already installed by the owner. Documented commands in the README.
- Evidence: `npm run build` passed; `npm run dev` started on port 3000; HTTP GET `/` returned 200 with the expected home-page content.
- Scope: The agent setup milestone is complete. The human portfolio request remains active; this entry does not archive or alter it. Linting and portfolio design remain future work.

## [2026-10-04] done | A-002 - Two portfolio designs with shared content

- Actor: agent (Codex).
- Source and authorization: H-001 and the owner's explicit request to implement the supplied "Two elegant portfolio designs with a shared content model" plan.
- Outcome: Implemented Editorial and Ambient home/thesis pages, shared data, configuration selection, context-preserving preview navigation, static route generation, preview robots metadata, local SVG artwork, responsive CSS Modules, optional finite reveals, reduced-motion rules, keyboard focus/skip navigation, and compatible Next.js ESLint tooling. The README documents switching and editing.
- Verification: `npm run lint` and `npm run build` passed. All six public/preview URLs returned 200 with server-rendered content; unknown variants and slugs returned 404; previews contained `noindex, nofollow`. Temporarily selecting Ambient switched both public pages; invalid configuration produced the intended explicit error; Editorial was restored.
- Browser verification: Home and thesis layouts were checked at 375, 768, and 1440 pixels with one h1, no horizontal overflow or clipped text. Checked direct loads, thesis refresh, design switching with the project retained, preview back navigation, visible keyboard focus, and skip-to-main focus. Reviewed desktop/mobile captures. Text palette contrast checks passed for body text and large accent headings.
- Progressive enhancement: A temporary localhost proxy blocked all scripts; both designs and thesis navigation remained readable and functional. The browser API lacks native reduced-motion emulation, so the reduced-motion CSS branch was forced in the temporary proxy; computed animations were `none` and scrolling was `auto`. The actual preference selector and client-side media guard were reviewed in source; OS preference toggling was not exercised.
- Follow-up: A-003 records the development-only npm advisory. Real biography/thesis content, deployment, and H-002 remain future work. Existing human backlog entries were left unchanged.

## [2026-10-04] done | A-004 - Independent configurable colour palettes

- Actor: agent (Codex).
- Source and authorization: Owner requested additional colour palettes and explicitly chose independent layout/palette selection plus preview-only controls with a configured public default.
- Outcome: Added Silver, Graphite, Ember, Cobalt, Vermilion, Amethyst, Solar, and Lunar alongside original Olive and Lagoon. A shared palette catalogue supplies semantic CSS variables and coordinated artwork colours to both layouts. Added shareable, pre-rendered palette preview routes and labelled swatch links; project, back, and design-switch links retain the palette. Original preview entry URLs and the public Editorial + Olive default remain available. No new dependency or client component was added.
- Verification: Lint and production build passed. All 40 palette-specific home/thesis pages returned 200 with the intended palette and robots metadata; invalid combinations returned 404. Temporarily configuring Graphite changed both public static pages without visitor controls; an invalid palette produced a clear error; Olive was restored. Checked 110 text/background pairs at a minimum 4.5:1 ratio.
- Browser review: All 20 layout/palette home combinations fit a 375px viewport. Representative light/dark home and thesis pages fit 375, 768, and 1440px without clipped text or horizontal overflow. Palette and layout switches retained the current project; back navigation retained both selections. Controls are ordinary server-rendered links and do not introduce a JavaScript requirement.
- Scope: A-003 remains unresolved and unchanged. Existing human backlog entries were preserved. Palette editing and the role of dominant, complementary, and accent colours are documented in the README.

## [2026-10-04] done | A-005 - Independent artwork colours

- Actor: agent (Codex).
- Source and authorization: Owner's feedback that palette variants were too monotonous and geometric artwork should use different colours, as in the original designs.
- Outcome: Removed palette-owned motif colours. Both layouts now use each project's content-defined accent on home and detail pages; Ambient's hero has its own content-defined turquoise accent. Light palettes darken decorative strokes, while surfaces/glows retain the artwork hue. Captions use UI text colours. Updated the editing guide; existing human backlog entries remain unchanged.
- Verification: Lint and production build passed. Browser checks confirmed distinct project accents in Graphite and Silver and darker strokes on light backgrounds. Graphite Ambient fits 1440px; both Silver home layouts fit 375px without horizontal overflow. Calculated 70 caption/background combinations across all ten palettes, including the strongest gradient tint: minimum contrast 4.98:1. Captured the updated artwork for visual review.

## [2026-10-04] done | A-006 - Apply backlog completion checks after logical work segments

- Actor: agent (Codex).
- Source and authorization: [H-003](human.md#h-003---agentic-backlog-monitoring) and the owner's explicit chat request to add and execute it on 2026-10-04.
- Outcome: Project instructions now require backlog completion checks after verified logical segments and before final responses or handoffs. The lifecycle procedure closes verified completed agent tasks automatically, records completed human work separately from removal approval, requires a bold informative removal request, and skips human removal without explicit authorization. It preserves partial work and unresolved findings and reconciles repeated checks or interrupted updates without duplicate completion events.
- Verification: Checked local Markdown targets and anchors, unique active IDs, preservation of prior human entries and append-only history, and retention of unresolved A-003. Reviewed the completion paths for partial work, a completed agent task linked to an active human item, explicit approval, silence or an ambiguous response, repeated checks, and interrupted log-before-removal updates. Whitespace checks passed.
- Completion check: The full A-006 scope is complete. This event precedes automatic removal of A-006 from the working backlog. H-001's broader portfolio/learning request, H-002's project-question feature, and A-003 remain incomplete.
- Boundary: Monitoring runs during agent work at logical work boundaries. It is an instruction-based workflow; compliance by future agent sessions has not been exercised.

## [2026-10-04] done | H-003 - Agentic backlog monitoring

- Actor: agent (Codex).
- Source: Owner's request to add and execute H-003 on 2026-10-04.
- Outcome and verification: The requested workflow is implemented; see [A-006](#2026-10-04-done--a-006---apply-backlog-completion-checks-after-logical-work-segments) for the completed scope, checks, and boundary.
- Removal approval: Not received. H-003 remains unchanged in the human backlog. A bold, item-specific removal request will be presented in the final response; without explicit approval, removal is skipped. Implementation authorization does not authorize deletion.
