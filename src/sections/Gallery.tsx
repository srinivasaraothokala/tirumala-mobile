'use client';

// C:\Users\styli\tirumala-mobile\src\sections\Gallery.tsx

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage, type Lang } from '../utils/LanguageContext';

// ✅ WebP imports — faster loading
import shopMainPicRaw    from '../assets/shop main pic .webp';
import secondPicRaw      from '../assets/your-second-image.webp';
import openBoxPicRaw     from '../assets/open box.webp';
import thirdPicRaw       from '../assets/your third image.webp';
import preOwnedPicRaw    from '../assets/pre owned.webp';
import accessoriesPicRaw from '../assets/Accessories.webp';
import wearablesPicRaw   from '../assets/Wearables.webp';

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────
interface GalleryImage {
  id:       number;
  url:      string;
  alt:      string;
  altTe:    string;
  span:     string;
  priority?: boolean;
}

interface Translation {
  label:        string;
  heading:      string;
  headingAccent:string;
  subtext:      string;
  view:         string;
  close:        string;
  prev:         string;
  next:         string;
  imgOf:        string;
}

// ─────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────
const resolve = (img: { src: string } | string): string =>
  typeof img === 'string' ? img : img.src;

// ─────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────
const IMAGES: GalleryImage[] = [
  {
    id:       1,
    url:      resolve(shopMainPicRaw),
    alt:      'Premium Store Interior',
    altTe:    'ప్రీమియం స్టోర్ ఇంటీరియర్',
    span:     'md:col-span-2 md:row-span-2 h-[380px] md:h-full',
    priority: true,
  },
  {
    id:    2,
    url:   resolve(secondPicRaw),
    alt:   'Smartphone Display',
    altTe: 'స్మార్ట్‌ఫోన్ డిస్‌ప్లే',
    span:  'h-[180px]',
  },
  {
    id:    3,
    url:   resolve(openBoxPicRaw),
    alt:   'Open Box Collection',
    altTe: 'ఓపెన్ బాక్స్ కలెక్షన్',
    span:  'h-[180px]',
  },
  {
    id:    4,
    url:   resolve(thirdPicRaw),
    alt:   'Store Experience',
    altTe: 'స్టోర్ అనుభవం',
    span:  'h-[180px]',
  },
  {
    id:    5,
    url:   resolve(preOwnedPicRaw),
    alt:   'Pre-Owned Phones',
    altTe: 'సెకండ్ హ్యాండ్ ఫోన్లు',
    span:  'h-[180px]',
  },
  {
    id:    6,
    url:   resolve(accessoriesPicRaw),
    alt:   'Mobile Accessories',
    altTe: 'మొబైల్ యాక్సెసరీస్',
    span:  'h-[180px]',
  },
  {
    id:    7,
    url:   resolve(wearablesPicRaw),
    alt:   'Wearables Collection',
    altTe: 'వేరబుల్స్ కలెక్షన్',
    span:  'h-[180px]',
  },
];

const TRANSLATIONS: Record<Lang, Translation> = {
  en: {
    label:         'Gallery',
    heading:       'Inside Our',
    headingAccent: 'Store',
    subtext:       "A glimpse into Narasaraopet's most premium mobile shopping experience.",
    view:          'View',
    close:         'Close',
    prev:          'Previous image',
    next:          'Next image',
    imgOf:         'of',
  },
  te: {
    label:         'గ్యాలరీ',
    heading:       'మా షాప్',
    headingAccent: 'లోపల',
    subtext:       'నరసరావుపేటలో అత్యుత్తమ మొబైల్ షాపింగ్ అనుభవం యొక్క ఒక చిన్న చూపు.',
    view:          'చూడండి',
    close:         'మూసివేయండి',
    prev:          'మునుపటి చిత్రం',
    next:          'తదుపరి చిత్రం',
    imgOf:         '/',
  },
};

// ─────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────
const Gallery = () => {
  const { lang }  = useLanguage();
  const safeLang  = (lang as Lang) ?? 'en';
  const t         = useMemo(() => TRANSLATIONS[safeLang], [safeLang]);

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox  = useCallback((i: number) => setLightboxIndex(i), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const goPrev        = useCallback(() => setLightboxIndex(i => i === null ? null : (i - 1 + IMAGES.length) % IMAGES.length), []);
  const goNext        = useCallback(() => setLightboxIndex(i => i === null ? null : (i + 1) % IMAGES.length), []);

  // Keyboard + scroll lock
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape')     closeLightbox();
      if (e.key === 'ArrowLeft')  goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, closeLightbox, goPrev, goNext]);

  const currentImage = lightboxIndex !== null ? IMAGES[lightboxIndex] : null;

  return (
    <>
      <section
        id="gallery"
        aria-label="Store gallery"
        className="py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">

          {/* ── Header ── */}
          <div className="mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#E53935] mb-3 block">
              {t.label}
            </span>
            {/* ✅ Clean heading — black + one red accent word */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              {t.heading}{' '}
              <span className="text-[#E53935]">{t.headingAccent}</span>
            </h2>
            <p className="text-gray-500 max-w-lg text-lg leading-relaxed">
              {t.subtext}
            </p>
          </div>

          {/* ── Bento Grid ── */}
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-3 md:h-[520px]">
            {IMAGES.map((img, index) => (
              <div
                key={img.id}
                role="button"
                tabIndex={0}
                aria-label={`${safeLang === 'en' ? img.alt : img.altTe} — ${t.view}`}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer ${img.span}`}
                onClick={() => openLightbox(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openLightbox(index);
                  }
                }}
              >
                {/*
                  ✅ Simple zoom only on hover — clean, no overlays
                  group-hover:scale-105 = subtle zoom
                  duration-500 = smooth transition
                */}
                <img
                  src={img.url}
                  alt={safeLang === 'en' ? img.alt : img.altTe}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  loading={img.priority ? 'eager' : 'lazy'}
                  decoding="async"
                  {...(img.priority ? { fetchPriority: 'high' as const } : {})}
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Lightbox ── */}
      {currentImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={safeLang === 'en' ? currentImage.alt : currentImage.altTe}
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-200"
            onClick={closeLightbox}
            aria-label={t.close}
          >
            <X size={18} />
          </button>

          {/* Prev */}
          <button
            className="absolute left-4 md:left-8 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-[#E53935] flex items-center justify-center text-white transition-colors duration-200"
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            aria-label={t.prev}
          >
            <ChevronLeft size={20} />
          </button>

          {/* Image */}
          <img
            src={currentImage.url}
            alt={safeLang === 'en' ? currentImage.alt : currentImage.altTe}
            className="max-w-full max-h-[85vh] rounded-xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            decoding="async"
          />

          {/* Next */}
          <button
            className="absolute right-4 md:right-8 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-[#E53935] flex items-center justify-center text-white transition-colors duration-200"
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            aria-label={t.next}
          >
            <ChevronRight size={20} />
          </button>

          {/* Counter */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/50 text-xs font-medium tracking-widest">
            {(lightboxIndex ?? 0) + 1} {t.imgOf} {IMAGES.length}
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;