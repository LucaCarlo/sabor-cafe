import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import { SmoothScroll } from "@/components/smooth-scroll";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz"],
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://saborcafe.it"),
  title: {
    default: "Sabor Café — Civitanova · Caffè, atmosfera, pausa",
    template: "%s · Sabor Café",
  },
  description:
    "Sabor Café, Civitanova. Un bar contemporaneo per ogni momento della giornata: caffè, atmosfera e una pausa fatta bene.",
  applicationName: "Sabor Café",
  authors: [{ name: "Sabor Café" }],
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: "Sabor Café",
    title: "Sabor Café — Caffè, atmosfera, pausa",
    description:
      "Bar contemporaneo a Civitanova. Un luogo da vivere in ogni momento della giornata.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1600&q=80",
        width: 1600,
        height: 1067,
        alt: "Sabor Café",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sabor Café",
    description: "Caffè, atmosfera e una pausa fatta bene.",
    images: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1600&q=80",
    ],
  },
  alternates: { canonical: "https://saborcafe.it/" },
  icons: {
    icon: [
      {
        url:
          "data:image/svg+xml," +
          encodeURIComponent(
            `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='18' fill='#0A0807'/><text x='50' y='68' text-anchor='middle' font-family='Georgia,serif' font-size='58' font-style='italic' fill='#C9A961'>S</text></svg>`,
          ),
        type: "image/svg+xml",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0807",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: "Sabor Café",
  description:
    "Bar contemporaneo a Civitanova. Caffè, atmosfera e una pausa fatta bene.",
  url: "https://saborcafe.it/",
  image:
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1600&q=80",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Civitanova Marche",
    addressCountry: "IT",
  },
  sameAs: ["https://www.instagram.com/sabor.cafe/"],
  servesCuisine: ["Caffè", "Colazione", "Aperitivo"],
  priceRange: "€€",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="it"
      className={`${fraunces.variable} ${inter.variable} ${mono.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
