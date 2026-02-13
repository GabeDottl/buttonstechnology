import styles from "./page.module.css";

export const metadata = {
  title: "About | Buttons Technology",
  description: "Building personal AI tools with intention.",
};

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <p className={styles.eyebrow}>About</p>
        <h1>Built with intention.</h1>
        <div className={styles.body}>
          <p>
            Buttons Technology is a software company focused on building
            personal AI tools that respect your time, your data, and your
            intelligence.
          </p>
          <p>
            We believe software should adapt to people — not the other way
            around. Most tools force you into someone else&apos;s workflow. We
            think your tools should learn yours.
          </p>
          <p>
            Our first product is Clawsy, an AI assistant for iOS that creates
            real applications tailored to how you live and work. No templates,
            no one-size-fits-all. Just tools that fit.
          </p>
          <p className={styles.founded}>Founded 2026.</p>
        </div>
      </main>
    </div>
  );
}
