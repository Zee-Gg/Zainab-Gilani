
// "use client"
// import type React from "react"
// import { useState } from "react"
// import { motion } from "framer-motion"
// import { Button } from "@/components/ui/button"
// import { Mail, Phone, Linkedin, Github, Twitter, MessageSquare, PenTool, Layers, User, Edit3 } from "lucide-react"

// export default function ContactSection() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//     projectType: "",
//   })
//   const [loading, setLoading] = useState(false)

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setLoading(true)
//     try {
//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       })
//       const data = await res.json()
//       if (data.success) {
//         alert("✅ Message sent successfully!")
//         console.log("Groq Reply:", data.reply)
//       } else {
//         alert("❌ Something went wrong!")
//       }
//     } catch (err) {
//       console.error(err)
//       alert("⚠️ Error sending message.")
//     } finally {
//       setLoading(false)
//     }
//   }

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
//   ) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     })
//   }

//   return (
//     <section id="contact" className="py-20 bg-gradient-to-br from-[#000F18] to-[#002431]">
//       <div className="max-w-6xl mx-auto px-6">
//         <motion.div
//           className="text-center mb-12"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
//             Let&apos;s <span className="text-[#EF7A1E]">Connect</span>
//           </h2>
//           <p className="text-white/70">Have a project in mind? I’d love to hear from you.</p>
//         </motion.div>
//         <motion.form
//   onSubmit={handleSubmit}
//   className="w-full max-w-md mx-auto space-y-6 bg-[#001923]/80 backdrop-blur-md border border-[#528292]/20 rounded-xl p-8 shadow-lg"
//   initial={{ opacity: 0, x: 40 }}
//   whileInView={{ opacity: 1, x: 0 }}
//   transition={{ duration: 0.6 }}
// >
//   {/* Header */}
//   <div className="flex items-center gap-3 mb-4">
//     <span className="p-2 bg-[#EF7A1E]/10 rounded-lg">
//       <Mail className="w-5 h-5 text-[#EF7A1E]" />
//     </span>
//     <div>
//       <h3 className="text-white font-semibold">Get in Touch</h3>
//       <p className="text-white/60 text-sm">📅 Available for freelance & collaborations</p>
//     </div>
//   </div>

//   {/* Name */}
//   <div className="relative">
//     <input
//       type="text"
//       name="name"
//       value={formData.name}
//       onChange={handleChange}
//       placeholder="Your Name"
//       className="w-full px-4 py-3 bg-[#000F18]/60 border border-[#528292]/30 rounded-lg text-white placeholder-white/40 focus:border-[#EF7A1E] outline-none transition-all"
//       required
//     />
//     <User className="absolute right-4 top-3.5 w-5 h-5 text-[#528292]/60" />
//   </div>

//   {/* Email */}
//   <div className="relative">
//     <input
//       type="email"
//       name="email"
//       value={formData.email}
//       onChange={handleChange}
//       placeholder="Your Email"
//       className="w-full px-4 py-3 bg-[#000F18]/60 border border-[#528292]/30 rounded-lg text-white placeholder-white/40 focus:border-[#EF7A1E] outline-none transition-all"
//       required
//     />
//     <Mail className="absolute right-4 top-3.5 w-5 h-5 text-[#528292]/60" />
//   </div>

//   {/* Subject */}
//   <div className="relative">
//     <input
//       type="text"
//       name="subject"
//       value={formData.subject}
//       onChange={handleChange}
//       placeholder="Subject"
//       className="w-full px-4 py-3 bg-[#000F18]/60 border border-[#528292]/30 rounded-lg text-white placeholder-white/40 focus:border-[#EF7A1E] outline-none transition-all"
//       required
//     />
//     <Edit3 className="absolute right-4 top-3.5 w-5 h-5 text-[#528292]/60" />
//   </div>

//   {/* Availability / Project Type (Cards with Icons) */}
//   <div>
//     <h4 className="text-sm font-medium text-white/70 mb-2">Project Type</h4>
//     <div className="grid grid-cols-3 gap-3">
//       {[
//         { label: "Portfolio", icon: <User className="w-4 h-4" /> },
//         { label: "Full Stack", icon: <Layers className="w-4 h-4" /> },
//         { label: "UI/UX", icon: <PenTool className="w-4 h-4" /> },
//       ].map((item, i) => (
//         <button
//           key={i}
//           type="button"
//           onClick={() => setFormData({ ...formData, projectType: item.label })}
//           className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-sm transition-all ${
//             formData.projectType === item.label
//               ? "bg-[#EF7A1E] text-white border-[#EF7A1E]"
//               : "bg-[#000F18]/60 text-white/70 border-[#528292]/30 hover:border-[#EF7A1E]/60"
//           }`}
//         >
//           {item.icon}
//           {item.label}
//         </button>
//       ))}
//     </div>
//   </div>

