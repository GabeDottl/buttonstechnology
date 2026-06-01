import Link from "next/link";
import styles from "../../support/page.module.css";

export const metadata = {
  title: "WWJD Support | Buttons Technology",
  description:
    "Get help with What Would Jesus Do, the private Bible reflection app by Buttons Technology.",
};

const faqs = [
  {
    question: "What is What Would Jesus Do?",
    answer:
      "What Would Jesus Do is a private Bible reflection app for iPhone. You can write about a hard moment, review cited Scripture first, and receive a short reflection and next step grounded in those passages.",
  },
  {
    question: "Does my reflection text leave my iPhone?",
    answer:
      "The reflection workflow is designed so your prompts, generated reflections, saved reflections, Bible reading progress, and preferences stay on your device. App Store purchases and restores are processed by Apple.",
  },
  {
    question: "Which Bible translation is included?",
    answer:
      "The app currently includes the World English Bible with the Protestant 66-book canon. Catholic and Orthodox deuterocanonical books are not bundled yet.",
  },
  {
    question: "Is this app spiritual, medical, or emergency advice?",
    answer:
      "No. The app is a study and reflection aid. It is not Jesus, God, prophecy, confession, a pastor, a therapist, a doctor, a lawyer, or an emergency service. If anyone is in danger, contact local emergency services or trusted human support immediately.",
  },
  {
    question: "How do I manage or restore purchases?",
    answer:
      "Purchases are processed by Apple through the App Store. If premium access does not appear on your device, use Restore Purchases in the app. Subscriptions can be managed or canceled in your Apple account settings.",
  },
  {
    question: "How do I contact support?",
    answer:
      "Send us an email at hello@buttonstechnology.com. Include your device model, iOS version, and a short description of what happened. Do not include private reflection text or emergency details.",
  },
];

export default function WWJDSupportPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>What Would Jesus Do Support</p>
          <h1>How can we help?</h1>
          <p>
            Help for the private Bible reflection app. Review the{" "}
            <Link href="/wwjd/privacy">privacy policy</Link> or{" "}
            <Link href="/wwjd/terms">terms of service</Link>.
          </p>
        </section>

        <section className={styles.faqSection}>
          <div className={styles.faqs}>
            {faqs.map((faq) => (
              <article key={faq.question}>
                <h2>{faq.question}</h2>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
