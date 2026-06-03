import styles from "../../privacy/page.module.css";

export const metadata = {
  title: "DRIFT Privacy Policy | Buttons Technology",
  description:
    "Privacy policy for DRIFT — Merge Before the Wall. DRIFT collects no data, has no accounts, no ads, no tracking, and works fully offline.",
};

export default function DriftPrivacyPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <p className={styles.eyebrow}>DRIFT — Merge Before the Wall</p>
        <h1>Privacy Policy</h1>
        <p className={styles.effective}>Effective date: June 2, 2026</p>

        <div className={styles.body}>
          <section className={styles.summary}>
            <p>
              DRIFT is private by design. It collects no data. There are no
              accounts, no ads, no analytics, no trackers, and no network
              connections used to gather information about you. DRIFT is a fully
              offline arcade puzzle that runs entirely on your iPhone.
            </p>
          </section>

          <section>
            <h2>Information We Collect</h2>
            <p>
              None. DRIFT does not collect, transmit, or sell any personal data.
              It does not request your name, email address, contacts, location,
              photos, or advertising identifiers, and it does not include any
              third-party analytics or advertising SDKs.
            </p>
          </section>

          <section>
            <h2>Information Stored On Your Device</h2>
            <p>
              To make the game work, DRIFT saves a small amount of information
              locally on your iPhone, such as whether you have seen the tutorial,
              your best score and best tile, and your selected appearance. This
              information stays on your device, is never uploaded to us or anyone
              else, and is removed if you delete the app.
            </p>
          </section>

          <section>
            <h2>Information We Do Not Collect</h2>
            <ul>
              <li>No account registration or login.</li>
              <li>No personal information.</li>
              <li>No location data.</li>
              <li>No advertising identifiers.</li>
              <li>No analytics or usage tracking.</li>
              <li>No cross-app or cross-site tracking.</li>
              <li>No sale or sharing of personal data.</li>
            </ul>
          </section>

          <section>
            <h2>Purchases</h2>
            <p>
              DRIFT is a one-time paid app sold through the Apple App Store. The
              purchase is processed by Apple, and Apple handles billing and
              receipts under Apple&rsquo;s own privacy policy. DRIFT contains no
              in-app purchases and no subscriptions.
            </p>
          </section>

          <section>
            <h2>Children</h2>
            <p>
              DRIFT is rated 4+ and contains no objectionable content. Because
              the app collects no data from anyone, it collects no data from
              children.
            </p>
          </section>

          <section>
            <h2>Changes</h2>
            <p>
              We may update this policy if the app changes. The effective date at
              the top of this page shows when the current version took effect.
            </p>
          </section>

          <section>
            <h2>Contact</h2>
            <p>
              Questions can be sent to{" "}
              <a href="mailto:hello@buttonstechnology.com">
                hello@buttonstechnology.com
              </a>
              .
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
