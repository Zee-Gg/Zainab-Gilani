"use client"

import { useState } from "react"
import ProjectsList from "./project-card"
import ProjectModal from "./project-modal"

export default function ProjectsSection() {
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

  const projects: Project[] = [
    {
      title: "TechVision — Digital Solutions Agency Landing Page",
      description: "A modern, interactive landing page for a digital agency that showcases services and engages visitors with AI support.",
      longDescription: "TechVision is a fast and responsive agency website built to present services, pricing, and expertise in a clean and professional way.It also includes an AI chatbot to answer visitor questions and a working contact form that sends emails directly to the agency..",
      contributions: [
        "Designed modern, responsive UI layout",
        "Built AI chatbot for visitor support",
        "Implemented working contact email system",
        
      ],
      tech: [ "Next.js", "Tailwind CSS", "Typescript"],
      image: "/TV.png",
      category: "Full Stack",
      year: "2025",
      status: "Live",
      views: "2.5k",
      liveUrl: "https://landing-page-lilac-seven-84.vercel.app/",
      githubUrl: "https://github.com/Zee-Gg/Landing-Page",
    },
    
    {
      title: "Appointment Booking Website",
      description: "A modern and responsive doctor portfolio website with online appointment booking and email notifications.",
      longDescription: "This project is a professional medical website designed to showcase a doctor’s profile, services, and patient reviews.It allows patients to book appointments and send inquiries, with emails delivered directly to the doctor.",
      contributions: [
        "Designed clean and responsive medical UI",
        "Implemented appointment booking modal",
        "Integrated email notifications using Resend",
        
      ],
      tech: [ "Next.js", "Tailwind CSS", "Typescript", "React"],
      image: "/AB.png",
      category: "Full Stack",
      year: "2025",
      status: "Live",
      views: "2.5k",
      liveUrl: "https://appointment-booking-rust.vercel.app/",
      githubUrl: "https://github.com/Zee-Gg/Appointment-Booking",
    },
    
    
    {
      title: "AskPDF",
      description: "An AI-powered Streamlit app that lets users ask questions and get answers directly from uploaded PDF documents.",
      longDescription: "AskPDF allows users to upload multiple PDFs, converts their content into vector embeddings, and stores them in a FAISS index.Using LangChain and Mistral AI, it retrieves relevant content and generates accurate, context-aware answers in real time.",
      contributions: [
        "Designed PDF upload & processing workflow.",
        "Implemented FAISS-based semantic search.",
        "Integrated Mistral AI with LangChain",
        "Deployed and configured app on Streamlit Cloud",
      ],
      tech: [ "Streamlit", "Python", "Langchain" , "Mistral AI" , "FAISS"],
      image: "/AskPDF.png",
      category: "Full Stack",
      year: "2025",
      status: "Live",
      views: "2.5k",
      liveUrl: "https://askpdf-b5uycurnv9xxuu57pesh8m.streamlit.app/",
      githubUrl: "https://github.com/Zee-Gg/AskPDF",
    },
    
    
    {
      title: "SchoolLama",
      description: "SchoolLama is a smart school management system that simplifies handling students, teachers, classes, and daily school activities.",
      longDescription: "SchoolLama helps schools manage their daily operations effortlessly, from tracking attendance and grades to scheduling lessons and events. It connects teachers, students, and parents through a single, organized system. With tools for assignments, performance analytics, and announcements, it keeps everything running smoothly. Designed to save time and improve communication, it makes school management smarter and more efficient.",
      contributions: ["Built core modules for users, classes, and performance.", "Added secure role-based authentication.", "Improved UI for a smooth user experience."],
      tech: [ "Next.js", "TypeScript", "Tailwind CSS" , "Prisma" , "PostgreSQL"],
      image: "/SL.png",
      category: "Full Stack",
      year: "2025",
      status: "Live",
      views: "2.5k",
      liveUrl: "",
      githubUrl: "https://github.com/Zee-Gg/School_Lama",
    },
     {
      title: "Lushscape",
      description: "Lushscape is a nature-themed website that highlights the beauty of plants through elegant design and smooth interactivity.",
      longDescription:
        "Lushscape captures the essence of nature with a visually appealing and responsive layout that adapts seamlessly to all devices. It offers engaging scroll animations, a dynamic header, and an image slider that brings plant collections to life. With intuitive navigation and thoughtful design, it provides users a calming and immersive browsing experience.",
      contributions: [
        "Designed responsive layouts for smooth viewing on all devices.",
        "Added interactive navigation and scroll-based animations.",
        "Created dynamic headers and sliders for engaging visuals.",
        "Improved overall user experience with seamless transitions.",
      ],
      tech: ["HTML", "Tailwind CSS", "Javascript"],
      image: "/Lushscape.png",
      category: "Frontend",
      year: "2025",
      status: "Live",
      views: "1.8k",
      liveUrl: "https://lushscape.vercel.app/",
      githubUrl: "https://github.com/Zee-Gg/Lushscape",
    },
    {
      title: "Infectious Diseases Hotspot Prediction",
      description: "Infectious Diseases Hotspot Prediction identifies potential disease hotspots and related patterns through predictive analysis and data insights.",
      longDescription:
        "This project helps forecast areas at risk of infectious disease outbreaks by analyzing demographic and health data. Users can input regional details to receive hotspot predictions along with related disease associations. It provides an interactive dashboard for insights and an admin panel for managing data efficiently.",
      contributions: [
        "Developed the prediction workflow and result display.",
        "Integrated data input forms and hotspot analysis.",
        "Added association rule insights for related diseases.",
        "Built an admin panel for data management.",
      ],
      tech: [ "Python", "TensorFlow", "Pandas" , "Django " ],
      image: "/DP.png",
      category: "Machine Learning Application",
      year: "2024",
      status: "Live",
      views: "3.2k",
      liveUrl: "",
      githubUrl: "https://github.com/Zee-Gg/infectious-diseases",
    },

    {
      title: "Palette Paradise",
      description: "Palette Paradise is an online art gallery that connects artists and art lovers through a seamless platform for showcasing, discovering, and purchasing artwork.",
      longDescription:
        "Palette Paradise offers a vibrant space where artists can display their creations and users can explore and buy art effortlessly. It features dynamic galleries, artist profiles, reviews, and a smooth checkout process for an enjoyable shopping experience. With personalized recommendations and responsive design, it ensures a beautiful and engaging journey for every art enthusiast.",
      contributions: [
        "Designed interactive galleries and artist profile sections.",
        "Implemented authentication, cart, and checkout features.",
        "Added search, filters, and personalized recommendations.",
        "Optimized layouts for smooth, responsive performance.",
      ],
      tech: [ "HTML", "CSS", "Javascript" , "Firebase" ],
      image: "/PP.png",
      category:"Full Stack",
      year: "2025",
      status: "Live",
      views: "3.2k",
      liveUrl: "https://palette-paradise.vercel.app/",
      githubUrl: "https://github.com/Zee-Gg/Palette-Paradise",
    }
  ]

  

  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showAll, setShowAll] = useState(false)

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const visibleProjects = showAll ? projects : projects.slice(0, 6)

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that demonstrate my passion for building solving real-world problems.
          </p>
        </div>

        <ProjectsList projects={visibleProjects} onProjectClick={handleProjectClick} />
        
        {projects.length > 6 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-300"
            >
              {showAll ? "Show Less" : "See More Projects"}
            </button>
          </div>
        )}
        
        <ProjectModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          project={selectedProject} 
        />
      </div>
    </section>
  )
}
