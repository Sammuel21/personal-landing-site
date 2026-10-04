import Link from "next/link";
import { StudioShell } from "./Home";
import { Resources } from "../DesignShell";
import { PaperStudy, BlockDiagram } from "../../components/ResearchArt";
import styles from "./studio.module.css";

export default function ProjectPage({ project, basePath = "" }) {
  return (
    <StudioShell basePath={basePath}>
      <main id="main" tabIndex={-1}>
        <header className={styles.projectHero}>
          <Link className={styles.back} href={`${basePath || "/"}#work`}>
            Back to work
          </Link>
          <p className={styles.tag}>
            {project.title} / {project.status}
          </p>
          <h1>{project.fullTitle}</h1>
        </header>
        <div className={styles.cover}>
          <div>
            <h2>
              How much
              <br />
              can we leave out?
            </h2>
            <p>{project.summary}</p>
          </div>
          <PaperStudy colors={project.presentation.paperColors} />
        </div>
        <div className={styles.chapters}>
          {project.sections.map((section) => (
            <section
              className={styles.chapter}
              key={section.id}
              aria-labelledby={section.id}
            >
              <h2 id={section.id}>{section.title}</h2>
              <p>{section.text}</p>
              {section.id === "approach" && (
                <div className={styles.diagram}>
                  <BlockDiagram presentation={project.presentation} />
                </div>
              )}
            </section>
          ))}
        </div>
        <Resources project={project} />
        <div className={styles.return}>
          <Link className={styles.back} href={`${basePath || "/"}#work`}>
            Return to selected work
          </Link>
        </div>
      </main>
    </StudioShell>
  );
}
