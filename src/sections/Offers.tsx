'use client';

import React from 'react';
import { RefreshCcw, Package, Gift, CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '../data/content';
import { useLanguage } from '../utils/LanguageContext';

const Offers = () => {
  const { lang } = useLanguage();

  // Translation Mapping
  const content = {
    en: {
      heading: <>Best Price Deals <br className="hidden md:block" /> in Narasaraopet</>,
      subheading: "Upgrade your tech today with our exclusive seasonal offers and unbeatable service.",
      cta: "Contact Now",
      features: ['Best Price Guarantee', 'Exchange Available', 'Genuine Spares'],
      check: "Check Eligibility",
      cards: [
        {
          title: "Exchange Offer",
          description: "Upgrade your old phone easily with the best market value valuation.",
          badge: "Save More"
        },
        {
          title: "Open Box Deals",
          description: "Like-new premium phones at significantly lower prices with warranty.",
          badge: "Top Seller"
        },
        {
          title: "Accessories Combo",
          description: "Get massive discounts when you bundle cases, glass, and chargers.",
          badge: "Best Value"
        }
      ]
    },
    te: {
      heading: <>నరసరావుపేటలో <br className="hidden md:block" /> ఉత్తమ ధరలు</>,
      subheading: "మా ప్రత్యేక సీజనల్ ఆఫర్లు మరియు అద్భుతమైన సర్వీస్‌తో ఈరోజే మీ టెక్నాలజీని అప్‌గ్రేడ్ చేయండి.",
      cta: "సంప్రదించండి",
      features: ['ఉత్తమ ధర హామీ', 'ఎక్స్ఛేంజ్ సౌకర్యం', 'ఒరిజినల్ స్పేర్స్'],
      check: "అర్హతను తనిఖీ చేయండి",
      cards: [
        {
          title: "ఎక్స్ఛేంజ్ ఆఫర్",
          description: "మీ పాత ఫోన్‌ను ఉత్తమ మార్కెట్ ధరతో సులభంగా అప్‌గ్రేడ్ చేసుకోండి.",
          badge: "ఎక్కువ ఆదా"
        },
        {
          title: "ఓపెన్ బాక్స్ డీల్స్",
          description: "వారంటీతో కూడిన సరికొత్త ప్రీమియం ఫోన్‌లు అతి తక్కువ ధరకే పొందండి.",
          badge: "టాప్ సెల్లర్"
        },
        {
          title: "యాక్సెసరీస్ కాంబో",
          description: "కేస్‌లు, గ్లాస్ మరియు ఛార్జర్‌లను బండిల్‌గా కొనుగోలు చేసి భారీ తగ్గింపు పొందండి.",
          badge: "ఉత్తమ విలువ"
        }
      ]
    }
  };

  const t = lang === 'en' ? content.en : content.te;

  // Icons array to map back to translated cards
  const icons = [RefreshCcw, Package, Gift];

  return (
    <section id="offers" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Main Highlight Banner */}
        <div className="relative mb-12 rounded-[2.5rem] overflow-hidden group shadow-2xl shadow-red-100">
          <div className="absolute inset-0 bg-gradient-to-br from-[#E53935] via-[#f05a41] to-[#FBC02D] bg-[length:200%_200%] animate-gradient" />
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

          <div className="relative z-10 p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight leading-tight">
                {t.heading}
              </h2>
              <p className="text-white/90 text-lg md:text-xl font-medium mb-8 max-w-xl">
                {t.subheading}
              </p>
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
                {t.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                    <CheckCircle2 size={16} className="text-[#FBC02D]" />
                    <span className="text-white text-xs font-bold uppercase tracking-wider">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 bg-white text-gray-900 font-bold rounded-full shadow-2xl shadow-red-900/20 hover:scale-105 transition-all duration-300 active:scale-95 group"
              >
                <MessageCircle size={20} className="text-green-600" />
                {t.cta}
                <ArrowRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="hidden lg:block relative">
              <div className="w-64 h-64 bg-white/20 rounded-full blur-3xl animate-pulse" />
              <Package size={120} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/20 rotate-12" />
            </div>
          </div>
        </div>

        {/* Offer Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.cards.map((offer, index) => {
            const Icon = icons[index];
            return (
              <div 
                key={index}
                className="group p-8 rounded-3xl border border-gray-100 bg-white transition-all duration-500 hover:border-gray-900 hover:shadow-2xl hover:shadow-gray-100 flex flex-col items-start"
              >
                <div className="mb-6 p-4 rounded-2xl bg-gray-50 text-gray-400 group-hover:bg-[#E53935] group-hover:text-white transition-all duration-300">
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                
                <span className="text-[10px] font-black uppercase tracking-widest text-[#E53935] mb-2">
                  {offer.badge}
                </span>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight group-hover:text-[#E53935] transition-colors">
                  {offer.title}
                </h3>
                
                <p className="text-gray-500 leading-relaxed font-medium">
                  {offer.description}
                </p>

                <div className="mt-8 pt-6 border-t border-gray-50 w-full flex items-center justify-between text-sm font-bold text-gray-400 group-hover:text-gray-900 transition-colors cursor-pointer">
                  {t.check}
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Offers;