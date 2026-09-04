"use client"

import { useState } from "react"
import { ArrowUpRight, BriefcaseBusiness, Code2, ExternalLink, Github, Globe2, HeartPulse, Linkedin, Mail, Menu, Music2, Play, Sparkles, X, Zap } from "lucide-react"

const liveProjects = [
  { title: "BiteBuddy", description: "A private, offline-first nutrition and fitness diary with 4,500+ Indian foods, calorie and macro tracking, hydration, workouts, weight progress, and confidential cycle tracking. Built to keep personal health data on-device.", tech: ["Kotlin", "Jetpack Compose", "Clean Architecture", "MVVM", "Room", "SQL", "Animations"], link: "https://play.google.com/store/apps/details?id=com.scrymz.bitebuddy", linkLabel: "View on Google Play", icon: HeartPulse, label: "Live / 150+ downloads" },
  { title: "Audio & Video Cutter", description: "A fast offline editor for trimming audio and video, extracting sound, creating ringtones, changing playback speed, and combining multiple audio segments with smooth local processing.", tech: ["Kotlin", "Jetpack Compose", "Media3", "Room", "Scoped Storage", "AdMob", "RevenueCat", "Google Billing", "MVVM", "Clean Architecture"], link: "https://play.google.com/store/apps/details?id=com.nutrino.audiocutter", linkLabel: "View on Google Play", icon: Music2, label: "Live / 7k+ downloads · 4.7+ rated" },
]
const projects = [
  { title: "Lhythm", description: "A full-fledged offline music player with ExoPlayer integration, lyrics support, album art loading, playlist creation, and light/dark themes.", tech: ["Kotlin", "Jetpack Compose", "Media3", "Room", "MVVM", "Hilt"], link: "https://github.com/Codexyze/Lhythm", icon: Music2, label: "Featured / 01" },
  { title: "Fashion Point", description: "An e-commerce Android app for women-centric fashion shopping with login/signup, product listing, cart system, order tracking, and reels-driven discovery.", tech: ["Jetpack Compose", "Firebase", "Hilt", "MVVM", "Flows"], link: "https://github.com/Codexyze/FashionPoint", icon: Globe2, label: "Featured / 02" },
  { title: "DeepShield", description: "An ML-based deepfake detection app using client-server architecture with Grad-CAM visualization and EfficientNet model.", tech: ["Python", "PyTorch", "Flask", "Android", "Firebase"], link: "https://github.com/Codexyze/DeepFake-Detection", icon: Sparkles, label: "Featured / 03" },
  { title: "Guess It", description: "A logic puzzle quiz game built entirely with Jetpack Compose, featuring engaging gameplay and modern UI design.", tech: ["Kotlin", "Jetpack Compose"], link: "https://github.com/Codexyze/Guess_it", icon: Zap, label: "Featured / 04" },
]
const blogs = [
  { title: "Spring Boot Fundamentals for Android Developers", description: "A beginner-friendly guide to REST APIs with Spring Boot, PostgreSQL, JPA, CRUD operations, and Swagger.", link: "https://medium.com/@akshaysarapure/spring-boot-fundamentals-for-android-developers-rest-apis-postgresql-jpa-swagger-29111f68374d" },
  { title: "Kotlin Multiplatform AI Chat App", description: "A practical guide to building a basic AI chat app with Clean Architecture, Ktor, Koin, and Compose Multiplatform.", link: "https://medium.com/@akshaysarapure/kotlin-multiplatform-ai-chat-app-basic-level-clean-architecture-ktor-koin-compose-explained-31bf1e1345de" },
  { title: "Intents in Android for Jetpack Compose Users", description: "A practical introduction to explicit, implicit, and common Android Intent use cases with Jetpack Compose.", link: "https://medium.com/@akshaysarapure/intents-in-android-for-jetpack-compose-users-dc0391601b9b" },
  { title: "Type Safe Navigation Jetpack Compose", description: "Learn how to implement safer routes and pass navigation arguments in Jetpack Compose.", link: "https://medium.com/@akshaysarapure/type-safe-navigation-jetpack-compose-be6eaf3e7160" },
  { title: "Realtime Location in Android Using Jetpack Compose", description: "Learn how to track and display real-time location with Compose and location updates.", link: "https://medium.com/@akshaysarapure/realtime-location-in-android-using-jetpack-compose-390411e996ea" },
  { title: "MVVM Architecture in Android For Dummies", description: "A simple introduction to View, ViewModel, Model, and how they work together.", link: "https://medium.com/@akshaysarapure/mvvm-architecture-in-android-for-dummies-926a882e9088" },
]
const skills = { "Android Development": ["Kotlin", "Jetpack Compose", "Android SDK", "Material Design", "Coroutines", "Flow"], "Architecture & Data": ["Clean Architecture", "MVVM", "Room", "Hilt", "Retrofit", "Firebase"], "Tools & Other": ["Git", "GitHub", "Python", "PyTorch", "Flask", "Figma"] }

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return <div className="section-heading"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{description && <p>{description}</p>}</div>
}
function TechBadge({ children }: { children: string }) { return <span className="tech-badge">{children}</span> }
type PortfolioProject = {
  title: string
  description: string
  tech: string[]
  link: string
  linkLabel?: string
  icon: typeof HeartPulse
  label?: string
}

