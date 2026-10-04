import { site } from "../../config/site";

export const eclipseArtworks = {
  abstract: { label: "Abstract", original: "#91adca", compressed: "#be906d" },
  celestial: { label: "Celestial", original: "#d8ad69", compressed: "#bac6d4" },
};
export const eclipseArtworkNames = Object.keys(eclipseArtworks);
export const defaultEclipseArtwork = "abstract";

export function getEclipseArtwork(name) {
  return Object.hasOwn(eclipseArtworks, name)
    ? eclipseArtworks[name]
    : undefined;
}

export function getConfiguredEclipseArtwork() {
  if (!getEclipseArtwork(site.eclipseArtwork)) {
    throw new Error(
      `Invalid site.eclipseArtwork "${site.eclipseArtwork}". Choose abstract or celestial in src/config/site.js.`,
    );
  }
  return site.eclipseArtwork;
}
