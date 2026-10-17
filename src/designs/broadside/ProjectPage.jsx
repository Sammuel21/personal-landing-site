import Link from "next/link";
import { BroadsideShell } from "./Home";
import { ChapterLinks, MethodSteps, SourceLinks } from "../FamilyParts";
import styles from "./broadside.module.css";

export default function ProjectPage({ project, basePath = "" }) {
  return (
    <BroadsideShell basePath={basePath}>
      <main id="main" tabIndex={-1}>
        <header className={styles.projectHero}>
          <Link href={`${basePath || "/"}#work`}>Back to work</Link>
          <p>
            {project.title} / {project.status}
          </p>
          <h1>{project.fullTitle}</h1>
          <p>{project.summary}</p>
        </header>
        <ChapterLinks project={project} className={styles.chapters} />
        {project.sections.map((section) => (
          <section id={section.id} key={section.id} className={styles.chapter}>
            <h2>{section.title}</h2>
            <div>
              <p>{section.text}</p>
              {section.id === "approach" && (
                <MethodSteps project={project} className={styles.steps} />
              )}
            </div>
          </section>
        ))}
        <div className={styles.sources}>
          <SourceLinks project={project} />
        </div>
      </main>
    </BroadsideShell>
  );
}