function ProjectCard({ project, featured = false }: { project: PortfolioProject; featured?: boolean }) {
  const Icon = project.icon
  return <article className={`project-card ${featured ? "project-card--featured" : ""}`}><div className="card-topline"><span>{project.label ?? "Project"}</span><Icon aria-hidden="true" /></div><div className="project-icon"><Icon aria-hidden="true" /></div><h3>{project.title}</h3><p>{project.description}</p><div className="tag-row">{project.tech.map((item) => <TechBadge key={item}>{item}</TechBadge>)}</div><a className="text-link" href={project.link} target="_blank" rel="noreferrer">{project.linkLabel ?? "View repository"} <ArrowUpRight aria-hidden="true" /></a></article>
}

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const scrollToSection = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setIsMenuOpen(false) }
  const navItems = [["home", "Home"], ["projects", "Work"], ["experience", "Experience"], ["skills", "Skills"], ["contact", "Contact"]]
  return <main>
    <header className="site-header"><a className="brand" href="#home" onClick={(e) => { e.preventDefault(); scrollToSection("home") }}><span className="brand-mark">AS</span><span>AKSHAY <b>SARAPURE</b></span></a><nav className={isMenuOpen ? "nav-links is-open" : "nav-links"} aria-label="Primary navigation">{navItems.map(([id, label]) => <button key={id} onClick={() => scrollToSection(id)}>{label}</button>)}<a className="nav-contact" href="mailto:akshaysarapure@gmail.com">Say hello <ArrowUpRight aria-hidden="true" /></a></nav><button className="menu-toggle" aria-label={isMenuOpen ? "Close menu" : "Open menu"} onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <X /> : <Menu />}</button></header>

    <section id="home" className="hero section-shell"><div className="hero-copy"><div className="status-line"><span className="status-dot" /> Available for select collaborations</div><p className="hero-kicker">Android developer / product-minded builder</p><h1>Apps that feel <em>inevitable.</em></h1><p className="hero-lede">I&apos;m Akshay — I design and build thoughtful Android experiences where robust engineering meets a sharp point of view.</p><div className="hero-actions"><button className="button button-primary" onClick={() => scrollToSection("projects")}>Explore my work <ArrowUpRight aria-hidden="true" /></button><a className="button button-quiet" href="mailto:akshaysarapure@gmail.com">Let&apos;s talk <Mail aria-hidden="true" /></a></div><div className="hero-meta"><span><Code2 aria-hidden="true" /> Kotlin-first</span><span><BriefcaseBusiness aria-hidden="true" /> 3+ years building</span></div></div><div className="hero-visual"><div className="device-label">CURRENTLY BUILDING <span>01 / 03</span></div><div className="phone"><div className="phone-camera" /><div className="phone-screen"><div className="player-header"><span>Now playing</span><MoreDots /></div><div className="album-art"><Music2 aria-hidden="true" /></div><p className="song-name">Night Drive</p><p className="artist-name">Lhythm / Offline mix</p><div className="waveform">{Array.from({ length: 32 }, (_, i) => <i key={i} style={{ height: `${18 + ((i * 17) % 50)}%` }} />)}</div><div className="player-time"><span>1:24</span><span>3:48</span></div><div className="player-controls"><span>↶</span><button aria-label="Play preview"><Play fill="currentColor" /></button><span>↷</span></div></div></div><div className="float-chip chip-one">KOTLIN</div><div className="float-chip chip-two">COMPOSE</div><div className="float-chip chip-three">SHIP / REPEAT</div></div></section>

    <section id="deployed-projects" className="section-shell section-block"><div className="split-heading"><SectionHeading eyebrow="In the wild / 01" title="Live projects" description="Products that made it past the emulator and onto people&apos;s phones." /><span className="section-number">01</span></div><div className="live-project-grid">{liveProjects.map((project) => <ProjectCard key={project.title} project={project} featured />)}</div></section>

    <section id="projects" className="section-shell section-block open-source-section"><SectionHeading eyebrow="Open source / 02" title="My open source projects" description="A collection of focused experiments and ideas shared in the open." /><div className="open-source-scroller"><div className="project-grid">{projects.map((project) => <ProjectCard key={project.title} project={project} featured />)}</div></div></section>

    <section id="blogs" className="section-shell section-block section-muted"><SectionHeading eyebrow="Field notes / 04" title="Writing on the side" description="Notes from the build process, shared in plain language." /><div className="blog-list">{blogs.map((blog, i) => <a className="blog-row" key={blog.title} href={blog.link} target="_blank" rel="noreferrer"><span className="blog-index">0{i + 1}</span><div><h3>{blog.title}</h3><p>{blog.description}</p></div><ArrowUpRight aria-hidden="true" /></a>)}</div></section>

    <section id="achievements" className="section-shell section-block"><SectionHeading eyebrow="Signals / 05" title="A few good milestones" /><div className="milestones"><div><strong>7.5k+</strong><span>downloads across shipped Android apps</span></div><div><strong>1.7k+</strong><span>active users across live products</span></div><div><strong>4,500+</strong><span>foods in BiteBuddy&apos;s local database</span></div><div><strong>8.61</strong><span>B.E. Computer Science and Engineering CGPA</span></div></div></section>

    <section id="experience" className="section-shell section-block section-muted"><SectionHeading eyebrow="Experience / 06" title="Professional experience" /><div className="experience-row"><div className="experience-date">SEPT 2025 — MARCH 2026</div><div><span className="eyebrow">Android Developer Intern / Scrymz Software Private Limited</span><h3>Building and deploying production Android experiences.</h3><p>Built a production Android app with Clean Architecture and a 99.95% crash-free rate. Integrated 120+ APIs using Ktor, developed 40+ REST APIs with Spring Boot, monitored production with Sentry, and delivered a secure RevenueCat payment gateway with real-time transaction tracking.</p><div className="tag-row"><TechBadge>Kotlin</TechBadge><TechBadge>Clean Architecture</TechBadge><TechBadge>Ktor</TechBadge><TechBadge>Spring Boot</TechBadge><TechBadge>Sentry</TechBadge><TechBadge>RevenueCat</TechBadge></div></div><ArrowUpRight aria-hidden="true" /></div></section>

    <section id="skills" className="section-shell section-block"><SectionHeading eyebrow="Toolkit / 07" title="How I make things" /><div className="skills-grid">{Object.entries(skills).map(([category, items]) => <div className="skill-group" key={category}><h3>{category}</h3><div className="tag-row">{items.map((skill) => <TechBadge key={skill}>{skill}</TechBadge>)}</div></div>)}</div></section>

    <section id="resume" className="section-shell section-block resume-block"><div><span className="eyebrow">One page, well considered / 08</span><h2>Want the full picture?</h2><p>Ask for my resume and I&apos;ll send over the latest version, including the work that lives behind the scenes.</p></div><a className="button button-primary" href="mailto:akshaysarapure@gmail.com?subject=Resume Request&body=Hi Akshay, I would like to request your resume. Thank you!">Request resume <Mail aria-hidden="true" /></a></section>

    <section id="contact" className="contact-section"><div className="section-shell contact-inner"><span className="eyebrow">Open channel / 09</span><h2>Let&apos;s make<br /><em>something useful.</em></h2><a className="contact-email" href="mailto:akshaysarapure@gmail.com">akshaysarapure@gmail.com <ArrowUpRight aria-hidden="true" /></a><div className="social-row"><a href="https://www.linkedin.com/in/akshay-sarapure-0a1677213/" target="_blank" rel="noreferrer"><Linkedin aria-hidden="true" /> LinkedIn</a><a href="https://github.com/Codexyze" target="_blank" rel="noreferrer"><Github aria-hidden="true" /> GitHub</a><a href="https://instagram.com/ak__shay_s" target="_blank" rel="noreferrer">Instagram <ArrowUpRight aria-hidden="true" /></a></div></div></section>
    <footer className="site-footer section-shell"><span>© {new Date().getFullYear()} Akshay Sarapure</span><span>Designed & built with intent.</span></footer>
  </main>
}
function MoreDots() { return <span className="more-dots" aria-hidden="true">•••</span> }