//   {/* Message */}
//   <div className="relative">
//     <textarea
//       name="message"
//       value={formData.message}
//       onChange={handleChange}
//       rows={4}
//       placeholder="Your Message..."
//       className="w-full px-4 py-3 bg-[#000F18]/60 border border-[#528292]/30 rounded-lg text-white placeholder-white/40 focus:border-[#EF7A1E] outline-none resize-none transition-all"
//       required
//     />
//     <MessageSquare className="absolute right-4 top-3.5 w-5 h-5 text-[#528292]/60" />
//   </div>

//   {/* Submit */}
//   <Button
//     type="submit"
//     className="w-full bg-[#EF7A1E] hover:bg-[#EF7A1E]/90 text-white font-medium py-3 rounded-lg transition-transform duration-200 hover:scale-[1.02]"
//   >
//     {loading ? "Sending..." : "Send Message"}
//   </Button>
// </motion.form>
//       </div>
//     </section>

//     )}



"use client"
import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Linkedin, Github, Twitter, MessageSquare, PenTool, Layers, User, Edit3, Clock } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    projectType: "",
  })
  const [loading, setLoading] = useState(false)

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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#000F18] to-[#002431]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Let&apos;s <span className="text-[#EF7A1E]">Connect</span>
          </h2>
          <p className="text-white/70">Have a project in mind? I’d love to hear from you.</p>
        </motion.div>

        {/* Wrapper with availability card + main form card */}
        <div className="flex justify-center items-center gap-8 relative">
          {/* Availability Card (Left side) */}
          <motion.div
            className="hidden md:flex flex-col justify-center bg-[#001923]/80 backdrop-blur-md border border-[#528292]/20 rounded-xl p-6 w-64 shadow-lg absolute left-0 top-1/2 -translate-y-1/2"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#EF7A1E]" />
              Availability
            </h3>
            <ul className="text-white/70 text-sm space-y-2">
              <li>🗓 Mon - Fri: 9am - 6pm</li>
              <li>💬 Quick replies within 24h</li>
              <li>🌍 Timezone: PKT (GMT+5)</li>
            </ul>
            <div className="mt-4 text-xs text-white/50">
              Available for freelance & collaborations ✨
            </div>
          </motion.div>

          {/* Main Contact Form (Centered) */}
          <motion.form
            onSubmit={handleSubmit}
            className="w-full max-w-lg mx-auto space-y-6 bg-[#001923]/80 backdrop-blur-md border border-[#528292]/20 rounded-xl p-10 shadow-lg"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <span className="p-2 bg-[#EF7A1E]/10 rounded-lg">
                <Mail className="w-5 h-5 text-[#EF7A1E]" />
              </span>
              <div>
                <h3 className="text-white font-semibold">Get in Touch</h3>
                <p className="text-white/60 text-sm">📅 Available for freelance & collaborations</p>
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
                className="w-full px-4 py-3 bg-[#000F18]/60 border border-[#528292]/30 rounded-lg text-white placeholder-white/40 focus:border-[#EF7A1E] outline-none transition-all"
                required
              />
              <User className="absolute right-4 top-3.5 w-5 h-5 text-[#528292]/60" />
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-[#000F18]/60 border border-[#528292]/30 rounded-lg text-white placeholder-white/40 focus:border-[#EF7A1E] outline-none transition-all"
                required
              />
              <Mail className="absolute right-4 top-3.5 w-5 h-5 text-[#528292]/60" />
            </div>

            {/* Subject */}
            <div className="relative">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full px-4 py-3 bg-[#000F18]/60 border border-[#528292]/30 rounded-lg text-white placeholder-white/40 focus:border-[#EF7A1E] outline-none transition-all"
                required
              />
              <Edit3 className="absolute right-4 top-3.5 w-5 h-5 text-[#528292]/60" />
            </div>

            {/* Project Type */}
            <div>
              <h4 className="text-sm font-medium text-white/70 mb-2">Project Type</h4>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "Portfolio", icon: <User className="w-4 h-4" /> },
                  { label: "Full Stack", icon: <Layers className="w-4 h-4" /> },
                  { label: "UI/UX", icon: <PenTool className="w-4 h-4" /> },
                ].map((item, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setFormData({ ...formData, projectType: item.label })}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-sm transition-all ${
                      formData.projectType === item.label
                        ? "bg-[#EF7A1E] text-white border-[#EF7A1E]"
                        : "bg-[#000F18]/60 text-white/70 border-[#528292]/30 hover:border-[#EF7A1E]/60"
                    }`}
                  >
                    {item.icon}
                    {item.label}
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
                rows={4}
                placeholder="Your Message..."
                className="w-full px-4 py-3 bg-[#000F18]/60 border border-[#528292]/30 rounded-lg text-white placeholder-white/40 focus:border-[#EF7A1E] outline-none resize-none transition-all"
                required
              />
              <MessageSquare className="absolute right-4 top-3.5 w-5 h-5 text-[#528292]/60" />
            </div>

            {/* Submit */}
            <Button
              type="submit"
              className="w-full bg-[#EF7A1E] hover:bg-[#EF7A1E]/90 text-white font-medium py-3 rounded-lg transition-transform duration-200 hover:scale-[1.02]"
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
