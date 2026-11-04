import { useState, useEffect } from 'react'
import { motion, useScroll, AnimatePresence } from 'framer-motion'
import { 
  Mail, Phone, MapPin, ExternalLink, Award, Briefcase, Code2, GraduationCap, 
  Download, Check, Copy, Send, Sparkles, CheckCircle2, ChevronRight 
} from 'lucide-react'
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

function MinimalInstagramIcon({ size = 22, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function CopyButton({ text, label = "Copy" }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async (e) => {
    e.preventDefault()
    e.stopPropagation()
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <button
      onClick={handleCopy}
      type="button"
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium text-stone-300 hover:text-amber-200 bg-white/[0.05] hover:bg-amber-400/[0.1] border border-white/[0.1] hover:border-amber-400/40 transition-all duration-200 cursor-pointer"
      title={`Copy ${label}`}
      aria-label={`Copy ${label}`}
    >
      {copied ? <Check size={12} className="text-amber-400" /> : <Copy size={12} />}
      <span>{copied ? 'Copied!' : label}</span>
    </button>
  )
}

function ContactForm() {
  const [status, setStatus] = useState('idle')
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus('loading')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: '5615d8d2-4464-4e4b-97e3-057bfdf834ae',
          name: form.name,
          email: form.email,
          message: form.message,
          from_name: 'Portfolio Contact Form',
          subject: `Portfolio Inquiry from ${form.name}`,
        }),
      })

      const data = await res.json()
      if (data && data.success) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        window.location.href = `mailto:arpitsachdeva9999@gmail.com?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message + '\n\nFrom: ' + form.email)}`
        setStatus('success')
      }
    } catch {
      window.location.href = `mailto:arpitsachdeva9999@gmail.com?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message + '\n\nFrom: ' + form.email)}`
      setStatus('success')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 text-left max-w-xl mx-auto space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-stone-400 mb-1.5">
            Your Name
          </label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="e.g. Alex Smith"
            className="w-full px-4 py-3 rounded-2xl bg-[#09090d]/80 border border-white/[0.1] focus:border-amber-400/60 focus:bg-amber-400/[0.03] text-stone-100 placeholder-stone-600 text-sm outline-none transition-all shadow-inner"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-stone-400 mb-1.5">
            Your Email
          </label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="alex@company.com"
            className="w-full px-4 py-3 rounded-2xl bg-[#09090d]/80 border border-white/[0.1] focus:border-amber-400/60 focus:bg-amber-400/[0.03] text-stone-100 placeholder-stone-600 text-sm outline-none transition-all shadow-inner"
          />
        </div>
      </div>
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-stone-400 mb-1.5">
          Your Message
        </label>
        <textarea
          required
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Hi Arpit, let's discuss an internship, collaboration, or project opportunity..."
          className="w-full px-4 py-3 rounded-2xl bg-[#09090d]/80 border border-white/[0.1] focus:border-amber-400/60 focus:bg-amber-400/[0.03] text-stone-100 placeholder-stone-600 text-sm outline-none transition-all resize-none shadow-inner"
        />
      </div>

      <div className="flex items-center justify-between flex-wrap gap-3 pt-2">
        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-6 py-3 rounded-full btn-premium-primary text-xs md:text-sm font-semibold flex items-center gap-2 transition-all disabled:opacity-50 cursor-pointer shadow-[0_4px_20px_rgba(223,172,67,0.25)] hover:shadow-[0_0_28px_rgba(223,172,67,0.45)]"
        >
          {status === 'loading' ? (
            <span>Sending...</span>
          ) : (
            <>
              <Send size={15} />
              <span>Send Message</span>
            </>
          )}
        </button>

        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-xs text-amber-300 font-medium"
          >
            <CheckCircle2 size={16} className="text-amber-400" />
            <span>Message sent! I'll get back to you shortly.</span>
          </motion.div>
        )}
      </div>
    </form>
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
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/arpit_sachdeva9999/?hl=en',
    icon: MinimalInstagramIcon,
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

