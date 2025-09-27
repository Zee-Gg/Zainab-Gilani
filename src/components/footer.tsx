"use client"

import { Github, Linkedin, Mail, ArrowUpRight, Sparkles, Code2, Palette, Zap } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Diagonal Background Split */}
      <div className="relative bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 min-h-[500px]">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Main Content in Zigzag Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Side - Creative Profile */}
            <div className="lg:col-span-5 space-y-8">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-8 h-8 border-2 border-cyan-400 rounded-full animate-spin"></div>
                <h3 className="text-4xl font-bold text-white mb-2">
                  Let&#39;s Create
                  <span className="block text-cyan-400">Something Amazing</span>
                </h3>
                <p className="text-slate-300 text-lg">
                  Ready to bring your ideas to life with modern web solutions
                </p>
              </div>

              {/* Skills Icons */}
              <div className="flex gap-4">
                <div className="group p-3 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 hover:scale-105">
                  <Code2 className="w-6 h-6 text-cyan-400 group-hover:animate-pulse" />
                </div>
                <div className="group p-3 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-purple-400 hover:bg-purple-400/10 transition-all duration-300 hover:scale-105">
                  <Palette className="w-6 h-6 text-purple-400 group-hover:animate-pulse" />
                </div>
                <div className="group p-3 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-emerald-400 hover:bg-emerald-400/10 transition-all duration-300 hover:scale-105">
                  <Zap className="w-6 h-6 text-emerald-400 group-hover:animate-pulse" />
                </div>
              </div>

              {/* Contact CTA */}
              <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Sparkles className="w-5 h-5 text-emerald-400 animate-pulse" />
                  <span className="text-sm font-medium text-emerald-400">
                    Available for Projects
                  </span>
                </div>
                <p className="text-white font-semibold mb-3">
                  Have an idea? Let&apos;s discuss!
                </p>
                <p
                  
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors group"
                >
                  <a href="mailto:zainabgilani2226@gmail.com">zainabgilani2226@gmail.com</a>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </p>
              </div>
            </div>

            {/* Right Side - Navigation & Services */}
            <div className="lg:col-span-7 lg:pl-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Navigation */}
                <div className="space-y-6">
                  <h4 className="text-xl font-semibold text-white flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    Navigation
                  </h4>
                  <nav className="space-y-3">
                    {["Home", "Services", "Projects", "Experience", "Contact"].map(
                      (item, index) => (
                        <a
                          key={item}
                          href={`#${item.toLowerCase()}`}
                          className="group flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-all duration-200"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <div className="w-1 h-1 bg-slate-400 group-hover:bg-cyan-400 group-hover:w-2 transition-all duration-200 rounded-full"></div>
                          {item}
                        </a>
                      )
                    )}
                  </nav>
                </div>

                {/* Services */}
                <div className="space-y-6">
                  <h4 className="text-xl font-semibold text-white flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    What I Do
                  </h4>
                  <div className="space-y-3">
                    {[
                      "Portfolio Development",
                      "Full Stack Applications",
                      "UI/UX Design",
                      "Web Consulting",
                    ].map((service, index) => (
                      <div
                        key={service}
                        className="group flex items-center gap-3 text-slate-300 hover:text-purple-400 transition-all duration-200 cursor-pointer"
                        style={{ animationDelay: `${index * 150}ms` }}
                      >
                        <div className="w-1 h-1 bg-slate-400 group-hover:bg-purple-400 group-hover:w-2 transition-all duration-200 rounded-full"></div>
                        {service}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Compact Bottom Section */}
      <div className="relative bg-slate-900 border-t border-slate-700">
        {/* Thin Gradient Divider */}
        <div className="h-[2px] w-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Branding */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-xs">ZG</span>
            </div>
            <p className="text-xs text-slate-400">
              © 2025 Zainab Gilani — Crafted with passion
            </p>
          </div>

          {/* Tagline */}
          <p className="text-xs text-slate-500 italic">
            Design ✦ Code ✦ Create
          </p>
        </div>
      </div>
    </footer>
  )
}
