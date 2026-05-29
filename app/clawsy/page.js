import Image from "next/image";
import styles from "./page.module.css";

export const metadata = {
  title: "Clawsy Concept | Buttons Technology",
  description:
    "Clawsy is a mocked local-first AI workspace concept from Buttons Technology.",
};

const features = [
  {
    title: "Plan the day from real context.",
    copy: "Tasks, notes, goals, and loose ideas become a daily plan the user can actually inspect and adjust.",
  },
  {
    title: "Keep the workspace local-first.",
    copy: "The product direction favors private, device-centered data over a social feed or another cloud dashboard.",
  },
  {
    title: "Move from chat to action.",
    copy: "Clawsy is designed around executable plans and small tools, not endless assistant conversation.",
  },
];

export default function ClawsyPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div>
          <p className={styles.eyebrow}>Clawsy concept</p>
          <h1>A local-first AI workspace for turning life into plans.</h1>
          <p>
            Clawsy is shown here as product mocks only. The concept explores a
            personal AI workspace that turns notes, tasks, goals, and voice
            capture into visible daily execution.
          </p>
          <a href="mailto:hello@buttonstechnology.com" className={styles.cta}>
            Discuss the concept
          </a>
        </div>
        <figure className={styles.mockup}>
          <Image
            src="/studio/clawsy/today-mobile.png"
            alt="Clawsy Today mobile mockup."
            width={390}
            height={844}
            priority
            sizes="(max-width: 760px) 82vw, 320px"
          />
          <figcaption>Mock only</figcaption>
        </figure>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>Product direction</p>
          <h2>AI that makes the plan concrete.</h2>
        </div>
        <div className={styles.featureGrid}>
          {features.map((feature) => (
            <article key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.darkBand}>
        <div>
          <p className={styles.eyebrow}>Partner fit</p>
          <h2>A daily workspace for serious personal operators.</h2>
        </div>
        <p>
          Clawsy is relevant to partners serving productivity, coaching,
          accountability, creator education, and self-improvement audiences.
        </p>
      </section>
    </main>
  );
}
