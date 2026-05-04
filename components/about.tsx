"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function About() {
  return (
    <section
      id="bar"
      className="border-b border-[var(--color-line)] bg-[var(--color-bg-2)] px-[clamp(20px,5vw,56px)] py-[clamp(80px,12vw,160px)]"
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-[clamp(40px,8vw,100px)] md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.95, ease }}
          className="relative order-2 md:order-1"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden border border-[var(--color-line)]">
            <Image
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1100&q=80"
              alt="Interno caldo e luminoso del bar"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover [filter:saturate(0.95)]"
            />
          </div>
          <span className="pointer-events-none absolute inset-3.5 border border-[var(--color-gold-deep)] opacity-45" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.95, ease, delay: 0.12 }}
          className="order-1 md:order-2"
        >
          <span className="mb-7 inline-flex items-center gap-3 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-mute)]">
            <span className="rounded-sm border border-[var(--color-gold-deep)] px-2 py-1 tracking-wider text-[var(--color-gold)]">
              01
            </span>
            Il bar
          </span>
          <h2 className="mb-7 text-[clamp(2rem,4.5vw,3.6rem)] text-[var(--color-ink)]">
            Un bar pensato per{" "}
            <em className="italic font-light gold-text">la giornata intera</em>.
          </h2>
          <p className="mb-4 max-w-[56ch] text-[clamp(1.05rem,1.6vw,1.25rem)] leading-relaxed text-[var(--color-ink-2)]">
            Sabor Café è uno spazio contemporaneo nel cuore di Civitanova: il
            primo caffè del mattino, la pausa di mezzogiorno, l'aperitivo della
            sera.
          </p>
          <p className="mb-8 max-w-[50ch] text-[0.98rem] leading-relaxed text-[var(--color-ink-mute)]">
            Materiali caldi, luce calibrata, ritmi giusti. Niente di fuori
            posto, tutto al posto giusto: l'idea è semplice, l'esecuzione è
            cura.
          </p>
          <a
            href="#contatti"
            className="group inline-flex items-center gap-3.5 border-b border-[var(--color-ink)] py-2 text-[12px] font-medium uppercase tracking-[0.2em] text-[var(--color-ink)] transition-all hover:gap-5 hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
          >
            Vienici a trovare
            <svg width="36" height="10" viewBox="0 0 36 10" fill="none">
              <path
                d="M0 5h34m0 0L29 1m5 4l-5 4"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
