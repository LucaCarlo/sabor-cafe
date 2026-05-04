const items = [
  "Sabor Café",
  "Civitanova",
  "Caffè · Atmosfera · Pausa",
  "@sabor.cafe",
];

export function TopMarquee() {
  const repeated = [...items, ...items, ...items, ...items, ...items, ...items];
  return (
    <div
      className="relative z-40 flex h-9 items-center overflow-hidden border-b border-[var(--color-line)] bg-[var(--color-bg)]"
      aria-hidden="true"
    >
      <div
        className="marquee-track gap-6 pl-6"
        style={{ ["--marquee-duration" as string]: "42s" }}
      >
        {repeated.map((t, i) => (
          <span key={i} className="flex items-center gap-6">
            <span className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-[var(--color-ink-mute)]">
              {t}
            </span>
            <span className="text-[6px] leading-none text-[var(--color-gold)]">
              ●
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function FooterMarquee() {
  const word = "Sabor Café";
  const repeated = Array.from({ length: 8 }, () => word);
  return (
    <div className="overflow-hidden border-b border-[var(--color-line)] py-[clamp(36px,8vw,80px)]">
      <div
        className="marquee-track gap-12"
        style={{ ["--marquee-duration" as string]: "60s" }}
      >
        {repeated.concat(repeated).map((t, i) => (
          <span key={i} className="flex items-center gap-12">
            <span className="text-stroke-gold font-[var(--font-serif)] text-[clamp(3rem,10vw,9rem)] italic font-light leading-none tracking-tight">
              {t}
            </span>
            <span className="text-xs leading-none text-[var(--color-gold)]">
              ●
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
