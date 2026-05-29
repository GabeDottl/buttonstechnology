import styles from "./page.module.css";

export const metadata = {
  title: "Support & Contact | Buttons Technology",
  description:
    "Contact Buttons Technology for product support, Spark help, and distribution partnerships.",
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
    href: "mailto:hello@buttonstechnology.com?subject=Product%20support",
    label: "Email support",
  },
  {
    title: "Distribution partnerships",
    copy: "For partners with an audience, brand, content library, or channel that needs a consumer app.",
    href: "mailto:hello@buttonstechnology.com?subject=Distribution%20partnership",
    label: "Discuss a partnership",
  },
];

const faqs = [
  {
    question: "Where are Spark legal and support pages?",
    answer:
      "Spark has app-specific support, privacy, and terms pages under /spark/support, /spark/privacy, and /spark/terms.",
  },
  {
    question: "Can partners license or co-launch these products?",
    answer:
      "That is the point of this site. Email us with the audience, distribution channel, category, and commercial model you have in mind.",
  },
];

export default function SupportPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Support & contact</p>
        <h1>Get to the right inbox.</h1>
        <p>
          Product support, Spark help, and partnership conversations all start
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
