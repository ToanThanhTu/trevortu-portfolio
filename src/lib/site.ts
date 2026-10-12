/** Canonical origin. Used for `metadataBase`, the sitemap and robots.txt. */
export const SITE_URL = "https://trevortu.com"

export const SITE_NAME = "Trevor Tu"

export const SITE_DESCRIPTION =
  "Trevor Tu is a Sydney-based full stack developer building fast, responsive web applications with TypeScript, React, Next.js and Node.js."

/**
 * Shared Open Graph fields. A page that sets `openGraph` replaces the parent's
 * object instead of merging it, so spread this in first.
 */
export const OPEN_GRAPH_DEFAULTS = {
  type: "website",
  siteName: SITE_NAME,
  locale: "en_AU",
} as const
