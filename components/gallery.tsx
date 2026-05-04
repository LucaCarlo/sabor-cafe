"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const photos = [
  {
    src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80",
    alt: "Latte art",
    cls: "md:col-span-5 md:row-span-3",
  },
  {
    src: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=900&q=80",
    alt: "Barista al lavoro",
    cls: "md:col-span-3 md:row-span-4",
  },
  {
    src: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=900&q=80",
    alt: "Pasticceria",
    cls: "md:col-span-4 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1100&q=80",
    alt: "Bancone in legno",
    cls: "md:col-span-4 md:row-span-2",
  },
];

export function Gallery() {
  return (
    <section
      id="galleria"
      className="border-b border-[var(--color-line)] bg-[var(--color-bg-2)] px-[clamp(20px,5vw,56px)] py-[clamp(80px,12vw,160px)]"
    >
      <header className="mx-auto mb-14 grid max-w-[1440px] grid-cols-1 items-end gap-6 md:grid-cols-2">
        <div>
          <span className="mb-7 inline-flex items-center gap-3 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-mute)]">
            <span className="rounded-sm border border-[var(--color-gold-deep)] px-2 py-1 tracking-wider text-[var(--color-gold)]">
              03
            </span>
            Galleria
          </span>
          <h2 className="text-[clamp(2rem,5vw,4rem)] text-[var(--color-ink)]">
            Momenti di <em className="italic font-light gold-text">Sabor</em>.
          </h2>
        </div>
        <div className="md:justify-self-end">
          <a
            href="https://www.instagram.com/sabor.cafe/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3.5 border-b border-[var(--color-ink)] py-2 text-[12px] font-medium uppercase tracking-[0.2em] text-[var(--color-ink)] transition-all hover:gap-5 hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
          >
            Tutto su Instagram
            <svg width="36" height="10" viewBox="0 0 36 10" fill="none">
              <path
                d="M0 5h34m0 0L29 1m5 4l-5 4"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </svg>
          </a>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-3.5 md:grid-cols-12 md:auto-rows-[110px]">
        {photos.map((p, i) => (
          <motion.figure
            key={i}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{ duration: 0.85, ease, delay: i * 0.08 }}
            className={`group relative aspect-[4/3] overflow-hidden border border-[var(--color-line)] bg-[var(--color-bg)] md:aspect-auto ${p.cls}`}
          >
            <Image
              src={p.src}
              alt={p.alt}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-[1400ms] [filter:saturate(0.92)] group-hover:scale-[1.05] group-hover:[filter:saturate(1.05)]"
            />
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
