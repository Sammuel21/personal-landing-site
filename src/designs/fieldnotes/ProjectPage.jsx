import Link from "next/link";
import { FieldnotesShell } from "./Home";
import { ChapterLinks, MethodSteps, SourceLinks } from "../FamilyParts";
import styles from "./fieldnotes.module.css";

export default function ProjectPage({ project, basePath = "" }) {
  return (
    <FieldnotesShell basePath={basePath}>
      <main id="main" tabIndex={-1} className={styles.notebook}>
        <header className={styles.projectHero}>
          <Link href={`${basePath || "/"}#work`}>Back to the notebook</Link>
          <p className={styles.note}>{project.title}</p>
          <h1>{project.fullTitle}</h1>
          <p className={styles.lede}>{project.summary}</p>
        </header>
        <div className={styles.readingLayout}>
          <ChapterLinks project={project} className={styles.contents} />
          <div>
            {project.sections.map((section) => (
              <section
                id={section.id}
                key={section.id}
                className={styles.entry}
              >
                <div>
                  <h2>{section.title}</h2>
                  <p>{section.text}</p>
                </div>
                <aside
                  className={styles.annotation}
                  aria-label={`${section.title} note`}
                >
                  {section.id === "overview" && (
                    <>
                      <span>Research status</span>
                      <p>{project.status}</p>
                    </>
                  )}
                  {section.id === "question" && (
                    <>
                      <span>The question in brief</span>
                      <p>Smaller replacements. Whole-model evaluation.</p>
                    </>
                  )}
                  {section.id === "approach" && (
                    <MethodSteps project={project} className={styles.steps} />
                  )}
                  {section.id === "outcomes" && (
                    <>
                      <span>A note on evidence</span>
                      <p>Objectives, not claims of an achieved result.</p>
                    </>
                  )}
                </aside>
              </section>
            ))}
            <SourceLinks project={project} />
          </div>
        </div>
      </main>
    </FieldnotesShell>
  );
}
