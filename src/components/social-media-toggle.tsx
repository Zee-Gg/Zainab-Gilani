//       "use client"

// import { useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { Plus, X, Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react"

// export default function SocialMediaToggle() {
//   const [isOpen, setIsOpen] = useState(false)

//   const socialLinks = [
//     { icon: Github, href: "https://github.com/zainabgilani", label: "GitHub" },
//     { icon: Linkedin, href: "https://linkedin.com/in/zainabgilani", label: "LinkedIn" },
//     { icon: Instagram, href: "https://instagram.com/zainabgilani", label: "Instagram" },
//     { icon: Mail, href: "mailto:zainab@example.com", label: "Email" },
//   ]

//   return (
//   <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col items-center z-50" style={{ position: 'absolute', top: '50%', right: '2rem', transform: 'translateY(-50%)' }}>
//       <div className="flex flex-col gap-4">
//         {socialLinks.map((social, index) => (
//           <motion.a
//             key={social.label}
//             href={social.href}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="w-10 h-10 bg-white text-primary rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
//             initial={{
//               opacity: 0,
//               x: -20,
//               scale: 0.8,
//             }}
//             animate={{
//               opacity: 1,
//               x: 0,
//               scale: 1,
//             }}
//             transition={{
//               duration: 0.3,
//               delay: index * 0.1,
//               type: "spring",
//               stiffness: 300,
//               damping: 20,
//             }}
//             whileHover={{
//               scale: 1.2,
//               backgroundColor: "var(--primary)",
//               color: "white",
//             }}
//             whileTap={{ scale: 0.9 }}
//           >
//             <social.icon className="w-4 h-4" />
//           </motion.a>
//         ))}
//       </div>
//     </div>
//   )
// }





"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Instagram, Mail } from "lucide-react"

export default function SocialMediaToggle() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/zainabgilani", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/zainabgilani", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/zainabgilani", label: "Instagram" },
    { icon: Mail, href: "mailto:zainab@example.com", label: "Email" },
  ]

  return (
    // ✅ Keep parent relative (in HeroSection)
    <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 z-10">
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-white text-primary rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
          initial={{ opacity: 0, x: -20, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            duration: 0.3,
            delay: index * 0.1,
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
          whileHover={{
            scale: 1.2,
            backgroundColor: "var(--primary)",
            color: "white",
          }}
          whileTap={{ scale: 0.9 }}
        >
          <social.icon className="w-4 h-4" />
        </motion.a>
      ))}
    </div>
  )
}
