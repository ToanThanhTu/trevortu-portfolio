# Trevor Tu Portfolio

Personal portfolio built with Next.js 15, React 19, TypeScript, and Tailwind CSS 4.

**Live:** [trevortu.com](https://trevortu.com)

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── app/           # Next.js App Router pages
│   ├── api/       # API routes (contact form)
│   └── work/      # Project pages (dynamic [slug])
├── components/    # React components
│   ├── shadcn/    # shadcn/ui primitives
│   └── ...        # Feature components
└── lib/           # Types, data, and utilities
```

## Tech Stack

Next.js 15 (App Router), React 19, TypeScript 5, Tailwind CSS 4, motion (Framer Motion), shadcn/ui, react-icons, Zod, React Hook Form, Vercel
