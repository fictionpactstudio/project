"use client"

import { motion } from "framer-motion"

export function EngineSection() {
  return (
    <section className="relative px-6 py-24 md:py-32">
      {/* Subtle ambient light */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      >
        <div className="h-[400px] w-[500px] rounded-full bg-[#FFBF00] opacity-[0.02] blur-[150px]" />
      </div>

      <motion.div
        className="relative mx-auto max-w-3xl text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <p className="mb-3 font-sans text-xs uppercase tracking-[0.3em] text-primary">
          The Definition
        </p>

        <h2 className="mb-10 text-balance font-sans text-3xl font-bold uppercase tracking-[0.15em] text-foreground md:text-4xl">
          The Engine
        </h2>

        <div className="mx-auto flex items-center justify-center gap-4 mb-10" aria-hidden="true">
          <div className="h-px w-16 bg-primary/30" />
          <div className="h-2 w-2 rotate-45 border border-primary/40" />
          <div className="h-px w-16 bg-primary/30" />
        </div>

        <p className="breathing-text mx-auto max-w-2xl font-serif text-xl italic leading-relaxed text-foreground md:text-2xl lg:text-3xl">
          We are building an Atmospheric Roleplaying Living World Engine.
        </p>

        <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
          A VR-first, PC-accessible sandbox where atmosphere comes first, and systems replace scripts.
        </p>

        <div className="mx-auto mt-10 flex items-center justify-center gap-4" aria-hidden="true">
          <div className="h-px w-16 bg-primary/30" />
          <div className="h-2 w-2 rotate-45 border border-primary/40" />
          <div className="h-px w-16 bg-primary/30" />
        </div>
      </motion.div>
    </section>
  )
}
