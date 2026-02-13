---
name: website-professionalization
created: 2026-02-13T03:26:44Z
updated: 2026-02-13T03:26:44Z
status: approved
---

# Buttons Technology Website Professionalization

## Context

Buttons Technology builds Clawsy, a personal AI assistant (iOS + web) that generates real apps for users. The current website is a 2-page placeholder. It needs to look like a real company for Apple App Store review and consumer trust.

## Audience

- Apple App Store reviewers validating the company behind Clawsy
- Consumers finding the company from the App Store listing

## Approach

Multi-page traditional site. Separate pages signal "real company."

## Pages

| Page | Route | Purpose |
|------|-------|---------|
| Home | `/` | Company identity + hero pitch for Clawsy |
| Clawsy | `/clawsy` | Product explanation with features |
| About | `/about` | Company mission and philosophy |
| Support | `/support` | FAQ + contact info |
| Privacy | `/privacy` | Privacy policy (exists, restyle) |
| Terms | `/terms` | Terms of service |

## Content

### Homepage
- Eyebrow: BUTTONS TECHNOLOGY
- Headline: "Software that adapts to you."
- Subtext: Buttons Technology builds personal AI tools that work the way you think. Our first product is Clawsy.
- CTA: "Meet Clawsy →" linking to /clawsy
- App Store badge placeholder

### Clawsy Product Page
- App icon displayed prominently
- Headline: "Your AI assistant that builds apps for you."
- Subtitle: "Clawsy is a personal AI that doesn't just answer questions — it creates real tools tailored to how you live and work."
- Three feature blocks:
  1. "Ask for anything" — Describe what you need. A journal, a habit tracker, a grocery list. Clawsy builds it as a real app on your device.
  2. "Chat or use the app" — Two ways to interact. Talk to Clawsy in conversation, or use the apps it creates. Same data, your choice.
  3. "Works offline" — Your apps run locally. No internet needed to use the tools Clawsy builds for you.
- Closing: "Available soon on iOS."

### About
- Headline: "Built with intention."
- Mission-forward copy about building personal AI tools that respect users' time, data, and intelligence. Software should adapt to people, not the other way around.
- No team bios. Founded 2026.

### Support
- Headline: "How can we help?"
- FAQ: What is Clawsy? / How do I get started? / Is my data private? / How do I contact support?
- Contact email: hello@buttonstechnology.com

### Terms of Service
- Standard terms covering app usage, intellectual property, liability, termination.

### Privacy Policy
- Already exists with good content. Restyle to match new site design.

## Visual Design

- Evolve existing warm cream aesthetic
- Background: warm cream gradient (#fff9ed → #f7f3ec → #ede7dd)
- Cards: white panels, soft shadows, rounded corners
- Typography: Geist Sans. Headlines 36-40px bold, section headers 24px semibold, body 17-18px regular 1.7 line height, eyebrow 12px uppercase teal
- Accent: teal (#0f766e)
- Nav: clean horizontal bar, text links
- Footer: muted text, small font, horizontal
- Responsive: stacks cleanly at mobile
- No animations, parallax, or JS gimmicks

## Components

- `Nav` — site navigation
- `Footer` — site footer
- `PageHeader` — reusable headline + subtitle
- `FeatureBlock` — product page feature sections
- `FaqItem` — FAQ entries on support page
