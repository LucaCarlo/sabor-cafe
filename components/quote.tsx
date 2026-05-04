"use client";

import { motion } from "framer-motion";

export function Quote() {
  return (
    <section className="border-b border-[var(--color-line)] px-[clamp(20px,5vw,56px)] py-[clamp(80px,12vw,180px)] text-center">
      <motion.blockquote
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-[1440px] font-[var(--font-serif)] italic font-light leading-[1.25] text-[clamp(1.8rem,5vw,3.6rem)] text-[var(--color-ink)]"
      >
        «Una pausa, fatta{" "}
        <em className="italic gold-text">davvero</em> bene.»
      </motion.blockquote>
    </section>
  );
}
