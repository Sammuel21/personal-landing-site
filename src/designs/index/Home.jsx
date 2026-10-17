import Link from "next/link";
import { portfolio, projects } from "../../data/portfolio";
import { FamilyFrame, Biography, Contact } from "../FamilyParts";
import styles from "./index.module.css";

export function IndexShell({ basePath, children }) {
  return (
    <FamilyFrame name="index" basePath={basePath} className={styles.site}>
      {children}
    </FamilyFrame>
  );
}

export default function Home({ basePath = "" }) {
  return (
    <IndexShell basePath={basePath}>
      <main id="main" tabIndex={-1}>
        <header className={styles.intro}>
          <p>{portfolio.introduction.eyebrow}</p>
          <h1>{portfolio.introduction.title.join(" ")}</h1>
          <p>{portfolio.introduction.description}</p>
        </header>
        <section
          id="work"
          className={styles.catalogue}
          aria-labelledby="work-title"
        >
          <div className={styles.directoryHeading}>
            <h2 id="work-title">Project index</h2>
            <span>Research &amp; future work</span>
          </div>
          {projects.map((project) => (
            <article className={styles.record} key={project.slug}>
              <div>
                <span className={styles.label}>Project</span>
                <h3>
                  {project.sections ? (
                    <Link href={`${basePath}/projects/${project.slug}`}>
                      {project.title}
                    </Link>
                  ) : (
                    project.title
                  )}
                </h3>
                <p className={styles.category}>{project.category}</p>
              </div>
              <div>
                <span className={styles.label}>Description</span>
                <p>{project.summary}</p>
              </div>
              <div>
                <span className={styles.label}>Status</span>
                <span className={styles.status}>{project.status}</span>
              </div>
            </article>
          ))}
        </section>
        <div className={styles.lower}>
          <section id="about">
            <Biography />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </div>
      </main>
    </IndexShell>
  );
}
