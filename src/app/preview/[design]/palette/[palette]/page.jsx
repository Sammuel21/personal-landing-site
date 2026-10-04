import { designNames } from "../../../../../designs";
import { paletteNames } from "../../../../../designs/palettes";
import PortfolioPreview from "../../../../../designs/Preview";

export const dynamicParams = false;
export function generateStaticParams() {
  return designNames.flatMap((design) =>
    paletteNames.map((palette) => ({ design, palette })),
  );
}
export default async function PalettePreview({ params }) {
  return <PortfolioPreview {...await params} />;
}
