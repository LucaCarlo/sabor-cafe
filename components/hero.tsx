"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100svh-2.25rem)] flex-col justify-center px-[clamp(20px,5vw,56px)] pb-16 pt-20"
    >
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-x-[clamp(28px,6vw,80px)] gap-y-4 md:grid-cols-[1fr_0.55fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
          className="flex items-center gap-3.5 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-mute)] md:col-start-1"
        >
          <span>N° 01 — Civitanova</span>
          <span className="h-px w-7 bg-[var(--color-line-2)]" />
          <span>MMXXVI</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, ease, delay: 0.2 }}
          className="mt-2 font-[var(--font-serif)] font-light leading-[0.88] tracking-[-0.04em] text-[clamp(4.4rem,16vw,14rem)] md:col-start-1"
          style={{ fontVariationSettings: '"opsz" 144' }}
        >
          <span className="block">Sabor</span>
          <span className="block gold-text italic font-light">Café.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease, delay: 0.35 }}
          className="relative md:col-start-2 md:row-start-2 md:row-span-2"
        >
          <div className="relative aspect-[3/4] w-full overflow-hidden border border-[var(--color-line)]">
            <Image
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80"
              alt="Cappuccino servito con cura"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover [filter:saturate(0.9)_contrast(1.02)]"
            />
          </div>
          <span className="mt-3 block font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-ink-mute)] md:absolute md:-bottom-7 md:left-0 md:mt-0">
            Espresso, ogni giorno
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease, delay: 0.45 }}
          className="mt-4 max-w-[28ch] font-[var(--font-serif)] italic font-light leading-[1.4] text-[clamp(1.2rem,2.2vw,1.7rem)] text-[var(--color-ink-2)] md:col-start-1 md:mt-6"
        >
          Un luogo da vivere in{" "}
          <em className="not-italic gold-text font-normal">ogni momento</em>{" "}
          della giornata.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.6 }}
          className="mt-12 flex flex-wrap items-center justify-between gap-6 border-t border-[var(--color-line)] pt-7 md:col-span-2"
        >
          <a
            href="#bar"
            className="group inline-flex items-center gap-4 border border-[var(--color-ink)] px-7 py-4 text-[12px] font-medium uppercase tracking-[0.2em] text-[var(--color-ink)] transition-all hover:border-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-[var(--color-bg)]"
          >
            <span>Scopri il bar</span>
            <svg width="40" height="10" viewBox="0 0 40 10" fill="none">
              <path
                d="M0 5h38m0 0L33 1m5 4l-5 4"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </svg>
          </a>
          <span className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-[var(--color-ink-mute)]">
            43°18′N · 13°43′E
          </span>
        </motion.div>
      </div>

      <div
        className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2.5 md:flex"
        aria-hidden="true"
      >
        <span className="scroll-line" />
        <span className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-[var(--color-ink-mute)]">
          scroll
        </span>
      </div>
    </section>
  );
}
