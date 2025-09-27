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
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className={`relative rounded-2xl p-6 group border-2 bg-slate-900/40 backdrop-blur-md`}
      style={{
        borderImage: `linear-gradient(to right, ${service.themeColor.replace(
          "from-",
          ""
        )}) 1`,
      }}
    >
      {/* Card Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <div
            className={`p-3 rounded-xl bg-gradient-to-br ${service.themeColor}`}
          >
            {service.icon}
          </div>
          <h3 className="text-xl font-semibold text-white">{service.title}</h3>
        </div>
        {/* Chevron Icon */}
        <button
          type="button"
          className="focus:outline-none"
          onClick={onToggle}
        >
          <ChevronDown
            className={`h-6 w-6 text-slate-300 transition-transform duration-300 ${
              expanded ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {/* Hover text only */}
      <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {service.hoverText}
      </p>

      {/* Subservices */}
      {expanded && (
        <div className="mt-6 grid gap-4">
          {service.subServices.map((sub, i) => (
            <div
              key={i}
              className="p-4 rounded-lg bg-slate-800/60 border border-slate-700 hover:bg-slate-700/60 transition"
            >
              <h4 className="text-white font-medium">{sub.name}</h4>
              <p className="text-slate-400 text-sm mt-1">{sub.description}</p>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  )
}
