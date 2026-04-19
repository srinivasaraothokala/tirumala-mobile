// C:\Users\styli\tirumala-mobile\src\app\layout.tsx

import type { Metadata, Viewport } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '../utils/LanguageContext';

// ─────────────────────────────────────────────
// Fonts
// ─────────────────────────────────────────────

// ✅ Only load Geist Sans — Geist Mono is for code blocks,
//    not needed in a mobile store site. Saves ~20KB per visit.
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets:  ['latin'],
  // ✅ display:swap — shows fallback font instantly,
  //    swaps to Geist when loaded. Prevents invisible text (FOIT).
  display:  'swap',
});

// ─────────────────────────────────────────────
// Viewport — separate export required in Next.js 14+
// ─────────────────────────────────────────────
export const viewport: Viewport = {
  width:               'device-width',
  initialScale:        1,
  maximumScale:        5,          // ✅ Allow pinch-zoom (accessibility)
  themeColor:          '#E53935',  // ✅ Browser tab / mobile status bar color
};

// ─────────────────────────────────────────────
// Metadata — full SEO + Open Graph + Twitter
// ─────────────────────────────────────────────
export const metadata: Metadata = {
  // ── Basic ──────────────────────────────────
  title: {
    default:  'Tirumala Cell Point — Best Mobile Store in Narasaraopet',
    // ✅ %s = page title | "Tirumala Cell Point" shown on inner pages
    template: '%s | Tirumala Cell Point',
  },
  description:
    'Buy new, second-hand, and open-box smartphones in Narasaraopet at the best prices. ' +
    'Apple, Samsung, Xiaomi, OnePlus & more. Expert repair service.',
  keywords: [
    'mobile store narasaraopet',
    'second hand phones narasaraopet',
    'open box phones',
    'apple samsung xiaomi narasaraopet',
    'mobile repair narasaraopet',
    'tirumala cell point',
    'నరసరావుపేట మొబైల్ షాప్',
  ],

  // ── Canonical URL ──────────────────────────
  // ✅ Prevents duplicate content SEO penalty
  alternates: {
    canonical: 'https://tirumalacellpoint.com',
  },

  // ── Open Graph — WhatsApp / Facebook preview ──
  openGraph: {
    type:        'website',
    url:         'https://tirumalacellpoint.com',
    siteName:    'Tirumala Cell Point',
    title:       'Tirumala Cell Point — Best Mobile Store in Narasaraopet',
    description: 'New, second-hand & open-box mobiles. Best prices in Narasaraopet.',
    locale:      'en_IN',
    images: [
      {
        url:    '/og-image.jpg',   // ✅ Add a 1200×630 image to /public/og-image.jpg
        width:  1200,
        height: 630,
        alt:    'Tirumala Cell Point — Mobile Store in Narasaraopet',
      },
    ],
  },

  // ── Twitter / X Card ──────────────────────
  twitter: {
    card:        'summary_large_image',
    title:       'Tirumala Cell Point — Best Mobile Store in Narasaraopet',
    description: 'New, second-hand & open-box mobiles. Best prices in Narasaraopet.',
    images:      ['/og-image.jpg'],
  },

  // ── Robots ────────────────────────────────
  robots: {
    index:             true,
    follow:            true,
    googleBot: {
      index:               true,
      follow:              true,
      'max-image-preview': 'large',
      'max-snippet':       -1,
    },
  },

  // ── PWA / App ─────────────────────────────
  // ✅ Add /public/favicon.ico, /public/icon.png, /public/apple-icon.png
  icons: {
    icon:  [
      { url: '/favicon.ico',         sizes: 'any'       },
      { url: '/icon.png',            type:  'image/png' },
    ],
    apple: '/apple-icon.png',
  },

  // ✅ Manifest for PWA / "Add to Home Screen" on Android Chrome
  manifest: '/manifest.json',
};

// ─────────────────────────────────────────────
// Root Layout
// ─────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      // ✅ Geist Sans only — removed unused Geist Mono variable
      className={`${geistSans.variable} h-full`}
      // ✅ suppressHydrationWarning — prevents mismatch warning
      //    when browser extensions modify the HTML element
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-white text-gray-900 antialiased">
        {/*
          ✅ LanguageProvider wraps all children so every component
          can access lang/setLang via useLanguage() hook
        */}
        <LanguageProvider defaultLang="en">
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}