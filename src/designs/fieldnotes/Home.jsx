import Link from "next/link";
import { portfolio, projects } from "../../data/portfolio";
import { FamilyFrame, Biography, Contact } from "../FamilyParts";
import styles from "./fieldnotes.module.css";

export function FieldnotesShell({ basePath, children }) {
  return (
    <FamilyFrame name="fieldnotes" basePath={basePath} className={styles.site}>
      {children}
    </FamilyFrame>
  );
}

export default function Home({ basePath = "" }) {
  const [thesis, ...future] = projects;
  return (
    <FieldnotesShell basePath={basePath}>
      <main id="main" tabIndex={-1} className={styles.notebook}>
        <div className={styles.spread}>
          <section className={styles.intro} aria-labelledby="intro-title">
            <p className={styles.note}>An open notebook</p>
            <h1 id="intro-title">{portfolio.introduction.title.join(" ")}</h1>
            <p className={styles.lede}>{portfolio.introduction.description}</p>
            <a href="#work">Start with the research</a>
            <div className={styles.marginalia}>
              <span aria-hidden="true">↳</span>
              <p>
                Questions first.
                <br />
                Room for what follows.
              </p>
            </div>
          </section>
          <section
            id="work"
            className={styles.research}
            aria-labelledby="work-title"
          >
            <span className={styles.note}>{thesis.status}</span>
            <h2 id="work-title">{thesis.title}</h2>
            <p className={styles.question}>{thesis.summary}</p>
            <p>{thesis.fullTitle}</p>
            <Link
              className={styles.read}
              href={`${basePath}/projects/${thesis.slug}`}
            >
              Read the research notes
            </Link>
            <div className={styles.sourceNote}>
              An investigation into smaller MLP replacements. Results are not
              published here yet.
            </div>
          </section>
        </div>
        <section className={styles.futures} aria-labelledby="future-title">
          <h2 id="future-title">Pages still to fill</h2>
          {future.map((project) => (
            <article key={project.slug}>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <small>{project.status}</small>
            </article>
          ))}
        </section>
        <div className={styles.endnotes}>
          <section id="about">
            <Biography />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </div>
      </main>
    </FieldnotesShell>
  );
}
