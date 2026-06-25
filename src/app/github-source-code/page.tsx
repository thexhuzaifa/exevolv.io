'use client'

import Link from 'next/link'
import { Github, ExternalLink, Code2, UserRound, ArrowUpRight, Sparkles, GitBranch, Star, GitCommit, Zap } from 'lucide-react'
import { products } from '@/lib/products'

// Framer Motion
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  AnimatePresence,
  type Variants,
} from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const sourceProducts = products.filter((product) => product.sourceCodeUrl)
const developerName = 'Gulraiz Hamza'
const developerProfile = 'https://github.com/gulraiz12ab'

// ========== ANIMATION VARIANTS ==========
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.3,
    },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.92, rotateX: 8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 90,
      damping: 18,
    },
  },
}

const heroTextVariant: Variants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: 'easeOut' as const },
  },
}

const letterVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.04, type: 'spring' as const, stiffness: 120, damping: 14 },
  }),
}

// ========== PARTICLE SYSTEM ==========
function ParticleField() {
  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 10 + 8,
    delay: Math.random() * 5,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-primary/30"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{
            y: [0, -80, 0],
            x: [0, Math.random() * 40 - 20, 0],
            opacity: [0, 0.8, 0],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

// ========== MAGNETIC BUTTON ==========
function MagneticButton({
  children,
  className,
  href,
  ...props
}: {
  children: React.ReactNode
  className?: string
  href?: string
  [key: string]: unknown
}) {
  const ref = useRef<HTMLAnchorElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 300, damping: 20 })
  const springY = useSpring(y, { stiffness: 300, damping: 20 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    x.set((e.clientX - cx) * 0.3)
    y.set((e.clientY - cy) * 0.3)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      {...props}
    >
      {children}
    </motion.a>
  )
}

// ========== GLITCH TEXT ==========
function GlitchText({ text }: { text: string }) {
  const [glitch, setGlitch] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true)
      setTimeout(() => setGlitch(false), 200)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <span className="relative inline-block">
      <span className={glitch ? 'invisible' : ''}>{text}</span>
      <AnimatePresence>
        {glitch && (
          <>
            <motion.span
              className="absolute inset-0 text-cyan-400"
              animate={{ x: [-2, 2, -2], opacity: [1, 0.8, 1] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15, repeat: 1 }}
              style={{ clipPath: 'inset(20% 0 50% 0)' }}
            >
              {text}
            </motion.span>
            <motion.span
              className="absolute inset-0 text-fuchsia-500"
              animate={{ x: [2, -2, 2], opacity: [1, 0.8, 1] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15, repeat: 1 }}
              style={{ clipPath: 'inset(60% 0 20% 0)' }}
            >
              {text}
            </motion.span>
          </>
        )}
      </AnimatePresence>
    </span>
  )
}

// ========== TYPING CURSOR ==========
function TypingAnimation({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1))
        i++
      } else {
        setDone(true)
        clearInterval(timer)
      }
    }, 35)
    return () => clearInterval(timer)
  }, [text])

  return (
    <span className="font-mono">
      {displayed}
      {!done && (
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block w-[2px] h-[1em] bg-primary align-middle ml-0.5"
        />
      )}
    </span>
  )
}

