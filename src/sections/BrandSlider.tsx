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
// Constants — outside component
// ─────────────────────────────────────────────
const SLOT_WIDTH       = 160;  // px — every brand gets this exact box
const JSDELIVR_BASE    = 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons';
const SIMPLEICONS_BASE = 'https://cdn.simpleicons.org';

// Build CDN source list for a brand
const getSources = (brand: Brand): string[] =>
  [
    brand.customUrl,
    `${SIMPLEICONS_BASE}/${brand.slug}/ffffff`,
    `${JSDELIVR_BASE}/${brand.slug}.svg`,
  ].filter(Boolean) as string[];

// ─────────────────────────────────────────────
// BrandLogo — memoised so it never re-renders on parent state change
// ─────────────────────────────────────────────
const BrandLogo = React.memo(({ brand }: { brand: Brand }) => {
  const sources           = getSources(brand);
  const [srcIndex, setSrcIndex] = useState(0);
  const [failed,   setFailed]   = useState(false);
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
        width:    `${SLOT_WIDTH}px`,
        minWidth: `${SLOT_WIDTH}px`,
        maxWidth: `${SLOT_WIDTH}px`,
        display:  'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
      aria-label={brand.name}
    >
      {failed ? (
        // Text fallback — never a blank gap
        <span
          style={{
            color:          'rgba(255,255,255,0.55)',
            fontSize:       '11px',
            fontWeight:     800,
            letterSpacing:  '0.08em',
            textTransform:  'uppercase',
            whiteSpace:     'nowrap',
          }}
        >
          {brand.name}
        </span>
      ) : (
        <img
          src={sources[srcIndex]}
          alt={brand.name}
          title={brand.name}
          // ✅ lazy — CDN logos are below fold, don't block LCP
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
            // Force white regardless of original SVG color
            filter:     'brightness(0) invert(1)',
            opacity:    hovered ? 1 : 0.65,
            transform:  hovered ? 'scale(1.1)' : 'scale(1)',
            // ✅ CSS transition instead of inline onMouseEnter style mutation
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
  const trackRef = useRef<HTMLDivElement>(null);
  // ✅ Pause animation on hover — better UX for users who want to read brand names
  const [paused, setPaused] = useState(false);

  // Triple for seamless ultrawide loop
  const loopBrands = [...BRANDS, ...BRANDS, ...BRANDS];

  // Total track width = slots * 3 sets
  const trackWidth = SLOT_WIDTH * BRANDS.length;

  return (
    <section
      className="relative overflow-hidden py-14"
      style={{ background: '#050505' }}
      aria-label="Authorized mobile brand partners"
    >
      {/* Inject keyframe animation + reduced-motion support via a <style> tag */}
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-${trackWidth}px); }
        }
        .brand-track {
          display: flex;
          align-items: center;
          gap: 0;
          /* Duration scales with brand count for consistent speed */
          animation: marquee ${BRANDS.length * 2.2}s linear infinite;
          will-change: transform;
        }
        .brand-track.paused {
          animation-play-state: paused;
        }
        /* ✅ Respect user's reduced-motion preference */
        @media (prefers-reduced-motion: reduce) {
          .brand-track {
            animation: none;
          }
        }
      `}</style>

      {/* Section label */}
      <div className="text-center mb-10" aria-hidden="true">
        <p style={{
          color:          'rgba(255,255,255,0.18)',
          fontSize:       '10px',
          textTransform:  'uppercase',
          letterSpacing:  '0.65em',
          fontWeight:     900,
          margin:         0,
        }}>
          Authorized Mobile Brand Partner
        </p>
      </div>

      {/* Scrolling track container */}
      <div
        style={{ position: 'relative', overflow: 'hidden' }}
        // ✅ Pause on hover so users can read brand names
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        // ✅ Also pause on focus (keyboard users)
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
      >
        {/* Left vignette */}
        <div
          aria-hidden="true"
          style={{
            position:   'absolute',
            inset:      '0 auto 0 0',
            width:      'clamp(80px, 12vw, 220px)',
            background: 'linear-gradient(to right, #050505 0%, #050505bb 55%, transparent 100%)',
            zIndex:     10,
            pointerEvents: 'none',
          }}
        />

        {/* Right vignette */}
        <div
          aria-hidden="true"
          style={{
            position:   'absolute',
            inset:      '0 0 0 auto',
            width:      'clamp(80px, 12vw, 220px)',
            background: 'linear-gradient(to left, #050505 0%, #050505bb 55%, transparent 100%)',
            zIndex:     10,
            pointerEvents: 'none',
          }}
        />

        {/* Animated track */}
        <div
          ref={trackRef}
          className={`brand-track${paused ? ' paused' : ''}`}
          // ✅ role="list" — screen readers understand this is a list of brands
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