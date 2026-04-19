'use client';

// C:\Users\styli\tirumala-mobile\src\sections\Hero.tsx

import React, { useMemo } from 'react';
import { Phone, MessageCircle, ArrowUpRight, ShieldCheck, Wrench } from 'lucide-react';
import { SITE_CONFIG } from '../data/content';
import { useLanguage } from '../utils/LanguageContext';

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────
type Lang = 'en' | 'te';

interface HeroTranslation {
  badge:        string;
  titleMain:    string;
  titleSub:     string;
  subtitle:     string;
  description:  string;
  callBtn:      string;
  waBtn:        string;
  trust1:       string;
  trust1Sub:    string;
  trust2:       string;
  trust2Sub:    string;
  arrival:      string;
  arrivalModel: string;
  imgAlt:       string;
}

// ─────────────────────────────────────────────
// Constants — outside component, no re-creation on render
// ─────────────────────────────────────────────
const TRANSLATIONS: Record<Lang, HeroTranslation> = {
  en: {
    badge:        'Trusted Mobile Store in Narasaraopet',
    titleMain:    'Tirumala',
    titleSub:     'Cell Point',
    subtitle:     'Sales & Service – Best Price Deals',
    description:  'Discover a curated selection of New Mobiles, certified Second-Hand, and Open Box devices alongside premium accessories tailored for your lifestyle.',
    callBtn:      'Call Now',
    waBtn:        'WhatsApp',
    trust1:       'Authenticity',
    trust1Sub:    '100% Genuine Products',
    trust2:       'Support',
    trust2Sub:    'Expert Repair Service',
    arrival:      'New Arrival',
    arrivalModel: 'Open Box Series 2026',
    imgAlt:       'Latest smartphones at Tirumala Cell Point',
  },
  te: {
    badge:        'నరసరావుపేటలో విశ్వసనీయ మొబైల్ దుకాణం',
    titleMain:    'తిరుమల',
    titleSub:     'సెల్ పాయింట్',
    subtitle:     'సేల్స్ & సర్వీస్ – ఉత్తమ ధరలు',
    description:  'కొత్త మొబైల్‌లు, సర్టిఫైడ్ సెకండ్ హ్యాండ్, మరియు ఓపెన్ బాక్స్ పరికరాలతో పాటు మీ జీవనశైలికి తగిన ప్రీమియం యాక్సెసరీలను మా వద్ద పొందండి.',
    callBtn:      'కాల్ చేయండి',
    waBtn:        'వాట్సాప్',
    trust1:       'నిజాయితీ',
    trust1Sub:    '100% ఒరిజినల్ ఉత్పత్తులు',
    trust2:       'మద్దతు',
    trust2Sub:    'నిపుణుల రిపేర్ సర్వీస్',
    arrival:      'కొత్తగా వచ్చినవి',
    arrivalModel: 'ఓపెన్ బాక్స్ సిరీస్ 2026',
    imgAlt:       'తిరుమల సెల్ పాయింట్‌లో తాజా స్మార్ట్‌ఫోన్లు',
  },
};

// Unsplash image — production tip: replace with your own hosted image
// for best performance and to avoid external dependency
const HERO_IMAGE =
  'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&q=80&w=1200';

// ─────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────
const Hero = () => {
  const { lang } = useLanguage();

  // ✅ Cast lang to Lang type — prevents TypeScript 'any' index errors
  const safeLang = (lang as Lang) ?? 'en';
  const t = useMemo(() => TRANSLATIONS[safeLang], [safeLang]);

  return (
    <section
      aria-label="Hero section"
      className="relative min-h-screen flex items-center bg-[#fafafa] overflow-hidden pt-16"
    >
      {/* Background accent — pointer-events-none so it never blocks clicks */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-100/50 to-transparent pointer-events-none"
      />

      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left Column: Content ── */}
          <div className="flex flex-col items-start animate-in fade-in slide-in-from-left-6 duration-1000 ease-out">

            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 mb-8 shadow-sm"
              aria-label="Store description badge"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#E53935]" aria-hidden="true" />
              <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-gray-500">
                {t.badge}
              </span>
            </div>

            {/* Heading — h1 for SEO */}
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight leading-[1.05] mb-6">
              {t.titleMain}
              <br />
              <span className="text-gray-900/40 font-medium">{t.titleSub}</span>
            </h1>

            {/* Subheading */}
            <h2 className="text-xl md:text-2xl text-gray-600 font-medium mb-4 tracking-tight">
              {t.subtitle}
            </h2>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-500 max-w-xl leading-relaxed mb-10">
              {t.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              {/* ✅ tel: link — properly formatted with country code */}
              <a
                href={`tel:+${SITE_CONFIG.phone}`}
                aria-label={`Call Tirumala Cell Point at ${SITE_CONFIG.phone}`}
                className="group flex items-center gap-2 px-8 py-3.5 bg-[#E53935] text-white rounded-full font-semibold transition-all duration-300 hover:bg-[#c62828] hover:scale-[1.02] active:scale-95 shadow-lg shadow-red-900/10"
              >
                <Phone size={18} aria-hidden="true" />
                {t.callBtn}
              </a>

              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp"
                className="group flex items-center gap-2 px-8 py-3.5 bg-white border border-gray-300 text-gray-700 rounded-full font-semibold transition-all duration-300 hover:bg-green-50 hover:border-green-300 hover:text-green-700 active:scale-95"
              >
                <MessageCircle size={18} className="text-green-600" aria-hidden="true" />
                {t.waBtn}
              </a>
            </div>

            {/* Trust Markers */}
            <div className="mt-16 pt-8 border-t border-gray-200 flex gap-10">
              <div className="flex items-start gap-3">
                <ShieldCheck
                  size={18}
                  className="text-[#E53935] mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                    {t.trust1}
                  </p>
                  <p className="text-sm font-medium text-gray-800">{t.trust1Sub}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Wrench
                  size={18}
                  className="text-[#E53935] mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                    {t.trust2}
                  </p>
                  <p className="text-sm font-medium text-gray-800">{t.trust2Sub}</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right Column: Visual (Desktop Only) ── */}
          <div
            className="hidden lg:block relative animate-in fade-in zoom-in-95 duration-1000 delay-200"
            aria-hidden="true"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-gray-200 group">
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 z-10" />

              {/*
                ✅ IMAGE PERFORMANCE:
                - fetchpriority="high" → browser downloads this first (LCP element)
                - loading="eager"      → don't lazy-load above-the-fold images
                - decoding="async"     → decode off main thread, no jank
                - width/height         → prevents layout shift (CLS)
              */}
              <img
                src={HERO_IMAGE}
                alt={t.imgAlt}
                width={1200}
                height={1500}
                fetchPriority="high"
                loading="eager"
                decoding="async"
                className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur-sm rounded-xl border border-white/20 shadow-xl z-20">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs font-bold text-[#E53935] uppercase mb-1">
                      {t.arrival}
                    </p>
                    <p className="text-lg font-bold text-gray-900 tracking-tight">
                      {t.arrivalModel}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-white shrink-0">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#FBC02D] rounded-2xl -z-10 rotate-12 opacity-20" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-gray-200 rounded-full -z-10 opacity-30 blur-3xl" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;