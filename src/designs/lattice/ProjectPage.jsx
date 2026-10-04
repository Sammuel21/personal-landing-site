import Link from "next/link";
import { LatticeShell } from "./Home";
import { Resources } from "../DesignShell";
import { BlockDiagram } from "../../components/ResearchArt";
import styles from "./lattice.module.css";

export default function ProjectPage({ project, basePath = "" }) {
  return (
    <LatticeShell basePath={basePath}>
      <main id="main" tabIndex={-1}>
        <header className={styles.projectHero}>
          <Link className={styles.link} href={`${basePath || "/"}#work`}>
            Back to work
          </Link>
          <p className={styles.note}>
            {project.title} / {project.status}
          </p>
          <h1>{project.fullTitle}</h1>
          <p>{project.summary}</p>
        </header>
        <div className={styles.projectLayout}>
          <nav className={styles.sectionNav} aria-label="Thesis sections">
            {project.sections.map((s) => (
              <a key={s.id} href={`#${s.id}`}>
                {s.title}
              </a>
            ))}
            <a href="#resources">Resources</a>
          </nav>
          <div className={styles.narrative}>
            <BlockDiagram presentation={project.presentation} />
            {project.sections.map((section) => (
              <section
                className={styles.chapter}
                key={section.id}
                aria-labelledby={section.id}
              >
                <h2 id={section.id}>{section.title}</h2>
                <p>{section.text}</p>
                {section.id === "approach" && (
                  <div className={styles.steps}>
                    {project.presentation.steps.map((step, i) => (
                      <details key={step.title} open={i === 0}>
                        <summary>{step.title}</summary>
                        <p>{step.text}</p>
                      </details>
                    ))}
                  </div>
                )}
              </section>
            ))}
            <Resources project={project} />
            <Link className={styles.link} href={`${basePath || "/"}#work`}>
              Return to selected work
            </Link>
          </div>
        </div>
      </main>
    </LatticeShell>
  );
}
