import ContactForm from "./ContactForm";
import styles from "./page.module.css";

export const metadata = {
  title: "Contact | Buttons Technology",
  description:
    "Contact Buttons Technology about distribution partnerships, product support, and studio inquiries.",
};

export default function ContactPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Contact</p>
        <h1>Start the conversation.</h1>
        <p>
          Tell us about the audience, channel, product category, or support
          issue. We will route it from there.
        </p>
      </section>

      <section className={styles.contactShell}>
        <ContactForm />

        <aside className={styles.aside}>
          <p className={styles.eyebrow}>Useful context</p>
          <h2>What helps us respond well.</h2>
          <ul>
            <li>Your audience, channel, or community size.</li>
            <li>The product category you want to explore.</li>
            <li>Whether this is a partnership, support, or general inquiry.</li>
            <li>Any timeline, launch window, or commercial constraints.</li>
          </ul>
        </aside>
      </section>
    </main>
  );
}
