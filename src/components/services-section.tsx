"use client"

import { useState } from "react"
import { Code2, Palette, Monitor } from "lucide-react"
import ServiceCard from "./service-card"

export default function ServicesSection() {
  const [expandedService, setExpandedService] = useState<number | null>(null)

  const services = [
    {
      icon: <Code2 className="h-8 w-8" />,
      categoryIcon: Code2,
      title: "Web Development",
      hoverText: "Crafting responsive, modern, and high-performance websites",
      themeColor: "from-primary to-primary/80",
      accentColor: "primary",
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
      hoverText: "Designs that connect people and create meaningful experiences",
      themeColor: "from-primary to-primary/80",
      accentColor: "primary",
      subServices: [
        { name: "UI Design", description: "Pixel-perfect layouts with creative aesthetics." },
        { name: "UX Research", description: "User-centric research to optimize flows." },
        { name: "Wireframes & Prototypes", description: "Clickable prototypes to validate concepts." },
        { name: "Design Systems", description: "Consistent design systems for scalability." },
        { name: "Mobile App Design", description: "Native & responsive designs for mobile." },
      ],
    },
  ]

  const toggleService = (index: number) => {
    setExpandedService((prev) => (prev === index ? null : index))
  }

  return (
    <section
      id="services"
      className="py-20 bg-secondary/30"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-background rounded-full px-4 py-2 mb-6 border border-border shadow-sm">
            <Monitor className="h-4 w-4 text-primary" />
            <span className="text-xs font-semibold text-muted-foreground tracking-widest uppercase">What I Offer</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Creative <span className="text-primary">Services</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I merge innovation with design thinking to create experiences that are not only functional but unforgettable.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">
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
