import { site } from "../config/site";
import EditorialHome from "./editorial/Home";
import EditorialProject from "./editorial/ProjectPage";
import AmbientHome from "./ambient/Home";
import AmbientProject from "./ambient/ProjectPage";
import EclipseHome from "./eclipse/Home";
import EclipseProject from "./eclipse/ProjectPage";
import LatticeHome from "./lattice/Home";
import LatticeProject from "./lattice/ProjectPage";
import StudioHome from "./studio/Home";
import StudioProject from "./studio/ProjectPage";

const designs = {
  editorial: { Home: EditorialHome, ProjectPage: EditorialProject },
  ambient: { Home: AmbientHome, ProjectPage: AmbientProject },
  eclipse: { Home: EclipseHome, ProjectPage: EclipseProject },
  lattice: { Home: LatticeHome, ProjectPage: LatticeProject },
  studio: { Home: StudioHome, ProjectPage: StudioProject },
};
export const designNames = Object.keys(designs);
export function getDesign(name) {
  return Object.hasOwn(designs, name) ? designs[name] : undefined;
}
export function getConfiguredDesign() {
  const design = getDesign(site.design);
  if (!design)
    throw new Error(
      `Invalid site.design "${site.design}". Choose ${designNames.join(", ")} in src/config/site.js.`,
    );
  return design;
}
