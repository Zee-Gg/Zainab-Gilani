"use client"

import { Calendar, Eye, Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

type Project = {
  title: string
  description: string
  longDescription?: string
  contributions?: string[]
  tech: string[]
  image: string
  category: string
  year: string
  status: string
  views: string
  liveUrl: string
  githubUrl: string
}

interface ProjectsListProps {
  projects: Project[]
  onProjectClick?: (project: Project) => void
}

export default function ProjectsList({ projects, onProjectClick }: ProjectsListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {projects.map((project, index) => (
        <div
          key={index}
          className="group flex flex-col bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 shadow-sm cursor-pointer"
          onClick={() => onProjectClick?.(project)}
        >
          {/* Image */}
          <div className="relative h-40 sm:h-48 overflow-hidden bg-muted">
            {/* Placeholder for image if it fails to load or is missing */}
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
              <span className="text-xs sm:text-sm">Project Image</span>
            </div>
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            )}
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col flex-1 gap-4">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" /> {project.year}
              </span>
              <span className="flex items-center gap-1.5">
                <Eye className="h-3.5 w-3.5" /> {project.views}
              </span>
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-auto pt-4">
              {project.tech.slice(0, 3).map((tech, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 text-xs font-medium rounded-md bg-secondary text-secondary-foreground border border-border"
                >
                  {tech}
                </span>
              ))}
              {project.tech.length > 3 && (
                <span className="px-2.5 py-1 text-xs font-medium rounded-md bg-secondary text-secondary-foreground border border-border">
                  +{project.tech.length - 3}
                </span>
              )}
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-4 border-t border-border">
              {project.liveUrl && (
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 gap-2"
                  onClick={(e) => {
                    e.stopPropagation()
                    window.open(project.liveUrl, "_blank")
                  }}
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </Button>
              )}
              {project.githubUrl && (
                <Button
                  size="sm"
                  variant="ghost"
                  className="flex-1 gap-2"
                  onClick={(e) => {
                    e.stopPropagation()
                    window.open(project.githubUrl, "_blank")
                  }}
                >
                  <Github className="h-4 w-4" />
                  Code
                </Button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
