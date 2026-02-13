import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <p className={styles.eyebrow}>Buttons Technology</p>
        <h1>Software that adapts to you.</h1>
        <p className={styles.copy}>
          Buttons Technology builds personal AI tools that work the way you
          think. Our first product is Clawsy — an AI assistant that creates
          real apps tailored to how you live and work.
        </p>
        <div className={styles.actions}>
          <Link href="/clawsy" className={styles.cta}>
            Meet Clawsy &rarr;
          </Link>
        </div>
      </main>
    </div>
  );
}
