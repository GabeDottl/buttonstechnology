import styles from "./page.module.css";

export const metadata = {
  title: "Privacy Policy | Buttons Technology",
  description: "Privacy policy for Buttons Technology, LLC.",
};

export default function PrivacyPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Privacy Policy</h1>
        <p className={styles.effective}>Effective date: February 12, 2026</p>

        <div className={styles.body}>
          <p>
            Buttons Technology, LLC keeps this policy simple: we collect as
            little information as possible and do not sell personal data.
          </p>
          <p>
            If you contact us directly, we may receive your name, email address,
            and message so we can respond.
          </p>
          <p>
            We may use basic, privacy-friendly analytics and standard server
            logs to keep the site running and understand high-level traffic
            trends. We do not use this data to identify individual visitors.
          </p>
          <p>
            We share data only when required by law or to operate our services
            with trusted providers.
          </p>
          <p>This site is not directed to children under 13.</p>
          <p>
            We may update this page over time. By using this site, you agree to
            the current version of this policy.
          </p>
          <p>
            Questions can be sent to{" "}
            <a href="mailto:hello@buttonstechnology.com">
              hello@buttonstechnology.com
            </a>
            .
          </p>
        </div>
      </main>
    </div>
  );
}
