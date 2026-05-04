"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const items = [
  {
    n: "01",
    title: "Caffè",
    body:
      "Selezione attenta, estrazione precisa. Una tazza che racconta la differenza tra abitudine e cura.",
  },
  {
    n: "02",
    title: "Atmosfera",
    body:
      "Spazio sobrio, materiali caldi, luce dosata. Un posto in cui stare bene, anche solo per pochi minuti.",
  },
  {
    n: "03",
    title: "Pausa",
    body:
      "Mattina, mezzogiorno, sera. Sabor Café accompagna i tuoi momenti, senza fretta e senza rumore.",
  },
];

export function Pillars() {
  return (
    <section
      id="esperienza"
      className="border-b border-[var(--color-line)] px-[clamp(20px,5vw,56px)] py-[clamp(80px,12vw,160px)]"
    >
      <div className="mx-auto mb-20 max-w-[1440px]">
        <span className="mb-7 inline-flex items-center gap-3 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-2)]">
          <span className="rounded-sm border border-[var(--color-gold-deep)] px-2 py-1 tracking-wider text-[var(--color-gold)]">
            02
          </span>
          Esperienza
        </span>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.9, ease }}
          className="max-w-[14ch] text-[clamp(2rem,5.5vw,4.8rem)] text-[var(--color-ink)]"
        >
          Tre cose, fatte{" "}
          <em className="italic font-light gold-text">per bene</em>.
        </motion.h2>
      </div>

      <ol className="mx-auto grid max-w-[1440px] grid-cols-1 border-l border-t border-[var(--color-line)] md:grid-cols-3">
        {items.map((item, i) => (
          <motion.li
            key={item.n}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{ duration: 0.8, ease, delay: i * 0.1 }}
            className="group flex flex-col gap-4 border-b border-r border-[var(--color-line)] p-[clamp(28px,4vw,64px)] transition-colors duration-500 hover:bg-[var(--color-bg-2)]"
          >
            <span className="font-[var(--font-mono)] text-[11px] tracking-[0.2em] text-[var(--color-gold)]">
              {item.n}
            </span>
            <h3 className="font-[var(--font-serif)] italic font-normal text-[clamp(1.8rem,3.4vw,2.6rem)] text-[var(--color-ink)]">
              {item.title}
            </h3>
            <p className="mt-1 text-[0.95rem] leading-relaxed text-[var(--color-ink-mute)]">
              {item.body}
            </p>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
