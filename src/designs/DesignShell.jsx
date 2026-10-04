import Navigation from "../components/Navigation";
import { portfolio } from "../data/portfolio";
import { manrope } from "./fonts";
import styles from "./common.module.css";

export default function DesignShell({
  children,
  name,
  className,
  navigationClassName,
  basePath,
}) {
  return (
    <div
      data-design={name}
      className={`${manrope.className} ${styles.shell} ${className}`}
    >
      <Navigation
        basePath={basePath}
        className={`${styles.navigation} ${navigationClassName || ""}`}
        minimal
      />
      {children}
      <footer className={styles.footer}>
        <span>{portfolio.identity} / A continuing exploration.</span>
        <a href={portfolio.contact.links[0].href}>Find me on GitHub</a>
      </footer>
    </div>
  );
}

export function Resources({ project }) {
  return (
    <section
      id="resources"
      className={styles.resources}
      aria-labelledby="resources-title"
    >
      <h2 id="resources-title">Follow the research</h2>
      {project.resources?.map((resource) => (
        <a key={resource.href} href={resource.href}>
          {resource.label}
        </a>
      ))}
    </section>
  );
}
