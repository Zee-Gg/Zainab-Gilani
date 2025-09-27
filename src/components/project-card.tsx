"use client"

import { Calendar, Eye, Github } from "lucide-react"
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
  onSelect: (project: Project) => void
}

export default function ProjectsList({ projects, onSelect }: ProjectsListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {projects.map((project, index) => (
        <div
          key={index}
          className="group relative bg-gradient-to-br from-[#002431]/50 to-[#000F18]/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-[#528292]/10 hover:border-[#528292]/30 transition-all duration-500 hover:scale-[1.02] flex flex-col h-full min-h-[500px]"
        >
          {/* Image */}
          <div className="relative h-48 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000F18] via-transparent to-transparent opacity-60"></div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-4 flex flex-col flex-1">
            <div className="flex items-center justify-between text-sm text-white/50">
              <span className="flex items-center gap-2">
                <Calendar className="h-3 w-3" /> {project.year}
              </span>
              <span className="flex items-center gap-2">
                <Eye className="h-3 w-3" /> {project.views}
              </span>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-[#EF7A1E] transition">
                {project.title}
              </h3>
              <p className="text-white/70 text-sm line-clamp-3">
                {project.description}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-[#528292]/20 text-[#528292] text-xs font-medium rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-2 mt-auto">
              <Button
                size="sm"
                className="flex-1 bg-gradient-to-r from-[#EF7A1E] to-[#EF7A1E]/80 text-white rounded-xl"
                onClick={() => onSelect(project)}
              >
                View Project
              </Button>
              <Button
                size="sm"
                className="flex-1 bg-gradient-to-r from-[#00B4D8] to-[#528292] text-white rounded-xl"
                onClick={() => window.open(project.liveUrl, "_blank")}
              >
                Live
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border border-[#528292]/50 text-[#528292] rounded-xl"
                onClick={() => window.open(project.githubUrl, "_blank")}
              >
                <Github className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
