# personal-landing-site
Personal landing site featuring my existing work &amp; projects in presentable and aesthetic manner.

Project direction, working backlogs, and agent conventions are in the [documentation index](docs/index.md).

## Run locally

Install dependencies with `npm install`, then run `npm run dev` and open http://localhost:3000.

`npm run build` creates the production build. `npm start` serves that build locally.

`npm run lint` checks the JavaScript with Next.js's ESLint rules.

## Designs and content

The site has five layouts sharing portfolio content and a dedicated thesis page. All ten colour palettes work independently with every layout: 50 combinations, each with a homepage and thesis page.

| Design | Composition | Default preview palette |
| --- | --- | --- |
| `editorial` | Serif typography and project rows | Olive |
| `ambient` | Abstract graphics and project panels | Lagoon |
| `eclipse` | Centered orbital composition, with Abstract or Celestial artwork | Lunar |
| `lattice` | Diagram-led research portfolio with native thesis disclosures | Silver |
| `studio` | Oversized type and offset paper-study posters | Vermilion |

- Set `design` and `palette` in [`src/config/site.js`](src/config/site.js), for example `{ design: "ambient", palette: "silver" }`. Both public pages use the same combination. The default remains Editorial + Olive. Rebuild for production after changing configuration; unsupported values produce a clear error.
- Compare `/preview/{design}` using any design name above. Controls let you switch palette and layout while keeping the current project. Controls only appear in previews; the public site uses configuration.
- Every combination has a shareable URL, such as `/preview/ambient/palette/silver` or `/preview/editorial/palette/lunar/projects/diploma-thesis`. Project, back, and section links retain both selections. All supported pages are pre-rendered; unknown combinations return 404. Previews have `noindex, nofollow` and are accessible to anyone with the URL.
- Eclipse also accepts `eclipseArtwork: "abstract"` or `"celestial"` in site configuration, consistently across its public homepage and thesis page. Abstract is the default for existing Eclipse preview URLs. Its preview-only artwork links use `/preview/eclipse/palette/{palette}/artwork/{artwork}` with an optional `/projects/diploma-thesis` suffix. Palette/project/back links retain the artwork; switching to another layout drops artwork selection and returning to Eclipse starts with Abstract. Unsupported artwork values return a preview 404 or a clear public configuration error.
- Edit introduction, biography, GitHub contact, and projects in [`src/data/portfolio.js`](src/data/portfolio.js). The first project is featured. Keep placeholder labels until replacing them with real content.
- Project `visual` selects `orbits`, `steps`, or `grid`; its `accent` sets the artwork colour independently of the page palette. The Ambient introduction graphic uses `portfolio.introduction.artwork.visual` and `.accent`. Graphics live in `src/components/Artwork.jsx`.
- Thesis `fullTitle` supplies the research title. Its `presentation` object contains the Sol/Luna roles, explanatory caption, method steps, and block/paper artwork colours. `src/components/ResearchArt.jsx` owns the block-replacement and paper graphics. Eclipse's `OrbitalScene.jsx` owns its two sphere styles; `src/designs/eclipse/artwork.js` defines their colours and supported names. All graphics are illustrative, not numerical representations of experimental results.
- Detail `sections` contain `id`, `title`, and `text`. Projects with sections receive `/projects/{slug}` and matching preview routes. Optional `resources` contain `{ label, href }`; absent resources show an honest coming-soon message.
- The two future-project examples are deliberately noninteractive. When replacing one with a full project, add its sections and an appropriate presentation, then link its entry in each homepage and verify its detail page in every family.
- General page metadata is in `src/app/layout.jsx`; thesis titles/descriptions come from the project data.

The thesis overview and methodology paraphrase its [README](https://github.com/Sammuel21/diploma-thesis-block-replacement/blob/e8e6615ecf1119ec666237e5dbb7de898bb18211/README.md) and [block-level research notes](https://github.com/Sammuel21/diploma-thesis-block-replacement/blob/e8e6615ecf1119ec666237e5dbb7de898bb18211/docs/documentation/block-level.md). Sol as the original and Luna as the compressed model are the owner's confirmed presentation convention. Results remain explicitly unpublished; notebook outputs are not presented as validated findings.

Eclipse, Lattice, and Studio use Manrope, bundled in `src/designs/fonts/` with its SIL Open Font License and loaded through `next/font/local`. The originals retain their system fonts. No font service is contacted at runtime or build time. Source: [Manrope](https://github.com/google/fonts/tree/main/ofl/manrope).

Eclipse's spheres share a 48-second orbit with a 60° tilted plane and −15° diagonal orientation. Three small transfer pulses recur every 12 seconds. A small client wrapper starts motion after hydration, pauses it offscreen or when the tab is hidden, and respects manual pause. Its Pause/Resume control affects orbit and transfer together; reduced motion and no JavaScript produce a complete still scene. Animation runs in CSS, without per-frame React updates. To adjust the timing and geometry, edit `src/designs/eclipse/orbit.module.css`. Technique-specific compression animations remain a later visual iteration.

### Available palettes

| Configuration value | Colour direction |
| --- | --- |
| `olive` | Original ivory, charcoal, olive |
| `lagoon` | Original near-black, warm white, turquoise |
| `silver` | White, black, silver |
| `graphite` | Near-black, silver, white |
| `ember` | Cream, brown, burnt orange |
| `cobalt` | White, midnight blue, cobalt |
| `vermilion` | Warm white, charcoal, red |
| `amethyst` | Ink, soft white, purple |
| `solar` | Ivory, chocolate, golden yellow |
| `lunar` | Midnight blue, silver, icy white |

Edit colour roles in [`src/designs/palettes.js`](src/designs/palettes.js). `background` is the dominant colour, `surface`/`raised` provide complementary surfaces, and `accent` provides emphasis. Text, borders, and selection colours follow the page palette. Artwork keeps its own content-defined colours across palettes, with darker strokes on light backgrounds and subtle coloured surfaces/glows. Captions use the page's text colours for readability. Preserve readable contrast when adjusting values; avoid adding fixed colours inside layout styles. New catalogue entries automatically appear in preview controls and static routes after rebuilding.

## Source layout

| Location | Purpose |
| --- | --- |
| `src/app/` | Public and preview routes, metadata, global resets/accessibility |
| `src/designs/` | Layout registry, palette catalogue, shared preview rendering, and each layout's components/CSS Module |
| `src/components/` | Shared navigation, comparison bar, artwork, and optional reveal animation |
| `src/config/site.js` | Public layout and palette selection |
| `src/data/portfolio.js` | Shared portfolio content |
| `public/` | Future local images and downloads |

Routes render on the server and are pre-rendered from local data. Section reveals and Eclipse's playback controls use small client components; content and navigation work without JavaScript. Reveals are finite; Eclipse's continuous orbit has pause controls. All respect reduced-motion preferences. There is no backend, CMS, analytics, or deployment setup in this milestone.
