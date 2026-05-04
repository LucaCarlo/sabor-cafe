"use client";

import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const info = [
  { k: "Dove", v: "Civitanova Marche · Italia" },
  { k: "Quando", v: "Tutti i giorni · dalla colazione alla sera" },
  {
    k: "Social",
    v: "instagram.com/sabor.cafe",
    href: "https://www.instagram.com/sabor.cafe/",
  },
  { k: "Indice", v: "N° 01 — MMXXVI" },
];

export function Contact() {
  return (
    <section
      id="contatti"
      className="relative overflow-hidden bg-[var(--color-bg-2)] px-[clamp(20px,5vw,56px)] py-[clamp(80px,12vw,160px)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[10%] -top-[20%] h-[70vw] w-[70vw]"
        style={{
          background:
            "radial-gradient(circle, rgba(201,169,97,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-[clamp(48px,8vw,120px)] md:grid-cols-[1.1fr_1fr]">
        <div>
          <span className="mb-7 inline-flex items-center gap-3 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-2)]">
            <span className="rounded-sm border border-[var(--color-gold-deep)] px-2 py-1 tracking-wider text-[var(--color-gold)]">
              04
            </span>
            Contatti
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.9, ease }}
            className="mb-7 text-[clamp(2.2rem,6vw,5rem)] text-[var(--color-ink)]"
          >
            Scopri il bar e{" "}
            <em className="italic font-light gold-text">seguici</em>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.85, ease, delay: 0.1 }}
            className="mb-10 max-w-[50ch] text-[clamp(1.05rem,1.6vw,1.25rem)] leading-relaxed text-[var(--color-ink-2)]"
          >
            Aggiornamenti, novità e momenti di Sabor Café li raccontiamo ogni
            giorno su Instagram.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.85, ease, delay: 0.2 }}
            href="https://www.instagram.com/sabor.cafe/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-[var(--color-bg)] transition-all hover:-translate-y-0.5"
            style={{
              background:
                "linear-gradient(135deg, var(--color-gold-2) 0%, var(--color-gold) 55%, var(--color-gold-deep) 100%)",
              boxShadow: "0 18px 40px -16px rgba(201,169,97,0.5)",
            }}
          >
            <Instagram size={18} strokeWidth={1.6} />
            <span>@sabor.cafe</span>
          </motion.a>
        </div>

        <motion.ul
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.95, ease, delay: 0.15 }}
          className="border-t border-[var(--color-line)]"
        >
          {info.map((row) => (
            <li
              key={row.k}
              className="grid grid-cols-1 items-baseline gap-2 border-b border-[var(--color-line)] py-5 md:grid-cols-[100px_1fr] md:gap-6"
            >
              <span className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-[var(--color-gold)]">
                {row.k}
              </span>
              {row.href ? (
                <a
                  href={row.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.98rem] text-[var(--color-ink)] transition-colors hover:text-[var(--color-gold-2)]"
                >
                  {row.v}
                </a>
              ) : (
                <span className="text-[0.98rem] text-[var(--color-ink)]">
                  {row.v}
                </span>
              )}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
