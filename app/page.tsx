'use client'

import { useEffect, useMemo, useState } from 'react'
import {
  ArrowUpRight, Bot, Check, ChevronDown, CircleDot, Code2, Globe2, Mail, Menu, Moon,
  Search, Send, Sparkles, Sun, Terminal, X, Zap,
} from 'lucide-react'

function BrandIcon({ name }: { name: 'github' | 'linkedin' | 'facebook' | 'telegram' }) {
  const paths = {
    github: 'M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 7.97c.85 0 1.7.11 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z',
    linkedin: 'M6.5 8.5A1.5 1.5 0 1 0 6.5 5a1.5 1.5 0 0 0 0 3.5ZM5 10h3v9H5v-9Zm5 0h2.9v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.6V19h-3v-4.17c0-1-.02-2.28-1.39-2.28-1.39 0-1.6 1.08-1.6 2.2V19h-3v-9Z',
    facebook: 'M13.5 21v-8h2.67l.4-3h-3.07V8.08c0-.87.24-1.46 1.5-1.46h1.7V3.94c-.3-.04-1.33-.13-2.53-.13-2.51 0-4.23 1.53-4.23 4.34V10H7.1v3h2.84v8h3.56Z',
    telegram: 'm21.5 4.5-3.05 14.39c-.23 1.02-.83 1.27-1.68.79l-4.62-3.4-2.23 2.15c-.25.25-.46.46-.94.46l.34-4.7 8.55-7.73c.37-.34-.08-.53-.57-.19L6.72 12.93l-4.56-1.43c-.99-.31-1.01-.99.2-1.47L20.18 3.8c.82-.3 1.54.19 1.32.7Z',
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d={paths[name]} fill="currentColor" /></svg>
}

const projects = [
  { name: 'Aicser EdTech SaaS', type: 'Full-Stack Developer · DataTicon', description: 'Built an AI-powered learning platform with an Anthropic chatbot, Azure-hosted course videos, and Stripe subscription payments.', tags: ['Next.js', 'FastAPI', 'Anthropic API', 'Azure', 'Stripe'], metric: 'Jan — May 2026', featured: true },
  { name: 'InternLink', type: 'Back-End Developer · Capstone 2', description: 'Developed a platform that connects Cambodian university students with verified internships and helps companies manage applicants.', tags: ['Laravel', 'PostgreSQL', 'Mailtrap', 'Postman'], metric: 'Oct — Dec 2025' },
  { name: 'Timetable Maker', type: 'Full-Stack Developer · Capstone 1', description: 'Developed a responsive timetable generation system that makes class scheduling at CADT faster and easier to manage.', tags: ['React', 'Tailwind CSS', 'PHP', 'Laravel'], metric: 'Jan — Apr 2025' },
  { name: 'UniSeek', type: 'Front-End Developer · Bootcamp Project', description: 'Built a university discovery app with mentorship insights and Fuse.js-powered search to help students explore study options.', tags: ['React', 'Tailwind CSS', 'Fuse.js', 'Figma'], metric: 'Jan — Mar 2025' },
]

const experiences = [
  { date: 'Jan 2026 — May 2026', role: 'Full-Stack Developer Intern', company: 'DataTicon', summary: 'Delivered SaaS features across frontend, backend, database, AI integration, and deployment.', points: ['Developed full-stack SaaS products with Next.js, FastAPI, PostgreSQL, Tailwind CSS, and shadcn/ui.', 'Built Aicser EdTech SaaS with an Anthropic-powered chatbot, Azure Blob Storage, and Stripe payments.', 'Implemented subscription plans and credit-based usage for an open-source analytics platform.', 'Deployed and managed applications with Vercel, Docker, and Railway.'] },
  { date: 'Oct 2025 — Dec 2025', role: 'Back-End Developer', company: 'InternLink · Capstone 2', summary: 'Built core workflows for a platform connecting students with verified internship opportunities.', points: ['Designed interfaces and developed admin and company dashboards with Laravel and PostgreSQL.', 'Integrated Mailtrap SMTP and built application-status APIs tested with Postman.', 'Collaborated with teammates and advisors throughout product delivery.'] },
  { date: 'May 2025 — Aug 2025', role: 'Full-Stack Developer Intern', company: 'Ministry of Interior', summary: 'Developed an internal e-learning platform for managing students, lessons, and course content.', points: ['Contributed to prototyping, interface development, backend services, and database design.', 'Built a responsive interface with React and Tailwind CSS.', 'Developed ASP.NET Core services backed by SQL Server.'] },
]

const education = [
  { institution: 'Cambodia Academy of Digital Technology — CADT', program: 'Bachelor of Computer Science · Software Engineering', period: '2023 — 2026', detail: 'Techo Digital Talent Scholarship recipient' },
  { institution: 'Techpreneur Bootcamp', program: 'Full-Stack Development', period: 'Jun 2024 — Mar 2025', detail: 'Intensive full-stack development program' },
  { institution: '10 January 1979 High School', program: 'Science stream · Grade B', period: '2022 — 2023', detail: 'High school diploma' },
]

const achievements = [
  { title: 'Next-Gen Engagement Program', detail: 'Database Analysis and Design Trainer', description: 'Guided junior students through database analysis and design, helping them prepare for their upcoming term at CADT.', date: 'Aug 2024 — Sept 2024' },
  { title: 'JCI — 2024 Junior Leadership Academy', detail: 'Marketing Team', description: 'Volunteered with JCI Chaktomuk for the Public Speaking and Debating project.', date: 'Feb 2024 — Sept 2024' },
]

const stack = {
  Frontend: ['HTML & CSS', 'JavaScript / TypeScript', 'React / Next.js', 'Tailwind CSS / Bootstrap', 'shadcn/ui'],
  Backend: ['Python / FastAPI', 'PHP / Laravel', 'C# / ASP.NET Core', 'Java', 'REST API development'],
  'Data & Cloud': ['PostgreSQL', 'SQL Server', 'Azure Blob Storage', 'Vercel / Railway', 'Docker'],
  'Mobile & Tools': ['Dart / Flutter', 'Git / GitHub', 'Postman', 'Figma', 'UX/UI design'],
  'AI Integration': ['Anthropic API', 'LLM-powered features', 'AI chatbots', 'Prompt integration', 'Credit-based usage'],
}

const navigationItems = [
  { id: 'top', label: 'About me', detail: 'Profile and education', keywords: 'about profile introduction education' },
  { id: 'experience', label: 'Experience timeline', detail: 'Roles and responsibilities', keywords: 'experience work internship career roles' },
  { id: 'projects', label: 'Explore projects', detail: 'Selected product work', keywords: 'projects portfolio case studies products' },
  { id: 'stack', label: 'Technical stack', detail: 'Tools and capabilities', keywords: 'stack skills technology tools' },
  { id: 'achievements', label: 'Achievements', detail: 'Leadership and service', keywords: 'achievements leadership awards service' },
  { id: 'contact', label: 'Start a conversation', detail: 'Availability and contact details', keywords: 'contact availability email conversation' },
]

export default function Page() {
  const [dark, setDark] = useState(true)
  const [menu, setMenu] = useState(false)
  const [copilot, setCopilot] = useState(false)
  const [expanded, setExpanded] = useState(0)
  const [tab, setTab] = useState<keyof typeof stack>('Frontend')
  const [apiState, setApiState] = useState<'idle' | 'running' | 'done'>('idle')
  const [contactMessage, setContactMessage] = useState('')
  const [commandQuery, setCommandQuery] = useState('')
  const [guideInput, setGuideInput] = useState('')
  const [guideExchange, setGuideExchange] = useState<{ question: string, answer: string } | null>(null)
  const [sent, setSent] = useState(false)
  const [time, setTime] = useState('')
  const [activeSection, setActiveSection] = useState('top')

  useEffect(() => {
    document.documentElement.classList.toggle('light', !dark)
  }, [dark])
  useEffect(() => {
    const sections = ['top', 'experience', 'projects', 'stack', 'achievements', 'contact']
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible) setActiveSection(visible.target.id)
    }, { rootMargin: '-18% 0px -62% 0px', threshold: [0, 0.25, 0.5, 0.75] })
    sections.forEach(id => { const section = document.getElementById(id); if (section) observer.observe(section) })
    const activateContactAtPageEnd = () => {
      const distanceFromBottom = document.documentElement.scrollHeight - window.innerHeight - window.scrollY
      if (distanceFromBottom <= 48) setActiveSection('contact')
    }
    window.addEventListener('scroll', activateContactAtPageEnd, { passive: true })
    activateContactAtPageEnd()
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', activateContactAtPageEnd)
    }
  }, [])
  useEffect(() => {
    const tick = () => setTime(new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Phnom_Penh', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }).format(new Date()))
    tick(); const id = window.setInterval(tick, 1000); return () => window.clearInterval(id)
  }, [])

  const response = useMemo(() => apiState === 'done' ? '{\n  "status": "success",\n  "summary": "AI systems make complex\n  information easier to act on.",\n  "latency": "38ms"\n}' : '{\n  "status": "ready",\n  "message": "Waiting for request..."\n}', [apiState])
  const filteredNavigation = useMemo(() => {
    const query = commandQuery.trim().toLowerCase()
    if (!query) return navigationItems
    return navigationItems.filter(item => `${item.label} ${item.detail} ${item.keywords}`.toLowerCase().includes(query))
  }, [commandQuery])
  const runApi = () => { setApiState('running'); window.setTimeout(() => setApiState('done'), 800) }
  const closeMenu = () => { setMenu(false); setCommandQuery('') }
  const nav = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); closeMenu() }
  const askGuide = (question: string) => {
    const normalized = question.trim().toLowerCase()
    if (!normalized) return
    let answer = 'I can point you to Oeurn\'s projects, experience, technical capabilities, or contact details.'
    if (normalized.includes('project') || normalized.includes('strongest')) answer = 'Aicser EdTech SaaS is the strongest end-to-end example: Oeurn built product features across Next.js, FastAPI, PostgreSQL, AI integration, Azure storage, Stripe, and deployment.'
    else if (normalized.includes('stack') || normalized.includes('skill') || normalized.includes('tech')) answer = 'Oeurn works across modern frontend, backend, data, cloud, mobile, and AI-integrated product development, choosing tools based on the problem rather than a single fixed stack.'
    else if (normalized.includes('experience') || normalized.includes('work')) answer = 'His experience includes full-stack internships at DataTicon and Cambodia\'s Ministry of Interior, plus product-focused capstone work across education, recruitment, and scheduling.'
    else if (normalized.includes('available') || normalized.includes('contact') || normalized.includes('hire')) answer = 'Oeurn is open to full-stack opportunities and product collaborations. The contact section includes his email and professional profiles.'
    setGuideExchange({ question: question.trim(), answer })
    setGuideInput('')
  }

  return (
    <main className="min-h-screen overflow-clip bg-background text-foreground">
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <nav className="nav-shell"><button className="brand" onClick={() => nav('top')} aria-label="Back to top"><span className="brand-mark">OLS</span><span>OEURN LEE SINH</span></button><div className="nav-links"><button className={activeSection === 'top' ? 'active' : ''} onClick={() => nav('top')}>About</button><button className={activeSection === 'experience' ? 'active' : ''} onClick={() => nav('experience')}>Experience</button><button className={activeSection === 'projects' ? 'active' : ''} onClick={() => nav('projects')}>Projects</button><button className={activeSection === 'stack' ? 'active' : ''} onClick={() => nav('stack')}>Stack</button><button className={activeSection === 'achievements' ? 'active' : ''} onClick={() => nav('achievements')}>Achievements</button><button className={activeSection === 'contact' ? 'active' : ''} onClick={() => nav('contact')}>Contact</button></div><div className="nav-actions"><button className="command-trigger" onClick={() => setMenu(true)}><span>⌘</span> K</button><button className="icon-button" onClick={() => setDark(!dark)} aria-label="Toggle theme">{dark ? <Sun size={16} /> : <Moon size={16} />}</button><span className="availability"><i /> Open to work</span><button className="mobile-menu" onClick={() => setMenu(true)} aria-label="Open menu"><Menu size={18} /></button></div></nav>
      {menu && <div className="overlay" onClick={closeMenu}><div className="command-modal" role="dialog" aria-modal="true" aria-label="Jump to a section" onClick={e => e.stopPropagation()}><div className="command-head"><Search size={18} /><input autoFocus value={commandQuery} onChange={e => setCommandQuery(e.target.value)} onKeyDown={e => { if (e.key === 'Enter' && filteredNavigation[0]) nav(filteredNavigation[0].id); if (e.key === 'Escape') closeMenu() }} placeholder="Jump to a section..." aria-label="Search sections" /><button className="modal-close" onClick={closeMenu} aria-label="Close section menu"><X size={17} /></button></div><div className="command-items">{filteredNavigation.map(item => <button key={item.id} onClick={() => nav(item.id)}><span className="command-item-icon"><ArrowUpRight size={15} /></span><span className="command-item-copy"><strong>{item.label}</strong><small>{item.detail}</small></span><kbd>↵</kbd></button>)}{filteredNavigation.length === 0 && <div className="command-empty"><Search size={18} /><span>No matching section</span></div>}</div></div></div>}

      <section id="top" className="hero section-wrap"><div className="hero-layout"><div className="hero-content"><div className="eyebrow"><CircleDot size={14} /> FULL-STACK DEVELOPER <span>/</span> SOFTWARE ENGINEERING</div><h1>Building useful products,<br /><em>end to end.</em></h1><p className="hero-copy">I&apos;m Oeurn Lee Sinh, a full-stack developer and software engineering student at CADT. I turn ideas into practical, user-centered digital products, contributing across the full development lifecycle, from <strong>product thinking and interface design</strong> to application development, data, deployment, and intelligent features.</p><div className="hero-actions"><button className="button-primary" onClick={() => nav('projects')}>Explore projects <ArrowUpRight size={16} /></button><button className="button-ghost" onClick={() => setCopilot(true)}><Terminal size={16} /> Explore my profile</button></div><div className="education-block"><div className="education-heading"><span className="section-kicker">01 / EDUCATION</span><span className="education-rule" /></div>{education.map(item => <article className="education-item" key={item.institution}><div><h3>{item.institution}</h3><p>{item.program}</p><span>{item.detail}</span></div><time>{item.period}</time></article>)}</div></div><div className="portrait-frame"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Sep%2029%2C%202025%2C%2003_00_57%20PM-H1CHgPEqJBTQ2wUSN03mROyan2KSgO.png" alt="Portrait of Oeurn Lee Sinh" /></div></div><div className="tech-row">{['React', 'Next.js', 'FastAPI', 'Laravel', 'PostgreSQL', 'Docker'].map(x => <span key={x}>{x}</span>)}</div><div className="hero-foot"><span>Based in Phnom Penh, Cambodia</span><span className="mono"><Zap size={13} /> UTC+07:00 · {time || '—'}</span></div></section>

      <section id="projects" className="section-wrap work-section"><div className="section-heading"><div><span className="section-kicker">03 / SELECTED PROJECTS</span><h2>Projects built around<br /><span>real user needs.</span></h2></div><p>Selected work across education, recruitment, scheduling, and AI-assisted products, delivered in internships and team projects.</p></div><div className="project-grid">{projects.map((p, i) => <article className={`project-card ${p.featured ? 'featured' : ''}`} key={p.name}><div className="card-top"><span className="project-index">0{i + 1}</span><span className="metric">{p.metric}</span></div><div className="project-visual"><div className="visual-grid" /><div className="visual-window"><div className="window-bar"><i /><i /><i /><span>{p.featured ? 'aicser / dashboard' : p.name.toLowerCase().replaceAll(' ', '-')}</span></div><div className="window-content"><span className="code-line blue" /><span className="code-line wide" /><span className="code-line short" /><span className="code-block" /></div></div></div><span className="project-type">{p.type}</span><h3>{p.name}</h3><p>{p.description}</p><div className="tag-row">{p.tags.map(t => <span key={t}>{t}</span>)}</div>{p.featured && <button className="expand-link" onClick={() => setExpanded(expanded === i ? -1 : i)}>{expanded === i ? 'Hide architecture' : 'View architecture'} <ChevronDown size={15} className={expanded === i ? 'rotate-180' : ''} /></button>}{expanded === i && <div className="architecture"><Code2 size={15} /><span>Next.js UI → FastAPI services → PostgreSQL / Azure → Vercel + Railway</span></div>}</article>)}</div></section>

      <section id="stack" className="section-wrap stack-section"><div className="section-heading compact"><div><span className="section-kicker">04 / THE TOOLKIT</span><h2>Versatile across<br /><span>the full stack.</span></h2></div><p>A practical toolkit shaped through production internships, academic capstones, and collaborative product development.</p></div><div className="stack-panel"><div className="stack-tabs">{Object.keys(stack).map(k => <button className={tab === k ? 'active' : ''} key={k} onClick={() => setTab(k as keyof typeof stack)}>{k}</button>)}</div><div className="stack-list">{stack[tab].map((x, i) => <div key={x}><span>0{i + 1}</span><strong>{x}</strong><Check size={16} /></div>)}</div><div className="api-console"><div className="console-label"><span><i /> API PLAYGROUND</span><span className="mono">POST /api/v1/summarize</span></div><div className="console-body"><div className="request-line"><span className="method">POST</span><span>/api/v1/summarize</span><button onClick={runApi} disabled={apiState === 'running'}>{apiState === 'running' ? 'Running...' : 'Send request'} <Send size={13} /></button></div><pre>{response}</pre>{apiState === 'done' && <span className="latency">● 200 OK · 38ms</span>}</div></div></div></section>

      <section id="experience" className="section-wrap experience-section"><div className="section-heading compact"><div><span className="section-kicker">02 / EXPERIENCE</span><h2>Hands-on experience,<br /><span>from idea to deployment.</span></h2></div><p>Professional and project-based experience spanning interface design, backend services, databases, AI integrations, and cloud delivery.</p></div><div className="timeline">{experiences.map((x, i) => <div className={`timeline-item ${expanded === i + 10 ? 'open' : ''}`} key={x.company}><div className="timeline-marker">{i === 0 ? <Sparkles size={14} /> : <span />}</div><div className="timeline-content"><div className="timeline-meta"><span>{x.date}</span><span>{i === 0 ? 'LATEST' : `0${i + 1}`}</span></div><button onClick={() => setExpanded(expanded === i + 10 ? -1 : i + 10)} className="role-button"><div><h3>{x.role}</h3><p>{x.company}</p></div><ChevronDown size={18} className={expanded === i + 10 ? 'rotate-180' : ''} /></button><p className="role-summary">{x.summary}</p>{expanded === i + 10 && <ul>{x.points.map(point => <li key={point}>{point}</li>)}</ul>}</div></div>)}</div></section>

      <section id="achievements" className="section-wrap achievements-section"><div className="section-heading compact"><div><span className="section-kicker">05 / LEADERSHIP</span><h2>Growing through<br /><span>teaching and service.</span></h2></div><p>Experiences beyond development that strengthened my communication, leadership, and ability to support a team.</p></div><div className="achievement-grid">{achievements.map((item, i) => <article className="achievement-card" key={item.title}><div className="achievement-top"><span className="project-index">0{i + 1}</span><span>{item.date}</span></div><div className="achievement-icon"><Sparkles size={17} /></div><span className="project-type">{item.detail}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div></section>

      <section id="contact" className="section-wrap contact-section"><div className="contact-card"><div><span className="section-kicker">06 / GET IN TOUCH</span><h2>Let&apos;s build something<br /><span>useful together.</span></h2><p>I&apos;m open to full-stack development opportunities, product collaborations, and conversations about thoughtful software.</p><div className="contact-meta"><a href="mailto:oeurnleesinh52@gmail.com"><Mail size={15} /> oeurnleesinh52@gmail.com</a><span><Globe2 size={15} /> Phnom Penh · UTC+7</span></div><div className="contact-socials"><span>Find me online</span><div className="social-links"><a href="https://github.com/lee-sinh" target="_blank" rel="noreferrer" aria-label="GitHub"><BrandIcon name="github" /></a><a href="https://www.linkedin.com/in/lee-sinh-oeurn-7a3b67291" target="_blank" rel="noreferrer" aria-label="LinkedIn"><BrandIcon name="linkedin" /></a><a href="https://facebook.com/share/19w7fcrC7q/?mibextid=wwXIfr" target="_blank" rel="noreferrer" aria-label="Facebook"><BrandIcon name="facebook" /></a><a href="https://t.me/leesinhh" target="_blank" rel="noreferrer" aria-label="Telegram"><BrandIcon name="telegram" /></a></div></div></div><form onSubmit={e => { e.preventDefault(); setSent(true); setContactMessage('') }}><label>Name<input required placeholder="Your name" /></label><label>Email<input required type="email" placeholder="you@example.com" /></label><label>Message<textarea required value={contactMessage} onChange={e => setContactMessage(e.target.value)} placeholder="Tell me about the opportunity or project..." /></label><button className="button-primary" type="submit">{sent ? 'Message ready to send' : 'Send a message'} {sent ? <Check size={16} /> : <ArrowUpRight size={16} />}</button></form></div></section>
      <footer><div><span className="brand" aria-label="Oeurn Lee Sinh"><span className="brand-mark">OLS</span></span><span>Designed & built with intention · 2026</span></div></footer>
      <button className="copilot-fab" onClick={() => setCopilot(true)}><Bot size={17} /> Ask about my experience</button>
      {copilot && <div className="overlay" onClick={() => setCopilot(false)}><aside className="copilot" role="dialog" aria-modal="true" aria-label="Portfolio guide" onClick={e => e.stopPropagation()}><div className="copilot-header"><div><span className="section-kicker">PORTFOLIO GUIDE</span><h3>Explore my work</h3><span className="guide-status"><i /> Portfolio index online</span></div><button className="modal-close" onClick={() => setCopilot(false)} aria-label="Close portfolio guide"><X size={18} /></button></div><div className="guide-conversation"><div className="copilot-message"><div className="bot-icon"><Bot size={17} /></div><p>Hi, I can help you explore Oeurn&apos;s projects, technical capabilities, experience, and availability.</p></div>{guideExchange && <><div className="guide-user-message">{guideExchange.question}</div><div className="copilot-message response"><div className="bot-icon"><Bot size={17} /></div><p>{guideExchange.answer}</p></div></>}</div><div className="quick-asks"><span>Suggested questions</span><div><button onClick={() => askGuide('What is your strongest project?')}>Strongest project?</button><button onClick={() => askGuide('What is your technical stack?')}>What&apos;s the stack?</button><button onClick={() => askGuide('Are you available for work?')}>Availability?</button></div></div><form className="copilot-input" onSubmit={e => { e.preventDefault(); askGuide(guideInput) }}><input value={guideInput} onChange={e => setGuideInput(e.target.value)} placeholder="Ask about a project or skill..." aria-label="Ask the portfolio guide" /><button type="submit" disabled={!guideInput.trim()} aria-label="Send question"><Send size={16} /></button></form></aside></div>}
    </main>
  )
}
