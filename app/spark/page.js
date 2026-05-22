import Image from "next/image";
import styles from "./page.module.css";

export const metadata = {
  title: "Spark: Daily Motivation | Buttons Technology",
  description:
    "Spark is a private iPhone app for personalized daily quotes, local reminders, and saved favorites.",
};

const previews = [
  {
    src: "/spark/01-feel-ready.png",
    alt: "Spark screenshot showing a daily motivational quote.",
  },
  {
    src: "/spark/06-learns-what-you-need.png",
    alt: "Spark screenshot showing personalized quote recommendations.",
  },
  {
    src: "/spark/09-reminders-on-cue.png",
    alt: "Spark screenshot showing reminder settings.",
  },
  {
    src: "/spark/10-keep-what-hits-home.png",
    alt: "Spark screenshot showing saved favorite quotes.",
  },
];

export default function SparkPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Spark: Daily Motivation for iPhone</p>
          <h1>Daily motivation that learns what keeps you going.</h1>
          <p className={styles.heroCopy}>
            Start with one thoughtful quote, then like, skip, and save your way
            to a daily ritual that feels more personal each morning.
          </p>
          <div className={styles.actions}>
            <a className={styles.primaryButton} href="#download">
              Get Spark
            </a>
            <a className={styles.secondaryButton} href="#how">
              See how it works
            </a>
          </div>
        </div>
      </section>

      <section className={styles.proofStrip} aria-label="Product highlights">
        <div className={styles.proofItem}>
          <strong>No account</strong>
          <span>Open Spark and start. No signup before the first quote.</span>
        </div>
        <div className={styles.proofItem}>
          <strong>No ads</strong>
          <span>A quiet daily ritual, not another attention feed.</span>
        </div>
        <div className={styles.proofItem}>
          <strong>Private taste</strong>
          <span>Likes, skips, saves, and preferences stay on your iPhone.</span>
        </div>
        <div className={styles.proofItem}>
          <strong>On cue</strong>
          <span>Morning and night reminders bring your quote back.</span>
        </div>
      </section>

      <section className={styles.section} id="how">
        <div className={styles.sectionHeader}>
          <p className={styles.sectionKicker}>How Spark helps</p>
          <h2>One useful line for the day ahead.</h2>
          <p>
            Spark is built for the moment before the day starts: a quote that
            gives you focus, courage, calm, discipline, or a reason to begin
            again.
          </p>
        </div>
        <div className={styles.previewRow} aria-label="Spark app screenshots">
          {previews.map((preview) => (
            <figure className={styles.previewArt} key={preview.src}>
              <Image
                src={preview.src}
                alt={preview.alt}
                width={414}
                height={900}
                sizes="(max-width: 720px) 82vw, (max-width: 1020px) 44vw, 24vw"
              />
            </figure>
          ))}
        </div>
      </section>

      <section className={`${styles.section} ${styles.altSection}`}>
        <div className={styles.story}>
          <div className={styles.textBlock}>
            <p className={styles.sectionKicker}>Personal without an account</p>
            <h2>Quotes shaped by your taste.</h2>
            <p>
              Choose the themes and voices you care about, then let your
              reactions help Spark find the next quote worth carrying.
            </p>
            <div className={styles.featureList}>
              <article className={styles.feature}>
                <span className={styles.marker}>1</span>
                <div>
                  <h3>Choose what kind of lift you need.</h3>
                  <p>
                    Focus, calm, confidence, hope, discipline, resilience, and
                    more.
                  </p>
                </div>
              </article>
              <article className={styles.feature}>
                <span className={styles.marker}>2</span>
                <div>
                  <h3>React in seconds.</h3>
                  <p>
                    Like, skip, dislike, or save. Each signal helps tomorrow
                    feel better chosen.
                  </p>
                </div>
              </article>
              <article className={styles.feature}>
                <span className={styles.marker}>3</span>
                <div>
                  <h3>Keep what hits home.</h3>
                  <p>
                    Saved favorites give you a private library for harder days
                    and fresh starts.
                  </p>
                </div>
              </article>
            </div>
          </div>
          <figure className={`${styles.previewArt} ${styles.singlePreview}`}>
            <Image
              src="/spark/07-choose-voices.png"
              alt="Spark screenshot showing voice selection."
              width={414}
              height={900}
              sizes="(max-width: 720px) 82vw, 340px"
            />
          </figure>
        </div>
      </section>

      <section className={`${styles.section} ${styles.darkSection}`} id="privacy">
        <div className={styles.sectionHeader}>
          <p className={styles.sectionKicker}>Private by design</p>
          <h2>Your quote habit should not become a profile in the cloud.</h2>
          <p>
            Spark is designed for a simple promise: no account, no ads, no
            cross-app tracking, and no social feed around your saved quotes.
          </p>
        </div>
        <div className={styles.privacyGrid}>
          <article className={styles.privacyPoint}>
            <h3>Your taste stays local.</h3>
            <p>
              Your preferences, reactions, saved quotes, and recommendation
              history stay on your iPhone.
            </p>
          </article>
          <article className={styles.privacyPoint}>
            <h3>The ritual stays quiet.</h3>
            <p>
              Local reminders bring Spark back at the times you choose, without
              turning it into a feed.
            </p>
          </article>
          <article className={styles.privacyPoint}>
            <h3>The app stays focused.</h3>
            <p>
              No accounts, ads, or social pressure. Just one good thought and a
              place to keep it.
            </p>
          </article>
        </div>
      </section>

      <section className={`${styles.section} ${styles.final}`} id="download">
        <div className={styles.finalInner}>
          <Image
            src="/spark/icon.png"
            alt="Spark app icon"
            width={256}
            height={256}
            loading="eager"
          />
          <h2>Start the day with a quote that feels closer to you.</h2>
          <p>
            Spark: Daily Motivation is made for iPhone users who want a calmer,
            more personal quote ritual without ads, accounts, or tracking.
          </p>
          <span className={styles.storeBadge} aria-label="Available on the App Store">
            Available on the App Store
          </span>
        </div>
      </section>
    </main>
  );
}
