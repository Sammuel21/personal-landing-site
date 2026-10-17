import Link from "next/link";
import { WayfinderShell } from "./Home";
import { ChapterLinks, MethodSteps, SourceLinks } from "../FamilyParts";
import styles from "./wayfinder.module.css";

export default function ProjectPage({ project, basePath = "" }) {
  return (
    <WayfinderShell basePath={basePath}>
      <main id="main" tabIndex={-1} className={styles.project}>
        <header className={styles.projectHero}>
          <Link href={`${basePath || "/"}#work`}>
            Back to the portfolio map
          </Link>
          <p>
            {project.title} / {project.status}
          </p>
          <h1>{project.fullTitle}</h1>
          <p>{project.summary}</p>
        </header>
        <div className={styles.journey}>
          <ChapterLinks project={project} className={styles.contents} />
          <div className={styles.route}>
            {project.sections.map((section) => (
              <section
                id={section.id}
                key={section.id}
                className={styles.chapter}
              >
                <span className={styles.stop} aria-hidden="true" />
                <h2>{section.title}</h2>
                <p>{section.text}</p>
                {section.id === "approach" && (
                  <MethodSteps project={project} className={styles.steps} />
                )}
              </section>
            ))}
            <SourceLinks project={project} />
          </div>
        </div>
      </main>
    </WayfinderShell>
  );
}
