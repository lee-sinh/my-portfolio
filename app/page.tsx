'use client'

import { useEffect, useMemo, useState } from 'react'
import {
  ArrowUpRight, Bot, Check, ChevronDown, CircleDot, Code2, Globe2, Mail, Menu, Moon,
  Send, Sparkles, Sun, Terminal, X, Zap,
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
  { name: 'Aicser EdTech SaaS', type: 'AI-powered learning platform', description: 'A subscription-ready learning platform with an Anthropic chatbot, course video management, and credit-based usage.', tags: ['Next.js', 'FastAPI', 'Anthropic API', 'Stripe'], metric: 'AI + subscriptions', featured: true },
  { name: 'InternLink', type: 'Capstone · recruitment platform', description: 'Connects Cambodian university students with verified internship opportunities while helping companies recruit qualified interns.', tags: ['Laravel', 'PostgreSQL', 'Mailtrap', 'REST API'], metric: 'Company dashboards' },
  { name: 'Timetable Maker', type: 'Capstone · scheduling system', description: 'An automated timetable generation system that makes class scheduling more interactive and efficient at CADT.', tags: ['React', 'Tailwind', 'PHP', 'Laravel'], metric: 'Automated scheduling' },
  { name: 'UniSeek', type: 'Bootcamp · discovery tool', description: 'A university discovery app with mentorship insights and a fast fuzzy-search experience for students.', tags: ['React', 'Fuse.js', 'Figma'], metric: 'Fuzzy search' },
]

const experiences = [
  { date: 'Jan 2026 — May 2026', role: 'Full-Stack Developer Intern', company: 'DataTicon', summary: 'Built SaaS platforms across frontend, backend, database, and deployment layers.', points: ['Built Aicser EdTech SaaS with Anthropic AI, Azure Blob Storage, and Stripe.', 'Implemented subscription plans and credit-based usage for an open-source analytics platform.', 'Deployed production applications with Vercel, Docker, and Railway.'] },
  { date: 'Oct 2025 — Dec 2025', role: 'Back-End Developer', company: 'InternLink · Capstone 2', summary: 'Designed the systems behind a platform connecting students with verified internships.', points: ['Developed admin and company dashboards with Laravel and PostgreSQL.', 'Integrated Mailtrap SMTP and tested status update APIs with Postman.', 'Collaborated with teammates and advisors through delivery.'] },
  { date: 'May 2025 — Aug 2025', role: 'Full-Stack Developer Intern', company: 'Ministry of Interior', summary: 'Developed an internal E-Learning Platform for students and lessons.', points: ['Worked across prototyping, UI, backend development, and database design.', 'Built the interface with React and Tailwind CSS.', 'Implemented ASP.NET Core services backed by SQL Server.'] },
]

const education = [
  { institution: 'Cambodia Academy of Digital Technology — CADT', program: 'Bachelor Degree of Computer Science · Software Engineering', period: '2023 — 2026', detail: 'Techo Digital Talent Scholarship' },
  { institution: 'Techpreneur Bootcamp', program: 'Full-Stack Development', period: 'Jun 2024 — Mar 2025', detail: 'Intensive product development program' },
  { institution: '10 January 1979 High School', program: 'Science · Grade B', period: '2022 — 2023', detail: 'High school diploma' },
]

const achievements = [
  { title: 'Next-Gen Engagement Program', detail: 'Database Analysis and Design Trainer', description: 'Guided junior students through a database course to help them prepare for the upcoming term at CADT.', date: 'Aug 2024 — Sept 2024' },
  { title: 'JCI — 2024 Junior Leadership Academy', detail: 'Marketing Team', description: 'Volunteered with JCI Chaktomuk for the Public Speaking and Debating project.', date: 'Feb 2024 — Sept 2024' },
  { title: 'Techpreneur Bootcamp', detail: 'Full-Stack Development', description: 'Completed an intensive bootcamp focused on practical full-stack product development and collaborative delivery.', date: 'Jun 2024 — Mar 2025' },
]

const stack = {
  Frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'],
  Backend: ['Python', 'FastAPI', 'PHP', 'Laravel', 'C# / ASP.NET Core'],
  'AI & Infra': ['Anthropic API', 'Docker', 'Vercel', 'Railway', 'Azure Blob Storage'],
  Databases: ['PostgreSQL', 'SQL Server', 'Database design', 'REST APIs', 'Postman'],
}

