"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const lines = [
  { text: "Caffè,", indent: 0, italic: false },
  { text: "atmosfera", indent: 1, italic: true },
  { text: "e una pausa", indent: 2, italic: false },
  { text: "fatta bene.", indent: 3, italic: true },
];

const indents = [
  "pl-0",
  "pl-[clamp(20px,8vw,120px)]",
  "pl-[clamp(40px,16vw,240px)]",
  "pl-[clamp(60px,24vw,360px)]",
];

export function Statement() {
  return (
    <section
      className="border-y border-[var(--color-line)] px-[clamp(20px,5vw,56px)] py-[clamp(80px,14vw,200px)]"
      style={{
        background:
          "radial-gradient(circle at 20% 30%, rgba(201,169,97,0.06) 0%, transparent 60%), var(--color-bg)",
      }}
    >
      <p className="mx-auto max-w-[1440px] font-[var(--font-serif)] font-light tracking-[-0.03em] text-[clamp(2.2rem,8vw,7rem)] leading-none">
        {lines.map((l, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{
              duration: 1.0,
              ease,
              delay: i * 0.12,
            }}
            className={`block ${indents[l.indent]} ${
              l.italic ? "italic gold-text font-light" : "text-[var(--color-ink)]"
            }`}
            style={{ fontVariationSettings: '"opsz" 144' }}
          >
            {l.text}
          </motion.span>
        ))}
      </p>
    </section>
  );
}
