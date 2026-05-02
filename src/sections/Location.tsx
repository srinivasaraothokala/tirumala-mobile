'use client';

// C:\Users\styli\tirumala-mobile\src\sections\Location.tsx

import React, { useMemo, useState } from 'react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { useLanguage } from '../utils/LanguageContext';

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────
type Lang = 'en' | 'te';

interface Translation {
  visitLabel:   string;
  titleMain:    string;
  titleSub:     string;
  addrTitle:    string;
  addrVal:      string;
  hoursTitle:   string;
  hoursVal:     string;
  sundayClosed: string;
  phoneTitle:   string;
  directions:   string;
  whatsapp:     string;
  mapTitle:     string;
}

// ─────────────────────────────────────────────
// Constants & Branding
// ─────────────────────────────────────────────
const PHONE_NUMBER    = '9848442266';
const WHATSAPP_NUMBER = '919848442266';

// ✅ PRO BRANDING COLORS
const FERRARI_RED = '#FF2800'; 
const WA_GREEN    = '#25D366';

const MAPS_DIRECTIONS = 'https://maps.google.com/?q=Tirumala+Cell+Point+Narasaraopeta';
const MAPS_EMBED      = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.123456789!2d80.052!3d16.236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a6136e05d09f7%3A0xc48c6a0c0b9a89d3!2sTirumala%20Cell%20Point!5e0!3m2!1sen!2sin!4v1714580000000!5m2!1sen!2sin';

const TRANSLATIONS: Record<Lang, Translation> = {
  en: {
    visitLabel:   'Get in Touch',
    titleMain:    'Visit Our Store',
    titleSub:     'Narasaraopeta Hub',
    addrTitle:    'Our Address',
    addrVal:      'Opp. GVR Grand Lodge, Ameensaheb Palem, Arundelpet, Narasaraopeta, AP 522601',
    hoursTitle:   'Working Hours',
    hoursVal:     'Mon – Sat: 10:00 AM – 9:00 PM',
    sundayClosed: 'Sunday: Closed',
    phoneTitle:   'Direct Contact',
    directions:   'Get Directions',
    whatsapp:     'Chat on WhatsApp',
    mapTitle:     'Tirumala Cell Point Location',
  },
  te: {
    visitLabel:   'మమ్మల్ని సంప్రదించండి',
    titleMain:    'మా షోరూమ్ సందర్శించండి',
    titleSub:     'నరసరావుపేట హబ్',
    addrTitle:    'చిరునామా',
    addrVal:      'GVR గ్రాండ్ లాడ్జ్ ఎదురుగా, అమీన్‌సాహెబ్ పాలెం, అరుణ్‌దల్‌పేట, నరసరావుపేట, AP 522601',
    hoursTitle:   'పని వేళలు',
    hoursVal:     'సోమ – శని: ఉదయం 10:00 – రాత్రి 9:00',
    sundayClosed: 'ఆదివారం: సెలవు',
    phoneTitle:   'ఫోన్',
    directions:   'మ్యాప్ దిశలు',
    whatsapp:     'వాట్సాప్ చేయండి',
    mapTitle:     'తిరుమల సెల్ పాయింట్ లొకేషన్',
  },
};

// ✅ Production-Ready Official WhatsApp SVG Logo
const WhatsAppLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 448 512" className={className} fill="currentColor">
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.1 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.2-3.2-5.6-.3-8.6 2.4-11.3 2.5-2.4 5.5-6.5 8.3-9.7 2.8-3.3 3.7-5.6 5.5-9.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.5 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
  </svg>
);

// ─────────────────────────────────────────────
// Sub-component: Info Row
// ─────────────────────────────────────────────
interface InfoRowProps {
  icon:     React.ReactNode;
  title:     string;
  children: React.ReactNode;
  hoverable?: boolean;
}

