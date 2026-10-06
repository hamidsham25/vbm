"use client";

import Image from "next/image";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useEffect, useRef, useState } from "react";

const HEADLINE_1_WORDS = ["DU", "FÜHRST", "EINE", "GEBÄUDEREINIGUNG?"];

function MaskedWord({
  word,
  index,
  reduceMotion,
}: {
  word: string;
  index: number;
  reduceMotion: boolean;
}) {
  return (
    <span className="inline-block overflow-hidden align-bottom pb-[0.08em]">
      <motion.span
        className="inline-block"
        initial={reduceMotion ? false : { y: "110%" }}
        animate={{ y: "0%" }}
        transition={{
          duration: 0.85,
          delay: 0.35 + index * 0.1,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {word}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion() ?? false;
  const [menuOpen, setMenuOpen] = useState(false);
  const [showCta, setShowCta] = useState(false);

  useEffect(() => {
    if (reduceMotion) setShowCta(true);
  }, [reduceMotion]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Soft spring so scroll-linked motion feels fluid
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 55,
    damping: 22,
    mass: 0.85,
    restDelta: 0.0005,
  });

  // Phase 2: Headline 1 scrolls up behind the portrait, lightly blurred
  const h1Y = useTransform(smoothProgress, [0, 0.55], ["0vh", "-58vh"]);
  const h1Opacity = useTransform(
    smoothProgress,
    [0, 0.32, 0.55],
    [1, 0.85, 0],
  );
  const h1Blur = useTransform(smoothProgress, [0, 0.18, 0.5], [0, 2, 9]);
  const h1Filter = useTransform(h1Blur, (b) => `blur(${b}px)`);

  // Phase 3: Headline 2 enters in front, rests over the lower portrait
  const h2Y = useTransform(smoothProgress, [0.4, 0.62], [56, 0]);
  const h2Opacity = useTransform(smoothProgress, [0.4, 0.58], [0, 1]);

  const subY = useTransform(smoothProgress, [0.52, 0.72], [20, 0]);
  const subOpacity = useTransform(smoothProgress, [0.52, 0.72], [0, 1]);

  const ctaOpacity = useTransform(smoothProgress, [0.52, 0.7], [0, 1]);

  useMotionValueEvent(smoothProgress, "change", (value) => {
    if (reduceMotion) return;
    setShowCta(value >= 0.52);
  });

  return (
    <>
      <section
        ref={sectionRef}
        className="relative h-[220vh] bg-[var(--ink)] md:h-[280vh]"
        aria-label="Hero"
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          <header className="pointer-events-none fixed inset-x-0 top-0 z-40 bg-transparent px-5 pt-5 mix-blend-difference md:px-8 md:pt-7">
            <nav className="pointer-events-auto grid grid-cols-[1fr_auto] items-start gap-x-4 bg-transparent md:grid-cols-3">
              <div className="hidden min-w-0 font-grotesk text-white md:block">
                <p className="text-[1.05rem] leading-tight tracking-wide">
                  Gebäudereinigermeister &amp; Unternehmer
                </p>
                <p className="mt-1 text-[0.72rem] uppercase tracking-[0.18em] text-white/55">
                  1:1 Begleitung für Gebäudereiniger
                </p>
              </div>

              <p className="justify-self-start font-grotesk text-[1.05rem] font-semibold uppercase tracking-[0.2em] text-white md:justify-self-center md:text-[1.15rem]">
                Virgil Pietrar
              </p>

              <div className="flex items-center justify-end gap-5 font-grotesk text-[1.05rem] text-white md:gap-7">
                <a
                  href="#begleitung"
                  className="hidden transition-opacity hover:opacity-60 md:inline"
                >
                  Begleitung
                </a>
                <a
                  href="#akademie"
                  className="hidden transition-opacity hover:opacity-60 md:inline"
                >
                  Akademie
                </a>
                <button
                  type="button"
                  aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
                  aria-expanded={menuOpen}
                  onClick={() => setMenuOpen((open) => !open)}
                  className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-white/80 bg-transparent transition-colors hover:bg-white/10 md:hidden"
                >
                  <span className="flex w-3.5 flex-col gap-[5px]">
                    <span className="block h-px w-full bg-white" />
                    <span className="block h-px w-full bg-white" />
                  </span>
                </button>
              </div>
            </nav>

            {menuOpen && (
              <div className="pointer-events-auto mt-4 flex flex-col gap-3 border-t border-white/15 bg-transparent pt-4 font-grotesk text-[1.05rem] text-white md:hidden">
                <a
                  href="#begleitung"
                  onClick={() => setMenuOpen(false)}
                  className="py-1"
                >
                  Begleitung
                </a>
                <a
                  href="#akademie"
                  onClick={() => setMenuOpen(false)}
                  className="py-1"
                >
                  Akademie
                </a>
              </div>
            )}
          </header>

          {/* Headline 1 — bottom; scrolls up behind portrait with light blur */}
          <motion.div
            className="pointer-events-none absolute inset-x-0 bottom-0 z-10 px-2 will-change-transform md:px-3"
            style={
              reduceMotion
                ? { opacity: 0, y: "-58vh", filter: "blur(9px)" }
                : { opacity: h1Opacity, y: h1Y, filter: h1Filter }
            }
          >
            <h1 className="font-grotesk text-center text-[clamp(2.2rem,9.5vw,6.5rem)] font-semibold uppercase leading-[0.9] tracking-[-0.02em] text-white">
              <span className="block whitespace-nowrap">
                <MaskedWord
                  word={HEADLINE_1_WORDS[0]}
                  index={0}
                  reduceMotion={reduceMotion}
                />{" "}
                <MaskedWord
                  word={HEADLINE_1_WORDS[1]}
                  index={1}
                  reduceMotion={reduceMotion}
                />{" "}
                <MaskedWord
                  word={HEADLINE_1_WORDS[2]}
                  index={2}
                  reduceMotion={reduceMotion}
                />
              </span>
              <span className="block whitespace-nowrap">
                <MaskedWord
                  word={HEADLINE_1_WORDS[3]}
                  index={3}
                  reduceMotion={reduceMotion}
                />
              </span>
            </h1>
          </motion.div>

          {/* Portrait — hochkant, schmaler, etwas höher */}
          <div className="absolute inset-x-0 top-[16%] z-20 flex justify-center px-4 md:top-[14%]">
            <motion.div
              className="relative aspect-[2/3] h-[min(52vh,460px)] w-auto overflow-hidden bg-[var(--ink)] md:h-[min(56vh,520px)]"
              initial={reduceMotion ? false : { opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1.25,
                delay: 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Image
                src="/virgil-hero.jpg"
                alt="Virgil Pietrar"
                fill
                priority
                sizes="(max-width: 768px) 50vw, 30vw"
                className="object-cover object-[center_18%] [filter:grayscale(1)]"
              />
            </motion.div>
          </div>

          {/* Headline 2 + Subline — in front of portrait */}
          <div className="pointer-events-none absolute inset-x-0 bottom-[18%] z-30 flex flex-col items-center px-6 md:bottom-[20%]">
            <motion.div
              className="max-w-[16ch] text-center md:max-w-none"
              style={
                reduceMotion
                  ? { opacity: 1, y: 0 }
                  : { opacity: h2Opacity, y: h2Y }
              }
            >
              <h2 className="font-serif text-[clamp(2.2rem,5.8vw,4.75rem)] font-semibold leading-[1.05] tracking-[-0.01em] text-white">
                ICH HELFE DIR DABEI.
              </h2>
            </motion.div>

            <motion.p
              className="mt-4 max-w-[34ch] text-center font-grotesk text-[0.95rem] leading-relaxed text-white/80 md:mt-5 md:max-w-[40ch] md:text-[1.05rem]"
              style={
                reduceMotion
                  ? { opacity: 1, y: 0 }
                  : { opacity: subOpacity, y: subY }
              }
            >
              Du willst mehr Gewinn, bessere Strukturen und ein Unternehmen,
              das nicht ständig von dir abhängig ist?
            </motion.p>
          </div>
        </div>
      </section>

      <motion.div
        className={`fixed inset-x-0 bottom-0 z-50 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] md:inset-x-auto md:right-8 md:bottom-8 md:px-0 md:pb-0 ${
          showCta ? "pointer-events-auto" : "pointer-events-none"
        }`}
        style={reduceMotion ? { opacity: 1 } : { opacity: ctaOpacity }}
        aria-hidden={!showCta}
      >
        <a
          href="#erstgespraech"
          tabIndex={showCta ? 0 : -1}
          className="flex w-full items-center justify-center bg-[var(--paper)] px-6 py-4 font-grotesk text-[0.95rem] font-medium tracking-wide text-[var(--ink)] transition-opacity hover:opacity-90 md:w-auto md:min-w-[14rem]"
        >
          Kostenloses Erstgespräch
        </a>
      </motion.div>
    </>
  );
}
