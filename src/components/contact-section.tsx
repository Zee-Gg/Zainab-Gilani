"use client"
import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Mail, User, MessageSquare, Layout, Layers, PenTool, MoreHorizontal } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    subject: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)

  const projectTypes = [
    { id: "Portfolio", label: "Portfolio", icon: Layout },
    { id: "Full Stack", label: "Full Stack", icon: Layers },
    { id: "UI/UX", label: "UI/UX", icon: PenTool },
    { id: "Others", label: "Others", icon: MoreHorizontal },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      if (data.success) {
        alert("✅ Message sent successfully!")
      } else {
        alert("❌ Something went wrong!")
      }
    } catch (err) {
      console.error(err)
      alert("⚠️ Error sending message.")
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleProjectTypeChange = (type: string) => {
    setFormData({ ...formData, projectType: type })
  }

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Let&apos;s <span className="text-primary">Connect</span>
          </h2>
          <p className="text-muted-foreground">Have a project in mind? I’d love to hear from you.</p>
        </motion.div>
        
        <motion.form
          onSubmit={handleSubmit}
          className="w-full max-w-md mx-auto space-y-6 bg-card border border-border rounded-xl p-8 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <span className="p-2 bg-primary/10 rounded-lg">
              <Mail className="w-5 h-5 text-primary" />
            </span>
            <div>
              <h3 className="text-foreground font-semibold">Get in Touch</h3>
              <p className="text-muted-foreground text-sm">Available for freelance & collaborations</p>
            </div>
          </div>

          {/* Name */}
          <div className="relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg text-foreground placeholder-muted-foreground focus:border-primary outline-none transition-all"
              required
            />
            <User className="absolute right-4 top-3.5 w-5 h-5 text-muted-foreground" />
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg text-foreground placeholder-muted-foreground focus:border-primary outline-none transition-all"
              required
            />
            <Mail className="absolute right-4 top-3.5 w-5 h-5 text-muted-foreground" />
          </div>

          {/* Project Type */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Project Type</label>
            <div className="grid grid-cols-2 gap-3">
              {projectTypes.map((type) => (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => handleProjectTypeChange(type.id)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg border transition-all text-sm font-medium ${
                    formData.projectType === type.id
                      ? "bg-primary/10 border-primary text-primary"
                      : "bg-secondary/50 border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                  }`}
                >
                  <type.icon className="w-4 h-4" />
                  {type.label}
                </button>
              ))}
            </div>
          </div>

          {/* Message */}
          <div className="relative">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg text-foreground placeholder-muted-foreground focus:border-primary outline-none transition-all resize-none"
              required
            />
            <MessageSquare className="absolute right-4 top-3.5 w-5 h-5 text-muted-foreground" />
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </motion.form>
      </div>
    </section>
  )
}
