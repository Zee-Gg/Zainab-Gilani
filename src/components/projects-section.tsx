// // "use client"

// // import { Button } from "@/components/ui/button"
// // import { ExternalLink, Github, ArrowUpRight, Eye, Star, Calendar } from "lucide-react"
// // import { useState } from "react"

// // export default function ProjectsSection() {
// //   const [showAll, setShowAll] = useState(false)

// //   const projects = [
// //     {
// //       title: "E-Commerce Platform",
// //       description: "A full-stack e-commerce solution with modern UI/UX, payment integration, and admin dashboard.",
// //       tech: ["React", "Next.js", "TypeScript", "Stripe"],
// //       image: "/modern-ecommerce-interface.png",
// //       category: "Full Stack",
// //       year: "2024",
// //       status: "Live",
// //       views: "2.5k",
// //       liveUrl: "https://ecommerce.example.com",
// //       githubUrl: "https://github.com/username/ecommerce-platform",
// //     },
// //     {
// //       title: "Learning Management System",
// //       description: "Educational platform for online courses with student progress tracking and interactive features.",
// //       tech: ["React", "Node.js", "MongoDB", "Socket.io"],
// //       image: "/lms-dashboard.png",
// //       category: "Web App",
// //       year: "2024",
// //       status: "Live",
// //       views: "1.8k",
// //       liveUrl: "https://lms.example.com",
// //       githubUrl: "https://github.com/username/lms-platform",
// //     },
// //     {
// //       title: "Healthcare Dashboard",
// //       description: "Medical dashboard for patient management with data visualization and appointment scheduling.",
// //       tech: ["Vue.js", "Python", "PostgreSQL", "Chart.js"],
// //       image: "/healthcare-medical-dashboard-interface.jpg",
// //       category: "UI/UX Design",
// //       year: "2023",
// //       status: "Live",
// //       views: "3.2k",
// //       liveUrl: "https://healthcare.example.com",
// //       githubUrl: "https://github.com/username/healthcare-dashboard",
// //     },
// //     {
// //       title: "Real Estate App",
// //       description: "Property listing platform with advanced search, virtual tours, and agent management system.",
// //       tech: ["React Native", "Firebase", "Google Maps", "Stripe"],
// //       image: "/real-estate-property-listing-app.jpg",
// //       category: "Mobile App",
// //       year: "2023",
// //       status: "Development",
// //       views: "1.1k",
// //       liveUrl: "https://realestate.example.com",
// //       githubUrl: "https://github.com/username/real-estate-app",
// //     },
// //     {
// //       title: "Social Media Analytics",
// //       description: "Comprehensive analytics dashboard for social media performance tracking and insights.",
// //       tech: ["React", "D3.js", "Node.js", "Redis"],
// //       image: "/social-media-analytics-dashboard.png",
// //       category: "Analytics",
// //       year: "2023",
// //       status: "Live",
// //       views: "950",
// //       liveUrl: "https://analytics.example.com",
// //       githubUrl: "https://github.com/username/social-media-analytics",
// //     },
// //     {
// //       title: "Task Management Tool",
// //       description: "Collaborative project management platform with real-time updates and team coordination.",
// //       tech: ["Vue.js", "Express", "MongoDB", "WebSocket"],
// //       image: "/task-management-interface.png",
// //       category: "Productivity",
// //       year: "2022",
// //       status: "Live",
// //       views: "1.4k",
// //       liveUrl: "https://tasks.example.com",
// //       githubUrl: "https://github.com/username/task-management-tool",
// //     },
// //   ]

// //   const displayedProjects = showAll ? projects : projects.slice(0, 3)

