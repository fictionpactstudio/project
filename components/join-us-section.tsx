"use client"

import { motion } from "framer-motion"
import type { Language } from "@/lib/language"

type BilingualText = {
  en: string
  fr: string
}

type RoleCopy = {
  key: string
  title: BilingualText
  note?: BilingualText
  will: {
    en: string[]
    fr: string[]
  }
  have: {
    en: string[]
    fr: string[]
  }
  plus?: BilingualText
}

const applyLink = "https://www.linkedin.com/jobs/view/4380020103"

const mandatoryRequirements = {
  en: [
    "Canada only (must live in Canada)",
    "Remote (Canada based)",
    "Unreal Engine production experience (UE4 or UE5)",
    "Not entry level",
    "Full time contract, 4 months (40h/week)",
    "Starts only if Canada Media Fund funding is approved.",
  ],
  fr: [
    "Canada seulement (doit resider au Canada)",
    "Teletravail (base au Canada)",
    "Experience de production Unreal Engine (UE4 ou UE5)",
    "Pas un poste junior",
    "Contrat temps plein, 4 mois (40h/semaine)",
    "Debut uniquement si le financement du Fonds des medias du Canada est approuve.",
  ],
}

const roles: RoleCopy[] = [
  {
    key: "networking",
    title: {
      en: "Unreal Engine C++ Networking Engineer (Multiplayer)",
      fr: "Ingenieur Reseau Unreal Engine C++ (Multijoueur)",
    },
    will: {
      en: [
        "Build and ship the multiplayer foundation in Unreal C++.",
        "Implement replication patterns and server authority for combat and roleplay systems.",
        "Budget and optimize network performance (bandwidth, relevancy, replication strategy).",
        "Develop practical debugging workflows for desync, latency, and replication edge cases.",
      ],
      fr: [
        "Mettre en place et livrer les fondations multijoueurs en C++ Unreal.",
        "Implementer les patterns de replication et l autorite serveur pour les systemes de combat et roleplay.",
        "Budgeter et optimiser le reseau (bande passante, pertinence, strategie de replication).",
        "Creer des methodes de debug concretes pour desync, latence, et cas limites de replication.",
      ],
    },
    have: {
      en: [
        "Strong Unreal Engine C++ multiplayer experience.",
        "Experience shipping authoritative multiplayer features.",
        "Solid debugging and net profiling habits.",
      ],
      fr: [
        "Solide experience Unreal Engine C++ multijoueur.",
        "Experience concrete sur des fonctionnalites multijoueurs avec autorite serveur.",
        "Bonnes habitudes de debug et de net profiling.",
      ],
    },
    plus: {
      en: "Nice to have: dedicated server experience, Iris or Replication Graph experience.",
      fr: "Atouts: experience serveurs dedies, Iris ou Replication Graph.",
    },
  },
  {
    key: "rendering",
    title: {
      en: "Unreal Rendering Engineer (VR, Gaussian Splatting, MLSLabs pipeline)",
      fr: "Ingenieur Rendu Unreal (VR, Gaussian Splatting, pipeline MLSLabs)",
    },
    note: {
      en: "This role is critical. We are building a custom Gaussian Splatting pipeline based on MLSLabs.",
      fr: "Poste critique. Nous construisons un pipeline Gaussian Splatting sur mesure base sur MLSLabs.",
    },
    will: {
      en: [
        "Own VR rendering performance end to end (frame pacing, CPU, GPU, memory budgets).",
        "Make photogrammetry-heavy scenes run smoothly in VR (streaming, LOD, occlusion, lighting approach, content constraints).",
        "Integrate and optimize a Gaussian Splatting rendering and content pipeline for real-time Unreal.",
        "Build a reliable pipeline loop so content iteration stays fast and stable.",
      ],
      fr: [
        "Piloter la performance rendu VR de bout en bout (frame pacing, CPU, GPU, memoire).",
        "Rendre fluides en VR des scenes lourdes en photogrammetrie (streaming, LOD, occlusion, eclairage, contraintes contenu).",
        "Integrer et optimiser un pipeline Gaussian Splatting pour un usage temps reel dans Unreal.",
        "Mettre en place une boucle pipeline fiable pour garder une iteration rapide et stable.",
      ],
    },
    have: {
      en: [
        "Proven Unreal rendering and VR performance optimization experience.",
        "Strong profiling workflows (Unreal Insights, stat tooling, GPU capture and analysis).",
        "Delivered real-time performance improvements under tight frame budgets.",
      ],
      fr: [
        "Experience demontree en rendu Unreal et optimisation performance VR.",
        "Bonnes pratiques de profiling (Unreal Insights, stats, capture GPU et analyse).",
        "Capacite a livrer des gains de performance temps reel sous fortes contraintes.",
      ],
    },
    plus: {
      en: "Big plus: hands-on Gaussian Splatting pipeline experience and research-to-production work.",
      fr: "Gros plus: experience pratique Gaussian Splatting et passage recherche vers production.",
    },
  },
  {
    key: "character",
    title: {
      en: "Character Animator and Character Artist",
      fr: "Animateur et Artiste Personnage",
    },
    will: {
      en: [
        "Create and polish character animations for combat and roleplay (locomotion, attacks, blocks, reactions, idles).",
        "Rig and skin unconventional meshes from a photogrammetry-based model pipeline.",
        "Build and maintain clean rigs for gameplay constraints with deformation fixes and fast iteration.",
        "Set up Unreal animation systems (anim blueprints, state machines, blendspaces, retargeting).",
      ],
      fr: [
        "Creer et polir les animations personnage pour combat et roleplay (locomotion, attaques, parades, reactions, idles).",
        "Faire le rigging et skinning de maillages atypiques issus d un pipeline photogrammetrie.",
        "Construire et maintenir des rigs propres pour les contraintes gameplay avec corrections de deformation rapides.",
        "Mettre en place les systemes animation Unreal (anim blueprints, machines a etats, blendspaces, retargeting).",
      ],
    },
    have: {
      en: [
        "Strong animation fundamentals and a reel with realistic movement.",
        "Proven rigging and skinning experience, including non-standard topology.",
        "Comfort troubleshooting deformation, weighting, and pipeline constraints.",
        "Experience in Unreal character animation workflows.",
      ],
      fr: [
        "Excellentes bases en animation avec demo de mouvements realistes.",
        "Experience solide en rigging et skinning, y compris topologies non standard.",
        "Aisance a corriger deformations, weights, et contraintes pipeline.",
        "Experience des workflows animation personnage dans Unreal.",
      ],
    },
    plus: {
      en: "Big plus: character modeling cleanup and real-time optimization (topology fixes, LODs, skinning, textures).",
      fr: "Gros plus: modelisation personnage, nettoyage et optimisation temps reel (topologie, LODs, skinning, textures).",
    },
  },
]

