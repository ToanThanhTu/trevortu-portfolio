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
  description: string
  images: string[]
  width?: number
  height?: number
  url: string
}

export type Testimonial = {
  name: string
  title: string
  testimonial: string
  companyLogo: string
}

export type Quote = {
  quote: string
  author: string
}

export type Email = {
  name: string
  email: string
  message: string
}