// //   return (
// //     <section
// //       id="projects"
// //       className="py-20 bg-gradient-to-br from-[#000F18] via-[#002431] to-[#000F18] relative overflow-hidden"
// //     >
// //       <div className="absolute inset-0">
// //         <div className="absolute top-10 left-20 w-2 h-2 bg-[#EF7A1E] rounded-full animate-pulse"></div>
// //         <div className="absolute top-40 right-32 w-1 h-1 bg-[#528292] rounded-full animate-pulse delay-1000"></div>
// //         <div className="absolute bottom-32 left-16 w-1.5 h-1.5 bg-[#EF7A1E] rounded-full animate-pulse delay-500"></div>
// //         <div className="absolute bottom-20 right-20 w-2 h-2 bg-[#528292] rounded-full animate-pulse delay-700"></div>
// //       </div>

// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
// //         <div className="text-center mb-20">
// //           <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#528292]/10 rounded-full border border-[#528292]/20 mb-6">
// //             <Star className="h-4 w-4 text-[#EF7A1E]" />
// //             <span className="text-[#528292] text-sm font-medium">Featured Work</span>
// //           </div>
// //           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
// //             Featured <span className="text-[#EF7A1E]">Work</span>
// //           </h2>
// //           <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
// //             A look at projects I’ve built with a mix of creativity, detail, and modern design.
// //           </p>
// //         </div>

// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
// //           {displayedProjects.map((project, index) => (
// //             <div
// //               key={index}
// //               className="group relative bg-gradient-to-br from-[#002431]/50 to-[#000F18]/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-[#528292]/10 hover:border-[#528292]/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#EF7A1E]/10 flex flex-col h-full min-h-[500px]"
// //             >
// //               {/* Project Image with Overlay */}
// //               <div className="relative h-48 overflow-hidden">
// //                 <img
// //                   src={project.image || "/placeholder.svg"}
// //                   alt={project.title}
// //                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
// //                 />
// //                 <div className="absolute inset-0 bg-gradient-to-t from-[#000F18] via-transparent to-transparent opacity-60"></div>

// //                 {/* Status Badge */}
// //                 <div className="absolute top-4 left-4">
// //                   <span
// //                     className={`px-3 py-1 text-xs font-semibold rounded-full ${
// //                       project.status === "Live"
// //                         ? "bg-green-500/20 text-green-400 border border-green-500/30"
// //                         : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
// //                     }`}
// //                   >
// //                     {project.status}
// //                   </span>
// //                 </div>

// //                 {/* Category Badge */}
// //                 <div className="absolute top-4 right-4">
// //                   <span className="px-3 py-1 bg-[#EF7A1E]/90 text-white text-xs font-medium rounded-full backdrop-blur-sm">
// //                     {project.category}
// //                   </span>
// //                 </div>

// //                 {/* Hover Actions */}
// //                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
// //                   <div className="flex gap-3">
// //                     <Button
// //                       size="sm"
// //                       className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white border-0 rounded-full p-3 shadow-lg"
// //                     >
// //                       <Eye className="h-4 w-4" />
// //                     </Button>
// //                     <Button
// //                       size="sm"
// //                       className="bg-[#EF7A1E]/80 backdrop-blur-md hover:bg-[#EF7A1E] text-white border-0 rounded-full p-3 shadow-lg"
// //                     >
// //                       <ExternalLink className="h-4 w-4" />
// //                     </Button>
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Project Content */}
// //               <div className="p-6 space-y-4">
// //                 {/* Project Meta */}
// //                 <div className="flex items-center justify-between text-sm text-white/50">
// //                   <div className="flex items-center gap-2">
// //                     <Calendar className="h-3 w-3" />
// //                     <span>{project.year}</span>
// //                   </div>
// //                   <div className="flex items-center gap-2">
// //                     <Eye className="h-3 w-3" />
// //                     <span>{project.views}</span>
// //                   </div>
// //                 </div>

// //                 {/* Title and Description */}
// //                 <div className="space-y-3">
// //                   <h3 className="text-xl font-bold text-white group-hover:text-[#EF7A1E] transition-colors duration-300 line-clamp-2">
// //                     {project.title}
// //                   </h3>
// //                   <p className="text-white/70 text-sm leading-relaxed line-clamp-3">{project.description}</p>
// //                 </div>

