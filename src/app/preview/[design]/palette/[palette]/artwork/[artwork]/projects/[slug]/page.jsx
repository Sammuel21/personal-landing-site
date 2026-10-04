import { paletteNames } from "../../../../../../../../../designs/palettes";
import { eclipseArtworkNames } from "../../../../../../../../../designs/eclipse/artwork";
import {
  detailedProjects,
  getProject,
} from "../../../../../../../../../data/portfolio";
import PortfolioPreview from "../../../../../../../../../designs/Preview";

export const dynamicParams = false;
export function generateStaticParams() {
  return paletteNames.flatMap((palette) =>
    eclipseArtworkNames.flatMap((artwork) =>
      detailedProjects.map(({ slug }) => ({
        design: "eclipse",
        palette,
        artwork,
        slug,
      })),
    ),
  );
}
export async function generateMetadata({ params }) {
  const project = getProject((await params).slug);
  return project
    ? {
        title: `${project.title} — Portfolio preview`,
        description: project.summary,
      }
    : {};
}
export default async function ArtworkProjectPreview({ params }) {
  return <PortfolioPreview {...await params} />;
}
