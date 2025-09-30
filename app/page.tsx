"use client"

import { RiverCards } from "@/components/river-cards"
import { Navigation } from "@/components/navigation"
import { TeamCircles } from "@/components/team-circles"
import { RoleCards } from "@/components/role-cards"
import { useEffect, useState } from "react"

export default function Home() {
  const [showBackground, setShowBackground] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.6
      if (window.scrollY > heroHeight * 0.5) {
        setShowBackground(true)
      } else {
        setShowBackground(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen">
      {/* Navigation Component */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/serene-river-at-golden-hour-wide-view.jpg"
            alt="Beautiful river"
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-background/95" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 text-balance mt-20">
            Breathing Rivers
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed text-pretty">
            An awareness journey through the world's greatest rivers, discovering stories of life, civilization, and
            nature
          </p>
          <div className="mt-8">
            <div className="inline-block animate-bounce">
              <svg
                className="w-6 h-6 text-primary-foreground"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <div className="relative">
        {/* Fixed Background Image with Animation */}
        <div
          className={`fixed inset-0 z-0 top-[60vh] transition-all duration-1000 ease-out ${
            showBackground ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <img
            src="/river-landscape-background.jpg"
            alt="River landscape background"
            className="w-full h-full object-cover"
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-background/40" />
        </div>

        {/* Content sections with relative positioning */}
        <div className="relative z-10">
          {/* River Cards Section */}
          <section className="py-20 px-4 backdrop-blur-sm bg-background/60">
            <div className="container mx-auto">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
                Discover the Rivers
              </h2>
              <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
                Three great rivers that shaped civilizations and cultures across continents
              </p>
              <RiverCards />
            </div>
          </section>

          {/* Overview Section */}
          <section id="overview" className="py-20 px-4 backdrop-blur-sm bg-muted/50 scroll-mt-24">
            <div className="container mx-auto max-w-4xl">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-8 text-foreground">Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-center">
                Welcome to Breathing Rivers, an immersive journey through the world's most magnificent waterways. Our
                platform brings together stories, facts, and experiences that showcase how rivers have shaped
                civilizations, cultures, and ecosystems throughout history. Explore the vital role these natural wonders
                play in our world today.
              </p>
            </div>
          </section>

          {/* Choose Your Role Section */}
          <section id="choose-role" className="py-20 px-4 backdrop-blur-sm bg-background/60 scroll-mt-24">
            <div className="container mx-auto max-w-6xl">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
                Choose Your Role
              </h2>
              <RoleCards />
            </div>
          </section>

          {/* About Us Section */}
          <section id="about" className="py-20 px-4 backdrop-blur-sm bg-muted/50 scroll-mt-24">
            <div className="container mx-auto max-w-4xl">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-8 text-foreground">About Us</h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-center mb-6">
                Breathing Rivers is dedicated to raising awareness about the world's most important waterways. Our
                mission is to educate, inspire, and mobilize people to appreciate and protect these vital natural
                resources.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed text-center">
                Through compelling storytelling, stunning visuals, and interactive experiences, we bring the majesty of
                rivers to life and highlight their crucial role in sustaining life on Earth.
              </p>

              <div className="mt-16">
                <h3 className="font-serif text-4xl md:text-5xl font-bold text-center mb-8 text-foreground">
                  EarthLens Team
                </h3>
                <TeamCircles />
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
