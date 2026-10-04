import Link from "next/link";
import { portfolio, projects } from "../../data/portfolio";
import Navigation from "../../components/Navigation";
import Artwork from "../../components/Artwork";
import Reveal from "../../components/Reveal";
import styles from "./ambient.module.css";

export function AmbientShell({ children, basePath }) {
  return (
    <div className={styles.site}>
      <Navigation basePath={basePath} />
      {children}
      <footer className={styles.footer}>
        <span>{portfolio.identity} / Always taking shape.</span>
        <a href={portfolio.contact.links[0].href}>GitHub ↗</a>
      </footer>
    </div>
  );
}

export default function Home({ basePath = "" }) {
  const [thesis, ...futureProjects] = projects;
  return (
    <AmbientShell basePath={basePath}>
      <main id="main" tabIndex={-1} className={styles.main}>
        <section className={styles.hero} aria-labelledby="intro-title">
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>
              <span className={styles.dot} />
              {portfolio.introduction.eyebrow}
            </p>
            <h1 id="intro-title">
              {portfolio.introduction.title[0]}
              <br />
              <span>{portfolio.introduction.title[1]}</span>
            </h1>
            <p className={styles.intro}>{portfolio.introduction.description}</p>
            <a href="#work" className={styles.button}>
              Explore the work <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div
            className={styles.heroVisual}
            style={{
              "--project-accent": portfolio.introduction.artwork.accent,
            }}
          >
            <Artwork
              visual={portfolio.introduction.artwork.visual}
              accent="var(--project-accent)"
            />
            <span className={styles.visualCaption}>
              IDEAS ARE ONLY THE BEGINNING.
            </span>
          </div>
        </section>
        <section id="work" aria-labelledby="work-title">
          <div className={styles.sectionHeading}>
            <h2 id="work-title">Selected work</h2>
            <span>A few things taking shape ↙</span>
          </div>
          <Reveal>
            <Link
              className={styles.feature}
              href={`${basePath}/projects/${thesis.slug}`}
              style={{
                "--project-accent": thesis.accent,
              }}
            >
              <div className={styles.featureCopy}>
                <p className={styles.eyebrow}>{thesis.category}</p>
                <h3>
                  {thesis.title}
                  <span aria-hidden="true">↗</span>
                </h3>
                <p>{thesis.summary}</p>
                <span className={styles.status}>{thesis.status}</span>
                <span className={styles.featureLink}>
                  Inside the project <span aria-hidden="true">↗</span>
                </span>
              </div>
              <div className={styles.featureVisual}>
                <Artwork
                  visual={thesis.visual}
                  accent="var(--project-accent)"
                />
                <span>01 / AN EXPLORATION IN DEPTH</span>
              </div>
            </Link>
          </Reveal>
          <div className={styles.projectGrid}>
            {futureProjects.map((project) => (
              <Reveal key={project.slug}>
                <article
                  className={styles.projectCard}
                  style={{
                    "--project-accent": project.accent,
                  }}
                >
                  <div className={styles.cardVisual}>
                    <Artwork
                      visual={project.visual}
                      accent="var(--project-accent)"
                    />
                  </div>
                  <div className={styles.cardCopy}>
                    <p className={styles.eyebrow}>{project.category}</p>
                    <h3>{project.title}</h3>
                    <p>{project.summary}</p>
                    <span className={styles.status}>{project.status}</span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>
        <Reveal>
          <section
            id="about"
            className={styles.about}
            aria-labelledby="about-title"
          >
            <div>
              <p className={styles.eyebrow}>Behind the work</p>
              <h2 id="about-title">{portfolio.biography.title}</h2>
            </div>
            <div>
              <p>{portfolio.biography.text}</p>
              <span className={styles.status}>{portfolio.biography.label}</span>
            </div>
          </section>
        </Reveal>
        <section
          id="contact"
          className={styles.contact}
          aria-labelledby="contact-title"
        >
          <p className={styles.eyebrow}>The next connection</p>
          <h2 id="contact-title">{portfolio.contact.title}</h2>
          <p>{portfolio.contact.description}</p>
          {portfolio.contact.links.map((link) => (
            <a className={styles.button} key={link.href} href={link.href}>
              {link.label}
              <span aria-hidden="true">↗</span>
            </a>
          ))}
          <span className={styles.contactStar} aria-hidden="true">
            ✳
          </span>
        </section>
      </main>
    </AmbientShell>
  );
}
