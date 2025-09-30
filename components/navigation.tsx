"use client"

import { useState, useEffect } from "react"

export function Navigation() {
  const [activeSection, setActiveSection] = useState("")
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      // Hide navigation when scrolled past 60vh (hero section height)
      const heroHeight = window.innerHeight * 0.6
      setIsVisible(window.scrollY < heroHeight)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
      setActiveSection(sectionId)
    }
  }

  return (
    <nav
      className={`fixed top-0 right-0 z-50 p-6 transition-all duration-500 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
      }`}
    >
      <div
        className={`flex items-center gap-6 bg-background/80 backdrop-blur-md rounded-full px-6 py-3 shadow-lg border border-border transition-all duration-500 ease-in-out ${
          isVisible ? "scale-100" : "scale-95"
        }`}
      >
        <button
          onClick={() => scrollToSection("overview")}
          className={`text-sm font-medium transition-colors hover:text-primary ${
            activeSection === "overview" ? "text-primary" : "text-foreground"
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => scrollToSection("choose-role")}
          className={`text-sm font-medium transition-colors hover:text-primary ${
            activeSection === "choose-role" ? "text-primary" : "text-foreground"
          }`}
        >
          Choose Your Role
        </button>
        <button
          onClick={() => scrollToSection("about")}
          className={`text-sm font-medium transition-colors hover:text-primary ${
            activeSection === "about" ? "text-primary" : "text-foreground"
          }`}
        >
          About Us
        </button>
      </div>
    </nav>
  )
}
