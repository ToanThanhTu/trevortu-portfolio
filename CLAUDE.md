# Trevor Tu Portfolio

Personal portfolio site. **Live:** [trevortu.com](https://trevortu.com)

## Tech Stack

- **Framework:** Next.js 16 (App Router), React 19.2, TypeScript 5.9 (strict)
- **Styling:** Tailwind CSS 4 with custom design tokens in `src/app/globals.css`
- **Animation:** `motion` (Framer Motion) v13 — imported as `motion/react`
- **UI:** shadcn/ui primitives in `src/components/shadcn/`
- **Icons:** `react-icons` (si, fa, tb, ri, vsc families) + `lucide-react` v1
- **Forms:** React Hook Form + Zod 4 validation
- **Font:** Montserrat via `next/font` (`src/fonts/index.ts`)
- **Package manager:** bun (`bun.lock` is the committed lockfile)
- **Deploy:** Vercel (Build Output API), Turbopack (default in Next 16)

## Commands

```bash
bun run dev        # Dev server (Turbopack)
bun run build      # Production build (Turbopack)
bun run lint       # ESLint 9 flat config (eslint.config.mjs)
bun run typecheck  # tsc --noEmit
```

## Version Constraints

Do not bump these without checking the peer graph first:

- **TypeScript pinned to 5.x.** `eslint-config-next@16` bundles `typescript-eslint@8`, which peers `typescript >=4.8.4 <6.1.0`. Next.js 16.3 only supports TypeScript 7 behind `experimental.useTypeScriptCli`.
- **ESLint pinned to 9.x.** `eslint-plugin-import`, `eslint-plugin-jsx-a11y`, and `eslint-plugin-react` (deps of `eslint-config-next@16`) all cap their peer range at `eslint ^9`.

## Contact Form

`POST /api/contact` is the only public route that sends mail. Rules for changing it:

- **Never take the recipient from the request body.** Submissions go to `CONTACT_INBOX` in `src/lib/mailer.ts`. The confirmation email is the one exception, and it must carry no caller-supplied content (see `components/email/to-client`) so the endpoint cannot be used to deliver arbitrary text to arbitrary inboxes.
- **Validate with `ContactFormSchema` server-side.** Client-side validation is UX only. The `.max()` bounds are the trust boundary.
- **Error responses stay generic.** Log detail with `console.error`; never return `error.message` to the caller.
- **Rate limiting lives in the Vercel dashboard**, not in code (serverless invocations are isolated, so an in-process counter would reset constantly). Firewall rule: `POST` to path `/api/contact`, 5 requests per 60s per IP. This means there is **no rate limit in local dev**.
- Env vars: `GMAIL_FROM`, `GMAIL_APP_PASSWORD`.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx         # Root layout (Header, Footer, Toaster)
│   ├── page.tsx           # Homepage (client component)
│   ├── globals.css        # Tailwind + design tokens
│   ├── api/contact/       # Contact form route (POST only)
│   └── work/[slug]/       # Dynamic project pages
├── components/            # See src/components/CLAUDE.md
├── fonts/index.ts         # Montserrat font export
├── hooks/useMediaQuery.ts # Breakpoint hook (sm/md/lg/xl/2xl)
├── lib/                   # See src/lib/CLAUDE.md
└── modules/contact/       # Contact form Zod schema
```

Known issues and their priority live in [`docs/AUDIT.md`](docs/AUDIT.md). Check it
before starting work; several open items overlap.

## Design Tokens (Tailwind classes)

Colors defined in `globals.css` as CSS variables, mapped via `@theme inline`:
- `bg-background-primary` / `bg-background-secondary` — dark warm browns
- `text-foreground-primary` / `text-foreground-secondary` — light text / muted text
- `border-stroke` — subtle border
- `bg-black` — page background
- `text-linkedin`, `text-destructive`, `bg-green-background`, etc.

## Key Patterns

- **`Tile`** — Animated card wrapper. Use `transitionFrom="left"|"right"|"bottom"` for scroll-in animation. All content sections use this.
- **`ImageWithMotion`** — Next.js `Image` with motion entrance animation. Same `transitionFrom` prop.
- **`InfiniteCarousel`** — Auto-scrolling horizontal carousel. Takes `list` of ReactNode items. Used for toolbox icons and testimonials.
- **`cn()`** — Tailwind class merge utility (`clsx` + `tailwind-merge`).

## Image Conventions

- Main/hero project images: **1280x2240** (4:7 portrait)
- Secondary project images: **1200x750** (8:5 landscape)
- Format: **webp**. Keep each file under ~300KB.
- Images live in `public/<project-slug>/`
- `next.config.ts` allows remote images from `placehold.co`

Check the real format before committing, not just the extension: `file public/<slug>/*`.
Exporting a PNG with a `.jpg` name produces a multi-megabyte file that still looks
fine locally. Vercel refuses to optimize source images over 10MB, and oversized
assets stay in git history permanently. See `docs/AUDIT.md` for a live example.

## Project Pages

Two project page variants dispatched in `src/app/work/[slug]/page.tsx`:
- **Standard** (`ProjectDetails`): Simple image gallery + description. Used when `project.sections` is undefined.
- **Rich** (`RichProjectDetails`): Stats bar, technical sections grid, tech stack badges, architecture summary. Used when `project.sections` exists. Currently only Priceworth uses this.

## User Preferences

- Refer to Trevor as **him/his** (not they/their)
- Keep docs and comments concise
- Don't add DynamoDB to the toolbox
- Keep HTML5, CSS3, VS Code, Figma in the toolbox
- Don't commit on his behalf — provide commit messages as text when asked
