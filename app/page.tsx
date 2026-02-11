import { HeroSection } from "@/components/hero-section"
import { EngineSection } from "@/components/engine-section"
import { HookSection } from "@/components/hook-section"
import { ManuscriptSection } from "@/components/manuscript-section"
import { ManifestoSection } from "@/components/manifesto-section"
import { VisionGrid } from "@/components/vision-grid"
import { TechSection } from "@/components/tech-section"
import { RoadmapSection } from "@/components/roadmap-section"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="grain-overlay relative min-h-screen">
      <HeroSection />
      <EngineSection />
      <HookSection />
      <ManuscriptSection />
      <ManifestoSection />
      <VisionGrid />
      <TechSection />
      <RoadmapSection />
      <SiteFooter />
    </main>
  )
}
