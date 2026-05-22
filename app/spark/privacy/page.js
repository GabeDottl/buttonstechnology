import styles from "../../privacy/page.module.css";

export const metadata = {
  title: "Spark Privacy Policy | Buttons Technology",
  description:
    "Privacy policy for Spark: Daily Motivation, including on-device personalization, anonymous recommendation signals, opt-out controls, and data use.",
};

export default function SparkPrivacyPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <p className={styles.eyebrow}>Spark: Daily Motivation</p>
        <h1>Privacy Policy</h1>
        <p className={styles.effective}>Effective date: May 22, 2026</p>

        <div className={styles.body}>
          <section className={styles.summary}>
            <p>
              Spark is built to be private by design: no account, no ads, no
              cross-app tracking, and no sale of personal data. Your saved
              quotes and taste profile stay on your device. Spark may use
              anonymous recommendation signals to improve quote ranking and app
              quality, and you can opt out in Settings.
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
              Your saved quotes, likes, dislikes, preferences, recommendation
              history, and taste profile stay on your device. This information
              is used to choose better quotes for you, remember favorites, run
              local reminders, and keep the app experience working on your
              device.
            </p>
          </section>

          <section>
            <h2>Anonymous Recommendation Signals</h2>
            <p>
              Spark may collect anonymous recommendation signals so we can
              understand whether the recommendation experience is useful,
              improve quote ranking, fix product issues, and measure high-level
              feature performance. These signals are not used for advertising or
              cross-app tracking.
            </p>
            <p>
              Data categories may include product interaction events, app
              state, coarse recommendation outcomes, device and app diagnostics,
              privacy-preserving analytics identifiers, and high-level quote or
              theme metadata. They do not include your name, email address,
              saved quote content, taste profile, advertising identifiers, or
              information from other apps.
            </p>
            <p>
              You can opt out of these anonymous recommendation signals in
              Spark Settings. If you opt out, Spark stops sending future
              recommendation analytics while on-device personalization continues
              to work locally.
            </p>
          </section>

          <section>
            <h2>Data Categories And Purposes</h2>
            <ul>
              <li>
                On-device personalization data, used to choose quotes, remember
                saved quotes, and preserve your preferences locally.
              </li>
              <li>
                Anonymous recommendation signals, used to improve ranking,
                quality, reliability, and feature decisions.
              </li>
              <li>
                Purchase status from Apple, used to unlock premium access,
                restore purchases, process refunds, and understand aggregate App
                Store performance.
              </li>
              <li>
                Support email content, used only to respond to your support
                request.
              </li>
            </ul>
          </section>

          <section>
            <h2>Your Choices</h2>
            <p>
              You can opt out of anonymous recommendation signals in Settings.
              You can also stop using Spark at any time, delete the app from
              your device, or contact us with privacy questions.
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
              <li>No upload of saved quotes, likes, dislikes, or taste profile.</li>
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
