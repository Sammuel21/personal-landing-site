import { getPalette, paletteNames } from "../designs/palettes";
import styles from "./palette.module.css";

export default function Palette({ name, children }) {
  const palette = getPalette(name);
  if (!palette)
    throw new Error(
      `Invalid site.palette "${name}". Choose ${paletteNames.join(", ")} in src/config/site.js.`,
    );
  const style = Object.fromEntries(
    Object.entries(palette.colors).map(([key, value]) => [`--${key}`, value]),
  );
  return (
    <div
      className={styles.palette}
      data-palette={name}
      style={{
        ...style,
        // Darken pastel strokes on light surfaces; preserve them on dark ones.
        "--art-contrast": palette.mode === "light" ? "55%" : "0%",
        "--art-tint": palette.mode === "light" ? "40%" : "12%",
        colorScheme: palette.mode,
      }}
    >
      {children}
    </div>
  );
}
