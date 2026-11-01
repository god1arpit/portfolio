import { motion, useScroll } from 'framer-motion'
import { Mail, Phone, MapPin, ExternalLink, Award, Briefcase, Code2, GraduationCap } from 'lucide-react'
import ProximityHover from './ProximityHover'
import MagicCursor from './MagicCursor'
import Tiles from './Tiles'
import PhotoScrollSlide from './PhotoScrollSlide'
import TechText from './TechText'
import './index.css'

function GithubIcon({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

function LinkedinIcon({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function LeetcodeIcon({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .666-1.607 2.6 2.6 0 0 1 .564-.472l3.857-4.127 5.404-5.786c.54-.54.54-1.414 0-1.955A1.378 1.378 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
    </svg>
  )
}

function MinimalGithubIcon({ size = 22, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0c-2.4-1.6-3.5-1.3-3.5-1.3a4.2 4.2 0 0 0-.1 3.2a4.6 4.6 0 0 0-1.3 3.2c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2v3.5" />
    </svg>
  )
}

function MinimalLinkedinIcon({ size = 22, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="5" y1="10" x2="5" y2="19" />
      <circle cx="5" cy="5.5" r="1.3" fill="currentColor" stroke="none" />
      <line x1="11" y1="10" x2="11" y2="19" />
      <path d="M11 14.5a3.5 3.5 0 0 1 3.5-3.5 3.5 3.5 0 0 1 3.5 3.5V19" />
    </svg>
  )
}

function MinimalMailIcon({ size = 22, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="18" height="14" x="3" y="5" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  )
}

function MinimalApertureIcon({ size = 22, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <line x1="14.31" y1="8" x2="20.05" y2="17.94" />
      <line x1="9.69" y1="8" x2="21.17" y2="8" />
      <line x1="7.38" y1="12" x2="13.12" y2="21.94" />
      <line x1="9.69" y1="16" x2="3.95" y2="6.06" />
      <line x1="14.31" y1="16" x2="2.83" y2="16" />
      <line x1="16.62" y1="12" x2="10.88" y2="2.06" />
    </svg>
  )
}

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/god1arpit',
    icon: MinimalGithubIcon,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/arpit-sachdeva0001',
    icon: MinimalLinkedinIcon,
  },
  {
    name: 'Email',
    href: 'mailto:arpitsachdeva9999@gmail.com',
    icon: MinimalMailIcon,
  },
  {
    name: 'LeetCode',
    href: 'https://leetcode.com/u/god_arpit/',
    icon: LeetcodeIcon,
    iconSize: 20,
  },
  {
    name: 'Visuals',
    href: '#showcase',
    icon: MinimalApertureIcon,
  },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
})

function Section({ id, eyebrow, title, children, className = "" }) {
  return (
    <section id={id} className={`relative py-20 md:py-24 px-6 md:px-12 max-w-6xl mx-auto z-10 ${className}`}>
      <motion.div {...fadeUp(0)} className="mb-10">
        <span className="text-xs tracking-[0.3em] uppercase text-amber-300 font-semibold">{eyebrow}</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-3 text-stone-100">{title}</h2>
        <div className="mt-4 h-px w-20 bg-gradient-to-r from-amber-400/80 via-amber-400/30 to-transparent" />
      </motion.div>
      {children}
    </section>
  )
}

const skills = [
  { g: 'Languages', items: ['C', 'C++', 'Python', 'JavaScript', 'HTML', 'CSS'] },
  { g: 'Frameworks', items: ['React.js', 'Node.js', 'Express.js', 'Socket.io', 'Tailwind CSS', 'FastAPI'] },
  { g: 'Tools & APIs', items: ['Git', 'REST APIs', 'MySQL', 'Google OAuth 2.0', 'YouTube Data API v3'] },
  { g: 'Other', items: ['Data Visualization', 'Generative AI', 'Prompt Engineering', 'JWT Auth', 'WebSockets'] },
]

const projects = [
  {
    name: 'YouTube Remote Control System',
    tag: 'Full-Stack Web App',
    stack: 'React, Vite, Node, Express, Socket.io, Google OAuth 2.0',
    desc: 'Real-time remote control web app to search, play, and pause YouTube across desktop and mobile. WebSocket live sync, QR-code device pairing, LAN IP detection, Google OAuth 2.0 + YouTube Data API v3.',
    link: 'https://github.com/god1arpit/youtube-controler',
  },
  {
    name: 'BuildTrack',
    tag: 'Construction Management Platform',
    stack: 'React, Node, Express, Python, FastAPI',
    desc: 'Multi-role platform (builder / supervisor / labour) with attendance tracking, automated wage engine, expense management and site photo reporting. JWT auth with RBAC; fixed a role-escalation vulnerability on public registration.',
    link: 'https://buildtrack-ai.vercel.app',
  },
  {
    name: 'HYDRO GUARD',
    tag: 'IoT · Patent Filed',
    stack: 'IoT, Automation',
    desc: 'Smart IoT-based automated water overflow control for reservoirs. Patent application filed with the Indian Patent Office (App No. 202511113771), November 2025.',
    link: null,
  },
  {
    name: 'Collegia App Redesign',
    tag: 'UI/UX Redesign',
    stack: 'Figma / UI Design',
    desc: 'Complete redesign of the Collegia app interface with intuitive flows for attendance, marks, CGPA and timetable tracking.',
    link: null,
  },
]

const certs = [
  'LeetCode — 100 Days Badge (2026) · 162 Solved (25 Hard, 77 Medium)',
  'Microsoft — Advanced Data Analysis with Generative AI',
  'IBM — Data Visualization with Python',
  'IBM — Generative AI: Prompt Engineering Basics',
  'Google — Prompting Essentials',
  'Apple — App Development with Swift (Chandigarh University, 2026)',
]

export default function App() {
  const { scrollYProgress } = useScroll()

  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#09090b] text-[#f4f4f6]">
      {/* Page Preloader (Originkit Tiles) */}
      <Tiles minTime={4.5} background="#09090b" accent="#dfac43" />

      {/* Dynamic Spin Cursor (Originkit) */}
      <MagicCursor
        fillColor="#F5DF9E"
        glowColor="rgba(229, 185, 90, 0.65)"
        enableGlow={true}
        glowIntensity={65}
        cursorSize={32}
        enableStretch={true}
        label={false}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          pointerEvents: 'none',
        }}
      />

      {/* Scroll Progress Bar */}
      <motion.div
        style={{ scaleX: scrollYProgress, transformOrigin: '0%' }}
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#fcedc5] via-[#e5b95a] to-[#b8860b] shadow-[0_0_12px_rgba(229,185,90,0.6)] z-50"
      />

      {/* Atmospheric Ambient Glows */}
      <div className="ambient-glow -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[480px] bg-amber-500/10" />
      <div className="ambient-glow top-[38%] -left-36 w-[600px] h-[550px] bg-amber-600/[0.04]" />
      <div className="ambient-glow top-[70%] -right-36 w-[600px] h-[550px] bg-amber-500/[0.05]" />

      {/* Reactive Grid Background (Interactive Canvas) */}
      <div className="fixed inset-0 z-0 opacity-45 pointer-events-auto">
        <ProximityHover
          shape="rounded"
          fill="solid"
          strokeWidth={1}
          particleColor="rgba(229, 185, 90, 0.28)"
          backgroundColor="#09090b"
          maxSize={28}
          minSize={6}
          gap={12}
          influence={220}
        />
      </div>

      {/* NAV */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-40 px-6 py-3 rounded-full backdrop-blur-xl bg-[#0c0c10]/85 border border-amber-500/20 shadow-[0_8px_32px_rgba(0,0,0,0.6)] flex items-center gap-6 text-sm">
        {['about', 'skills', 'projects', 'experience', 'contact'].map(s => (
          <a
            key={s}
            href={`#${s}`}
            className="capitalize text-stone-300 hover:text-amber-200 transition-colors font-medium"
          >
            {s}
          </a>
        ))}
      </nav>

      {/* HERO */}
      <header className="relative min-h-[82vh] md:min-h-[85vh] flex flex-col items-center justify-center text-center px-6 pt-20 pb-6 md:pb-8 z-10 pointer-events-none">
        <motion.div {...fadeUp(0.1)} className="text-xs tracking-[0.4em] uppercase text-amber-300/80 mb-4 pointer-events-auto font-medium">
          Portfolio · Class of 2028
        </motion.div>
        <motion.div
          {...fadeUp(0.2)}
          className="w-full max-w-5xl pointer-events-auto -my-4 md:-my-6"
          style={{ width: '100%', height: 'min(420px, 42vh)', position: 'relative' }}
        >
          <TechText
            text="Arpit Sachdeva"
            fontWeight={600}
            fontSize={150}
            reveal="letter"
            dashLength={4}
            dashGap={2}
            specks={15}
            intro="none"
            introDuration={2}
            clickKick
            guides={false}
            fontFamily=""
            letterSpacing={-0.05}
            accentColor="#dfac43"
            reach={200}
            softness={0.7}
            lineStyle="dashed"
            strokeWidth={1.5}
            speed={1}
            bounce={0.4}
            selection
            labels
            color="#f4f4f6"
            align="center"
            draggable
            sweep
          />
        </motion.div>
        <motion.p {...fadeUp(0.35)} className="mt-4 text-lg md:text-xl text-stone-400 max-w-2xl pointer-events-auto leading-relaxed">
          Computer Science undergrad (AI &amp; ML) at Chandigarh University. Building full-stack web apps, real-time systems and ML solutions.
        </motion.p>
        <motion.div {...fadeUp(0.5)} className="mt-6 flex flex-wrap gap-3.5 justify-center pointer-events-auto">
          <a
            href="https://github.com/god1arpit"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-full btn-premium-primary flex items-center gap-2"
          >
            <GithubIcon size={16} /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/arpit-sachdeva0001"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-full btn-premium-secondary flex items-center gap-2"
          >
            <LinkedinIcon size={16} /> LinkedIn
          </a>
          <a
            href="https://leetcode.com/u/god_arpit/"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-full btn-premium-secondary flex items-center gap-2"
          >
            <LeetcodeIcon size={16} /> LeetCode
          </a>
          <a
            href="mailto:arpitsachdeva9999@gmail.com"
            className="px-5 py-2.5 rounded-full btn-premium-secondary flex items-center gap-2"
          >
            <Mail size={16} /> Email
          </a>
        </motion.div>
        <motion.div {...fadeUp(0.65)} className="mt-6 text-stone-500 text-sm flex flex-col items-center gap-1.5 pointer-events-auto">
          <span className="tracking-wider uppercase text-xs text-stone-400">scroll</span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
            className="w-px h-6 bg-gradient-to-b from-amber-400/50 to-transparent"
          />
        </motion.div>
      </header>

      {/* PHOTO SCROLL SLIDE (Appears for 1 slide on scroll, then disappears) */}
      <PhotoScrollSlide />

      {/* ABOUT */}
      <Section id="about" eyebrow="01 · About" title="Who I am" className="!pt-6 md:!pt-10">
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div {...fadeUp(0.1)} className="md:col-span-2 p-8 rounded-3xl bg-[#0f0f14]/75 border border-white/[0.08] backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:border-amber-500/30 transition-all duration-300">
            <p className="text-stone-300 leading-relaxed text-base">
              I'm a 3rd-year Computer Science undergraduate at Chandigarh University, specializing in AI &amp; ML (Class of 2028).
              I build full-stack web applications with React, Node.js, Express and real-time WebSocket systems, and I've filed a
              patent for an IoT water-overflow controller. I care about clean, secure, well-engineered software — from fixing
              role-escalation vulnerabilities to shipping real-time sync across devices.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['React', 'Node.js', 'Express', 'Socket.io', 'Python', 'FastAPI', 'MySQL', 'Tailwind'].map(t => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full text-xs bg-amber-400/[0.08] border border-amber-400/25 text-amber-200 font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.div {...fadeUp(0.2)} className="p-8 rounded-3xl bg-[#0f0f14]/75 border border-white/[0.08] backdrop-blur-md flex flex-col gap-4 text-sm text-stone-300 shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:border-amber-500/30 transition-all duration-300">
            <div className="flex items-center gap-3"><MapPin size={16} className="text-amber-400" /> Chandigarh, India</div>
            <div className="flex items-center gap-3"><Phone size={16} className="text-amber-400" /> 8572092552</div>
            <div className="flex items-center gap-3"><Mail size={16} className="text-amber-400" /> arpitsachdeva9999@gmail.com</div>
            <div className="flex items-center gap-3"><Briefcase size={16} className="text-amber-400" /> ML Intern @ Auspify</div>
            <div className="flex items-center gap-3"><GraduationCap size={16} className="text-amber-400" /> B.E. CSE (AI &amp; ML)</div>
            <a
              href="https://leetcode.com/u/god_arpit/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:text-amber-200 transition-colors pt-2 border-t border-white/[0.08]"
            >
              <LeetcodeIcon size={16} className="text-amber-400" />
              <span>LeetCode: <strong className="text-stone-200">162 solved</strong> <span className="text-xs text-amber-300/80 font-medium">(25 Hard)</span></span>
            </a>
          </motion.div>
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" eyebrow="02 · Skills" title="Tech I work with">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((s, i) => (
            <motion.div
              key={s.g}
              {...fadeUp(i * 0.1)}
              className="p-6 rounded-3xl bg-[#0f0f14]/75 border border-white/[0.08] backdrop-blur-md hover:border-amber-400/40 hover:shadow-[0_8px_30px_rgba(229,185,90,0.08)] transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-4 text-amber-200">
                <Code2 size={18} className="text-amber-400" />
                <span className="font-semibold">{s.g}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {s.items.map(it => (
                  <span
                    key={it}
                    className="px-2.5 py-1 rounded-lg text-xs bg-white/[0.03] border border-white/[0.07] text-stone-300 hover:border-amber-400/30 hover:text-white transition"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" eyebrow="03 · Projects" title="Things I've built">
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              {...fadeUp(i * 0.1)}
              className="group p-7 rounded-3xl bg-[#0f0f14]/75 border border-white/[0.08] backdrop-blur-md hover:border-amber-400/45 hover:shadow-[0_12px_40px_rgba(229,185,90,0.09)] transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-400/90">{p.tag}</span>
                  <h3 className="text-xl font-bold mt-1 text-stone-100 group-hover:text-amber-100 transition-colors">{p.name}</h3>
                </div>
                {p.link && (
                  <a href={p.link} target="_blank" rel="noreferrer" className="text-stone-400 hover:text-amber-300 transition-colors p-1">
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
              <p className="text-sm text-stone-400 mt-2">{p.stack}</p>
              <p className="text-stone-300 mt-4 leading-relaxed">{p.desc}</p>
            </motion.article>
          ))}
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" eyebrow="04 · Experience" title="Where I've worked">
        <motion.div {...fadeUp(0.1)} className="p-8 rounded-3xl bg-[#0f0f14]/75 border border-white/[0.08] backdrop-blur-md hover:border-amber-500/30 transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
          <div className="flex items-center gap-3 mb-2">
            <Briefcase className="text-amber-400" size={20} />
            <h3 className="text-xl font-bold text-stone-100">Machine Learning Intern</h3>
          </div>
          <p className="text-amber-200/90 font-medium">Auspify Technologies · Remote · Oct 2026 – Present</p>
          <ul className="mt-4 space-y-2 text-stone-300 list-disc list-inside">
            <li>Task-based ML internship (any 4 of 6 tasks for completion certificate); first task completed and tested.</li>
            <li>Built a content-based Netflix recommender (TF-IDF + cosine similarity, 8,790 titles); 93% of recommendations share a genre with the query title.</li>
          </ul>
        </motion.div>
      </Section>

      {/* EDUCATION & CERTS */}
      <Section id="education" eyebrow="05 · Education & Certs" title="Learning journey">
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div {...fadeUp(0.1)} className="p-7 rounded-3xl bg-[#0f0f14]/75 border border-white/[0.08] backdrop-blur-md hover:border-amber-500/30 transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
            <div className="flex items-center gap-2 text-amber-300 font-semibold mb-3">
              <GraduationCap size={18} className="text-amber-400" /> Education
            </div>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-stone-100">Chandigarh University</p>
                <p className="text-sm text-stone-400">B.E. Computer Science (AI &amp; ML) · 2024 – 2028</p>
              </div>
              <div>
                <p className="font-semibold text-stone-100">Guru Harikrishan Public School, Karnal</p>
                <p className="text-sm text-stone-400">Class XII · 81%</p>
              </div>
            </div>
          </motion.div>
          <motion.div {...fadeUp(0.2)} className="p-7 rounded-3xl bg-[#0f0f14]/75 border border-white/[0.08] backdrop-blur-md hover:border-amber-500/30 transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
            <div className="flex items-center gap-2 text-amber-300 font-semibold mb-3">
              <Award size={18} className="text-amber-400" /> Certifications
            </div>
            <ul className="space-y-2 text-sm text-stone-300">
              {certs.map(c => (
                <li key={c} className="flex gap-2">
                  <span className="text-amber-400">▹</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" eyebrow="06 · Contact" title="Let's connect">
        <motion.div {...fadeUp(0.1)} className="p-10 md:p-14 rounded-3xl bg-gradient-to-br from-amber-500/[0.08] via-amber-600/[0.02] to-transparent border border-amber-500/25 backdrop-blur-md text-center shadow-[0_15px_50px_rgba(229,185,90,0.06)]">
          <p className="text-stone-300 max-w-xl mx-auto text-base">
            Open to internships, collaborations and interesting projects. Drop a message and I'll get back to you.
          </p>
          <a
            href="mailto:arpitsachdeva9999@gmail.com"
            className="inline-block mt-4 text-xl md:text-2xl font-bold text-stone-100 hover:text-amber-200 transition-colors tracking-tight"
          >
            arpitsachdeva9999@gmail.com
          </a>
          <div className="mt-10 md:mt-12 flex items-center justify-center gap-4 md:gap-5 flex-wrap">
            {socialLinks.map(({ name, href, icon: Icon, iconSize = 22 }) => (
              <motion.a
                key={name}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative w-13 h-13 md:w-14 md:h-14 rounded-full border border-white/[0.14] bg-[#0c0c10]/80 hover:border-amber-400/70 hover:bg-amber-400/[0.08] text-stone-300 hover:text-amber-200 flex items-center justify-center transition-all duration-300 shadow-[0_6px_20px_rgba(0,0,0,0.45)] hover:shadow-[0_0_24px_rgba(223,172,67,0.3)]"
                aria-label={name}
              >
                <Icon size={iconSize} />
                <span className="pointer-events-none absolute top-full mt-2 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-[#17171f]/95 text-amber-200 border border-amber-500/30 shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-30">
                  {name}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </Section>

      <footer className="relative z-10 py-10 text-center text-stone-500 text-sm">
        © {new Date().getFullYear()} Arpit Sachdeva · Built with React, Vite &amp; Tailwind
      </footer>
    </div>
  )
}
