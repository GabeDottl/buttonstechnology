import Link from "next/link";
import styles from "../../support/page.module.css";

export const metadata = {
  title: "Spark Support | Buttons Technology",
  description:
    "Get help with Spark: Daily Motivation, the private daily motivation app by Buttons Technology.",
};

const faqs = [
  {
    question: "What is Spark: Daily Motivation?",
    answer:
      "Spark is a private daily motivation app for iPhone. It helps you start the day with quotes that fit your taste, then learns on-device from the voices, themes, likes, skips, and saved quotes you choose.",
  },
  {
    question: "How do I get started?",
    answer:
      "Open Spark, choose the voices and themes that motivate you, then use likes, skips, and saves to tune your daily quotes. You can also set local morning or evening reminders from inside the app.",
  },
  {
    question: "How do widgets and reminders work?",
    answer:
      "Spark uses iOS notifications for reminders and a home screen widget for glanceable quotes. If reminders or widgets are not appearing, check that notifications are enabled for Spark and that the widget has been added from the iOS home screen widget gallery.",
  },
  {
    question: "Is my data private?",
    answer: (
      <>
        Yes. Spark has no account, no ads, and no cross-app tracking. Your
        saved quotes, likes, dislikes, preferences, reminder settings, and
        personalization profile stay on your iPhone. See the{" "}
        <Link href="/spark/privacy">Spark privacy policy</Link>{" "}
        for details.
      </>
    ),
  },
  {
    question: "How do I manage or restore purchases?",
    answer:
      "Purchases are processed by Apple through the App Store. If premium access does not appear on your device, use Restore Purchases in Spark. Subscriptions can be managed or canceled in your Apple account settings.",
  },
  {
    question: "How do I contact support?",
    answer:
      "Send us an email at hello@buttonstechnology.com. Include your device model, iOS version, and a short description of what happened so we can help faster.",
  },
];

export default function SparkSupportPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <p className={styles.eyebrow}>Spark Support</p>
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
            For Spark support, reach us at{" "}
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
