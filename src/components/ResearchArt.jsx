import { useId } from "react";
import styles from "./research-art.module.css";

export function Celestial({ presentation, animate = false }) {
  const id = useId().replaceAll(":", "");
  const { original, compressed } = presentation;
  return (
    <figure className={`${styles.cosmos} ${animate ? styles.arrive : ""}`}>
      <svg viewBox="0 0 1100 470" aria-hidden="true">
        <defs>
          <radialGradient id={`${id}-sun`} cx="35%" cy="30%">
            <stop stopColor="#fff2d7" />
            <stop offset=".55" stopColor={original.color} />
            <stop offset="1" stopColor="#b36535" />
          </radialGradient>
          <radialGradient id={`${id}-moon`} cx="28%" cy="28%">
            <stop stopColor="#f0f4fc" />
            <stop offset=".62" stopColor={compressed.color} />
            <stop offset="1" stopColor="#536581" />
          </radialGradient>
          <radialGradient id={`${id}-halo`}>
            <stop stopColor={original.color} stopOpacity=".2" />
            <stop offset="1" stopColor={original.color} stopOpacity="0" />
          </radialGradient>
          <clipPath id={`${id}-disc`}>
            <circle cx="793" cy="270" r="88" />
          </clipPath>
        </defs>
        <ellipse
          cx="355"
          cy="235"
          rx="295"
          ry="230"
          fill={`url(#${id}-halo)`}
        />
        <path
          d="M110 375 Q550 55 982 330"
          stroke="currentColor"
          strokeOpacity=".2"
          strokeDasharray="2 9"
          fill="none"
        />
        <circle cx="355" cy="215" r="166" fill={`url(#${id}-sun)`} />
        <circle
          cx="355"
          cy="215"
          r="176"
          stroke={original.color}
          strokeOpacity=".28"
          fill="none"
        />
        <circle
          cx="355"
          cy="215"
          r="185"
          stroke={original.color}
          strokeOpacity=".12"
          fill="none"
        />
        <path
          d="M550 235 H660 m-9 -6 9 6 -9 6"
          stroke="currentColor"
          strokeOpacity=".5"
          fill="none"
        />
        <g className={styles.moon}>
          <circle cx="793" cy="270" r="88" fill={`url(#${id}-moon)`} />
          <g clipPath={`url(#${id}-disc)`} fill="#536581" opacity=".16">
            <circle cx="756" cy="237" r="18" />
            <circle cx="813" cy="292" r="29" />
            <circle cx="779" cy="309" r="9" />
            <circle cx="833" cy="231" r="12" />
            <circle cx="745" cy="282" r="7" />
            <circle cx="783" cy="205" r="8" />
          </g>
        </g>
        <path
          d="M355 396 v22 M793 373 v45"
          stroke="currentColor"
          strokeOpacity=".35"
        />
      </svg>
      <div className={styles.modelNames}>
        <div>
          <strong>{original.name}</strong>
          <span>{original.role}</span>
        </div>
        <div>
          <strong>{compressed.name}</strong>
          <span>{compressed.role}</span>
        </div>
      </div>
      <figcaption>{presentation.diagramCaption}</figcaption>
    </figure>
  );
}

export function BlockDiagram({ presentation }) {
  const { diagramColors } = presentation;
  return (
    <figure
      className={styles.diagram}
      style={{
        "--source-color": diagramColors.original,
        "--replacement-color": diagramColors.replacement,
      }}
    >
      <div className={styles.diagramHeading}>
        <span>A model, seen from within</span>
        <span aria-hidden="true">x → f(x)</span>
      </div>
      <div
        className={styles.modelFlow}
        aria-label="Model sequence: unchanged block, selected MLP, unchanged block"
      >
        <div className={styles.block}>
          Unchanged<span>block</span>
        </div>
        <span aria-hidden="true">→</span>
        <div className={`${styles.block} ${styles.selected}`}>
          Selected<span>MLP</span>
        </div>
        <span aria-hidden="true">→</span>
        <div className={styles.block}>
          Unchanged<span>block</span>
        </div>
      </div>
      <div className={styles.branch} aria-hidden="true" />
      <div className={styles.replacementPair}>
        <div>
          <div className={styles.dense} aria-hidden="true">
            {Array.from({ length: 35 }, (_, i) => (
              <i key={i} />
            ))}
          </div>
          <strong>Original function</strong>
          <span>Capture input/output pairs</span>
        </div>
        <span className={styles.transfer} aria-hidden="true">
          →
        </span>
        <div>
          <div className={styles.compact} aria-hidden="true">
            {Array.from({ length: 9 }, (_, i) => (
              <i key={i} />
            ))}
          </div>
          <strong>Smaller approximation</strong>
          <span>Fit, replace, evaluate</span>
        </div>
      </div>
      <figcaption>{presentation.diagramCaption}</figcaption>
    </figure>
  );
}

export function PaperStudy({ colors, variant = "replacement" }) {
  const id = useId().replaceAll(":", "");
  return (
    <svg viewBox="0 0 720 600" className={styles.paper} aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-paper`} x2="1" y2="1">
          <stop stopColor={colors.original} />
          <stop offset="1" stopColor="#fff8ed" />
        </linearGradient>
        <linearGradient id={`${id}-small`} x2="1" y2="1">
          <stop stopColor={colors.replacement} />
          <stop offset="1" stopColor="#ecf1f6" />
        </linearGradient>
      </defs>
      {variant === "replacement" ? (
        <>
          <g transform="translate(250 270) rotate(-28) skewX(12)">
            {[4, 3, 2, 1, 0].map((i) => (
              <rect
                key={i}
                x={-120 + i * 14}
                y={-148 + i * 24}
                width="240"
                height="290"
                rx="3"
                fill={`url(#${id}-paper)`}
                stroke="#724b30"
                strokeOpacity=".25"
              />
            ))}
            <path
              d="M-84 -105 h140 M-84 -87 h95 M-84 77 h70"
              stroke="#724b30"
              opacity=".45"
            />
          </g>
          <path
            d="M458 275 Q515 270 519 354"
            stroke="currentColor"
            strokeOpacity=".45"
            fill="none"
            strokeDasharray="3 7"
          />
          <g transform="translate(538 407) rotate(-28) skewX(12)">
            {[2, 1, 0].map((i) => (
              <rect
                key={i}
                x={-57 + i * 10}
                y={-65 + i * 17}
                width="114"
                height="135"
                rx="3"
                fill={`url(#${id}-small)`}
                stroke="#425774"
                strokeOpacity=".3"
              />
            ))}
          </g>
        </>
      ) : (
        <g transform="translate(350 280)">
          {Array.from({ length: variant === "fan" ? 8 : 5 }, (_, i) => (
            <rect
              key={i}
              x="-140"
              y="-175"
              width="280"
              height="350"
              rx="3"
              transform={`rotate(${variant === "fan" ? i * 13 - 42 : i * 5 - 10}) translate(${i * 4} ${i * 7})`}
              fill={`url(#${id}-${variant === "fan" ? "paper" : "small"})`}
              stroke="#425774"
              strokeOpacity=".25"
            />
          ))}
        </g>
      )}
    </svg>
  );
}
