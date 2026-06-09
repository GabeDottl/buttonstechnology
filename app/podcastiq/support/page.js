import Link from "next/link";
import styles from "../../support/page.module.css";

export const metadata = {
  title: "PodcastIQ Support | Buttons Technology",
  description:
    "Get help with PodcastIQ, the podcast workbench for timestamped Founder Briefs.",
};

const faqs = [
  {
    question: "What is PodcastIQ?",
    answer:
      "PodcastIQ is an iOS podcast workbench that turns selected episodes into timestamped Founder Briefs with takeaways, quotes, claims, references, and follow-up ideas.",
  },
  {
    question: "Does PodcastIQ replace my podcast player?",
    answer:
      "PodcastIQ includes podcast listening and queue tools, but its main job is helping you decide what is worth briefing and turning useful episodes into work-ready notes.",
  },
  {
    question: "How does AI processing work?",
    answer:
      "When you ask PodcastIQ to create a brief, the app may send episode metadata, audio or transcripts, and optional work context to PodcastIQ servers and selected transcription or AI providers so the requested brief can be generated and verified.",
  },
  {
    question: "Can I export full transcripts?",
    answer:
      "No. PodcastIQ v1 is built around sourced briefs, short excerpts, timestamps, and exports. Full transcript export is not part of the product.",
  },
  {
    question: "How do subscriptions and AI minutes work?",
    answer:
      "Paid access is expected to use Apple in-app purchases. PodcastIQ Pro includes a monthly AI-minute allowance for processing episodes. The final price and included minutes are shown in the app and by Apple at checkout.",
  },
  {
    question: "How do I delete processed data?",
    answer:
      "Use the data controls in PodcastIQ Settings where available, or contact support for deletion help. Some records may need to be retained for security, tax, accounting, legal, dispute, or App Store transaction reasons.",
  },
  {
    question: "Where can I read the legal pages?",
    answer: (
      <>
        Read the <Link href="/podcastiq/privacy">privacy policy</Link> and{" "}
        <Link href="/podcastiq/terms">terms of use</Link>.
      </>
    ),
  },
];

export default function PodcastIQSupportPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <p className={styles.eyebrow}>PodcastIQ Support</p>
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
            For PodcastIQ support, reach us at{" "}
            <a href="mailto:hello@buttonstechnology.com">
              hello@buttonstechnology.com
            </a>
            . Include your device model, iOS version, and a short description
            of what happened. Do not include private podcast transcripts,
            confidential company context, or sensitive personal information.
          </p>
        </div>
      </main>
    </div>
  );
}
