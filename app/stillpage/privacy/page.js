import styles from "../../privacy/page.module.css";

export const metadata = {
  title: "Stillpage Privacy Policy | Buttons Technology",
  description:
    "Privacy policy for Stillpage, the private on-device daily journal app by Buttons Technology.",
};

export default function StillpagePrivacyPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <p className={styles.eyebrow}>Stillpage</p>
        <h1>Privacy Policy</h1>
        <p className={styles.effective}>Effective date: June 2, 2026</p>

        <div className={styles.body}>
          <section className={styles.summary}>
            <p>
              Stillpage is a private journal that lives on your iPhone. We do
              not collect your writing, require an account, run ads, use
              analytics SDKs, or track you across apps and websites.
            </p>
          </section>

          <section>
            <h2>The Short Version</h2>
            <p>
              We collect nothing through Stillpage. Your journal pages,
              reminder time, and settings stay on your device. We cannot read
              your pages because they are never sent to us.
            </p>
          </section>

          <section>
            <h2>Information Stored On Your Device</h2>
            <p>
              Stillpage stores your written pages, prompt progress, reminder
              preferences, settings, export preferences, and purchase
              entitlement state locally on your iPhone.
            </p>
            <p>
              This local information is used only to run the app: show today&apos;s
              page, save what you write, help you look back, search your own
              pages on-device, export when you choose, and remember whether the
              app has been unlocked.
            </p>
          </section>

          <section>
            <h2>Information We Do Not Collect Through The App</h2>
            <ul>
              <li>No account registration or login.</li>
              <li>No name, email address, phone number, or contact info.</li>
              <li>No journal text, search queries, or exported files.</li>
              <li>No advertising identifiers.</li>
              <li>No analytics SDKs.</li>
              <li>No tracking SDKs or cross-app tracking.</li>
              <li>No sale or sharing of personal data.</li>
              <li>No social feed or public profile.</li>
            </ul>
          </section>

          <section>
            <h2>Purchases</h2>
            <p>
              Stillpage is unlocked with a single one-time in-app purchase of
              $4.99, processed by Apple through the App Store. Apple handles
              payment information. We do not receive your full payment card
              details.
            </p>
            <p>
              Stillpage uses Apple&apos;s StoreKit only to check purchase and
              restore status. That purchase check does not include anything you
              write in your journal.
            </p>
          </section>

          <section>
            <h2>Backups And Exports</h2>
            <p>
              Your pages live in the app&apos;s local storage on your device and may
              be included in Apple device or iCloud backups if you have those
              backups enabled. Those backups are handled by Apple under Apple&apos;s
              terms; we do not receive or access them.
            </p>
            <p>
              If you export your journal as text or PDF, the file is created on
              your device and goes only where you choose to send or save it.
            </p>
          </section>

          <section>
            <h2>Notifications</h2>
            <p>
              If reminders are enabled, Stillpage uses local iOS notifications.
              Notification content is generic and does not include your journal
              text.
            </p>
          </section>

          <section>
            <h2>Support Emails</h2>
            <p>
              If you contact us for support, we may receive your email address
              and message so we can respond. Do not include private journal
              text or sensitive information in support requests.
            </p>
          </section>

          <section>
            <h2>Children</h2>
            <p>
              Stillpage does not collect personal information from anyone,
              including children. There are no accounts, and no journal data
              leaves your device.
            </p>
          </section>

          <section>
            <h2>Changes</h2>
            <p>
              We may update this policy as Stillpage changes. The effective
              date at the top of this page shows when the current version took
              effect.
            </p>
          </section>

          <section>
            <h2>Contact</h2>
            <p>
              Questions can be sent to{" "}
              <a href="mailto:support@buttonstechnology.com">
                support@buttonstechnology.com
              </a>
              .
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
