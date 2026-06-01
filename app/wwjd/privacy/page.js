import styles from "../../privacy/page.module.css";

export const metadata = {
  title: "WWJD Privacy Policy | Buttons Technology",
  description:
    "Privacy policy for What Would Jesus Do, the private Bible reflection app by Buttons Technology.",
};

export default function WWJDPrivacyPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <p className={styles.eyebrow}>What Would Jesus Do</p>
        <h1>Privacy Policy</h1>
        <p className={styles.effective}>Effective date: May 31, 2026</p>

        <div className={styles.body}>
          <section className={styles.summary}>
            <p>
              What Would Jesus Do is built for private Bible reflection. The app
              does not require an account, does not use ads, does not use
              analytics SDKs, and does not sell personal data. Your reflection
              prompts, saved reflections, and Bible reading progress stay on
              your device.
            </p>
          </section>

          <section>
            <h2>Information Stored On Your Device</h2>
            <p>
              The app stores your reflection prompts, generated reflections,
              saved reflections, saved passages, Bible reading progress,
              reminder preferences, onboarding state, and purchase entitlement
              state locally on your iPhone.
            </p>
            <p>
              This local information is used to run the reflection workflow,
              show saved items, continue reading plans, manage reminders, and
              unlock premium features.
            </p>
          </section>

          <section>
            <h2>Information We Do Not Collect Through The App</h2>
            <ul>
              <li>No account registration or login.</li>
              <li>No advertising identifiers.</li>
              <li>No tracking SDKs or cross-app tracking.</li>
              <li>No analytics SDKs.</li>
              <li>No sale of personal data.</li>
              <li>No upload of reflection text or saved reflections.</li>
              <li>No social feed or public profile.</li>
            </ul>
          </section>

          <section>
            <h2>Purchases</h2>
            <p>
              Premium purchases are processed by Apple through the App Store.
              Apple may provide purchase and subscription status needed to
              unlock premium access, restore purchases, process refunds, and
              understand aggregate App Store performance. We do not receive your
              full payment card information.
            </p>
          </section>

          <section>
            <h2>Notifications</h2>
            <p>
              If reminders are enabled, the app uses local iOS notifications.
              Notification content is generic and does not include your private
              reflection text.
            </p>
          </section>

          <section>
            <h2>Support Emails</h2>
            <p>
              If you contact us for support, we may receive your email address
              and message so we can respond. Do not include private reflection
              text, sensitive health information, or emergency details in
              support requests.
            </p>
          </section>

          <section>
            <h2>Children</h2>
            <p>
              The app is not directed to children under 13. If you believe a
              child has sent us personal information, contact us and we will
              delete it.
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
