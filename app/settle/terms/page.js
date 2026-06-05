import Link from "next/link";
import styles from "../../terms/page.module.css";

export const metadata = {
  title: "Settle Terms of Service | Buttons Technology",
  description:
    "Terms of service for Settle, the 12-week mindfulness course app by Buttons Technology, LLC.",
};

export default function SettleTermsPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <p className={styles.eyebrow}>Settle</p>
        <h1>Terms of Service</h1>
        <p className={styles.effective}>Effective date: June 4, 2026</p>

        <div className={styles.body}>
          <section>
            <h2>Agreement to Terms</h2>
            <p>
              These Terms of Service govern your use of Settle, an iOS app
              provided by Buttons Technology, LLC (&quot;we,&quot; &quot;us,&quot;
              or &quot;our&quot;). By downloading, accessing, or using the app, you
              agree to these terms. If you do not agree, do not use the app.
            </p>
          </section>

          <section>
            <h2>Use of the App</h2>
            <p>
              Settle is a 12-week mindfulness course for beginners. It provides
              one short lesson and guided practice a day, a searchable Field Guide
              of short practices for everyday moments, a meditation timer, and a
              breathing guide.
            </p>
            <p>
              You may use the app only for lawful, personal purposes and in
              compliance with these terms, Apple's App Store rules, and applicable
              law.
            </p>
          </section>

          <section>
            <h2>Not Medical Or Professional Advice</h2>
            <p>
              Settle is for general wellbeing and education. It is a self-guided
              mindfulness aid and is not a therapist, doctor, medical treatment,
              diagnosis, mental health care, or an emergency service. Do not rely
              on the app as your sole source of medical, mental health, safety, or
              emergency guidance. If you are in crisis or anyone is in danger,
              contact your local emergency services or a qualified professional
              immediately.
            </p>
          </section>

          <section>
            <h2>Local Data</h2>
            <p>
              The app stores your course progress, completed days, streaks, saved
              and recent Field Guide practices, session and reminder preferences,
              appearance preference, onboarding state, and purchase entitlement
              state locally on your device. You are responsible for maintaining
              your own device, backups, and Apple account access.
            </p>
          </section>

          <section>
            <h2>One-Time Purchase</h2>
            <p>
              Settle is a one-time purchase processed by Apple through the App
              Store. There is no subscription and no recurring charge — you pay
              once and keep the app. The launch price is approximately $5.99 USD.
            </p>
            <p>
              Prices, taxes, and availability may vary by country, currency,
              promotion, and App Store account. The final price and purchase terms
              shown by Apple at checkout control your purchase.
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
              The app, including its software, design, interfaces, branding, course
              content, and original text, is owned by Buttons Technology, LLC or
              its licensors and is protected by intellectual property laws. You may
              not copy, modify, distribute, reverse-engineer, or resell any part of
              the app except as permitted by law.
            </p>
          </section>

          <section>
            <h2>Privacy</h2>
            <p>
              Our collection and use of information is described in the{" "}
              <Link href="/settle/privacy">Settle Privacy Policy</Link>.
            </p>
          </section>

          <section>
            <h2>Disclaimers</h2>
            <p>
              The app is provided &quot;as is&quot; and &quot;as available&quot;
              without warranties of any kind. We do not guarantee that every
              lesson, practice, reminder, or progress state will be accurate or
              available at all times.
            </p>
          </section>

          <section>
            <h2>Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Buttons Technology, LLC will
              not be liable for indirect, incidental, special, consequential,
              exemplary, or punitive damages arising from or related to your use of
              the app. Our total liability for any claim related to the app will
              not exceed the amount you paid us for the app in the twelve months
              before the claim.
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
