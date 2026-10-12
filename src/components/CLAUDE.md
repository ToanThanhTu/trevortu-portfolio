# Components

Each component is a folder with an `index.tsx` entry point.

## Core Building Blocks

| Component | Purpose |
|-----------|---------|
| `tile/` | Animated card wrapper. Props: `transitionFrom`, `className`, `containerClassName`. All sections use this. Remounts when `transitionFrom` changes, so a breakpoint-driven direction takes effect after hydration. |
| `image-with-motion/` | Next.js Image + motion entrance. Props: `src`, `alt`, `width`, `height`, `transitionFrom`, `priority`. |
| `motion-provider/` | `MotionConfig reducedMotion="user"`, wrapping the app in `layout.tsx`. |
| `infinite-carousel/` | Auto-scrolling horizontal list. Props: `list` (ReactNode[]), `carouselClassname`, `carouselTileClassname`. Duplicates items internally for seamless loop. |

## Homepage Sections (rendered in `app/page.tsx`)

`page.tsx` is one tree for every breakpoint, so each section renders once. Don't
reintroduce separate desktop/mobile copies: that duplicates the form and the
`#contact` anchor (which sits on the availability + form block).

| Component | Description |
|-----------|-------------|
| `about/` | Bio, portrait image, social links |
| `featured-work/` | Grid of first 4 featured projects as `ProjectTile` cards |
| `toolbox/` | InfiniteCarousel of 34 tech skill icons. Driven by a `tools` array of `{ name, Icon }`; `name` is the React key, so it must be unique. Mostly react-icons, plus `icons/Playwright`. |
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
| `icons/` | Hand-rolled icons for brands react-icons does not ship. Each must match react-icons' `IconType` so it can sit in the same list. Currently: `Playwright`. |
| `header/` | Nav bar (fixed top) |
| `footer/` | Footer with links |
| `socials/` | Social media icon links |
| `email/` | React Email templates. `to-trevor` receives the full submission; `to-client` is the sender's confirmation and takes **only `name`** by design, since it is delivered to a caller-supplied address. |
| `shadcn/` | shadcn/ui primitives (button, input, label, sonner, etc.) |
