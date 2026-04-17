'use client';

import React from 'react';
import { Phone, MessageCircle, ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG } from '../data/content';
import { useLanguage } from '../utils/LanguageContext';

const Hero = () => {
  const { lang } = useLanguage();

  // Translation Map
  const t = {
    en: {
      badge: "Trusted Mobile Store in Narasaraopet",
      titleMain: "Tirumala",
      titleSub: "Cell Point",
      subtitle: "Sales & Service – Best Price Deals",
      description: "Discover a curated selection of New Mobiles, certified Second-Hand, and Open Box devices alongside premium accessories tailored for your lifestyle.",
      callBtn: "Call Now",
      waBtn: "WhatsApp",
      trust1: "Authenticity",
      trust1Sub: "100% Genuine Products",
      trust2: "Support",
      trust2Sub: "Expert Repair Service",
      arrival: "New Arrival",
      arrivalModel: "Open Box Series 2026"
    },
    te: {
      badge: "నరసరావుపేటలో విశ్వసనీయ మొబైల్ దుకాణం",
      titleMain: "తిరుమల",
      titleSub: "సెల్ పాయింట్",
      subtitle: "సేల్స్ & సర్వీస్ – ఉత్తమ ధరలు",
      description: "కొత్త మొబైల్‌లు, సర్టిఫైడ్ సెకండ్ హ్యాండ్, మరియు ఓపెన్ బాక్స్ పరికరాలతో పాటు మీ జీవనశైలికి తగిన ప్రీమియం యాక్సెసరీలను మా వద్ద పొందండి.",
      callBtn: "కాల్ చేయండి",
      waBtn: "వాట్సాప్",
      trust1: "నిజాయితీ",
      trust1Sub: "100% ఒరిజినల్ ఉత్పత్తులు",
      trust2: "మద్దతు",
      trust2Sub: "నిపుణుల రిపేర్ సర్వీస్",
      arrival: "కొత్తగా వచ్చినవి",
      arrivalModel: "ఓపెన్ బాక్స్ సిరీస్ 2026"
    }
  };

  const content = lang === 'en' ? t.en : t.te;

  return (
    <section className="relative min-h-screen flex items-center bg-[#fafafa] overflow-hidden pt-16">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-100/50 to-transparent pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Content */}
          <div className="flex flex-col items-start animate-in fade-in slide-in-from-left-6 duration-1000 ease-out">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 mb-8 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E53935]" />
              <span className={`text-[11px] font-bold uppercase tracking-[0.15em] text-gray-500 ${lang === 'te' ? 'font-sans' : ''}`}>
                {content.badge}
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight leading-[1.05] mb-6">
              {content.titleMain} <br />
              <span className="text-gray-900/40 font-medium">{content.titleSub}</span>
            </h1>

            {/* Subheading */}
            <h2 className="text-xl md:text-2xl text-gray-600 font-medium mb-4 tracking-tight">
              {content.subtitle}
            </h2>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-500 max-w-xl leading-relaxed mb-10">
              {content.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="group flex items-center gap-2 px-8 py-3.5 bg-[#E53935] text-white rounded-full font-semibold transition-all duration-300 hover:bg-[#c62828] hover:scale-[1.02] active:scale-95 shadow-lg shadow-red-900/10"
              >
                <Phone size={18} />
                {content.callBtn}
              </a>

              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                className="group flex items-center gap-2 px-8 py-3.5 bg-white border border-gray-300 text-gray-700 rounded-full font-semibold transition-all duration-300 hover:bg-gray-50 hover:border-gray-400 active:scale-95"
              >
                <MessageCircle size={18} className="text-green-600" />
                {content.waBtn}
              </a>
            </div>

            {/* Minimal Trust markers */}
            <div className="mt-16 pt-8 border-t border-gray-200 flex gap-10">
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{content.trust1}</p>
                <p className="text-sm font-medium text-gray-800">{content.trust1Sub}</p>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{content.trust2}</p>
                <p className="text-sm font-medium text-gray-800">{content.trust2Sub}</p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual (Desktop Only) */}
          <div className="hidden lg:block relative animate-in fade-in zoom-in-95 duration-1000 delay-200">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-gray-200 group">
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
              <img
                src="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&q=80&w=1200"
                alt="Latest Smartphone Display"
                className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay Tag */}
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur-sm rounded-xl border border-white/20 shadow-xl">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs font-bold text-[#E53935] uppercase mb-1">{content.arrival}</p>
                    <p className="text-lg font-bold text-gray-900 tracking-tight">{content.arrivalModel}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-white">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Floating Element */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#FBC02D] rounded-2xl -z-10 rotate-12 opacity-20" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-gray-200 rounded-full -z-10 opacity-30 blur-3xl" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;