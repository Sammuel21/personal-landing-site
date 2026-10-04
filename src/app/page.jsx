import { getConfiguredDesign } from "../designs";
import { site } from "../config/site";
import Palette from "../components/Palette";

export default function HomePage() {
  const { Home } = getConfiguredDesign();
  return (
    <Palette name={site.palette}>
      <Home />
    </Palette>
  );
}
