"use client"

import { Button } from "@/components/ui/button"
import SocialMediaToggle from "@/components/social-media-toggle"
import { ArrowRight, Code, Users, Linkedin } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

// Animated Counter Component

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 pt-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-12">
          {/* Main Content */}
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex flex-col gap-4">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 flex flex-col items-center text-center w-40 border border-slate-700">
                  <Code className="h-10 w-10 text-cyan-400 mb-2" />
                  <span className="text-3xl font-bold text-white">20+</span>
                  <p className="text-slate-300 font-medium text-xs mt-1">Projects Created</p>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 flex flex-col items-center text-center w-40 border border-slate-700">
                  <Users className="h-10 w-10 text-purple-400 mb-2" />
                  <span className="text-3xl font-bold text-white">300+</span>
                  <p className="text-slate-300 font-medium text-xs mt-1">Students Mentored</p>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 flex flex-col items-center text-center w-40 border border-slate-700">
                  <Linkedin className="h-10 w-10 text-emerald-400 mb-2" />
                  <span className="text-3xl font-bold text-white">1.5k</span>
                  <p className="text-slate-300 font-medium text-xs mt-1">LinkedIn Followers</p>
                </div>
              </div>
              <div className="flex-1">
                <div className="text-center space-y-4">
                  <motion.h1
                    className="text-4xl md:text-6xl font-bold text-white leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    Hey, I&apos;m <span className="text-cyan-400">Zainab Gilani</span>
                  </motion.h1>
                  <motion.h2
                    className="text-2xl md:text-3xl text-white font-light"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                  >
                    Web Developer & <span className="text-purple-400 font-semibold">UI/UX Designer</span>
                  </motion.h2>
                  <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
                    I craft websites and interfaces that feel simple, modern, and meaningful, turning ideas into experiences people enjoy.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      className="bg-cyan-400 hover:bg-cyan-500 text-white font-bold px-8 py-3 rounded-lg shadow-lg transition-all duration-200 flex items-center gap-2 border-2 border-cyan-400"
                      onClick={() => window.open('https://topmate.io/zainab_gilani/', '_blank')}
                      aria-label="Book a 1:1 Call with Zainab Gilani"
                    >
                      Book a 1:1 Call
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                    <Button
                      className="bg-transparent border-2 border-slate-400 text-slate-300 font-medium px-8 py-3 rounded-lg transition-all duration-200 hover:bg-slate-800/20 hover:border-cyan-400 group"
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Request a Service
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            {/* Social Media Links */}
            <div className="mt-8 flex justify-center">
              <SocialMediaToggle />
            </div>
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-20 h-20 bg-cyan-400/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-purple-400/20 rounded-full blur-2xl"></div>
      </div>
    </section>
  )
}








