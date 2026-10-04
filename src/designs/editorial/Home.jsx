import Link from "next/link";
import { portfolio, projects } from "../../data/portfolio";
import Navigation from "../../components/Navigation";
import Artwork from "../../components/Artwork";
import Reveal from "../../components/Reveal";
import styles from "./editorial.module.css";

export function EditorialShell({ children, basePath }) {
  return (
    <div className={styles.site}>
      <Navigation basePath={basePath} />
      {children}
      <footer className={styles.footer}>
        <span>{portfolio.identity} — A work in progress.</span>
        <a href={portfolio.contact.links[0].href}>Find me on GitHub ↗</a>
      </footer>
    </div>
  );
}

export default function Home({ basePath = "" }) {
  const [thesis, ...futureProjects] = projects;
  return (
    <EditorialShell basePath={basePath}>
      <main id="main" tabIndex={-1} className={styles.main}>
        <section className={styles.hero} aria-labelledby="intro-title">
          <p className={styles.eyebrow}>
            <span className={styles.dot} />
            {portfolio.introduction.eyebrow}
          </p>
          <h1 id="intro-title">
            {portfolio.introduction.title[0]}
            <br />
            <em>{portfolio.introduction.title[1]}</em>
          </h1>
          <div className={styles.heroBottom}>
            <span className={styles.smallNote}>
              An ongoing exploration
              <br />
              of ideas & possibilities
            </span>
            <div>
              <p>{portfolio.introduction.description}</p>
              <a className={styles.textLink} href="#work">
                Explore the work <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
          <span className={styles.heroStar} aria-hidden="true">
            ✳
          </span>
        </section>
        <section id="work" className={styles.work} aria-labelledby="work-title">
          <div className={styles.sectionHeading}>
            <h2 id="work-title">Selected work</h2>
            <span>01 — 03</span>
          </div>
          <Reveal>
            <Link
              href={`${basePath}/projects/${thesis.slug}`}
              className={styles.feature}
            >
              <div
                className={styles.featureArt}
                style={{
                  "--project-accent": thesis.accent,
                }}
              >
                <span className={styles.artLabel}>An exploration in depth</span>
                <Artwork
                  visual={thesis.visual}
                  accent="var(--project-accent)"
                />
                <span className={styles.artFoot}>
                  FORM / QUESTION / DISCOVERY
                </span>
              </div>
              <div className={styles.featureText}>
                <p className={styles.eyebrow}>{thesis.category}</p>
                <h3>{thesis.title}</h3>
                <p>{thesis.summary}</p>
                <span className={styles.status}>{thesis.status}</span>
                <span className={styles.featureArrow} aria-hidden="true">
                  ↗
                </span>
                <span className={styles.textLink}>
                  Explore the project <span aria-hidden="true">↗</span>
                </span>
              </div>
            </Link>
          </Reveal>
          <div className={styles.projectRows}>
            {futureProjects.map((project, i) => (
              <Reveal key={project.slug}>
                <article className={styles.projectRow}>
                  <div
                    className={styles.smallArt}
                    style={{
                      "--project-accent": project.accent,
                    }}
                  >
                    <Artwork
                      visual={project.visual}
                      accent="var(--project-accent)"
                    />
                  </div>
                  <div>
                    <p className={styles.eyebrow}>{project.category}</p>
                    <h3>{project.title}</h3>
                    <p className={styles.projectSummary}>{project.summary}</p>
                  </div>
                  <span className={styles.futureStatus}>
                    {project.status}
                    <span aria-hidden="true">0{i + 2}</span>
                  </span>
                </article>
              </Reveal>
            ))}
          </div>
        </section>
        <Reveal>
          <section
            id="about"
            className={styles.about}
            aria-labelledby="about-title"
          >
            <p className={styles.eyebrow}>Beyond the projects</p>
            <div>
              <h2 id="about-title">{portfolio.biography.title}</h2>
              <p>{portfolio.biography.text}</p>
              <span className={styles.status}>{portfolio.biography.label}</span>
            </div>
          </section>
        </Reveal>
        <section
          id="contact"
          className={styles.contact}
          aria-labelledby="contact-title"
        >
          <p className={styles.eyebrow}>Say hello</p>
          <h2 id="contact-title">{portfolio.contact.title}</h2>
          <div>
            <p>{portfolio.contact.description}</p>
            {portfolio.contact.links.map((link) => (
              <a
                key={link.href}
                className={styles.contactLink}
                href={link.href}
              >
                {link.label} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </section>
      </main>
    </EditorialShell>
  );
}
