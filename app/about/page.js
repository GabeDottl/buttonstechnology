import styles from "./page.module.css";

export const metadata = {
  title: "About | Buttons Technology",
  description: "Buttons Technology is an app studio for partner-ready consumer software.",
};

const principles = [
  "Build around an audience that already exists.",
  "Make the daily product loop obvious before adding scope.",
  "Treat App Store, pricing, support, and reporting as product work.",
  "Use AI where it improves the product, not as decorative positioning.",
];

const capabilities = [
  "Product strategy",
  "Native iOS development",
  "App Store operations",
  "Monetization",
  "Retention loops",
  "Launch positioning",
];

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>About</p>
        <h1>A small studio for partner-ready consumer apps.</h1>
        <p>
          Buttons Technology designs and builds app products for partners with
          distribution. The work sits between product strategy, native software,
          App Store execution, monetization, and launch support.
        </p>
      </section>

      <section className={styles.split}>
        <div>
          <p className={styles.eyebrow}>How we think</p>
          <h2>Distribution changes the product brief.</h2>
        </div>
        <p>
          A good app for a partner is not just a polished interface. It needs a
          reason for the audience to try it, a reason to come back, a credible
          commercial loop, and enough operational polish that the partner can
          confidently put their name near it.
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
          <h2>Built for the gap between audience and product.</h2>
        </div>
        <a href="mailto:hello@buttonstechnology.com">Contact the studio</a>
      </section>
    </main>
  );
}
