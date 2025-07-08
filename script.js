// Theme Toggle Functionality
const themeToggle = document.getElementById("theme-toggle")
const themeIcon = themeToggle.querySelector(".theme-icon")
const body = document.body

// Import or declare the lucide variable here
const lucide = window.lucide || {} // Assuming lucide is available globally

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem("theme") || "light"
body.setAttribute("data-theme", currentTheme)
updateThemeIcon(currentTheme)

themeToggle.addEventListener("click", () => {
  const currentTheme = body.getAttribute("data-theme")
  const newTheme = currentTheme === "dark" ? "light" : "dark"

  body.setAttribute("data-theme", newTheme)
  localStorage.setItem("theme", newTheme)
  updateThemeIcon(newTheme)
})

function updateThemeIcon(theme) {
  themeIcon.setAttribute("data-lucide", theme === "dark" ? "sun" : "moon")
  lucide.createIcons()
}

// Mobile Navigation Toggle
const hamburger = document.getElementById("hamburger")
const navMenu = document.getElementById("nav-menu")

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active")
  hamburger.classList.toggle("active")
})

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
    hamburger.classList.remove("active")
  })
})

// Smooth Scrolling Function
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
}

// Navbar Background on Scroll
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar")
  if (window.scrollY > 50) {
    navbar.style.background =
      body.getAttribute("data-theme") === "dark" ? "rgba(15, 23, 42, 0.98)" : "rgba(255, 255, 255, 0.98)"
  } else {
    navbar.style.background =
      body.getAttribute("data-theme") === "dark" ? "rgba(15, 23, 42, 0.95)" : "rgba(255, 255, 255, 0.95)"
  }
})

// Active Navigation Link Highlighting
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]")
  const navLinks = document.querySelectorAll(".nav-link")

  let current = ""
  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight
    if (window.scrollY >= sectionTop - 200) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active")
    }
  })
})

// Initialize Lucide Icons
document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons()
})

// Intersection Observer for Animation Triggers
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe all cards for animation
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".project-card, .blog-card, .achievement-card, .work-card, .skill-category")
  cards.forEach((card) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(30px)"
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(card)
  })
})
