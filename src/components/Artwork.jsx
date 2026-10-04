// Decorative code-native artwork: projects choose a motif and an accent.
export default function Artwork({
  visual = "orbits",
  accent = "#bcc7a3",
  className,
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 600 440"
      fill="none"
      aria-hidden="true"
      style={{ "--art-accent": accent }}
    >
      {visual === "orbits" && (
        <g transform="translate(300 220) rotate(-28)">
          {Array.from({ length: 25 }, (_, i) => (
            <ellipse
              key={i}
              rx={60 + i * 6.5}
              ry={155 - i * 3.5}
              stroke="currentColor"
              strokeWidth="0.9"
              opacity={0.35 + i / 45}
              transform={`rotate(${i * 3})`}
            />
          ))}
          <circle cx="-118" cy="-101" r="8" fill="var(--art-accent)" />
        </g>
      )}
      {visual === "steps" && (
        <g transform="translate(300 225) rotate(-30)">
          {Array.from({ length: 12 }, (_, i) => (
            <rect
              key={i}
              x={-110 + i * 11}
              y={-140 + i * 9}
              width="165"
              height="165"
              rx="2"
              fill="var(--art-accent)"
              fillOpacity="0.035"
              stroke="currentColor"
              opacity={0.25 + i / 18}
            />
          ))}
        </g>
      )}
      {visual === "grid" && (
        <g transform="translate(300 220)">
          {Array.from({ length: 16 }, (_, i) => (
            <ellipse
              key={i}
              rx={15 + i * 10}
              ry="156"
              stroke="currentColor"
              opacity="0.55"
            />
          ))}
          {Array.from({ length: 9 }, (_, i) => (
            <ellipse
              key={i}
              rx="165"
              ry={10 + i * 17}
              stroke="currentColor"
              opacity="0.4"
            />
          ))}
        </g>
      )}
    </svg>
  );
}
