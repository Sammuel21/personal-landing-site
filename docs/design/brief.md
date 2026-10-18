---
type: reference
created: "2026-10-17"
updated: "2026-10-18"
curated: false
---

# Portfolio design direction

This is the maintained brief for the next design phase. It distinguishes the owner's decisions from research interpretations and unapproved proposals. The current application remains an exploration archive; this document does not claim that a new identity has been implemented. See the [analysis](analysis/README.md) and [identity decision](../adr/0001-deliberate-portfolio-identity.md).

## Owner decisions

Source: the 2026-10-17 design-calibration conversation and submitted interview answers Q1–Q8. These answers establish direction, not human review of this document.

| Decision | Meaning for the next phase |
| --- | --- |
| Research/engineering audience first; app users second | Make the work understandable and inspectable before presenting a collection of application entry points. |
| Curious, rigorous, warm, creative | Combine intellectual substance with an approachable personal character and deliberate visual expression. |
| Strong visuals and colours combined with minimalism | Restrain surrounding UI while giving meaningful imagery and colour an important compositional role. Minimalism does not require subdued imagery or a monochrome page. |
| One deliberate identity; preserve existing previews | Future design is free from the requirement to support all ten palettes. Existing families, palettes, and artwork remain available as experiments. |
| Shared family resemblance; distinct project character | The portfolio and future apps should be recognisably related, while allowing their subjects to shape their presentation. |
| Personal voice; photography optional | A short introduction and the author's language should provide presence; a portrait is not a prerequisite. |
| Inspect the work, then start a conversation | Prioritise a route from understanding the thesis to sources and contact, while keeping app entry points available. |
| Calibrate before implementing more designs | Research, visual examples, and a shared brief precede the next UI implementation. |

## Subject matter and scope

The diploma thesis remains the main project alongside information about the author. The owner describes it as LLM compression focused on MLP sublayers and explicitly says greater technical granularity is unnecessary at this stage. Existing source-backed thesis copy remains available; this task does not require new results, diagrams, or repository investigation.

The owner also describes a job-market application that processes Slovak job-market data monthly, from scraping through reporting, and a similar housing-market application. The intended site may become a gateway to web apps presenting this work. These are design context, not a verified inventory of public products. Their URLs, publication readiness, datasets, results, coverage, and exact housing cadence have not been inspected. Do not translate their existence into claims about public availability or measured impact.

The existing application still contains two generic future-project placeholders. That differs from the richer context now supplied; it is not permission to invent public project pages. Publishing project descriptions and links is a later content task.

## Working philosophy — confirmed direction

**Let a clear, restrained interface make room for vivid, specific expressions of the work and the person doing it.** The site should feel authored: its visual subjects, language, and pacing should have reasons that survive removal of logos, brand names, or decorative effects.

The owner confirmed this shared direction in Q9: “Yes, this captures the direction.” This confirms the philosophy, not human review of every analysis document or selection of a finished visual design.

The desired qualities can guide critique without becoming a numerical score:

- **Curious:** a visitor encounters a real question worth investigating, with an inviting route into it.
- **Rigorous:** claims, research status, sources, and limitations remain distinguishable; an evocative illustration never masquerades as a result.
- **Warm:** writing, readable type, inviting spacing, and considered details make the work approachable. Warmth does not mandate beige, a serif, or a portrait.
- **Creative:** a memorable image or compositional gesture belongs to this subject; it is not interchangeable with any technical portfolio.

Colour needs an authored relationship between the page ground, text, action, imagery, and project accents. A complementary hue is useful when it earns a role, not a requirement to mechanically select opposite points on a colour wheel. Contrast must support legibility and hierarchy; it cannot establish identity by itself. Exact hues, typefaces, imagery, and motion remain open until visual calibration.

## Visual calibration — Inside the work

The owner authorised producing this proposal on 2026-10-17; the local studies were completed that day and the handoff recorded on 2026-10-18. **Visual approval remains pending.** Permission to make the studies does not establish selection of the finished identity or human review of this document.

The proposition is to make complex systems inspectable. A sculptural cutaway gives the thesis an identifiable subject: a selected MLP block is drawn out from a layered model, beside a smaller candidate replacement. The image is conceptual; layer counts, shapes, dimensions, and connectors do not represent an actual architecture, measured compression ratio, or preserved quality. The future app entry instead shows symbolic records collected into a monthly report.

- Colour roles: porcelain `#F3F6F6` ground, ink `#182832` text, mist `#D6E5ED` supporting surfaces, ultramarine `#2849C7` model/actions, persimmon `#EF6843` candidate replacement, and teal `#137B68` market report. Broad artwork surfaces carry saturation; text stays on plain grounds.
- Typography: existing local Manrope, medium-weight headings around 64px desktop/36px mobile, readable 17–18px prose, sentence case, left alignment, and underlined links. First-person prose and the provisional handle Sammuel21 introduce the author; new personal copy is explicitly draft.
- Composition: the homepage pairs approximately 40% text with 60% artwork. Mobile puts the question and thesis link before a separately composed illustration. The thesis study retains the existing technical title, research question, overview, publication status, and repository link; mobile orders question, artwork, then overview/sources. The app uses the confirmed monthly Slovak job-market workflow without figures, sample listings, or a launch link.
- Research transfer: meaningful subjects earn space; personal prose gives warmth; concentrated colour creates hierarchy; consistent typography and captions connect different project imagery. No reference screenshot is used as artwork. Static compositions establish the direction before motion or application implementation.

Open the [local study board](../../local/identity-calibration/index.html). The six complete-study captures are [homepage desktop](../../local/identity-calibration/home-1440.png), [homepage mobile](../../local/identity-calibration/home-375.png), [thesis desktop](../../local/identity-calibration/thesis-1440.png), [thesis mobile](../../local/identity-calibration/thesis-375.png), [app desktop](../../local/identity-calibration/app-1440.png), and [app mobile](../../local/identity-calibration/app-375.png). These artifacts, original SVGs, generator, and verification script live in ignored `local/identity-calibration/`; a fresh clone will not contain them. The board can be opened directly from disk. Regenerate locally with `python -B local/identity-calibration/build.py`; the capture script uses this machine's bundled Playwright and installed Edge.

[A-011 completion](../backlog/log.md#2026-10-18-done--a-011---produce-inside-the-work-visual-studies) owns verification and limits. Judge whether the thesis is immediately clear, the author is present, the app belongs without repeating the thesis image, and the ordinary reading section works alongside the hero. [A-012](../backlog/agent.md#a-012---review-and-settle-the-visual-direction) retains the review step. All public routes, existing previews, shared content, and dependencies remain unchanged.

## Interview frontier

- Q1–Q9 are answered; the consequential scope, audience choices, and shared philosophy are confirmed above. The research interview has no outstanding question.
- Do not quietly turn a particular reference's aesthetics into an approved visual specification.
- Exact colours, typefaces, image subjects, and motion are decisions for visual calibration, not unanswered prerequisites for this research. No additional technical thesis detail is required now.

Deployment, backend features, authentication, analytics, and LLM project questions remain outside this phase. Existing engineering and accessibility requirements continue to apply.