export default function Page() {
  const [dark, setDark] = useState(true)
  const [menu, setMenu] = useState(false)
  const [copilot, setCopilot] = useState(false)
  const [expanded, setExpanded] = useState(0)
  const [tab, setTab] = useState<keyof typeof stack>('Frontend')
  const [apiState, setApiState] = useState<'idle' | 'running' | 'done'>('idle')
  const [message, setMessage] = useState('')
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
    return () => observer.disconnect()
  }, [])
  useEffect(() => {
    const tick = () => setTime(new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Phnom_Penh', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }).format(new Date()))
    tick(); const id = window.setInterval(tick, 1000); return () => window.clearInterval(id)
  }, [])

  const response = useMemo(() => apiState === 'done' ? '{\n  "status": "success",\n  "summary": "AI systems make complex\n  information easier to act on.",\n  "latency": "38ms"\n}' : '{\n  "status": "ready",\n  "message": "Waiting for request..."\n}', [apiState])
  const runApi = () => { setApiState('running'); window.setTimeout(() => setApiState('done'), 800) }
  const nav = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMenu(false) }

  return (
    <main className="min-h-screen overflow-clip bg-background text-foreground">
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <nav className="nav-shell"><button className="brand" onClick={() => nav('top')} aria-label="Back to top"><span className="brand-mark">OL</span><span>OEURN LEE SINH</span></button><div className="nav-links"><button className={activeSection === 'top' ? 'active' : ''} onClick={() => nav('top')}>About</button><button className={activeSection === 'experience' ? 'active' : ''} onClick={() => nav('experience')}>Experience</button><button className={activeSection === 'projects' ? 'active' : ''} onClick={() => nav('projects')}>Projects</button><button className={activeSection === 'stack' ? 'active' : ''} onClick={() => nav('stack')}>Stack</button><button className={activeSection === 'achievements' ? 'active' : ''} onClick={() => nav('achievements')}>Achievements</button><button className={activeSection === 'contact' ? 'active' : ''} onClick={() => nav('contact')}>Contact</button></div><div className="nav-actions"><button className="command-trigger" onClick={() => setMenu(true)}><span>⌘</span> K</button><button className="icon-button" onClick={() => setDark(!dark)} aria-label="Toggle theme">{dark ? <Sun size={16} /> : <Moon size={16} />}</button><span className="availability"><i /> Available</span><button className="mobile-menu" onClick={() => setMenu(true)} aria-label="Open menu"><Menu size={18} /></button></div></nav>
      {menu && <div className="overlay" onClick={() => setMenu(false)}><div className="command-modal" onClick={e => e.stopPropagation()}><div className="command-head"><Terminal size={17} /><input autoFocus placeholder="Jump to a section..." /><button onClick={() => setMenu(false)}><X size={17} /></button></div><div className="command-items">{[['top','About me'],['experience','Experience timeline'],['projects','Explore projects'],['stack','Technical stack'],['achievements','Achievements'],['contact','Start a conversation']].map(([id, label]) => <button key={id} onClick={() => nav(id)}><ArrowUpRight size={15} />{label}<span>↵</span></button>)}</div></div></div>}

      <section id="top" className="hero section-wrap"><div className="hero-layout"><div className="hero-content"><div className="eyebrow"><CircleDot size={14} /> FULL-STACK DEVELOPER <span>/</span> AI ENTHUSIAST</div><h1>Building systems<br /><em>people enjoy using.</em></h1><p className="hero-copy">I&apos;m Oeurn Lee Sinh — a software engineering student and full-stack developer crafting thoughtful products with <strong>Next.js, FastAPI, distributed systems,</strong> and LLM integrations.</p><div className="hero-actions"><button className="button-primary" onClick={() => nav('projects')}>Explore projects <ArrowUpRight size={16} /></button><button className="button-ghost" onClick={() => setCopilot(true)}><Terminal size={16} /> Interactive terminal</button></div><div className="education-block"><div className="education-heading"><span className="section-kicker">01 / EDUCATION</span><span className="education-rule" /></div>{education.map(item => <article className="education-item" key={item.institution}><div><h3>{item.institution}</h3><p>{item.program}</p><span>{item.detail}</span></div><time>{item.period}</time></article>)}</div></div><div className="portrait-frame"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Sep%2029%2C%202025%2C%2003_00_57%20PM-H1CHgPEqJBTQ2wUSN03mROyan2KSgO.png" alt="Portrait of Oeurn Lee Sinh" /></div></div><div className="tech-row">{['Next.js', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL', 'Docker'].map(x => <span key={x}>{x}</span>)}</div><div className="hero-foot"><span>Based in Phnom Penh, Cambodia</span><span className="mono"><Zap size={13} /> UTC+07:00 · {time || '—'}</span></div></section>

      <section id="projects" className="section-wrap work-section"><div className="section-heading"><div><span className="section-kicker">03 / SELECTED PROJECTS</span><h2>Projects that solve<br /><span>real problems.</span></h2></div><p>From education and recruitment to intelligent tools — I like working where product thinking meets engineering craft.</p></div><div className="project-grid">{projects.map((p, i) => <article className={`project-card ${p.featured ? 'featured' : ''}`} key={p.name}><div className="card-top"><span className="project-index">0{i + 1}</span><span className="metric">{p.metric}</span></div><div className="project-visual"><div className="visual-grid" /><div className="visual-window"><div className="window-bar"><i /><i /><i /><span>{p.featured ? 'aicser / dashboard' : p.name.toLowerCase().replaceAll(' ', '-')}</span></div><div className="window-content"><span className="code-line blue" /><span className="code-line wide" /><span className="code-line short" /><span className="code-block" /></div></div></div><span className="project-type">{p.type}</span><h3>{p.name}</h3><p>{p.description}</p><div className="tag-row">{p.tags.map(t => <span key={t}>{t}</span>)}</div>{p.featured && <button className="expand-link" onClick={() => setExpanded(expanded === i ? -1 : i)}>{expanded === i ? 'Hide architecture' : 'View architecture'} <ChevronDown size={15} className={expanded === i ? 'rotate-180' : ''} /></button>}{expanded === i && <div className="architecture"><Code2 size={15} /><span>Next.js UI → FastAPI services → PostgreSQL / Azure → Vercel + Railway</span></div>}</article>)}</div></section>

      <section id="stack" className="section-wrap stack-section"><div className="section-heading compact"><div><span className="section-kicker">04 / THE TOOLKIT</span><h2>Practical by default.<br /><span>Curious by nature.</span></h2></div><p>My stack is shaped by projects: choose the right tool, keep the architecture clear, and ship something useful.</p></div><div className="stack-panel"><div className="stack-tabs">{Object.keys(stack).map(k => <button className={tab === k ? 'active' : ''} key={k} onClick={() => setTab(k as keyof typeof stack)}>{k}</button>)}</div><div className="stack-list">{stack[tab].map((x, i) => <div key={x}><span>0{i + 1}</span><strong>{x}</strong><Check size={16} /></div>)}</div><div className="api-console"><div className="console-label"><span><i /> API PLAYGROUND</span><span className="mono">POST /api/v1/summarize</span></div><div className="console-body"><div className="request-line"><span className="method">POST</span><span>/api/v1/summarize</span><button onClick={runApi} disabled={apiState === 'running'}>{apiState === 'running' ? 'Running...' : 'Send request'} <Send size={13} /></button></div><pre>{response}</pre>{apiState === 'done' && <span className="latency">● 200 OK · 38ms</span>}</div></div></div></section>

      <section id="experience" className="section-wrap experience-section"><div className="section-heading compact"><div><span className="section-kicker">02 / EXPERIENCE</span><h2>A timeline of<br /><span>learning in public.</span></h2></div><p>Every role has expanded how I think about building — from the database layer all the way to the last pixel.</p></div><div className="timeline">{experiences.map((x, i) => <div className={`timeline-item ${expanded === i + 10 ? 'open' : ''}`} key={x.company}><div className="timeline-marker">{i === 0 ? <Sparkles size={14} /> : <span />}</div><div className="timeline-content"><div className="timeline-meta"><span>{x.date}</span><span>{i === 0 ? 'CURRENT' : `0${i + 1}`}</span></div><button onClick={() => setExpanded(expanded === i + 10 ? -1 : i + 10)} className="role-button"><div><h3>{x.role}</h3><p>{x.company}</p></div><ChevronDown size={18} className={expanded === i + 10 ? 'rotate-180' : ''} /></button><p className="role-summary">{x.summary}</p>{expanded === i + 10 && <ul>{x.points.map(point => <li key={point}>{point}</li>)}</ul>}</div></div>)}</div></section>

      <section id="achievements" className="section-wrap achievements-section"><div className="section-heading compact"><div><span className="section-kicker">05 / ACHIEVEMENTS</span><h2>Milestones that<br /><span>shaped my path.</span></h2></div><p>Beyond shipped products, these experiences helped me grow as a builder, mentor, and collaborator.</p></div><div className="achievement-grid">{achievements.map((item, i) => <article className="achievement-card" key={item.title}><div className="achievement-top"><span className="project-index">0{i + 1}</span><span>{item.date}</span></div><div className="achievement-icon"><Sparkles size={17} /></div><span className="project-type">{item.detail}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div></section>

      <section id="contact" className="section-wrap contact-section"><div className="contact-card"><div><span className="section-kicker">06 / GET IN TOUCH</span><h2>Have a good idea?<br /><span>Let&apos;s make it real.</span></h2><p>I&apos;m open to internships, collaborations, and conversations about building useful software.</p><div className="contact-meta"><a href="mailto:oeurnleesinh52@gmail.com"><Mail size={15} /> oeurnleesinh52@gmail.com</a><span><Globe2 size={15} /> Phnom Penh · UTC+7</span></div><div className="contact-socials"><span>Find me online</span><div className="social-links"><a href="https://github.com/lee-sinh" target="_blank" rel="noreferrer" aria-label="GitHub"><BrandIcon name="github" /></a><a href="https://www.linkedin.com/in/lee-sinh-oeurn-7a3b67291" target="_blank" rel="noreferrer" aria-label="LinkedIn"><BrandIcon name="linkedin" /></a><a href="https://facebook.com/share/19w7fcrC7q/?mibextid=wwXIfr" target="_blank" rel="noreferrer" aria-label="Facebook"><BrandIcon name="facebook" /></a><a href="https://t.me/leesinhh" target="_blank" rel="noreferrer" aria-label="Telegram"><BrandIcon name="telegram" /></a></div></div></div><form onSubmit={e => { e.preventDefault(); setSent(true); setMessage('') }}><label>Name<input required placeholder="Your name" /></label><label>Email<input required type="email" placeholder="you@example.com" /></label><label>Message<textarea required value={message} onChange={e => setMessage(e.target.value)} placeholder="Tell me about the project..." /></label><button className="button-primary" type="submit">{sent ? 'Message ready to send' : 'Send a message'} {sent ? <Check size={16} /> : <ArrowUpRight size={16} />}</button></form></div></section>
      <footer><span className="brand"><span className="brand-mark">OL</span> OEURN LEE SINH</span><span>Designed & built with intention · 2026</span></footer>
      <button className="copilot-fab" onClick={() => setCopilot(true)}><Bot size={17} /> Ask about my experience</button>
      {copilot && <div className="overlay" onClick={() => setCopilot(false)}><aside className="copilot" onClick={e => e.stopPropagation()}><div className="copilot-header"><div><span className="section-kicker">AI PORTFOLIO COPILOT</span><h3>Ask about my work</h3></div><button onClick={() => setCopilot(false)}><X size={18} /></button></div><div className="copilot-message"><div className="bot-icon"><Bot size={17} /></div><p>Hi — I can tell you about Oeurn&apos;s projects, stack, experience, or availability.</p></div><div className="quick-asks"><button onClick={() => setMessage('What is your strongest project?')}>Strongest project?</button><button onClick={() => setMessage('What is your stack?')}>What&apos;s the stack?</button></div><div className="copilot-input"><input value={message} onChange={e => setMessage(e.target.value)} placeholder="Ask a question..." /><button onClick={() => setMessage('Thanks for your question — let&apos;s connect to discuss it.') }><Send size={15} /></button></div></aside></div>}
    </main>
  )
}