// //                 {/* Tech Stack */}
// //                 <div className="flex flex-wrap gap-2">
// //                   {project.tech.slice(0, 3).map((tech, techIndex) => (
// //                     <span
// //                       key={techIndex}
// //                       className="px-2 py-1 bg-[#528292]/20 text-[#528292] text-xs font-medium rounded-md border border-[#528292]/30 hover:bg-[#528292]/30 transition-colors duration-200"
// //                     >
// //                       {tech}
// //                     </span>
// //                   ))}
// //                   {project.tech.length > 3 && (
// //                     <span className="px-2 py-1 bg-[#EF7A1E]/20 text-[#EF7A1E] text-xs font-medium rounded-md">
// //                       +{project.tech.length - 3}
// //                     </span>
// //                   )}
// //                 </div>

// //                 {/* Action Buttons */}
// //                 <div className="flex gap-3 pt-2">
// //                   <Button
// //                     size="sm"
// //                     className="flex-1 bg-gradient-to-r from-[#EF7A1E] to-[#EF7A1E]/80 hover:from-[#EF7A1E]/90 hover:to-[#EF7A1E]/70 text-white border-0 rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-300"
// //                   >
// //                     View Project
// //                   </Button>
// //                   <Button
// //                     size="sm"
// //                     className="flex-1 bg-gradient-to-r from-[#00B4D8] to-[#528292] hover:from-[#528292] hover:to-[#00B4D8] text-white border-0 rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-300"
// //                     onClick={() => window.open(project.liveUrl || '#', '_blank')}
// //                   >
// //                     Live
// //                   </Button>
// //                   <Button
// //                     size="sm"
// //                     variant="outline"
// //                     className="border border-[#528292]/50 text-[#528292] hover:bg-[#528292]/10 bg-transparent rounded-xl transition-all duration-300"
// //                     onClick={() => window.open(project.githubUrl || '#', '_blank')}
// //                   >
// //                     <Github className="h-4 w-4" />
// //                   </Button>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         <div className="text-center">
// //           <Button
// //             onClick={() => setShowAll(!showAll)}
// //             className="bg-gradient-to-r from-[#528292] to-[#528292]/80 hover:from-[#528292]/90 hover:to-[#528292]/70 text-white border-0 rounded-xl px-8 py-3 font-medium shadow-lg hover:shadow-xl transition-all duration-300 group"
// //           >
// //             {showAll ? "Show Less" : "View More Projects"}
// //             <ArrowUpRight
// //               className={`h-4 w-4 ml-2 transition-transform duration-300 ${showAll ? "rotate-180" : "group-hover:translate-x-1 group-hover:-translate-y-1"}`}
// //             />
// //           </Button>
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }



















// // "use client"

// // import {
// //   FaCalendarAlt,
// //   FaMapMarkerAlt,
// // } from "react-icons/fa"
// // import {
// //   ExternalLink,
// //   Github,
// //   ArrowUpRight,
// //   Eye,
// //   Star,
// //   Calendar,
// //   X
// // } from "lucide-react"
// // import { useState } from "react"
// // import { Button } from "@/components/ui/button"

// // export default function ProjectsSection() {
// //   const [showAll, setShowAll] = useState(false)
// //   const [selectedProject, setSelectedProject] = useState<any | null>(null)

