import Link from "next/link";
import { IndexShell } from "./Home";
import { ChapterLinks, MethodSteps, SourceLinks } from "../FamilyParts";
import styles from "./index.module.css";

export default function ProjectPage({ project, basePath = "" }) {
  return (
    <IndexShell basePath={basePath}>
      <main id="main" tabIndex={-1}>
        <header className={styles.dossier}>
          <Link href={`${basePath || "/"}#work`}>Back to project index</Link>
          <p>{project.title}</p>
          <h1>{project.fullTitle}</h1>
          <dl>
            <div>
              <dt>Category</dt>
              <dd>{project.category}</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>{project.status}</dd>
            </div>
          </dl>
          <p>{project.summary}</p>
        </header>
        <ChapterLinks project={project} className={styles.contents} />
        {project.sections.map((section) => (
          <section id={section.id} key={section.id} className={styles.entry}>
            <h2>{section.title}</h2>
            <div>
              <p>{section.text}</p>
              {section.id === "approach" && (
                <MethodSteps project={project} className={styles.steps} />
              )}
            </div>
          </section>
        ))}
        <SourceLinks project={project} />
      </main>
    </IndexShell>
  );
}
