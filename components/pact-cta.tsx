"use client"

import React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { withBasePath } from "@/lib/base-path"

export function PactCta() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim() || isSubmitting) return

    setIsSubmitting(true)

    // TODO: Connect to your newsletter provider here (e.g. /api/subscribe)
    // await fetch('/api/subscribe', { method: 'POST', body: JSON.stringify({ email }) })
    
    // Simulate network delay for better UX
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setSubmitted(true)
    setIsSubmitting(false)
  }

  return (
    <section className="relative overflow-hidden px-6 py-24 md:py-36">
      {/* Background image */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Image
          src={withBasePath("/assets/bg-contact.png")}
          alt=""
          fill
          className="object-cover opacity-[0.06]"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      </div>

      {/* Divider */}
      <div className="mx-auto mb-16 max-w-6xl">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      >
        <div className="h-[400px] w-[400px] rounded-full bg-[#FFBF00] opacity-[0.03] blur-[150px]" />
      </div>

      <motion.div
        className="relative mx-auto max-w-2xl text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Decorative seal */}
        <motion.div
          className="mx-auto mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
            src={withBasePath("/assets/fplogo_black.png")}
            alt=""
            width={64}
            height={64}
            className="mx-auto opacity-40"
            aria-hidden="true"
          />
        </motion.div>

        <h2 className="mb-4 font-sans text-3xl font-bold uppercase tracking-[0.2em] text-foreground md:text-4xl lg:text-5xl">
          Sign the Pact
        </h2>

        <p className="mx-auto mb-10 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
          Join the first wave of drifters, merchants, and wardens. Be there when the world wakes up.
        </p>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-md"
          >
            <div className="flex items-center justify-center gap-3 rounded-sm border border-primary/30 bg-primary/[0.05] px-6 py-4">
              <div className="h-2 w-2 rotate-45 bg-primary" />
              <p className="font-sans text-sm uppercase tracking-[0.15em] text-foreground">
                Your mark has been made
              </p>
            </div>
            <p className="mt-4 font-serif text-sm italic text-muted-foreground">
              The world stirs. You will be among the first to know.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="mx-auto max-w-md">
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.name@realm.com"
                  required
                  className="w-full rounded-sm border border-border bg-secondary/50 px-4 py-3 font-manuscript text-sm text-foreground placeholder:text-muted-foreground/50 transition-all duration-300 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
                  aria-label="Email address"
                />
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="group relative rounded-sm border border-primary/60 bg-primary/10 px-6 py-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-primary transition-all duration-300 hover:bg-primary/20 hover:border-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">{isSubmitting ? "Signing..." : "Make Your Mark"}</span>
                {/* Button glow on hover */}
                <div
                  className="pointer-events-none absolute -inset-1 rounded-sm opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    boxShadow: "0 0 20px 4px rgba(255, 191, 0, 0.1)",
                  }}
                  aria-hidden="true"
                />
              </motion.button>
            </div>

            <p className="mt-4 font-serif text-xs italic text-muted-foreground/60">
              No spam, no dark magic. Only dispatches from the frontier.
            </p>
          </form>
        )}
      </motion.div>
    </section>
  )
}
