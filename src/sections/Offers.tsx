'use client';

// C:\Users\styli\tirumala-mobile\src\sections\Offers.tsx

import React, { useMemo } from 'react';
import {
  RefreshCcw, Package, Gift,
  CheckCircle2, ArrowRight, MessageCircle,
} from 'lucide-react';
import { SITE_CONFIG } from '../data/content';
import { useLanguage } from '../utils/LanguageContext';

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────
type Lang = 'en' | 'te';

interface OfferCard {
  title:       string;
  description: string;
  badge:       string;
}

interface Translation {
  heading:    React.ReactNode;
  subheading: string;
  cta:        string;
  features:   string[];
  check:      string;
  cards:      OfferCard[];
}

// ─────────────────────────────────────────────
// Constants — outside component
// ─────────────────────────────────────────────

// ✅ Icons parallel to card data — index-safe
const CARD_ICONS = [RefreshCcw, Package, Gift] as const;

const TRANSLATIONS: Record<Lang, Translation> = {
  en: {
    heading: (
      <>
        Best Price Deals{' '}
        <br className="hidden md:block" />
        in Narasaraopet
      </>
    ),
    subheading:
      'Upgrade your tech today with our exclusive seasonal offers and unbeatable service.',
    cta:      'Contact Now',
    features: ['Best Price Guarantee', 'Exchange Available', 'Genuine Spares'],
    check:    'Check Eligibility',
    cards: [
      {
        title:       'Exchange Offer',
        description: 'Upgrade your old phone easily with the best market value valuation.',
        badge:       'Save More',
      },
      {
        title:       'Open Box Deals',
        description: 'Like-new premium phones at significantly lower prices with warranty.',
        badge:       'Top Seller',
      },
      {
        title:       'Accessories Combo',
        description: 'Get massive discounts when you bundle cases, glass, and chargers.',
        badge:       'Best Value',
      },
    ],
  },
  te: {
    heading: (
      <>
        నరసరావుపేటలో{' '}
        <br className="hidden md:block" />
        ఉత్తమ ధరలు
      </>
    ),
    subheading:
      'మా ప్రత్యేక సీజనల్ ఆఫర్లు మరియు అద్భుతమైన సర్వీస్‌తో ఈరోజే మీ టెక్నాలజీని అప్‌గ్రేడ్ చేయండి.',
    cta:      'సంప్రదించండి',
    features: ['ఉత్తమ ధర హామీ', 'ఎక్స్ఛేంజ్ సౌకర్యం', 'ఒరిజినల్ స్పేర్స్'],
    check:    'అర్హతను తనిఖీ చేయండి',
    cards: [
      {
        title:       'ఎక్స్ఛేంజ్ ఆఫర్',
        description: 'మీ పాత ఫోన్‌ను ఉత్తమ మార్కెట్ ధరతో సులభంగా అప్‌గ్రేడ్ చేసుకోండి.',
        badge:       'ఎక్కువ ఆదా',
      },
      {
        title:       'ఓపెన్ బాక్స్ డీల్స్',
        description: 'వారంటీతో కూడిన సరికొత్త ప్రీమియం ఫోన్‌లు అతి తక్కువ ధరకే పొందండి.',
        badge:       'టాప్ సెల్లర్',
      },
      {
        title:       'యాక్సెసరీస్ కాంబో',
        description: 'కేస్‌లు, గ్లాస్ మరియు ఛార్జర్‌లను బండిల్‌గా కొనుగోలు చేసి భారీ తగ్గింపు పొందండి.',
        badge:       'ఉత్తమ విలువ',
      },
    ],
  },
};

// ─────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────
const Offers = () => {
  const { lang } = useLanguage();
  const safeLang = (lang as Lang) ?? 'en';
  const t = useMemo(() => TRANSLATIONS[safeLang], [safeLang]);

  const waLink = `https://wa.me/${SITE_CONFIG.whatsapp}`;

  return (
    <section
      id="offers"
      aria-label="Offers and deals"
      className="py-24 bg-white overflow-hidden"
    >
      {/*
        ✅ animate-gradient needs this keyframe in globals.css or tailwind.config.
        Add this to your globals.css if not present:

        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50%       { background-position: 100% 50%; }
        }
        .animate-gradient {
          animation: gradient-shift 6s ease infinite;
        }
      */}

      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* ── Hero Banner ── */}
        <div className="relative mb-12 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-red-100">

          {/* Animated gradient background */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-br from-[#E53935] via-[#f05a41] to-[#FBC02D] bg-[length:200%_200%] animate-gradient"
          />

          {/* Subtle texture overlay */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          <div className="relative z-10 p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-8">

            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight leading-tight">
                {t.heading}
              </h2>
              <p className="text-white/90 text-lg md:text-xl font-medium mb-8 max-w-xl">
                {t.subheading}
              </p>

              {/* Feature Pills */}
              <div
                className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10"
                role="list"
                aria-label="Key features"
              >
                {t.features.map((feature) => (
                  <div
                    key={feature}
                    role="listitem"
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20"
                  >
                    <CheckCircle2 size={15} className="text-[#FBC02D] shrink-0" aria-hidden="true" />
                    <span className="text-white text-xs font-bold uppercase tracking-wider">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact us on WhatsApp"
                className="inline-flex items-center gap-3 px-10 py-5 bg-white text-gray-900 font-bold rounded-full shadow-2xl shadow-red-900/20 hover:scale-[1.03] transition-all duration-200 active:scale-95 group"
              >
                <MessageCircle size={19} className="text-green-600" aria-hidden="true" />
                {t.cta}
                <ArrowRight
                  size={17}
                  className="text-gray-400 group-hover:translate-x-1 transition-transform duration-200"
                  aria-hidden="true"
                />
              </a>
            </div>

            {/* Decorative blob — desktop only */}
            <div aria-hidden="true" className="hidden lg:block relative w-64 h-64 shrink-0">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl animate-pulse" />
              <Package
                size={110}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/20 rotate-12"
              />
            </div>

          </div>
        </div>

        {/* ── Offer Cards ── */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          role="list"
          aria-label="Offer cards"
        >
          {t.cards.map((offer, index) => {
            const Icon = CARD_ICONS[index];
            return (
              <article
                key={offer.title}          // ✅ stable key from title, not index
                role="listitem"
                className="group p-8 rounded-3xl border border-gray-100 bg-white transition-all duration-300 hover:border-gray-900 hover:shadow-2xl hover:shadow-gray-100 flex flex-col items-start"
              >
                {/* Icon */}
                <div
                  aria-hidden="true"
                  className="mb-6 p-4 rounded-2xl bg-gray-50 text-gray-400 group-hover:bg-[#E53935] group-hover:text-white transition-all duration-300"
                >
                  <Icon size={30} strokeWidth={1.5} />
                </div>

                {/* Badge */}
                <span className="text-[10px] font-black uppercase tracking-widest text-[#E53935] mb-2">
                  {offer.badge}
                </span>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight group-hover:text-[#E53935] transition-colors duration-200">
                  {offer.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 leading-relaxed font-medium">
                  {offer.description}
                </p>

                {/* ✅ Proper anchor instead of cursor-pointer div — keyboard accessible */}
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Check eligibility for ${offer.title} on WhatsApp`}
                  className="mt-8 pt-6 border-t border-gray-100 w-full flex items-center justify-between text-sm font-bold text-gray-400 group-hover:text-gray-900 transition-colors duration-200"
                >
                  {t.check}
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-2 transition-transform duration-300"
                    aria-hidden="true"
                  />
                </a>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Offers;