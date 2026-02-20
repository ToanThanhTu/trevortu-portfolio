"use client"

import ErrorTile from "@/components/error/ErrorTile"
import ImageWithMotion from "@/components/image-with-motion"
import Tile from "@/components/tile"
import useMediaQuery from "@/hooks/useMediaQuery"
import { Project } from "@/lib/types"
import { cn } from "@/lib/utils"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

interface Props {
  project: Project
}

export default function RichProjectDetails({ project }: Props) {
  const isXl = useMediaQuery("xl")

  if (isXl === undefined || typeof isXl !== "boolean") {
    return <ErrorTile message="Please try again later" />
  }

  return (
    <div className={cn("flex flex-col gap-4 my-4")}>
      {/* Header + Hero */}
      <div className={cn("grid grid-cols-1 gap-4", "xl:grid-cols-3")}>
        <div className={cn("flex flex-col gap-4", "xl:col-span-2")}>
          <div className={cn("flex gap-4")}>
            <Tile
              className={cn("m-0 pb-6")}
              transitionFrom={isXl ? "left" : "right"}
              containerClassName="grow"
            >
              <div>
                <h1 className={cn("uppercase text-xl font-semibold", "md:text-3xl")}>
                  {project.title}
                </h1>
                <h2 className={cn("italic text-lg", "md:text-xl")}>{project.type}</h2>
              </div>
            </Tile>

            <Link
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity ease-in-out duration-300 h-full"
            >
              <Tile
                transitionFrom="right"
                className={cn("flex flex-col items-end justify-center m-0 py-7", "md:py-8")}
              >
                <ExternalLink size={20} />
                <p className={cn("text-xl", "md:text-lg")}>Visit</p>
              </Tile>
            </Link>
          </div>

          <ImageWithMotion
            src={project.images[0]}
            alt={`${project.title} Hero`}
            width={3200}
            height={5600}
            containerClassName={cn(
              "h-[300px] bg-blue-50 px-8 pt-6",
              "md:h-[500px] md:pt-12 md:px-20",
              "xl:h-[702px]",
            )}
            imageClassName={cn("shadow-[12px_20px_40px_rgba(28,25,23)]")}
            transitionFrom="left"
          />
        </div>

        <div className={cn("flex flex-col gap-4")}>
          <Tile className={cn("m-0")} transitionFrom="right">
            <p className={cn("text-foreground-primary text-sm")}>{project.description}</p>
          </Tile>

          {project.architecture && (
            <Tile className={cn("m-0")} transitionFrom="right">
              <h3 className={cn("uppercase text-lg font-semibold mb-2")}>Architecture</h3>
              <p className={cn("text-foreground-secondary text-sm")}>{project.architecture}</p>
            </Tile>
          )}

          <ImageWithMotion
            src={project.images[1]}
            alt={`${project.title} Secondary Photo`}
            width={1200}
            height={750}
            transitionFrom="right"
            containerClassName={cn("h-[200px]", "xl:grow xl:basis-0 xl:min-h-[200px]")}
          />

          <ImageWithMotion
            src={project.images[2]}
            alt={`${project.title} Secondary Photo`}
            width={1200}
            height={750}
            transitionFrom="right"
            containerClassName={cn("h-[200px]", "xl:grow xl:basis-0 xl:min-h-[200px]")}
          />
        </div>
      </div>

      {/* Stats Bar */}
      {project.stats && project.stats.length > 0 && (
        <div className={cn("grid grid-cols-2 gap-4", "md:grid-cols-3", "xl:grid-cols-5")}>
          {project.stats.map((stat, index) => (
            <Tile key={index} className={cn("m-0 text-center")} transitionFrom="bottom">
              <p className={cn("text-3xl font-bold text-foreground-primary")}>{stat.value}</p>
              <p className={cn("text-xs text-foreground-secondary uppercase tracking-wider mt-1")}>
                {stat.label}
              </p>
            </Tile>
          ))}
        </div>
      )}

      {/* Technical Sections */}
      {project.sections && project.sections.length > 0 && (
        <div className={cn("grid grid-cols-1 gap-4", "md:grid-cols-2")}>
          {project.sections.map((section, index) => (
            <Tile
              key={index}
              className={cn("m-0")}
              transitionFrom={index % 2 === 0 ? "left" : "right"}
            >
              <h3 className={cn("uppercase text-lg font-semibold mb-3")}>{section.title}</h3>
              <ul className={cn("space-y-2")}>
                {section.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className={cn("text-sm text-foreground-secondary flex gap-2")}
                  >
                    <span className="text-foreground-primary shrink-0">-</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Tile>
          ))}
        </div>
      )}

      {/* Secondary Images */}
      <div className={cn("grid grid-cols-1 gap-4", "md:grid-cols-2")}>
        <ImageWithMotion
          src={project.images[3]}
          alt={`${project.title} Secondary Photo`}
          width={1200}
          height={750}
          transitionFrom="left"
          containerClassName={cn("h-[250px]", "md:h-[300px]")}
        />
        <ImageWithMotion
          src={project.images[4]}
          alt={`${project.title} Admin Dashboard`}
          width={1200}
          height={750}
          transitionFrom="right"
          containerClassName={cn("h-[250px]", "md:h-[300px]")}
        />
      </div>

      {/* Tech Stack */}
      {project.techStack && project.techStack.length > 0 && (
        <Tile className={cn("m-0")} transitionFrom="bottom">
          <h3 className={cn("uppercase text-lg font-semibold mb-4")}>Tech Stack</h3>
          <div className={cn("space-y-4")}>
            {project.techStack.map((category, index) => (
              <div key={index}>
                <p
                  className={cn("text-sm text-foreground-secondary uppercase tracking-wider mb-2")}
                >
                  {category.category}
                </p>
                <div className={cn("flex flex-wrap gap-2")}>
                  {category.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={cn(
                        "px-3 py-1 rounded-full text-xs",
                        "bg-background-secondary text-foreground-primary border border-stroke",
                      )}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Tile>
      )}
    </div>
  )
}
