import Link from "next/link";
import styles from "../../terms/page.module.css";

export const metadata = {
  title: "Spark Terms of Service | Buttons Technology",
  description:
    "Terms of service for Spark: Daily Motivation by Buttons Technology, LLC.",
};

export default function SparkTermsPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <p className={styles.eyebrow}>Spark: Daily Motivation</p>
        <h1>Terms of Service</h1>
        <p className={styles.effective}>Effective date: May 22, 2026</p>

        <div className={styles.body}>
          <section>
            <h2>Agreement to Terms</h2>
            <p>
              These Terms of Service govern your use of Spark: Daily Motivation,
              an iOS app provided by Buttons Technology, LLC (&quot;we,&quot;
              &quot;us,&quot; or &quot;our&quot;). By downloading, accessing, or using
              Spark, you agree to these terms. If you do not agree, do not use
              the app.
            </p>
          </section>

          <section>
            <h2>Use of Spark</h2>
            <p>
              Spark is a personal motivation and quote app. You may use it only
              for lawful, personal purposes and in compliance with these terms,
              Apple&apos;s App Store rules, and applicable law.
            </p>
            <p>
              You are responsible for how you use the app, including any quotes
              you save, share, or rely on outside the app.
            </p>
          </section>

          <section>
            <h2>Personalization And Local Data</h2>
            <p>
              Spark stores personalization data on your device, including likes,
              dislikes, saved quotes, selected themes, selected figures,
              reminder settings, and purchase entitlement state. This data helps
              Spark choose better quotes for you.
            </p>
            <p>
              You are responsible for maintaining your own device, backups, and
              Apple account access. If you delete the app, reset your device, or
              disable device backups, locally stored app data may be lost.
            </p>
          </section>

          <section>
            <h2>Premium Purchases</h2>
            <p>
              Spark may offer premium access through in-app purchases processed
              by Apple. Spark: Daily Motivation Premium currently offers an
              annual subscription with a 7-day free trial, then $14.99 per year
              unless canceled, and a $24.99 lifetime purchase.
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
              automatically unless canceled before the end of the current billing
              period. You can manage or cancel subscriptions in your App Store
              account settings.
            </p>
            <p>
              We cannot cancel subscriptions for you directly because Apple
              processes App Store purchases. Restore Purchases in Spark can be
              used to refresh premium access on a device.
            </p>
          </section>

          <section>
            <h2>Refunds</h2>
            <p>
              Refund requests for App Store purchases are handled by Apple under
              Apple&apos;s refund policies. We do not receive your full payment
              card information and cannot issue App Store refunds directly.
            </p>
          </section>

          <section>
            <h2>Health, Wellness, And Professional Advice</h2>
            <p>
              Spark provides quotes, reminders, and reflective motivation
              content for general personal use. Spark is not medical, mental
              health, financial, legal, or professional advice, and it is not a
              substitute for qualified professional support.
            </p>
          </section>

          <section>
            <h2>Intellectual Property</h2>
            <p>
              Spark, including its software, design, interfaces, branding, and
              original content, is owned by Buttons Technology, LLC or its
              licensors and is protected by intellectual property laws. You may
              not copy, modify, distribute, reverse-engineer, or resell any part
              of Spark except as permitted by law.
            </p>
          </section>

          <section>
            <h2>Privacy</h2>
            <p>
              Our collection and use of information is described in the{" "}
              <Link href="/spark/privacy">Spark Privacy Policy</Link>.
            </p>
          </section>

          <section>
            <h2>Disclaimers</h2>
            <p>
              Spark is provided &quot;as is&quot; and &quot;as available&quot;
              without warranties of any kind, whether express or implied. We do
              not guarantee that Spark will be uninterrupted, error-free, or that
              every quote, recommendation, reminder, or widget update will be
              accurate or available at all times.
            </p>
          </section>

          <section>
            <h2>Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Buttons Technology, LLC
              will not be liable for indirect, incidental, special,
              consequential, exemplary, or punitive damages arising from or
              related to your use of Spark. Our total liability for any claim
              related to Spark will not exceed the amount you paid us for Spark
              in the twelve months before the claim.
            </p>
          </section>

          <section>
            <h2>Termination</h2>
            <p>
              You may stop using Spark at any time. We may suspend or terminate
              access to Spark or premium features if required by law, App Store
              rules, security needs, or a violation of these terms. Locally
              stored data may remain on your device unless you delete it.
            </p>
          </section>

          <section>
            <h2>Changes to Terms</h2>
            <p>
              We may update these terms as Spark changes. The effective date at
              the top of this page shows when the current version took effect.
              Continued use of Spark after changes means you accept the updated
              terms.
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
