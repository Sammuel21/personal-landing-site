import { notFound } from "next/navigation";
import { getDesign } from ".";
import { defaultPalettes, getPalette, previewPath } from "./palettes";
import { getProject } from "../data/portfolio";
import Palette from "../components/Palette";
import PreviewBar from "../components/PreviewBar";

export default function PortfolioPreview({
  design,
  palette = defaultPalettes[design],
  slug,
}) {
  const selected = getDesign(design);
  const project = slug ? getProject(slug) : undefined;
  if (!selected || !getPalette(palette) || (slug && !project)) notFound();
  const { Home, ProjectPage } = selected;
  const basePath = previewPath(design, palette);
  return (
    <Palette name={palette}>
      <PreviewBar design={design} palette={palette} slug={slug} />
      {project ? (
        <ProjectPage project={project} basePath={basePath} />
      ) : (
        <Home basePath={basePath} />
      )}
    </Palette>
  );
}
