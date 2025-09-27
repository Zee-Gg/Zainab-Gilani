// "use client"
// import {
//   FaCalendarAlt,
//   FaMapMarkerAlt,
//   FaBuilding,
//   FaBrain,
//   FaRegDotCircle,
//   FaRobot,
//   FaFileAlt,
//   FaChartBar,
//   FaRegListAlt,
//   FaUtensils,
//   FaLaptopCode,
//   FaChartPie,
//   FaTools
// } from "react-icons/fa"
// import { motion } from "framer-motion"

// export default function ExperienceSection() {
//   const experiences = [
//     {
//       title: "Web AI Intern",
//       company: "Explorer Bees",
//       location: "NASTP Rawalpindi",
//       period: "2025",
//       description: "AI solutions for computer vision & NLP projects.",
//       achievements: [
//         { label: "Ball Detection (MMAction2)", icon: <FaRegDotCircle className="text-[#EF7A1E]" /> },
//         { label: "PDF Chatbot (LLMs + Streamlit)", icon: <FaRobot className="text-[#EF7A1E]" /> },
        
//       ],
//       technologies: ["Python", "mmAction2", "Streamlit", "LLMs"],
//       type: "internship",
//     },
//     {
//       title: "Frontend Development Intern",
//       company: "A&D Tech Solutions",
//       location: "Remote",
//       period: "2024",
//       description: "Frontend development & real-world apps.",
//       achievements: [
//         { label: "Quiz App", icon: <FaRegListAlt className="text-[#EF7A1E]" /> },
//         { label: "Restaurant Booking", icon: <FaUtensils className="text-[#EF7A1E]" /> },
//         { label: "Dynamic Devs Clone", icon: <FaLaptopCode className="text-[#EF7A1E]" /> },
//         { label: "Social Dashboard", icon: <FaChartPie className="text-[#EF7A1E]" /> },
//       ],
//       technologies: ["HTML", "CSS", "JavaScript", "React"],
//       type: "internship",
//     },
//   ]

//   return (
//     <section id="experience" className="py-20 bg-[#002431]">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
//             Professional  <span className="text-[#EF7A1E]">Growth</span>
//           </h2>
//           <p className="text-white/60">Hands-on experience in AI & frontend development</p>
//         </div>

//         <div className="space-y-10">
//           {experiences.map((exp, index) => (
//             <motion.div
//               key={index}
//               className="relative bg-[#000F18]/60 border border-[#528292]/20 rounded-2xl p-8 hover:border-[#528292]/50 transition-all duration-300"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               {/* Header */}
//               <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
//                 <div>
//                   <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
//                   <div className="flex flex-wrap gap-4 text-sm text-white/70">
//                     <span className="flex items-center gap-2">
//                       <FaBuilding className="h-4 w-4 text-[#528292]" /> {exp.company}
//                     </span>
//                     <span className="flex items-center gap-2">
//                       <FaMapMarkerAlt className="h-4 w-4 text-[#528292]" /> {exp.location}
//                     </span>
//                     <span className="flex items-center gap-2">
//                       <FaCalendarAlt className="h-4 w-4 text-[#528292]" />{index === 0 ? " July 2025 - Sep 2025" : ` ${exp.period}`}
//                     </span>
//                   </div>
//                 </div>

//                 <div className="mt-4 md:mt-0 px-3 py-1 bg-[#EF7A1E] text-white text-xs rounded-full">
//                   {exp.type}
//                 </div>
//               </div>

