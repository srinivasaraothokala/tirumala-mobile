// C:\Users\styli\tirumala-mobile\src\app\page.tsx

import React from 'react';
import Navbar      from '@/components/Navbar';
import Hero        from '@/sections/Hero';
import Services    from '@/sections/Services';
import BrandSlider from '@/sections/BrandSlider';
import Offers      from '@/sections/Offers';
import Gallery     from '@/sections/Gallery';
import Location    from '@/sections/Location';
import Contact     from '@/sections/Contact';
import Footer      from '@/components/Footer';

// ─────────────────────────────────────────────
// Structured Data — JSON-LD
// ✅ Tells Google this is a local business.
//    Shows store hours, phone, address in search results.
//    Copy/paste into Google Search Console to verify.
// ─────────────────────────────────────────────
const JSON_LD = {
  '@context':   'https://schema.org',
  '@type':      'MobilePhoneStore',
  name:         'Tirumala Cell Point',
  description:  'New, second-hand, and open-box smartphones in Narasaraopet. Best price deals every day.',
  url:          'https://tirumalacellpoint.com',
  telephone:    '+919848442266',
  image:        'https://tirumalacellpoint.com/og-image.jpg',
  priceRange:   '₹₹',
  address: {
    '@type':           'PostalAddress',
    streetAddress:     'Opp. GVR Grand Lodge, Ameensaheb Palem, Arundelpet',
    addressLocality:   'Narasaraopeta',
    addressRegion:     'Andhra Pradesh',
    postalCode:        '522601',
    addressCountry:    'IN',
  },
  geo: {
    '@type':    'GeoCoordinates',
    latitude:   16.236019,
    longitude:  80.044804,
  },
  openingHoursSpecification: [
    {
      '@type':     'OpeningHoursSpecification',
      dayOfWeek:   ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
      opens:       '10:00',
      closes:      '21:00',
    },
  ],
  sameAs: [
    'https://www.instagram.com/tirumala_cell_point/',
    'https://www.youtube.com/@TirumalaMobilestore',
    'https://www.facebook.com/tirumala_cell_point',
  ],
};

// ─────────────────────────────────────────────
// Promo Marquee Text — defined once, not inline
// ─────────────────────────────────────────────
const PROMO_TEXT_EN = 'Limited Time Deals • Best Prices in Narasaraopet • Tirumala Cell Point •';
const PROMO_TEXT_TE = 'పరిమిత సమయ ఆఫర్లు • నరసరావుపేటలో ఉత్తమ ధరలు • తిరుమల సెల్ పాయింట్ •';

// ─────────────────────────────────────────────
// Trust Banner Items
// ─────────────────────────────────────────────
const TRUST_ITEMS = [
  'Authorized Retailer',
  'Genuine Spares',
  'Instant Exchange',
  'Open Box Certified',
] as const;

// ─────────────────────────────────────────────
// Page Component
// ─────────────────────────────────────────────
export default function Home() {
  return (
    <>
      {/* ✅ JSON-LD Structured Data — injected in <head> via Next.js script tag */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

      <main className="bg-white">

        {/* ── Sticky Navigation ── */}
        <Navbar />

        {/* ── Hero ── */}
        <Hero />

        {/* ── Services ── */}
        <Services />

        {/* ── Brand Slider ── */}
        <BrandSlider />

        {/* ── Promo Marquee ────────────────────────────
            ✅ Two spans (EN + TE) tripled for seamless loop
            ✅ aria-hidden — decorative, not read by screen readers
            ✅ animate-marquee defined in globals.css
        ─────────────────────────────────────────── */}
        <div
          className="bg-[#FBC02D] py-5 overflow-hidden border-y border-yellow-500/20"
          aria-hidden="true"
        >
          <div
            className="flex whitespace-nowrap brand-marquee-inner"
            style={{ animationDuration: '30s' }}
          >
            {/* Triple the text for seamless ultrawide loop */}
            {[...Array(6)].map((_, i) => (
              <span
                key={i}
                className="mx-8 font-black text-lg text-gray-900 italic tracking-widest uppercase shrink-0"
              >
                {i % 2 === 0 ? PROMO_TEXT_EN : PROMO_TEXT_TE}
              </span>
            ))}
          </div>
        </div>

        {/* ── Offers ── */}
        <Offers />

        {/* ── Gallery ── */}
        <Gallery />

        {/* ── Location ── */}
        <Location />

        {/* ── Contact ── */}
        <Contact />

        {/* ── Trust Banner ─────────────────────────────
            ✅ <section> with aria-label for screen readers
            ✅ role="list" on wrapper for semantic correctness
        ─────────────────────────────────────────── */}
        <section
          className="bg-gray-50 py-16 border-t border-gray-100"
          aria-label="Trust and quality badges"
        >
          <ul
            role="list"
            className="container mx-auto max-w-7xl px-4 flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700"
          >
            {TRUST_ITEMS.map((item) => (
              <li
                key={item}
                className="text-gray-900 font-black text-xl italic tracking-tighter uppercase"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* ── Footer ── */}
        <Footer />

      </main>
    </>
  );
}