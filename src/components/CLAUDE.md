# Components

Each component is a folder with an `index.tsx` entry point.

## Core Building Blocks

| Component | Purpose |
|-----------|---------|
| `tile/` | Animated card wrapper. Props: `transitionFrom`, `className`, `containerClassName`. All sections use this. |
| `image-with-motion/` | Next.js Image + motion entrance. Props: `src`, `alt`, `width`, `height`, `transitionFrom`, `priority`. |
| `infinite-carousel/` | Auto-scrolling horizontal list. Props: `list` (ReactNode[]), `carouselClassname`, `carouselTileClassname`. Duplicates items internally for seamless loop. |

## Homepage Sections (rendered in `app/page.tsx`)

| Component | Description |
|-----------|-------------|
| `about/` | Bio, portrait image, social links |
| `featured-work/` | Grid of first 4 featured projects as `ProjectTile` cards |
| `toolbox/` | InfiniteCarousel of tech skill icons (react-icons) |
| `testimonials/` | InfiniteCarousel of colleague testimonials (h-88 carousel, h-80 tiles) |
| `contact/` | Contact form (React Hook Form + Zod, sends via `/api/contact`) |
| `others/` | `AvailableForWork`, `Motivation`, `RandomQuotes` small tiles |

## Project Pages (`project/`)

| Component | When Used |
|-----------|-----------|
| `project/index.tsx` (`ProjectDetails`) | Standard projects — image gallery + description |
| `project/RichProjectDetails.tsx` | Rich projects (has `sections` field) — stats, tech sections, tech stack badges. Currently only Priceworth. |

Dispatch logic in `app/work/[slug]/page.tsx` checks `project.sections`.

## Other

| Component | Purpose |
|-----------|---------|
| `header/` | Nav bar (fixed top) |
| `footer/` | Footer with links |
| `socials/` | Social media icon links |
| `email/` | React Email template for contact form |
| `error/` | Error display component |
| `shadcn/` | shadcn/ui primitives (button, input, label, sonner, etc.) |
