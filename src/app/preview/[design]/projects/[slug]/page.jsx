import { designNames } from "../../../../../designs";
import { detailedProjects, getProject } from "../../../../../data/portfolio";
import PortfolioPreview from "../../../../../designs/Preview";

export const dynamicParams = false;
export function generateStaticParams() {
  return designNames.flatMap((design) =>
    detailedProjects.map(({ slug }) => ({ design, slug })),
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
export default async function ProjectPreview({ params }) {
  return <PortfolioPreview {...await params} />;
}
