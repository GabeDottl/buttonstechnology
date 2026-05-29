import Image from "next/image";
import styles from "./page.module.css";

export const metadata = {
  title: "Ascent | Buttons Technology",
  description:
    "Ascent is a habit-building iPhone app built around one trajectory line, bundled routines, and private local progress.",
};

const pillars = [
  "One clean trajectory metric",
  "Protocol-based habit routines",
  "Private local progress",
  "Fast daily check-ins",
];

export default function AscentPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Ascent</p>
          <h1>Habit building with one line that tells the truth.</h1>
          <p>
            Ascent is an iPhone app for people who want a clearer signal than
            streaks alone. Complete routines, recover from dips, and see
            whether your trajectory is climbing.
          </p>
          <a href="/contact">Discuss Ascent</a>
        </div>

        <figure className={styles.phoneFrame}>
          <Image
            src="/studio/ascent/ascent-today.png"
            alt="Ascent iPhone screenshot showing today's habit trajectory."
            width={1206}
            height={2622}
            priority
            sizes="(max-width: 860px) 70vw, 310px"
          />
        </figure>
      </section>

      <section className={styles.gridSection}>
        <div>
          <p className={styles.eyebrow}>Product shape</p>
          <h2>Built for daily habit reflection, not dashboard noise.</h2>
        </div>
        <div className={styles.pillars}>
          {pillars.map((pillar) => (
            <p key={pillar}>{pillar}</p>
          ))}
        </div>
      </section>

      <section className={styles.showcase}>
        <div>
          <p className={styles.eyebrow}>Partner fit</p>
          <h2>Behavior-change apps for books, experts, and communities.</h2>
        </div>
        <p>
          Ascent packages habit routines into a concrete product loop: choose a
          commitment, check in quickly, and use trajectory as the retention
          signal. It is suited to partners with self-improvement, coaching,
          wellness, education, or creator-led audiences.
        </p>
      </section>
    </main>
  );
}
