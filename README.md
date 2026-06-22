# Alejandro Alba — Portfolio (progile Application)

## What this is

This site is both a portfolio and a live proof of concept.

When I saw the progile job posting, they specifically use **Next.js 14.2, React 18, TypeScript, and Tailwind CSS**. I didn't have deep experience with Next.js or TypeScript at the time. So instead of writing a cover letter about how fast I learn, I built this site with their exact stack and submitted it as the application itself.

Every technical decision here — the design system, the component architecture, the animation system, the data layer — is meant to answer one question: *can this person actually build things with our stack?* The answer is in your browser.

## Live site

> Deploy to Vercel and update this link.
> `https://your-deployment.vercel.app`

## Tech stack

| Tool | Version | Role |
|------|---------|------|
| Next.js | 14.2.35 | Framework (App Router) |
| React | 18 | UI library |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 3 | Styling via design tokens |
| Framer Motion | 11 | Scroll animations, entrance choreography |
| lucide-react | latest | Icon system |
| Vercel | — | Deployment (zero-config) |

## Local setup

```bash
# Clone the repo
git clone https://github.com/Alejandro7337/Portfolio_alejandro.git
cd Portfolio_alejandro

# Install dependencies
npm install

# Start development server
npm run dev
# → http://localhost:3000

# Production build
npm run build
npm start
```

Requires Node.js 18+.

## Project structure

```
portfolio-alejandro/
├── app/
│   ├── layout.tsx          # Root layout: fonts, metadata, MotionProvider
│   ├── page.tsx            # Page assembly (Navbar → Hero → … → Footer)
│   └── globals.css         # Base styles, scroll-smooth, focus-visible ring
├── components/
│   ├── Navbar.tsx          # Fixed header, scroll behavior, hamburger menu
│   ├── Hero.tsx            # First impression: statement + CANDIDATE_PROFILE.test.ts
│   ├── WhyMe.tsx           # 6-argument case for progile, featured card + grid
│   ├── Credentials.tsx     # GC Skill Badges + academic scholarships
│   ├── Skills.tsx          # 3 skill groups with visual hierarchy
│   ├── Experience.tsx      # Timeline: PGD + Papa John's
│   ├── Projects.tsx        # Banco Ágil Col + portfolio meta-card
│   ├── Contact.tsx         # Direct CTA, email + socials
│   ├── Footer.tsx          # Stack callout, year, source link
│   ├── MotionProvider.tsx  # Framer Motion MotionConfig (reducedMotion="user")
│   └── icons.tsx           # SVG icons: GitHub, LinkedIn
├── lib/
│   └── data.ts             # Single source of truth for all content and types
└── tailwind.config.ts      # Design token system: ink.*, brand.*, surface.*
```

## Design decisions

**1. "Blueprint Pass" design system instead of a template**

Every color, font pairing, and spacing rhythm was defined as a semantic token before writing a single component. `ink-950` is the background, `brand-primary` (#3E8EED) is the interactive color, `brand-accent` (#F5A623 amber) is reserved for the signature element. Using tokens instead of raw hex values means every component speaks the same visual language without coordination effort.

**2. CANDIDATE_PROFILE.test.ts as the signature element**

progile is a B2B testing-automation company. The most natural way to present a candidate to them isn't a list of adjectives — it's a passing test suite. The `CANDIDATE_PROFILE.test.ts` card in the Hero maps each job requirement to a passing assertion, and it resolves to `PASS` with a spring animation. The amber accent (`brand-accent`) marks it as the distinctive element across the page.

**3. Zero hardcoded text in components**

All content — copy, URLs, credentials, skills, experience bullets — lives in `lib/data.ts` behind typed interfaces. Components are purely presentational. This makes every piece of content auditable in one file and demonstrates separation of concerns even in a solo project.

**4. English as the primary language**

The role at progile requires English for communication with Danish founders. Writing the entire portfolio in English is not just a practical choice — it's a live B2 demonstration. Every sentence is evidence of the language claim, not a separate claim stacked on top of it.

## Contact

- **Email:** alejandroalba2605@gmail.com
- **LinkedIn:** [linkedin.com/in/alejandro-alba-3ba12a314](https://www.linkedin.com/in/alejandro-alba-3ba12a314)
- **GitHub:** [github.com/Alejandro7337](https://github.com/Alejandro7337)
