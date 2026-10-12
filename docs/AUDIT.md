# Codebase Audit

**Last updated:** 2026-10-12
**Scope:** Full review of the portfolio codebase (security, correctness, SEO, tooling, performance).

This is a living document. Items are marked **Resolved** or **Open**. When you fix
something, move it to the resolved table with the commit that did it.

**2026-10-12 pass:** every code-fixable item below is resolved. `bun run lint`,
`bun run typecheck` and `bun run build` exit 0, and `bun audit` is down from 41
advisories to 1. What remains is one dashboard action and one advisory with no
upstream fix.

## Status at a glance

| Severity | Open | Resolved |
|---|---|---|
| Critical | 0 | 3 |
| High | 1 | 7 |
| Medium | 0 | 11 |
| Low | 1 | 13 |

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
| 18 | **Oversized Priceworth images.** PNGs saved as `.jpg` at 2x the documented dimensions (`main.jpg` 9.97 MB). | `1f37f26`. Re-exported as webp at 1280x2240 / 1200x750, 30-208 KB each. `public/` is 2.1 MB. No blob over 1 MB exists in git history. |
| 19 | `tailwind.config.ts` was dead under Tailwind 4. | `cc91f2a`. Deleted; `components.json` already has `"config": ""`. |
| 20 | **Next.js 16.3.0 had 9 advisories**, 3 critical: RCE in Image Optimization with AVIF ([GHSA-2xp9-vwfh-vxw4](https://github.com/advisories/GHSA-2xp9-vwfh-vxw4)), RCE on Windows hosts, RCE in `next/og`, plus SSRF and cache poisoning. Pinned exactly, so `bun audit fix` never moved it. `sharp` 0.35.3 had two more. | `94199b2`. `next` and `eslint-config-next` pinned to 16.3.8, which pulls `sharp` 0.35.5. |
| 21 | **Nodemailer 9.0.5 had 7 advisories**, including two `addressparser` DoS issues and two recipient-domain validation bypasses. | `94199b2`. Upgraded to 10.1.0. Its only breaking change is Node 20+. It ships its own types, so `@types/nodemailer` is gone. |
| 22 | **Six components server-rendered an error message.** `useMediaQuery` returned `undefined` until mount and each caller rendered `ErrorTile` meanwhile, so the server HTML had "Something went wrong" 5 times and no Experience entries. Separately, every `Tile` shipped motion's `opacity: 0` initial state, so **with JS disabled the homepage was a blank screen**. | `f52615b`. Hook rewritten on `matchMedia` + `useSyncExternalStore` (false on the server). Guards and `ErrorTile` deleted. `Tile`/`ImageWithMotion` remount when a breakpoint-driven direction resolves. `data-reveal` + `@media (scripting: none)` shows animated elements, header included, without JS. `MotionConfig reducedMotion="user"` added. |
| 23 | **Portrait missing below 1280px.** `41bc337` replaced `portrait.webp` with `portrait.jpg` but only updated the `xl` branch of `About`, so mobile and tablet requested a file that no longer existed. | `f52615b`. One portrait element using `portrait.jpg` at every size. |
| 24 | **Project pages invisible to search engines.** Client Component reading `usePathname()`; no static generation, every page titled "Trevor Tu Portfolio", unknown slugs returned 200. | `fc7068a`. Server Component with `generateStaticParams`, `generateMetadata` (title, first-sentence description, canonical, Open Graph) and `dynamicParams = false`. Unknown slugs now 404. |
| 25 | **Components missing `"use client"`.** | `f52615b`. Added to `project/index.tsx` and `image-with-motion`. `testimonials` needs none: it uses no hooks or motion itself and renders fine as a Server Component. |
| 26 | **No metadata beyond a bare title.** | `fc7068a`. `metadataBase`, title template, description, Open Graph, `summary_large_image` Twitter card, and a 1200x630 share image from `app/opengraph-image.tsx`, generated once at build. The favicon was already wired by the `app/favicon.ico` convention. |
| 27 | **Missing App Router files.** | `fc7068a`. Added `sitemap.ts`, `robots.ts`, `not-found.tsx`, `error.tsx`. `loading.tsx` deliberately omitted: every route is static, so it would never show. |
| 28 | **Homepage was entirely `"use client"`**, and rendered separate desktop and mobile trees, so `Toolbox`, the contact form and `#contact` existed twice. | `fc7068a`. Server Component again, one tree for all breakpoints. |
| 29 | **Toaster referenced undefined tokens** and called `useTheme()` with no provider. | `6d4f6a1`. Mapped to the site's tokens, theme fixed to dark, `next-themes` removed. |
| 30 | `dangerouslyAllowSVG` and a `placehold.co` remote pattern with nothing using them. | `6d4f6a1`. Removed. Local SVGs (testimonial logos) skip the optimizer and still render. |
| 31 | **Broken relative link.** `ProjectTile` used `work/${slug}`. | `fc7068a`. Now `/work/${slug}`. |
| 32 | **`#contact` pointed at the green status dot**, and the first match was inside the desktop tree, hidden on mobile, so the nav link did nothing there. | `fc7068a`. Single `id="contact"` on the availability + form block, with `scroll-mt-28` to clear the fixed header. |
| 33 | **Dev-toolchain advisories** (`brace-expansion`, `minimatch`, `picomatch`, `flatted`, `js-yaml`, `source-map-js`). | `94199b2`. `bun audit fix`. One left, see Open. |
| 34 | Three images off the documented dimensions (`todo-app/main`, `next-net-shop/main`, `csa-landing-pages/secondary-2`). | Checked on the project and work pages: `object-cover` crops them cleanly. No change needed. |

---

## Open

### High

#### Rate limiting not yet active

By design there is no rate limit in code: serverless invocations are isolated, so
an in-process counter resets constantly. The chosen approach is a Vercel WAF rule,
which **still needs to be created**, or at least confirmed, since the repo cannot
show dashboard state. Until then nothing caps submission volume.

Firewall → Configure → + New Rule:

- **If** `Request Path` equals `/api/contact` **and** `Request Method` equals `POST`
- **Then** Rate Limit → Fixed Window, 5 requests per 60s, key IP
- Start on **Log**, confirm no real submissions match, then switch to **Deny**

Hobby allows one rate limit rule per project with 1M allowed requests included.
Counters are per-region, so a distributed attacker can exceed the configured limit.
Acceptable at this threat level.

### Low

| Issue | Detail | Fix |
|---|---|---|
| **`braces@3.0.3` advisory** ([GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm)) | Reached via `eslint-config-next` → `fast-glob` → `micromatch`. Lint time only, never shipped. No fixed version is published yet. | Re-run `bun audit fix` when one lands. |

## Related

- Dependency version constraints (why TypeScript is pinned to 5.x and ESLint to
  9.x) are documented in the root `CLAUDE.md`.
- Contact form security rules are documented in the root `CLAUDE.md`.
