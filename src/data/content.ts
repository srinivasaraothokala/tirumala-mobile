// C:\Users\styli\tirumala-mobile\src\data\content.ts

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────

export type Lang = 'en' | 'te';

export interface SiteConfig {
  name:      string;
  tagline:   string;
  location:  string;
  /** E.164 format with country code: 919848442266 */
  phone:     string;
  /** WhatsApp number — same format, no '+' prefix */
  whatsapp:  string;
  /** Canonical site URL — used for SEO/meta */
  url:       string;
  /** Google Maps directions link */
  mapsUrl:   string;
  social: {
    instagram: string;
    youtube:   string;
    facebook:  string;
  };
}

export interface NavLink {
  name: Record<Lang, string>;
  href: string;
}

export interface ServiceHighlight {
  id:          string;
  icon:        string;
  title:       Record<Lang, string>;
  description: Record<Lang, string>;
}

// ─────────────────────────────────────────────
// Site Config — ✅ Real number updated
// ─────────────────────────────────────────────
export const SITE_CONFIG: SiteConfig = {
  name:     'Tirumala Cell Point',
  tagline:  'Sales & Service – Best Price Deals',
  location: 'Narasaraopet',

  // ✅ Real phone number — E.164 format (country code + number)
  phone:    '919848442266',
  whatsapp: '919848442266',

  url:      'https://tirumalacellpoint.com',  // update when domain is live

  mapsUrl:  'https://www.google.com/maps/dir/?api=1&destination=Tirumala+Cell+Point+Narasaraopet',

  social: {
    instagram: 'https://www.instagram.com/tirumala_cell_point/',
    youtube:   'https://www.youtube.com/@TirumalaMobilestore/shorts',
    facebook:  'https://www.facebook.com/tirumala_cell_point',
  },
};

// ─────────────────────────────────────────────
// Derived Helpers — import these instead of
// manually building strings in every component
// ─────────────────────────────────────────────

/** Formatted for display: +91 98484 42266 */
export const PHONE_DISPLAY = '+91 98484 42266';

/** tel: link href — works on mobile */
export const PHONE_HREF = `tel:+${SITE_CONFIG.phone}`;

/** WhatsApp link with a default greeting message */
export const WA_HREF = `https://wa.me/${SITE_CONFIG.whatsapp}`;

/** WhatsApp link with a pre-filled offer enquiry message */
export const WA_OFFER_HREF = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(
  'Hi! I want to know about your mobile offers.'
)}`;

// ─────────────────────────────────────────────
// Navigation — bilingual labels in one place
// ─────────────────────────────────────────────
export const NAVIGATION: NavLink[] = [
  { name: { en: 'Home',        te: 'హోమ్'         }, href: '#'            },
  { name: { en: 'Mobiles',     te: 'మొబైల్స్'     }, href: '#mobiles'     },
  { name: { en: 'Accessories', te: 'యాక్సెసరీస్'  }, href: '#accessories' },
  { name: { en: 'Services',    te: 'సేవలు'        }, href: '#services'    },
  { name: { en: 'Contact',     te: 'సంప్రదించండి' }, href: '#contact'     },
];

// ─────────────────────────────────────────────
// Service Highlights — bilingual
// ─────────────────────────────────────────────
export const SERVICE_HIGHLIGHTS: ServiceHighlight[] = [
  {
    id:   'new',
    icon: 'Smartphone',
    title: {
      en: 'New Mobiles',
      te: 'కొత్త మొబైల్స్',
    },
    description: {
      en: 'Latest flagships and budget kings from all top brands with official warranty.',
      te: 'అన్ని టాప్ బ్రాండ్‌ల నుండి లేటెస్ట్ ఫ్లాగ్‌షిప్‌లు మరియు బడ్జెట్ ఫోన్‌లు అధికారిక వారంటీతో.',
    },
  },
  {
    id:   'second-hand',
    icon: 'RefreshCcw',
    title: {
      en: 'Second Hand',
      te: 'సెకండ్ హ్యాండ్',
    },
    description: {
      en: 'Certified pre-owned devices. Thoroughly tested for performance and battery health.',
      te: 'సర్టిఫైడ్ సెకండ్ హ్యాండ్ పరికరాలు. పనితీరు మరియు బ్యాటరీ హెల్త్ కోసం పూర్తిగా పరీక్షించబడినవి.',
    },
  },
  {
    id:   'open-box',
    icon: 'Package',
    title: {
      en: 'Open Box',
      te: 'ఓపెన్ బాక్స్',
    },
    description: {
      en: "Unused devices at massive discounts. Get the 'new' feel without the 'new' price.",
      te: "భారీ తగ్గింపులతో వాడని పరికరాలు. 'కొత్త' ధర లేకుండా 'కొత్త' అనుభవం పొందండి.",
    },
  },
  {
    id:   'accessories',
    icon: 'Watch',
    title: {
      en: 'Accessories',
      te: 'యాక్సెసరీస్',
    },
    description: {
      en: 'Premium cases, tempered glass, fast chargers, and the latest smartwatches.',
      te: 'ప్రీమియం కేస్‌లు, టెంపర్డ్ గ్లాస్, ఫాస్ట్ ఛార్జర్లు మరియు లేటెస్ట్ స్మార్ట్‌వాచ్‌లు.',
    },
  },
];