//               {/* Achievements */}
//               <div className="mb-6">
//                 <h4 className="text-[#EF7A1E] font-semibold mb-4 flex items-center gap-2">
//                   <FaBrain className="h-4 w-4" /> Highlights
//                 </h4>
//                 <div className={`grid ${index === 0 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-2 md:grid-cols-4'} gap-6`}>
//                   {exp.achievements.map((ach, achIndex) => (
//                     <div
//                       key={achIndex}
//                       className="flex flex-row items-center bg-[#000F18]/40 rounded-xl border border-[#528292]/20 p-6 gap-4 shadow-md hover:scale-105 hover:border-[#528292]/40 transition-all"
//                     >
//                       <span className="text-3xl">{ach.icon}</span>
//                       <div>
//                         <p className="text-white font-semibold text-lg mb-1">{ach.label}</p>
//                         {index === 0 && ach.label.includes('Ball Detection') && (
//                           <span className="text-white/70 text-sm">AI-powered sports analytics using MMAction2</span>
//                         )}
//                         {index === 0 && ach.label.includes('PDF Chatbot') && (
//                           <span className="text-white/70 text-sm">LLMs & Streamlit for document Q&A</span>
//                         )}
//                         {index === 1 && ach.label.includes('Quiz App') && (
//                           <span className="text-white/70 text-sm">Interactive quiz platform</span>
//                         )}
//                         {index === 1 && ach.label.includes('Restaurant Booking') && (
//                           <span className="text-white/70 text-sm">Online reservation system</span>
//                         )}
//                         {index === 1 && ach.label.includes('Dynamic Devs Clone') && (
//                           <span className="text-white/70 text-sm">Portfolio website clone</span>
//                         )}
//                         {index === 1 && ach.label.includes('Social Dashboard') && (
//                           <span className="text-white/70 text-sm">Analytics dashboard for social media</span>
//                         )}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//                 {/* Efficiency Improvement Chart - separate display */}
//                 {index === 0 && (
//                   <div className="flex flex-col items-center mt-8">
//                     <svg width="64" height="64" viewBox="0 0 64 64">
//                       <circle cx="32" cy="32" r="28" fill="#222" stroke="#528292" strokeWidth="6" />
//                       <circle
//                         cx="32"
//                         cy="32"
//                         r="28"
//                         fill="none"
//                         stroke="#EF7A1E"
//                         strokeWidth="6"
//                         strokeDasharray={2 * Math.PI * 28}
//                         strokeDashoffset={2 * Math.PI * 28 * 0.2}
//                         strokeLinecap="round"
//                       />
//                     </svg>
//                     <span className="text-[#EF7A1E] font-bold text-base mt-2">Efficiency Improvement: 80%</span>
//                   </div>
//                 )}
//               </div>

//               {/* Tech Stack */}
//               <div>
//                 <h4 className="text-[#EF7A1E] font-semibold mb-3 flex items-center gap-2">
//                   <FaTools className="h-4 w-4" /> Technologies &amp; Tools
//                 </h4>
//                 <div className="flex flex-wrap gap-2">
//                   {exp.technologies.map((tech, techIndex) => (
//                     <span
//                       key={techIndex}
//                       className="px-3 py-1 bg-[#528292]/80 text-white text-xs rounded-full hover:bg-[#528292] transition"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// "use client"
// import {
//   FaCalendarAlt,
//   FaMapMarkerAlt,
//   FaBuilding,
//   FaBrain,
//   FaRegDotCircle,
//   FaRobot,
//   FaRegListAlt,
//   FaUtensils,
//   FaLaptopCode,
//   FaChartPie,
//   FaTools,
// } from "react-icons/fa"
// import { motion } from "framer-motion"

// export default function ExperienceSection() {
//   const experiences = [
//     {
//       title: "Web AI Intern",
//       company: "Explorer Bees",
//       location: "NASTP Rawalpindi",
//       period: "July 2025 – Sep 2025",
//       description: "AI solutions for computer vision & NLP projects.",
//       achievements: [
//         { label: "Ball Detection (MMAction2)", icon: <FaRegDotCircle /> },
//         { label: "PDF Chatbot (LLMs + Streamlit)", icon: <FaRobot /> },
//       ],
//       technologies: ["Python", "MMAction2", "Streamlit", "LLMs"],
//       efficiency: 80,
//       type: "Internship",
//     },
//     {
//       title: "Frontend Development Intern",
//       company: "A&D Tech Solutions",
//       location: "Remote",
//       period: "2024",
//       description: "Frontend development & real-world apps.",
//       achievements: [
//         { label: "Quiz App", icon: <FaRegListAlt /> },
//         { label: "Restaurant Booking", icon: <FaUtensils /> },
//         { label: "Dynamic Devs Clone", icon: <FaLaptopCode /> },
//         { label: "Social Dashboard", icon: <FaChartPie /> },
//       ],
//       technologies: ["HTML", "CSS", "JavaScript", "React"],
//       type: "Internship",
//     },
//   ]

//   return (
//     <section id="experience" className="py-24 bg-gradient-to-b from-[#000F18] to-[#001923] relative">
//       <div className="max-w-6xl mx-auto px-6">
//         {/* Section Header */}
//         <motion.div
//           className="text-center mb-20"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
//             Professional <span className="text-[#EF7A1E]">Growth</span>
//           </h2>
//           <p className="text-white/70 max-w-xl mx-auto">
//             Hands-on journey in AI & Frontend Development
//           </p>
//         </motion.div>

