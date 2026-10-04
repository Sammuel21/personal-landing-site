import Link from "next/link";
import styles from "./shared.module.css";
import { palettes, previewPath } from "../designs/palettes";
import { designNames } from "../designs";
import { eclipseArtworks } from "../designs/eclipse/artwork";

export default function PreviewBar({ design, palette, slug, artwork }) {
  const suffix = slug ? `/projects/${slug}` : "";
  return (
    <aside className={styles.preview} aria-label="Portfolio preview controls">
      <nav className={styles.previewTop} aria-label="Design comparison">
        <span className={styles.previewLabel}>Design preview</span>
        <div className={styles.previewOptions}>
          {designNames.map((name) => (
            <Link
              key={name}
              href={previewPath(
                name,
                palette,
                slug,
                name === design ? artwork : undefined,
              )}
              aria-current={design === name ? "page" : undefined}
            >
              {name}
            </Link>
          ))}
        </div>
        <Link className={styles.mainSite} href={suffix || "/"}>
          Main site <span aria-hidden="true">↗</span>
        </Link>
      </nav>
      <nav className={styles.paletteOptions} aria-label="Colour palette">
        {Object.entries(palettes).map(([name, option]) => (
          <Link
            key={name}
            href={previewPath(design, name, slug, artwork)}
            aria-current={palette === name ? "page" : undefined}
            title={option.description}
          >
            <span className={styles.swatches} aria-hidden="true">
              {[
                option.colors.background,
                option.colors.foreground,
                option.colors.accent,
              ].map((color, i) => (
                <span key={i} style={{ background: color }} />
              ))}
            </span>
            {option.label}
          </Link>
        ))}
      </nav>
      {design === "eclipse" && (
        <nav className={styles.artworkOptions} aria-label="Eclipse artwork">
          <span>Artwork</span>
          {Object.entries(eclipseArtworks).map(([name, option]) => (
            <Link
              key={name}
              href={previewPath(design, palette, slug, name)}
              aria-current={artwork === name ? "page" : undefined}
            >
              {option.label}
            </Link>
          ))}
        </nav>
      )}
    </aside>
  );
}
