const AREAS = [
  {
    name: "Gewinn",
    topics: "Kalkulation · Preise · Margen",
  },
  {
    name: "Kunden",
    topics: "Vertrieb · Angebote · Wachstum",
  },
  {
    name: "Mitarbeiter",
    topics: "Gewinnung · Führung · Verantwortung",
  },
  {
    name: "Struktur",
    topics: "Prozesse · Organisation · Digitalisierung",
  },
  {
    name: "Du als Unternehmer",
    topics: "Delegieren · Führung/Kontrolle · raus aus dem Tagesgeschäft",
  },
] as const;

export default function Begleitung() {
  return (
    <section
      id="begleitung"
      className="relative w-full bg-[var(--ink)] px-5 py-16 text-[var(--paper)] md:px-8 md:py-20 lg:px-12 lg:py-24"
      aria-labelledby="begleitung-heading"
    >
      <div className="mx-auto max-w-[1400px]">
        <p className="mb-4 font-grotesk text-[0.75rem] tracking-[0.2em] text-[var(--paper)]/45">
          ( 04 )
        </p>
        <h2
          id="begleitung-heading"
          className="max-w-[20ch] font-grotesk text-[clamp(2rem,5vw,4rem)] font-semibold leading-[1.05] tracking-[-0.03em]"
        >
          KEIN STANDARDPROGRAMM.
        </h2>
        <p className="mt-3 max-w-[28ch] font-serif text-[clamp(1.35rem,3vw,2.25rem)] leading-snug text-[var(--paper)]/80">
          DEIN UNTERNEHMEN. DEINE HERAUSFORDERUNGEN. UNSER PLAN.
        </p>
        <p className="mt-6 max-w-[52ch] font-grotesk text-[1.05rem] leading-relaxed text-[var(--paper)]/65 md:text-[1.1rem]">
          Jede Gebäudereinigung ist anders. Deshalb bekommst du bei mir kein
          Standardprogramm. Wir schauen gemeinsam auf dein Unternehmen und
          arbeiten genau an den Stellen, die dich heute zurückhalten.
        </p>

        <ul className="mt-12 divide-y divide-white/15 border-y border-white/15 md:mt-16">
          {AREAS.map((area) => (
            <li
              key={area.name}
              className="grid gap-2 py-5 md:grid-cols-12 md:items-baseline md:gap-6 md:py-6"
            >
              <h3 className="font-grotesk text-[1.25rem] font-semibold tracking-[-0.02em] md:col-span-4 md:text-[1.4rem]">
                {area.name}
              </h3>
              <p className="font-grotesk text-[1rem] text-[var(--paper)]/60 md:col-span-8 md:text-[1.1rem]">
                {area.topics}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
