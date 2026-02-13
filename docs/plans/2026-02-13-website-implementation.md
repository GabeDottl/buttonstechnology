# Buttons Technology Website Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a professional multi-page website for Buttons Technology that passes Apple App Store review and establishes consumer trust.

**Architecture:** Next.js App Router with shared layout components (Nav, Footer). CSS Modules for page-specific styles, shared variables in globals.css. Static pages, no API routes or dynamic content.

**Tech Stack:** Next.js 16, React 19, CSS Modules, Geist font

---

### Task 1: Shared CSS foundation

**Files:**
- Modify: `app/globals.css`

**Step 1: Update globals.css**

Replace globals.css with shared design tokens and base styles that all pages use. Remove dark mode (the warm cream aesthetic is light-only). Add shared CSS custom properties for the design system.

```css
:root {
  --background: #f7f3ec;
  --foreground: #1f1f1f;
  --panel: #ffffff;
  --accent: #0f766e;
  --accent-hover: #0d635b;
  --muted: #4b4b4b;
  --subtle: #5a5a5a;
  --border: #e9e4db;
  --max-width: 760px;
  --gradient: radial-gradient(circle at 20% 20%, #fff9ed 0%, #f7f3ec 45%, #ede7dd 100%);
}

html, body {
  max-width: 100vw;
  overflow-x: hidden;
}

body {
  color: var(--foreground);
  background: var(--gradient);
  font-family: var(--font-geist-sans), Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

a {
  color: inherit;
  text-decoration: none;
}
```

**Step 2: Commit**

```bash
git add app/globals.css
git commit -m "refactor: update globals.css with shared design tokens"
```

---

### Task 2: Nav component

**Files:**
- Create: `app/components/Nav.js`
- Create: `app/components/Nav.module.css`

**Step 1: Create Nav component**

```jsx
import Link from "next/link";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          Buttons Technology
        </Link>
        <div className={styles.links}>
          <Link href="/clawsy">Clawsy</Link>
          <Link href="/about">About</Link>
          <Link href="/support">Support</Link>
        </div>
      </div>
    </nav>
  );
}
```

**Step 2: Create Nav styles**

```css
.nav {
  padding: 20px 24px;
  font-family: var(--font-geist-sans);
}

.inner {
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-weight: 700;
  font-size: 15px;
  letter-spacing: -0.01em;
  color: var(--foreground);
}

.links {
  display: flex;
  gap: 28px;
  font-size: 14px;
  color: var(--subtle);
}

.links a:hover {
  color: var(--foreground);
}

@media (max-width: 600px) {
  .links {
    gap: 20px;
    font-size: 13px;
  }
}
```

**Step 3: Commit**

```bash
git add app/components/Nav.js app/components/Nav.module.css
git commit -m "feat: add Nav component"
```

---

### Task 3: Footer component

**Files:**
- Create: `app/components/Footer.js`
- Create: `app/components/Footer.module.css`

**Step 1: Create Footer component**

```jsx
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} Buttons Technology, LLC
        </p>
        <div className={styles.links}>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
          <a href="mailto:hello@buttonstechnology.com">Contact</a>
        </div>
      </div>
    </footer>
  );
}
```

**Step 2: Create Footer styles**

```css
.footer {
  padding: 32px 24px;
  margin-top: auto;
  font-family: var(--font-geist-sans);
}

.inner {
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 13px;
  color: var(--subtle);
}

.links {
  display: flex;
  gap: 24px;
}

.links a:hover {
  color: var(--foreground);
}

.copyright {
  color: var(--subtle);
}

@media (max-width: 600px) {
  .inner {
    flex-direction: column;
    gap: 12px;
    text-align: center;
  }
}
```

**Step 3: Commit**

```bash
git add app/components/Footer.js app/components/Footer.module.css
git commit -m "feat: add Footer component"
```

---

### Task 4: Update layout with Nav and Footer

**Files:**
- Modify: `app/layout.js`

**Step 1: Update layout**

