'use client';

// C:\Users\styli\tirumala-mobile\src\sections\Location.tsx

import React, { useMemo, useState } from 'react';
import { MapPin, Phone, Clock, Navigation, MessageCircle } from 'lucide-react';
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
// Constants
// ─────────────────────────────────────────────
const PHONE_NUMBER    = '9848442266';
const WHATSAPP_NUMBER = '919848442266';

const MAPS_DIRECTIONS =
  'https://www.google.com/maps/dir/?api=1&destination=Tirumala+Cell+Point+Narasaraopet';

const MAPS_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.743111005697!2d80.04480427515088!3d16.23601898446869!2m3!1f0!2f0!3f0!3m2!1i1024!2i1028!4f13.1!3m3!1m2!1s0x3af4837bb4b1ea65%3A0x38e6c27c5164cc3f!2sTIRUMALA%20CELL%20POINT!5e0!3m2!1sen!2sin!4v1713123456789!5m2!1sen!2sin';

const TRANSLATIONS: Record<Lang, Translation> = {
  en: {
    visitLabel:   'Visit Our Store',
    titleMain:    'Tirumala Cell Point',
    titleSub:     'Narasaraopeta',
    addrTitle:    'Our Address',
    addrVal:      'Opp. GVR Grand Lodge, Ameensaheb Palem, Arundelpet, Narasaraopeta, AP 522601',
    hoursTitle:   'Working Hours',
    hoursVal:     'Mon – Sat: 10:00 AM – 9:00 PM',
    sundayClosed: 'Sunday: Closed',
    phoneTitle:   'Phone',
    directions:   'Get Directions',
    whatsapp:     'WhatsApp Us',
    mapTitle:     'Tirumala Cell Point on Google Maps',
  },
  te: {
    visitLabel:   'మా షాప్‌ని సందర్శించండి',
    titleMain:    'తిరుమల సెల్ పాయింట్',
    titleSub:     'నరసరావుపేట',
    addrTitle:    'మా చిరునామా',
    addrVal:      'GVR గ్రాండ్ లాడ్జ్ ఎదురుగా, అమీన్‌సాహెబ్ పాలెం, అరుణ్‌దల్‌పేట, నరసరావుపేట, AP 522601',
    hoursTitle:   'పని వేళలు',
    hoursVal:     'సోమ – శని: ఉదయం 10:00 – రాత్రి 9:00',
    sundayClosed: 'ఆదివారం: మూసివేయబడింది',
    phoneTitle:   'ఫోన్',
    directions:   'దిశలు పొందండి',
    whatsapp:     'వాట్సాప్ చేయండి',
    mapTitle:     'గూగుల్ మ్యాప్స్‌లో తిరుమల సెల్ పాయింట్',
  },
};

// ─────────────────────────────────────────────
// Sub-component: Info Row
// ─────────────────────────────────────────────
interface InfoRowProps {
  icon:     React.ReactNode;
  title:    string;
  children: React.ReactNode;
  hoverable?: boolean;
}

const InfoRow = ({ icon, title, children, hoverable = false }: InfoRowProps) => (
  <div className={`flex items-start gap-4 ${hoverable ? 'group' : ''}`}>
    <div className={`p-3 rounded-xl bg-white/5 transition-colors duration-200 shrink-0 ${hoverable ? 'group-hover:bg-[#E53935]/10' : ''}`}>
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

  // ✅ Lazy-load iframe — only embed map after user clicks
  // Avoids loading heavy Google Maps JS on initial page load
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

              {/* Heading */}
              <div>
                <span className="text-[#E53935] font-bold text-sm uppercase tracking-widest mb-4 block">
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
                  icon={<MapPin className="text-[#E53935] w-5 h-5" aria-hidden="true" />}
                  title={t.addrTitle}
                >
                  <p className="text-white/50 leading-relaxed text-sm mt-0.5">
                    {t.addrVal}
                  </p>
                </InfoRow>

                <InfoRow
                  icon={<Clock className="text-[#FBC02D] w-5 h-5" aria-hidden="true" />}
                  title={t.hoursTitle}
                >
                  <p className="text-white/50 text-sm mt-0.5">{t.hoursVal}</p>
                  <p className="text-red-400/80 text-xs font-semibold mt-1 uppercase tracking-wide">
                    {t.sundayClosed}
                  </p>
                </InfoRow>

                {/* ✅ Phone as clickable tel: link */}
                <InfoRow
                  icon={<Phone className="text-[#E53935] w-5 h-5" aria-hidden="true" />}
                  title={t.phoneTitle}
                >
                  <a
                    href={`tel:+${PHONE_NUMBER}`}
                    aria-label={`Call Tirumala Cell Point at ${PHONE_NUMBER}`}
                    className="text-white/50 hover:text-white text-sm mt-0.5 transition-colors duration-200 block"
                  >
                    +91 {PHONE_NUMBER}
                  </a>
                </InfoRow>

              </address>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={MAPS_DIRECTIONS}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Get directions to Tirumala Cell Point on Google Maps"
                  className="inline-flex items-center gap-2 bg-[#E53935] hover:bg-[#c62828] text-white px-8 py-4 rounded-full font-bold transition-all duration-200 hover:scale-[1.03] active:scale-95 shadow-lg shadow-red-600/20"
                >
                  <Navigation size={18} aria-hidden="true" />
                  {t.directions}
                </a>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with Tirumala Cell Point on WhatsApp"
                  className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-full font-bold transition-all duration-200 active:scale-95"
                >
                  <MessageCircle size={18} className="text-green-400" aria-hidden="true" />
                  {t.whatsapp}
                </a>
              </div>
            </div>

            {/* ── RIGHT: Map ── */}
            <div className="relative h-[450px] w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">

              {/*
                ✅ PERFORMANCE: Click-to-load map
                Google Maps iframe loads ~500KB of JS + tiles on page load.
                We show a placeholder until user clicks — massively improves
                Vercel LCP and page weight.
              */}
              {!mapLoaded ? (
                <button
                  onClick={() => setMapLoaded(true)}
                  aria-label="Load Google Maps"
                  className="w-full h-full flex flex-col items-center justify-center bg-white/5 hover:bg-white/8 transition-colors duration-200 cursor-pointer group"
                >
                  {/* Static map preview background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 opacity-80" />

                  <div className="relative z-10 flex flex-col items-center gap-3 text-center px-6">
                    <div className="w-14 h-14 rounded-full bg-[#E53935]/20 border border-[#E53935]/30 flex items-center justify-center group-hover:bg-[#E53935]/30 transition-colors duration-200">
                      <MapPin size={26} className="text-[#E53935]" aria-hidden="true" />
                    </div>
                    <p className="text-white font-bold text-lg">Tirumala Cell Point</p>
                    <p className="text-white/50 text-sm">Narasaraopeta, AP 522601</p>
                    <span className="mt-2 text-xs text-white/30 font-medium uppercase tracking-widest">
                      Click to load map
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
                    // Dark map filter — matches site's dark theme
                    filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)',
                  }}
                  allowFullScreen
                  // ✅ eager here — user already clicked, load immediately
                  loading="eager"
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-label={t.mapTitle}
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