// ========== ANIMATED COUNTER ==========
function CountUp({ end, suffix = '' }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    let start = 0
    const step = end / 60
    const timer = setInterval(() => {
      start += step
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [end])
  return <>{count}{suffix}</>
}

// ========== STAT CARD ==========
function StatCard({ value, label, icon: Icon }: { value: number; label: string; suffix?: string; icon: React.ElementType }) {
  return (
    <motion.div
      whileHover={{ scale: 1.06, y: -4 }}
      className="flex flex-col items-center gap-1 px-6 py-4 rounded-2xl bg-white/60 dark:bg-dark-900/60 backdrop-blur border border-dark-200/40 dark:border-dark-700/40 shadow"
    >
      <Icon className="w-4 h-4 text-primary mb-1" />
      <span className="text-2xl font-black text-dark-900 dark:text-white">
        <CountUp end={value} suffix="+" />
      </span>
      <span className="text-xs font-bold text-dark-400 uppercase tracking-widest">{label}</span>
    </motion.div>
  )
}

// ========== CARD TILT WRAPPER ==========
function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const springRX = useSpring(rotateX, { stiffness: 200, damping: 25 })
  const springRY = useSpring(rotateY, { stiffness: 200, damping: 25 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    rotateX.set(-py * 12)
    rotateY.set(px * 12)
  }

  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <motion.div
      ref={ref}
      style={{ rotateX: springRX, rotateY: springRY, transformStyle: 'preserve-3d', perspective: '1200px' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  )
}

// ========== MAIN PAGE ==========
export default function GitHubSourceCodePage() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.94])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80])

  const headlineWords = 'Explore the'.split(' ')

  return (
    <>
      {/* ===== HERO ===== */}
      <motion.section
        ref={heroRef}
        style={{ scale: heroScale, opacity: heroOpacity, y: heroY }}
        className="relative bg-white dark:bg-dark-950 py-32 md:py-48 overflow-hidden"
      >
        {/* Particle system */}
        <ParticleField />

        {/* Animated orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[
            { from: 'from-primary/25', via: 'via-primary/5', pos: 'top-[-10%] right-[-5%]', size: 'w-[55rem] h-[55rem]', dur: 12 },
            { from: 'from-cyan-400/15', via: 'via-fuchsia-400/5', pos: 'bottom-[-15%] left-[-5%]', size: 'w-[45rem] h-[45rem]', dur: 16 },
            { from: 'from-violet-500/10', via: 'via-transparent', pos: 'top-[40%] left-[30%]', size: 'w-[30rem] h-[30rem]', dur: 20 },
          ].map((orb, i) => (
            <motion.div
              key={i}
              animate={{
                x: [0, i % 2 === 0 ? 30 : -30, 0],
                y: [0, i % 2 === 0 ? -30 : 30, 0],
                scale: [1, 1.15, 1],
              }}
              transition={{ duration: orb.dur, repeat: Infinity, ease: 'easeInOut' }}
              className={`absolute ${orb.pos} ${orb.size} bg-gradient-to-br ${orb.from} ${orb.via} to-transparent rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen`}
            />
          ))}

          {/* Rotating ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-primary/5 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-primary/5 rounded-full"
          />

          {/* Grid */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.04]" />
        </div>

        {/* Floating code snippets */}
        {[
          { code: 'git push origin main', x: '5%', y: '15%', rotate: -8, delay: 0 },
          { code: 'npm run build', x: '75%', y: '20%', rotate: 6, delay: 0.5 },
          { code: 'const magic = true', x: '80%', y: '65%', rotate: -4, delay: 1 },
          { code: 'export default App', x: '3%', y: '70%', rotate: 5, delay: 1.5 },
        ].map((snippet, i) => (
          <motion.div
            key={i}
            className="absolute hidden lg:block font-mono text-xs px-4 py-2 rounded-xl bg-dark-900/70 dark:bg-white/5 text-primary backdrop-blur border border-primary/20 shadow-xl"
            style={{ left: snippet.x, top: snippet.y, rotate: snippet.rotate }}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 0.7, scale: 1, y: [0, -8, 0] }}
            transition={{
              opacity: { delay: snippet.delay, duration: 0.5 },
              scale: { delay: snippet.delay, duration: 0.5 },
              y: { delay: snippet.delay, duration: 4, repeat: Infinity, ease: 'easeInOut' },
            }}
          >
            {snippet.code}
          </motion.div>
        ))}

        {/* Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="container-custom relative z-10"
        >
          <div className="max-w-5xl mx-auto text-center flex flex-col items-center">

            {/* Animated badge */}
            <motion.div
              variants={heroTextVariant}
              className="group inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white/70 dark:bg-dark-900/70 backdrop-blur-xl border border-dark-200/50 dark:border-dark-700/50 mb-12 shadow-lg cursor-default"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              >
                <Sparkles className="w-4 h-4 text-primary" />
              </motion.div>
              <span className="text-sm font-bold bg-gradient-to-r from-primary via-cyan-500 to-fuchsia-500 bg-clip-text text-transparent tracking-widest uppercase">
                Open Source Ecosystem
              </span>
              {/* Pulse dot */}
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
              </span>
            </motion.div>

            {/* Headline — letter by letter */}
            <div className="text-5xl md:text-8xl font-black text-dark-900 dark:text-white tracking-tight mb-6 leading-[0.95] overflow-hidden">
              <div className="flex flex-wrap justify-center gap-x-5">
                {headlineWords.map((word, wi) => (
                  <span key={wi} className="flex overflow-hidden">
                    {word.split('').map((char, ci) => (
                      <motion.span
                        key={ci}
                        custom={wi * 5 + ci}
                        variants={letterVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </div>
              {/* Glitch + gradient word */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, type: 'spring', stiffness: 80 }}
                className="mt-2"
              >
                <span className="relative inline-block bg-gradient-to-r from-primary via-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
                  <GlitchText text="Code Universe" />
                  {/* Underline draw */}
                  <motion.svg
                    viewBox="0 0 300 16"
                    className="absolute -bottom-5 left-0 w-full h-5"
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.path
                      d="M0 12 Q75 2, 150 12 T300 12"
                      fill="none"
                      stroke="url(#grad)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      variants={{
                        hidden: { pathLength: 0, opacity: 0 },
                        visible: { pathLength: 1, opacity: 1, transition: { duration: 1.2, delay: 0.8 } },
                      }}
                    />
                    <defs>
                      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="var(--color-primary)" />
                        <stop offset="50%" stopColor="#22d3ee" />
                        <stop offset="100%" stopColor="#d946ef" />
                      </linearGradient>
                    </defs>
                  </motion.svg>
                </span>
              </motion.div>
            </div>

            {/* Typing subtitle */}
            <motion.p
              variants={heroTextVariant}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.9 }}
              className="text-dark-600 dark:text-dark-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-medium mt-8 mb-10"
            >
              <TypingAnimation text="Step inside our architecture. Browse repositories, learn from the source, and contribute to the modern stack." />
            </motion.p>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex flex-wrap gap-4 justify-center mb-12"
            >
              <StatCard value={sourceProducts.length || 12} label="Repos" icon={GitBranch} />
              <StatCard value={48} label="Commits" icon={GitCommit} />
              <StatCard value={99} label="Stars" icon={Star} />
            </motion.div>

            {/* Tech stack pills with stagger */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="flex flex-wrap gap-3 justify-center"
            >
              {['TypeScript', 'React', 'Next.js', 'Tailwind', 'Prisma', 'Framer'].map((tech, i) => (
                <motion.span
                  key={tech}
                  variants={{
                    hidden: { opacity: 0, scale: 0.6, y: 20 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      y: 0,
                      transition: { delay: 1.4 + i * 0.08, type: 'spring', stiffness: 150 },
                    },
                  }}
                  whileHover={{ scale: 1.12, y: -4 }}
                  className="text-xs font-bold tracking-widest px-4 py-2 rounded-full bg-dark-100/70 dark:bg-dark-800/70 border border-dark-200/50 dark:border-dark-700/50 text-dark-700 dark:text-dark-300 backdrop-blur cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Animated wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
          <motion.svg
            className="relative block w-full h-16 md:h-24 text-dark-50 dark:text-dark-950"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              fill="currentColor"
            />
          </motion.svg>
        </div>
      </motion.section>

      {/* ===== REPOSITORIES GRID ===== */}
      <section className="relative py-24 bg-dark-50/50 dark:bg-dark-950/50 overflow-hidden">

        {/* Background animated lines */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent w-full"
              style={{ top: `${15 + i * 15}%` }}
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 6 + i * 2, repeat: Infinity, ease: 'linear', delay: i * 0.8 }}
            />
          ))}
        </div>

        <div className="container-custom relative z-10">

          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4"
            >
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold text-primary uppercase tracking-widest">Public Repositories</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-black text-dark-900 dark:text-white">
              Browse Our{' '}
              <span className="text-primary">Source Code</span>
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid md:grid-cols-2 lg:gap-10 gap-8"
          >
            {sourceProducts.map((product, index) => (
              <motion.div key={product.id} variants={cardVariants}>
                <TiltCard>
                  <motion.div
                    className="group relative overflow-hidden rounded-[2.5rem] border border-dark-100/80 dark:border-dark-800/80 bg-white dark:bg-dark-900 p-8 flex flex-col h-full shadow-lg"
                    whileHover={{
                      shadow: '0 25px 60px rgba(0,0,0,0.15)',
                      borderColor: 'rgba(var(--color-primary-rgb), 0.4)',
                    }}
                  >
                    {/* Shimmer sweep on hover */}
                    <motion.div
                      className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-cyan-400 to-fuchsia-500"
                      initial={{ scaleX: 0, opacity: 0 }}
                      whileHover={{ scaleX: 1, opacity: 1 }}
                      style={{ originX: 0 }}
                      transition={{ duration: 0.5 }}
                    />

                    {/* Animated corner glow */}
                    <motion.div
                      className="absolute -top-16 -right-16 w-40 h-40 bg-primary/20 rounded-full blur-3xl"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1, scale: 1.3 }}
                      transition={{ duration: 0.5 }}
                    />
                    <motion.div
                      className="absolute -bottom-16 -left-16 w-40 h-40 bg-cyan-400/10 rounded-full blur-3xl"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    />

                    {/* Number badge */}
                    <motion.div
                      className="absolute top-8 right-8 text-6xl font-black text-dark-100/50 dark:text-dark-800/50 font-mono select-none"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </motion.div>

                    {/* Top row */}
                    <div className="flex items-center justify-between gap-4 mb-8 relative z-10">
                      <div className="flex items-center gap-3">
                        <motion.div
                          className="p-3 rounded-2xl bg-primary/10 text-primary"
                          whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1, backgroundColor: 'var(--color-primary)', color: 'white' }}
                          transition={{ duration: 0.4 }}
                        >
                          <Code2 className="w-5 h-5" />
                        </motion.div>
                        <span className="text-xs font-extrabold uppercase tracking-widest text-dark-500 dark:text-dark-400">
                          Repository
                        </span>
                      </div>
                      <motion.span
                        whileHover={{ scale: 1.05 }}
                        className="text-[11px] font-bold px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border border-emerald-200/50 dark:border-emerald-700/30 flex items-center gap-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        PUBLIC
                      </motion.span>
                    </div>

                    {/* Product name with character-by-character reveal */}
                    <motion.h2
                      className="text-3xl font-bold text-dark-900 dark:text-white mb-4 relative z-10"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      {product.name}
                    </motion.h2>

                    <p className="text-base text-dark-600 dark:text-dark-400 mb-10 leading-relaxed flex-grow relative z-10">
                      {product.description}
                    </p>

                    <div className="mt-auto flex flex-col gap-5 relative z-10">
                      {/* Developer card */}
                      <motion.div
                        className="flex items-center justify-between p-4 rounded-3xl bg-dark-50/70 dark:bg-dark-950/70 border border-dark-100/50 dark:border-dark-800/50 backdrop-blur"
                        whileHover={{ scale: 1.02, borderColor: 'rgba(var(--color-primary-rgb), 0.3)' }}
                      >
                        <div className="flex items-center gap-4">
                          <motion.div
                            className="w-12 h-12 rounded-full bg-white dark:bg-dark-900 flex items-center justify-center text-dark-500 shadow border border-dark-100 dark:border-dark-800"
                            whileHover={{ rotate: 360, color: 'var(--color-primary)' }}
                            transition={{ duration: 0.6 }}
                          >
                            <UserRound className="w-5 h-5" />
                          </motion.div>
                          <div>
                            <p className="text-[11px] font-bold text-dark-400 dark:text-dark-500 uppercase tracking-widest mb-0.5">Author</p>
                            <p className="text-sm font-bold text-dark-900 dark:text-white">{developerName}</p>
                          </div>
                        </div>
                        <MagneticButton
                          href={developerProfile}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white dark:bg-dark-900 text-dark-400 hover:text-white hover:bg-primary shadow border border-dark-100 dark:border-dark-800 hover:border-primary transition-all duration-300"
                        >
                          <ArrowUpRight className="w-5 h-5" />
                        </MagneticButton>
                      </motion.div>

                      {/* CTA buttons */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <motion.a
                          href={product.sourceCodeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative overflow-hidden flex-1 flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-dark-900 dark:bg-white text-white dark:text-dark-900 font-bold shadow-lg"
                          whileHover={{ scale: 1.03, y: -2 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          <motion.span
                            className="absolute inset-0 bg-gradient-to-r from-primary to-cyan-500 opacity-0"
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.4 }}
                          />
                          <Github className="w-5 h-5 relative z-10" />
                          <span className="relative z-10 tracking-wide">View on GitHub</span>
                          <motion.span
                            className="relative z-10 text-lg"
                            animate={{ x: [0, 4, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            →
                          </motion.span>
                        </motion.a>

                        <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
                          <Link
                            href={`/products/${product.slug}`}
                            className="group/link flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-white dark:bg-dark-900 text-dark-900 dark:text-white font-bold border-2 border-dark-100 dark:border-dark-800 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 shadow-lg"
                          >
                            <span className="tracking-wide">Product Details</span>
                            <ExternalLink className="w-5 h-5 text-dark-400 group-hover/link:text-primary transition-colors duration-300" />
                          </Link>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {sourceProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center py-32 px-4 rounded-[3rem] border border-dark-100 dark:border-dark-800/50 bg-white/30 dark:bg-dark-900/30 backdrop-blur-xl mt-12"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="w-28 h-28 rounded-full border-2 border-dashed border-primary/30 flex items-center justify-center mx-auto mb-8"
              >
                <GitBranch className="w-12 h-12 text-primary" />
              </motion.div>
              <h3 className="text-3xl font-extrabold text-dark-900 dark:text-white mb-4 tracking-tight">
                Fresh Commits Coming Soon
              </h3>
              <p className="text-dark-500 dark:text-dark-400 max-w-md mx-auto text-lg font-medium">
                Our codebase is brewing. Stay tuned as we open-source new repositories.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </>
  )
}