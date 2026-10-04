import { designNames } from "../../../../../../../designs";
import { paletteNames } from "../../../../../../../designs/palettes";
import {
  detailedProjects,
  getProject,
} from "../../../../../../../data/portfolio";
import PortfolioPreview from "../../../../../../../designs/Preview";

export const dynamicParams = false;
export function generateStaticParams() {
  return designNames.flatMap((design) =>
    paletteNames.flatMap((palette) =>
      detailedProjects.map(({ slug }) => ({ design, palette, slug })),
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
export default async function PaletteProjectPreview({ params }) {
  return <PortfolioPreview {...await params} />;
}
