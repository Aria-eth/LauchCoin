# quantaAI – AI-powered Utility Token on Solana

This repository contains the marketing site and lightweight app for quantaAI, an AI-powered utility token on Solana. It includes a launch countdown, token utility sections, tokenomics, roadmap, and conversion-focused CTAs for Telegram and pump.fun.

## Highlights

- **Launch Countdown Section**: Real-time timer to the fair launch date (Oct 25, 2025 · 18:00 GMT) with a minute-change shine effect
- **Launch Map**: Visual timezone map to help users plan the mint
- **Utilities**: AI trading signals, Telegram alpha bot, on-chain research copilot, and real-time alerts
- **Why Buy & Trust**: Value props and trust signals backed by a security-first team
- **Tokenomics & Roadmap**: Clear structure for supply, allocation, and shipping milestones
- **Responsive, Fast UI**: Tailwind + CSS Modules + Framer Motion for a crisp, animated experience
- **Contact & Policies**: Footer links to contact, privacy, terms, and guidelines

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Project Structure

Key app routes and components:

- `src/app/page.tsx`: Home page wiring all sections
- `src/components/sections/LaunchCountdown.tsx`: Launch timer and map image
- `src/components/sections/WhyBuySection.tsx`: Benefits, trust signals, CTAs
- `src/components/sections/HeroSection.tsx`: Hero with coin art and CTAs
- `src/components/layout/Navigation.tsx`: Top navigation with “Launch Time” link
- `src/components/layout/Footer.tsx`: Footer with grouped columns
- `public/Launch-Map.png`: Launch timezone map
- `public/logo.jpeg`: Coin image used as favicon and social image

### Environment (optional)

If you use the contact forms/features, set your SMTP values:

## Environment Variables

Create a `.env.local` file with your SMTP credentials:

```env
SMTP_USER=support@quanta.ai
SMTP_PASS=your_email_password
```

## Deployment

The site is framework-agnostic to hosting and runs great on Vercel, Netlify, Plesk, or any Node-capable host. See `DEPLOYMENT_GUIDE.md` for a step-by-step guide.

## Technologies Used

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS + CSS Modules
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod (optional forms)
- **Email**: Nodemailer via SMTP (optional)
- **Icons**: Lucide React

## Why buy quantaAI?

- Utility from day one: AI trading signals, research copilots, wallet tracking, and Telegram automations where you trade.
- Fair launch on pump.fun: No presale, no private allocations; fully on-chain and transparent.
- Security-first team: Built by a professional security consultancy with a track record across audits, pen-tests, and code reviews.
- Early access: Holders get priority to beta drops, feature toggles, and integrations as we ship.
- Community-driven: Public roadmap and clear updates so holders see what’s coming next.

## Former projects and track record

The team has delivered security services and reviews for numerous web3 projects (smart-contract audits, security guidelines, penetration tests, and secure code reviews). Our focus on secure-by-design utilities informs how we ship AI tools with careful guardrails. We blend speed with safety—shipping iteratively and validating features with the community.

## Contributing

PRs are welcome! Please:

1. Create a feature branch
2. Keep changes focused and lint-clean
3. Open a PR with a clear description and screenshots if UI-related

## Support

For bug reports or questions, open an issue or reach us:

- Telegram: join via CTA on the site
- Email: support@quanta.ai

## Contact

For support or questions, contact us at support@fortknox-security.xyz
