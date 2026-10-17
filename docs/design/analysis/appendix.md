---
type: reference
created: "2026-10-17"
updated: "2026-10-17"
curated: false
---

# Visual appendix and provenance

The screenshots and comparison sheets are stored in `docs/design/analysis/assets-local/`, explicitly ignored by the root `.gitignore`. They are local research evidence, not website assets. This document and its annotations remain versionable; a fresh clone will not include the linked images. Do not move third-party screenshots into `public/` or use them as project artwork.

Open the local [capture browser](assets-local/index.html), [desktop comparison](assets-local/reference-comparison.png), [mobile comparison](assets-local/mobile-comparison.png), or [machine-readable manifest](assets-local/manifest.json). The comparison mixes current pages with a clearly labelled historical OpenAI case-study image; it is not a claim that all six panels are equivalent homepage states.

## Capture method

Captured on 2026-10-17 with installed Microsoft Edge through Playwright. Desktop viewport: 1440 × 1000 CSS pixels; mobile: 375 × 1000; device scale 1. Browser locale requested `en-US`, but geolocation-dependent regional suggestions/redirects still occurred. Reduced motion was requested. Screenshots record still states after loading and scrolling; they do not establish animation quality, interaction accessibility, keyboard support, colour accuracy on other displays, or an entire site's usability.

There are 41 page screenshots: 37 HTTP-200 captures and four HTTP-403 captures retained only as failed-access evidence. Two generated comparison sheets supplement them. HTTP success does not guarantee every image loaded; the selected evidence was visually inspected. Initial top/below captures retain any consent banners. Detail captures reject cookies via visible rejection controls when present. Apple's regional banner remains visible. Geist's attempted deeper captures repeat the wordmark region; they are not evidence of the full case study's imagery.

The manifest records requested/final URL, HTTP status, viewport, actual scroll position, capture timestamp, and relevant interaction notes per screenshot. Raw captures are preserved separately from the labelled contact sheets. The latter are resized comparisons; inspect original images for legibility and details.

## Apple

