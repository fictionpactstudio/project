"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { withBasePath } from "@/lib/base-path"
import type { Language } from "@/lib/language"

const visionCards = [
  {
    key: "roleplay",
    title: "Roleplay",
    description: "Your actions define memory and reputation.",
    image: "/assets/4fists.png",
    imageAlt: "Figures gathered around a campfire in darkness",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="20" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path
          d="M8 34c0-6.627 5.373-12 12-12s12 5.373 12 12"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M20 20v6M17 23h6"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    key: "explore",
    title: "Explore",
    description:
      'A grounded, moody sandbox where "What If?" is always the next question.',
    image: "/assets/ruins.png",
    imageAlt: "A dark ruined archway in a mountain valley",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path
          d="M20 6v4M20 30v4M6 20h4M30 20h4"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.4"
          strokeLinecap="round"
        />
        <path
          d="M26 14l-8 4 4 8 8-4z"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeLinejoin="round"
        />
        <circle cx="20" cy="20" r="2" fill="currentColor" opacity="0.6" />
      </svg>
    ),
  },
  {
    key: "craft",
    title: "Craft",
    description: "A player-driven economy of crafts and consequence.",
    image: "/assets/blacksmith.png",
    imageAlt: "Hands pouring herbs into a steaming cauldron",
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M12 28l4-16h8l4 16"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 28h20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M16 12l4-6 4 6"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 20h4M17 24h6"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
}

const frenchVisionCopy: Record<string, { title: string; description: string }> = {
  roleplay: {
    title: "Roleplay",
    description: "Vos actions definissent memoire et reputation.",
  },
  explore: {
    title: "Explorer",
    description: "Un sandbox ancre et sombre ou la question Et si ? guide toujours la suite.",
  },
  craft: {
    title: "Fabriquer",
    description: "Une economie guidee par les joueurs, faite d artisanat et de consequences.",
  },
}

export function VisionGrid({ language }: { language: Language }) {
  const copy =
    language === "fr"
      ? {
          kicker: "La Vision",
          title: "Trois Piliers",
        }
      : {
          kicker: "The Vision",
          title: "Three Pillars",
        }

  return (
    <section className="relative px-6 py-24 md:py-32">
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
          className="grid gap-6 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {visionCards.map((card) => {
            const translated = language === "fr" ? frenchVisionCopy[card.key] : null
            const title = translated?.title ?? card.title
            const description = translated?.description ?? card.description

            return (
            <motion.article
              key={card.title}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-sm border border-border bg-card transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_40px_-12px_rgba(255,191,0,0.15)]"
            >
              {/* Card image */}
              <div className="relative h-52 overflow-hidden md:h-60">
                <Image
                  src={withBasePath(card.image || "/placeholder.svg")}
                  alt={card.imageAlt}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  quality={80}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/70 to-card/20" />
              </div>

              {/* Hover glow overlay */}
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#FFBF00]/[0.02] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden="true"
              />

              <div className="relative p-8 pt-4">
                <div className="mb-6 text-primary/70 transition-colors duration-300 group-hover:text-primary">
                  {card.icon}
                </div>

                <h3 className="mb-3 font-sans text-lg font-semibold uppercase tracking-[0.15em] text-foreground">
                  {title}
                </h3>

                <div className="mb-4 h-px w-8 bg-primary/30 transition-all duration-500 group-hover:w-12 group-hover:bg-primary/60" />

                <p className="font-serif text-sm italic leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </div>
            </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
