import styles from "./gallery.module.css";

// Abstract exhibition studies, not diagrams or representations of research data.
export default function Study({ accent, variant = "aperture" }) {
  return (
    <svg
      className={styles.study}
      viewBox="0 0 800 520"
      aria-hidden="true"
      focusable="false"
      style={{ "--study-color": accent }}
    >
      {variant === "aperture" ? (
        <g fill="none" stroke="currentColor" strokeWidth="2">
          {Array.from({ length: 18 }, (_, i) => (
            <ellipse
              key={i}
              cx={400 + i * 3}
              cy="260"
              rx={100 + i * 13}
              ry={200 - i * 6}
              transform={`rotate(${i * 4} 400 260)`}
            />
          ))}
        </g>
      ) : variant === "fold" ? (
        <g fill="none" stroke="currentColor" strokeWidth="2">
          {Array.from({ length: 16 }, (_, i) => (
            <path
              key={i}
              d={`M ${100 + i * 12} 400 L 400 ${70 + i * 9} L ${700 - i * 12} 400 Z`}
            />
          ))}
        </g>
      ) : (
        <g fill="none" stroke="currentColor" strokeWidth="2">
          {Array.from({ length: 15 }, (_, i) => (
            <path
              key={i}
              d={`M 100 ${100 + i * 22} C 300 ${-80 + i * 22}, 500 ${600 - i * 22}, 700 ${100 + i * 22}`}
            />
          ))}
        </g>
      )}
    </svg>
  );
}
