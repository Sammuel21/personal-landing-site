import Link from "next/link";
import { portfolio, projects } from "../../data/portfolio";
import DesignShell from "../DesignShell";
import { PaperStudy } from "../../components/ResearchArt";
import styles from "./studio.module.css";

export function StudioShell({ children, basePath }) {
  return (
    <DesignShell
      name="studio"
      className={styles.site}
      navigationClassName={styles.navigation}
      basePath={basePath}
    >
      {children}
    </DesignShell>
  );
}
export default function Home({ basePath = "" }) {
  const [thesis, ...future] = projects;
  return (
    <StudioShell basePath={basePath}>
      <main id="main" tabIndex={-1}>
        <section className={styles.hero} aria-labelledby="intro-title">
          <h1 id="intro-title">
            {portfolio.introduction.title[0]}
            <br />
            {portfolio.introduction.title[1]}
          </h1>
          <div className={styles.introRow}>
            <p>{portfolio.introduction.description}</p>
            <a href="#work">
              Explore the work <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>
        <section
          id="work"
          className={styles.feature}
          aria-labelledby="work-title"
        >
          <div className={styles.featureCopy}>
            <span className={styles.tag}>Featured research</span>
            <h2 id="work-title">
              Less, with
              <br />
              purpose.
            </h2>
            <p>{thesis.summary}</p>
            <Link
              className={styles.link}
              href={`${basePath}/projects/${thesis.slug}`}
            >
              Explore the diploma thesis <span aria-hidden="true">↗</span>
            </Link>
            <span className={styles.status}>{thesis.status}</span>
          </div>
          <Link
            href={`${basePath}/projects/${thesis.slug}`}
            className={`${styles.poster} ${styles.mainPoster}`}
            aria-label="Explore diploma thesis: compressing language models"
          >
            <span className={styles.posterTitle}>
              A study in
              <br />
              smaller forms.
            </span>
            <PaperStudy colors={thesis.presentation.paperColors} />
            <div className={styles.posterFoot}>
              <span>Original → replacement</span>
              <span>Diploma thesis</span>
            </div>
          </Link>
        </section>
        <section className={styles.other} aria-labelledby="other-title">
          <h2 id="other-title">Room for what’s next.</h2>
          <div className={styles.projects}>
            {future.map((project, i) => (
              <article
                key={project.slug}
                className={i === 0 ? styles.shortProject : styles.tallProject}
              >
                <div
                  className={styles.projectPoster}
                  style={{ "--project-color": project.accent }}
                >
                  <PaperStudy
                    variant={i === 0 ? "fan" : "fold"}
                    colors={{
                      original: project.accent,
                      replacement: project.accent,
                    }}
                  />
                  <span>
                    {i === 0 ? "An unfolding idea" : "A different perspective"}
                  </span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <span className={styles.status}>{project.status}</span>
              </article>
            ))}
          </div>
        </section>
        <section
          id="about"
          className={styles.about}
          aria-labelledby="about-title"
        >
          <h2 id="about-title">{portfolio.biography.title}</h2>
          <div>
            <p>{portfolio.biography.text}</p>
            <span className={styles.status}>{portfolio.biography.label}</span>
          </div>
        </section>
        <section
          id="contact"
          className={styles.contact}
          aria-labelledby="contact-title"
        >
          <h2 id="contact-title">{portfolio.contact.title}</h2>
          <div>
            <p>{portfolio.contact.description}</p>
            <a className={styles.link} href={portfolio.contact.links[0].href}>
              GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>
    </StudioShell>
  );
}
