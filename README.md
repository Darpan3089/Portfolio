# Darpan Patel — Portfolio

A modern, production-ready personal portfolio website built with **Next.js 15**, **TypeScript**, **Tailwind CSS v4**, **Framer Motion**, and **shadcn/ui** conventions.

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Geist Sans + Geist Mono
- **Email:** Resend
- **Form:** React Hook Form + Zod
- **Toasts:** Sonner
- **Theme:** next-themes (dark/light)

## 📦 Setup

### Prerequisites
- Node.js 20+
- pnpm

### Installation

```bash
pnpm install
```

### Environment Variables

Copy the example file and fill in your values:

```bash
cp .env.example .env.local
```

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | Your Resend API key from [resend.com](https://resend.com) |
| `CONTACT_EMAIL` | Email to receive contact form submissions |

### Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build

```bash
pnpm build
pnpm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── api/contact/route.ts      # Contact form API (Resend)
│   ├── blog/
│   │   ├── page.tsx              # Blog listing
│   │   └── [slug]/page.tsx       # Blog post
│   ├── projects/
│   │   └── [slug]/page.tsx       # Project case study
│   ├── globals.css               # Design tokens + global styles
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Home page
│   ├── robots.ts                 # SEO robots
│   └── sitemap.ts                # SEO sitemap
├── components/
│   ├── sections/                 # Hero, About, Work, Tech, Projects, Contact
│   ├── footer.tsx
│   ├── motion-wrapper.tsx        # Framer Motion helpers
│   ├── navbar.tsx
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
└── lib/
    └── utils.ts                  # cn() utility
```

## 🌐 Deploy to Vercel

1. Push to GitHub
2. Import repo at [vercel.com/new](https://vercel.com/new)
3. Add environment variables in Vercel dashboard:
   - `RESEND_API_KEY`
   - `CONTACT_EMAIL`
4. Deploy → your site is live

## 📧 Email Setup (Resend)

1. Sign up at [resend.com](https://resend.com)
2. Create an API key
3. Add your domain for production (or use the sandbox sender for testing)
4. Add `RESEND_API_KEY` to your `.env.local` and Vercel env vars

## ✏️ Customization

- **Content:** Update the data arrays in each section component under `src/components/sections/`
- **Colors:** Modify CSS variables in `src/app/globals.css`
- **Resume:** Drop your PDF into `public/resume.pdf`
- **OG image:** Replace `public/og/og-image.png` (1200×630px)
- **Blog posts:** Add entries to the `blogPosts` array in `src/app/blog/[slug]/page.tsx`
- **Projects:** Add entries to the `projects` array in `src/app/projects/[slug]/page.tsx`

## 📄 License

MIT
