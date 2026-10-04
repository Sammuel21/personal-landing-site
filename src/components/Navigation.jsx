import Link from "next/link";
import { portfolio } from "../data/portfolio";
import styles from "./shared.module.css";

export default function Navigation({ basePath }) {
  const home = basePath || "/";
  return (
    <>
      <a className={styles.skip} href="#main">
        Skip to content
      </a>
      <header className={styles.header}>
        <Link className={styles.brand} href={home} aria-label="Portfolio home">
          <span className={styles.mark} aria-hidden="true">
            ✳
          </span>
          {portfolio.identity}
          <span className={styles.brandDot}>.</span>
        </Link>
        <nav className={styles.nav} aria-label="Main navigation">
          <Link href={`${home}#work`}>Work</Link>
          <Link href={`${home}#about`}>About</Link>
          <Link href={`${home}#contact`}>
            Contact <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </header>
    </>
  );
}