// //   const projects = [
// //     {
// //       title: "E-Commerce Platform",
// //       description: "A full-stack e-commerce solution with modern UI/UX, payment integration, and admin dashboard.",
// //       tech: ["React", "Next.js", "TypeScript", "Stripe"],
// //       image: "/modern-ecommerce-interface.png",
// //       category: "Full Stack",
// //       year: "2024",
// //       status: "Live",
// //       views: "2.5k",
// //       liveUrl: "https://ecommerce.example.com",
// //       githubUrl: "https://github.com/username/ecommerce-platform",
// //     },
// //     {
// //       title: "Learning Management System",
// //       description: "Educational platform for online courses with student progress tracking and interactive features.",
// //       tech: ["React", "Node.js", "MongoDB", "Socket.io"],
// //       image: "/lms-dashboard.png",
// //       category: "Web App",
// //       year: "2024",
// //       status: "Live",
// //       views: "1.8k",
// //       liveUrl: "https://lms.example.com",
// //       githubUrl: "https://github.com/username/lms-platform",
// //     },
// //     {
// //       title: "Healthcare Dashboard",
// //       description: "Medical dashboard for patient management with data visualization and appointment scheduling.",
// //       tech: ["Vue.js", "Python", "PostgreSQL", "Chart.js"],
// //       image: "/healthcare-medical-dashboard-interface.jpg",
// //       category: "UI/UX Design",
// //       year: "2023",
// //       status: "Live",
// //       views: "3.2k",
// //       liveUrl: "https://healthcare.example.com",
// //       githubUrl: "https://github.com/username/healthcare-dashboard",
// //     },
// //   ]

// //   const displayedProjects = showAll ? projects : projects.slice(0, 3)

// //   return (
// //     <section
// //       id="projects"
// //       className="py-20 bg-gradient-to-br from-[#000F18] via-[#002431] to-[#000F18] relative overflow-hidden"
// //     >
// //       <div className="max-w-7xl mx-auto px-6 relative z-10">
// //         {/* Section Header */}
// //         <div className="text-center mb-20">
// //           <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#528292]/10 rounded-full border border-[#528292]/20 mb-6">
// //             <Star className="h-4 w-4 text-[#EF7A1E]" />
// //             <span className="text-[#528292] text-sm font-medium">Featured Work</span>
// //           </div>
// //           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
// //             Featured <span className="text-[#EF7A1E]">Work</span>
// //           </h2>
// //           <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
// //             A look at projects I’ve built with a mix of creativity, detail, and modern design.
// //           </p>
// //         </div>

// //         {/* Project Cards */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
// //           {displayedProjects.map((project, index) => (
// //             <div
// //               key={index}
// //               className="group relative bg-gradient-to-br from-[#002431]/50 to-[#000F18]/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-[#528292]/10 hover:border-[#528292]/30 transition-all duration-500 hover:scale-[1.02] flex flex-col h-full min-h-[500px]"
// //             >
// //               {/* Image */}
// //               <div className="relative h-48 overflow-hidden">
// //                 <img
// //                   src={project.image}
// //                   alt={project.title}
// //                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
// //                 />
// //                 <div className="absolute inset-0 bg-gradient-to-t from-[#000F18] via-transparent to-transparent opacity-60"></div>
// //               </div>

// //               {/* Content */}
// //               <div className="p-6 space-y-4 flex flex-col flex-1">
// //                 <div className="flex items-center justify-between text-sm text-white/50">
// //                   <span className="flex items-center gap-2"><Calendar className="h-3 w-3" /> {project.year}</span>
// //                   <span className="flex items-center gap-2"><Eye className="h-3 w-3" /> {project.views}</span>
// //                 </div>

// //                 <div>
// //                   <h3 className="text-xl font-bold text-white group-hover:text-[#EF7A1E] transition">
// //                     {project.title}
// //                   </h3>
// //                   <p className="text-white/70 text-sm line-clamp-3">{project.description}</p>
// //                 </div>

// //                 {/* Tech Stack */}
// //                 <div className="flex flex-wrap gap-2">
// //                   {project.tech.map((tech, i) => (
// //                     <span key={i} className="px-2 py-1 bg-[#528292]/20 text-[#528292] text-xs font-medium rounded-md">
// //                       {tech}
// //                     </span>
// //                   ))}
// //                 </div>

