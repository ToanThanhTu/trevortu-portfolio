# Codebase Audit

**Last updated:** 2026-08-11
**Scope:** Full review of the portfolio codebase (security, correctness, SEO, tooling, performance).

This is a living document. Items are marked **Resolved** or **Open**. When you fix
something, move it to the resolved table with the commit that did it.

## Status at a glance

| Severity | Open | Resolved |
|---|---|---|
| Critical | 0 | 2 |
| High | 4 | 1 |
| Medium | 5 | 6 |
| Low | 4 | 7 |

One item (rate limiting) is blocked on a dashboard action rather than code. See
[Open: rate limiting](#rate-limiting-not-yet-active).

---

## Resolved

| # | Issue | Fix |
|---|---|---|
| 1 | **Open email relay.** `/api/email-to-client` took `to:` from the request body, letting anyone send attacker-controlled text to any address from the site's Gmail account. | Both endpoints replaced by `POST /api/contact`. Recipient is now a server constant. |
| 2 | **Next.js 8 months behind on security patches** (15.0.7, missing the May 2026 batch of 12 vulnerabilities and the July 2026 batch of 9 CVEs). | Upgraded to 16.3.0 with React 19.2.8. |
| 3 | **No server-side validation.** Both routes did `await request.json()` with zero checks. | `ContactFormSchema.safeParse` at the route boundary, plus `.max()` caps (name 100, email 254, message 2000). |
| 4 | **Error detail leaked to callers** via `details: error.message`. | Generic response body; detail logged with `console.error` only. |
| 5 | **Confirmation email echoed caller-supplied content** to a caller-chosen address. | `EmailToClient` now takes only `name`. No payload channel. |
| 6 | **Lint never ran.** `eslint.ignoreDuringBuilds: true` plus an `eslint.config.mjs` importing four packages that were not in `package.json`. | Removed the flag, deleted the broken config and the duplicate `.eslintrc.json`, wrote a working flat config. |
| 7 | `output: "standalone"` on a Vercel deploy. | Removed. Vercel uses its own Build Output API and never reads `.next/standalone`. Also sidesteps [vercel/next.js#88844](https://github.com/vercel/next.js/issues/88844). |
| 8 | Lockfile mismatch: `bun.lockb` committed, docs said `npm install`, no `package-lock.json`. | Standardised on bun, converted to the text `bun.lock` format so it is diffable. |
| 9 | `require("nodemailer")` in a TS/ESM file, worked around with a `browser: { child_process: false }` hack. | Converted to `import`, added `@types/nodemailer`, deleted the hack. |
| 10 | Dead dependencies: `tailwindcss-animate`, `embla-carousel-react`. | Removed, along with the unused `src/components/shadcn/carousel.tsx` (241 lines). |
| 11 | Three `catch (error: any)` blocks. | All removed. |
| 12 | `console.log` in production API routes. | Now `console.error`, server-side only. |
| 13 | Transporter rebuilt on every request. | Pooled module-level singleton in `src/lib/mailer.ts`. |
| 14 | `postcss` listed as a runtime dependency. | Moved to `devDependencies`. |
| 15 | **39 lint findings** surfaced by the first working ESLint run (29 `react/jsx-key`, 4 `prefer-const`, 4 `react/no-unescaped-entities`, 2 unused vars). | All fixed. `bun run lint` and `bun run typecheck` both exit 0. |
| 16 | **`InfiniteCarousel` leaked animations.** `useEffect` had no dependency array and never stopped the previous `animate()` call, so every render stacked another infinite animation on the same motion value. | Added `[width, xTranslation]` deps, a zero-width guard, and `return () => controls.stop()`. |
| 17 | `toolbox` declared 28 JSX elements inline with `size`/`strokeWidth` repeated on each. | Restructured to a `{ name, Icon }` data array mapped once, giving stable keys instead of index-based ones. Same 28 icons, same order. |

---

## Open

### High

#### Oversized project images (regression)

`public/priceworth/main.jpg` is **9.97 MB**, up from 460 KB. `public/` overall went
from 3.3 MB to 17 MB.

Two separate problems:

1. **The four `priceworth/*.jpg` files are actually PNGs with a `.jpg` extension.**
   `file` reports `PNG image data, 8-bit/color RGBA`. PNG with an alpha channel is
   the worst possible format for a photographic screenshot.
2. **They are 2x the documented dimensions.** `main.jpg` is 2560x4480 where the
   convention is 1280x2240; the three secondaries are 2400x1500 where the
   convention is 1200x750.

`main.jpg` is now within 30 KB of Vercel's 10 MB
[cacheable response limit](https://vercel.com/docs/image-optimization/limits-and-pricing)
for optimized images. One more re-export pushes it over and the image stops being
optimized.

Next.js re-encodes at serve time so visitors are partly shielded, but the repo
carries the weight permanently in git history, local dev slows down, and the
optimizer burns cost on 10 MB sources.

**Fix:** re-export at the documented dimensions as `.webp`, matching every other
project in `public/`. Target under 300 KB each.

#### Six components server-render an error message

`useMediaQuery` returns `undefined` until `useEffect` runs after mount, and six
components treat that as failure:

```tsx
if (isXl === undefined || typeof isXl !== "boolean") {
  return <ErrorTile message="Please try again later." />
}
```

Affected: `about/`, `featured-work/`, `others/Motivation`, `footer/`,
`project/index`, `project/RichProjectDetails`.

The server-rendered homepage HTML therefore contains "Something went wrong :("
six times. That is what crawlers and link-preview bots see, and users get a
visible flash of six error tiles before hydration replaces them. The
`typeof isXl !== "boolean"` half of each guard is dead code.

**Fix:** delete the guards. Most of the layout branching is already expressible in
CSS, which `app/page.tsx` does elsewhere with `hidden xl:grid` / `block xl:hidden`.
Where JS is genuinely needed, let `undefined` fall through to a sensible default.
Rewrite the hook on `window.matchMedia` and `useSyncExternalStore` instead of a
`resize` listener that re-renders the tree on every pixel of drag.

#### Project pages are invisible to search engines

`app/work/[slug]/page.tsx` is a Client Component that reads the slug from
`usePathname()` and string-splits it. Consequences:

- No `generateStaticParams`, so project pages are not statically generated.
- No `generateMetadata`, so every project page inherits the title
  "Trevor Tu Portfolio" and the description "Trevor Tu Portfolio". These are the
  pages most worth indexing and sharing.
- Unknown slugs return **HTTP 200** with a "Project not found" body instead of
  calling `notFound()`, so junk URLs are indexable.

**Fix:** convert to a Server Component using `PageProps<'/work/[slug]'>`, awaiting
`params` (a Promise since Next 15), with `generateStaticParams`,
`generateMetadata`, and `notFound()`.

#### Rate limiting not yet active

By design there is no rate limit in code: serverless invocations are isolated, so
an in-process counter resets constantly. The chosen approach is a Vercel WAF rule,
which **still needs to be created**. Until then nothing caps submission volume.

Firewall → Configure → + New Rule:

- **If** `Request Path` equals `/api/contact` **and** `Request Method` equals `POST`
- **Then** Rate Limit → Fixed Window, 5 requests per 60s, key IP
- Start on **Log**, confirm no real submissions match, then switch to **Deny**

Hobby allows one rate limit rule per project with 1M allowed requests included.
Counters are per-region, so a distributed attacker can exceed the configured limit.
Acceptable at this threat level.

### Medium

| Issue | Detail | Fix |
|---|---|---|
| **Three components missing `"use client"`** | `project/index.tsx` calls `useMediaQuery`; `testimonials/index.tsx` and `image-with-motion/index.tsx` import `motion/react`. They work only because every current parent is a Client Component, so they break the moment a parent becomes a Server Component. | Add the directive. Required before the `work/[slug]` conversion above. |
| **No metadata beyond a bare title** | No `metadataBase`, `openGraph`, `twitter`, or `icons`. Sharing trevortu.com produces a bare link. | Add to the root layout. |
| **Missing App Router files** | No `sitemap.ts`, `robots.ts`, `not-found.tsx`, `error.tsx`, or `loading.tsx` anywhere in `app/`. | Add. |
| **Homepage is entirely `"use client"`** | `app/page.tsx` carries the directive for two `motion` props, forcing the whole tree client-side. | Push the boundary down to the components that need it. |
| **Toaster references undefined tokens** | `shadcn/sonner.tsx` sets `--normal-bg: var(--popover)` etc., but `--popover`, `--popover-foreground`, and `--border` are not defined in `globals.css`. It also calls `useTheme()` with no `ThemeProvider` mounted. | Define the tokens or drop the overrides. |

### Low

| Issue | Detail | Fix |
|---|---|---|
| **`tailwind.config.ts` is dead** | Tailwind 4 ignores it without a `@config` directive, and `globals.css` has none. Its colour mappings are already duplicated in `@theme inline`, and `important: true` has no effect. | Delete it, and update the `tailwind.config` path in `components.json`. |
| **`dangerouslyAllowSVG` for nothing** | `next.config.ts` enables remote SVG rendering for `placehold.co`, and no placeholder URL remains anywhere in `src/`. | Remove the flag and the `remotePatterns` entry. |
| **Broken relative link** | `ProjectTile` uses `href={`work/${slug}`}` with no leading slash. Correct from `/` and `/work` by coincidence; from any deeper route it resolves to `/work/work/<slug>`. | Change to `/work/${slug}`. |
| **`#contact` anchor points at the wrong element** | The nav's `/#contact` targets `id="contact"`, which sits on the green status dot in `others/AvailableForWork.tsx`, not the contact form. | Move the id to the `Contact` tile. |

---

## Suggested order

1. Create the WAF rule (dashboard, no code).
2. Re-export the Priceworth images as webp at the documented dimensions.
3. Remove the six `ErrorTile` guards and rewrite `useMediaQuery`.
4. Add `"use client"` to the three components, then convert `work/[slug]` to a
   Server Component with metadata, `generateStaticParams`, and `notFound()`.
5. Add root metadata, `sitemap.ts`, `robots.ts`, `not-found.tsx`.
6. Config cleanup: delete `tailwind.config.ts`, drop `dangerouslyAllowSVG`, fix the
   relative link and the `#contact` anchor.

## Related

- Dependency version constraints (why TypeScript is pinned to 5.x and ESLint to
  9.x) are documented in the root `CLAUDE.md`.
- Contact form security rules are documented in the root `CLAUDE.md`.
