"use client"

import { useState } from "react"
import { HeroSection } from "@/components/hero-section"
import { EngineSection } from "@/components/engine-section"
import { HookSection } from "@/components/hook-section"
import { ManuscriptSection } from "@/components/manuscript-section"
import { ManifestoSection } from "@/components/manifesto-section"
import { VisionGrid } from "@/components/vision-grid"
import { TechSection } from "@/components/tech-section"
import { RoadmapSection } from "@/components/roadmap-section"
import { JoinUsSection } from "@/components/join-us-section"
import { SiteFooter } from "@/components/site-footer"
import type { Language } from "@/lib/language"

export default function Page() {
  const [language, setLanguage] = useState<Language>("en")

  return (
    <main className="grain-overlay relative min-h-screen">
      <div className="fixed right-4 top-4 z-40 rounded-sm border border-primary/50 bg-background/90 p-1 backdrop-blur md:right-6 md:top-6">
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setLanguage("en")}
            aria-pressed={language === "en"}
            className={`rounded-sm px-3 py-1.5 font-sans text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors ${
              language === "en"
                ? "bg-primary/20 text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            EN
          </button>
          <button
            type="button"
            onClick={() => setLanguage("fr")}
            aria-pressed={language === "fr"}
            className={`rounded-sm px-3 py-1.5 font-sans text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors ${
              language === "fr"
                ? "bg-primary/20 text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            FR
          </button>
        </div>
      </div>

      <HeroSection language={language} />
      <EngineSection language={language} />
      <HookSection language={language} />
      <ManuscriptSection language={language} />
      <ManifestoSection language={language} />
      <VisionGrid language={language} />
      <TechSection language={language} />
      <RoadmapSection language={language} />
      <JoinUsSection language={language} />
      <SiteFooter />
    </main>
  )
}
