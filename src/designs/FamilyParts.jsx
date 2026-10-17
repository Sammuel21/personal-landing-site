import Link from "next/link";
import Navigation from "../components/Navigation";
import { portfolio } from "../data/portfolio";
import { manrope } from "./fonts";
import styles from "./family-parts.module.css";

// Shared semantics and content, deliberately without a page layout.
export function FamilyFrame({ name, basePath, className, children }) {
  return (
    <div
      data-design={name}
      className={`${manrope.className} ${styles.base} ${className}`}
    >
      <Navigation basePath={basePath} minimal className={styles.navigation} />
      {children}
      <footer className={styles.footer}>
        <span>{portfolio.identity} / A continuing exploration.</span>
        <Link href={`${basePath || "/"}#work`}>Return to work</Link>
      </footer>
    </div>
  );
}

export function Biography() {
  return (
    <>
      <h2>{portfolio.biography.title}</h2>
      <p>{portfolio.biography.text}</p>
      <small>{portfolio.biography.label}</small>
    </>
  );
}

export function Contact() {
  return (
    <>
      <h2>{portfolio.contact.title}</h2>
      <p>{portfolio.contact.description}</p>
      {portfolio.contact.links.map((link) => (
        <a key={link.href} href={link.href}>
          {link.label}
        </a>
      ))}
    </>
  );
}

export function ChapterLinks({ project, className }) {
  return (
    <nav className={className} aria-label="Research chapters">
      {project.sections.map((section) => (
        <a key={section.id} href={`#${section.id}`}>
          {section.title}
        </a>
      ))}
      <a href="#resources">Resources</a>
    </nav>
  );
}

export function MethodSteps({ project, className }) {
  return (
    <ol className={className}>
      {project.presentation.steps.map((step) => (
        <li key={step.title}>
          <h3>{step.title}</h3>
          <p>{step.text}</p>
        </li>
      ))}
    </ol>
  );
}

export function SourceLinks({ project }) {
  return (
    <section id="resources" className={styles.resources}>
      <h2>Follow the research</h2>
      {project.resources?.length ? (
        project.resources.map((resource) => (
          <a key={resource.href} href={resource.href}>
            {resource.label}
          </a>
        ))
      ) : (
        <p>Project resources are coming soon.</p>
      )}
    </section>
  );
}
