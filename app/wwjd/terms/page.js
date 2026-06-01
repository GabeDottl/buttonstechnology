import Link from "next/link";
import styles from "../../terms/page.module.css";

export const metadata = {
  title: "WWJD Terms of Service | Buttons Technology",
  description:
    "Terms of service for What Would Jesus Do by Buttons Technology, LLC.",
};

export default function WWJDTermsPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <p className={styles.eyebrow}>What Would Jesus Do</p>
        <h1>Terms of Service</h1>
        <p className={styles.effective}>Effective date: May 31, 2026</p>

        <div className={styles.body}>
          <section>
            <h2>Agreement to Terms</h2>
            <p>
              These Terms of Service govern your use of What Would Jesus Do, an
              iOS app provided by Buttons Technology, LLC (&quot;we,&quot; &quot;us,&quot;
              or &quot;our&quot;). By downloading, accessing, or using the app, you
              agree to these terms. If you do not agree, do not use the app.
            </p>
          </section>

          <section>
            <h2>Use of the App</h2>
            <p>
              What Would Jesus Do provides private Bible reflection tools. You
              may write a situation, review relevant cited Bible passages, read
              Scripture, save reflections, and receive short reflection prompts
              grounded in those passages.
            </p>
            <p>
              You may use the app only for lawful, personal purposes and in
              compliance with these terms, Apple's App Store rules, and
              applicable law.
            </p>
          </section>

          <section>
            <h2>Not Professional Or Spiritual Authority</h2>
            <p>
              The app is a study and reflection aid. It is not Jesus, God,
              prophecy, confession, a pastor, a therapist, a doctor, a lawyer,
              or an emergency service. Do not rely on the app as your sole
              source of spiritual, medical, legal, mental health, safety, or
              emergency guidance.
            </p>
          </section>

          <section>
            <h2>Local Data</h2>
            <p>
              The app stores reflection prompts, generated reflections, saved
              reflections, saved passages, Bible reading progress, reminder
              preferences, onboarding state, and purchase entitlement state
              locally on your device. You are responsible for maintaining your
              own device, backups, and Apple account access.
            </p>
          </section>

          <section>
            <h2>Premium Purchases</h2>
            <p>
              The app may offer premium access through in-app purchases
              processed by Apple. Launch premium options include an annual
              subscription with a 7-day free trial, then $29.99 per year unless
              canceled, and a $59.99 lifetime purchase.
            </p>
            <p>
              Prices, trial availability, taxes, and available plans may vary by
              country, currency, promotion, and App Store account. The final
              price and purchase terms shown by Apple at checkout control your
              purchase.
            </p>
          </section>

          <section>
            <h2>Subscriptions, Renewal, And Cancelation</h2>
            <p>
              Subscriptions are billed through your Apple account and renew
              automatically unless canceled before the end of the current
              billing period. You can manage or cancel subscriptions in your App
              Store account settings. We cannot cancel subscriptions for you
              directly because Apple processes App Store purchases.
            </p>
          </section>

          <section>
            <h2>Refunds</h2>
            <p>
              Refund requests for App Store purchases are handled by Apple under
              Apple's refund policies. We do not receive your full payment card
              information and cannot issue App Store refunds directly.
            </p>
          </section>

          <section>
            <h2>Intellectual Property</h2>
            <p>
              The app, including its software, design, interfaces, branding, and
              original content, is owned by Buttons Technology, LLC or its
              licensors and is protected by intellectual property laws. You may
              not copy, modify, distribute, reverse-engineer, or resell any part
              of the app except as permitted by law.
            </p>
          </section>

          <section>
            <h2>Privacy</h2>
            <p>
              Our collection and use of information is described in the{" "}
              <Link href="/wwjd/privacy">WWJD Privacy Policy</Link>.
            </p>
          </section>

          <section>
            <h2>Disclaimers</h2>
            <p>
              The app is provided &quot;as is&quot; and &quot;as available&quot; without
              warranties of any kind. We do not guarantee that every reflection,
              passage recommendation, reminder, or reading plan state will be
              accurate or available at all times.
            </p>
          </section>

          <section>
            <h2>Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Buttons Technology, LLC
              will not be liable for indirect, incidental, special,
              consequential, exemplary, or punitive damages arising from or
              related to your use of the app. Our total liability for any claim
              related to the app will not exceed the amount you paid us for the
              app in the twelve months before the claim.
            </p>
          </section>

          <section>
            <h2>Contact</h2>
            <p>
              Questions about these terms can be sent to{" "}
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
