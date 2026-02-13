import styles from "./page.module.css";

export const metadata = {
  title: "Support | Buttons Technology",
  description: "Get help with Clawsy and Buttons Technology products.",
};

const faqs = [
  {
    question: "What is Clawsy?",
    answer:
      "Clawsy is a personal AI assistant for iOS that creates real apps tailored to how you live and work. Instead of forcing you into pre-built tools, Clawsy builds custom ones based on what you need.",
  },
  {
    question: "How do I get started?",
    answer:
      "Clawsy is coming soon to the iOS App Store. Once available, download the app and start by telling Clawsy what you need.",
  },
  {
    question: "Is my data private?",
    answer:
      "Yes. We collect as little data as possible and never sell personal information. Apps that Clawsy builds run locally on your device. See our privacy policy for details.",
  },
  {
    question: "How do I contact support?",
    answer:
      "Send us an email at hello@buttonstechnology.com. We read every message and respond as quickly as we can.",
  },
];

export default function SupportPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <p className={styles.eyebrow}>Support</p>
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
            For anything else, reach us at{" "}
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
