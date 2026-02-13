import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} Buttons Technology, LLC
        </p>
        <div className={styles.links}>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
          <a href="mailto:hello@buttonstechnology.com">Contact</a>
        </div>
      </div>
    </footer>
  );
}
