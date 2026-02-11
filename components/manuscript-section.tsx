"use client"

import { useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

const pages = [
  {
    chapter: "I",
    title: "The Origin",
    body: "A self-founded startup building for the underserved OG gamers who remember when stories lived in imagination. This is the videogame every pen-and-paper player and LARPer has dreamed of since the dawn of computing.",
    footnote: "Est. by veterans who refused to forget.",
  },
  {
    chapter: "II",
    title: "The Vision",
    body: "Skyrim meets VR Chat in Gaussian Splatting. A world of low-myth, candlelight realism inspired by World of Darkness.",
    footnote: "Where every shadow tells a story.",
  },
  {
    chapter: "III",
    title: "The Tech",
    body: "Leveraging photogrammetry, Gaussian splatting, and a social UGC strategy to build AAA-level content with a lean, veteran team.",
    footnote: "Innovation born from experience.",
  },
]

function WaxSeal({ onClick }: { onClick: () => void }) {
  return (
    <motion.button
      onClick={onClick}
      className="group relative mx-auto mt-10 flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#8B4513]/60 bg-[#8B1A1A] transition-colors duration-500 hover:border-[#FFBF00]/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFBF00]/50"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Turn the page"
    >
      {/* Inner seal texture */}
      <div className="absolute inset-1 rounded-full bg-[#6B1010] opacity-80" />
      <div className="absolute inset-2 rounded-full border border-[#8B4513]/30" />

      {/* FP monogram */}
      <span className="relative z-10 font-manuscript text-lg font-semibold text-[#D4A574] transition-colors duration-500 group-hover:text-[#FFBF00]">
        FP
      </span>

      {/* Glow ring on hover */}
      <div
        className="pointer-events-none absolute -inset-2 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          boxShadow: "0 0 30px 8px rgba(255, 191, 0, 0.25), 0 0 60px 16px rgba(255, 191, 0, 0.1)",
        }}
        aria-hidden="true"
      />
    </motion.button>
  )
}

function PageNumber({ current, total }: { current: number; total: number }) {
  return (
    <div className="mt-8 flex items-center justify-center gap-3">
      {Array.from({ length: total }, (_, i) => (
        <div
          key={i}
          className={`h-1.5 w-1.5 rotate-45 transition-all duration-500 ${
            i === current
              ? "scale-125 bg-[#FFBF00]"
              : "bg-[#D4A574]/30"
          }`}
        />
      ))}
    </div>
  )
}

function DecorativeBorder() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 600 800"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {/* Corner flourishes */}
      <path d="M40 40 Q60 20 80 40" stroke="#FFBF0022" strokeWidth="1" fill="none" />
      <path d="M40 40 Q20 60 40 80" stroke="#FFBF0022" strokeWidth="1" fill="none" />
      <path d="M560 40 Q540 20 520 40" stroke="#FFBF0022" strokeWidth="1" fill="none" />
      <path d="M560 40 Q580 60 560 80" stroke="#FFBF0022" strokeWidth="1" fill="none" />
      <path d="M40 760 Q60 780 80 760" stroke="#FFBF0022" strokeWidth="1" fill="none" />
      <path d="M40 760 Q20 740 40 720" stroke="#FFBF0022" strokeWidth="1" fill="none" />
      <path d="M560 760 Q540 780 520 760" stroke="#FFBF0022" strokeWidth="1" fill="none" />
      <path d="M560 760 Q580 740 560 720" stroke="#FFBF0022" strokeWidth="1" fill="none" />

      {/* Edge lines */}
      <rect
        x="30"
        y="30"
        width="540"
        height="740"
        rx="2"
        stroke="#FFBF0010"
        strokeWidth="0.5"
        fill="none"
      />
      <rect
        x="45"
        y="45"
        width="510"
        height="710"
        rx="1"
        stroke="#FFBF0008"
        strokeWidth="0.5"
        fill="none"
      />
    </svg>
  )
}

function SpineStitching() {
  return (
    <div
      className="pointer-events-none absolute left-1/2 top-8 bottom-8 -translate-x-1/2"
      aria-hidden="true"
    >
      {/* Central spine line */}
      <div className="h-full w-px bg-gradient-to-b from-transparent via-[#8B4513]/20 to-transparent" />

      {/* Stitch marks */}
      {Array.from({ length: 8 }, (_, i) => (
        <div
          key={i}
          className="absolute left-1/2 h-3 w-px -translate-x-1/2 bg-[#8B4513]/15"
          style={{ top: `${12 + i * 11}%` }}
        />
      ))}
    </div>
  )
}

