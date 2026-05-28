import styles from "./page.module.css";

export const metadata = {
  title: "About | Buttons Technology",
  description: "An app studio building consumer software for distribution partners.",
};

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <p className={styles.eyebrow}>About</p>
        <h1>A small studio for partner-ready consumer apps.</h1>
        <div className={styles.body}>
          <p>
            Buttons Technology designs and builds consumer apps with clear
            habit loops, native craft, monetization paths, and launch support.
          </p>
          <p>
            We are most useful when a partner already has distribution: an
            audience, community, creator channel, content library, expert brand,
            or customer base that needs a product worth returning to.
          </p>
          <p>
            Our current product surface spans Flourish, Spark, Ascent, and
            Clawsy mocks. The common thread is software that creates a daily
            reason to come back.
          </p>
          <p className={styles.founded}>Founded 2026.</p>
        </div>
      </main>
    </div>
  );
}