//         <div className="relative">
//           {/* Timeline vertical line */}
//           <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#EF7A1E] to-transparent"></div>

//           <div className="space-y-16">
//             {experiences.map((exp, index) => (
//               <motion.div
//                 key={index}
//                 className={`relative flex flex-col md:flex-row gap-8 items-start md:items-center ${
//                   index % 2 === 0 ? "md:flex-row-reverse" : ""
//                 }`}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//               >
//                 {/* Dot marker */}
//                 <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-[#EF7A1E] shadow-lg"></div>

//                 {/* Card */}
//                 <div className="flex-1 bg-[#000F18]/70 backdrop-blur-md border border-[#528292]/20 rounded-2xl p-8 shadow-xl hover:shadow-[#EF7A1E]/20 transition-all">
//                   {/* Header */}
//                   <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
//                     <div>
//                       <h3 className="text-xl font-bold text-white">{exp.title}</h3>
//                       <div className="flex flex-wrap gap-4 text-sm text-white/70 mt-2">
//                         <span className="flex items-center gap-2">
//                           <FaBuilding className="text-[#528292]" /> {exp.company}
//                         </span>
//                         <span className="flex items-center gap-2">
//                           <FaMapMarkerAlt className="text-[#528292]" /> {exp.location}
//                         </span>
//                         <span className="flex items-center gap-2">
//                           <FaCalendarAlt className="text-[#528292]" /> {exp.period}
//                         </span>
//                       </div>
//                     </div>
//                     <span className="px-3 py-1 bg-[#EF7A1E] text-white text-xs rounded-full shadow">
//                       {exp.type}
//                     </span>
//                   </div>

//                   {/* Achievements */}
//                   <h4 className="text-[#EF7A1E] font-semibold mb-4 flex items-center gap-2">
//                     <FaBrain /> Highlights
//                   </h4>
//                   <div className="grid sm:grid-cols-2 gap-4 mb-6">
//                     {exp.achievements.map((ach, achIndex) => (
//                       <motion.div
//                         key={achIndex}
//                         className="flex items-center gap-3 bg-[#00141E]/60 border border-[#528292]/20 rounded-lg p-4 hover:border-[#EF7A1E]/40 hover:scale-[1.02] transition-all"
//                         whileHover={{ scale: 1.03 }}
//                       >
//                         <span className="text-[#EF7A1E] text-xl">{ach.icon}</span>
//                         <p className="text-white/80 text-sm">{ach.label}</p>
//                       </motion.div>
//                     ))}
//                   </div>

//                   {/* Efficiency Circle */}
//                   {exp.efficiency && (
//                     <div className="flex flex-col items-center mb-6">
//                       <div className="relative w-24 h-24">
//                         <svg className="absolute top-0 left-0" viewBox="0 0 100 100">
//                           <circle
//                             cx="50"
//                             cy="50"
//                             r="45"
//                             stroke="#528292"
//                             strokeWidth="8"
//                             fill="none"
//                           />
//                           <motion.circle
//                             cx="50"
//                             cy="50"
//                             r="45"
//                             stroke="#EF7A1E"
//                             strokeWidth="8"
//                             fill="none"
//                             strokeDasharray={2 * Math.PI * 45}
//                             strokeDashoffset={2 * Math.PI * 45}
//                             animate={{
//                               strokeDashoffset:
//                                 2 * Math.PI * 45 * (1 - exp.efficiency / 100),
//                             }}
//                             transition={{ duration: 1.5 }}
//                             strokeLinecap="round"
//                           />
//                         </svg>
//                         <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
//                           {exp.efficiency}%
//                         </div>
//                       </div>
//                       <p className="text-sm text-white/70 mt-2">
//                         Efficiency Improvement
//                       </p>
//                     </div>
//                   )}

