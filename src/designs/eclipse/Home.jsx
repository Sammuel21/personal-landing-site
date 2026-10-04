import Link from "next/link";
import { portfolio, projects } from "../../data/portfolio";
import DesignShell from "../DesignShell";
import { PaperStudy } from "../../components/ResearchArt";
import OrbitalScene from "./OrbitalScene";
import { getConfiguredEclipseArtwork } from "./artwork";
import styles from "./eclipse.module.css";

export function EclipseShell({ children, basePath }) {
  return (
    <DesignShell
      name="eclipse"
      className={styles.site}
      navigationClassName={styles.navigation}
      basePath={basePath}
    >
      {children}
    </DesignShell>
  );
}

export default function Home({
  basePath = "",
  artwork = getConfiguredEclipseArtwork(),
}) {
  const [thesis, ...future] = projects;
  return (
    <EclipseShell basePath={basePath}>
      <main id="main" tabIndex={-1}>
        <section className={styles.hero} aria-labelledby="intro-title">
          <h1 id="intro-title">{portfolio.introduction.title.join(" ")}</h1>
          <p className={styles.intro}>{portfolio.introduction.description}</p>
          <OrbitalScene presentation={thesis.presentation} artwork={artwork} />
        </section>
        <section
          id="work"
          className={styles.feature}
          aria-labelledby="work-title"
        >
          <h2 id="work-title">
            A smaller form.
            <br />A question of possibility.
          </h2>
          <p>{thesis.summary}</p>
          <Link
            className={styles.link}
            href={`${basePath}/projects/${thesis.slug}`}
          >
            Discover the diploma thesis <span aria-hidden="true">↗</span>
          </Link>
          <span className={styles.status}>{thesis.status}</span>
        </section>
        <section className={styles.otherWork} aria-labelledby="other-title">
          <div className={styles.sectionTop}>
            <h2 id="other-title">More to come</h2>
            <span>Space for the next question.</span>
          </div>
          <div className={styles.catalogue}>
            {future.map((project, i) => (
              <article key={project.slug}>
                <div
                  className={styles.study}
                  style={{ "--study-color": project.accent }}
                >
                  <PaperStudy
                    variant={i === 0 ? "fan" : "fold"}
                    colors={{
                      original: project.accent,
                      replacement: project.accent,
                    }}
                  />
                </div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <span className={styles.status}>{project.status}</span>
              </article>
            ))}
          </div>
        </section>
        <section
          id="about"
          className={styles.about}
          aria-labelledby="about-title"
        >
          <h2 id="about-title">{portfolio.biography.title}</h2>
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
          <h2 id="contact-title">{portfolio.contact.title}</h2>
          <p>{portfolio.contact.description}</p>
          <a className={styles.link} href={portfolio.contact.links[0].href}>
            Find me on GitHub <span aria-hidden="true">↗</span>
          </a>
        </section>
      </main>
    </EclipseShell>
  );
}
