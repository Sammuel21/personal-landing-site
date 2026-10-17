import Link from "next/link";
import { portfolio, projects } from "../../data/portfolio";
import { FamilyFrame, Biography, Contact } from "../FamilyParts";
import styles from "./wayfinder.module.css";

export function WayfinderShell({ basePath, children }) {
  return (
    <FamilyFrame name="wayfinder" basePath={basePath} className={styles.site}>
      {children}
    </FamilyFrame>
  );
}

export default function Home({ basePath = "" }) {
  const [thesis, ...future] = projects;
  return (
    <WayfinderShell basePath={basePath}>
      <main id="main" tabIndex={-1} className={styles.map}>
        <header className={styles.origin}>
          <div className={styles.originMark} aria-hidden="true" />
          <div>
            <p>{portfolio.introduction.eyebrow}</p>
            <h1>{portfolio.introduction.title.join(" ")}</h1>
            <p>{portfolio.introduction.description}</p>
          </div>
          <nav
            className={styles.destinations}
            aria-label="Explore the portfolio"
          >
            <a href="#work">The research</a>
            <a href="#about">A little context</a>
            <a href="#contact">Get in touch</a>
          </nav>
        </header>
        <section
          id="work"
          className={styles.research}
          aria-labelledby="work-title"
        >
          <div className={styles.stop} aria-hidden="true" />
          <div>
            <span>{thesis.status}</span>
            <h2 id="work-title">{thesis.title}</h2>
            <h3>{thesis.fullTitle}</h3>
            <p>{thesis.summary}</p>
            <Link
              className={styles.open}
              href={`${basePath}/projects/${thesis.slug}`}
            >
              Follow the research <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <aside className={styles.branchNote}>
            <span>Where this leads</span>
            <p>
              From an individual MLP block to the behaviour of the whole model.
            </p>
          </aside>
        </section>
        <section className={styles.branches} aria-labelledby="future-title">
          <h2 id="future-title">Other directions</h2>
          <div>
            {future.map((project) => (
              <article key={project.slug}>
                <span className={styles.smallStop} aria-hidden="true" />
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <small>{project.status}</small>
              </article>
            ))}
          </div>
        </section>
        <section id="about" className={styles.about}>
          <div className={styles.stop} aria-hidden="true" />
          <Biography />
        </section>
        <section id="contact" className={styles.contact}>
          <div className={styles.stop} aria-hidden="true" />
          <Contact />
        </section>
      </main>
    </WayfinderShell>
  );
}
