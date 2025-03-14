export type Job = {
  title: string
  company: string
  location: string
  start_date: string
  end_date: string
  description: string
}

export type Project = {
  title: string
  slug: string
  type: string
  shortDescription: string
  longDescription: string
  images: string[]
  width?: number
  height?: number
}

export type Testimonial = {
  name: string
  title: string
  testimonial: string
  companyLogo: string
}
