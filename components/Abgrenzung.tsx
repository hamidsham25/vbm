export default function Abgrenzung() {
  return (
    <section
      id="abgrenzung"
      className="relative w-full bg-[var(--surface)] px-5 py-16 text-[var(--ink)] md:px-8 md:py-24 lg:px-12 lg:py-28"
      aria-labelledby="abgrenzung-heading"
    >
      <div className="mx-auto max-w-[1400px]">
        <p className="mb-4 font-grotesk text-[0.75rem] tracking-[0.2em] text-[var(--ink)]/40">
          ( 05 )
        </p>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 lg:items-end">
          <h2
            id="abgrenzung-heading"
            className="max-w-[16ch] font-grotesk text-[clamp(2.2rem,5.5vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.03em] lg:col-span-7"
          >
            KEIN KURS. KEINE THEORIE. UNTERNEHMER ZU UNTERNEHMER.
          </h2>
          <p className="max-w-[40ch] font-grotesk text-[1.1rem] leading-relaxed text-[var(--ink)]/70 md:text-[1.2rem] lg:col-span-5 lg:justify-self-end">
            Ich schaue gemeinsam mit dir auf dein echtes Unternehmen: deine
            Zahlen, deine Mitarbeiter, deine Kunden und deine Probleme. Dann
            entscheiden wir, was als Nächstes wirklich wichtig ist.
          </p>
        </div>
      </div>
    </section>
  );
}
