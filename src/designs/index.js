import { site } from "../config/site";
import EditorialHome from "./editorial/Home";
import EditorialProject from "./editorial/ProjectPage";
import AmbientHome from "./ambient/Home";
import AmbientProject from "./ambient/ProjectPage";

const designs = {
  editorial: { Home: EditorialHome, ProjectPage: EditorialProject },
  ambient: { Home: AmbientHome, ProjectPage: AmbientProject },
};
export const designNames = Object.keys(designs);
export function getDesign(name) {
  return Object.hasOwn(designs, name) ? designs[name] : undefined;
}
export function getConfiguredDesign() {
  const design = getDesign(site.design);
  if (!design)
    throw new Error(
      `Invalid site.design "${site.design}". Choose editorial or ambient in src/config/site.js.`,
    );
  return design;
}
