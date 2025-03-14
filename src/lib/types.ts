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
  type: string
  description: string
  image: string
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
