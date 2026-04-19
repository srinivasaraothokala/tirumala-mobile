// C:\Users\styli\tirumala-mobile\src\data\brands.ts

export interface Brand {
  name:       string;
  slug:       string;
  customUrl?: string;
  category:   'global' | 'chinese' | 'indian';
}

const SI  = 'https://cdn.simpleicons.org';
const JSR = 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons';

export const BRANDS: Brand[] = [

  // ── Global Premium ──────────────────────────
  { name: 'Apple',    slug: 'apple',    category: 'global' },
  { name: 'Samsung',  slug: 'samsung',  category: 'global' },
  { name: 'Google',   slug: 'google',   category: 'global' },
  { name: 'Motorola', slug: 'motorola', category: 'global' },
  { name: 'Sony',     slug: 'sony',     category: 'global' },
  { name: 'Nokia',    slug: 'nokia',    category: 'global' },

  // ── Chinese Giants ───────────────────────────
  { name: 'Xiaomi',  slug: 'xiaomi',  category: 'chinese' },
  { name: 'Vivo',    slug: 'vivo',    category: 'chinese' },
  { name: 'Oppo',    slug: 'oppo',    category: 'chinese' },
  { name: 'OnePlus', slug: 'oneplus', category: 'chinese' },

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

  // ✅ Nothing — CDN slug does NOT exist in simple-icons.
  //    No customUrl = all CDN attempts fail gracefully →
  //    BrandLogo shows "NOTHING" in white text. Always works, never broken image.
  {
    name:     'Nothing',
    slug:     'nothing',
    category: 'chinese',
  },

  // ✅ iQOO — not in simple-icons, no customUrl → shows "iQOO" text fallback
  {
    name:     'iQOO',
    slug:     'iqoo',
    category: 'chinese',
  },

  {
    name:      'Honor',
    slug:      'honor',
    category:  'chinese',
    customUrl: `${JSR}/honor.svg`,
  },
  { name: 'Huawei', slug: 'huawei', category: 'chinese' },
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
  // ✅ Micromax — not in simple-icons → shows "MICROMAX" text fallback
  {
    name:     'Micromax',
    slug:     'micromax',
    category: 'indian',
  },
  {
    name:      'Jio',
    slug:      'jio',
    category:  'indian',
    customUrl: `${JSR}/jio.svg`,
  },
] as const satisfies Brand[];

export const GLOBAL_BRANDS  = BRANDS.filter((b) => b.category === 'global');
export const CHINESE_BRANDS = BRANDS.filter((b) => b.category === 'chinese');
export const INDIAN_BRANDS  = BRANDS.filter((b) => b.category === 'indian');
export const BRAND_COUNT    = BRANDS.length;