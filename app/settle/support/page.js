import Link from "next/link";
import styles from "../../support/page.module.css";

export const metadata = {
  title: "Settle Support | Buttons Technology",
  description:
    "Get help with Settle, the 12-week mindfulness course app by Buttons Technology.",
};

const faqs = [
  {
    question: "What is Settle?",
    answer:
      "Settle is a 12-week mindfulness course for beginners. You get one short lesson and a guided practice a day — from knowing nothing to genuinely calmer. It also includes a searchable Field Guide of short practices for real-life moments, a meditation timer with gentle bells, and a breathing guide you keep for life.",
  },
  {
    question: "Is this a subscription?",
    answer:
      "No. Settle is a one-time purchase. You pay once and keep the app — no subscription, no recurring charges, no renewals.",
  },
  {
    question: "Does my activity leave my iPhone?",
    answer:
      "No. Settle works fully offline. Your course progress, streaks, saved practices, and settings stay on your device. There is no account, no analytics, and no tracking. App Store purchases and restores are processed by Apple.",
  },
  {
    question: "How do I restore my purchase on a new device?",
    answer:
      "Settle is tied to your Apple account. Reinstall the app from the App Store while signed in with the same Apple ID and your purchase will be recognized. If you have trouble, email us.",
  },
  {
    question: "Do I have to do the 12-week course in order?",
    answer:
      "The course unlocks day by day so beginners always have one clear next step. But the Field Guide is always open — search how you're feeling or what you're dealing with (“angry,” “can't sleep,” “a hard conversation”) and get a short practice for the moment you're in, no course required.",
  },
  {
    question: "Is Settle medical or therapy advice?",
    answer:
      "No. Settle is for general wellbeing and education. It is not a therapist, doctor, medical treatment, or an emergency service. If you are in crisis or someone is in danger, contact your local emergency services or a qualified professional immediately.",
  },
  {
    question: "How do I contact support?",
    answer:
      "Email us at hello@buttonstechnology.com. Include your device model, iOS version, and a short description of what happened. Please don't include sensitive health or emergency details.",
  },
];

export default function SettleSupportPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>Settle Support</p>
          <h1>How can we help?</h1>
          <p>
            Help for the 12-week mindfulness course app. Review the{" "}
            <Link href="/settle/privacy">privacy policy</Link> or{" "}
            <Link href="/settle/terms">terms of service</Link>.
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
