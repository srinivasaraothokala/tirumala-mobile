'use client';

import React, { useState } from 'react';
import { BRANDS } from '@/data/brands';

const JSDELIVR_BASE = 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons';
const SIMPLEICONS_BASE = 'https://cdn.simpleicons.org';

// ── Fixed-width slot ensures ALL logos travel equal distances ──
const SLOT_WIDTH = 160; // px — every brand gets this exact box

interface Brand {
  name: string;
  slug: string;
  customUrl?: string;
}

function BrandLogo({ brand }: { brand: Brand }) {
  const sources = [
    brand.customUrl,
    `${SIMPLEICONS_BASE}/${brand.slug}/ffffff`,
    `${JSDELIVR_BASE}/${brand.slug}.svg`,
  ].filter(Boolean) as string[];

  const [srcIndex, setSrcIndex] = useState(0);
  const [failed, setFailed] = useState(false);

  const handleError = () => {
    if (srcIndex + 1 < sources.length) {
      setSrcIndex(srcIndex + 1);
    } else {
      setFailed(true);
    }
  };

  return (
    // ✅ FIXED equal-width slot — this is what fixes unequal travel distances
    <div
      style={{
        width: `${SLOT_WIDTH}px`,
        minWidth: `${SLOT_WIDTH}px`,
        maxWidth: `${SLOT_WIDTH}px`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      {failed ? (
        // Text fallback — never a blank gap
        <span
          style={{
            color: 'rgba(255,255,255,0.55)',
            fontSize: '12px',
            fontWeight: 800,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
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
          onError={handleError}
          style={{
            height: '44px',
            width: 'auto',
            // ✅ Constrain image inside its slot so wide logos don't overflow
            maxWidth: '120px',
            objectFit: 'contain',
            // Force pure white regardless of original color
            filter: 'brightness(0) invert(1)',
            opacity: 0.7,
            transition: 'opacity 0.3s ease, transform 0.3s ease',
          }}
          onMouseEnter={(e) => {
            const img = e.currentTarget as HTMLImageElement;
            img.style.opacity = '1';
            img.style.transform = 'scale(1.08)';
          }}
          onMouseLeave={(e) => {
            const img = e.currentTarget as HTMLImageElement;
            img.style.opacity = '0.7';
            img.style.transform = 'scale(1)';
          }}
        />
      )}
    </div>
  );
}

const BrandSlider = () => {
  // Triple for seamless ultrawide loop
  const loopBrands = [...BRANDS, ...BRANDS, ...BRANDS];

  return (
    <section
      className="relative overflow-hidden py-14"
      style={{ background: '#050505' }}
    >
      {/* Section label */}
      <div className="text-center mb-10">
        <p
          style={{
            color: 'rgba(255,255,255,0.18)',
            fontSize: '10px',
            textTransform: 'uppercase',
            letterSpacing: '0.65em',
            fontWeight: 900,
            margin: 0,
          }}
        >
          Authorized Mobile Brand Partner
        </p>
      </div>

      {/* Scrolling track */}
      <div className="brand-marquee-container" style={{ position: 'relative', overflow: 'hidden' }}>

        {/* Left vignette */}
        <div style={{
          position: 'absolute', inset: '0 auto 0 0',
          width: 'clamp(120px, 15vw, 280px)',
          background: 'linear-gradient(to right, #050505 0%, #050505cc 60%, transparent 100%)',
          zIndex: 10, pointerEvents: 'none',
        }} />

        {/* Right vignette */}
        <div style={{
          position: 'absolute', inset: '0 0 0 auto',
          width: 'clamp(120px, 15vw, 280px)',
          background: 'linear-gradient(to left, #050505 0%, #050505cc 60%, transparent 100%)',
          zIndex: 10, pointerEvents: 'none',
        }} />

        {/* ✅ Inner track — gap: 0, all spacing handled by slot width */}
        <div
          className="brand-marquee-inner"
          style={{ display: 'flex', alignItems: 'center', gap: 0 }}
        >
          {loopBrands.map((brand, index) => (
            <BrandLogo key={`${brand.slug}-${index}`} brand={brand} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandSlider;