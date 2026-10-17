import Link from "next/link";
import { portfolio, projects } from "../../data/portfolio";
import { FamilyFrame, Biography, Contact } from "../FamilyParts";
import styles from "./broadside.module.css";

export function BroadsideShell({ basePath, children }) {
  return (
    <FamilyFrame name="broadside" basePath={basePath} className={styles.site}>
      {children}
    </FamilyFrame>
  );
}

export default function Home({ basePath = "" }) {
  const [thesis, ...future] = projects;
  return (
    <BroadsideShell basePath={basePath}>
      <main id="main" tabIndex={-1}>
        <section className={styles.hero} aria-labelledby="intro-title">
          <p>{portfolio.introduction.eyebrow}</p>
          <h1 id="intro-title">
            {portfolio.introduction.title.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>
          <div className={styles.heroFoot}>
            <p>{portfolio.introduction.description}</p>
            <a href="#work">See the work</a>
          </div>
        </section>
        <section
          id="work"
          className={styles.feature}
          aria-labelledby="work-title"
        >
          <div className={styles.featureTop}>
            <h2 id="work-title">Selected work</h2>
            <span>{thesis.status}</span>
          </div>
          <Link
            className={styles.projectTitle}
            href={`${basePath}/projects/${thesis.slug}`}
          >
            {thesis.title}
            <span aria-hidden="true">↗</span>
          </Link>
          <div className={styles.featureBottom}>
            <h3>{thesis.fullTitle}</h3>
            <p>{thesis.summary}</p>
          </div>
        </section>
        <div className={styles.future}>
          {future.map((project) => (
            <article key={project.slug}>
              <span>{project.status}</span>
              <h2>{project.title}</h2>
              <p>{project.summary}</p>
            </article>
          ))}
        </div>
        <section id="about" className={styles.about}>
          <Biography />
        </section>
        <section id="contact" className={styles.contact}>
          <Contact />
        </section>
      </main>
    </BroadsideShell>
  );
}
