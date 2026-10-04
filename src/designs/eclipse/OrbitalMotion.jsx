"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./orbit.module.css";

export default function OrbitalMotion({ children, artwork }) {
  const root = useRef(null);
  const [paused, setPaused] = useState(false);
  const [environment, setEnvironment] = useState({
    ready: false,
    reduced: true,
    visible: false,
  });

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let inView = !("IntersectionObserver" in window);
    const update = () =>
      setEnvironment({
        ready: true,
        reduced: preference.matches,
        visible: inView && document.visibilityState !== "hidden",
      });
    const observer =
      "IntersectionObserver" in window
        ? new IntersectionObserver(
            ([entry]) => {
              inView = entry.isIntersecting;
              update();
            },
            { threshold: 0 },
          )
        : null;
    observer?.observe(root.current);
    preference.addEventListener("change", update);
    document.addEventListener("visibilitychange", update);
    update();
    return () => {
      observer?.disconnect();
      preference.removeEventListener("change", update);
      document.removeEventListener("visibilitychange", update);
    };
  }, []);

  const running =
    environment.ready && !environment.reduced && environment.visible && !paused;
  return (
    <figure
      ref={root}
      className={styles.figure}
      data-artwork={artwork}
      data-motion={running ? "running" : "paused"}
      data-reduced-motion={environment.reduced}
    >
      {children}
      <div className={styles.controls}>
        {environment.ready && !environment.reduced ? (
          <button type="button" onClick={() => setPaused(!paused)}>
            <span aria-hidden="true">{paused ? "▷" : "Ⅱ"}</span>
            {paused ? "Resume motion" : "Pause motion"}
          </button>
        ) : (
          <span>
            {environment.ready ? "Still view · reduced motion" : "Still view"}
          </span>
        )}
      </div>
    </figure>
  );
}
