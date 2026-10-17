import Link from "next/link";
import { portfolio, projects } from "../../data/portfolio";
import { FamilyFrame, Biography, Contact } from "../FamilyParts";
import Study from "./Study";
import styles from "./gallery.module.css";

export function GalleryShell({ basePath, children }) {
  return (
    <FamilyFrame name="gallery" basePath={basePath} className={styles.site}>
      {children}
    </FamilyFrame>
  );
}

export default function Home({ basePath = "" }) {
  const [thesis, ...future] = projects;
  return (
    <GalleryShell basePath={basePath}>
      <main id="main" tabIndex={-1}>
        <header className={styles.intro}>
          <h1>{portfolio.introduction.title.join(" ")}</h1>
          <div>
            <p>{portfolio.introduction.description}</p>
            <a href="#work">Enter the collection</a>
          </div>
        </header>
        <section
          id="work"
          className={styles.exhibition}
          aria-labelledby="work-title"
        >
          <h2 id="work-title" className={styles.collectionLabel}>
            Selected work
          </h2>
          <figure className={styles.feature}>
            <Link
              className={styles.stage}
              href={`${basePath}/projects/${thesis.slug}`}
              aria-label="Read the diploma thesis"
            >
              <Study accent={thesis.accent} />
              <span className={styles.stageLabel}>
                A question, taking form.
              </span>
            </Link>
            <figcaption>
              <div>
                <span>{thesis.status}</span>
                <h3>
                  <Link href={`${basePath}/projects/${thesis.slug}`}>
                    {thesis.title}
                  </Link>
                </h3>
              </div>
              <div>
                <p>{thesis.summary}</p>
                <small>
                  Abstract study. Not a representation of research results.
                </small>
              </div>
            </figcaption>
          </figure>
          <div className={styles.secondary}>
            {future.map((project, i) => (
              <figure key={project.slug}>
                <div className={styles.smallStage}>
                  <Study
                    accent={project.accent}
                    variant={i === 0 ? "fold" : "wave"}
                  />
                </div>
                <figcaption>
                  <span>{project.status}</span>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
        <div className={styles.closing}>
          <section id="about">
            <Biography />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </div>
      </main>
    </GalleryShell>
  );
}
