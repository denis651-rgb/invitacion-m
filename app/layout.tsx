import type { Metadata } from "next";
import "./globals.css";
import { EVENT_CONFIG } from "./config";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://invitacion-m-two.vercel.app");

const ogTitle = `🎓 ${EVENT_CONFIG.event.title} • ${EVENT_CONFIG.graduate.name}`;
const ogDescription = `Celebración de Gala & Honor • ${EVENT_CONFIG.graduate.degree}. ¡Acompáñame a celebrar este inolvidable triunfo el ${EVENT_CONFIG.event.dateDisplay}!`;
const ogImageUrl = `${SITE_URL}/og-image.jpg?v=2`;

export const metadata: Metadata = {
  title: ogTitle,
  description: ogDescription,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: ogTitle,
    description: ogDescription,
    url: SITE_URL,
    siteName: `Invitación de Graduación - ${EVENT_CONFIG.graduate.shortName}`,
    images: [
      {
        url: ogImageUrl,
        width: 800,
        height: 1000,
        alt: `${EVENT_CONFIG.graduate.name} - Graduación`,
        type: "image/jpeg",
      },
    ],
    locale: "es_BO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: ogTitle,
    description: ogDescription,
    images: [ogImageUrl],
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
        {/* OpenGraph & WhatsApp Social Meta Tags */}
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:secure_url" content={ogImageUrl} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="1000" />
        <meta property="og:url" content={SITE_URL} />
        <meta
          property="og:site_name"
          content={`Invitación de Graduación - ${EVENT_CONFIG.graduate.shortName}`}
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={ogTitle} />
        <meta name="twitter:description" content={ogDescription} />
        <meta name="twitter:image" content={ogImageUrl} />

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
