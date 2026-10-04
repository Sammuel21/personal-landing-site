import Link from "next/link";
import { portfolio, projects } from "../../data/portfolio";
import DesignShell from "../DesignShell";
import { BlockDiagram } from "../../components/ResearchArt";
import styles from "./lattice.module.css";

export function LatticeShell({ children, basePath }) {
  return (
    <DesignShell
      name="lattice"
      className={styles.site}
      navigationClassName={styles.navigation}
      basePath={basePath}
    >
      {children}
    </DesignShell>
  );
}
export default function Home({ basePath = "" }) {
  const [thesis, ...future] = projects;
  return (
    <LatticeShell basePath={basePath}>
      <main id="main" tabIndex={-1}>
        <section className={styles.hero} aria-labelledby="intro-title">
          <div className={styles.heroCopy}>
            <span className={styles.note}>Work, under the surface.</span>
            <h1 id="intro-title">{portfolio.introduction.title.join(" ")}</h1>
            <p>{portfolio.introduction.description}</p>
            <a className={styles.link} href="#work">
              Explore the work
            </a>
          </div>
          <div className={styles.heroDiagram}>
            <BlockDiagram presentation={thesis.presentation} />
            <p>One part changes. The whole model is the test.</p>
          </div>
        </section>
        <section
          id="work"
          className={styles.feature}
          aria-labelledby="work-title"
        >
          <div>
            <span className={styles.note}>Featured research</span>
            <h2 id="work-title">
              Smaller blocks.
              <br />
              Bigger questions.
            </h2>
            <span className={styles.status}>{thesis.status}</span>
          </div>
          <div className={styles.featureBody}>
            <h3>{thesis.fullTitle}</h3>
            <p>{thesis.summary}</p>
            <Link
              className={styles.button}
              href={`${basePath}/projects/${thesis.slug}`}
            >
              Inside the diploma thesis <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>
        <section className={styles.other} aria-labelledby="other-title">
          <h2 id="other-title">The next experiments</h2>
          {future.map((project, i) => (
            <article className={styles.row} key={project.slug}>
              <div
                className={styles.specimen}
                style={{ "--specimen": project.accent }}
                aria-hidden="true"
              >
                {Array.from({ length: i === 0 ? 5 : 9 }, (_, j) => (
                  <span key={j} style={{ "--offset": j }} />
                ))}
              </div>
              <div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
              </div>
              <span className={styles.status}>{project.status}</span>
            </article>
          ))}
        </section>
        <section
          id="about"
          className={styles.about}
          aria-labelledby="about-title"
        >
          <div>
            <span className={styles.note}>Behind the questions</span>
            <h2 id="about-title">{portfolio.biography.title}</h2>
          </div>
          <div>
            <p>{portfolio.biography.text}</p>
            <span className={styles.status}>{portfolio.biography.label}</span>
          </div>
        </section>
        <section
          id="contact"
          className={styles.contact}
          aria-labelledby="contact-title"
        >
          <div>
            <h2 id="contact-title">{portfolio.contact.title}</h2>
            <p>{portfolio.contact.description}</p>
          </div>
          <a className={styles.button} href={portfolio.contact.links[0].href}>
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </section>
      </main>
    </LatticeShell>
  );
}
