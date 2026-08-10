# Trevor Tu Portfolio

Personal portfolio built with Next.js 16, React 19, TypeScript 5, and Tailwind CSS 4.

**Live:** [trevortu.com](https://trevortu.com)

## Setup

Requires Node.js 20.9+ and [bun](https://bun.sh).

```bash
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `bun run dev` | Start dev server (Turbopack) |
| `bun run build` | Production build (Turbopack) |
| `bun run start` | Serve production build |
| `bun run lint` | Run ESLint |
| `bun run typecheck` | Run `tsc --noEmit` |

## Project Structure

```
docs/              # Codebase audit and project docs
src/
├── app/           # Next.js App Router pages
│   ├── api/       # POST /api/contact (contact form)
│   └── work/      # Project pages (dynamic [slug])
├── components/    # React components
│   ├── shadcn/    # shadcn/ui primitives
│   └── ...        # Feature components
├── lib/           # Types, data, utilities, mail transport
└── modules/       # Domain modules (contact form schema)
```

## Environment

The contact form needs a Gmail account with an app password:

```bash
GMAIL_FROM=<address>
GMAIL_APP_PASSWORD=<app password>
```

## Docs

- [`docs/AUDIT.md`](docs/AUDIT.md) — known issues, severity, and suggested order of work
- `CLAUDE.md` — architecture notes, conventions, and dependency version constraints

## Tech Stack

Next.js 16 (App Router), React 19.2, TypeScript 5.9, Tailwind CSS 4, motion (Framer Motion), shadcn/ui, react-icons, Zod 4, React Hook Form, Vercel
