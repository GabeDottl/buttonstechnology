export const metadata = {
  title: "Privacy Policy | Buttons Technology",
  description: "Privacy policy for Buttons Technology, LLC",
};

export default function PrivacyPage() {
  return (
    <main
      style={{
        maxWidth: "760px",
        margin: "0 auto",
        padding: "48px 24px 72px",
        lineHeight: 1.7,
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>Privacy Policy</h1>
      <p style={{ marginBottom: "1rem" }}>
        Effective date: February 12, 2026
      </p>
      <p style={{ marginBottom: "1rem" }}>
        Buttons Technology, LLC keeps this policy simple: we collect as little
        information as possible and do not sell personal data.
      </p>
      <p style={{ marginBottom: "1rem" }}>
        If you contact us directly, we may receive your name, email address, and
        message so we can respond.
      </p>
      <p style={{ marginBottom: "1rem" }}>
        We may use basic, privacy-friendly analytics and standard server logs to
        keep the site running and understand high-level traffic trends. We do not
        use this data to identify individual visitors.
      </p>
      <p style={{ marginBottom: "1rem" }}>
        We share data only when required by law or to operate our services with
        trusted providers.
      </p>
      <p style={{ marginBottom: "1rem" }}>
        This site is not directed to children under 13.
      </p>
      <p style={{ marginBottom: "1rem" }}>
        We may update this page over time. By using this site, you agree to the
        current version of this policy.
      </p>
      <p>
        Questions can be sent to <a href="mailto:hello@buttonstechnology.com">hello@buttonstechnology.com</a>.
      </p>
    </main>
  );
}
