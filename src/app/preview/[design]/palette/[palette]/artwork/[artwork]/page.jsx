import { paletteNames } from "../../../../../../../designs/palettes";
import { eclipseArtworkNames } from "../../../../../../../designs/eclipse/artwork";
import PortfolioPreview from "../../../../../../../designs/Preview";

export const dynamicParams = false;
export function generateStaticParams() {
  return paletteNames.flatMap((palette) =>
    eclipseArtworkNames.map((artwork) => ({
      design: "eclipse",
      palette,
      artwork,
    })),
  );
}
export default async function ArtworkPreview({ params }) {
  return <PortfolioPreview {...await params} />;
}
