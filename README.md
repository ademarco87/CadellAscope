# CadellAscope Enterprises

> **Status: retired.** Built for a family member's coaching business and deployed to Fly.io through the GitHub Actions workflow in `.github/workflows/deploy.yml`. The site is no longer live; the repo is kept as a reference for the build, containerization, and deployment pipeline.

Professional website for CadellAscope Enterprises — financial coaching by Nicole Cadell.

## Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Booking:** Calendly inline embed
- **Deployment:** Fly.io
- **Domain:** callwiths4lrep.com

## Sections

- Hero
- About
- How It Works
- 1-on-1 Coaching
- Booking (Calendly)
- FAQ
- Footer

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deployment

```bash
fly deploy
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| *(none required)* | Contact is handled via direct email link |

## Assets

- `public/logo.png` — CadellAscope Enterprises logo
- `public/nicole.png` — Nicole Cadell professional photo

## Contact

Business inquiries: Representative.Cadell@gmail.com
