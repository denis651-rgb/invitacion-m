import type { Metadata } from "next";
import { Great_Vibes, Cinzel, Montserrat } from "next/font/google";
import "./globals.css";
import { EVENT_CONFIG } from "./config";

export const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
  display: "swap",
});

export const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${EVENT_CONFIG.event.title} - ${EVENT_CONFIG.graduate.name}`,
  description: `Te invito a celebrar mi graduación como ${EVENT_CONFIG.graduate.degree}.`,
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
      (process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "https://invitacion-graduacion.vercel.app")
  ),
  openGraph: {
    title: `${EVENT_CONFIG.event.title} - ${EVENT_CONFIG.graduate.name}`,
    description: `Te invito a celebrar mi graduación como ${EVENT_CONFIG.graduate.degree}.`,
    images: [
      {
        url: EVENT_CONFIG.graduate.photo,
        width: 800,
        height: 1000,
        alt: `${EVENT_CONFIG.graduate.name} - Graduación`,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${EVENT_CONFIG.event.title} - ${EVENT_CONFIG.graduate.name}`,
    description: `Te invito a celebrar mi graduación como ${EVENT_CONFIG.graduate.degree}.`,
    images: [EVENT_CONFIG.graduate.photo],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`scroll-smooth antialiased ${greatVibes.variable} ${cinzel.variable} ${montserrat.variable}`}
    >
      <head>
        {/* OpenGraph & Social Meta Tags */}
        <meta
          property="og:title"
          content={`${EVENT_CONFIG.event.title} - ${EVENT_CONFIG.graduate.name}`}
        />
        <meta
          property="og:description"
          content={`Te invito a celebrar mi graduación como ${EVENT_CONFIG.graduate.degree}.`}
        />
        <meta property="og:image" content={EVENT_CONFIG.graduate.photo} />
        <meta property="og:type" content="website" />

        {/* Canvas Confetti Library via CDN */}
        <script
          src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.4/dist/confetti.browser.min.js"
          async
        />
      </head>
      <body className="min-h-full flex flex-col font-sans selection:bg-[#d4af37] selection:text-white">
        {children}
      </body>
    </html>
  );
}
