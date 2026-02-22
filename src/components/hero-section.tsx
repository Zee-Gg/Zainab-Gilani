

"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { motion, useMotionValue, useSpring, animate } from "framer-motion"
import { useEffect, useRef, useState } from "react"

/* ─────────────────────────────────────────
   LOOPING COUNTER
   counts 0 → target, pauses, repeats forever
───────────────────────────────────────── */
function Counter({
  target,
  suffix,
  label,
  delay,
}: {
  target: number
  suffix: string
  label: string
  delay: number
}) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    let cancelled = false
    let controls: { stop: () => void } | null = null
    let pauseTimer: ReturnType<typeof setTimeout>

    function runCycle() {
      if (cancelled) return
      setValue(0)
      controls = animate(0, target, {
        duration: 2.2,
        ease: [0.16, 1, 0.3, 1] as any,
        onUpdate: (v) => !cancelled && setValue(Math.floor(v)),
        onComplete: () => {
          pauseTimer = setTimeout(() => {
            if (!cancelled) runCycle()
          }, 3000)
        },
      })
    }

    const startTimer = setTimeout(runCycle, delay)

    return () => {
      cancelled = true
      clearTimeout(startTimer)
      clearTimeout(pauseTimer)
      controls?.stop()
    }
  }, [target, delay])

  return (
    <div className="flex flex-col items-center gap-1 text-center">
      <span className="text-3xl font-bold text-primary leading-none tabular-nums">
        {value}
        {suffix}
      </span>
      <span className="text-[9px] text-muted-foreground tracking-widest uppercase">
        {label}
      </span>
    </div>
  )
}

