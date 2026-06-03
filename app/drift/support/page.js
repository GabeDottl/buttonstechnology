import Link from "next/link";
import styles from "../../support/page.module.css";

export const metadata = {
  title: "DRIFT Support | Buttons Technology",
  description:
    "Get help with DRIFT — Merge Before the Wall, the one-thumb neon arcade puzzle by Buttons Technology.",
};

const faqs = [
  {
    question: "What is DRIFT?",
    answer:
      "DRIFT — Merge Before the Wall is a one-thumb arcade puzzle for iPhone. Numbered tiles keep dropping in beside a glowing death wall. Tap to slide the falling tile left; matching tiles merge and double. If the drift shoves a tile off the right edge, the run ends.",
  },
  {
    question: "How do I play?",
    answer:
      "Tap anywhere to slide the active tile one column to the left. Line up two equal tiles so they merge into one and double in value. Keep the right side clear so the drift can't push your stack off the edge. The first run walks you through it step by step.",
  },
  {
    question: "Why do my tiles keep ending up on the right?",
    answer:
      "New tiles arrive on the right, next to the red wall, and the board drifts toward it. Your job is to tap to ferry each tile left and merge it before the stack reaches the edge. Merging clears space and buys you survival.",
  },
  {
    question: "Is there a cost, ads, or in-app purchases?",
    answer:
      "DRIFT is a one-time paid app. There are no ads and no in-app purchases. You pay once and own the whole game.",
  },
  {
    question: "Is my data private?",
    answer: (
      <>
        Yes. DRIFT collects no data, has no accounts, no ads, and no tracking,
        and it works fully offline. See the{" "}
        <Link href="/drift/privacy">DRIFT privacy policy</Link> for details.
      </>
    ),
  },
  {
    question: "How do I restore my purchase on a new device?",
    answer:
      "Because DRIFT is a paid app, simply download it again from the App Store while signed in with the same Apple Account you used to buy it. There is nothing else to restore.",
  },
  {
    question: "How do I contact support?",
    answer:
      "Email us at hello@buttonstechnology.com. Include your device model, iOS version, and a short description of what happened so we can help faster.",
  },
];

export default function DriftSupportPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <p className={styles.eyebrow}>DRIFT Support</p>
        <h1>How can we help?</h1>

        <div className={styles.faqs}>
          {faqs.map((faq) => (
            <div key={faq.question} className={styles.faq}>
              <h2>{faq.question}</h2>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className={styles.contact}>
          <h2>Get in touch</h2>
          <p>
            For DRIFT support, reach us at{" "}
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
