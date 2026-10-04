import { designNames } from "../../../designs";
import PortfolioPreview from "../../../designs/Preview";

export const dynamicParams = false;
export function generateStaticParams() {
  return designNames.map((design) => ({ design }));
}
export default async function Preview({ params }) {
  return <PortfolioPreview {...await params} />;
}
