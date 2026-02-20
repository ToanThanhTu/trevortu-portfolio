# Trevor Tu Portfolio

Personal portfolio site. **Live:** [trevortu.com](https://trevortu.com)

## Tech Stack

- **Framework:** Next.js 15 (App Router), React 19, TypeScript 5 (strict)
- **Styling:** Tailwind CSS 4 with custom design tokens in `src/app/globals.css`
- **Animation:** `motion` (Framer Motion) — imported as `motion/react`
- **UI:** shadcn/ui primitives in `src/components/shadcn/`
- **Icons:** `react-icons` (si, fa, tb, ri, vsc families)
- **Forms:** React Hook Form + Zod validation
- **Font:** Montserrat via `next/font` (`src/fonts/index.ts`)
- **Deploy:** Vercel, standalone output, Turbopack dev server

## Commands

```bash
npm run dev       # Dev server (Turbopack)
npm run build     # Production build
npm run lint      # ESLint (no cache)
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx         # Root layout (Header, Footer, Toaster)
│   ├── page.tsx           # Homepage (client component)
│   ├── globals.css        # Tailwind + design tokens
│   ├── api/               # Contact form API route
│   └── work/[slug]/       # Dynamic project pages
├── components/            # See src/components/CLAUDE.md
├── fonts/index.ts         # Montserrat font export
├── hooks/useMediaQuery.ts # Breakpoint hook (sm/md/lg/xl/2xl)
└── lib/                   # See src/lib/CLAUDE.md
```

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
- Images live in `public/<project-slug>/`
- `next.config.ts` allows remote images from `placehold.co`

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
