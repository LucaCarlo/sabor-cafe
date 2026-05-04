"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Visual() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      ref={ref}
      className="relative border-b border-[var(--color-line)] bg-[var(--color-bg)]"
    >
      <div className="relative h-[80vh] min-h-[480px] overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-[-8%]">
          <Image
            src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=2000&q=80"
            alt="Macro di chicchi di caffè tostati"
            fill
            sizes="100vw"
            className="object-cover [filter:saturate(0.85)_brightness(0.65)_contrast(1.05)]"
          />
        </motion.div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/40 via-transparent to-transparent" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-10 left-[clamp(20px,5vw,56px)] z-10 flex max-w-[700px] items-end gap-6"
      >
        <span className="whitespace-nowrap pb-3.5 font-[var(--font-mono)] text-[12px] tracking-[0.2em] text-[var(--color-gold)]">
          — 03
        </span>
        <p className="font-[var(--font-serif)] font-light leading-tight text-[clamp(1.6rem,4vw,3rem)] text-[var(--color-ink)]">
          Il gusto inizia <em className="italic gold-text">prima</em> della
          tazza.
        </p>
      </motion.div>
    </section>
  );
}
