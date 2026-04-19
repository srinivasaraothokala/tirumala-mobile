'use client';

// C:\Users\styli\tirumala-mobile\src\components\Footer.tsx

import React, { useMemo } from 'react';
import { MessageCircle, Phone, MapPin, Smartphone } from 'lucide-react';
import { SITE_CONFIG } from '../data/content';
import { useLanguage } from '../utils/LanguageContext';

// ─────────────────────────────────────────────
// ✅ FIX 1: Explicit type for language
// This tells TypeScript lang can ONLY be 'en' | 'te'
// which allows it to safely index TRANSLATIONS and NAV_LINKS
// ─────────────────────────────────────────────
type Lang = 'en' | 'te';

// ─────────────────────────────────────────────
// Inline SVG Icons
// ─────────────────────────────────────────────
const InstagramIcon = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const YoutubeIcon = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
  </svg>
);

const FacebookIcon = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

// ─────────────────────────────────────────────
// ✅ FIX 2: Type NavLink explicitly so map callback isn't 'any'
// ─────────────────────────────────────────────
interface NavLink {
  name: string;
  href: string;
}

// ─────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────
const SOCIAL_LINKS = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/tirumala_cell_point/',
    icon: InstagramIcon,
    hoverColor: 'hover:text-pink-500 hover:border-pink-200',
    label: '@tirumala_cell_point',
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@TirumalaMobilestore/shorts',
    icon: YoutubeIcon,
    hoverColor: 'hover:text-red-600 hover:border-red-200',
    label: '@TirumalaMobilestore',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/tirumala_cell_point',
    icon: FacebookIcon,
    hoverColor: 'hover:text-blue-600 hover:border-blue-200',
    label: 'Tirumala Cell Point',
  },
] as const;

// ✅ FIX 3: Type the Record explicitly with Lang so indexing is safe
const NAV_LINKS: Record<Lang, NavLink[]> = {
  en: [
    { name: 'Home',        href: '#'            },
    { name: 'Mobiles',     href: '#mobiles'     },
    { name: 'Accessories', href: '#accessories' },
    { name: 'Contact',     href: '#contact'     },
  ],
  te: [
    { name: 'హోమ్',        href: '#'            },
    { name: 'మొబైల్స్',    href: '#mobiles'     },
    { name: 'యాక్సెసరీస్', href: '#accessories' },
    { name: 'కాంటాక్ట్',   href: '#contact'     },
  ],
};

// ✅ FIX 4: Type translations Record with Lang too
interface Translation {
  desc:         string;
  linksTitle:   string;
  contactTitle: string;
  followTitle:  string;
  wa:           string;
  rights:       string;
  auth:         string;
  spare:        string;
}

const TRANSLATIONS: Record<Lang, Translation> = {
  en: {
    desc:         'Your trusted destination for premium mobile devices and expert service in Narasaraopet. Best price deals, every day.',
    linksTitle:   'Quick Links',
    contactTitle: 'Contact Us',
    followTitle:  'Follow Us',
    wa:           'Chat on WhatsApp',
    rights:       'All rights reserved.',
    auth:         'Authorized Retailer',
    spare:        'Genuine Spares',
  },
  te: {
    desc:         'నరసరావుపేటలో ప్రీమియం మొబైల్ పరికరాలు మరియు నిపుణుల సేవ కోసం మీ నమ్మకమైన దుకాణం. ప్రతిరోజూ ఉత్తమ ధరలు.',
    linksTitle:   'త్వరిత లింకులు',
    contactTitle: 'మమ్మల్ని సంప్రదించండి',
    followTitle:  'మమ్మల్ని అనుసరించండి',
    wa:           'వాట్సాప్ చాట్',
    rights:       'అన్ని హక్కులు ప్రత్యేకించబడినవి.',
    auth:         'అధికారిక విక్రేత',
    spare:        'ఒరిజినల్ స్పేర్స్',
  },
};

// ─────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────
const Footer = () => {
  const { lang } = useLanguage();

  // ✅ FIX 5: Cast lang to Lang type so TypeScript knows it's 'en' | 'te'
  const safeLang = (lang as Lang) ?? 'en';

  const currentYear = useMemo(() => new Date().getFullYear(), []);
  const t      = TRANSLATIONS[safeLang];
  const links  = NAV_LINKS[safeLang];
  const location = safeLang === 'en'
    ? `Main Road, ${SITE_CONFIG.location}`
    : `మెయిన్ రోడ్, ${SITE_CONFIG.location}`;

  return (
    <footer className="bg-gray-50 border-t border-gray-200" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">

          {/* ── Col 1: Brand ── */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#E53935] rounded-lg flex items-center justify-center shadow-sm" aria-hidden="true">
                <Smartphone className="text-white w-5 h-5" />
              </div>
              <span className="font-bold text-xl tracking-tight text-gray-900 uppercase">
                Tirumala<span className="text-[#E53935]">.</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              {t.desc}
            </p>
          </div>

          {/* ── Col 2: Navigation ── */}
          <nav aria-label="Footer navigation">
            <h4 className="font-bold text-gray-900 uppercase tracking-widest text-xs mb-6">
              {t.linksTitle}
            </h4>
            {/* ✅ FIX 6: link is typed as NavLink — no more implicit 'any' */}
            <ul className="space-y-3" role="list">
              {links.map((link: NavLink) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-[#E53935] text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* ── Col 3: Contact ── */}
          <div>
            <h4 className="font-bold text-gray-900 uppercase tracking-widest text-xs mb-6">
              {t.contactTitle}
            </h4>
            <address className="not-italic space-y-3 mb-6">
              <div className="flex items-center gap-3 text-gray-600 text-sm">
                <Phone size={15} className="text-gray-400 shrink-0" aria-hidden="true" />
                <a
                  href={`tel:+${SITE_CONFIG.phone}`}
                  className="hover:text-[#E53935] transition-colors duration-200"
                >
                  {SITE_CONFIG.phone}
                </a>
              </div>
              <div className="flex items-start gap-3 text-gray-600 text-sm">
                <MapPin size={15} className="text-gray-400 shrink-0 mt-0.5" aria-hidden="true" />
                <span>{location}</span>
              </div>
            </address>

            <a
              href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-full text-sm font-bold hover:bg-green-50 hover:border-green-300 hover:text-green-700 transition-all duration-200 active:scale-95 shadow-sm"
            >
              <MessageCircle size={15} className="text-green-600" aria-hidden="true" />
              {t.wa}
            </a>
          </div>

          {/* ── Col 4: Social Media ── */}
          <div>
            <h4 className="font-bold text-gray-900 uppercase tracking-widest text-xs mb-6">
              {t.followTitle}
            </h4>
            <ul className="space-y-3" role="list">
              {SOCIAL_LINKS.map(({ name, href, icon: Icon, hoverColor, label }) => (
                <li key={name}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow us on ${name}`}
                    className={`flex items-center gap-3 text-gray-500 ${hoverColor} text-sm transition-all duration-200 group`}
                  >
                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-gray-200 shadow-sm group-hover:shadow-md transition-all duration-200">
                      <Icon size={15} />
                    </span>
                    <span className="font-medium">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* ── Bottom Bar ── */}
        <div className="mt-12 pt-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-gray-400 text-xs font-medium uppercase tracking-widest">
              © {currentYear} Tirumala Cell Point.{' '}
              <span>{t.rights}</span>
            </p>
            <div className="flex items-center gap-4">
              <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider px-2 py-1 border border-gray-200 rounded-full">
                {t.auth}
              </span>
              <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider px-2 py-1 border border-gray-200 rounded-full">
                {t.spare}
              </span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;