const stats = [
  {
    label: 'LeetCode Solved',
    value: '162+',
    sub: '25 Hard · 77 Medium',
    icon: Code2,
  },
  {
    label: 'Patent Application',
    value: '1',
    sub: 'Govt. of India (#202511113771)',
    icon: Award,
  },
  {
    label: 'ML Titles Analyzed',
    value: '8,790+',
    sub: '93% Genre Accuracy',
    icon: Sparkles,
  },
  {
    label: 'B.E. CSE (AI & ML)',
    value: '2028',
    sub: 'Chandigarh University',
    icon: GraduationCap,
  },
]

const skills = [
  { g: 'Languages', items: ['C', 'C++', 'Python', 'JavaScript', 'HTML', 'CSS'] },
  { g: 'Frameworks', items: ['React.js', 'Node.js', 'Express.js', 'Socket.io', 'Tailwind CSS', 'FastAPI'] },
  { g: 'Tools & APIs', items: ['Git', 'REST APIs', 'MySQL', 'Google OAuth 2.0', 'YouTube Data API v3'] },
  { g: 'Other', items: ['Data Visualization', 'Generative AI', 'Prompt Engineering', 'JWT Auth', 'WebSockets'] },
]

const projectCategories = ['All', 'Full-Stack', 'AI / ML', 'IoT & Hardware', 'Design']

const projects = [
  {
    name: 'YouTube Remote Control System',
    category: 'Full-Stack',
    tag: 'Full-Stack Web App',
    stack: 'React, Vite, Node, Express, Socket.io, Google OAuth 2.0',
    desc: 'Real-time remote control web app to search, play, and pause YouTube across desktop and mobile. WebSocket live sync, QR-code device pairing, LAN IP detection, Google OAuth 2.0 + YouTube Data API v3.',
    highlights: ['Real-Time WebSockets', 'QR Code Device Pairing', 'OAuth 2.0 & YouTube API'],
    github: 'https://github.com/god1arpit/youtube-controler',
    demo: null,
  },
  {
    name: 'BuildTrack',
    category: 'Full-Stack',
    tag: 'Construction Management Platform',
    stack: 'React, Node, Express, Python, FastAPI',
    desc: 'Multi-role platform (builder / supervisor / labour) with attendance tracking, automated wage engine, expense management and site photo reporting. JWT auth with RBAC; fixed a role-escalation vulnerability on public registration. Road-inspection AI module: segmentation model trained on the IIIT Hyderabad IDD and Mapillary Vistas datasets.',
    highlights: ['Role-Escalation Fix', 'Automated Wage Engine', 'Road-Inspection AI'],
    github: null,
    demo: 'https://buildtrack-ai.vercel.app',
  },
  {
    name: 'Netflix Content Recommender',
    category: 'AI / ML',
    tag: 'Machine Learning',
    stack: 'Python, TF-IDF, Cosine Similarity',
    desc: 'Content-based recommender built during the Auspify ML internship, using TF-IDF + cosine similarity over 8,790 Netflix titles; 93% of recommendations share a genre with the query title.',
    highlights: ['93% Genre Accuracy', 'TF-IDF + Cosine', '8,790 Netflix Titles'],
    github: null,
    demo: null,
    status: 'Auspify ML Task',
  },
  {
    name: 'HYDRO GUARD',
    category: 'IoT & Hardware',
    tag: 'IoT · Patent Filed',
    stack: 'IoT, Automation, C++, Sensors',
    desc: 'Smart IoT-based automated water overflow control for reservoirs. Patent application filed with the Indian Patent Office (App No. 202511113771), November 2025.',
    highlights: ['Patent #202511113771', 'Automated Reservoir Cutoff', 'Smart Sensors'],
    github: null,
    demo: null,
    status: 'Patent Filed',
  },
  {
    name: 'Collegia App Redesign',
    category: 'Design',
    tag: 'UI/UX Redesign',
    stack: 'Figma / UI Design, Design System',
    desc: 'Complete redesign of the Collegia app interface with intuitive flows for attendance, marks, CGPA and timetable tracking.',
    highlights: ['End-to-End User Flow', 'CGPA & Timetable Tracking', 'Figma Prototype'],
    github: null,
    demo: null,
    status: 'Figma UI/UX',
  },
]

