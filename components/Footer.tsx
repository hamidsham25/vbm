export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-[var(--ink)] px-5 py-12 text-[var(--paper)] md:px-8 md:py-14 lg:px-12">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-grotesk text-[1rem] font-semibold uppercase tracking-[0.18em]">
            Virgil Pietrar
          </p>
          <p className="mt-2 max-w-[36ch] font-grotesk text-[0.9rem] leading-relaxed text-[var(--paper)]/55">
            Gebäudereinigermeister &amp; Unternehmer · Persönliche 1:1
            Unternehmerbegleitung für Gebäudereiniger
          </p>
          <p className="mt-4 font-grotesk text-[0.85rem] text-[var(--paper)]/45">
            Amalienstr. 58, 90763 Fürth
            <br />
            <a
              href="tel:+4917682336435"
              className="transition-opacity hover:opacity-70"
            >
              0176 82336435
            </a>
            {" · "}
            <a
              href="mailto:info@vb-medienkonzepte.de"
              className="transition-opacity hover:opacity-70"
            >
              info@vb-medienkonzepte.de
            </a>
          </p>
        </div>

        <div className="flex flex-col gap-3 font-grotesk text-[0.9rem] text-[var(--paper)]/60 md:items-end">
          <div className="flex gap-5">
            <a href="#begleitung" className="transition-opacity hover:opacity-100">
              Begleitung
            </a>
            <a href="#akademie" className="transition-opacity hover:opacity-100">
              Akademie
            </a>
            <a
              href="#erstgespraech"
              className="transition-opacity hover:opacity-100"
            >
              Erstgespräch
            </a>
          </div>
          <div className="flex gap-5">
            <a href="#impressum" className="transition-opacity hover:opacity-100">
              Impressum
            </a>
            <a
              href="#datenschutz"
              className="transition-opacity hover:opacity-100"
            >
              Datenschutz
            </a>
          </div>
          <p className="mt-2 text-[0.8rem] text-[var(--paper)]/40">
            © 2026 VB Medienkonzepte GmbH
          </p>
        </div>
      </div>
    </footer>
  );
}