Source: [MacBook Air](https://www.apple.com/macbook-air/), no URL redirect observed. Inspect [desktop opening](assets-local/apple-1440-top.png), [mobile opening](assets-local/apple-375-top.png), and [highlights](assets-local/apple-1440-below.png).

- The object takes most of the opening's area; pale blue ground and metallic blue surfaces reinforce each other.
- The angled silhouette communicates thinness before detailed copy. Mobile uses a narrower, more upright arrangement.
- Small orange announcement text and a blue action have distinct roles; the palette is not uniformly applied to every element.
- The next scene changes from isolated object to separate benefits, including a person using the product. This provides a concrete pacing contrast.

Initial captures use scroll positions 0 and approximately 900. Regional and commercial UI is included in the source evidence, not recommended for the portfolio.

## Anthropic

Source: [corporate homepage](https://www.anthropic.com/). Inspect [desktop after rejection](assets-local/anthropic-1440-detail-0.png), [mobile after rejection](assets-local/anthropic-375-detail-0.png), and [later desktop content](assets-local/anthropic-1440-detail-1500.png).

- Heavy sans-serif declaration and serif explanation establish two voices on the same pale ground.
- The release panel changes scale and typographic character; it is not just another identical card.
- On mobile the explanation follows the statement, retaining the reading relationship without desktop columns.
- The original `top`/`below` files show consent obstruction. The mobile detail recapture used the shorter visible “Reject” label; the desktop used “Reject all cookies.”

Historical collaborator: [Geist](https://geist.co/work/anthropic), [captured wordmark presentation](assets-local/geist-1440-detail-4200.png). The automated deeper scrolls did not reveal a reliable sequence of case-study images. Use the linked case and its text for the broader historical account; do not claim the wordmark capture demonstrates typography pairing or photography.

## OpenAI

Direct source: [homepage](https://openai.com/). All four attempted direct captures returned HTTP 403. The files beginning `openai-` are blocked-response evidence, excluded from the comparison sheets. No bypass was attempted.

Historical visual source: [AREA 17's OpenAI case](https://area17.com/clients/openai). Inspect the [expressive image in a black frame](assets-local/area17-1440-detail-6500.png) and [identity-system examples](assets-local/area17-1440-detail-9500.png).

- The first shows a vivid, recognisable image against a quiet dark surround; it is a historical example inside the agency's page.
- The second juxtaposes wordmark, colour scales, type/spacing guidance, and chart examples. This is evidence of multiple identity applications, not a palette to copy.
- The agency page's headings and layout are its own presentation. Keep these separate from the OpenAI work shown inside them.

Additional textual sources are linked in the [analysis](openai.md), including official current brand guidance and Studio Dumbar's later account. Current OpenAI desktop/mobile composition and motion remain visually unverified in this session.

## Linear

Source: [homepage](https://linear.app/). Inspect [desktop opening](assets-local/linear-1440-top.png), [mobile opening](assets-local/linear-375-top.png), and [mobile next section](assets-local/linear-375-below.png).

- The large product scene contains relationships between issues, activity, and action; it is a concrete subject even though the surrounding page is sparse.
- Small status colours are concentrated in the work, with a separate high-contrast sign-up action.
- The mobile scene is dense and partly cropped. It is useful as evidence of the product's presence, not a model for making technical detail readable at that size.
- Subsequent abstract panels show that concrete and conceptual imagery can coexist; the research does not claim every Linear visual depicts a working interface.

## Stripe

Source requested: [homepage](https://stripe.com/); browser final URL: `https://stripe.com/en-sk`. Inspect [desktop opening](assets-local/stripe-1440-detail-0.png), [mobile opening](assets-local/stripe-375-detail-0.png), and [product compositions](assets-local/stripe-1440-detail-1500.png).

- A large saturated ribbon crosses a quiet light ground; violet actions provide a recurring interface cue.
- Mobile shortens the visible opening copy and stacks its actions. It does not merely shrink the whole desktop arrangement.
- Product compositions use examples of transactions, interfaces, and cards alongside abstract fields. The source's demonstrated figures are not portfolio data.
- The top image is atmospheric; the following concrete examples do much of the explanatory work. That dependency matters when evaluating our much smaller content inventory.

## Current portfolio

Source: [Gallery / Lagoon](http://localhost:3000/preview/gallery/palette/lagoon), verified reachable during capture. Inspect [desktop](assets-local/gallery-1440-top.png), [mobile](assets-local/gallery-375-top.png), and [desktop continuation](assets-local/gallery-1440-below.png).

The introductory language and visual study are generic despite strong scale and an orderly layout. On mobile, navigation and preview tooling consume substantial initial space, while the thesis explanation follows the artwork. This supports a hierarchy/content critique, not a new functional defect report.

The earlier [five-family Silver comparison](../../../local/design-review/five-families-silver.png) helps isolate composition from palette. It remains in the previous ignored review directory; the current study does not relabel it as a fresh capture.

## Reproducing the appendix

On this machine, local scripts `local/capture-references.cjs`, `local/capture-reference-details.cjs`, `local/recapture-anthropic-mobile.cjs`, and `local/build-reference-appendix.cjs` capture and assemble the evidence using the bundled Playwright/sharp runtimes and installed Edge. These scripts are ignored working artifacts and contain machine-specific runtime paths. They are not application dependencies or a required test framework.

Without those local artifacts, visit the linked sources at the two viewport sizes above, record actual locale/redirect and date, capture the opening and a relevant subsequent section, and recreate a local manifest. Use the relevant visible content rather than assuming historical scroll offsets still point to the same material. Record blocked access or banners instead of fabricating a clean state. Re-capture only evidence needed for a changed conclusion; the purpose is informed judgment, not an exhaustive screenshot archive.
