import { Nav } from "@/components/nav";
import { TopMarquee } from "@/components/marquee";
import { Hero } from "@/components/hero";
import { Statement } from "@/components/statement";
import { About } from "@/components/about";
import { Pillars } from "@/components/pillars";
import { Visual } from "@/components/visual";
import { Gallery } from "@/components/gallery";
import { Quote } from "@/components/quote";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <>
      <a
        href="#main"
        className="absolute -left-96 top-2 z-50 rounded bg-[var(--color-ink)] px-4 py-3 text-[var(--color-bg)] focus:left-2"
      >
        Vai al contenuto
      </a>
      <TopMarquee />
      <Nav />
      <main id="main">
        <Hero />
        <Statement />
        <About />
        <Pillars />
        <Visual />
        <Gallery />
        <Quote />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
