"use client"

import { motion } from "framer-motion"
import type { Language } from "@/lib/language"

const techItems = [
  {
    title: "Gaussian Splatting",
    description:
      "Real-time neural rendering for photorealistic environments. From point clouds to immersive worlds.",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="24" cy="24" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="1" opacity="0.5" fill="none" strokeDasharray="2 3" />
        <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="0.75" opacity="0.3" fill="none" strokeDasharray="1 4" />
        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="0.5" opacity="0.15" fill="none" strokeDasharray="1 5" />
        <circle cx="24" cy="24" r="1" fill="currentColor" opacity="0.8" />
        <circle cx="18" cy="18" r="0.75" fill="currentColor" opacity="0.3" />
        <circle cx="30" cy="20" r="0.75" fill="currentColor" opacity="0.4" />
        <circle cx="22" cy="30" r="0.75" fill="currentColor" opacity="0.3" />
        <circle cx="32" cy="28" r="0.5" fill="currentColor" opacity="0.2" />
        <circle cx="16" cy="26" r="0.5" fill="currentColor" opacity="0.2" />
      </svg>
    ),
  },
  {
    title: "UGC",
    description:
      "Players and game masters shape factions, artifacts, edicts, rumors, and live events so each server becomes its own living canon, with no quest markers or scripted quest chains.",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Pipeline nodes */}
        <circle cx="10" cy="24" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="24" cy="14" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="24" cy="34" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="38" cy="24" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
        {/* Connections */}
        <path d="M13 22.5L21 15.5" stroke="currentColor" strokeWidth="1" opacity="0.5" strokeLinecap="round" />
        <path d="M13 25.5L21 32.5" stroke="currentColor" strokeWidth="1" opacity="0.5" strokeLinecap="round" />
        <path d="M27 15.5L35 22.5" stroke="currentColor" strokeWidth="1" opacity="0.5" strokeLinecap="round" />
        <path d="M27 32.5L35 25.5" stroke="currentColor" strokeWidth="1" opacity="0.5" strokeLinecap="round" />
        {/* Center dot for convergence */}
        <circle cx="24" cy="24" r="1" fill="currentColor" opacity="0.4" />
        {/* Data flow dots */}
        <circle cx="17" cy="19" r="0.5" fill="currentColor" opacity="0.3" />
        <circle cx="31" cy="19" r="0.5" fill="currentColor" opacity="0.3" />
        <circle cx="17" cy="29" r="0.5" fill="currentColor" opacity="0.3" />
        <circle cx="31" cy="29" r="0.5" fill="currentColor" opacity="0.3" />
      </svg>
    ),
  },
]

const frenchTechCopy: Record<string, { title: string; description: string }> = {
  "Gaussian Splatting": {
    title: "Gaussian Splatting",
    description: "Rendu neural temps reel pour des environnements photorealistes. Des nuages de points vers des mondes immersifs.",
  },
  UGC: {
    title: "UGC",
    description: "Les joueurs et game masters faconnent factions, artefacts, edits, rumeurs et evenements live. Chaque serveur devient son propre canon vivant.",
  },
}

export function TechSection({ language }: { language: Language }) {
  const copy =
    language === "fr"
      ? {
          kicker: "Sous Le Capot",
          title: "Innovations Techniques",
        }
      : {
          kicker: "Under the Hood",
          title: "Technical Innovations",
        }

  return (
    <section className="relative px-6 py-24 md:py-32">
      {/* Divider */}
      <div className="mx-auto mb-16 max-w-6xl">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="mx-auto max-w-6xl">
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

        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {techItems.map((item, index) => {
            const translated = language === "fr" ? frenchTechCopy[item.title] : null
            const title = translated?.title ?? item.title
            const description = translated?.description ?? item.description

            return (
            <motion.div
              key={item.title}
              className="group text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
                ease: "easeOut",
              }}
            >
              <div className="mx-auto mb-6 inline-flex text-primary/60 transition-colors duration-300 group-hover:text-primary">
                {item.icon}
              </div>

              <h3 className="mb-4 font-sans text-lg font-semibold uppercase tracking-[0.15em] text-foreground">
                {title}
              </h3>

              <div className="mx-auto mb-4 h-px w-8 bg-primary/20" />

              <p className="mx-auto max-w-xs text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
