"use client"

import { Card } from "@/components/ui/card"
import Image from "next/image"

export function RoleCards() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {/* Adults Card */}
      <Card className="relative overflow-hidden bg-card/40 backdrop-blur-md border-border/50 hover:border-primary/50 transition-all duration-1000 hover:scale-110 hover:shadow-2xl group cursor-pointer">
        <div className="p-6">
          <h3 className="font-serif text-2xl font-bold mb-3 text-foreground">Adults</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Simulation of your daily activities and their impact on river ecosystems.
          </p>

          {/* Code Preview Section */}
          <div className="relative bg-muted/30 rounded-lg p-4 font-mono text-xs overflow-hidden border border-border/30">
            <div className="absolute top-2 right-2 flex gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
            </div>
            <pre className="text-muted-foreground/70">
              <code>{`const impact = {
  waterUsage: "150L/day",
  activities: [
    "shower", "dishes",
    "laundry", "garden"
  ],
  riverHealth: 85
}`}</code>
            </pre>
          </div>

          <button className="mt-6 w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors">
            Start Simulation
          </button>
        </div>
      </Card>

      {/* Students Card */}
      <Card className="relative overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-1000 hover:scale-110 hover:shadow-2xl group h-full cursor-pointer">
        {/* Background Image */}
        <Image
          src="/student-learning-math-chalkboard.jpg"
          alt="Student learning with mathematical formulas on chalkboard"
          fill
          className="object-cover"
        />

        {/* Transparent Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background/80 backdrop-blur-[2px]" />

        {/* Content */}
        <div className="relative z-10 p-6 h-full flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-serif text-2xl font-bold text-foreground">Students</h3>
              <div className="w-8 h-8 rounded-lg bg-primary/80 backdrop-blur-sm flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
            </div>
            <p className="text-foreground/90 leading-relaxed font-medium">
              Interactive quiz to test your knowledge about river conservation.
            </p>
          </div>

          <button className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shadow-lg">
            Take Quiz
          </button>
        </div>
      </Card>

      {/* Farmers Card */}
      <Card className="relative overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-1000 hover:scale-110 hover:shadow-2xl group h-full cursor-pointer">
        {/* Background Image */}
        <Image
          src="/farmer-tractor-irrigation-field.jpg"
          alt="Farmer using tractor with irrigation system in green field"
          fill
          className="object-cover"
        />

        {/* Transparent Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background/80 backdrop-blur-[2px]" />

        {/* Content */}
        <div className="relative z-10 p-6 h-full flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-serif text-2xl font-bold text-foreground">Farmers</h3>
              <div className="w-8 h-8 rounded-lg bg-primary/80 backdrop-blur-sm flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                </svg>
              </div>
            </div>
            <p className="text-foreground/90 leading-relaxed font-medium">
              Expert advice and techniques for sustainable water management.
            </p>
          </div>

          <button className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shadow-lg">
            Get Advice
          </button>
        </div>
      </Card>
    </div>
  )
}
