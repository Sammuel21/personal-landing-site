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
import BroadsideHome from "./broadside/Home";
import BroadsideProject from "./broadside/ProjectPage";
import FieldnotesHome from "./fieldnotes/Home";
import FieldnotesProject from "./fieldnotes/ProjectPage";
import IndexHome from "./index/Home";
import IndexProject from "./index/ProjectPage";
import GalleryHome from "./gallery/Home";
import GalleryProject from "./gallery/ProjectPage";
import WayfinderHome from "./wayfinder/Home";
import WayfinderProject from "./wayfinder/ProjectPage";

const designs = {
  editorial: { Home: EditorialHome, ProjectPage: EditorialProject },
  ambient: { Home: AmbientHome, ProjectPage: AmbientProject },
  eclipse: { Home: EclipseHome, ProjectPage: EclipseProject },
  lattice: { Home: LatticeHome, ProjectPage: LatticeProject },
  studio: { Home: StudioHome, ProjectPage: StudioProject },
  broadside: { Home: BroadsideHome, ProjectPage: BroadsideProject },
  fieldnotes: { Home: FieldnotesHome, ProjectPage: FieldnotesProject },
  index: { Home: IndexHome, ProjectPage: IndexProject },
  gallery: { Home: GalleryHome, ProjectPage: GalleryProject },
  wayfinder: { Home: WayfinderHome, ProjectPage: WayfinderProject },
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
