import type { Metadata } from "next";
import "./globals.css";
import { EVENT_CONFIG } from "./config";

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
    <html lang="es" className="scroll-smooth antialiased">
      <head>
        {/* OpenGraph & Social Meta Tags */}
        <meta property="og:title" content={`${EVENT_CONFIG.event.title} - ${EVENT_CONFIG.graduate.name}`} />
        <meta
          property="og:description"
          content={`Te invito a celebrar mi graduación como ${EVENT_CONFIG.graduate.degree}.`}
        />
        <meta property="og:image" content={EVENT_CONFIG.graduate.photo} />
        <meta property="og:type" content="website" />

        {/* Google Fonts: Great Vibes (Script), Cinzel & Cormorant Garamond (Serif), Montserrat (Sans) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Great+Vibes&family=Montserrat:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />

        {/* Canvas Confetti Library via CDN */}
        <script
          src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.4/dist/confetti.browser.min.js"
          async
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#faf9f6] text-[#143d2b] selection:bg-[#d4af37] selection:text-white">
        {children}
      </body>
    </html>
  );
}
