"use client"

import { ArrowUpRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <h3 className="text-2xl font-bold text-foreground">
              Zainab <span className="text-primary">Gilani</span>
            </h3>
            <p className="text-muted-foreground max-w-sm">
              Ready to bring your ideas to life with modern web solutions. Let&apos;s create something amazing together.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Navigation</h4>
            <nav className="flex flex-col space-y-2">
              {["Home", "Services", "Projects", "Experience", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact</h4>
            <div className="flex flex-col space-y-2">
              <a 
                href="mailto:zainabgilani2226@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
              >
                zainabgilani2226@gmail.com
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <p className="text-muted-foreground">
                Available for new projects
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Zainab Gilani. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
