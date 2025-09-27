
"use client"

import { header } from "framer-motion/client";

import { useState } from "react"
import { Code2, Palette, Monitor } from "lucide-react"
import ServiceCard from "./service-card" // adjust the path if needed

export default function ServicesSection() {
  const [expandedService, setExpandedService] = useState<number | null>(null)

  const services = [
    {
      icon: <Code2 className="h-8 w-8" />,
      categoryIcon: Code2,
      title: "Web Development",
      hoverText: "Crafting responsive, modern, and high-performance websites 🚀",
      themeColor: "from-cyan-400 to-purple-400",
      accentColor: "purple",
      pattern: "diagonal-lines",
      subServices: [
        { name: "Personal Portfolio", description: "Showcase your expertise with a sleek brand site." },
        { name: "Landing Pages", description: "Optimized pages designed for conversions." },
        { name: "E-commerce Sites", description: "Secure online stores with seamless checkout." },
        { name: "Web Applications", description: "Custom apps powered by modern frameworks." },
        { name: "API Development", description: "Reliable APIs for integration & automation." },
      ],
    },
    {
      icon: <Palette className="h-8 w-8" />,
      categoryIcon: Palette,
      title: "UI/UX Design",
      hoverText: "Designs that connect people ✨",
      themeColor: "from-emerald-400 to-cyan-400",
      accentColor: "cyan",
      pattern: "dots",
      subServices: [
        { name: "UI Design", description: "Pixel-perfect layouts with creative aesthetics." },
        { name: "UX Research", description: "User-centric research to optimize flows." },
        { name: "Wireframes & Prototypes", description: "Clickable prototypes to validate concepts." },
        { name: "Design Systems", description: "Consistent design systems for scalability." },
        { name: "Mobile App Design", description: "Native & responsive designs for mobile." },
      ],
    },
  ]

  // ✅ ensures only one dropdown opens at a time
  const toggleService = (index: number) => {
    setExpandedService(prev => (prev === index ? null : index))
  }

  return (
    <section
      id="services"
      className="relative py-28 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

      {/* Floating gradient blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 left-10 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-60 right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-emerald-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-slate-800/50 backdrop-blur-md rounded-full px-5 py-2 mb-6 border border-slate-700">
            <Monitor className="h-4 w-4 text-cyan-400" />
            <span className="text-sm font-medium text-slate-300 tracking-wide">
              What I Offer
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Creative{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent animate-gradient-x">
              Services
            </span>
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            I merge innovation with design thinking to create experiences that
            are not only functional but unforgettable.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid lg:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              expanded={expandedService === index}
              onToggle={() => toggleService(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}