export function JoinUsSection({ language }: { language: Language }) {
  const isFr = language === "fr"
  const copy = isFr
    ? {
        kicker: "Nous Rejoindre",
        title: "Offres De Contrat (Canada seulement)",
        summary:
          "Projet VR-first et PC en vue premiere personne multijoueur medieval. Contrat sous-traitance. NDA requis.",
        detail:
          "Duree: 4 mois a temps plein (40h/semaine). Teletravail, Canada seulement. Debut conditionnel a l approbation du financement FMC.",
        rolesTitle: "Postes (candidature pour un seul poste)",
        mandatoryTitle: "Exigences obligatoires",
        willTitle: "Vous ferez",
        haveTitle: "Vous avez",
        apply: "Postuler sur Linked In",
        cultureTitle: "Culture et inclusivite",
        cultureBody:
          "Les personnes qui font du GN/LARP ou du jeu de role sur table sont tres bienvenues. Les femmes, les personnes de genres divers, et les personnes de communautes sous-representees sont fortement encouragees a postuler.",
      }
    : {
        kicker: "Join Us",
        title: "Contract Openings (Canada only)",
        summary:
          "VR-first and PC first-person multiplayer medieval simulation. Contractor engagement. NDA required.",
        detail:
          "Term: full-time contract, 4 months (40h/week). Remote, Canada only. Start is contingent on Canada Media Fund approval.",
        rolesTitle: "Roles (apply for one)",
        mandatoryTitle: "Mandatory requirements",
        willTitle: "You will",
        haveTitle: "You have",
        apply: "Apply in Linked In",
        cultureTitle: "Culture and inclusivity",
        cultureBody:
          "If you are into LARP or tabletop roleplaying, you are very welcome. Women, gender-diverse people, and people from underrepresented communities are strongly encouraged to apply.",
      }

  return (
    <section id="join-us" className="relative px-6 py-20 md:py-28">
      <div className="mx-auto mb-12 max-w-6xl">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <motion.div
        className="mx-auto max-w-4xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="mb-8 text-center">
          <p className="mb-2 font-sans text-xs uppercase tracking-[0.3em] text-primary">
            {copy.kicker}
          </p>
          <h2 className="text-balance font-sans text-3xl font-bold uppercase tracking-[0.12em] text-foreground md:text-4xl">
            {copy.title}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            {copy.summary}
          </p>
          <p className="mx-auto mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            {copy.detail}
          </p>
        </div>

        <div className="mb-8 rounded-sm border border-primary/30 bg-primary/[0.04] px-4 py-5 text-center">
          <p className="mb-2 text-xs uppercase tracking-[0.1em] text-primary">
            {copy.cultureTitle}
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">{copy.cultureBody}</p>
        </div>

        <p className="mb-4 font-sans text-xs uppercase tracking-[0.18em] text-primary">
          {copy.rolesTitle}
        </p>

        <div className="space-y-3">
          {roles.map((role, index) => (
            <details
              key={role.key}
              className="rounded-sm border border-border bg-card/60 px-4 py-3"
            >
              <summary className="cursor-pointer font-sans text-sm font-semibold uppercase tracking-[0.08em] text-foreground">
                {index + 1}. {isFr ? role.title.fr : role.title.en}
              </summary>

              <div className="mt-3 border-t border-border/60 pt-3">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                  {copy.mandatoryTitle}
                </p>
                <ul className="list-disc space-y-1 pl-4 text-sm leading-relaxed text-muted-foreground">
                  {(isFr
                    ? mandatoryRequirements.fr
                    : mandatoryRequirements.en
                  ).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                {role.note ? (
                  <p className="mt-4 text-sm italic leading-relaxed text-primary/80">
                    {isFr ? role.note.fr : role.note.en}
                  </p>
                ) : null}

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.08em] text-foreground">
                      {copy.willTitle}
                    </p>
                    <ul className="list-disc space-y-1 pl-4 text-sm leading-relaxed text-muted-foreground">
                      {(isFr ? role.will.fr : role.will.en).map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.08em] text-foreground">
                      {copy.haveTitle}
                    </p>
                    <ul className="list-disc space-y-1 pl-4 text-sm leading-relaxed text-muted-foreground">
                      {(isFr ? role.have.fr : role.have.en).map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {role.plus ? (
                  <p className="mt-3 text-sm italic leading-relaxed text-primary/80">
                    {isFr ? role.plus.fr : role.plus.en}
                  </p>
                ) : null}

                <a
                  href={applyLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center justify-center rounded-sm border border-primary/60 bg-primary/10 px-5 py-2 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-primary transition-colors duration-300 hover:border-primary hover:bg-primary/20"
                >
                  {copy.apply}
                </a>
              </div>
            </details>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
