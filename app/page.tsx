'use client'

import { useEffect, useMemo, useState } from 'react'
import {
  ArrowUpRight, Bot, BriefcaseBusiness, Check, ChevronDown, CircleDot, Code2, GitBranch,
  Globe2, Mail, Menu, Moon, Send, Sparkles, Sun, Terminal, X, Zap,
} from 'lucide-react'

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

  useEffect(() => {
    document.documentElement.classList.toggle('light', !dark)
  }, [dark])
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
      <nav className="nav-shell"><button className="brand" onClick={() => nav('top')} aria-label="Back to top"><span className="brand-mark">OL</span><span>OEURN LEE SINH</span></button><div className="nav-links"><button onClick={() => nav('work')}>Work</button><button onClick={() => nav('experience')}>Experience</button><button onClick={() => nav('stack')}>Stack</button><button onClick={() => nav('contact')}>Contact</button></div><div className="nav-actions"><button className="command-trigger" onClick={() => setMenu(true)}><span>⌘</span> K</button><button className="icon-button" onClick={() => setDark(!dark)} aria-label="Toggle theme">{dark ? <Sun size={16} /> : <Moon size={16} />}</button><span className="availability"><i /> Available</span><button className="mobile-menu" onClick={() => setMenu(true)} aria-label="Open menu"><Menu size={18} /></button></div></nav>
      {menu && <div className="overlay" onClick={() => setMenu(false)}><div className="command-modal" onClick={e => e.stopPropagation()}><div className="command-head"><Terminal size={17} /><input autoFocus placeholder="Jump to a section..." /><button onClick={() => setMenu(false)}><X size={17} /></button></div><div className="command-items">{[['work','Explore projects'],['experience','Experience timeline'],['stack','Technical stack'],['contact','Start a conversation']].map(([id, label]) => <button key={id} onClick={() => nav(id)}><ArrowUpRight size={15} />{label}<span>↵</span></button>)}</div></div></div>}

      <section id="top" className="hero section-wrap"><div className="hero-layout"><div className="hero-content"><div className="eyebrow"><CircleDot size={14} /> FULL-STACK DEVELOPER <span>/</span> AI ENTHUSIAST</div><h1>Building systems<br /><em>people enjoy using.</em></h1><p className="hero-copy">I&apos;m Oeurn Lee Sinh — a software engineering student and full-stack developer crafting thoughtful products with <strong>Next.js, FastAPI, distributed systems,</strong> and LLM integrations.</p><div className="hero-actions"><button className="button-primary" onClick={() => nav('work')}>Explore projects <ArrowUpRight size={16} /></button><button className="button-ghost" onClick={() => setCopilot(true)}><Terminal size={16} /> Interactive terminal</button></div></div><div className="portrait-frame"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Sep%2029%2C%202025%2C%2003_00_57%20PM-H1CHgPEqJBTQ2wUSN03mROyan2KSgO.png" alt="Portrait of Oeurn Lee Sinh" /></div></div><div className="tech-row">{['Next.js', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL', 'Docker'].map(x => <span key={x}>{x}</span>)}</div><div className="hero-foot"><span>Based in Phnom Penh, Cambodia</span><span className="mono"><Zap size={13} /> UTC+07:00 · {time || '—'}</span></div></section>

      <section id="work" className="section-wrap work-section"><div className="section-heading"><div><span className="section-kicker">01 / SELECTED WORK</span><h2>Projects that solve<br /><span>real problems.</span></h2></div><p>From education and recruitment to intelligent tools — I like working where product thinking meets engineering craft.</p></div><div className="project-grid">{projects.map((p, i) => <article className={`project-card ${p.featured ? 'featured' : ''}`} key={p.name}><div className="card-top"><span className="project-index">0{i + 1}</span><span className="metric">{p.metric}</span></div><div className="project-visual"><div className="visual-grid" /><div className="visual-window"><div className="window-bar"><i /><i /><i /><span>{p.featured ? 'aicser / dashboard' : p.name.toLowerCase().replaceAll(' ', '-')}</span></div><div className="window-content"><span className="code-line blue" /><span className="code-line wide" /><span className="code-line short" /><span className="code-block" /></div></div></div><span className="project-type">{p.type}</span><h3>{p.name}</h3><p>{p.description}</p><div className="tag-row">{p.tags.map(t => <span key={t}>{t}</span>)}</div>{p.featured && <button className="expand-link" onClick={() => setExpanded(expanded === i ? -1 : i)}>{expanded === i ? 'Hide architecture' : 'View architecture'} <ChevronDown size={15} className={expanded === i ? 'rotate-180' : ''} /></button>}{expanded === i && <div className="architecture"><Code2 size={15} /><span>Next.js UI → FastAPI services → PostgreSQL / Azure → Vercel + Railway</span></div>}</article>)}</div></section>

      <section id="stack" className="section-wrap stack-section"><div className="section-heading compact"><div><span className="section-kicker">02 / THE TOOLKIT</span><h2>Practical by default.<br /><span>Curious by nature.</span></h2></div><p>My stack is shaped by projects: choose the right tool, keep the architecture clear, and ship something useful.</p></div><div className="stack-panel"><div className="stack-tabs">{Object.keys(stack).map(k => <button className={tab === k ? 'active' : ''} key={k} onClick={() => setTab(k as keyof typeof stack)}>{k}</button>)}</div><div className="stack-list">{stack[tab].map((x, i) => <div key={x}><span>0{i + 1}</span><strong>{x}</strong><Check size={16} /></div>)}</div><div className="api-console"><div className="console-label"><span><i /> API PLAYGROUND</span><span className="mono">POST /api/v1/summarize</span></div><div className="console-body"><div className="request-line"><span className="method">POST</span><span>/api/v1/summarize</span><button onClick={runApi} disabled={apiState === 'running'}>{apiState === 'running' ? 'Running...' : 'Send request'} <Send size={13} /></button></div><pre>{response}</pre>{apiState === 'done' && <span className="latency">● 200 OK · 38ms</span>}</div></div></div></section>

      <section id="experience" className="section-wrap experience-section"><div className="section-heading compact"><div><span className="section-kicker">03 / EXPERIENCE</span><h2>A timeline of<br /><span>learning in public.</span></h2></div><p>Every role has expanded how I think about building — from the database layer all the way to the last pixel.</p></div><div className="timeline">{experiences.map((x, i) => <div className={`timeline-item ${expanded === i + 10 ? 'open' : ''}`} key={x.company}><div className="timeline-marker">{i === 0 ? <Sparkles size={14} /> : <span />}</div><div className="timeline-content"><div className="timeline-meta"><span>{x.date}</span><span>{i === 0 ? 'CURRENT' : `0${i + 1}`}</span></div><button onClick={() => setExpanded(expanded === i + 10 ? -1 : i + 10)} className="role-button"><div><h3>{x.role}</h3><p>{x.company}</p></div><ChevronDown size={18} className={expanded === i + 10 ? 'rotate-180' : ''} /></button><p className="role-summary">{x.summary}</p>{expanded === i + 10 && <ul>{x.points.map(point => <li key={point}>{point}</li>)}</ul>}</div></div>)}</div></section>

      <section id="contact" className="section-wrap contact-section"><div className="contact-card"><div><span className="section-kicker">04 / GET IN TOUCH</span><h2>Have a good idea?<br /><span>Let&apos;s make it real.</span></h2><p>I&apos;m open to internships, collaborations, and conversations about building useful software.</p><div className="contact-meta"><a href="mailto:oeurnleesinh52@gmail.com"><Mail size={15} /> oeurnleesinh52@gmail.com</a><span><Globe2 size={15} /> Phnom Penh · UTC+7</span></div><div className="contact-socials"><span>Find me online</span><div className="social-links"><a href="https://github.com/lee-sinh" target="_blank" rel="noreferrer" aria-label="GitHub"><GitBranch size={17} /></a><a href="https://www.linkedin.com/in/lee-sinh-oeurn-7a3b67291" target="_blank" rel="noreferrer" aria-label="LinkedIn"><BriefcaseBusiness size={17} /></a><a href="https://facebook.com/share/19w7fcrC7q/?mibextid=wwXIfr" target="_blank" rel="noreferrer" aria-label="Facebook"><Globe2 size={17} /></a><a href="https://t.me/leesinhh" target="_blank" rel="noreferrer" aria-label="Telegram"><Send size={17} /></a></div></div></div><form onSubmit={e => { e.preventDefault(); setSent(true); setMessage('') }}><label>Name<input required placeholder="Your name" /></label><label>Email<input required type="email" placeholder="you@example.com" /></label><label>Message<textarea required value={message} onChange={e => setMessage(e.target.value)} placeholder="Tell me about the project..." /></label><button className="button-primary" type="submit">{sent ? 'Message ready to send' : 'Send a message'} {sent ? <Check size={16} /> : <ArrowUpRight size={16} />}</button></form></div></section>
      <footer><span className="brand"><span className="brand-mark">OL</span> OEURN LEE SINH</span><span>Designed & built with intention · 2026</span></footer>
      <button className="copilot-fab" onClick={() => setCopilot(true)}><Bot size={17} /> Ask about my experience</button>
      {copilot && <div className="overlay" onClick={() => setCopilot(false)}><aside className="copilot" onClick={e => e.stopPropagation()}><div className="copilot-header"><div><span className="section-kicker">AI PORTFOLIO COPILOT</span><h3>Ask about my work</h3></div><button onClick={() => setCopilot(false)}><X size={18} /></button></div><div className="copilot-message"><div className="bot-icon"><Bot size={17} /></div><p>Hi — I can tell you about Oeurn&apos;s projects, stack, experience, or availability.</p></div><div className="quick-asks"><button onClick={() => setMessage('What is your strongest project?')}>Strongest project?</button><button onClick={() => setMessage('What is your stack?')}>What&apos;s the stack?</button></div><div className="copilot-input"><input value={message} onChange={e => setMessage(e.target.value)} placeholder="Ask a question..." /><button onClick={() => setMessage('Thanks for your question — let&apos;s connect to discuss it.') }><Send size={15} /></button></div></aside></div>}
    </main>
  )
}
