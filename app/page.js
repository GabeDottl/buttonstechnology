import Image from "next/image";
import styles from "./page.module.css";

const products = [
  {
    name: "Flourish",
    kicker: "meetflourish.xyz",
    href: "https://meetflourish.xyz",
    status: "App",
    summary:
      "An AI mentor for guided journaling, self-understanding, and behavior change.",
    productUse: "A reflective coaching loop for people investing in personal growth.",
    className: styles.flourish,
    shots: [
      {
        src: "/studio/flourish/home-mobile.png",
        alt: "Flourish mobile prompt selection screen.",
        width: 800,
        height: 1734,
      },
      {
        src: "/studio/flourish/report-mobile.png",
        alt: "Flourish mobile report screen.",
        width: 800,
        height: 1734,
      },
    ],
  },
  {
    name: "Daily Motivation",
    kicker: "Spark",
    href: "/spark",
    status: "iPhone app",
    summary:
      "A private daily motivation app with personalized quote ranking, reminders, and saved favorites.",
    productUse: "A calm consumer ritual for motivation, wellness, and self-improvement.",
    className: styles.spark,
    shots: [
      {
        src: "/studio/spark/feel-ready.png",
        alt: "Spark App Store screenshot showing a daily motivational quote.",
        width: 1320,
        height: 2868,
      },
    ],
  },
  {
    name: "Ascent",
    kicker: "Habit Building",
    href: "/ascent",
    status: "iPhone app",
    summary:
      "A habit tracker built around trajectory, not streak shame, with protocol-based routines.",
    productUse: "A behavior-change app for routines, recovery from dips, and long-term growth.",
    className: styles.ascent,
    shots: [
      {
        src: "/studio/ascent/ascent-today.png",
        alt: "Ascent iPhone screenshot showing a trajectory line.",
        width: 1206,
        height: 2622,
      },
    ],
  },
];

const outcomes = [
  "Consumer apps for self-development",
  "Native iOS craft and App Store operations",
  "Retention, monetization, and content loops",
  "Growth, motivation, and well-being products",
];

const model = [
  {
    step: "01",
    title: "Validate",
    copy: "Find the user job, define the daily loop, and test the smallest app wedge worth building.",
  },
  {
    step: "02",
    title: "Build",
    copy: "Ship the native app, onboarding, payments, analytics, screenshots, and support surface.",
  },
  {
    step: "03",
    title: "Launch",
    copy: "Package the product for App Store conversion, a clear story, and real-world use.",
  },
  {
    step: "04",
    title: "Grow",
    copy: "Use usage data, content systems, pricing tests, and product iteration to improve the loop.",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <main>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Buttons Technology</p>
            <h1>An app studio for self-development, growth, and well-being.</h1>
            <p>
              We design, build, launch, and grow consumer apps that help people
              understand themselves, build better routines, and keep going.
            </p>
            <div className={styles.heroActions}>
              <a href="/contact" className={styles.primaryCta}>
                Start the conversation
              </a>
              <a href="#products" className={styles.secondaryCta}>
                See products
              </a>
            </div>
          </div>
          <div className={styles.heroStage} aria-label="Selected app screens">
            <figure className={`${styles.phoneFrame} ${styles.heroPhoneOne}`}>
              <Image
                src="/studio/spark/feel-ready.png"
                alt="Spark daily motivation app screen."
                width={1320}
                height={2868}
                priority
                sizes="(max-width: 760px) 44vw, 260px"
              />
            </figure>
            <figure className={`${styles.phoneFrame} ${styles.heroPhoneTwo}`}>
              <Image
                src="/studio/ascent/ascent-today.png"
                alt="Ascent habit trajectory app screen."
                width={1206}
                height={2622}
                priority
                sizes="(max-width: 760px) 44vw, 260px"
              />
            </figure>
            <figure className={`${styles.phoneFrame} ${styles.heroPhoneThree}`}>
              <Image
                src="/studio/flourish/report-mobile.png"
                alt="Flourish report screen."
                width={800}
                height={1734}
                priority
                sizes="(max-width: 760px) 44vw, 220px"
              />
            </figure>
          </div>
        </section>

        <section className={styles.proofStrip} aria-label="Studio capabilities">
          {outcomes.map((outcome) => (
            <p key={outcome}>{outcome}</p>
          ))}
        </section>

        <section className={`${styles.section} ${styles.focusSection}`}>
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Studio focus</p>
            <h2>Apps built around daily use, not vague transformation.</h2>
            <p>
              The work is not just UI. A useful self-development app needs a
              clear promise, a durable loop, careful language, and enough
              product depth to become part of someone&apos;s real life.
            </p>
          </div>
          <div className={styles.outcomeGrid}>
            <article>
              <span>Human fit</span>
              <h3>Products tied to real behavior.</h3>
              <p>
                We work in categories where people already seek change:
                motivation, habits, coaching, journaling, wellness, and
                practical self-improvement.
              </p>
            </article>
            <article>
              <span>Daily loop</span>
              <h3>Rituals with retention built in.</h3>
              <p>
                Reminders, saved state, content systems, streak-adjacent
                progress, and recovery moments are part of the product, not
                afterthoughts.
              </p>
            </article>
            <article>
              <span>Operating depth</span>
              <h3>Strategy, native build, store ops, and growth.</h3>
              <p>
                We move from concept to App Store presence, then keep improving
                the product through usage, pricing, content, and conversion
                data.
              </p>
            </article>
          </div>
        </section>

        <section className={styles.section} id="products">
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Selected products</p>
            <h2>Built around daily use, not portfolio theater.</h2>
            <p>
              Each product has a distinct user need, daily ritual, and growth
              loop.
            </p>
          </div>

          <div className={styles.productGrid}>
            {products.map((product) => (
              <article
                className={`${styles.productCard} ${product.className}`}
                key={product.name}
              >
                <div className={styles.productCopy}>
                  <div className={styles.productMeta}>
                    <span>{product.kicker}</span>
                    <span>{product.status}</span>
                  </div>
                  <h3>{product.name}</h3>
                  <p>{product.summary}</p>
                  <p className={styles.productUse}>{product.productUse}</p>
                  <a href={product.href} className={styles.textLink}>
                    View product
                  </a>
                </div>
                <div className={styles.productScreens} aria-hidden="true">
                  {product.shots.map((shot, index) => (
                    <figure className={styles.phoneFrame} key={shot.src}>
                      <Image
                        src={shot.src}
                        alt={shot.alt}
                        width={shot.width}
                        height={shot.height}
                        sizes="(max-width: 760px) 44vw, 180px"
                      />
                    </figure>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={`${styles.section} ${styles.modelSection}`}>
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Operating model</p>
            <h2>Validate, build, launch, grow.</h2>
          </div>
          <div className={styles.modelGrid}>
            {model.map((item) => (
              <article key={item.step}>
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.ctaBand}>
          <div>
            <p className={styles.eyebrow}>Distribution partnerships</p>
            <h2>Bring the audience. We will bring the product machine.</h2>
          </div>
          <a href="/contact" className={styles.primaryCta}>
            Start the conversation
          </a>
        </section>
      </main>
    </div>
  );
}
