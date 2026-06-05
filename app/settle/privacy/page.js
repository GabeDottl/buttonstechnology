import styles from "../../privacy/page.module.css";

export const metadata = {
  title: "Settle Privacy Policy | Buttons Technology",
  description:
    "Privacy policy for Settle, the private 12-week mindfulness course app by Buttons Technology.",
};

export default function SettlePrivacyPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <p className={styles.eyebrow}>Settle</p>
        <h1>Privacy Policy</h1>
        <p className={styles.effective}>Effective date: June 4, 2026</p>

        <div className={styles.body}>
          <section className={styles.summary}>
            <p>
              Settle is built for private mindfulness practice. The app does not
              require an account, does not use ads, does not use analytics SDKs,
              does not track you, and does not sell personal data. Settle works
              fully offline — your course progress, streaks, saved practices, and
              settings stay on your device and are never uploaded to us.
            </p>
          </section>

          <section>
            <h2>Information Stored On Your Device</h2>
            <p>
              The app stores your course progress and completed days, streak
              history, saved and recently used Field Guide practices, daily
              session length, reminder preferences, appearance preference,
              onboarding state, and purchase entitlement state locally on your
              iPhone.
            </p>
            <p>
              This local information is used to run the 12-week course, show your
              progress and streaks, surface saved practices, manage reminders,
              and confirm that you own the app.
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
              <li>No upload of your practice activity, progress, or saved items.</li>
              <li>No social feed or public profile.</li>
              <li>No network connection required to use the app.</li>
            </ul>
          </section>

          <section>
            <h2>Purchases</h2>
            <p>
              Settle is a one-time purchase. There is no subscription. Your
              purchase is processed by Apple through the App Store. Apple may
              provide the purchase status needed to confirm ownership and restore
              your purchase on your devices. We do not receive your full payment
              card information.
            </p>
          </section>

          <section>
            <h2>Notifications</h2>
            <p>
              If you turn on reminders, the app uses local iOS notifications.
              Notification content is a generic, gentle nudge to practice and
              does not include sensitive personal information.
            </p>
          </section>

          <section>
            <h2>Support Emails</h2>
            <p>
              If you contact us for support, we may receive your email address
              and message so we can respond. Please do not include sensitive
              health information or emergency details in support requests.
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
              We may update this policy as the app changes. The effective date at
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
