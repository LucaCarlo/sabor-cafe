import { FooterMarquee } from "@/components/marquee";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="overflow-hidden border-t border-[var(--color-line)] bg-[var(--color-bg)]">
      <FooterMarquee />
      <div className="flex flex-col items-start justify-between gap-3 px-[clamp(20px,5vw,56px)] py-6 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.15em] text-[var(--color-ink-mute)] md:flex-row md:items-center">
        <span>© {year} Sabor Café · Civitanova</span>
        <span className="text-[var(--color-ink-2)]">
          Caffè, atmosfera, pausa.
        </span>
        <a
          href="https://www.instagram.com/sabor.cafe/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-[var(--color-gold-2)]"
        >
          @sabor.cafe ↗
        </a>
      </div>
    </footer>
  );
}
