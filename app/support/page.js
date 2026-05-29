import styles from "./page.module.css";

export const metadata = {
  title: "Support & Contact | Buttons Technology",
  description:
    "Contact Buttons Technology for product support, Spark help, and studio inquiries.",
};

const paths = [
  {
    title: "Spark support",
    copy: "For Spark: Daily Motivation purchases, reminders, widgets, privacy, or App Store questions.",
    href: "/spark/support",
    label: "Open Spark support",
  },
  {
    title: "Product support",
    copy: "For Buttons Technology product questions that are not specific to Spark.",
    href: "/contact",
    label: "Open contact form",
  },
  {
    title: "Studio inquiries",
    copy: "For new product ideas, collaboration, or category questions.",
    href: "/contact",
    label: "Open contact form",
  },
];

const faqs = [
  {
    question: "Where are Spark legal and support pages?",
    answer:
      "Spark has app-specific support, privacy, and terms pages under /spark/support, /spark/privacy, and /spark/terms.",
  },
  {
    question: "Do you work with outside collaborators?",
    answer:
      "Yes, selectively. Send the product category, channel context, and commercial model you have in mind.",
  },
];

export default function SupportPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Support & contact</p>
        <h1>Get to the right inbox.</h1>
        <p>
          Product support, Spark help, and studio conversations all start
          here. If you are unsure, email us and we will route it.
        </p>
      </section>

      <section className={styles.pathGrid} aria-label="Contact paths">
        {paths.map((path) => (
          <article key={path.title}>
            <h2>{path.title}</h2>
            <p>{path.copy}</p>
            <a href={path.href}>{path.label}</a>
          </article>
        ))}
      </section>

      <section className={styles.faqSection}>
        <p className={styles.eyebrow}>FAQ</p>
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
  );
}