// //                 {/* Actions */}
// //                 <div className="flex gap-3 pt-2 mt-auto">
// //                   <Button
// //                     size="sm"
// //                     className="flex-1 bg-gradient-to-r from-[#EF7A1E] to-[#EF7A1E]/80 text-white rounded-xl"
// //                     onClick={() => setSelectedProject(project)}
// //                   >
// //                     View Project
// //                   </Button>
// //                   <Button
// //                     size="sm"
// //                     className="flex-1 bg-gradient-to-r from-[#00B4D8] to-[#528292] text-white rounded-xl"
// //                     onClick={() => window.open(project.liveUrl, "_blank")}
// //                   >
// //                     Live
// //                   </Button>
// //                   <Button
// //                     size="sm"
// //                     variant="outline"
// //                     className="border border-[#528292]/50 text-[#528292] rounded-xl"
// //                     onClick={() => window.open(project.githubUrl, "_blank")}
// //                   >
// //                     <Github className="h-4 w-4" />
// //                   </Button>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         {/* View More */}
// //         <div className="text-center">
// //           <Button
// //             onClick={() => setShowAll(!showAll)}
// //             className="bg-[#528292] text-white rounded-xl px-8 py-3"
// //           >
// //             {showAll ? "Show Less" : "View More Projects"}
// //           </Button>
// //         </div>
// //       </div>

// //       {/* Modal */}
// //       {selectedProject && (
// //         <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
// //           <div className="bg-[#00151F] rounded-2xl max-w-3xl w-full p-8 relative shadow-2xl">
// //             <button
// //               onClick={() => setSelectedProject(null)}
// //               className="absolute top-4 right-4 text-white hover:text-[#EF7A1E] transition"
// //             >
// //               <X className="h-6 w-6" />
// //             </button>

// //             <img src={selectedProject.image} alt={selectedProject.title} className="rounded-xl mb-6" />
// //             <h3 className="text-2xl font-bold text-white mb-3">{selectedProject.title}</h3>
// //             <p className="text-white/70 mb-6">{selectedProject.description}</p>

// //             <div className="flex flex-wrap gap-2 mb-6">
// //               {selectedProject.tech.map((tech: string, i: number) => (
// //                 <span key={i} className="px-3 py-1 bg-[#528292]/30 text-[#528292] rounded-full text-sm">
// //                   {tech}
// //                 </span>
// //               ))}
// //             </div>

// //             <div className="flex gap-4">
// //               <Button onClick={() => window.open(selectedProject.liveUrl, "_blank")} className="bg-[#EF7A1E] text-white rounded-xl">
// //                 Live Demo
// //               </Button>
// //               <Button variant="outline" onClick={() => window.open(selectedProject.githubUrl, "_blank")} className="border-[#528292] text-[#528292] rounded-xl">
// //                 <Github className="h-4 w-4 mr-2" /> GitHub
// //               </Button>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </section>
// //   )
// // }

















// "use client"

// import {
//   ExternalLink,
//   Github,
//   ArrowUpRight,
//   Eye,
//   Star,
//   Calendar,
//   X,
// } from "lucide-react"
// import { useState } from "react"
// import { Button } from "@/components/ui/button"

