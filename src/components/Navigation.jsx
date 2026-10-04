import Link from "next/link";
import { portfolio } from "../data/portfolio";
import styles from "./shared.module.css";

export default function Navigation({
  basePath,
  className = "",
  minimal = false,
}) {
  const home = basePath || "/";
  return (
    <>
      <a className={styles.skip} href="#main">
        Skip to content
      </a>
      <header className={`${styles.header} ${className}`}>
        <Link className={styles.brand} href={home} aria-label="Portfolio home">
          {!minimal && (
            <span className={styles.mark} aria-hidden="true">
              ✳
            </span>
          )}
          {portfolio.identity}
          {!minimal && <span className={styles.brandDot}>.</span>}
        </Link>
        <nav className={styles.nav} aria-label="Main navigation">
          <Link href={`${home}#work`}>Work</Link>
          <Link href={`${home}#about`}>About</Link>
          <Link href={`${home}#contact`}>
            Contact {!minimal && <span aria-hidden="true">↗</span>}
          </Link>
        </nav>
      </header>
    </>
  );
}
