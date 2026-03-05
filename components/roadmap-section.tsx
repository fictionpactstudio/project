"use client"

import { motion } from "framer-motion"
import type { Language } from "@/lib/language"

const milestones = [
  {
    phase: "I",
    title: "Core Engine",
    description:
      "Foundation systems, rendering pipeline, and core gameplay mechanics.",
  },
  {
    phase: "II",
    title: "Open World",
    description:
      "Expansive terrain, dynamic ecosystems, and environmental storytelling.",
  },
  {
    phase: "III",
    title: "Game Master Tools",
    description:
      "Creator toolkit for narrative design and world-building.",
  },
  {
    phase: "IV",
    title: "World Engine",
    description:
      "Persistent, evolving worlds shaped by player actions and collective memory.",
  },
]

const frenchMilestones: Record<string, { title: string; description: string }> = {
  I: {
    title: "Moteur Coeur",
    description: "Fondations systemes, pipeline rendu et mecaniques gameplay centrales.",
  },
  II: {
    title: "Monde Ouvert",
    description: "Terrain etendu, ecosystemes dynamiques et narration environnementale.",
  },
  III: {
    title: "Outils Game Master",
    description: "Toolkit createur pour design narratif et construction du monde.",
  },
  IV: {
    title: "World Engine",
    description: "Mondes persistants et evolutifs faconnes par les actions des joueurs.",
  },
}

export function RoadmapSection({ language }: { language: Language }) {
  const copy =
    language === "fr"
      ? {
          kicker: "Le Chemin",
          title: "Feuille De Route",
          phase: "Phase",
        }
      : {
          kicker: "The Path",
          title: "Roadmap",
          phase: "Phase",
        }

  return (
    <section className="relative px-6 py-24 md:py-32">
      {/* Divider */}
      <div className="mx-auto mb-16 max-w-6xl">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="mx-auto max-w-3xl">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-3 font-sans text-xs uppercase tracking-[0.3em] text-primary">
            {copy.kicker}
          </p>
          <h2 className="text-balance font-sans text-3xl font-bold uppercase tracking-[0.15em] text-foreground md:text-4xl">
            {copy.title}
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent md:left-1/2 md:-translate-x-px"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-12">
            {milestones.map((milestone, index) => {
              const translated =
                language === "fr" ? frenchMilestones[milestone.phase] : null
              const title = translated?.title ?? milestone.title
              const description = translated?.description ?? milestone.description

              return (
              <motion.div
                key={milestone.phase}
                className="relative flex items-start gap-8 md:gap-0"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
              >
                {/* Node */}
                <div className="relative z-10 flex-shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/40 bg-background">
                    <div className="h-2 w-2 rounded-full bg-primary/80" />
                  </div>
                </div>

                {/* Content - alternating sides on desktop */}
                <div
                  className={`flex-1 md:w-[calc(50%-2rem)] ${
                    index % 2 === 0
                      ? "md:mr-auto md:pr-12 md:text-right"
                      : "md:ml-auto md:pl-12 md:text-left"
                  }`}
                >
                  <p className="mb-1 font-sans text-xs uppercase tracking-[0.2em] text-primary">
                    {copy.phase} {milestone.phase}
                  </p>
                  <h3 className="mb-2 font-sans text-lg font-semibold uppercase tracking-[0.1em] text-foreground">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </div>
              </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