Add Nav and Footer to the root layout. Update metadata description.

```jsx
import { Geist, Geist_Mono } from "next/font/google";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Buttons Technology",
  description: "Personal AI tools that work the way you think.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
```

**Step 2: Commit**

```bash
git add app/layout.js
git commit -m "feat: add Nav and Footer to root layout"
```

---

### Task 5: Rework homepage

**Files:**
- Modify: `app/page.js`
- Modify: `app/page.module.css`

**Step 1: Update homepage content**

```jsx
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
```

**Step 2: Update homepage styles**

Keep the existing card design. Add CTA button styles.

```css
.page {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 24px;
  font-family: var(--font-geist-sans);
}

.main {
  width: 100%;
  max-width: var(--max-width);
  border-radius: 20px;
  background-color: var(--panel);
  border: 1px solid var(--border);
  box-shadow: 0 18px 40px rgba(22, 22, 22, 0.08);
  padding: 56px 42px;
  display: grid;
  gap: 20px;
}

.main h1 {
  max-width: 480px;
  font-size: 40px;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: var(--foreground);
}

.eyebrow {
  color: var(--accent);
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 0.13em;
  font-weight: 700;
}

.copy {
  max-width: 560px;
  font-size: 18px;
  line-height: 1.7;
  color: var(--muted);
}

.actions {
  display: flex;
  gap: 16px;
  align-items: center;
  margin-top: 4px;
}

.cta {
  font-size: 15px;
  font-weight: 600;
  color: var(--accent);
  border-bottom: 1.5px solid var(--accent);
  padding-bottom: 1px;
}

.cta:hover {
  color: var(--accent-hover);
  border-color: var(--accent-hover);
}

@media (max-width: 600px) {
  .main {
    padding: 36px 24px;
  }

  .main h1 {
    font-size: 31px;
  }

  .copy {
    font-size: 17px;
  }
}
```

**Step 3: Commit**

```bash
git add app/page.js app/page.module.css
git commit -m "feat: rework homepage with new messaging and CTA"
```

---

### Task 6: Clawsy product page

**Files:**
- Create: `app/clawsy/page.js`
- Create: `app/clawsy/page.module.css`

**Step 1: Create product page**

```jsx
import styles from "./page.module.css";

export const metadata = {
  title: "Clawsy | Buttons Technology",
  description: "Your AI assistant that builds apps for you.",
};

export default function ClawsyPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.hero}>
          <p className={styles.eyebrow}>Clawsy</p>
          <h1>Your AI assistant that builds apps for you.</h1>
          <p className={styles.subtitle}>
            Clawsy is a personal AI that doesn&apos;t just answer questions — it
            creates real tools tailored to how you live and work.
          </p>
        </div>

        <div className={styles.features}>
          <div className={styles.feature}>
            <h2>Ask for anything.</h2>
            <p>
              Describe what you need. A journal, a habit tracker, a grocery
              list. Clawsy builds it as a real app on your device — not a
              template, not a chatbot response, a working tool.
            </p>
          </div>

          <div className={styles.feature}>
            <h2>Chat or use the app.</h2>
            <p>
              Two ways to interact. Talk to Clawsy in conversation, or use the
              apps it creates. Same data, your choice. Switch between them
              whenever it makes sense.
            </p>
          </div>

          <div className={styles.feature}>
            <h2>Works offline.</h2>
            <p>
              Your apps run locally on your device. No internet connection
              needed to use the tools Clawsy builds for you. Your data stays
              with you.
            </p>
          </div>
        </div>

        <div className={styles.closing}>
          <p>Available soon on iOS.</p>
        </div>
      </main>
    </div>
  );
}
```

**Step 2: Create product page styles**