/* ─────────────────────────────────────────
   MARQUEE
───────────────────────────────────────── */
const MARQUEE_ITEMS = [
  "Web Developer", "★", "UI/UX Designer", "★",
  "Creative Coder", "★", "Problem Solver", "★", "Available for Work", "★",
]
function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]
  return (
    <div className="overflow-hidden whitespace-nowrap border-y border-foreground/10 py-3 bg-background select-none">
      <motion.div
        className="inline-flex gap-10"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            className={`text-xs tracking-[0.25em] uppercase ${
              item === "★" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

/* ─────────────────────────────────────────
   TYPEWRITER
───────────────────────────────────────── */
const ROLES = ["Web Developer.", "UI/UX Designer.", "Problem Solver.", "Creative Coder."]

function Cursor() {
  return (
    <motion.span
      className="inline-block w-[2px] h-[1em] bg-primary align-middle ml-0.5 mb-0.5"
      animate={{ opacity: [1, 0] }}
      transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
    />
  )
}

function Typewriter() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState("")
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const full = ROLES[roleIdx]
    let t: ReturnType<typeof setTimeout>
    if (!deleting && displayed.length < full.length)
      t = setTimeout(() => setDisplayed(full.slice(0, displayed.length + 1)), 65)
    else if (!deleting && displayed.length === full.length)
      t = setTimeout(() => setDeleting(true), 2000)
    else if (deleting && displayed.length > 0)
      t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 38)
    else {
      setDeleting(false)
      setRoleIdx((i) => (i + 1) % ROLES.length)
    }
    return () => clearTimeout(t)
  }, [displayed, deleting, roleIdx])

  return (
    <span className="text-primary font-semibold">
      {displayed}
      <Cursor />
    </span>
  )
}

/* ─────────────────────────────────────────
   PER-LETTER HOVER NAME
───────────────────────────────────────── */
function HoverName() {
  const words = ["Zainab", "Gilani"]
  return (
    <h1
      className="font-bold leading-tight tracking-tight flex flex-wrap justify-center gap-x-[0.25em]"
      style={{ fontSize: "clamp(2.8rem, 7vw, 6rem)" }}
    >
      {words.map((word, wi) => (
        <span key={wi} className="flex">
          {word.split("").map((char, ci) => (
            <motion.span
              key={ci}
              className={wi === 1 ? "text-primary" : "text-foreground"}
              whileHover={{ y: -6, transition: { type: "spring", stiffness: 700, damping: 16 } }}
              style={{ display: "inline-block", cursor: "default" }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </h1>
  )
}

/* ─────────────────────────────────────────
   MAGNETIC SOCIAL ICON
───────────────────────────────────────── */
function MagneticIcon({ href, children }: { href: string; children: React.ReactNode }) {
  const ref = useRef<HTMLAnchorElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 200, damping: 14 })
  const sy = useSpring(y, { stiffness: 200, damping: 14 })

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ x: sx, y: sy }}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect()
        x.set((e.clientX - r.left - r.width / 2) * 0.4)
        y.set((e.clientY - r.top - r.height / 2) * 0.4)
      }}
      onMouseLeave={() => { x.set(0); y.set(0) }}
      className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-200"
    >
      {children}
    </motion.a>
  )
}

/* ═══════════════════════════════════════════════
   MAIN HERO
═══════════════════════════════════════════════ */
export default function HeroSection() {
  const [ready, setReady] = useState(false)
  const [heroVisible, setHeroVisible] = useState(true)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 80)
    return () => clearTimeout(t)
  }, [])

  // Show/hide fixed sidebars based on whether hero section is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setHeroVisible(entry.isIntersecting),
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const up = (delay: number) => ({
    initial: { opacity: 0, y: 28 },
    animate: ready ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as any },
  })

  return (
    <section
      ref={sectionRef}
      id="home"
      className="min-h-screen bg-background text-foreground flex flex-col relative overflow-hidden pt-16"
    >
      {/* dot texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      {/* ── LEFT SIDEBAR: socials — fixed, visible only when hero in view ── */}
      <motion.div
        className="fixed left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4 z-30"
        animate={{ opacity: heroVisible ? 1 : 0, x: heroVisible ? 0 : -20 }}
        initial={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.4 }}
      >
        <div className="w-px h-16 bg-border" />
        <MagneticIcon href="https://www.linkedin.com/in/zainab-gilani">
          <Linkedin className="w-4 h-4" />
        </MagneticIcon>
        <MagneticIcon href="https://github.com/Zee-Gg">
          <Github className="w-4 h-4" />
        </MagneticIcon>
        <MagneticIcon href="mailto:zainabgilani2226@gmail.com">
          <Mail className="w-4 h-4" />
        </MagneticIcon>
        <div className="w-px h-16 bg-border" />
      </motion.div>

      {/* ── RIGHT SIDEBAR: stats — fixed, visible only when hero in view ── */}
      <motion.div
        className="fixed right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-6 z-30"
        animate={{ opacity: heroVisible ? 1 : 0, x: heroVisible ? 0 : 20 }}
        initial={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.4 }}
      >
        <div className="w-px h-16 bg-border" />
        <Counter target={1500} suffix="+" label="Followers" delay={1000} />
        <Counter target={100} suffix="+" label="Mentored" delay={1150} />
        <Counter target={15} suffix="+" label="Projects" delay={1300} />
        <div className="w-px h-16 bg-border" />
      </motion.div>

      {/* ══════ CENTER CONTENT ══════ */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6 gap-6 py-10">

        {/* availability badge */}
        <motion.div {...up(0.15)}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Available for new projects
          </span>
        </motion.div>

        {/* name */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : {}}
          transition={{ delay: 0.25, duration: 0.01 }}
        >
          <HoverName />
        </motion.div>

        {/* typewriter role */}
        <motion.p {...up(0.4)} className="text-lg md:text-xl text-muted-foreground font-light">
          I&apos;m a <Typewriter />
        </motion.p>

        {/* description */}
        <motion.p
          {...up(0.5)}
          className="text-base text-muted-foreground leading-relaxed max-w-lg"
        >
          I craft websites and interfaces that feel simple, modern, and meaningful 
          turning ideas into experiences people enjoy.
        </motion.p>

        {/* CTA buttons */}
        <motion.div {...up(0.6)} className="flex flex-col sm:flex-row gap-4 pt-2">
          <Button
            size="lg"
            className="rounded-full font-medium"
            onClick={() => window.open("https://topmate.io/zainab_gilani/", "_blank")}
          >
            Book a 1:1 Call
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full font-medium"
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Request a Service
          </Button>
        </motion.div>
      </div>

      {/* ══════ MARQUEE ══════ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : {}}
        transition={{ delay: 1.0, duration: 0.5 }}
      >
        <Marquee />
      </motion.div>
    </section>
  )
}