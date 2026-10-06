"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

const STATS = [
  { value: "4 Jahre & 8 Monate", label: "Gründung bis Verkauf" },
  { value: "> 1,3 Mio. €", label: "Jahresumsatz aufgebaut" },
  { value: "30", label: "Mitarbeiter" },
] as const;

export default function Story() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section
      id="story"
      className="relative bg-[var(--surface-soft)] px-5 py-20 text-[var(--ink)] md:px-8 md:py-28 lg:px-12 lg:py-32"
      aria-labelledby="story-heading"
    >
      <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-12 lg:gap-16 lg:items-end">
        <div className="lg:col-span-6">
          <p className="mb-4 font-grotesk text-[0.75rem] tracking-[0.2em] text-[var(--ink)]/40">
            ( 03 )
          </p>
          <p className="mb-5 font-serif text-[1.05rem] italic text-[var(--ink)]/55 md:text-[1.15rem]">
            Von der Gründung bis zum Verkauf
          </p>
          <h2
            id="story-heading"
            className="max-w-[18ch] font-grotesk text-[clamp(2rem,5vw,4rem)] font-semibold leading-[1.05] tracking-[-0.03em]"
          >
            ICH KENNE DIESE PROBLEME. WEIL ICH DEN WEG SELBST GEGANGEN BIN.
          </h2>
          <p className="mt-6 max-w-[42ch] font-grotesk text-[1.05rem] leading-relaxed text-[var(--ink)]/70 md:text-[1.15rem]">
            Ich habe selbst eine Gebäudereinigung gegründet, aufgebaut, skaliert
            und verkauft. Heute gebe ich meine Erfahrung an andere Unternehmer
            aus der Gebäudereinigung weiter.
          </p>
          <a
            href="#erstgespraech"
            className="mt-8 inline-flex bg-[var(--ink)] px-6 py-3.5 font-grotesk text-[0.95rem] font-medium text-[var(--paper)] transition-opacity hover:opacity-90"
          >
            Kostenloses Erstgespräch
          </a>
        </div>

        <div className="relative lg:col-span-5 lg:col-start-8">
          <motion.div
            className="relative aspect-[3/4] w-full overflow-hidden"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src="/images/1.jpg"
              alt="Virgil Pietrar"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-top [filter:grayscale(1)]"
            />
          </motion.div>
        </div>
      </div>

      <div className="mx-auto mt-16 grid max-w-[1400px] gap-8 border-t border-[var(--ink)]/15 pt-10 md:mt-20 md:grid-cols-3 md:gap-6 md:pt-12">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.6,
              delay: reduceMotion ? 0 : i * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <p className="font-grotesk text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold tracking-[-0.03em]">
              {stat.value}
            </p>
            <p className="mt-2 font-grotesk text-[0.9rem] text-[var(--ink)]/50">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