```css
.page {
  flex: 1;
  padding: 24px;
  font-family: var(--font-geist-sans);
}

.main {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 40px 0 60px;
}

.hero {
  margin-bottom: 56px;
}

.eyebrow {
  color: var(--accent);
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 0.13em;
  font-weight: 700;
  margin-bottom: 16px;
}

.hero h1 {
  font-size: 38px;
  line-height: 1.15;
  letter-spacing: -0.03em;
  color: var(--foreground);
  max-width: 580px;
  margin-bottom: 20px;
}

.subtitle {
  font-size: 18px;
  line-height: 1.7;
  color: var(--muted);
  max-width: 560px;
}

.features {
  display: grid;
  gap: 40px;
  margin-bottom: 56px;
}

.feature {
  background-color: var(--panel);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 36px 32px;
  box-shadow: 0 8px 24px rgba(22, 22, 22, 0.05);
}

.feature h2 {
  font-size: 22px;
  letter-spacing: -0.02em;
  color: var(--foreground);
  margin-bottom: 10px;
}

.feature p {
  font-size: 17px;
  line-height: 1.7;
  color: var(--muted);
}

.closing {
  text-align: center;
  font-size: 16px;
  color: var(--subtle);
  font-weight: 500;
}

@media (max-width: 600px) {
  .hero h1 {
    font-size: 30px;
  }

  .subtitle {
    font-size: 17px;
  }

  .feature {
    padding: 28px 24px;
  }
}
```

**Step 3: Commit**

```bash
git add app/clawsy/page.js app/clawsy/page.module.css
git commit -m "feat: add Clawsy product page"
```

---

### Task 7: About page

**Files:**
- Create: `app/about/page.js`
- Create: `app/about/page.module.css`

**Step 1: Create about page**

```jsx
import styles from "./page.module.css";

export const metadata = {
  title: "About | Buttons Technology",
  description: "Building personal AI tools with intention.",
};

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <p className={styles.eyebrow}>About</p>
        <h1>Built with intention.</h1>
        <div className={styles.body}>
          <p>
            Buttons Technology is a software company focused on building
            personal AI tools that respect your time, your data, and your
            intelligence.
          </p>
          <p>
            We believe software should adapt to people — not the other way
            around. Most tools force you into someone else&apos;s workflow. We
            think your tools should learn yours.
          </p>
          <p>
            Our first product is Clawsy, an AI assistant for iOS that creates
            real applications tailored to how you live and work. No templates,
            no one-size-fits-all. Just tools that fit.
          </p>
          <p className={styles.founded}>Founded 2026.</p>
        </div>
      </main>
    </div>
  );
}
```

**Step 2: Create about page styles**

```css
.page {
  flex: 1;
  padding: 24px;
  font-family: var(--font-geist-sans);
}

.main {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 40px 0 60px;
}

.eyebrow {
  color: var(--accent);
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 0.13em;
  font-weight: 700;
  margin-bottom: 16px;
}

.main h1 {
  font-size: 38px;
  line-height: 1.15;
  letter-spacing: -0.03em;
  color: var(--foreground);
  margin-bottom: 32px;
}

.body {
  display: grid;
  gap: 18px;
  font-size: 18px;
  line-height: 1.7;
  color: var(--muted);
  max-width: 600px;
}

.founded {
  margin-top: 16px;
  font-size: 14px;
  color: var(--subtle);
  font-weight: 500;
}

@media (max-width: 600px) {
  .main h1 {
    font-size: 30px;
  }

  .body {
    font-size: 17px;
  }
}
```

**Step 3: Commit**

```bash
git add app/about/page.js app/about/page.module.css
git commit -m "feat: add About page"
```

---

### Task 8: Support page

**Files:**
- Create: `app/support/page.js`
- Create: `app/support/page.module.css`

**Step 1: Create support page**

