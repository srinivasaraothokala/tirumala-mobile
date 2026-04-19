'use client';

// C:\Users\styli\tirumala-mobile\src\sections\BrandSlider.tsx

import React, { useState, useRef } from 'react';
import { BRANDS } from '@/data/brands';

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────
interface Brand {
  name:       string;
  slug:       string;
  customUrl?: string;
}

// ─────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────
const SLOT_WIDTH       = 160;
const JSDELIVR_BASE    = 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons';
const SIMPLEICONS_BASE = 'https://cdn.simpleicons.org';

// ✅ Brands we KNOW don't exist in simple-icons — skip CDN entirely,
//    go straight to text fallback. No broken image flash.
const TEXT_ONLY_BRANDS = new Set(['nothing', 'iqoo', 'micromax']);

const getSources = (brand: Brand): string[] => {
  // If this brand is known to have no CDN icon, return empty — text fallback immediately
  if (TEXT_ONLY_BRANDS.has(brand.slug)) return [];

  return [
    brand.customUrl,
    `${SIMPLEICONS_BASE}/${brand.slug}/ffffff`,
    `${JSDELIVR_BASE}/${brand.slug}.svg`,
  ].filter(Boolean) as string[];
};

// ─────────────────────────────────────────────
// BrandLogo
// ─────────────────────────────────────────────
const BrandLogo = React.memo(({ brand }: { brand: Brand }) => {
  const sources = getSources(brand);

  // ✅ If no sources, start as failed immediately — shows text right away
  const [srcIndex, setSrcIndex] = useState(0);
  const [failed,   setFailed]   = useState(sources.length === 0);
  const [hovered,  setHovered]  = useState(false);

  const handleError = () => {
    if (srcIndex + 1 < sources.length) {
      setSrcIndex((i) => i + 1);
    } else {
      setFailed(true);
    }
  };

  return (
    <div
      style={{
        width:          `${SLOT_WIDTH}px`,
        minWidth:       `${SLOT_WIDTH}px`,
        maxWidth:       `${SLOT_WIDTH}px`,
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'center',
        flexShrink:     0,
      }}
      aria-label={brand.name}
    >
      {failed ? (
        // ✅ Text fallback — styled to look like a proper brand wordmark
        <span
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            color:         hovered ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.5)',
            fontSize:      brand.name.length > 6 ? '10px' : '12px',
            fontWeight:    900,
            letterSpacing: brand.name.length > 6 ? '0.15em' : '0.1em',
            textTransform: 'uppercase',
            whiteSpace:    'nowrap',
            fontFamily:    'system-ui, sans-serif',
            transition:    'color 0.25s ease',
            userSelect:    'none',
          }}
        >
          {brand.name}
        </span>
      ) : (
        <img
          src={sources[srcIndex]}
          alt={brand.name}
          title={brand.name}
          loading="lazy"
          decoding="async"
          onError={handleError}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            height:     '40px',
            width:      'auto',
            maxWidth:   '120px',
            objectFit:  'contain',
            filter:     'brightness(0) invert(1)',
            opacity:    hovered ? 1 : 0.65,
            transform:  hovered ? 'scale(1.1)' : 'scale(1)',
            transition: 'opacity 0.25s ease, transform 0.25s ease',
          }}
        />
      )}
    </div>
  );
});

BrandLogo.displayName = 'BrandLogo';

// ─────────────────────────────────────────────
// BrandSlider
// ─────────────────────────────────────────────
const BrandSlider = () => {
  const trackRef          = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  const loopBrands = [...BRANDS, ...BRANDS, ...BRANDS];
  const trackWidth = SLOT_WIDTH * BRANDS.length;

  return (
    <section
      className="relative overflow-hidden py-14"
      style={{ background: '#050505' }}
      aria-label="Authorized mobile brand partners"
    >
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-${trackWidth}px); }
        }
        .brand-track {
          display:    flex;
          align-items: center;
          gap:        0;
          animation:  marquee ${BRANDS.length * 2.2}s linear infinite;
          will-change: transform;
        }
        .brand-track.paused {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .brand-track { animation: none; }
        }
      `}</style>

      {/* Section label */}
      <div className="text-center mb-10" aria-hidden="true">
        <p style={{
          color:         'rgba(255,255,255,0.18)',
          fontSize:      '10px',
          textTransform: 'uppercase',
          letterSpacing: '0.65em',
          fontWeight:    900,
          margin:        0,
        }}>
          Authorized Mobile Brand Partner
        </p>
      </div>

      {/* Scrolling track container */}
      <div
        style={{ position: 'relative', overflow: 'hidden' }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
      >
        {/* Left vignette */}
        <div aria-hidden="true" style={{
          position:      'absolute',
          inset:         '0 auto 0 0',
          width:         'clamp(80px, 12vw, 220px)',
          background:    'linear-gradient(to right, #050505 0%, #050505bb 55%, transparent 100%)',
          zIndex:        10,
          pointerEvents: 'none',
        }} />

        {/* Right vignette */}
        <div aria-hidden="true" style={{
          position:      'absolute',
          inset:         '0 0 0 auto',
          width:         'clamp(80px, 12vw, 220px)',
          background:    'linear-gradient(to left, #050505 0%, #050505bb 55%, transparent 100%)',
          zIndex:        10,
          pointerEvents: 'none',
        }} />

        {/* Animated track */}
        <div
          ref={trackRef}
          className={`brand-track${paused ? ' paused' : ''}`}
          role="list"
        >
          {loopBrands.map((brand, index) => (
            <div key={`${brand.slug}-${index}`} role="listitem">
              <BrandLogo brand={brand} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandSlider;