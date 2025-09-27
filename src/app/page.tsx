import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import ProjectsSection from "@/components/projects-section"
import ExperienceSection from "@/components/experience-section"
import Footer from "@/components/footer"
import ContactSection from "@/components/contact-section"
import ProjectsList from "@/components/project-card"
import Chatbot from "@/components/Chatbot"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
      <Chatbot/>
      
    </main>
  )
}