// ...existing code...
//     {
//       title: "E-Commerce Platform",
//       description: "A full-stack e-commerce solution with modern UI/UX, payment integration, and admin dashboard.",
//       longDescription:
//         "Developed a scalable e-commerce platform with role-based authentication, order management, payment processing, and a responsive dashboard for both admins and customers.",
//       contributions: [
//         "Designed and implemented the frontend with Next.js",
//         "Integrated Stripe for secure payments",
//         "Deployed with CI/CD pipeline on Vercel",
//       ],
//       tech: ["React", "Next.js", "TypeScript", "Stripe"],
//       image: "/modern-ecommerce-interface.png",
//       category: "Full Stack",
//       year: "2024",
//       status: "Live",
//       views: "2.5k",
//       liveUrl: "https://ecommerce.example.com",
//       githubUrl: "https://github.com/username/ecommerce-platform",
//     },
//     {
//       title: "Learning Management System",
//       description: "Educational platform for online courses with student progress tracking and interactive features.",
//       longDescription:
//         "Built a comprehensive LMS with course management, student progress tracking, and real-time discussions using WebSockets.",
//       contributions: [
//         "Implemented real-time chat with Socket.io",
//         "Built backend with Node.js & MongoDB",
//         "Optimized database queries for scalability",
//       ],
//       tech: ["React", "Node.js", "MongoDB", "Socket.io"],
//       image: "/lms-dashboard.png",
//       category: "Web App",
//       year: "2024",
//       status: "Live",
//       views: "1.8k",
//       liveUrl: "https://lms.example.com",
//       githubUrl: "https://github.com/username/lms-platform",
//     },
//     {
//       title: "Healthcare Dashboard",
//       description: "Medical dashboard for patient management with data visualization and appointment scheduling.",
//       longDescription:
//         "Created a healthcare platform to manage patients, visualize medical data, and streamline appointment scheduling.",
//       contributions: [
//         "Designed UI in Vue.js with reusable components",
//         "Integrated PostgreSQL for structured medical records",
//         "Built custom charts with Chart.js for data visualization",
//       ],
//       tech: ["Vue.js", "Python", "PostgreSQL", "Chart.js"],
//       image: "/healthcare-medical-dashboard-interface.jpg",
//       category: "UI/UX Design",
//       year: "2023",
//       status: "Live",
//       views: "3.2k",
//       liveUrl: "https://healthcare.example.com",
//       githubUrl: "https://github.com/username/healthcare-dashboard",
//     },
//   ]

//   const displayedProjects = showAll ? projects : projects.slice(0, 3)

//   return (
//     <section
//       id="projects"
//       className="py-20 bg-gradient-to-br from-[#000F18] via-[#002431] to-[#000F18] relative overflow-hidden"
//     >
//       <div className="max-w-7xl mx-auto px-6 relative z-10">
//         {/* Section Header */}
//         <div className="text-center mb-20">
//           <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#528292]/10 rounded-full border border-[#528292]/20 mb-6">
//             <Star className="h-4 w-4 text-[#EF7A1E]" />
//             <span className="text-[#528292] text-sm font-medium">
//               Featured Work
//             </span>
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//             Featured <span className="text-[#EF7A1E]">Work</span>
//           </h2>
//           <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
//             A look at projects I’ve built with a mix of creativity, detail, and
//             modern design.
//           </p>
//         </div>

//         {/* Project Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
//           {displayedProjects.map((project, index) => (
//             <div
//               key={index}
//               className="group relative bg-gradient-to-br from-[#002431]/50 to-[#000F18]/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-[#528292]/10 hover:border-[#528292]/30 transition-all duration-500 hover:scale-[1.02] flex flex-col h-full min-h-[500px]"
//             >
//               {/* Image */}
//               <div className="relative h-48 overflow-hidden">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#000F18] via-transparent to-transparent opacity-60"></div>
//               </div>

//               {/* Content */}
//               <div className="p-6 space-y-4 flex flex-col flex-1">
//                 <div className="flex items-center justify-between text-sm text-white/50">
//                   <span className="flex items-center gap-2">
//                     <Calendar className="h-3 w-3" /> {project.year}
//                   </span>
//                   <span className="flex items-center gap-2">
//                     <Eye className="h-3 w-3" /> {project.views}
//                   </span>
//                 </div>

//                 <div>
//                   <h3 className="text-xl font-bold text-white group-hover:text-[#EF7A1E] transition">
//                     {project.title}
//                   </h3>
//                   <p className="text-white/70 text-sm line-clamp-3">
//                     {project.description}
//                   </p>
//                 </div>

//                 {/* Tech Stack */}
//                 <div className="flex flex-wrap gap-2">
//                   {project.tech.map((tech, i) => (
//                     <span
//                       key={i}
//                       className="px-2 py-1 bg-[#528292]/20 text-[#528292] text-xs font-medium rounded-md"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>

