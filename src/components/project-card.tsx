"use client"

import { Calendar, Eye, Github, ExternalLink, ArrowUpRight } from "lucide-react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useRef, useState } from "react"

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

/* ─────────────────────────────────────────
   3D TILT CARD
   On mouse move: card tilts in 3D toward cursor
   On hover: reveal panel slides up from bottom
   No image zoom — image stays static
───────────────────────────────────────── */
function ProjectCard({
  project,
  index,
  onProjectClick,
}: {
  project: Project
  index: number
  onProjectClick?: (p: Project) => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)

  // Raw mouse position values
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth spring followers
  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 })

  // Map to rotation degrees
  const rotateX = useTransform(springY, [-0.5, 0.5], [8, -8])
  const rotateY = useTransform(springX, [-0.5, 0.5], [-8, 8])

  // Subtle highlight that follows cursor (no gradient — just a brightness layer)
  const highlightX = useTransform(springX, [-0.5, 0.5], ["0%", "100%"])
  const highlightY = useTransform(springY, [-0.5, 0.5], ["0%", "100%"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const { width, height, left, top } = ref.current.getBoundingClientRect()
    mouseX.set((e.clientX - left) / width - 0.5)
    mouseY.set((e.clientY - top) / height - 0.5)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    setHovered(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={ref}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        onClick={() => onProjectClick?.(project)}
        className="group relative flex flex-col bg-card border border-border rounded-xl overflow-hidden cursor-pointer"
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >

        {/* ── Border glow on hover — drawn as animated border ── */}
        <motion.div
          className="absolute inset-0 rounded-xl pointer-events-none z-20"
          style={{
            boxShadow: hovered
              ? "0 0 0 1.5px hsl(var(--primary) / 0.6), 0 20px 60px hsl(var(--primary) / 0.08)"
              : "0 0 0 1px hsl(var(--border))",
            transition: "box-shadow 0.35s ease",
          }}
        />

        {/* ── IMAGE — static, no zoom ── */}
        <div className="relative h-48 overflow-hidden bg-muted flex-shrink-0">
          {!project.image && (
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-xs">
              Project Image
            </div>
          )}
          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover"
              style={{ transform: "none" }} // explicitly no zoom
            />
          )}

          {/* Category pill — slides in from left on hover */}
          <motion.span
            className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-semibold tracking-widest uppercase rounded-full bg-background/90 text-foreground border border-border backdrop-blur-sm"
            initial={{ x: -20, opacity: 0 }}
            animate={hovered ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {project.category}
          </motion.span>

          {/* Status dot — top right */}
          <motion.div
            className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-background/90 backdrop-blur-sm border border-border"
            initial={{ x: 20, opacity: 0 }}
            animate={hovered ? { x: 0, opacity: 1 } : { x: 20, opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.04, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] text-muted-foreground tracking-wide">{project.status}</span>
          </motion.div>

          {/* ── REVEAL PANEL: slides up from bottom of image on hover ── */}
          <motion.div
            className="absolute inset-x-0 bottom-0 bg-background/95 backdrop-blur-sm px-4 py-3 flex items-center justify-between border-t border-border"
            initial={{ y: "100%" }}
            animate={hovered ? { y: 0 } : { y: "100%" }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex gap-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1.5 text-xs font-medium text-foreground hover:text-primary transition-colors border border-border hover:border-primary rounded-full px-3 py-1.5"
                >
                  <ExternalLink className="w-3 h-3" />
                  Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1.5 text-xs font-medium text-foreground hover:text-primary transition-colors border border-border hover:border-primary rounded-full px-3 py-1.5"
                >
                  <Github className="w-3 h-3" />
                  Code
                </a>
              )}
            </div>
            <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
          </motion.div>
        </div>

        {/* ── CONTENT ── */}
        <div className="p-5 flex flex-col flex-1 gap-3">

          {/* Meta row */}
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3 w-3" />
              {project.year}
            </span>
            <span className="flex items-center gap-1.5">
              <Eye className="h-3 w-3" />
              {project.views}
            </span>
          </div>

          {/* Title — chars lift on hover via stagger */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Tech pills — stagger in on hover */}
          <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-border/50">
            {project.tech.slice(0, 3).map((tech, i) => (
              <motion.span
                key={i}
                className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-secondary text-secondary-foreground border border-border"
                initial={false}
                animate={
                  hovered
                    ? { y: 0, opacity: 1 }
                    : { y: 4, opacity: 0.7 }
                }
                transition={{ duration: 0.25, delay: hovered ? i * 0.05 : 0 }}
              >
                {tech}
              </motion.span>
            ))}
            {project.tech.length > 3 && (
              <motion.span
                className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-secondary text-secondary-foreground border border-border"
                initial={false}
                animate={hovered ? { y: 0, opacity: 1 } : { y: 4, opacity: 0.7 }}
                transition={{ duration: 0.25, delay: hovered ? 0.15 : 0 }}
              >
                +{project.tech.length - 3}
              </motion.span>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

/* ═══════════════════════════════════
   GRID
═══════════════════════════════════ */
export default function ProjectsList({ projects, onProjectClick }: ProjectsListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          project={project}
          index={index}
          onProjectClick={onProjectClick}
        />
      ))}
    </div>
  )
}