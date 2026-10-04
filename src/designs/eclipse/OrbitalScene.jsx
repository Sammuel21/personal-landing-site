import { useId } from "react";
import OrbitalMotion from "./OrbitalMotion";
import { getEclipseArtwork, defaultEclipseArtwork } from "./artwork";
import styles from "./orbit.module.css";

function Sphere({ artwork, smaller, color }) {
  const id = useId().replaceAll(":", "");
  const abstract = artwork === "abstract";
  const lines = smaller ? 7 : 13;
  return (
    <svg viewBox="0 0 400 400" className={styles.sphere} aria-hidden="true">
      <defs>
        <radialGradient id={`${id}-surface`} cx="32%" cy="25%" r="78%">
          <stop stopColor={color} stopOpacity={abstract ? ".3" : "1"} />
          <stop
            offset=".52"
            stopColor={color}
            stopOpacity={abstract ? ".13" : ".95"}
          />
          <stop
            offset="1"
            stopColor={abstract ? color : "#263341"}
            stopOpacity={abstract ? ".04" : "1"}
          />
        </radialGradient>
        <clipPath id={`${id}-clip`}>
          <circle cx="200" cy="200" r="194" />
        </clipPath>
        <linearGradient id={`${id}-shade`}>
          <stop stopColor="#000" stopOpacity="0" />
          <stop offset=".6" stopColor="#000" stopOpacity="0" />
          <stop offset="1" stopColor="#000" stopOpacity=".23" />
        </linearGradient>
      </defs>
      <circle cx="200" cy="200" r="194" fill={`url(#${id}-surface)`} />
      {abstract ? (
        <g
          clipPath={`url(#${id}-clip)`}
          stroke="currentColor"
          fill="none"
          strokeWidth=".8"
        >
          <g transform="rotate(-24 200 200)">
            {Array.from({ length: lines }, (_, i) => {
              const y = 200 + (i - (lines - 1) / 2) * (350 / lines);
              const radius = Math.sqrt(194 ** 2 - (y - 200) ** 2);
              return (
                <ellipse
                  key={i}
                  cx="200"
                  cy={y}
                  rx={radius}
                  ry={radius * 0.24}
                  opacity=".65"
                />
              );
            })}
            {[0.22, 0.48, 0.73, 0.92].map((width) => (
              <ellipse
                key={width}
                cx="200"
                cy="200"
                rx={194 * width}
                ry="194"
                opacity=".38"
              />
            ))}
          </g>
          <circle cx="200" cy="200" r="193" opacity=".65" />
        </g>
      ) : (
        <g clipPath={`url(#${id}-clip)`}>
          {smaller ? (
            <g fill="#425265" opacity=".07">
              <path d="M64 101 Q107 66 131 108 T180 126 Q199 158 160 186 T121 222 Q67 201 75 163 T64 101Z" />
              <path d="M192 220 Q221 170 254 193 T292 237 Q318 263 282 302 T227 314 Q176 293 192 220Z" />
              <path d="M204 43 Q226 72 210 99 T235 133 Q270 145 280 101 T247 37Z" />
            </g>
          ) : (
            <g fill="none" stroke="#fff1cf" strokeWidth="1" opacity=".12">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <path
                  key={i}
                  transform={`translate(0 ${i * 38})`}
                  d="M-20 50 Q90 96 183 65 T420 86"
                />
              ))}
            </g>
          )}
          <circle cx="200" cy="200" r="194" fill={`url(#${id}-shade)`} />
        </g>
      )}
    </svg>
  );
}

export default function OrbitalScene({
  presentation,
  artwork = defaultEclipseArtwork,
}) {
  const colors = getEclipseArtwork(artwork);
  const abstract = artwork === "abstract";
  return (
    <OrbitalMotion artwork={artwork}>
      <div
        className={styles.stage}
        aria-hidden="true"
        style={{
          "--original": colors.original,
          "--compressed": colors.compressed,
        }}
      >
        <div className={`${styles.plane} ${styles.trajectory}`} />
        <div className={styles.plane}>
          <div className={styles.rotor}>
            {[false, true].map((smaller) => (
              <div
                key={String(smaller)}
                className={`${styles.position} ${smaller ? styles.smallPosition : ""}`}
              >
                <div className={styles.counter}>
                  <div className={styles.upright}>
                    <div
                      className={`${styles.body} ${smaller ? styles.smallBody : ""}`}
                    >
                      <Sphere
                        artwork={artwork}
                        smaller={smaller}
                        color={smaller ? colors.compressed : colors.original}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className={styles.transfer}>
              <div className={styles.beam} />
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className={styles.pulseTrack}
                  style={{ animationDelay: `${i * 0.22}s` }}
                >
                  <i />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.legend}>
        <div>
          <strong>
            {abstract ? "Original model" : presentation.original.name}
          </strong>
          <span>
            {abstract ? "A larger representation" : presentation.original.role}
          </span>
        </div>
        <span className={styles.legendArrow} aria-hidden="true">
          →
        </span>
        <div>
          <strong>
            {abstract ? "Compressed model" : presentation.compressed.name}
          </strong>
          <span>
            {abstract
              ? "A smaller approximation"
              : presentation.compressed.role}
          </span>
        </div>
      </div>
      <figcaption>{presentation.diagramCaption}</figcaption>
    </OrbitalMotion>
  );
}
