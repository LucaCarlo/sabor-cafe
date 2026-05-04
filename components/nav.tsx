"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";

const links = [
  { href: "#bar", label: "Il bar", n: "01" },
  { href: "#esperienza", label: "Esperienza", n: "02" },
  { href: "#galleria", label: "Galleria", n: "03" },
  { href: "#contatti", label: "Contatti", n: "04" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 flex items-center justify-between px-[clamp(20px,5vw,56px)] py-4 transition-all duration-500",
          "backdrop-blur-xl",
          scrolled
            ? "border-b border-[var(--color-line)] bg-[rgba(10,8,7,0.92)]"
            : "border-b border-transparent bg-[rgba(10,8,7,0.5)]",
        )}
      >
        <a
          href="#top"
          className="inline-flex items-center gap-3 text-[var(--color-ink)]"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center border border-[var(--color-gold)] text-[22px] italic leading-none text-[var(--color-gold)] font-[var(--font-serif)]">
            S
          </span>
          <span className="font-[var(--font-serif)] text-xl tracking-wide">
            Sabor Café
          </span>
        </a>

        <nav
          aria-label="Navigazione"
          className="hidden items-center gap-9 md:flex"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative py-1.5 text-[12px] font-medium uppercase tracking-[0.18em] text-[var(--color-ink-2)] transition-colors hover:text-[var(--color-ink)]"
            >
              {l.label}
              <span className="absolute bottom-0 left-0 right-0 h-px origin-right scale-x-0 bg-[var(--color-gold)] transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <a
          href="https://www.instagram.com/sabor.cafe/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full border border-[var(--color-line-2)] px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--color-ink-2)] transition-all hover:border-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-[var(--color-bg)] md:inline-flex"
        >
          Instagram
          <ArrowUpRight size={14} strokeWidth={1.6} />
        </a>

        <button
          aria-label={open ? "Chiudi menu" : "Apri menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-line-2)] text-[var(--color-ink)] md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex items-center bg-[var(--color-bg)] md:hidden"
          >
            <ul className="w-full px-[clamp(20px,5vw,56px)]">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 22 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.08 + i * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline justify-between border-b border-[var(--color-line)] py-4 font-[var(--font-serif)] text-[clamp(2rem,9vw,4rem)] leading-tight tracking-tight text-[var(--color-ink)] transition-colors hover:text-[var(--color-gold)]"
                  >
                    <span>{l.label}</span>
                    <span className="font-[var(--font-mono)] text-sm tracking-normal text-[var(--color-gold)]">
                      {l.n}
                    </span>
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 22 }}
                transition={{
                  duration: 0.5,
                  delay: 0.34,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <a
                  href="https://www.instagram.com/sabor.cafe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-baseline justify-between border-b border-[var(--color-line)] py-4 font-[var(--font-serif)] text-[clamp(2rem,9vw,4rem)] leading-tight tracking-tight text-[var(--color-ink)] transition-colors hover:text-[var(--color-gold)]"
                >
                  <span>Instagram</span>
                  <span className="text-[var(--color-gold)]">↗</span>
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
