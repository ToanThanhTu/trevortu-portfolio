/** Work experience entry. */
export type Job = {
  title: string
  company: string
  location: string
  start_date: string
  end_date: string
  description: string
}

/** Titled list of bullet points for rich project pages. */
export type ProjectSection = {
  title: string
  items: string[]
}

/** Grouped technologies (e.g. "Frontend": ["React", "Next.js"]). */
export type TechStackCategory = {
  category: string
  technologies: string[]
}

/** Key metric displayed on rich project pages. */
export type ProjectStat = {
  value: string
  label: string
}

/**
 * Portfolio project. Optional fields (`sections`, `techStack`, `stats`,
 * `architecture`) enable the rich project page layout.
 */
export type Project = {
  title: string
  slug: string
  type: string
  description: string
  images: string[]
  width?: number
  height?: number
  url: string
  sections?: ProjectSection[]
  techStack?: TechStackCategory[]
  stats?: ProjectStat[]
  architecture?: string
}

/** Colleague testimonial displayed in the carousel. */
export type Testimonial = {
  name: string
  title: string
  testimonial: string
  companyLogo: string
}

/** Random programming quote for the motivation section. */
export type Quote = {
  quote: string
  author: string
}

/** Contact form submission payload. */
export type Email = {
  name: string
  email: string
  message: string
}
