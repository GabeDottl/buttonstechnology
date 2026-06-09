import Link from "next/link";
import styles from "../../terms/page.module.css";

export const metadata = {
  title: "PodcastIQ Terms of Use | Buttons Technology",
  description:
    "Terms of use for PodcastIQ by Buttons Technology, LLC.",
};

export default function PodcastIQTermsPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <p className={styles.eyebrow}>PodcastIQ</p>
        <h1>Terms of Use</h1>
        <p className={styles.effective}>Effective date: June 9, 2026</p>

        <div className={styles.body}>
          <section>
            <h2>Agreement To Terms</h2>
            <p>
              These Terms of Use govern your use of PodcastIQ, an iOS app and
              related service provided by Buttons Technology, LLC (&quot;we,&quot;
              &quot;us,&quot; or &quot;our&quot;). By downloading, accessing, or using
              PodcastIQ, you agree to these terms. If you do not agree, do not
              use PodcastIQ.
            </p>
          </section>

          <section>
            <h2>What PodcastIQ Does</h2>
            <p>
              PodcastIQ helps users turn selected podcast episodes into
              source-backed Founder Briefs with timestamps, short excerpts,
              claims, references, and follow-up ideas. PodcastIQ is an
              informational productivity tool. It is not legal, financial,
              investment, medical, mental health, tax, or other professional
              advice.
            </p>
          </section>

          <section>
            <h2>Your Responsibilities</h2>
            <p>
              You are responsible for how you use PodcastIQ and any briefs or
              exports, the podcast feeds, links, OPML files, context, and other
              information you submit, confirming that you have the rights needed
              to submit and process content, reviewing AI-generated output
              before relying on it, and keeping your device, Apple account, and
              exports secure.
            </p>
            <p>
              Do not submit private, confidential, paywalled, restricted,
              infringing, illegal, harmful, or unauthorized content.
            </p>
          </section>

          <section>
            <h2>Podcast Content And Copyright</h2>
            <p>
              PodcastIQ is designed for user-directed processing of supported
              podcast sources. PodcastIQ does not grant you rights in
              third-party podcast content. PodcastIQ may generate short excerpts
              to support citations and source-backed claims, but full transcript
              export is not part of v1.
            </p>
            <p>
              Generated quote excerpts are capped by product policy and should
              be used only where lawful. You are responsible for how you share
              or reuse any excerpt, brief, export, or citation outside the app.
              Copyright concerns can be sent to{" "}
              <a href="mailto:hello@buttonstechnology.com">
                hello@buttonstechnology.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2>AI Output</h2>
            <p>
              PodcastIQ uses automated systems and service providers to
              transcribe, summarize, extract, and verify information. AI output
              can be incomplete, outdated, inaccurate, misattributed, or
              unsupported. Timestamps, claims, quotes, references, and follow-up
              ideas should be checked against the original source before relying
              on them.
            </p>
          </section>

          <section>
            <h2>Accounts, Device Identity, And Usage</h2>
            <p>
              PodcastIQ may use device credentials, entitlement records,
              server-side job records, and Apple purchase information to provide
              access, validate subscriptions, meter AI usage, prevent abuse,
              restore purchases, and operate the service.
            </p>
            <p>
              You may not interfere with PodcastIQ servers, bypass usage limits,
              abuse provider resources, scrape the service, reverse-engineer
              restricted parts of the service, or use PodcastIQ to violate the
              rights of others.
            </p>
          </section>

          <section>
            <h2>Paid Access, Subscriptions, And AI Minutes</h2>
            <p>
              PodcastIQ may offer paid access through in-app purchases processed
              by Apple. PodcastIQ Pro is expected to include a recurring
              subscription period and an AI-minute allowance for processing
              podcast episodes. The final plan names, prices, trial terms, usage
              limits, reset dates, and included features are the terms shown in
              the app and by Apple at checkout.
            </p>
            <p>
              Subscriptions are billed through your Apple account and renew
              automatically unless canceled before the end of the current billing
              period. You can manage or cancel subscriptions in your App Store
              account settings. We cannot cancel App Store subscriptions for you
              directly. Restore Purchases can be used to refresh access on a
              device.
            </p>
          </section>

          <section>
            <h2>Refunds</h2>
            <p>
              Refund requests for App Store purchases are handled by Apple under
              Apple&apos;s policies. We do not receive your full payment card
              information and cannot issue App Store refunds directly.
            </p>
          </section>

          <section>
            <h2>Privacy</h2>
            <p>
              Our collection and use of information is described in the{" "}
              <Link href="/podcastiq/privacy">PodcastIQ Privacy Policy</Link>.
            </p>
          </section>

          <section>
            <h2>Intellectual Property</h2>
            <p>
              PodcastIQ, including its software, design, interfaces, branding,
              workflows, and original content, is owned by Buttons Technology,
              LLC or its licensors and is protected by intellectual property
              laws. You may not copy, modify, distribute, reverse-engineer, or
              resell any part of PodcastIQ except as permitted by law.
            </p>
          </section>

          <section>
            <h2>Availability And Changes</h2>
            <p>
              PodcastIQ may change, suspend, or discontinue features, providers,
              processing limits, supported sources, prices, or plans. We may
              refuse or limit processing for unsupported, unsafe, abusive,
              restricted, or legally risky sources.
            </p>
          </section>

          <section>
            <h2>Disclaimers</h2>
            <p>
              PodcastIQ is provided &quot;as is&quot; and &quot;as available&quot;
              without warranties of any kind. We do not guarantee that
              PodcastIQ will be uninterrupted, error-free, secure, or that every
              source, transcript, brief, timestamp, excerpt, claim, reference,
              or export will be accurate or available.
            </p>
          </section>

          <section>
            <h2>Limitation Of Liability</h2>
            <p>
              To the fullest extent permitted by law, Buttons Technology, LLC
              will not be liable for indirect, incidental, special,
              consequential, exemplary, or punitive damages arising from or
              related to PodcastIQ. Our total liability for any claim related to
              PodcastIQ will not exceed the amount you paid us for PodcastIQ in
              the twelve months before the claim.
            </p>
          </section>

          <section>
            <h2>Changes To Terms</h2>
            <p>
              We may update these terms as PodcastIQ changes. Continued use of
              PodcastIQ after updated terms are posted means you accept the
              updated terms.
            </p>
          </section>

          <section>
            <h2>Contact</h2>
            <p>
              Questions about these terms can be sent to{" "}
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