//                   {/* Tech Stack */}
//                   <h4 className="text-[#EF7A1E] font-semibold mb-3 flex items-center gap-2">
//                     <FaTools /> Technologies
//                   </h4>
//                   <div className="flex flex-wrap gap-2">
//                     {exp.technologies.map((tech, techIndex) => (
//                       <span
//                         key={techIndex}
//                         className="px-3 py-1 bg-gradient-to-r from-[#528292]/80 to-[#264a57]/80 text-white text-xs rounded-full shadow-sm hover:scale-105 transition"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }














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
  FaTools,
} from "react-icons/fa"
import { motion } from "framer-motion"

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Web AI Intern",
      company: "Explorer Bees",
      location: "NASTP Rawalpindi",
      period: "July 2025 - Sep 2025",
      description: "AI solutions for computer vision & NLP projects.",
      achievements: [
        {
          label: "Ball Detection (MMAction2)",
          icon: <FaRegDotCircle className="text-[#EF7A1E]" />,
          detail: "AI-powered sports analytics using MMAction2",
        },
        {
          label: "PDF Chatbot (LLMs + Streamlit)",
          icon: <FaRobot className="text-[#EF7A1E]" />,
          detail: "LLMs & Streamlit for document Q&A",
          stat: "↑ 80% efficiency improvement",
        },
      ],
      technologies: ["Python", "mmAction2", "Streamlit", "LLMs"],
      type: "internship",
    },
    {
      title: "Frontend Development Intern",
      company: "A&D Tech Solutions",
      location: "Remote",
      period: "June 2024 - Aug 2024",
      description: "Frontend development & real-world apps.",
      achievements: [
        {
          label: "Quiz App",
          icon: <FaRegListAlt className="text-[#EF7A1E]" />,
          detail: "Interactive quiz platform",
          stat: "200+ quiz attempts daily",
        },
        {
          label: "Restaurant Booking",
          icon: <FaUtensils className="text-[#EF7A1E]" />,
          detail: "Online reservation system",
          stat: "↓ 40% booking errors",
        },
        {
          label: "Dynamic Devs Clone",
          icon: <FaLaptopCode className="text-[#EF7A1E]" />,
          detail: "Portfolio website clone",
        },
        {
          label: "Social Dashboard",
          icon: <FaChartPie className="text-[#EF7A1E]" />,
          detail: "Analytics dashboard for social media",
          stat: "+120 active users",
        },
      ],
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      type: "internship",
    },
  ]

  return (
    <section id="experience" className="py-20 bg-[#002431]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Professional <span className="text-[#EF7A1E]">Growth</span>
          </h2>
          <p className="text-white/60">Hands-on experience in AI & frontend development</p>
        </div>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative bg-gradient-to-br from-[#00151F] to-[#001E2C] border border-[#528292]/30 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:border-[#528292]/60 transition-all duration-500"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-white/70">
                    <span className="flex items-center gap-2">
                      <FaBuilding className="h-4 w-4 text-[#528292]" /> {exp.company}
                    </span>
                    <span className="flex items-center gap-2">
                      <FaMapMarkerAlt className="h-4 w-4 text-[#528292]" /> {exp.location}
                    </span>
                    <span className="flex items-center gap-2">
                      <FaCalendarAlt className="h-4 w-4 text-[#528292]" /> {exp.period}
                    </span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 px-3 py-1 bg-[#EF7A1E] text-white text-xs rounded-full uppercase tracking-wide">
                  {exp.type}
                </div>
              </div>

              {/* Achievements */}
              <div className="mb-6">
                <h4 className="text-[#EF7A1E] font-semibold mb-4 flex items-center gap-2">
                  <FaBrain className="h-4 w-4" /> Highlights
                </h4>
                <div className={`grid ${index === 0 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-2 md:grid-cols-4"} gap-6`}>
                  {exp.achievements.map((ach, achIndex) => (
                    <div
                      key={achIndex}
                      className="flex flex-col items-start bg-[#000F18]/50 rounded-xl border border-[#528292]/20 p-5 gap-3 shadow-md hover:scale-[1.02] hover:border-[#528292]/50 transition-all"
                    >
                      <span className="text-2xl">{ach.icon}</span>
                      <p className="text-white font-semibold">{ach.label}</p>
                      <span className="text-white/70 text-sm">{ach.detail}</span>
                      {ach.stat && (
                        <span className="mt-1 text-xs font-medium px-2 py-1 bg-[#EF7A1E]/20 text-[#EF7A1E] rounded-full">
                          {ach.stat}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-[#EF7A1E] font-semibold mb-3 flex items-center gap-2">
                  <FaTools className="h-4 w-4" /> Technologies &amp; Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-[#528292]/80 text-white text-xs rounded-full hover:bg-[#528292] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}




















































































