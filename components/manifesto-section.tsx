"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { withBasePath } from "@/lib/base-path"
import type { Language } from "@/lib/language"

const pillars = [
  {
    key: "noHud",
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Skull icon */}
        <circle cx="18" cy="14" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="14" cy="13" r="2" stroke="currentColor" strokeWidth="1" fill="none" />
        <circle cx="22" cy="13" r="2" stroke="currentColor" strokeWidth="1" fill="none" />
        <path d="M15 19h6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        <path d="M16 19v3M18 19v3M20 19v3" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" />
        <path d="M12 24v4a2 2 0 002 2h8a2 2 0 002-2v-4" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" />
      </svg>
    ),
    title: "No HUD. No XP. No Grind.",
    body: "Forget the dopamine loops. Progress comes from deeds, relationships, and reputation. Your journal is your only record.",
    image: "/assets/group.png",
    imageAlt: "A dark, ruined archway in a mountainous landscape",
  },
  {
    key: "systems",
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Hand icon */}
        <path d="M18 4v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 7v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M22 7v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10 12v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10 18c0 0-1 2-1 5a9 9 0 0018 0c0-3-1-5-1-5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M14 15h8" stroke="currentColor" strokeWidth="1" opacity="0.4" strokeLinecap="round" />
      </svg>
    ),
    title: "Systems Over Scripts.",
    body: 'No quest markers. No "set pieces." A world with its own rules where you settle disputes, craft economies, and hunt quiet horrors.',
    image: "/assets/alchemy.png",
    imageAlt: "A blacksmith hammering at an anvil by firelight",
  },
  {
    key: "immersion",
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Quill icon */}
        <path d="M26 4c-6 2-10 8-12 14l-2 8 8-2c6-2 8-6 10-12" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 26l-2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 18l4 4" stroke="currentColor" strokeWidth="1" opacity="0.4" strokeLinecap="round" />
        <circle cx="11" cy="32" r="1" fill="currentColor" opacity="0.5" />
      </svg>
    ),
    title: "True Immersion.",
    body: "Skyrim meets VRChat through Gaussian splatting: a photoreal world shaped by neural rendering and photogrammetry. If you can see it, it exists.",
    image: "/assets/camp.png",
    imageAlt: "A werewolf silhouette stalking through a dark forest",
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

const frenchPillarCopy: Record<string, { title: string; body: string }> = {
  noHud: {
    title: "Pas de HUD. Pas de XP. Pas de Grind.",
    body: "Oubliez les boucles dopamine. La progression vient des actions, des relations et de la reputation. Votre journal est votre seul registre.",
  },
  systems: {
    title: "Systemes avant scripts.",
    body: "Pas de marqueurs de quete. Pas de set pieces. Un monde avec ses propres regles ou vous reglez les conflits, construisez des economies et chassez des horreurs discretes.",
  },
  immersion: {
    title: "Immersion totale.",
    body: "Skyrim rencontre VRChat via le Gaussian Splatting: un monde photorealiste faconne par le rendu neural et la photogrammetrie. Si vous le voyez, il existe.",
  },
}

export function ManifestoSection({ language }: { language: Language }) {
  const copy =
    language === "fr"
      ? {
          kicker: "Le Manifeste",
          title: "Le Retour Des Anciennes Voies",
        }
      : {
          kicker: "The Manifesto",
          title: "The Old Ways Return",
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

        <motion.div
          className="grid gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {pillars.map((pillar) => {
            const translated = language === "fr" ? frenchPillarCopy[pillar.key] : null
            const title = translated?.title ?? pillar.title
            const body = translated?.body ?? pillar.body

            return (
            <motion.article
              key={pillar.title}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-sm border border-border bg-card"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden md:h-64">
                <Image
                  src={withBasePath(pillar.image || "/placeholder.svg")}
                  alt={pillar.imageAlt}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />

                {/* Icon overlay */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-primary/70 transition-colors duration-300 group-hover:text-primary">
                  {pillar.icon}
                </div>
              </div>

              {/* Content */}
              <div className="relative p-6 pt-4">
                {/* Hover glow overlay */}
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#FFBF00]/[0.02] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden="true"
                />

                <h3 className="mb-3 font-sans text-base font-semibold uppercase tracking-[0.12em] text-foreground">
                  {title}
                </h3>

                <div className="mb-3 h-px w-8 bg-primary/30 transition-all duration-500 group-hover:w-12 group-hover:bg-primary/60" />

                <p className="font-serif text-sm italic leading-relaxed text-muted-foreground">
                  {body}
                </p>
              </div>

              {/* Bottom border glow on hover */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px bg-primary/0 transition-all duration-500 group-hover:bg-primary/40 group-hover:shadow-[0_0_20px_2px_rgba(255,191,0,0.1)]"
                aria-hidden="true"
              />
            </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
