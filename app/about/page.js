import styles from "./page.module.css";

export const metadata = {
  title: "About | Buttons Technology",
  description:
    "Buttons Technology is an app studio for self-development, growth, and well-being.",
};

const principles = [
  "Build around a real user need, not a vague wellness promise.",
  "Make the daily product loop obvious before adding scope.",
  "Treat App Store, pricing, support, and reporting as product work.",
  "Use AI where it improves the product, not as decoration.",
];

const capabilities = [
  "Product strategy",
  "Native iOS development",
  "App Store operations",
  "Monetization",
  "Retention loops",
  "Launch strategy",
];

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>About</p>
        <h1>A small studio for consumer apps that help people grow.</h1>
        <p>
          Buttons Technology designs and builds apps for self-development,
          growth, and well-being. The work sits between product strategy,
          native software, App Store execution, monetization, and iteration.
        </p>
      </section>

      <section className={styles.split}>
        <div>
          <p className={styles.eyebrow}>How we think</p>
          <h2>Daily use changes the product brief.</h2>
        </div>
        <p>
          A good app in this space is not just a polished interface. It needs a
          clear reason to start, a reason to come back, careful claims, and a
          loop that can survive real life.
        </p>
      </section>

      <section className={styles.gridSection}>
        <div className={styles.principles}>
          {principles.map((principle) => (
            <p key={principle}>{principle}</p>
          ))}
        </div>
        <div className={styles.capabilities}>
          <p className={styles.eyebrow}>Capabilities</p>
          <ul>
            {capabilities.map((capability) => (
              <li key={capability}>{capability}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.darkBand}>
        <div>
          <p className={styles.eyebrow}>Founded 2026</p>
          <h2>Built for the gap between intention and action.</h2>
        </div>
        <a href="/contact">Contact the studio</a>
      </section>
    </main>
  );
}
