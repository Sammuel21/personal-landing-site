import Link from "next/link";
import { EclipseShell } from "./Home";
import { Resources } from "../DesignShell";
import { Celestial, BlockDiagram } from "../../components/ResearchArt";
import styles from "./eclipse.module.css";

export default function ProjectPage({ project, basePath = "" }) {
  return (
    <EclipseShell basePath={basePath}>
      <main id="main" tabIndex={-1}>
        <header className={styles.projectHero}>
          <Link className={styles.back} href={`${basePath || "/"}#work`}>
            Back to work
          </Link>
          <p className={styles.overline}>
            {project.title} / {project.status}
          </p>
          <h1>{project.fullTitle}</h1>
          <p className={styles.intro}>{project.summary}</p>
        </header>
        <Celestial presentation={project.presentation} />
        <div className={styles.narrative}>
          {project.sections.map((section) => (
            <section key={section.id} aria-labelledby={section.id}>
              <h2 id={section.id}>{section.title}</h2>
              <p>{section.text}</p>
              {section.id === "approach" && (
                <div className={styles.wideDiagram}>
                  <BlockDiagram presentation={project.presentation} />
                </div>
              )}
            </section>
          ))}
          <Resources project={project} />
          <Link className={styles.back} href={`${basePath || "/"}#work`}>
            Return to selected work
          </Link>
        </div>
      </main>
    </EclipseShell>
  );
}
