import Link from "next/link";
import styles from "../../support/page.module.css";

export const metadata = {
  title: "Stillpage Support | Buttons Technology",
  description:
    "Get help with Stillpage, the private daily journal app by Buttons Technology.",
};

const faqs = [
  {
    question: "What is Stillpage?",
    answer:
      "Stillpage is a private daily journal for iPhone. It gives you one thoughtful question a day, saves your writing on your device, and lets you look back and search what you wrote.",
  },
  {
    question: "Does my journal leave my iPhone?",
    answer:
      "No. Stillpage has no account, no analytics, no ads, and no tracking. Your pages and searches stay on your device. App Store purchases and restores are processed by Apple.",
  },
  {
    question: "How does the one-time purchase work?",
    answer:
      "You can write your first three pages free. Then Stillpage unlocks unlimited writing with one non-consumable in-app purchase of $4.99. There is no subscription or recurring charge.",
  },
  {
    question: "Can I restore my purchase?",
    answer:
      "Yes. Use Restore Purchases in Stillpage if the unlock does not appear on a device signed in with the Apple ID that made the purchase.",
  },
  {
    question: "How do I keep a backup?",
    answer:
      "Keep Apple device or iCloud backups enabled, and use Stillpage's export option to save your own text or PDF copy from time to time.",
  },
  {
    question: "How do I contact support?",
    answer:
      "Send an email to support@buttonstechnology.com. Include your device model, iOS version, and a short description of what happened. Do not include private journal text.",
  },
];

export default function StillpageSupportPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>Stillpage Support</p>
          <h1>How can we help?</h1>
          <p>
            Help for the private daily journal app. Review the{" "}
            <Link href="/stillpage/privacy">privacy policy</Link> or{" "}
            <Link href="/stillpage/terms">terms of use</Link>.
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
