"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { JSX } from "react"

interface SubService {
  name: string
  description: string
}

interface Service {
  icon: JSX.Element
  categoryIcon: React.ElementType
  title: string
  hoverText: string
  themeColor: string
  subServices: SubService[]
}

interface Props {
  service: Service
  index: number
  expanded: boolean
  onToggle: () => void
}

export default function ServiceCard({
  service,
  expanded,
  onToggle,
}: Props) {

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className={`relative rounded-xl p-8 group border bg-card border-border hover:border-primary/50 transition-all duration-300 shadow-sm`}
    >
      {/* Card Header */}
      <div className="flex items-center justify-between mb-4 cursor-pointer" onClick={onToggle}>
        <div className="flex items-center gap-4">
          <div
            className={`p-3 rounded-lg bg-primary/10 text-primary`}
          >
            {service.icon}
          </div>
          <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
        </div>
        {/* Chevron Icon */}
        <button
          type="button"
          className="focus:outline-none"
        >
          <ChevronDown
            className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${
              expanded ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {/* Hover text only */}
      <p className="text-muted-foreground text-sm mb-4">
        {service.hoverText}
      </p>

      {/* Subservices */}
      {expanded && (
        <div className="mt-6 grid gap-3 pt-6 border-t border-border">
          {service.subServices.map((sub, i) => (
            <div
              key={i}
              className="p-4 rounded-lg bg-secondary/50 border border-border hover:bg-secondary transition-colors"
            >
              <h4 className="text-foreground font-medium text-sm">{sub.name}</h4>
              <p className="text-muted-foreground text-xs mt-1">{sub.description}</p>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  )
}
