import { notFound } from "next/navigation";
import { getDesign } from ".";
import { defaultPalettes, getPalette, previewPath } from "./palettes";
import { getProject } from "../data/portfolio";
import Palette from "../components/Palette";
import PreviewBar from "../components/PreviewBar";
import { defaultEclipseArtwork, getEclipseArtwork } from "./eclipse/artwork";

export default function PortfolioPreview({
  design,
  palette = defaultPalettes[design],
  slug,
  artwork = design === "eclipse" ? defaultEclipseArtwork : undefined,
}) {
  const selected = getDesign(design);
  const project = slug ? getProject(slug) : undefined;
  if (!selected || !getPalette(palette) || (slug && !project)) notFound();
  if (artwork && (design !== "eclipse" || !getEclipseArtwork(artwork)))
    notFound();
  const { Home, ProjectPage } = selected;
  const basePath = previewPath(design, palette, undefined, artwork);
  return (
    <Palette name={palette}>
      <PreviewBar
        design={design}
        palette={palette}
        slug={slug}
        artwork={artwork}
      />
      {project ? (
        <ProjectPage project={project} basePath={basePath} artwork={artwork} />
      ) : (
        <Home basePath={basePath} artwork={artwork} />
      )}
    </Palette>
  );
}
