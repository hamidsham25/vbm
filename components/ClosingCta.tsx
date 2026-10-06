export default function ClosingCta() {
  return (
    <section
      id="abschluss"
      className="relative w-full bg-[var(--surface)] px-5 py-20 text-[var(--ink)] md:px-8 md:py-28 lg:px-12 lg:py-32"
      aria-labelledby="abschluss-heading"
    >
      <div className="mx-auto max-w-[1400px]">
        <p className="mb-4 font-grotesk text-[0.75rem] tracking-[0.2em] text-[var(--ink)]/40">
          ( 08 )
        </p>
        <h2
          id="abschluss-heading"
          className="max-w-[16ch] font-grotesk text-[clamp(2.4rem,6vw,5rem)] font-semibold leading-[1.02] tracking-[-0.03em]"
        >
          DU MUSST NICHT JEDEN FEHLER SELBST MACHEN.
        </h2>
        <p className="mt-6 max-w-[44ch] font-grotesk text-[1.1rem] leading-relaxed text-[var(--ink)]/65 md:text-[1.2rem]">
          Ich habe viele davon bereits gemacht. Lass uns gemeinsam
          herausfinden, wo aktuell der größte Hebel in deinem Unternehmen liegt.
        </p>
        <a
          href="#erstgespraech"
          className="mt-10 inline-flex bg-[var(--ink)] px-7 py-4 font-grotesk text-[1rem] font-medium text-[var(--paper)] transition-opacity hover:opacity-90"
        >
          Kostenloses Erstgespräch anfragen
        </a>
      </div>
    </section>
  );
}
