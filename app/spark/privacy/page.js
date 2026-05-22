import styles from "../../privacy/page.module.css";

export const metadata = {
  title: "Spark Privacy Policy | Buttons Technology",
  description:
    "Privacy policy for Spark: Daily Motivation by Buttons Technology, LLC.",
};

export default function SparkPrivacyPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <p className={styles.eyebrow}>Spark: Daily Motivation</p>
        <h1>Privacy Policy</h1>
        <p className={styles.effective}>Effective date: May 20, 2026</p>

        <div className={styles.body}>
          <section className={styles.summary}>
            <p>
              Spark is built to be private by design: no account, no ads, no
              cross-app tracking, and no sale of personal data. Your saved
              quotes, likes, dislikes, preferences, reminders, and
              personalization profile stay on your device.
            </p>
          </section>

          <section>
            <h2>Information Stored On Your Device</h2>
            <p>
              Spark stores the information needed to personalize the app locally
              on your iPhone, including selected themes, selected figures, liked
              and disliked quotes, saved quotes, reminder settings, and purchase
              entitlement state.
            </p>
            <p>
              This information is used to choose better quotes for you and to
              keep the app experience working on your device.
            </p>
          </section>

          <section>
            <h2>Anonymous Interaction Signals</h2>
            <p>
              Spark may log full anonymous interaction signals to improve app
              quality, understand which features are useful, and find problems
              in the experience. No personal identification is included.
            </p>
            <p>
              These signals may include product interaction events, app state,
              device-level analytics identifiers, and high-level quote metadata.
              They do not include your name, email address, saved quote content,
              personalization profile, or advertising identifiers.
            </p>
          </section>

          <section>
            <h2>Information We Do Not Collect Through The App</h2>
            <ul>
              <li>No account registration or login.</li>
              <li>No advertising identifiers.</li>
              <li>No cross-app tracking.</li>
              <li>No sale of personal data.</li>
              <li>No upload of saved quotes, likes, dislikes, or preferences.</li>
              <li>No social feed or public profile.</li>
            </ul>
          </section>

          <section>
            <h2>Purchases</h2>
            <p>
              Premium purchases are processed by Apple through the App Store.
              Apple may provide us purchase and subscription status needed to
              unlock premium access, process refunds, and understand aggregate
              App Store performance. We do not receive your full payment card
              information.
            </p>
          </section>

          <section>
            <h2>Support Emails</h2>
            <p>
              If you contact us for support, we may receive your email address
              and message so we can respond. Do not include sensitive
              information in support requests.
            </p>
          </section>

          <section>
            <h2>Children</h2>
            <p>
              Spark is not directed to children under 13. If you believe a child
              has sent us personal information, contact us and we will delete
              it.
            </p>
          </section>

          <section>
            <h2>Changes</h2>
            <p>
              We may update this policy as the app changes. The effective date
              at the top of this page shows when the current version took
              effect.
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
