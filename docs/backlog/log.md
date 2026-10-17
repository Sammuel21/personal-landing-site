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

## [2026-10-05] done | A-007 - Eclipse, Lattice, and Studio portfolio designs

- Actor: agent (Codex).
- Source and authorization: Owner's approved three-design implementation plan, confirmed Sol-original / Luna-compressed relationship, and final request to finish without further testing.
- Outcome: Added three independent home/thesis families, local licensed Instrument Serif and Manrope fonts, celestial/block/paper artwork, native research disclosures, and registry-driven comparison controls. All five layouts share source-backed thesis content and ten independent palettes. Editorial + Olive remains the public default; outcomes are explicitly unpublished.
- Verification: Lint and production build passed (114 generated pages). All 100 palette-specific home/thesis previews returned 200 with the intended palette and robots metadata. Unknown design, palette, and project paths returned 404. Temporarily selecting each new public design switched both public pages; the original configuration was restored and rebuilt.
- Browser checks: All six new pages fit 375, 768, and 1440px with one h1 and no horizontal overflow or clipped text. Checked keyboard focus, skip navigation, native disclosures, and context-preserving layout/palette/project links. The 30 new homepage/palette combinations passed mobile and text-contrast checks (minimum 4.79:1); diagram cells pass across ten palettes (minimum 3.63:1). Reviewed default and opposite light/dark appearances and Silver compositions; captured desktop/mobile homepages and desktop thesis pages.
- Progressive enhancement and limits: All six new pages remained readable with scripts blocked and reduced-motion CSS forced through a temporary local proxy. The browser API does not expose native OS motion-preference emulation or reliable 200% zoom; 720px reflow checks passed, but native preference toggling and actual browser zoom remain unverified. Stopped additional review at the owner's request. Captures were saved outside the repository; the final optional recapture was unavailable after the browser session ended.
- Completion check: A-007's implementation is complete and removed from the working backlog. H-001's broader portfolio/learning work, H-002, and A-003 remain open. Human entries, including H-003 pending removal approval, remain unchanged.

## [2026-10-08] done | A-008 - Refine Eclipse artwork, typography, and motion

- Actor: agent (Codex).
- Source and authorization: Owner's approved Eclipse revision plan and request to continue and finish after interruption.
- Outcome: Added Abstract and restrained Celestial artwork, shared 48-second tilted orbit, 12-second transfer pulses, stationary labels, and keyboard-accessible playback control. Manrope replaces Eclipse's serif type; unused Instrument Serif assets were removed. Artwork configuration and static preview routes preserve palette/project/back context. Public configuration remains Editorial + Olive, with Abstract selected for Eclipse. No runtime dependency was added.
- Verification: Final lint and production build passed during implementation (154 generated pages). Both artwork styles on home and thesis pages fit 375, 768, and 1440px with one h1 and no horizontal overflow or clipped text. Keyboard pause/resume and visible focus passed. Temporary public configuration checks verified both styles on both pages and the explicit invalid-value error, then restored the default.
- Completion checks: Inspected all 40 generated artwork/palette/home-or-thesis HTML files for the intended artwork, preview robots metadata, complete still scene, illustrative caption, and retained project back links. The production route manifest has no fallback for artwork routes and excludes invalid combinations. Four desktop/mobile artwork captures are saved in the local review directory outside the repository.
- Limits: Final live HTTP rechecks were unavailable because localhost access failed in this session; generated production files were checked directly instead. Reduced-motion, hidden-tab, and offscreen guards were reviewed in source, but native preference toggling and those automatic transitions were not exercised. The still server-rendered output was verified; a fresh browser session with JavaScript disabled was not repeated. Detailed visual review focused on Lunar; all palettes passed generated-content checks, without a new comprehensive visual campaign.
- Completion check: A-008's implementation is complete and removed from the working backlog, with the above verification limits retained for review. H-001 remains broader ongoing work; H-002 and A-003 remain open. Existing human entries, including H-003 pending removal approval, are unchanged. Technique-specific compression animations remain deferred until visual feedback.

## [2026-10-17] done | A-009 - Five additional independent portfolio designs

