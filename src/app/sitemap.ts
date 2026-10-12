import type { MetadataRoute } from "next"
import { allProjects } from "@/lib/data"
import { SITE_URL } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, priority: 1 },
    { url: `${SITE_URL}/work`, priority: 0.8 },
    ...allProjects.map(({ slug }) => ({ url: `${SITE_URL}/work/${slug}`, priority: 0.6 })),
    { url: `${SITE_URL}/playground`, priority: 0.5 },
  ]
}