export function ManuscriptSection() {
  const [currentPage, setCurrentPage] = useState(0)
  const [direction, setDirection] = useState(1)

  const flipPage = useCallback(
    (newDirection: number) => {
      setDirection(newDirection)
      setCurrentPage((prev) => {
        const next = prev + newDirection
        if (next < 0) return pages.length - 1
        if (next >= pages.length) return 0
        return next
      })
    },
    [],
  )

  const page = pages[currentPage]

  const pageVariants = {
    enter: (dir: number) => ({
      rotateY: dir > 0 ? 90 : -90,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      rotateY: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      rotateY: dir > 0 ? -90 : 90,
      opacity: 0,
      scale: 0.95,
    }),
  }

  return (
    <section className="wood-bg relative overflow-hidden px-4 py-24 md:px-6 md:py-36">
      {/* Ambient table light */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2"
        aria-hidden="true"
      >
        <div className="h-[500px] w-[700px] rounded-full bg-[#FFBF00] opacity-[0.02] blur-[200px]" />
      </div>

      <motion.div
        className="relative mx-auto max-w-3xl text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <p className="mb-3 font-sans text-xs uppercase tracking-[0.3em] text-primary">
          The Codex
        </p>
        <h2 className="mb-16 text-balance font-sans text-3xl font-bold uppercase tracking-[0.15em] text-foreground md:text-4xl">
          Our Story
        </h2>

        {/* The manuscript book */}
        <div className="manuscript-perspective mx-auto max-w-xl">
          {/* Book shadow */}
          <div
            className="absolute -bottom-4 left-8 right-8 h-8 rounded-[50%] bg-black/50 blur-xl"
            aria-hidden="true"
          />

          <div className="relative">
            <SpineStitching />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentPage}
                custom={direction}
                variants={pageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  rotateY: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.5 },
                }}
                style={{ transformStyle: "preserve-3d" }}
                className="parchment-bg relative overflow-hidden rounded-sm border border-[#3d2f1e]/40 px-8 py-12 shadow-[0_10px_60px_-15px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,191,0,0.03)] md:px-14 md:py-16"
              >
                <DecorativeBorder />

                {/* Page content */}
                <div className="relative z-10">
                  {/* Chapter number */}
                  <motion.div
                    className="mb-2 font-manuscript text-sm tracking-[0.3em] text-[#FFBF00]/40"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    {"Chapter"} {page.chapter}
                  </motion.div>

                  {/* Decorative rule */}
                  <motion.div
                    className="mx-auto mb-8 flex items-center justify-center gap-3"
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    aria-hidden="true"
                  >
                    <div className="h-px w-12 bg-[#FFBF00]/20" />
                    <div className="h-1.5 w-1.5 rotate-45 border border-[#FFBF00]/30" />
                    <div className="h-px w-12 bg-[#FFBF00]/20" />
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    className="mb-8 font-manuscript text-3xl font-semibold italic text-[#F5F5DC] md:text-4xl"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.6 }}
                  >
                    {page.title}
                  </motion.h3>

                  {/* Body text */}
                  <motion.p
                    className="drop-cap mx-auto max-w-md font-manuscript text-lg leading-[1.9] text-[#D4C5A9]"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45, duration: 0.6 }}
                  >
                    {page.body}
                  </motion.p>

                  {/* Footnote */}
                  <motion.div
                    className="mt-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    <div className="mx-auto mb-3 h-px w-16 bg-[#FFBF00]/15" />
                    <p className="font-manuscript text-sm italic text-[#FFBF00]/40">
                      {page.footnote}
                    </p>
                  </motion.div>
                </div>

                {/* Aged paper edge effects */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-sm shadow-[inset_0_0_80px_rgba(0,0,0,0.4)]"
                  aria-hidden="true"
                />
                <div
                  className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-black/20 to-transparent"
                  aria-hidden="true"
                />
                <div
                  className="pointer-events-none absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-black/10 to-transparent"
                  aria-hidden="true"
                />
              </motion.div>
            </AnimatePresence>

            {/* Navigation arrows */}
            <div className="mt-6 flex items-center justify-between px-4">
              <button
                onClick={() => flipPage(-1)}
                className="group flex items-center gap-2 font-manuscript text-sm text-[#D4A574]/50 transition-colors duration-300 hover:text-[#FFBF00] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFBF00]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-label="Previous page"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="transition-transform duration-300 group-hover:-translate-x-1"
                  aria-hidden="true"
                >
                  <path
                    d="M10 3L5 8L10 13"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="hidden sm:inline">Previous</span>
              </button>

              <PageNumber current={currentPage} total={pages.length} />

              <button
                onClick={() => flipPage(1)}
                className="group flex items-center gap-2 font-manuscript text-sm text-[#D4A574]/50 transition-colors duration-300 hover:text-[#FFBF00] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFBF00]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-label="Next page"
              >
                <span className="hidden sm:inline">Next</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  <path
                    d="M6 3L11 8L6 13"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            {/* Wax seal to flip forward */}
            <WaxSeal onClick={() => flipPage(1)} />

            <p className="mt-3 font-manuscript text-xs italic text-[#D4A574]/30">
              {"Break the seal to turn the page"}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
