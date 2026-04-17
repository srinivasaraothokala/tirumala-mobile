'use client';

import React, { useState } from 'react';
import { Maximize2, X } from 'lucide-react';
import { useLanguage } from '../utils/LanguageContext';

// Import local images - extract .src immediately to get a plain string URL
import shopMainPicRaw from '../assets/shop main pic .png';
import secondPicRaw from '../assets/your-second-image.png';
import openBoxPicRaw from '../assets/open box.png';
import thirdPicRaw from '../assets/your third image.png';
import preOwnedPicRaw from '../assets/pre owned.png';
import accessoriesPicRaw from '../assets/Accessories.png';
import wearablesPicRaw from '../assets/Wearables.png';

// Safely resolve to string — works for both Next.js StaticImageData and plain string
const resolve = (img: { src: string } | string): string =>
  typeof img === 'string' ? img : img.src;

const IMAGES = [
  {
    id: 1,
    url: resolve(shopMainPicRaw),
    alt: 'Premium Store Interior',
    className: 'md:col-span-1 md:row-span-2 h-[400px] md:h-[616px]',
  },
  {
    id: 2,
    url: resolve(secondPicRaw),
    alt: 'Smartphone Display',
    className: 'h-[300px]',
  },
  {
    id: 3,
    url: resolve(openBoxPicRaw),
    alt: 'Tirumala Open Box - Premium Unboxing Experience',
    className: 'h-[300px]',
  },
  {
    id: 4,
    url: resolve(thirdPicRaw),
    alt: 'Store Experience',
    className: 'h-[300px]',
  },
  {
    id: 5,
    url: resolve(preOwnedPicRaw),
    alt: 'Pre Owned Phones',
    className: 'h-[300px]',
  },
  {
    id: 6,
    url: resolve(accessoriesPicRaw),
    alt: 'Mobile Accessories',
    className: 'h-[300px]',
  },
  {
    id: 7,
    url: resolve(wearablesPicRaw),
    alt: 'Wearables Collection',
    className: 'h-[300px]',
  },
];

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const { lang } = useLanguage();

  const t = {
    en: {
      label: 'Gallery',
      heading: 'Inside Our Store',
      subtext: "A glimpse into Narasaraopet's most premium mobile shopping experience.",
      view: 'View Space',
    },
    te: {
      label: 'గ్యాలరీ',
      heading: 'మా షాప్ లోపల',
      subtext: 'నరసరావుపేటలో అత్యుత్తమ మొబైల్ షాపింగ్ అనుభవం యొక్క ఒక చిన్న చూపు.',
      view: 'చూడండి',
    },
  };

  const content = lang === 'en' ? t.en : t.te;

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Header */}
        <div className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#E53935] mb-3 block">
            {content.label}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            {content.heading}
          </h2>
          <p className="text-gray-500 max-w-lg text-lg leading-relaxed">
            {content.subtext}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {IMAGES.map((img) => (
            <div
              key={img.id}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${img.className}`}
              onClick={() => setSelectedImg(img.url)}
            >
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex flex-col items-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-center px-4">
                  <Maximize2 className="text-white mb-2" size={24} />
                  <span className="text-white text-xs font-bold uppercase tracking-widest leading-relaxed">
                    {content.view}
                  </span>
                </div>
              </div>

              {/* Bottom shadow */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300"
          onClick={() => setSelectedImg(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            onClick={() => setSelectedImg(null)}
          >
            <X size={32} />
          </button>
          <img
            src={selectedImg}
            className="max-w-full max-h-full rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
            alt="Expanded view"
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;