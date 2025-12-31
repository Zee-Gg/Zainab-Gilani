"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-background pt-16 relative overflow-hidden">
      
      {/* Left Side Stats */}
      <motion.div 
        className="absolute left-4 xl:left-16 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-8"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {[
          { number: "1.5k+", label: "LinkedIn Followers" },
          { number: "100+", label: "Students Mentored" },
          { number: "15+", label: "Projects Completed" }
        ].map((stat, index) => (
          <motion.div 
            key={index} 
            className="flex flex-col items-center justify-center w-28 h-28 rounded-full border-2 border-white bg-background/50 backdrop-blur-sm shadow-sm hover:border-primary transition-colors z-20"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-xl font-bold text-primary">{stat.number}</span>
            <span className="text-[10px] text-muted-foreground text-center px-2 leading-tight">{stat.label}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Right Side Socials */}
      <motion.div 
        className="absolute right-4 xl:right-16 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6 z-20"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {[
          { icon: Linkedin, href: "https://www.linkedin.com/in/zainab-gilani" },
          { icon: Github, href: "https://github.com/Zee-Gg" },
          { icon: Mail, href: "mailto:zainabgilani2226@gmail.com" }
        ].map((social, index) => (
          <motion.a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full border border-border bg-background/50 backdrop-blur-sm shadow-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            whileHover={{ scale: 1.1, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
          >
            <social.icon className="w-6 h-6" />
          </motion.a>
        ))}
      </motion.div>

      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center gap-8 z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
            Available for new projects
          </span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold text-foreground tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Hey, I&apos;m <span className="text-primary">Zainab Gilani</span>
        </motion.h1>
        
        <motion.h2
          className="text-2xl md:text-3xl text-muted-foreground font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Web Developer & <span className="text-foreground font-medium">UI/UX Designer</span>
        </motion.h2>
        
        <motion.p 
          className="text-lg text-muted-foreground leading-relaxed max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          I craft websites and interfaces that feel simple, modern, and meaningful, turning ideas into experiences people enjoy.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 pt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button
            size="lg"
            className="rounded-full font-medium"
            onClick={() => window.open('https://topmate.io/zainab_gilani/', '_blank')}
          >
            Book a 1:1 Call
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full font-medium"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Request a Service
          </Button>
        </motion.div>
      </div>
    </section>
  )
}








