"use client"

import { motion } from "framer-motion"
import type { Language } from "@/lib/language"

export function HookSection({ language }: { language: Language }) {
  const quote =
    language === "fr"
      ? "Vous ne jouez pas une histoire... vous la vivez"
      : "You don't play a story... you live in one"

  return (
    <section className="relative flex items-center justify-center px-6 py-32 md:py-48">
      {/* Subtle amber line accent */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      >
        <div className="h-[300px] w-[300px] rounded-full bg-[#FFBF00] opacity-[0.03] blur-[100px]" />
      </div>

      <motion.div
        className="relative max-w-4xl text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="mx-auto mb-8 flex items-center justify-center gap-4" aria-hidden="true">
          <div className="h-px w-12 bg-primary/40" />
          <div className="h-1.5 w-1.5 rotate-45 bg-primary/60" />
          <div className="h-px w-12 bg-primary/40" />
        </div>

        <blockquote className="font-serif text-3xl italic leading-relaxed text-foreground md:text-5xl lg:text-6xl">
          <span className="text-primary">{'"'}</span>
          {quote}
          <span className="text-primary">{'"'}</span>
        </blockquote>

        <div className="mx-auto mt-8 flex items-center justify-center gap-4" aria-hidden="true">
          <div className="h-px w-12 bg-primary/40" />
          <div className="h-1.5 w-1.5 rotate-45 bg-primary/60" />
          <div className="h-px w-12 bg-primary/40" />
        </div>
      </motion.div>
    </section>
  )
}
