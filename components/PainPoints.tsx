"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { useRef } from "react";

const PAIN_POINTS = [
  "Viel Umsatz. Zu wenig Gewinn?",
  "Ständig Mitarbeiterprobleme?",
  "Objekte zu knapp kalkuliert?",
  "Zu wenig profitable Neukunden?",
  "Ohne dich läuft zu wenig?",
  "Zu viel Chaos im Tagesgeschäft?",
  "Keine klaren Prozesse?",
  "Du bist ständig Feuerwehrmann?",
  "Du willst wachsen, aber weißt nicht, wo du anfangen sollst?",
] as const;

function PainItem({
  text,
  index,
  progress,
  reduceMotion,
}: {
  text: string;
  index: number;
  progress: MotionValue<number>;
  reduceMotion: boolean;
}) {
  const total = PAIN_POINTS.length;
  const start = 0.05 + (index / total) * 0.75;
  const end = start + 0.1;

  const opacity = useTransform(progress, [start, end], [0, 1]);
  const y = useTransform(progress, [start, end], [20, 0]);
  const x = useTransform(progress, [start, end], [16, 0]);

  // Spread staircase across full width (desktop)
  const indent = `${(index / (total - 1)) * 42}vw`;

  const itemClass =
    "ml-0 font-grotesk text-[clamp(1.2rem,2.5vw,1.75rem)] leading-snug tracking-[-0.01em] text-[var(--ink)] md:[margin-left:var(--pain-indent)]";

  if (reduceMotion) {
    return (
      <li
        className={itemClass}
        style={{ ["--pain-indent" as string]: indent }}
      >
        <span className="mr-2.5 text-[var(--ink)]/40" aria-hidden>
          {"{"}
        </span>
        {text}
      </li>
    );
  }

  return (
    <motion.li
      className={itemClass}
      style={{
        ["--pain-indent" as string]: indent,
        opacity,
        y,
        x,
      }}
    >
      <span className="mr-2.5 text-[var(--ink)]/40" aria-hidden>
        {"{"}
      </span>
      {text}
    </motion.li>
  );
}

export default function PainPoints() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion() ?? false;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.9", "end 0.65"],
  });

  const titleOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);
  const titleY = useTransform(scrollYProgress, [0, 0.15], [16, 0]);

  return (
    <section
      ref={sectionRef}
      id="pain"
      className="relative w-full overflow-hidden bg-white px-5 py-14 md:px-8 md:py-16 lg:px-10 lg:py-20"
      aria-labelledby="pain-heading"
    >
      <div className="w-full">
        <motion.div
          className="mb-8 md:mb-10"
          style={
            reduceMotion
              ? { opacity: 1, y: 0 }
              : { opacity: titleOpacity, y: titleY }
          }
        >
          <p className="mb-3 font-grotesk text-[0.75rem] tracking-[0.2em] text-[var(--ink)]/40 md:text-[0.8rem]">
            ( 02 )
          </p>
          <h2
            id="pain-heading"
            className="max-w-[16ch] font-grotesk text-[clamp(2.2rem,5.5vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-[var(--ink)]"
          >
            Kommt dir das bekannt vor?
          </h2>
        </motion.div>

        <ul className="flex w-full flex-col gap-3 md:gap-3.5 lg:gap-4">
          {PAIN_POINTS.map((point, index) => (
            <PainItem
              key={point}
              text={point}
              index={index}
              progress={scrollYProgress}
              reduceMotion={reduceMotion}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