//                 {/* Actions */}
//                 <div className="flex gap-3 pt-2 mt-auto">
//                   <Button
//                     size="sm"
//                     className="flex-1 bg-gradient-to-r from-[#EF7A1E] to-[#EF7A1E]/80 text-white rounded-xl"
//                     onClick={() => setSelectedProject(project)}
//                   >
//                     View Project
//                   </Button>
//                   <Button
//                     size="sm"
//                     className="flex-1 bg-gradient-to-r from-[#00B4D8] to-[#528292] text-white rounded-xl"
//                     onClick={() => window.open(project.liveUrl, "_blank")}
//                   >
//                     Live
//                   </Button>
//                   <Button
//                     size="sm"
//                     variant="outline"
//                     className="border border-[#528292]/50 text-[#528292] rounded-xl"
//                     onClick={() => window.open(project.githubUrl, "_blank")}
//                   >
//                     <Github className="h-4 w-4" />
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* View More */}
//         <div className="text-center">
//           <Button
//             onClick={() => setShowAll(!showAll)}
//             className="bg-[#528292] text-white rounded-xl px-8 py-3"
//           >
//             {showAll ? "Show Less" : "View More Projects"}
//           </Button>
//         </div>
//       </div>

//       {/* Modal */}
//       {selectedProject && (
//         <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
//           <div className="bg-[#00151F] rounded-2xl max-w-3xl w-full p-8 relative shadow-2xl overflow-y-auto max-h-[90vh]">
//             <button
//               onClick={() => setSelectedProject(null)}
//               className="absolute top-4 right-4 text-white hover:text-[#EF7A1E] transition"
//             >
//               <X className="h-6 w-6" />
//             </button>

//             {/* Hero Image */}
//             <img
//               src={selectedProject.image}
//               alt={selectedProject.title}
//               className="rounded-xl mb-6"
//             />

//             <h3 className="text-2xl font-bold text-white mb-3">
//               {selectedProject.title}
//             </h3>
//             <p className="text-white/70 mb-6">
//               {selectedProject.longDescription}
//             </p>

//             {/* Contributions */}
//             <div className="mb-6">
//               <h4 className="text-white font-semibold mb-2">
//                 My Contributions
//               </h4>
//               <ul className="list-disc list-inside text-white/70 text-sm space-y-1">
//                 {selectedProject.contributions?.map((item: string, i: number) => (
//                   <li key={i}>{item}</li>
//                 ))}
//               </ul>
//             </div>

//             {/* Tech Stack */}
//             <div className="mb-6">
//               <h4 className="text-white font-semibold mb-2">Tech Stack</h4>
//               <div className="flex flex-wrap gap-2">
//                 {selectedProject.tech.map((tech: string, i: number) => (
//                   <span
//                     key={i}
//                     className="px-3 py-1 bg-[#528292]/30 text-[#528292] rounded-full text-sm"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             {/* Action Buttons */}
//             <div className="flex gap-4">
//               <Button
//                 onClick={() => window.open(selectedProject.liveUrl, "_blank")}
//                 className="bg-[#EF7A1E] text-white rounded-xl"
//               >
//                 <ExternalLink className="h-4 w-4 mr-2" /> Live Demo
//               </Button>
//               <Button
//                 variant="outline"
//                 onClick={() => window.open(selectedProject.githubUrl, "_blank")}
//                 className="border-[#528292] text-[#528292] rounded-xl"
//               >
//                 <Github className="h-4 w-4 mr-2" /> GitHub
//               </Button>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   )
// }




"use client"

