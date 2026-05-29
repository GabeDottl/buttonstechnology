import styles from "../../privacy/page.module.css";

export const metadata = {
  title: "Ascent Privacy Policy | Buttons Technology",
  description:
    "Privacy policy for Ascent, including local habit data, reminders, iCloud backup restore points, purchases, and support.",
};

export default function AscentPrivacyPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <p className={styles.eyebrow}>Ascent</p>
        <h1>Privacy Policy</h1>
        <p className={styles.effective}>Effective date: May 29, 2026</p>

        <div className={styles.body}>
          <section className={styles.summary}>
            <p>
              Ascent is built as a private habit and trajectory app. Your
              routines, habit completions, trajectory history, reminders,
              diagnostics, and profile settings are stored on your device.
              Ascent does not sell personal data, run ads, or track you across
              other apps.
            </p>
          </section>

          <section>
            <h2>Information Stored On Your Device</h2>
            <p>
              Ascent stores the information needed to run your habit system on
              your iPhone, including selected routines, habit names, completion
              history, trajectory points, reminder settings, palette settings,
              diagnostic scores, and local profile preferences.
            </p>
            <p>
              This information is used to show your daily line, calculate
              progress, preserve your routine, schedule local reminders, and
              keep the app working between launches.
            </p>
          </section>

          <section>
            <h2>iCloud Restore Points</h2>
            <p>
              If enabled, Ascent may save a small restore point through Apple
              iCloud key-value storage so your local setup can be recovered
              after reinstalling the app. This restore point is used only to
              restore Ascent app state for your Apple account.
            </p>
            <p>
              iCloud is provided by Apple and is governed by Apple&apos;s
              privacy and iCloud terms.
            </p>
          </section>

          <section>
            <h2>Reminders And Notifications</h2>
            <p>
              Ascent can schedule local reminders if you turn them on. Reminder
              preferences are stored on your device and used to ask iOS to
              deliver notifications at the times you choose.
            </p>
          </section>

          <section>
            <h2>Purchases</h2>
            <p>
              Premium purchases are processed by Apple through the App Store.
              Apple may provide purchase and subscription status needed to
              unlock access, restore purchases, process refunds, and understand
              aggregate App Store performance. We do not receive your full
              payment card information.
            </p>
          </section>

          <section>
            <h2>Support Emails</h2>
            <p>
              If you contact us for support, we may receive your email address
              and message so we can respond. Do not include sensitive health,
              financial, or private journal information in support requests.
            </p>
          </section>

          <section>
            <h2>Information We Do Not Collect Through The App</h2>
            <ul>
              <li>No account registration or login.</li>
              <li>No advertising identifiers.</li>
              <li>No cross-app tracking.</li>
              <li>No sale of personal data.</li>
              <li>No sharing of personal data for targeted advertising.</li>
              <li>No public profile or social feed.</li>
            </ul>
          </section>

          <section>
            <h2>Your Choices</h2>
            <p>
              You can change reminder settings, disable iCloud restore-point
              backup where available, export local data where the app provides
              that option, or delete the app from your device.
            </p>
          </section>

          <section>
            <h2>Children</h2>
            <p>
              Ascent is not directed to children under 13. If you believe a
              child has sent us personal information, contact us and we will
              delete it.
            </p>
          </section>

          <section>
            <h2>Changes</h2>
            <p>
              We may update this policy as Ascent changes. The effective date
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
