"use client";

import { motion, useReducedMotion } from "motion/react";

const STEPS = [
  {
    number: "01",
    title: "Verstehen",
    text: "Du zeigst mir, wo dein Unternehmen heute steht.",
  },
  {
    number: "02",
    title: "Verändern",
    text: "Wir identifizieren deine größten Hebel und setzen die richtigen Maßnahmen um.",
  },
  {
    number: "03",
    title: "Wachsen",
    text: "Wir entwickeln dein Unternehmen Schritt für Schritt weiter.",
  },
] as const;

export default function Ablauf() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section
      id="ablauf"
      className="relative w-full bg-[var(--surface-soft)] px-5 py-16 text-[var(--ink)] md:px-8 md:py-24 lg:px-12 lg:py-28"
      aria-labelledby="ablauf-heading"
    >
      <div className="mx-auto max-w-[1400px]">
        <p className="mb-4 font-grotesk text-[0.75rem] tracking-[0.2em] text-[var(--ink)]/40">
          ( 06 )
        </p>
        <h2
          id="ablauf-heading"
          className="max-w-[18ch] font-grotesk text-[clamp(2rem,5vw,4rem)] font-semibold leading-[1.05] tracking-[-0.03em]"
        >
          So einfach starten wir
        </h2>

        <ol className="mt-12 grid gap-10 md:mt-16 md:grid-cols-3 md:gap-8">
          {STEPS.map((step, i) => (
            <motion.li
              key={step.number}
              className="border-t border-[var(--ink)]/15 pt-6"
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.65,
                delay: reduceMotion ? 0 : i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <p className="font-grotesk text-[0.8rem] tracking-[0.18em] text-[var(--ink)]/40">
                {step.number}
              </p>
              <h3 className="mt-4 font-serif text-[clamp(1.75rem,3vw,2.5rem)] leading-none">
                {step.title}
              </h3>
              <p className="mt-4 max-w-[32ch] font-grotesk text-[1.05rem] leading-relaxed text-[var(--ink)]/65">
                {step.text}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
