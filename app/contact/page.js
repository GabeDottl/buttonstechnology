import ContactForm from "./ContactForm";
import styles from "./page.module.css";

export const metadata = {
  title: "Contact | Buttons Technology",
  description:
    "Contact Buttons Technology about studio inquiries and product support.",
};

export default function ContactPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Contact</p>
        <h1>Start the conversation.</h1>
        <p>
          Tell us about the product category, support issue, or collaboration.
          We will route it from there.
        </p>
      </section>

      <section className={styles.contactShell}>
        <ContactForm />

        <aside className={styles.aside}>
          <p className={styles.eyebrow}>Useful context</p>
          <h2>What helps us respond well.</h2>
          <ul>
            <li>The product category or user problem you want to explore.</li>
            <li>Whether this is a studio, support, or collaboration inquiry.</li>
            <li>Your audience, channel, or community context if relevant.</li>
            <li>Any timeline, launch window, or commercial constraints.</li>
          </ul>
        </aside>
      </section>
    </main>
  );
}
