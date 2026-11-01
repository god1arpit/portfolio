import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import profileImg from './assets/profile.png'
import devImg from './assets/dev.jpg'
import iotImg from './assets/iot.jpg'
import aiImg from './assets/ai.jpg'

const photoCards = [
  {
    src: profileImg,
    tag: 'Profile',
    title: 'Arpit Sachdeva',
    sub: 'Class of 2028 · Chandigarh University',
    baseRotate: -4,
  },
  {
    src: devImg,
    tag: 'Full-Stack',
    title: 'Real-Time Systems',
    sub: 'React, Node.js & WebSockets',
    baseRotate: 2,
  },
  {
    src: iotImg,
    tag: 'Innovation',
    title: 'Hydro Guard',
    sub: 'IoT Controller · Patent Filed',
    baseRotate: -2,
  },
  {
    src: aiImg,
    tag: 'AI & Problem Solving',
    title: 'ML & LeetCode',
    sub: 'Auspify Intern · 162 Solved',
    baseRotate: 4,
  },
]

export default function PhotoScrollSlide() {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  // Smooth cinematic entrance as it enters view, solid while centered, smooth exit as it leaves
  const opacity = useTransform(scrollYProgress, [0.08, 0.28, 0.72, 0.92], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0.08, 0.28, 0.72, 0.92], [0.94, 1, 1, 0.96])
  const y = useTransform(scrollYProgress, [0.08, 0.28, 0.72, 0.92], [35, 0, 0, -35])

  return (
    <section
      id="showcase"
      ref={containerRef}
      className="relative min-h-[92vh] md:min-h-screen w-full flex flex-col items-center justify-center px-4 md:px-8 py-12 md:py-16 z-20 overflow-hidden"
      aria-label="Photo scroll showcase"
    >
      <motion.div
        style={{ opacity, scale, y }}
        className="relative w-full max-w-6xl mx-auto flex flex-col items-center pointer-events-auto"
      >
        {/* Eyebrow and Headline */}
        <div className="text-center mb-6 md:mb-8">
          <span className="text-xs tracking-[0.35em] uppercase text-amber-300 font-semibold">
            Visual Snapshot
          </span>
          <h3 className="text-3xl md:text-5xl font-extrabold mt-1.5 text-stone-100">
            Life, Code &amp; Innovation
          </h3>
          <p className="text-sm text-stone-400 mt-1.5 max-w-md mx-auto">
            A quick glimpse into projects, achievements &amp; developer journey
          </p>
        </div>

        {/* Cards Grid / Fan Deck */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-5xl justify-items-center">
          {photoCards.map((p) => (
            <motion.div
              key={p.title}
              whileHover={{ scale: 1.06, rotate: 0, zIndex: 30 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              style={{ rotate: `${p.baseRotate}deg` }}
              className="group relative w-full max-w-[240px] rounded-2xl bg-[#0f0f14]/85 border border-amber-500/25 p-3 backdrop-blur-md shadow-[0_12px_35px_rgba(0,0,0,0.55)] hover:border-amber-400/60 hover:shadow-[0_0_30px_rgba(229,185,90,0.25)] transition-colors duration-300 cursor-pointer"
            >
              {/* Photo frame */}
              <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-neutral-900 border border-white/[0.08]">
                <img
                  src={p.src}
                  alt={p.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-108"
                  loading="eager"
                />
                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                <span className="absolute bottom-2.5 left-2.5 px-2 py-0.5 rounded-full text-[10px] tracking-wider uppercase font-semibold bg-black/60 border border-amber-400/40 text-amber-200 backdrop-blur">
                  {p.tag}
                </span>
              </div>

              {/* Caption below photo */}
              <div className="mt-3 px-1 text-left">
                <h4 className="text-sm md:text-base font-bold text-stone-100 group-hover:text-amber-200 transition-colors">
                  {p.title}
                </h4>
                <p className="text-[11px] md:text-xs text-stone-400 mt-0.5 line-clamp-1">
                  {p.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 md:mt-8 text-stone-500 text-xs tracking-wider uppercase flex items-center gap-2">
          <span>continue scrolling</span>
          <span className="text-amber-400">↓</span>
        </div>
      </motion.div>
    </section>
  )
}
