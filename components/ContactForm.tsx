"use client";

import { useState, type FormEvent } from "react";

const FIELDS = [
  { name: "vorname", label: "Vorname", type: "text", autoComplete: "given-name" },
  { name: "nachname", label: "Nachname", type: "text", autoComplete: "family-name" },
  { name: "unternehmen", label: "Unternehmen", type: "text", autoComplete: "organization" },
  { name: "telefon", label: "Telefon", type: "tel", autoComplete: "tel" },
  { name: "email", label: "E-Mail", type: "email", autoComplete: "email" },
  { name: "jahresumsatz", label: "Jahresumsatz", type: "text", autoComplete: "off" },
] as const;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="erstgespraech"
      className="relative w-full bg-[var(--surface-soft)] px-5 py-16 text-[var(--ink)] md:px-8 md:py-24 lg:px-12 lg:py-28"
      aria-labelledby="form-heading"
    >
      <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="mb-4 font-grotesk text-[0.75rem] tracking-[0.2em] text-[var(--ink)]/40">
            ( 09 )
          </p>
          <h2
            id="form-heading"
            className="font-grotesk text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.03em]"
          >
            Jetzt anfragen
          </h2>
          <p className="mt-5 max-w-[36ch] font-grotesk text-[1.05rem] leading-relaxed text-[var(--ink)]/70">
            Teile mir deine Herausforderungen mit. Ich begleite dich persönlich
            bei der Skalierung deines Gebäudereinigungsbetriebs.
          </p>
        </div>

        <div className="lg:col-span-7">
          {submitted ? (
            <p className="border border-[var(--ink)]/20 px-6 py-10 font-grotesk text-[1.15rem]">
              Danke. Deine Anfrage ist eingegangen — ich melde mich bei dir.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
              {FIELDS.map((field) => (
                <label
                  key={field.name}
                  className="flex flex-col gap-2 font-grotesk text-[0.85rem] text-[var(--ink)]/60"
                >
                  {field.label}
                  <input
                    name={field.name}
                    type={field.type}
                    required
                    autoComplete={field.autoComplete}
                    className="border-0 border-b border-[var(--ink)]/25 bg-transparent px-0 py-3 text-[1rem] text-[var(--ink)] outline-none transition-colors placeholder:text-[var(--ink)]/30 focus:border-[var(--ink)]"
                  />
                </label>
              ))}

              <label className="flex flex-col gap-2 font-grotesk text-[0.85rem] text-[var(--ink)]/60 sm:col-span-2">
                Deine größte Herausforderung
                <textarea
                  name="herausforderung"
                  required
                  rows={4}
                  className="resize-y border border-[var(--ink)]/25 bg-transparent px-3 py-3 text-[1rem] text-[var(--ink)] outline-none transition-colors focus:border-[var(--ink)]"
                />
              </label>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="mt-2 w-full bg-[var(--ink)] px-6 py-4 font-grotesk text-[1rem] font-medium text-[var(--paper)] transition-opacity hover:opacity-90 sm:w-auto"
                >
                  Jetzt Erstgespräch anfragen
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
