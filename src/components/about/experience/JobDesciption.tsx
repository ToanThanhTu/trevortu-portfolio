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
      <h1 className="capitalized text-2xl font-medium leading-none">{title}</h1>
      <h2 className="capitalized italic text-xl leading-none">
        {company} - {location}
      </h2>
      <h3 className="text-sm text-foreground-secondary leading-7">
        {start_date} - {end_date}
      </h3>
      <p className="text-base text-foreground-secondary leading-5">{description}</p>
    </div>
  )
}
