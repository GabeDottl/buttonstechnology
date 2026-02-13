import styles from "./page.module.css";

export const metadata = {
  title: "Clawsy | Buttons Technology",
  description: "Your AI assistant that builds apps for you.",
};

export default function ClawsyPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.hero}>
          <p className={styles.eyebrow}>Clawsy</p>
          <h1>Your AI assistant that builds apps for you.</h1>
          <p className={styles.subtitle}>
            Clawsy is a personal AI that doesn&apos;t just answer questions — it
            creates real tools tailored to how you live and work.
          </p>
        </div>

        <div className={styles.features}>
          <div className={styles.feature}>
            <h2>Ask for anything.</h2>
            <p>
              Describe what you need. A journal, a habit tracker, a grocery
              list. Clawsy builds it as a real app on your device — not a
              template, not a chatbot response, a working tool.
            </p>
          </div>

          <div className={styles.feature}>
            <h2>Chat or use the app.</h2>
            <p>
              Two ways to interact. Talk to Clawsy in conversation, or use the
              apps it creates. Same data, your choice. Switch between them
              whenever it makes sense.
            </p>
          </div>

          <div className={styles.feature}>
            <h2>Works offline.</h2>
            <p>
              Your apps run locally on your device. No internet connection
              needed to use the tools Clawsy builds for you. Your data stays
              with you.
            </p>
          </div>
        </div>

        <div className={styles.closing}>
          <p>Available soon on iOS.</p>
        </div>
      </main>
    </div>
  );
}
