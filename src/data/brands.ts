// C:\Users\styli\tirumala-mobile\src\data\brands.ts

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────

export interface Brand {
  /** Display name shown as text fallback */
  name:       string;
  /** simple-icons slug — must match exactly: https://simpleicons.org */
  slug:       string;
  /**
   * Override CDN URL — use when:
   * 1. The slug isn't in simple-icons yet (newer brands)
   * 2. You want a custom/hosted logo instead
   * Falls back to simpleicons CDN then jsdelivr if omitted.
   */
  customUrl?: string;
  /**
   * Category — useful for filtering if you ever add a brand filter UI
   */
  category:   'global' | 'chinese' | 'indian';
}

// ─────────────────────────────────────────────
// CDN base URLs
// Vercel tip: if you host these logos yourself in /public/brands/
// you get faster loads + no external CDN dependency.
// e.g. customUrl: '/brands/realme.svg'
// ─────────────────────────────────────────────
const SI  = 'https://cdn.simpleicons.org';       // color SVGs (we override to white via CSS)
const JSR = 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons'; // plain SVGs

// ─────────────────────────────────────────────
// Brand List
// ─────────────────────────────────────────────
export const BRANDS: Brand[] = [

  // ── Global Premium ──────────────────────────
  {
    name:     'Apple',
    slug:     'apple',
    category: 'global',
    // ✅ Apple's simpleicons slug is well-supported, no customUrl needed
  },
  {
    name:     'Samsung',
    slug:     'samsung',
    category: 'global',
  },
  {
    name:     'Google',
    slug:     'google',
    category: 'global',
  },
  {
    name:     'Motorola',
    slug:     'motorola',
    category: 'global',
  },
  {
    name:     'Sony',
    slug:     'sony',
    category: 'global',
  },
  {
    name:     'Nokia',
    slug:     'nokia',
    category: 'global',
  },

  // ── Chinese Giants ───────────────────────────
  {
    name:     'Xiaomi',
    slug:     'xiaomi',
    category: 'chinese',
  },
  {
    name:     'Vivo',
    slug:     'vivo',
    category: 'chinese',
  },
  {
    name:     'Oppo',
    slug:     'oppo',
    category: 'chinese',
  },
  {
    name:     'OnePlus',
    slug:     'oneplus',
    category: 'chinese',
  },
  {
    name:      'Realme',
    slug:      'realme',
    category:  'chinese',
    customUrl: `${JSR}/realme.svg`,
  },
  {
    name:      'Poco',
    slug:      'poco',
    category:  'chinese',
    customUrl: `${JSR}/poco.svg`,
  },
  {
    name:      'Nothing',
    slug:      'nothing',
    category:  'chinese',
    // ✅ Nothing Phone — slug confirmed on simpleicons.org
    customUrl: `${SI}/nothing/ffffff`,
  },
  {
    name:      'iQOO',
    slug:      'iqoo',
    category:  'chinese',
    // ✅ iQOO not yet in simple-icons — use jsdelivr direct SVG
    customUrl: `${JSR}/iqoo.svg`,
  },
  {
    name:      'Honor',
    slug:      'honor',
    category:  'chinese',
    customUrl: `${JSR}/honor.svg`,
  },
  {
    name:     'Huawei',
    slug:     'huawei',
    category: 'chinese',
  },
  {
    name:      'Tecno',
    slug:      'tecno',
    category:  'chinese',
    customUrl: `${JSR}/tecno.svg`,
  },
  {
    name:      'Infinix',
    slug:      'infinix',
    category:  'chinese',
    customUrl: `${JSR}/infinix.svg`,
  },

  // ── Indian Brands ────────────────────────────
  {
    name:      'Lava',
    slug:      'lava',
    category:  'indian',
    customUrl: `${JSR}/lava.svg`,
  },
  {
    name:      'Micromax',
    slug:      'micromax',
    category:  'indian',
    // ✅ Micromax not in simple-icons — text fallback will show if SVG 404s
    customUrl: `${JSR}/micromax.svg`,
  },
  {
    name:      'Jio',
    slug:      'jio',
    category:  'indian',
    customUrl: `${JSR}/jio.svg`,
  },
] as const satisfies Brand[];

// ─────────────────────────────────────────────
// Derived exports — avoids re-filtering in components
// ─────────────────────────────────────────────
export const GLOBAL_BRANDS  = BRANDS.filter((b) => b.category === 'global');
export const CHINESE_BRANDS = BRANDS.filter((b) => b.category === 'chinese');
export const INDIAN_BRANDS  = BRANDS.filter((b) => b.category === 'indian');

/** Total brand count — use for animation duration calculation */
export const BRAND_COUNT = BRANDS.length;