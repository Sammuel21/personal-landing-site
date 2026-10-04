import { useId } from "react";
import styles from "./research-art.module.css";

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
