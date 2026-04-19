'use client';

// C:\Users\styli\tirumala-mobile\src\sections\Services.tsx

import React, { useMemo } from 'react';
import { Smartphone, RefreshCcw, Package, Watch, ArrowUpRight, Cable } from 'lucide-react';
import { useLanguage } from '../utils/LanguageContext';

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────
type Lang = 'en' | 'te';

interface CardContent {
  title: string;
  desc:  string;
}

interface Translation {
  label:   string;
  heading: string;
  subtext: string;
  cta:     string;
  cards: {
    new:      CardContent;
    preowned: CardContent;
    openbox:  CardContent;
    accs:     CardContent;
    wear:     CardContent;
  };
}

// ─────────────────────────────────────────────
// Constants — outside component
// ─────────────────────────────────────────────

// ✅ Small cards data — icon + key — defined once, never re-created
const SMALL_CARDS: Array<{
  key:       keyof Translation['cards'];
  icon:      React.ElementType;
  iconClass?: string;
}> = [
  { key: 'preowned', icon: RefreshCcw },
  { key: 'openbox',  icon: Package    },
  { key: 'accs',     icon: Cable      },  // ✅ Cable icon — more accurate than rotated Smartphone
  { key: 'wear',     icon: Watch      },
];

const TRANSLATIONS: Record<Lang, Translation> = {
  en: {
    label:   'Services',
    heading: 'What We Offer',
    subtext: 'Premium mobile solutions tailored for Narasaraopet. From the latest flagships to expert accessories.',
    cta:     'View Collection',
    cards: {
      new: {
        title: 'New Mobiles',
        desc:  'Latest smartphones from top brands like Apple, Samsung, and OnePlus at unbeatable prices.',
      },
      preowned: {
        title: 'Pre-Owned',
        desc:  'Certified second-hand devices with multi-point quality checks.',
      },
      openbox: {
        title: 'Open Box',
        desc:  'Mint condition unused devices with deep discounts.',
      },
      accs: {
        title: 'Accessories',
        desc:  'Premium chargers, cables, and cases for all models.',
      },
      wear: {
        title: 'Wearables',
        desc:  'Latest smartwatches and fitness trackers.',
      },
    },
  },
  te: {
    label:   'మా సేవలు',
    heading: 'మేము అందించేవి',
    subtext: 'నరసరావుపేట కోసం ప్రత్యేకంగా రూపొందించబడిన ప్రీమియం మొబైల్ పరిష్కారాలు. లేటెస్ట్ ఫోన్‌ల నుండి యాక్సెసరీస్ వరకు అన్ని లభించును.',
    cta:     'కలెక్షన్ చూడండి',
    cards: {
      new: {
        title: 'కొత్త మొబైల్స్',
        desc:  'Apple, Samsung మరియు OnePlus వంటి టాప్ బ్రాండ్‌ల నుండి లేటెస్ట్ స్మార్ట్‌ఫోన్‌లు ఉత్తమ ధరలకే.',
      },
      preowned: {
        title: 'ప్రీ-ఓన్డ్',
        desc:  'మల్టీ-పాయింట్ క్వాలిటీ చెక్స్‌తో సర్టిఫైడ్ సెకండ్ హ్యాండ్ మొబైల్స్.',
      },
      openbox: {
        title: 'ఓపెన్ బాక్స్',
        desc:  'భారీ తగ్గింపులతో లభించే వాడని సరికొత్త మింట్ కండిషన్ పరికరాలు.',
      },
      accs: {
        title: 'యాక్సెసరీస్',
        desc:  'అన్ని మోడళ్ల కోసం ప్రీమియం ఛార్జర్‌లు, కేబుల్స్ మరియు కేస్‌లు.',
      },
      wear: {
        title: 'వేరబుల్స్',
        desc:  'లేటెస్ట్ స్మార్ట్‌వాచ్‌లు మరియు ఫిట్‌నెస్ ట్రాకర్‌లు.',
      },
    },
  },
};

// ─────────────────────────────────────────────
// Sub-component: Small Service Card
// ─────────────────────────────────────────────
interface SmallCardProps {
  icon:  React.ElementType;
  title: string;
  desc:  string;
}

const SmallCard = ({ icon: Icon, title, desc }: SmallCardProps) => (
  <article className="group p-8 rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:border-gray-900 hover:shadow-lg flex flex-col">
    <div
      aria-hidden="true"
      className="w-10 h-10 text-gray-400 group-hover:text-gray-900 transition-colors duration-200 mb-6"
    >
      <Icon size={28} strokeWidth={1.5} />
    </div>
    <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
  </article>
);

// ─────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────
const Services = () => {
  const { lang } = useLanguage();
  const safeLang = (lang as Lang) ?? 'en';
  const t = useMemo(() => TRANSLATIONS[safeLang], [safeLang]);

  return (
    <section
      id="services"
      aria-label="Our services"
      className="py-24 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* ── Header ── */}
        <div className="mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#E53935] mb-3 block">
            {t.label}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            {t.heading}
          </h2>
          <p className="text-gray-500 max-w-lg text-lg leading-relaxed">
            {t.subtext}
          </p>
        </div>

        {/* ── Bento Layout ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">

          {/* LEFT — Hero Card */}
          <article className="group relative flex flex-col justify-between p-10 rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100/50 border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-200/50 overflow-hidden">

            <div className="relative z-10">
              <div
                aria-hidden="true"
                className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-[#E53935]"
              >
                <Smartphone size={24} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">
                {t.cards.new.title}
              </h3>
              <p className="text-gray-600 text-lg max-w-xs leading-relaxed">
                {t.cards.new.desc}
              </p>
            </div>

            {/*
              ✅ CTA — proper anchor instead of cursor-pointer div
              Links to #mobiles section for in-page navigation
            */}
            <a
              href="#mobiles"
              aria-label={`${t.cta} — ${t.cards.new.title}`}
              className="relative z-10 mt-12 inline-flex items-center gap-2 text-sm font-bold text-gray-900 group-hover:gap-3 transition-all duration-200"
            >
              {t.cta}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>

            {/* Decorative blob */}
            <div
              aria-hidden="true"
              className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/40 rounded-full blur-3xl group-hover:bg-red-50 transition-colors duration-500"
            />
          </article>

          {/* RIGHT — 2×2 Small Cards */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            role="list"
            aria-label="Service categories"
          >
            {SMALL_CARDS.map(({ key, icon }) => (
              <div key={key} role="listitem">
                <SmallCard
                  icon={icon}
                  title={t.cards[key].title}
                  desc={t.cards[key].desc}
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;