const certs = [
  {
    title: 'LeetCode — 100 Days Badge (2026)',
    desc: '162 Solved (25 Hard, 77 Medium)',
    issuer: 'LeetCode',
    link: 'https://leetcode.com/u/god_arpit/',
  },
  {
    title: 'Microsoft — Advanced Data Analysis with Generative AI',
    desc: 'AI-assisted Data Analytics & Insights',
    issuer: 'Microsoft',
    link: null,
  },
  {
    title: 'IBM — Data Visualization with Python',
    desc: 'Matplotlib, Seaborn, Folium & Dashboards',
    issuer: 'IBM',
    link: null,
  },
  {
    title: 'IBM — Generative AI: Prompt Engineering Basics',
    desc: 'LLM Prompt Engineering Patterns',
    issuer: 'IBM',
    link: null,
  },
  {
    title: 'Google — Prompting Essentials',
    desc: 'Prompt Strategies for Enterprise AI',
    issuer: 'Google',
    link: null,
  },
  {
    title: 'Apple — App Development with Swift',
    desc: 'Chandigarh University (2026)',
    issuer: 'Apple',
    link: null,
  },
]

export default function App() {
  const { scrollYProgress } = useScroll()
  const [activeSection, setActiveSection] = useState('about')
  const [activeCategory, setActiveCategory] = useState('All')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'experience', 'education', 'contact']
      const scrollY = window.scrollY + 250
      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#09090b] text-[#f4f4f6]">
      {/* Page Preloader (Optimized 1.8s) */}
      <Tiles minTime={1.8} background="#09090b" accent="#dfac43" />

      {/* Dynamic Spin Cursor (Hidden on touch devices) */}
      <div className="hidden md:block">
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
      </div>

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

      {/* NAV with Scroll-Spy & Active Glowing Indicator */}
      <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-40 px-3 md:px-5 py-2 md:py-2.5 rounded-full backdrop-blur-xl bg-[#0c0c10]/85 border border-amber-500/20 shadow-[0_8px_32px_rgba(0,0,0,0.6)] flex items-center gap-1 md:gap-2 text-xs md:text-sm max-w-[95vw] overflow-x-auto">
        {[
          { id: 'about', label: 'About' },
          { id: 'skills', label: 'Skills' },
          { id: 'projects', label: 'Projects' },
          { id: 'experience', label: 'Experience' },
          { id: 'education', label: 'Certs' },
          { id: 'contact', label: 'Contact' },
        ].map(({ id, label }) => {
          const isActive = activeSection === id
          return (
            <a
              key={id}
              href={`#${id}`}
              className={`px-3 py-1.5 rounded-full font-medium transition-all duration-200 whitespace-nowrap ${
                isActive
                  ? 'bg-amber-400/20 text-amber-200 border border-amber-400/40 shadow-[0_0_12px_rgba(223,172,67,0.25)]'
                  : 'text-stone-400 hover:text-stone-200 hover:bg-white/[0.04]'
              }`}
            >
              {label}
            </a>
          )
        })}
      </nav>

      {/* HERO */}
      <header className="relative min-h-[80vh] md:min-h-[85vh] flex flex-col items-center justify-center text-center px-6 pt-20 pb-6 md:pb-8 z-10 pointer-events-none">
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

      {/* STATS / IMPACT STRIP */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 -mt-2 mb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              {...fadeUp(0.1 * i)}
              className="p-5 rounded-2xl bg-[#0f0f14]/80 border border-white/[0.08] backdrop-blur-md hover:border-amber-400/40 hover:shadow-[0_8px_25px_rgba(223,172,67,0.12)] transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-400 group-hover:text-amber-200/90 transition-colors">
                  {s.label}
                </span>
                <s.icon size={16} className="text-amber-400" />
              </div>
              <div className="text-2xl md:text-3xl font-extrabold text-stone-100 tracking-tight group-hover:text-amber-100 transition-colors">
                {s.value}
              </div>
              <div className="text-xs text-stone-400 mt-1 font-medium">{s.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* PHOTO SCROLL SLIDE */}
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
            <div className="flex items-center gap-3"><MapPin size={16} className="text-amber-400 shrink-0" /> Chandigarh, India</div>
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3"><Phone size={16} className="text-amber-400 shrink-0" /> 8572092552</div>
              <CopyButton text="8572092552" label="Copy" />
            </div>
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 truncate"><Mail size={16} className="text-amber-400 shrink-0" /> <span className="truncate">arpitsachdeva9999@gmail.com</span></div>
              <CopyButton text="arpitsachdeva9999@gmail.com" label="Copy" />
            </div>
            <div className="flex items-center gap-3"><Briefcase size={16} className="text-amber-400 shrink-0" /> ML Intern @ Auspify</div>
            <div className="flex items-center gap-3"><GraduationCap size={16} className="text-amber-400 shrink-0" /> B.E. CSE (AI &amp; ML)</div>
            <a
              href="https://leetcode.com/u/god_arpit/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 hover:text-amber-200 transition-colors pt-2 border-t border-white/[0.08]"
            >
              <LeetcodeIcon size={16} className="text-amber-400 shrink-0" />
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

      {/* PROJECTS WITH CATEGORY TABS & ACTION BUTTONS */}
      <Section id="projects" eyebrow="03 · Projects" title="Things I've built">
        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 mb-8 flex-wrap">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-amber-400/20 text-amber-200 border border-amber-400/50 shadow-[0_0_16px_rgba(223,172,67,0.25)]'
                  : 'bg-[#0f0f14]/60 text-stone-400 hover:text-stone-200 border border-white/[0.08] hover:border-amber-400/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p) => (
              <motion.article
                key={p.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="group p-7 rounded-3xl bg-[#0f0f14]/75 border border-white/[0.08] backdrop-blur-md hover:border-amber-400/45 hover:shadow-[0_12px_40px_rgba(229,185,90,0.09)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-amber-400/90">{p.tag}</span>
                      <h3 className="text-xl font-bold mt-1 text-stone-100 group-hover:text-amber-100 transition-colors">{p.name}</h3>
                    </div>
                    {p.demo && (
                      <a href={p.demo} target="_blank" rel="noreferrer" className="text-stone-400 hover:text-amber-300 transition-colors p-1" title="Live Site">
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                  <p className="text-xs text-amber-300/80 font-medium mt-2">{p.stack}</p>

                  {/* Highlights Pills */}
                  {p.highlights && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {p.highlights.map(h => (
                        <span key={h} className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-amber-400/[0.07] border border-amber-400/20 text-amber-200">
                          {h}
                        </span>
                      ))}
                    </div>
                  )}

                  <p className="text-stone-300 mt-4 leading-relaxed text-sm">{p.desc}</p>
                </div>

                {/* Project Action Buttons */}
                <div className="mt-6 pt-4 border-t border-white/[0.07] flex items-center gap-3 flex-wrap">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/[0.06] hover:bg-white/[0.14] border border-white/[0.12] text-stone-200 hover:text-white transition-all shadow-sm"
                    >
                      <GithubIcon size={14} /> Source Code
                    </a>
                  )}
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-400/15 hover:bg-amber-400/25 border border-amber-400/35 text-amber-200 hover:text-amber-100 shadow-[0_0_15px_rgba(223,172,67,0.2)] transition-all"
                    >
                      <ExternalLink size={14} /> Live Platform
                    </a>
                  )}
                  {p.status && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-amber-300/90 bg-amber-500/[0.08] border border-amber-500/20">
                      <Sparkles size={13} /> {p.status}
                    </span>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
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
          <ul className="mt-4 space-y-2 text-stone-300 list-disc list-inside text-sm leading-relaxed">
            <li>Task-based ML internship (any 4 of 6 tasks for completion certificate); first task completed and tested.</li>
            <li>Built a content-based Netflix recommender (TF-IDF + cosine similarity, 8,790 titles); 93% of recommendations share a genre with the query title.</li>
          </ul>
        </motion.div>
      </Section>

      {/* EDUCATION & CERTS */}
      <Section id="education" eyebrow="05 · Education & Certs" title="Learning journey">
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div {...fadeUp(0.1)} className="p-7 rounded-3xl bg-[#0f0f14]/75 border border-white/[0.08] backdrop-blur-md hover:border-amber-500/30 transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
            <div className="flex items-center gap-2 text-amber-300 font-semibold mb-4">
              <GraduationCap size={18} className="text-amber-400" /> Education
            </div>
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                <p className="font-semibold text-stone-100">Chandigarh University</p>
                <p className="text-sm text-stone-400 mt-0.5">B.E. Computer Science (AI &amp; ML) · 2024 – 2028</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                <p className="font-semibold text-stone-100">Guru Harikrishan Public School, Karnal</p>
                <p className="text-sm text-stone-400 mt-0.5">Class XII · 81%</p>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.2)} className="p-7 rounded-3xl bg-[#0f0f14]/75 border border-white/[0.08] backdrop-blur-md hover:border-amber-500/30 transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
            <div className="flex items-center gap-2 text-amber-300 font-semibold mb-4">
              <Award size={18} className="text-amber-400" /> Certifications &amp; Badges
            </div>
            <ul className="space-y-2.5">
              {certs.map(c => (
                <li key={c.title} className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-amber-400/30 transition-all flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-semibold tracking-wider uppercase bg-amber-400/10 text-amber-200 border border-amber-400/20">
                        {c.issuer}
                      </span>
                      <p className="font-medium text-stone-200 text-xs md:text-sm">{c.title}</p>
                    </div>
                    <p className="text-xs text-stone-400 mt-1 pl-1">{c.desc}</p>
                  </div>
                  {c.link && (
                    <a href={c.link} target="_blank" rel="noreferrer" className="text-stone-400 hover:text-amber-300 transition-colors shrink-0 p-1">
                      <ExternalLink size={14} />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" eyebrow="06 · Contact" title="Let's connect">
        <motion.div {...fadeUp(0.1)} className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-amber-500/[0.08] via-amber-600/[0.02] to-transparent border border-amber-500/25 backdrop-blur-md text-center shadow-[0_15px_50px_rgba(229,185,90,0.06)]">
          <p className="text-stone-300 max-w-xl mx-auto text-base">
            Open to internships, collaborations and interesting projects. Send a message directly or connect via social links.
          </p>

          <div className="mt-4 flex items-center justify-center gap-3">
            <a
              href="mailto:arpitsachdeva9999@gmail.com"
              className="text-lg md:text-2xl font-bold text-stone-100 hover:text-amber-200 transition-colors tracking-tight"
            >
              arpitsachdeva9999@gmail.com
            </a>
            <CopyButton text="arpitsachdeva9999@gmail.com" label="Copy" />
          </div>

          {/* Direct Interactive Glassmorphic Contact Form */}
          <ContactForm />

          {/* Social Links & Download Resume Button */}
          <div className="mt-10 md:mt-12 pt-8 border-t border-white/[0.08] flex items-center justify-center gap-4 md:gap-5 flex-wrap">
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

            <motion.a
              href="/Arpit_Sachdeva_Resume.pdf"
              download="Arpit_Sachdeva_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="h-13 md:h-14 px-5 md:px-6 rounded-full border border-amber-400/40 bg-gradient-to-r from-amber-500/15 via-amber-400/20 to-amber-500/15 hover:border-amber-300 hover:from-amber-400/25 hover:to-amber-300/25 text-amber-200 font-medium text-xs md:text-sm tracking-wider uppercase flex items-center gap-2.5 transition-all duration-300 shadow-[0_6px_20px_rgba(223,172,67,0.18)] hover:shadow-[0_0_28px_rgba(223,172,67,0.4)]"
            >
              <Download size={17} className="text-amber-300" />
              <span>Download Resume</span>
            </motion.a>
          </div>
        </motion.div>
      </Section>

      <footer className="relative z-10 py-10 text-center text-stone-500 text-sm">
        © {new Date().getFullYear()} Arpit Sachdeva · Built with React, Vite &amp; Tailwind
      </footer>
    </div>
  )
}
