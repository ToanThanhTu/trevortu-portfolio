import type { Metadata } from "next"
import { notFound } from "next/navigation"
import ProjectDetails from "@/components/project"
import RichProjectDetails from "@/components/project/RichProjectDetails"
import { allProjects } from "@/lib/data"
import { OPEN_GRAPH_DEFAULTS, SITE_NAME } from "@/lib/site"

interface Props {
  params: Promise<{ slug: string }>
}

// Every project is known at build time; anything else is a 404.
export const dynamicParams = false

export function generateStaticParams() {
  return allProjects.map(({ slug }) => ({ slug }))
}

function getProject(slug: string) {
  return allProjects.find((project) => project.slug === slug)
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug)
  if (!project) return {}

  const url = `/work/${project.slug}`
  // Descriptions are paragraphs; the first sentence is a usable summary.
  const description = project.description.match(/^.+?\.(?=\s|$)/)?.[0] ?? project.description

  return {
    title: project.title,
    description,
    alternates: { canonical: url },
    openGraph: {
      ...OPEN_GRAPH_DEFAULTS,
      type: "article",
      url,
      title: project.title,
      description,
      // Setting `openGraph` here drops the inherited image, so point back at the
      // site card. Project screenshots are webp, which not every crawler accepts.
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${SITE_NAME}, Full Stack Developer` }],
    },
  }
}

export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).slug)
  if (!project) notFound()

  const isRichProject = project.sections && project.sections.length > 0

  return (
    <main>
      {isRichProject ? (
        <RichProjectDetails project={project} />
      ) : (
        <ProjectDetails project={project} />
      )}
    </main>
  )
}
