import styles from "../../privacy/page.module.css";

export const metadata = {
  title: "PodcastIQ Privacy Policy | Buttons Technology",
  description:
    "Privacy policy for PodcastIQ, including podcast processing, AI summaries, subscription validation, data retention, and deletion choices.",
};

export default function PodcastIQPrivacyPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <p className={styles.eyebrow}>PodcastIQ</p>
        <h1>Privacy Policy</h1>
        <p className={styles.effective}>Effective date: June 9, 2026</p>

        <div className={styles.body}>
          <section className={styles.summary}>
            <p>
              PodcastIQ turns selected podcast episodes into timestamped
              Founder Briefs. To do that, PodcastIQ may send podcast metadata,
              episode audio or transcripts, optional work context, processing
              records, and subscription status to PodcastIQ servers and service
              providers. We do not sell personal data, run third-party ads in
              the app, or track you across other companies&apos; apps or websites.
            </p>
          </section>

          <section>
            <h2>Information You Provide Or Select</h2>
            <p>
              PodcastIQ may process podcast feeds, OPML imports, podcast
              subscriptions, episode URLs, Apple Podcasts links, RSS feed links,
              search queries, selected episodes, optional company or work
              context, generated briefs, saved quotes, notes, follow-up items,
              exports, deletion requests, and support messages.
            </p>
            <p>
              Do not submit private, confidential, paywalled, restricted,
              infringing, or unauthorized audio unless you have the right to use
              it with PodcastIQ.
            </p>
          </section>

          <section>
            <h2>Podcast Audio, Transcripts, And AI Processing</h2>
            <p>
              When you ask PodcastIQ to create a brief, PodcastIQ may fetch
              episode metadata, audio, show notes, or transcripts from supported
              podcast sources. PodcastIQ may send episode audio, transcripts,
              metadata, and optional work context to our servers and selected
              transcription, AI, verification, hosting, and infrastructure
              providers so the requested brief can be generated, verified,
              stored, displayed, exported, and deleted.
            </p>
            <p>
              Full transcript export is not part of PodcastIQ v1. Transcript
              data is used to create and verify brief items, timestamps, claims,
              references, and short excerpts.
            </p>
          </section>

          <section>
            <h2>Local Storage</h2>
            <p>
              PodcastIQ may store imported feeds, selected episodes, completed
              Founder Briefs, saved items, local search indexes, processing
              status, transcript cache metadata, subscription display state, and
              pending deletion or export actions on your device.
            </p>
            <p>
              Local transcript cache retention defaults to 30 days or until the
              related brief is deleted, whichever comes first.
            </p>
          </section>

          <section>
            <h2>Backend Storage And Retention</h2>
            <p>
              PodcastIQ servers may store processed briefs, job status, usage
              balances, entitlement status, deletion requests, export records,
              transcript artifacts, and operational logs needed to provide the
              service, prevent abuse, debug failures, and honor deletion
              requests.
            </p>
            <p>
              Backend transcript and provider artifacts follow the stricter of
              provider defaults, legal review, and user deletion requests. We
              may retain limited records when needed for security, fraud
              prevention, accounting, tax, legal compliance, dispute handling,
              or App Store transaction records.
            </p>
          </section>

          <section>
            <h2>Purchases And Subscriptions</h2>
            <p>
              PodcastIQ may offer paid access through in-app purchases processed
              by Apple. Apple processes payment information. We do not receive
              your full payment card number. Apple may provide transaction
              identifiers, subscription status, refund status, renewal status,
              and related purchase metadata needed to unlock access, validate
              usage, restore purchases, handle refunds, and understand App Store
              performance.
            </p>
          </section>

          <section>
            <h2>Analytics And Diagnostics</h2>
            <p>
              PodcastIQ may collect product interaction, usage, performance,
              crash, and diagnostic data to operate, secure, debug, and improve
              the service. Raw transcripts and company context must not be
              included in analytics. PodcastIQ does not use analytics for
              cross-app tracking or targeted advertising.
            </p>
          </section>

          <section>
            <h2>Information We Do Not Use PodcastIQ For</h2>
            <ul>
              <li>No sale of personal data.</li>
              <li>No third-party ads in the app.</li>
              <li>No cross-app tracking.</li>
              <li>No advertising identifiers for targeted advertising.</li>
              <li>No full transcript export in v1.</li>
              <li>
                No promise that AI providers never train on submitted data
                unless provider contracts and settings verify that promise.
              </li>
            </ul>
          </section>

          <section id="choices">
            <h2>Your Choices</h2>
            <p>
              You can delete processed podcast data where the app provides that
              control, delete the app from your device, manage or cancel
              subscriptions through your Apple App Store account, avoid entering
              optional company context, or contact us to request privacy help.
            </p>
            <p>
              Deletion requests may take time to propagate through backend
              systems and providers. Some records may be retained where required
              for security, fraud prevention, accounting, tax, legal compliance,
              dispute handling, or App Store transaction records.
            </p>
          </section>

          <section>
            <h2>Service Providers</h2>
            <p>
              We may share information with vendors that help operate
              PodcastIQ, including Apple, hosting and infrastructure providers,
              transcription providers, AI providers, verification providers,
              analytics or diagnostics providers, email and support providers,
              and security tools. These providers may access information only as
              needed to provide their services to us.
            </p>
          </section>

          <section>
            <h2>Children</h2>
            <p>
              PodcastIQ is not directed to children under 13. If you believe a
              child has provided personal information to us, contact us and we
              will take appropriate steps to delete it.
            </p>
          </section>

          <section>
            <h2>Security</h2>
            <p>
              We use administrative, technical, and organizational safeguards
              designed to protect PodcastIQ data. No system is perfectly secure.
              You are responsible for protecting your device, Apple account, and
              any exports you create.
            </p>
          </section>

          <section>
            <h2>Changes</h2>
            <p>
              We may update this policy as PodcastIQ changes. The effective date
              at the top of this page shows when the current version took
              effect.
            </p>
          </section>

          <section>
            <h2>Contact</h2>
            <p>
              Questions or requests can be sent to{" "}
              <a href="mailto:hello@buttonstechnology.com">
                hello@buttonstechnology.com
              </a>
              .
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
