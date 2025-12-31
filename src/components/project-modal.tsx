"use client"

import { X, Github, ExternalLink, Calendar, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"

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

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  project: Project | null
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen || !project) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-card border border-border rounded-xl shadow-2xl flex flex-col animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 z-10 p-2 rounded-full bg-background/80 hover:bg-accent text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Image Header */}
        <div className="relative h-64 sm:h-80 w-full shrink-0 overflow-hidden bg-muted">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-muted-foreground">
              Project Image
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
          
          <div className="absolute bottom-0 left-0 p-6 w-full">
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary border border-primary/20 backdrop-blur-md">
                {project.category}
              </span>
              <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-background/50 text-foreground border border-border backdrop-blur-md flex items-center gap-1.5">
                <Calendar className="h-3 w-3" /> {project.year}
              </span>
              <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-background/50 text-foreground border border-border backdrop-blur-md flex items-center gap-1.5">
                <Eye className="h-3 w-3" /> {project.views}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">{project.title}</h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Description */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">Overview</h3>
            <p className="text-muted-foreground leading-relaxed">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Contributions */}
          {project.contributions && project.contributions.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Key Contributions</h3>
              <ul className="grid gap-3 sm:grid-cols-2">
                {project.contributions.map((contribution, index) => (
                  <li key={index} className="flex gap-3 text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span className="text-sm leading-relaxed">{contribution}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 text-sm font-medium rounded-md bg-secondary text-secondary-foreground border border-border"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-border">
            {project.liveUrl && (
              <Button
                className="flex-1 gap-2"
                onClick={() => window.open(project.liveUrl, "_blank")}
              >
                <ExternalLink className="h-4 w-4" />
                Visit Live Site
              </Button>
            )}
            {project.githubUrl && (
              <Button
                variant="outline"
                className="flex-1 gap-2"
                onClick={() => window.open(project.githubUrl, "_blank")}
              >
                <Github className="h-4 w-4" />
                View Source Code
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