const InfoRow = ({ icon, title, children, hoverable = false }: InfoRowProps) => (
  <div className={`flex items-start gap-4 ${hoverable ? 'group' : ''}`}>
    <div className={`p-3 rounded-xl bg-white/5 transition-colors duration-200 shrink-0 ${hoverable ? 'group-hover:bg-[#FF2800]/10' : ''}`}>
      {icon}
    </div>
    <div>
      <p className="text-white font-semibold text-lg leading-snug">{title}</p>
      {children}
    </div>
  </div>
);

// ─────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────
const Location = () => {
  const { lang } = useLanguage();
  const safeLang = (lang as Lang) ?? 'en';
  const t = useMemo(() => TRANSLATIONS[safeLang], [safeLang]);

  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <section
      id="location"
      aria-label="Store location"
      className="py-24 bg-[#050505] border-t border-white/5"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* ── LEFT: Info ── */}
            <div className="space-y-8">

              {/* Heading: Ferrari Red Highlight */}
              <div>
                <span className="text-[#FF2800] font-bold text-sm uppercase tracking-[0.2em] mb-4 block">
                  {t.visitLabel}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  {t.titleMain}
                  <br />
                  <span className="text-white/40 text-3xl font-medium">{t.titleSub}</span>
                </h2>
              </div>

              {/* Info Rows */}
              <address className="not-italic space-y-6">
                <InfoRow
                  hoverable
                  icon={<MapPin className="text-[#FF2800] w-5 h-5" aria-hidden="true" />}
                  title={t.addrTitle}
                >
                  <p className="text-white/50 leading-relaxed text-sm mt-0.5">{t.addrVal}</p>
                </InfoRow>

                <InfoRow
                  icon={<Clock className="text-[#FBC02D] w-5 h-5" aria-hidden="true" />}
                  title={t.hoursTitle}
                >
                  <p className="text-white/50 text-sm mt-0.5">{t.hoursVal}</p>
                  <p className="text-[#FF2800]/80 text-xs font-semibold mt-1 uppercase tracking-wide">
                    {t.sundayClosed}
                  </p>
                </InfoRow>

                <InfoRow
                  icon={<Phone className="text-[#FF2800] w-5 h-5" aria-hidden="true" />}
                  title={t.phoneTitle}
                >
                  <a
                    href={`tel:+${PHONE_NUMBER}`}
                    className="text-white/50 hover:text-[#FF2800] text-sm mt-0.5 transition-colors duration-200 block"
                  >
                    +91 {PHONE_NUMBER}
                  </a>
                </InfoRow>
              </address>

              {/* ✅ PRO BUTTONS: Ferrari Red & WhatsApp Green */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={MAPS_DIRECTIONS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#FF2800] hover:bg-[#D42200] text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-[1.03] active:scale-95 shadow-xl shadow-red-900/30"
                >
                  <Navigation size={18} fill="white" className="text-white" />
                  {t.directions}
                </a>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-[1.03] active:scale-95 shadow-xl shadow-green-900/20"
                >
                  <WhatsAppLogo className="w-5 h-5" />
                  {t.whatsapp}
                </a>
              </div>
            </div>

            {/* ── RIGHT: Map ── */}
            <div className="relative h-[480px] w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              {!mapLoaded ? (
                <button
                  onClick={() => setMapLoaded(true)}
                  className="w-full h-full flex flex-col items-center justify-center bg-white/5 hover:bg-white/8 transition-colors duration-200 cursor-pointer group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 opacity-80" />
                  <div className="relative z-10 flex flex-col items-center gap-3 text-center px-6">
                    <div className="w-16 h-16 rounded-full bg-[#FF2800]/20 border border-[#FF2800]/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <MapPin size={30} className="text-[#FF2800]" />
                    </div>
                    <p className="text-white font-bold text-xl">Find Us in Narasaraopeta</p>
                    <span className="mt-2 text-xs text-white/40 font-medium uppercase tracking-[0.2em]">
                      Click to activate interactive map
                    </span>
                  </div>
                </button>
              ) : (
                <iframe
                  title={t.mapTitle}
                  src={MAPS_EMBED}
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)',
                  }}
                  allowFullScreen
                  loading="eager"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;