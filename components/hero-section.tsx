"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { withBasePath } from "@/lib/base-path"
import type { Language } from "@/lib/language"

export function HeroSection({ language }: { language: Language }) {
  const copy =
    language === "fr"
      ? {
          joinUs: "Nous Rejoindre",
          tagline: "Authenticite, Innovation, Passion",
        }
      : {
          joinUs: "Join Us",
          tagline: "Authenticity, Innovation, Passion",
        }

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute left-1/2 top-6 z-20 -translate-x-1/2 md:top-8">
        <a
          href="#join-us"
          className="inline-flex items-center justify-center rounded-sm border border-primary/60 bg-primary/10 px-5 py-2 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-primary transition-colors duration-300 hover:border-primary hover:bg-primary/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
        >
          {copy.joinUs}
        </a>
      </div>

      {/* Background image */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Image
          src={withBasePath("/assets/bg-hero.png")}
          alt=""
          fill
          className="object-cover opacity-[0.12]"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      </div>

      {/* Flickering ambient glow */}
      <div
        className="flicker-glow pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      >
        <div className="h-[600px] w-[600px] rounded-full bg-[#FFBF00] opacity-[0.07] blur-[180px]" />
      </div>

      {/* Secondary dim glow underneath */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      >
        <div className="h-[400px] w-[400px] rounded-full bg-[#FFBF00] opacity-[0.03] blur-[120px]" />
      </div>

      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          {/* Decorative line */}
          <motion.div
            className="mx-auto mb-8 h-px w-16 bg-primary"
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          />

          <motion.h1
            className="mb-6 text-balance font-sans text-5xl font-bold uppercase tracking-[0.35em] text-foreground md:text-7xl lg:text-8xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            Fiction Pact
            <br />
            <span className="text-3xl tracking-[0.5em] md:text-5xl lg:text-6xl">
              Studio
            </span>
          </motion.h1>

          <motion.p
            className="font-sans text-sm uppercase tracking-[0.4em] text-primary md:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          >
            {copy.tagline}
          </motion.p>

          {/* Decorative line */}
          <motion.div
            className="mx-auto mt-8 h-px w-16 bg-primary"
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ duration: 1.2, delay: 1, ease: "easeOut" }}
          />
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          className="absolute -bottom-32 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.div
            className="h-8 w-px bg-primary/30"
            animate={{ scaleY: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  )
}
