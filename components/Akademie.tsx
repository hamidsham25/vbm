import Image from "next/image";

const TOPICS = [
  "Online-Kurse",
  "Kalkulationskurse",
  "Preisgestaltung",
  "Vorlagen",
  "Prozesse",
  "Mitarbeiter",
  "Vertrieb",
  "Unternehmensführung",
] as const;

export default function Akademie() {
  return (
    <section
      id="akademie"
      className="relative w-full bg-[var(--ink)] px-5 py-16 text-[var(--paper)] md:px-8 md:py-20 lg:px-12 lg:py-24"
      aria-labelledby="akademie-heading"
    >
      <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="lg:col-span-6">
          <p className="mb-4 font-grotesk text-[0.75rem] tracking-[0.2em] text-[var(--paper)]/45">
            ( 07 )
          </p>
          <h2
            id="akademie-heading"
            className="max-w-[14ch] font-grotesk text-[clamp(2rem,5vw,4rem)] font-semibold leading-[1.05] tracking-[-0.03em]"
          >
            WISSEN AUS DER PRAXIS. FÜR DIE PRAXIS.
          </h2>
          <p className="mt-6 max-w-[42ch] font-grotesk text-[1.05rem] leading-relaxed text-[var(--paper)]/70 md:text-[1.15rem]">
            Praxiswissen speziell für Gebäudereiniger, verständlich, direkt und
            sofort umsetzbar.
          </p>
          <p className="mt-4 max-w-[42ch] font-grotesk text-[1rem] leading-relaxed text-[var(--paper)]/50">
            Ergänzung zur 1:1 Begleitung — kein klassischer Online-Shop und kein
            Blog.
          </p>

          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 font-grotesk text-[0.95rem] text-[var(--paper)]/60 md:mt-10">
            {TOPICS.map((topic) => (
              <li key={topic} className="before:mr-2 before:content-['{']">
                {topic}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative aspect-[4/5] w-full overflow-hidden lg:col-span-5 lg:col-start-8">
          <Image
            src="/images/2.avif"
            alt="VBM Akademie"
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover [filter:grayscale(1)]"
          />
        </div>
      </div>
    </section>
  );
}
