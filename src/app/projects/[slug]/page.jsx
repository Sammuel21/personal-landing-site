import { notFound } from "next/navigation";
import { getConfiguredDesign } from "../../../designs";
import { detailedProjects, getProject } from "../../../data/portfolio";
import { site } from "../../../config/site";
import Palette from "../../../components/Palette";

export const dynamicParams = false;
export function generateStaticParams() {
  return detailedProjects.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }) {
  const project = getProject((await params).slug);
  return project
    ? { title: `${project.title} — Portfolio`, description: project.summary }
    : {};
}
export default async function Project({ params }) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const { ProjectPage } = getConfiguredDesign();
  return (
    <Palette name={site.palette}>
      <ProjectPage project={project} />
    </Palette>
  );
}
