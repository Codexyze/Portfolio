"use client"

import { useState, useEffect } from "react"
import { Menu, X, ExternalLink, Github, Mail, Linkedin, Instagram } from "lucide-react"
import { BackgroundPaths } from "@/components/ui/background-paths"

export default function PortfolioPreview() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2, // Increased from 0.1 for better trigger timing
      rootMargin: "0px 0px -100px 0px", // Increased from -50px for earlier trigger
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up")
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"
        }
      })
    }, observerOptions)

    // Observe all cards for animation with better initial state
    const cards = document.querySelectorAll(".animate-on-scroll")
    cards.forEach((card) => {
      // Set initial state more dramatically
      card.style.opacity = "0"
      card.style.transform = "translateY(50px)" // Increased from 30px
      card.style.transition =
        "opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)" // Better easing
      observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      icon: "🎧",
      title: "Lhythm",
      description:
        "A full-fledged offline music player with ExoPlayer integration, lyrics support, album art loading, playlist creation, and light/dark themes.",
      tech: ["Kotlin", "Jetpack Compose", "Media3", "Room", "MVVM", "Hilt"],
      link: "https://github.com/Codexyze/Lhythm",
    },
    {
      icon: "🛍️",
      title: "Fashion Point",
      description:
        "An e-commerce Android app for women-centric fashion shopping with login/signup, product listing, cart system, order tracking, and reels-driven discovery.",
      tech: ["Jetpack Compose", "Firebase", "Hilt", "MVVM", "Flows"],
      link: "https://github.com/Codexyze/FashionPoint",
    },
    {
      icon: "🧠",
      title: "DeepShield",
      description:
        "An ML-based deepfake detection app using client-server architecture with Grad-CAM visualization and EfficientNet model.",
      tech: ["Python", "PyTorch", "Flask", "Android", "Firebase"],
      link: "https://github.com/Codexyze/DeepFake-Detection",
    },
    {
      icon: "🎮",
      title: "Guess It",
      description:
        "A logic puzzle quiz game built entirely with Jetpack Compose, featuring engaging gameplay and modern UI design.",
      tech: ["Kotlin", "Jetpack Compose"],
      link: "https://github.com/Codexyze/Guess_it",
    },
    {
      icon: "🎬",
      title: "Video Player App",
      description:
        "Custom video player using ExoPlayer, built for local video playbook with sleek UI and smooth performance.",
      tech: ["Kotlin", "ExoPlayer", "Android"],
      link: "https://github.com/Codexyze/Video_Player_App",
    },
    {
      icon: "😂",
      title: "Meme App",
      description:
        "Fetches 50 random memes from Reddit using a public API, providing endless entertainment with clean UI.",
      tech: ["Kotlin", "Retrofit", "API Integration"],
      link: "https://github.com/Codexyze/MemeApp",
    },
  ]

  const moreProjects = [
    {
      icon: "📚",
      title: "Quiz App",
      description:
        "A modern Quiz App built using Ktor, Hilt, and Clean Architecture to provide a seamless and efficient user experience with real-time questions fetched dynamically using QuizAPI.",
      tech: ["Kotlin", "Ktor", "Hilt", "Jetpack Compose", "MVVM", "QuizAPI"],
      link: "https://github.com/Codexyze/Quiz_App",
    },
    {
      icon: "🎵",
      title: "Audio Cutter App",
      description:
        "An Android app to trim audio files using Jetpack Compose and ExoPlayer. Clean Architecture + MVVM + Hilt make the structure super scalable and modular.",
      tech: ["Jetpack Compose", "Kotlin", "ExoPlayer", "Hilt", "MVVM", "Clean Architecture"],
      link: "https://github.com/Codexyze/Audio_Cutter",
    },
    {
      icon: "🎤",
      title: "Interview Simulator",
      description:
        "A comprehensive interview preparation app with realistic simulation features, built with modern Android architecture and Firebase integration.",
      tech: ["Kotlin", "Ktor", "Firebase", "Hilt", "MVVM", "Clean Architecture", "Auth"],
      link: "https://github.com/Codexyze/Interview-Simulator",
    },
    {
      icon: "🖼️",
      title: "On-Device-Image-Classification",
      description:
        "On-Device Image Classification is a simple Android app built with Kotlin and Jetpack Compose, powered by TensorFlow Lite. It uses an on-device machine learning model to classify images into categories such as Cat, Horse, Truck, and Car.",
      tech: ["Kotlin", "Jetpack Compose", "TensorFlow Lite", "Android", "On-Device ML"],
      link: "https://github.com/Codexyze/OnDevice_Image-Classification",
    },
  ]

  const deployedProjects = [
    {
      icon: "😂",
      title: "Meme App",
      description: "A fun meme browsing app with API integration, efficient image loading, and sharing capabilities.",
      features: [
        "🔗 API Integration: Fetches 50 memes using Ktor from the Meme API",
        "⚡ Efficient Image Loading: Powered by Coil",
        "📤 Meme Sharing: Share memes through native Android share sheet",
        "🔁 Reload Button: Tap to refresh the entire list of memes",
        "🧠 MVVM Architecture: All business logic managed in ViewModel",
        "🧱 Multi-Module Codebase: Clean separation of concerns for scalability",
        "🖥️ Responsive Layout: Optimized for phones, tablets, foldables & split-screen",
      ],
      tech: ["Kotlin", "Ktor", "MVVM", "Coil"],
      playStoreLink: "https://play.google.com/store/apps/details?id=com.nutino.memeapp&pcampaignid=web_share",
      githubLink: "https://github.com/Codexyze/MemeApp",
    },
    {
      icon: "🎵",
      title: "Audio Cutter",
      description: "A professional audio trimming app with precise time controls and clean architecture.",
      features: [
        "🎧 Play any audio file",
        "✂️ Trim audio between start and end time (HH:MM:SS)",
        "💾 Save trimmed audio with custom filename",
        "✅ Real-time UI state (Loading, Success, Error)",
        "🧪 Built using clean architecture & modern Android stack",
      ],
      tech: ["Jetpack Compose", "ExoPlayer", "Clean Architecture", "Hilt"],
      playStoreLink: "https://play.google.com/store/apps/details?id=com.nutrino.audiocutter&pcampaignid=web_share",
      githubLink: "https://github.com/Codexyze/Audio_Cutter",
    },
  ]

  const blogs = [
    {
      icon: "📱",
      title: "Intents in Android for Jetpack Compose Users",
      description: "A comprehensive guide to handling intents in modern Android development with Jetpack Compose.",
      link: "https://medium.com/@akshaysarapure/intents-in-android-for-jetpack-compose-users-dc0391601b9b",
    },
    {
      icon: "🧭",
      title: "Type-Safe Navigation in Jetpack Compose",
      description: "Learn how to implement type-safe navigation patterns in your Jetpack Compose applications.",
      link: "https://medium.com/@akshaysarapure/type-safe-navigation-jetpack-compose-be6eaf3e7160",
    },
    {
      icon: "📍",
      title: "Realtime Location in Android using Jetpack Compose",
      description: "Step-by-step guide to implementing real-time location tracking in modern Android apps.",
      link: "https://medium.com/@akshaysarapure/realtime-location-in-android-using-jetpack-compose-390411e996ea",
    },
    {
      icon: "🏗️",
      title: "MVVM Architecture in Android For Dummies",
      description: "A beginner-friendly explanation of MVVM architecture pattern in Android development.",
      link: "https://medium.com/@akshaysarapure/mvvm-architecture-in-android-for-dummies-926a882e9088",
    },
    {
      icon: "🌿",
      title: "Git Cheat Sheet",
      description: "A beginner-friendly explanation of integrating git in your workflow",
      link: "https://medium.com/@akshaysarapure/git-cheat-sheet-3e00168a320b",
    },
  ]

  const achievements = [
    {
      medal: "🥇",
      title: "1st Place",
      description: "Tech Showcase (SGBIT)",
      link: "https://drive.google.com/file/d/1_7yj3NQVbTK9_lxYZ_urf_rSz7CSPlcD/view?usp=drivesdk",
    },
    {
      medal: "🥈",
      title: "2nd Place",
      description: "IEEE INGENIOUS Project Exhibition",
      link: "https://drive.google.com/file/d/1_6MtM_01QaMZg7mAaP9i-nZkA3KQVKP0/view?usp=drivesdk",
    },
    {
      medal: "🥉",
      title: "3rd Place",
      description: "TCS Git 24-Hour Hackathon",
      link: "https://drive.google.com/file/d/1_CzKPG09lww6cpg27DS_YqXYmy-9Vt0q/view?usp=drivesdk",
    },
    {
      medal: "🏆",
      title: "IEEE Fellowship",
      description: "Intelligent Transportation Systems (ITS) WIE/YP Research Forum - Represented in Paris",
      link: "https://github.com/Codexyze/Intelligent-transportation-system-Website",
    },
    {
      medal: "📄",
      title: "Research Publication",
      description:
        "Under review in cybersecurity journal with 99.8% AUC performance - Co Author: Multi-Modal Deepfake Detection",
      link: "",
    },
  ]

  const skills = {
    "Mobile Development": [
      { name: "Kotlin", link: "https://kotlinlang.org/" },
      { name: "Java", link: "https://www.java.com/" },
      { name: "Jetpack Compose", link: "https://developer.android.com/jetpack/compose" },
      { name: "Android", link: "https://developer.android.com/" },
    ],
    "Backend & Database": [
      { name: "Firebase", link: "https://firebase.google.com/" },
      { name: "Flask", link: "https://flask.palletsprojects.com/" },
      { name: "SQLite", link: "https://www.sqlite.org/" },
      { name: "PostgreSQL", link: "https://www.postgresql.org/" },
      { name: "MySQL", link: "https://www.mysql.com/" },
      { name: "Spring Boot", link: "https://spring.io/projects/spring-boot" },
    ],
    "Programming Languages": [
      { name: "Python", link: "https://www.python.org/" },
      { name: "C++", link: "https://www.w3schools.com/cpp/" },
      { name: "Kotlin", link: "https://kotlinlang.org/" },
      { name: "Java", link: "https://www.java.com/" },
    ],
    "Tools & Technologies": [
      { name: "Git", link: "https://git-scm.com/" },
      { name: "GitHub", link: "https://github.com/" },
      { name: "REST APIs", link: "https://restfulapi.net/" },
      { name: "CI/CD", link: "https://www.redhat.com/en/topics/devops/what-is-ci-cd" },
    ],
    Testing: [
      { name: "JUnit", link: "https://junit.org/junit5/" },
      { name: "Mockito", link: "https://site.mockito.org/" },
      { name: "Espresso", link: "https://developer.android.com/training/testing/espresso" },
      { name: "AndroidX Testing", link: "https://developer.android.com/training/testing" },
    ],
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Akshay Sarapure
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["Home", "Projects", "Deployed Projects", "Blogs", "Achievements", "Skills", "Resume", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase().replace(" ", "-"))}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </button>
                ),
              )}
            </div>

            <div className="flex items-center space-x-4">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {["Home", "Projects", "Deployed Projects", "Blogs", "Achievements", "Skills", "Resume", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase().replace(" ", "-"))}
                    className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </button>
                ),
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with BackgroundPaths */}
      <section id="home" className="relative">
        <div className="absolute inset-0 pt-16">
          <BackgroundPaths />
        </div>
        <div className="relative z-20 pt-16 min-h-screen flex items-center justify-center">
          <div className="text-center px-4 max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Hi 👋, I'm{" "}
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Akshay Sarapure
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-4 font-semibold text-gray-300">
                ⚡ Android Developer | Clean Architect | Kotlin & Jetpack Compose Enthusiast | Open for Freelancing
                Projects
              </p>
              <p className="text-lg md:text-xl mb-8 text-gray-400">
                I build modern Android apps with clean architecture and seamless UX.
              </p>
            </div>
            <button
              className="text-black px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 bg-gradient-to-r from-white to-gray-200 hover:shadow-white/25 hover:from-gray-100 hover:to-white"
              onClick={() => scrollToSection("projects")}
            >
              Explore My Work
            </button>
          </div>
        </div>
      </section>

      {/* Current Work */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What I'm Working On</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="animate-on-scroll p-6 rounded-xl bg-black shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-800 opacity-0 translate-y-12">
              <div className="text-4xl mb-4">🎧</div>
              <h3 className="text-xl font-semibold mb-2">Currently Building</h3>
              <p className="text-gray-400 mb-4">
                <strong>Lhythm</strong> - Offline music player with embedded lyrics, local playlist support, and audio
                enhancements
              </p>
              <a
                href="https://github.com/Codexyze/Lhythm"
                target="_blank"
                className="font-medium text-gray-300 hover:text-white transition-colors duration-200"
                rel="noreferrer"
              >
                View on GitHub
              </a>
            </div>
            <div className="animate-on-scroll p-6 rounded-xl bg-black shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-800 opacity-0 translate-y-12">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold mb-2">Learning Focus</h3>
              <p className="text-gray-400">Kotlin Multiplatform (KMP), Clean Architecture, Modular App Design</p>
            </div>
            <div className="animate-on-scroll p-6 rounded-xl bg-black shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-800 opacity-0 translate-y-12">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-semibold mb-2">Practice Hub</h3>
              <p className="text-gray-400 mb-4">
                Continuous learning through hands-on coding challenges and experiments
              </p>
              <a
                href="https://github.com/Codexyze/practice_Set_Code"
                target="_blank"
                className="font-medium text-gray-300 hover:text-white transition-colors duration-200"
                rel="noreferrer"
              >
                View Repository
              </a>
            </div>
            <div className="animate-on-scroll p-6 rounded-xl bg-black shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-800 opacity-0 translate-y-12">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-2">Freelancing Collaboration</h3>
              <p className="text-gray-400 mb-4">
                Available for freelance Android development projects and technical collaborations
              </p>
              <a
                href="mailto:nutrinonovarage@gmail.com"
                className="inline-flex items-center gap-2 text-black px-4 py-2 rounded-lg transition-all duration-200 text-sm font-medium transform hover:scale-105 bg-gradient-to-r from-white to-gray-200 hover:from-gray-100 hover:to-white"
              >
                <Mail className="w-4 h-4" />
                Contact
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="animate-on-scroll p-6 rounded-xl bg-black shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-800 opacity-0 translate-y-12"
              >
                <div className="text-3xl mb-4">{project.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs rounded-full bg-gray-800 text-gray-300 border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-black px-4 py-2 rounded-lg transition-all duration-200 text-sm font-medium transform hover:scale-105 bg-gradient-to-r from-white to-gray-200 hover:from-gray-100 hover:to-white"
                  rel="noreferrer"
                >
                  <Github className="w-4 h-4" />
                  View Project
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Projects Section */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">More Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {moreProjects.map((project, index) => (
              <div
                key={index}
                className="animate-on-scroll p-6 rounded-xl bg-black shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-800 opacity-0 translate-y-12"
              >
                <div className="text-3xl mb-4">{project.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs rounded-full bg-gray-800 text-gray-300 border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-black px-4 py-2 rounded-lg transition-all duration-200 text-sm font-medium transform hover:scale-105 bg-gradient-to-r from-white to-gray-200 hover:from-gray-100 hover:to-white"
                  rel="noreferrer"
                >
                  <Github className="w-4 h-4" />
                  View Project
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deployed Projects Section */}
      <section id="deployed-projects" className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Deployed Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {deployedProjects.map((project, index) => (
              <div
                key={index}
                className="animate-on-scroll p-6 rounded-xl bg-black shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-800 opacity-0 translate-y-12"
              >
                <div className="text-3xl mb-4">{project.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-sm">Features:</h4>
                  <ul className="text-xs text-gray-400 space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs rounded-full bg-gray-800 text-gray-300 border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <a
                    href={project.playStoreLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-black px-3 py-2 rounded-lg transition-all duration-200 transform hover:scale-105 bg-gradient-to-r from-white to-gray-200 hover:from-gray-100 hover:to-white"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>
                    Play Store
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 border-2 border-gray-700 text-gray-300 hover:border-gray-500 hover:text-white"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Published Apps - Play Store */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Published Apps</h2>
          <div className="max-w-4xl mx-auto">
            <div className="p-8 rounded-2xl bg-black shadow-xl hover:shadow-2xl transition-all duration-300 text-center border border-gray-800">
              <div className="text-6xl mb-6">📱</div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Live on Google Play Store
                </span>
              </h3>
              <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                Discover my published Android applications available for millions of users worldwide. Each app showcases
                modern Android development practices, clean architecture, and exceptional user experience.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="px-4 py-2 rounded-full bg-gray-800 text-gray-300 font-medium border border-gray-700">
                  ✨ Modern UI/UX
                </div>
                <div className="px-4 py-2 rounded-full bg-gray-800 text-gray-300 font-medium border border-gray-700">
                  🏗️ Clean Architecture
                </div>
                <div className="px-4 py-2 rounded-full bg-gray-800 text-gray-300 font-medium border border-gray-700">
                  🚀 High Performance
                </div>
              </div>
              <a
                href="https://play.google.com/store/apps/dev?id=9069883027072615264"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 text-black px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 bg-gradient-to-r from-white to-gray-200 hover:shadow-white/25 hover:from-gray-100 hover:to-white"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                View My Apps on Play Store
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Articles */}
      <section id="blogs" className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Latest Blog Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {blogs.map((blog, index) => (
              <article
                key={index}
                className="animate-on-scroll p-6 rounded-xl bg-black shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-800 opacity-0 translate-y-12"
              >
                <div className="text-3xl mb-4">{blog.icon}</div>
                <h3 className="text-lg font-semibold mb-3">{blog.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{blog.description}</p>
                <a
                  href={blog.link}
                  target="_blank"
                  className="inline-flex items-center gap-2 font-medium text-sm text-gray-300 hover:text-white transition-colors duration-200"
                  rel="noreferrer"
                >
                  <ExternalLink className="w-4 h-4" />
                  Read Article
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Achievements & Recognition</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="animate-on-scroll p-6 rounded-xl bg-black shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center border border-gray-800 opacity-0 translate-y-12"
              >
                <div className="text-5xl mb-4">{achievement.medal}</div>
                <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                <p className="text-gray-400 mb-4">{achievement.description}</p>
                {achievement.title !== "Research Publication" && (
                  <a
                    href={achievement.link}
                    target="_blank"
                    className="font-medium text-sm text-gray-300 hover:text-white transition-colors duration-200"
                    rel="noreferrer"
                  >
                    {achievement.title === "IEEE Fellowship" ? "View Code" : "View Certificate"}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div key={index} className="p-6 rounded-xl bg-black shadow-lg border border-gray-800">
                <h3 className="text-lg font-semibold mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, skillIndex) => (
                    <a
                      key={skillIndex}
                      href={skill.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-black px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 transform hover:scale-105 bg-gradient-to-r from-white to-gray-200 hover:from-gray-100 hover:to-white"
                    >
                      {skill.name}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Resume</h2>
          <p className="text-lg text-gray-400 mb-8">
            Download my complete resume to learn more about my experience, skills, and achievements.
          </p>
          <div className="max-w-md mx-auto">
            <div className="p-8 rounded-2xl bg-black shadow-xl border border-gray-800">
              <div className="text-6xl mb-6">📄</div>
              <h3 className="text-xl font-semibold mb-4">Professional Resume</h3>
              <p className="text-gray-400 mb-6">
                Complete overview of my technical skills, projects, and professional experience
              </p>
              <a
                href="https://drive.google.com/file/d/12J-hdkjOv9QgcUla4i0jg-43JtrreGv9/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 text-black px-6 py-3 rounded-full text-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 bg-gradient-to-r from-white to-gray-200 hover:from-gray-100 hover:to-white"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Let's Connect</h2>
          <p className="text-lg text-gray-400 mb-12">
            I'm always open to discussing new opportunities, collaborations, or just chatting about Android development!
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <a
              href="mailto:akshaysarapure@gmail.com"
              className="flex items-center justify-center gap-3 p-4 rounded-xl transition-colors duration-200 border-2 border-transparent bg-black hover:bg-gray-800 hover:border-gray-600 border border-gray-800"
            >
              <Mail className="w-5 h-5" />
              <span className="font-medium">Email</span>
            </a>
            <a
              href="https://www.linkedin.com/in/akshay-sarapure-0a1677213/"
              target="_blank"
              className="flex items-center justify-center gap-3 p-4 rounded-xl transition-colors duration-200 border-2 border-transparent bg-black hover:bg-gray-800 hover:border-gray-600 border border-gray-800"
              rel="noreferrer"
            >
              <Linkedin className="w-5 h-5" />
              <span className="font-medium">LinkedIn</span>
            </a>
            <a
              href="https://github.com/Codexyze"
              target="_blank"
              className="flex items-center justify-center gap-3 p-4 rounded-xl transition-colors duration-200 border-2 border-transparent bg-black hover:bg-gray-800 hover:border-gray-600 border border-gray-800"
              rel="noreferrer"
            >
              <Github className="w-5 h-5" />
              <span className="font-medium">GitHub</span>
            </a>
            <a
              href="https://instagram.com/ak__shay_s"
              target="_blank"
              className="flex items-center justify-center gap-3 p-4 rounded-xl transition-colors duration-200 border-2 border-transparent bg-black hover:bg-gray-800 hover:border-gray-600 border border-gray-800"
              rel="noreferrer"
            >
              <Instagram className="w-5 h-5" />
              <span className="font-medium">Instagram</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black text-white text-center border-t border-gray-800"></footer>
    </div>
  )
}
