import Link from "next/link";
import { EditorialShell } from "./Home";
import Artwork from "../../components/Artwork";
import Reveal from "../../components/Reveal";
import styles from "./editorial.module.css";

export default function ProjectPage({ project, basePath = "" }) {
  return (
    <EditorialShell basePath={basePath}>
      <main id="main" tabIndex={-1} className={styles.main}>
        <section className={styles.projectHero}>
          <Link className={styles.textLink} href={`${basePath || "/"}#work`}>
            ← Back to work
          </Link>
          <p className={styles.eyebrow}>{project.category}</p>
          <h1>
            {project.title}
            <span>.</span>
          </h1>
          <p>{project.fullTitle}</p>
          <div className={styles.projectIntro}>
            <p>{project.summary}</p>
            <span className={styles.status}>{project.status}</span>
          </div>
        </section>
        <div
          className={styles.detailArt}
          style={{
            "--project-accent": project.accent,
          }}
        >
          <span className={styles.artLabel}>
            The space between a question and an answer
          </span>
          <Artwork visual={project.visual} accent="var(--project-accent)" />
          <span className={styles.artFoot}>
            ABSTRACT STUDY / BLOCK REPLACEMENT
          </span>
        </div>
        <div className={styles.detailSections}>
          {project.sections.map((section, i) => (
            <Reveal key={section.id}>
              <section
                className={styles.detailSection}
                aria-labelledby={section.id}
              >
                <span className={styles.eyebrow}>0{i + 1}</span>
                <h2 id={section.id}>{section.title}</h2>
                <p>{section.text}</p>
              </section>
            </Reveal>
          ))}
          <section className={styles.detailSection} aria-labelledby="resources">
            <span className={styles.eyebrow}>05</span>
            <h2 id="resources">Resources</h2>
            <div>
              {project.resources?.length ? (
                project.resources.map((resource) => (
                  <p key={resource.href}>
                    <a href={resource.href}>{resource.label} ↗</a>
                  </p>
                ))
              ) : (
                <p>
                  Publications, code, and supporting material will appear here
                  when available.
                </p>
              )}
            </div>
          </section>
        </div>
        <div className={styles.endLink}>
          <Link className={styles.textLink} href={`${basePath || "/"}#work`}>
            ← Return to selected work
          </Link>
        </div>
      </main>
    </EditorialShell>
  );
}