import { useState } from "react"
import { Star, ExternalLink, Github, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProjectsList from "./project-card"

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false)
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

  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects: Project[] = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with modern UI/UX, payment integration, and admin dashboard.",
      longDescription: "Developed a scalable e-commerce platform...",
      contributions: ["Designed frontend with Next.js", "Integrated Stripe", "Deployed on Vercel"],
      tech: ["React", "Next.js", "TypeScript", "Stripe"],
      image: "/modern-ecommerce-interface.png",
      category: "Full Stack",
      year: "2024",
      status: "Live",
      views: "2.5k",
      liveUrl: "https://ecommerce.example.com",
      githubUrl: "https://github.com/username/ecommerce-platform",
    },
     {
      title: "Learning Management System",
      description: "Educational platform for online courses with student progress tracking and interactive features.",
      longDescription:
        "Built a comprehensive LMS with course management, student progress tracking, and real-time discussions using WebSockets.",
      contributions: [
        "Implemented real-time chat with Socket.io",
        "Built backend with Node.js & MongoDB",
        "Optimized database queries for scalability",
      ],
      tech: ["React", "Node.js", "MongoDB", "Socket.io"],
      image: "/lms-dashboard.png",
      category: "Web App",
      year: "2024",
      status: "Live",
      views: "1.8k",
      liveUrl: "https://lms.example.com",
      githubUrl: "https://github.com/username/lms-platform",
    },
    {
      title: "Healthcare Dashboard",
      description: "Medical dashboard for patient management with data visualization and appointment scheduling.",
      longDescription:
        "Created a healthcare platform to manage patients, visualize medical data, and streamline appointment scheduling.",
      contributions: [
        "Designed UI in Vue.js with reusable components",
        "Integrated PostgreSQL for structured medical records",
        "Built custom charts with Chart.js for data visualization",
      ],
      tech: ["Vue.js", "Python", "PostgreSQL", "Chart.js"],
      image: "/healthcare-medical-dashboard-interface.jpg",
      category: "UI/UX Design",
      year: "2023",
      status: "Live",
      views: "3.2k",
      liveUrl: "https://healthcare.example.com",
      githubUrl: "https://github.com/username/healthcare-dashboard",
    },
  

  ]

  const displayedProjects = showAll ? projects : projects.slice(0, 3)

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-[#000F18] via-[#002431] to-[#000F18] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#528292]/10 rounded-full border border-[#528292]/20 mb-6">
            <Star className="h-4 w-4 text-[#EF7A1E]" />
            <span className="text-[#528292] text-sm font-medium">Featured Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="text-[#EF7A1E]">Work</span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            A look at projects I’ve built with a mix of creativity, detail, and modern design.
          </p>
        </div>

        {/* Project List */}
        <ProjectsList projects={displayedProjects} onSelect={setSelectedProject} />

        {/* View More */}
        <div className="text-center">
          <Button onClick={() => setShowAll(!showAll)} className="bg-[#528292] text-white rounded-xl px-8 py-3">
            {showAll ? "Show Less" : "View More Projects"}
          </Button>
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-[#00151F] rounded-2xl max-w-3xl w-full p-8 relative shadow-2xl overflow-y-auto max-h-[90vh]">
            <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 text-white hover:text-[#EF7A1E] transition">
              <X className="h-6 w-6" />
            </button>
            <img src={selectedProject.image} alt={selectedProject.title} className="rounded-xl mb-6" />
            <h3 className="text-2xl font-bold text-white mb-3">{selectedProject.title}</h3>
            <p className="text-white/70 mb-6">{selectedProject.longDescription}</p>
            <div className="mb-6">
              <h4 className="text-white font-semibold mb-2">My Contributions</h4>
              <ul className="list-disc list-inside text-white/70 text-sm space-y-1">
                {selectedProject.contributions?.map((item: string, i: number) => <li key={i}>{item}</li>)}
              </ul>
            </div>
            <div className="mb-6">
              <h4 className="text-white font-semibold mb-2">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((tech: string, i: number) => (
                  <span key={i} className="px-3 py-1 bg-[#528292]/30 text-[#528292] rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-4">
              <Button onClick={() => window.open(selectedProject.liveUrl, "_blank")} className="bg-[#EF7A1E] text-white rounded-xl">
                <ExternalLink className="h-4 w-4 mr-2" /> Live Demo
              </Button>
              <Button variant="outline" onClick={() => window.open(selectedProject.githubUrl, "_blank")} className="border-[#528292] text-[#528292] rounded-xl">
                <Github className="h-4 w-4 mr-2" /> GitHub
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
