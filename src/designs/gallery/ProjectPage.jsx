import Link from "next/link";
import { GalleryShell } from "./Home";
import { ChapterLinks, MethodSteps, SourceLinks } from "../FamilyParts";
import Study from "./Study";
import styles from "./gallery.module.css";

export default function ProjectPage({ project, basePath = "" }) {
  return (
    <GalleryShell basePath={basePath}>
      <main id="main" tabIndex={-1}>
        <header className={styles.projectHero}>
          <Link href={`${basePath || "/"}#work`}>Back to the collection</Link>
          <p>
            {project.title} / {project.status}
          </p>
          <h1>{project.fullTitle}</h1>
        </header>
        <figure className={styles.cover}>
          <div className={styles.stage}>
            <Study accent={project.accent} />
          </div>
          <figcaption>
            Abstract study. Not a representation of research results.
          </figcaption>
        </figure>
        <div className={styles.essay}>
          <p className={styles.abstract}>{project.summary}</p>
          <ChapterLinks project={project} className={styles.contents} />
          {project.sections.map((section) => (
            <section
              className={styles.chapter}
              id={section.id}
              key={section.id}
            >
              <div>
                <h2>{section.title}</h2>
                <p>{section.text}</p>
              </div>
              {section.id === "question" && (
                <div className={styles.sideStudy}>
                  <Study accent={project.accent} variant="wave" />
                </div>
              )}
              {section.id === "approach" && (
                <MethodSteps project={project} className={styles.steps} />
              )}
            </section>
          ))}
          <SourceLinks project={project} />
        </div>
      </main>
    </GalleryShell>
  );
}
