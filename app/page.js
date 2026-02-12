import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <p className={styles.eyebrow}>Buttons Technology, LLC</p>
        <h1>Simple software, delivered well.</h1>
        <p className={styles.copy}>
          Buttons Technology builds practical tools for teams that need reliable
          systems and clean execution.
        </p>
        <a className={styles.privacyLink} href="/privacy">
          Privacy Policy
        </a>
      </main>
    </div>
  );
}