- Actor: agent (Codex).
- Source and authorization: Owner's 2026-10-17 five-design request and explicit approval to implement the Broadside, Fieldnotes, Index, Gallery, and Wayfinder plan.
- Outcome: Added five independent home/thesis compositions, bringing the registry to ten families and 100 layout/palette combinations. Shared content, existing families, Eclipse artwork choices, public Editorial + Olive configuration, static routes, preview robots metadata, and unknown-value 404s are preserved. Comparison links now live in an accessible native disclosure with mobile grids and 44px targets. New pages use server components, CSS Modules, local/system fonts, and local SVG artwork; no runtime dependency, external asset service, or client component was added.
- Verification: Final `npm run lint` and `npm run build` passed (264 generated pages, including framework pages). Live HTTP checks passed for 262 supported public/preview routes and eight invalid routes. All 262 production HTML files passed title checks; thesis descriptions and preview `noindex, nofollow` metadata were verified. All ten new pages retained project/palette/family/back/main-site/section context. Eclipse retained artwork through palette changes, dropped it when changing families, and restored Abstract on return; its existing Pause/Resume control passed.
- Visual and accessibility checks: Captured and reviewed all ten new pages at 375, 768, and 1440px in Silver and Graphite (60 captures). These views passed horizontal-overflow, single-h1, text-contrast, and main-content target checks. The remaining eight palettes passed rendered text-contrast checks on all ten pages (80 additional views). Keyboard disclosure, visible focus, and skip links passed across all ten families; comparison controls were checked at all three widths for existing families. The new pages remained readable and their native comparison controls usable with JavaScript disabled and reduced motion emulated.
- Review artifacts: [Capture index](../../local/design-review/captures.md), [visual capture browser](../../local/design-review/captures.html), [Silver comparison](../../local/design-review/five-families-silver.png), and [verification evidence](../../local/design-review/verification.json) are local ignored artifacts, not committed project assets. The index includes the 20 requested desktop/mobile home/thesis captures. Production preview was restarted on the final build and verified at [localhost:3000](http://localhost:3000); its process is local to this machine/session.
- Limits: Browser checks used installed Microsoft Edge with emulated viewport sizes and reduced motion. Safari, Firefox, physical touch devices, screen-reader narration, and native browser zoom were not tested. Local captures and preview availability do not imply deployment.
- Completion check: A-009 is verified complete; this event precedes its automatic removal from the agent backlog. H-001 remains broader ongoing portfolio/learning work; H-002 and unrelated A-003 remain open. All human entries, including H-003 pending removal approval, remain unchanged. Existing skill/documentation edits were preserved.

## [2026-10-17] done | A-010 - Research and calibrate the portfolio identity

- Actor: agent (Codex).
- Source and authorization: Owner's request to reprioritise source analysis and design philosophy before further implementation, explicitly invoking grill-with-docs; subsequent Q1–Q9 answers, including “Yes, this captures the direction.” This task was completed within the research conversation and is recorded here without leaving a completed item in the active backlog.
- Outcome: Added detailed primary-source analyses for Apple, Anthropic, OpenAI, Linear, and Stripe, plus a source-grounded critique of the current portfolio. Each distinguishes documented intent/history, observed presentation, interpretation, and transfer limits. The [brief](../design/brief.md) owns confirmed audience, character, project context, personal voice, visitor path, and app-family direction. An [ADR](../adr/0001-deliberate-portfolio-identity.md) records one future identity with existing previews preserved; the root glossary distinguishes projects/apps from design experiments.
- Visual evidence: The [appendix](../design/analysis/appendix.md) records 41 screenshots (37 HTTP-200 captures and four blocked OpenAI captures), desktop/mobile comparison sheets, source URLs, sizes, timestamps, locale behaviour, and consent-state notes. Selected images and both comparison sheets were visually reviewed. All appendix media and working scripts are ignored; no third-party imagery was added to the public site.
- Verification: Checked metadata, whitespace, and 90 local links across 15 Markdown files; all passed. Git ignore checks covered every existing appendix artifact. The human backlog and application/dependency files have no diff. `git diff --check` passed. Application lint/build were not repeated because the change contains documentation and local research artifacts only.
- Limits: OpenAI's current browser presentation was blocked with HTTP 403; the analysis uses retrievable text plus official brand guidance and historical collaborator evidence, without claiming a current visual inspection. Geist's deeper automated captures repeat its wordmark presentation. This is focused historical/design analysis, not a complete corporate history, independent impact assessment, exhaustive accessibility audit, or inspection of the future apps' datasets and public readiness.
- Completion check: The requested research and shared-direction interview are complete; no interview answer is pending. A-009 remains complete, H-001 remains broader ongoing portfolio work, and H-002/A-003 remain outside this phase. All existing human backlog entries, including H-003's pending removal approval, remain unchanged. Future visual calibration and implementation are next-phase work, not claimed as completed or automatically authorised by this entry.
