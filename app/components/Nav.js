import Link from "next/link";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          Buttons Technology
        </Link>
        <div className={styles.links}>
          <Link href="/#products">Work</Link>
          <Link href="/spark">Spark</Link>
          <Link href="/clawsy">Clawsy</Link>
          <Link href="/about">About</Link>
          <Link href="/support">Support</Link>
          <a href="mailto:hello@buttonstechnology.com">Contact</a>
        </div>
      </div>
    </nav>
  );
}
