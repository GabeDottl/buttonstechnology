import Link from "next/link";
import styles from "../../terms/page.module.css";

export const metadata = {
  title: "Stillpage Terms of Use | Buttons Technology",
  description:
    "Terms of use for Stillpage, the private daily journal app by Buttons Technology, LLC.",
};

export default function StillpageTermsPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <p className={styles.eyebrow}>Stillpage</p>
        <h1>Terms of Use</h1>
        <p className={styles.effective}>Effective date: June 2, 2026</p>

        <div className={styles.body}>
          <section>
            <h2>Agreement To Terms</h2>
            <p>
              These Terms of Use govern your use of Stillpage, an iOS app
              provided by Buttons Technology, LLC. By downloading, accessing, or
              using Stillpage, you agree to these terms. If you do not agree,
              do not use the app.
            </p>
          </section>

          <section>
            <h2>Use Of Stillpage</h2>
            <p>
              Stillpage is a personal journaling app. You may use it only for
              lawful, personal purposes and in compliance with these terms,
              Apple&apos;s App Store rules, and applicable law.
            </p>
          </section>

          <section>
            <h2>Your Purchase</h2>
            <p>
              Stillpage can be unlocked with a single one-time non-consumable
              in-app purchase of $4.99, processed by Apple through the App
              Store. There is no subscription and no recurring charge.
            </p>
            <p>
              Prices, taxes, and available purchase terms may vary by country,
              currency, promotion, and App Store account. The final price and
              purchase terms shown by Apple at checkout control your purchase.
              Refund requests for App Store purchases are handled by Apple.
            </p>
          </section>

          <section>
            <h2>Your Pages Are Yours</h2>
            <p>
              Everything you write belongs to you. Buttons Technology, LLC does
              not access, store, or receive your journal pages. Stillpage keeps
              them on your device only.
            </p>
          </section>

          <section>
            <h2>Backups Are Your Responsibility</h2>
            <p>
              Because your pages live on your device, keeping them safe is your
              responsibility. We suggest keeping device or iCloud backups
              enabled through Apple and saving your own copy from inside the
              app from time to time.
            </p>
            <p>
              If you erase the app, erase your journal, reset your device, or
              lose access without a backup, your pages may no longer be
              recoverable, and Buttons Technology, LLC cannot restore them.
            </p>
          </section>

          <section>
            <h2>Privacy</h2>
            <p>
              Our privacy practices are described in the{" "}
              <Link href="/stillpage/privacy">Stillpage Privacy Policy</Link>.
            </p>
          </section>

          <section>
            <h2>Intellectual Property</h2>
            <p>
              Stillpage, including its software, design, interfaces, branding,
              and original content, is owned by Buttons Technology, LLC or its
              licensors and is protected by intellectual property laws. You may
              not copy, modify, distribute, reverse-engineer, or resell any
              part of Stillpage except as permitted by law.
            </p>
          </section>

          <section>
            <h2>No Warranty</h2>
            <p>
              Stillpage is provided &quot;as is&quot; and &quot;as available&quot; without
              warranties of any kind, to the fullest extent the law allows. We
              do not guarantee that Stillpage will be uninterrupted or
              error-free.
            </p>
          </section>

          <section>
            <h2>Limitation Of Liability</h2>
            <p>
              To the fullest extent permitted by law, Buttons Technology, LLC
              will not be liable for indirect, incidental, special,
              consequential, exemplary, or punitive damages arising from or
              related to your use of Stillpage. Our total liability for any
              claim related to Stillpage will not exceed the amount you paid us
              for Stillpage in the twelve months before the claim.
            </p>
          </section>

          <section>
            <h2>Changes To Terms</h2>
            <p>
              We may update these terms as Stillpage changes. The effective
              date at the top of this page shows when the current version took
              effect. Continued use after changes means you accept the updated
              terms.
            </p>
          </section>

          <section>
            <h2>Contact</h2>
            <p>
              Questions about these terms can be sent to{" "}
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
