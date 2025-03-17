import { Job } from "@/lib/types"

export default function JobDescription({
  title,
  company,
  location,
  start_date,
  end_date,
  description,
}: Job) {
  return (
    <div className="border-b border-stroke py-3">
      <h1 className="capitalized text-xl font-medium leading-6">{title}</h1>
      <h2 className="capitalized italic text-lg leading-6">
        {company} - {location}
      </h2>
      <h3 className="text-xs text-foreground-secondary leading-7">
        {start_date} - {end_date}
      </h3>
      <p className="text-sm text-foreground-secondary leading-5">{description}</p>
    </div>
  )
}
