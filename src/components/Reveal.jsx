"use client";
import { useEffect, useRef } from "react";
import styles from "./shared.module.css";

export default function Reveal({ children, className = "" }) {
  const ref = useRef(null);
  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    )
      return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.revealed);
            observer.unobserve(entry.target);
          }
      },
      { threshold: 0.08 },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  // Visible by default; JS only adds a finite entrance animation.
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