```jsx
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Support | Buttons Technology",
  description: "Get help with Clawsy and Buttons Technology products.",
};

const faqs = [
  {
    question: "What is Clawsy?",
    answer:
      "Clawsy is a personal AI assistant for iOS that creates real apps tailored to how you live and work. Instead of forcing you into pre-built tools, Clawsy builds custom ones based on what you need.",
  },
  {
    question: "How do I get started?",
    answer: "Clawsy is coming soon to the iOS App Store. Once available, download the app and start by telling Clawsy what you need.",
  },
  {
    question: "Is my data private?",
    answer:
      "Yes. We collect as little data as possible and never sell personal information. Apps that Clawsy builds run locally on your device. See our privacy policy for details.",
  },
  {
    question: "How do I contact support?",
    answer: "Send us an email at hello@buttonstechnology.com. We read every message and respond as quickly as we can.",
  },
];

export default function SupportPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <p className={styles.eyebrow}>Support</p>
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
            For anything else, reach us at{" "}
            <a href="mailto:hello@buttonstechnology.com">
              hello@buttonstechnology.com
            </a>
            .
          </p>
        </div>
      </main>
    </div>
  );
}
```

**Step 2: Create support page styles**

```css
.page {
  flex: 1;
  padding: 24px;
  font-family: var(--font-geist-sans);
}

.main {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 40px 0 60px;
}

.eyebrow {
  color: var(--accent);
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 0.13em;
  font-weight: 700;
  margin-bottom: 16px;
}

.main h1 {
  font-size: 38px;
  line-height: 1.15;
  letter-spacing: -0.03em;
  color: var(--foreground);
  margin-bottom: 40px;
}

.faqs {
  display: grid;
  gap: 24px;
  margin-bottom: 48px;
}

.faq {
  background-color: var(--panel);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 28px 28px;
  box-shadow: 0 8px 24px rgba(22, 22, 22, 0.05);
}

.faq h2 {
  font-size: 17px;
  font-weight: 600;
  color: var(--foreground);
  margin-bottom: 8px;
}

.faq p {
  font-size: 16px;
  line-height: 1.7;
  color: var(--muted);
}

.contact {
  border-top: 1px solid var(--border);
  padding-top: 32px;
}

.contact h2 {
  font-size: 20px;
  color: var(--foreground);
  margin-bottom: 8px;
}

.contact p {
  font-size: 16px;
  line-height: 1.7;
  color: var(--muted);
}

.contact a {
  color: var(--accent);
  border-bottom: 1px solid var(--accent);
}

.contact a:hover {
  color: var(--accent-hover);
}

@media (max-width: 600px) {
  .main h1 {
    font-size: 30px;
  }

  .faq {
    padding: 24px 20px;
  }
}
```

**Step 3: Commit**

```bash
git add app/support/page.js app/support/page.module.css
git commit -m "feat: add Support page with FAQ"
```

---

### Task 9: Terms of Service page

**Files:**
- Create: `app/terms/page.js`
- Create: `app/terms/page.module.css`

**Step 1: Create terms page**

Standard terms of service covering app usage, intellectual property, liability, and termination. Professional legal language, not overly aggressive.

**Step 2: Style with shared content-page pattern**

Same typographic layout as privacy page — max-width container, clean heading, readable body text.

**Step 3: Commit**

```bash
git add app/terms/page.js app/terms/page.module.css
git commit -m "feat: add Terms of Service page"
```

---

### Task 10: Restyle Privacy page

**Files:**
- Modify: `app/privacy/page.js`
- Create: `app/privacy/page.module.css`

**Step 1: Replace inline styles with CSS Module**

Move the privacy page from inline styles to a CSS module that matches the site-wide design. Keep all existing content.

**Step 2: Commit**

```bash
git add app/privacy/page.js app/privacy/page.module.css
git commit -m "refactor: restyle privacy page with CSS modules"
```

---

### Task 11: Visual verification

**Step 1: Run dev server and verify all pages with Playwright MCP**

- Homepage renders correctly with nav, card, CTA
- Clawsy page shows hero + three feature cards
- About page renders mission copy
- Support page shows FAQ cards + contact section
- Terms page renders legal content
- Privacy page matches new styling
- Navigation links work between all pages
- Footer links work
- Mobile responsive on all pages

**Step 2: Fix any visual issues found**

**Step 3: Final commit if fixes needed**
