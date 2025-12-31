"use client"
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaBuilding,
  FaBrain,
  FaRegDotCircle,
  FaRobot,
  FaRegListAlt,
  FaUtensils,
  FaLaptopCode,
  FaChartPie,
} from "react-icons/fa"
import { motion } from "framer-motion"

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Web AI Intern",
      company: "Explorer Bees",
      location: "NASTP Rawalpindi",
      period: "2025",
      description: "AI solutions for computer vision & NLP projects.",
      achievements: [
        { label: "Ball Detection (MMAction2)", icon: <FaRegDotCircle className="text-primary" /> },
        { label: "PDF Chatbot (LLMs + Streamlit)", icon: <FaRobot className="text-primary" /> },
        
      ],
      technologies: ["Python", "mmAction2", "Streamlit", "LLMs"],
      type: "internship",
    },
    {
      title: "Frontend Development Intern",
      company: "A&D Tech Solutions",
      location: "Remote",
      period: "2024",
      description: "Frontend development & real-world apps.",
      achievements: [
        { label: "Quiz App", icon: <FaRegListAlt className="text-primary" /> },
        { label: "Restaurant Booking", icon: <FaUtensils className="text-primary" /> },
        { label: "Dynamic Devs Clone", icon: <FaLaptopCode className="text-primary" /> },
        { label: "Social Dashboard", icon: <FaChartPie className="text-primary" /> },
      ],
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      type: "internship",
    },
  ]

  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Professional <span className="text-primary">Growth</span>
          </h2>
          <p className="text-muted-foreground">Hands-on experience in AI & frontend development</p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{exp.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <FaBuilding className="h-4 w-4 text-primary" /> {exp.company}
                    </span>
                    <span className="flex items-center gap-2">
                      <FaMapMarkerAlt className="h-4 w-4 text-primary" /> {exp.location}
                    </span>
                    <span className="flex items-center gap-2">
                      <FaCalendarAlt className="h-4 w-4 text-primary" />{index === 0 ? " July 2025 - Sep 2025" : ` ${exp.period}`}
                    </span>
                  </div>
                </div>

                <div className="mt-4 md:mt-0 px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full w-fit">
                  {exp.type}
                </div>
              </div>

              {/* Achievements */}
              <div className="mb-6">
                <h4 className="text-foreground font-semibold mb-4 flex items-center gap-2">
                  <FaBrain className="h-4 w-4 text-primary" /> Highlights
                </h4>
                <div className={`grid ${index === 0 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-2 md:grid-cols-4'} gap-4`}>
                  {exp.achievements.map((ach, achIndex) => (
                    <div
                      key={achIndex}
                      className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg border border-border/50"
                    >
                      {ach.icon}
                      <span className="text-sm text-foreground font-medium">{ach.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full border border-border">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}




















































































