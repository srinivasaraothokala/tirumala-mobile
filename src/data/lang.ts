// C:\Users\styli\tirumala-mobile\src\data\lang.ts
//
// ✅ Single source of truth for ALL UI strings across the site.
// Import `useLang()` in any component to get typed, language-aware strings.
//
// Usage:
//   import { useLang } from '../data/lang';
//   const t = useLang();
//   <h1>{t.hero.title}</h1>

import { useLanguage, type Lang } from '../utils/LanguageContext';

// ─────────────────────────────────────────────
// Master Content Type
// Adding a new string? Add it here first —
// TypeScript will tell you every place to fill it in.
// ─────────────────────────────────────────────
export interface SiteContent {
  // ── Meta / SEO ───────────────────────────────
  meta: {
    title:       string;
    description: string;
    keywords:    string;
  };

  // ── Hero ─────────────────────────────────────
  hero: {
    badge:       string;
    title:       string;
    subtitle:    string;
    description: string;
    callBtn:     string;
    waBtn:       string;
    trust1:      string;
    trust1Sub:   string;
    trust2:      string;
    trust2Sub:   string;
    arrival:     string;
    arrivalModel:string;
  };

  // ── Navbar ───────────────────────────────────
  nav: {
    home:        string;
    mobiles:     string;
    accessories: string;
    services:    string;
    contact:     string;
    whatsapp:    string;
  };

  // ── Services ─────────────────────────────────
  services: {
    label:      string;
    heading:    string;
    subtext:    string;
    cta:        string;
    newTitle:   string;
    newDesc:    string;
    preTitle:   string;
    preDesc:    string;
    boxTitle:   string;
    boxDesc:    string;
    accsTitle:  string;
    accsDesc:   string;
    wearTitle:  string;
    wearDesc:   string;
  };

  // ── Offers ───────────────────────────────────
  offers: {
    heading:       string;
    subheading:    string;
    cta:           string;
    check:         string;
    feat1:         string;
    feat2:         string;
    feat3:         string;
    exchangeTitle: string;
    exchangeDesc:  string;
    exchangeBadge: string;
    openboxTitle:  string;
    openboxDesc:   string;
    openboxBadge:  string;
    comboTitle:    string;
    comboDesc:     string;
    comboBadge:    string;
  };

  // ── Gallery ──────────────────────────────────
  gallery: {
    label:   string;
    heading: string;
    subtext: string;
    view:    string;
    close:   string;
    prev:    string;
    next:    string;
    imgOf:   string;
  };

  // ── Contact ──────────────────────────────────
  contact: {
    label:          string;
    heading:        string;
    subtext:        string;
    locTitle:       string;
    timeTitle:      string;
    timeVal:        string;
    phoneTitle:     string;
    waBtn:          string;
    callBtn:        string;
    formTitle:      string;
    formName:       string;
    formPhone:      string;
    formMsg:        string;
    placeName:      string;
    placePhone:     string;
    placeMsg:       string;
    submitBtn:      string;
    successMsg:     string;
    errRequired:    string;
    errPhone:       string;
    errMsg:         string;
  };

  // ── Location ─────────────────────────────────
  location: {
    visitLabel:   string;
    titleMain:    string;
    titleSub:     string;
    addrTitle:    string;
    addrVal:      string;
    hoursTitle:   string;
    hoursVal:     string;
    sundayClosed: string;
    phoneTitle:   string;
    directions:   string;
    whatsapp:     string;
    loadMap:      string;
  };

  // ── Footer ───────────────────────────────────
  footer: {
    desc:         string;
    linksTitle:   string;
    contactTitle: string;
    followTitle:  string;
    waBtn:        string;
    rights:       string;
    auth:         string;
    spare:        string;
  };
}

// ─────────────────────────────────────────────
// English Strings
// ─────────────────────────────────────────────
const en: SiteContent = {
  meta: {
    title:       'Tirumala Cell Point — Best Mobile Store in Narasaraopet',
    description: 'Buy new, second-hand, and open-box smartphones in Narasaraopet. Best price deals on Apple, Samsung, Xiaomi & more. Expert repair service.',
    keywords:    'mobile store narasaraopet, second hand phones, open box deals, apple samsung xiaomi',
  },
  hero: {
    badge:        'Trusted Mobile Store in Narasaraopet',
    title:        'Tirumala Cell Point',
    subtitle:     'Sales & Service – Best Price Deals',
    description:  'Discover a curated selection of New Mobiles, certified Second-Hand, and Open Box devices alongside premium accessories tailored for your lifestyle.',
    callBtn:      'Call Now',
    waBtn:        'WhatsApp',
    trust1:       'Authenticity',
    trust1Sub:    '100% Genuine Products',
    trust2:       'Support',
    trust2Sub:    'Expert Repair Service',
    arrival:      'New Arrival',
    arrivalModel: 'Open Box Series 2026',
  },
  nav: {
    home:        'Home',
    mobiles:     'Mobiles',
    accessories: 'Accessories',
    services:    'Services',
    contact:     'Contact',
    whatsapp:    'WhatsApp',
  },
  services: {
    label:      'Services',
    heading:    'What We Offer',
    subtext:    'Premium mobile solutions tailored for Narasaraopet. From the latest flagships to expert accessories.',
    cta:        'View Collection',
    newTitle:   'New Mobiles',
    newDesc:    'Latest smartphones from top brands like Apple, Samsung, and OnePlus at unbeatable prices.',
    preTitle:   'Pre-Owned',
    preDesc:    'Certified second-hand devices with multi-point quality checks.',
    boxTitle:   'Open Box',
    boxDesc:    'Mint condition unused devices with deep discounts.',
    accsTitle:  'Accessories',
    accsDesc:   'Premium chargers, cables, and cases for all models.',
    wearTitle:  'Wearables',
    wearDesc:   'Latest smartwatches and fitness trackers.',
  },
  offers: {
    heading:       'Best Price Deals in Narasaraopet',
    subheading:    'Upgrade your tech today with our exclusive seasonal offers and unbeatable service.',
    cta:           'Contact Now',
    check:         'Check Eligibility',
    feat1:         'Best Price Guarantee',
    feat2:         'Exchange Available',
    feat3:         'Genuine Spares',
    exchangeTitle: 'Exchange Offer',
    exchangeDesc:  'Upgrade your old phone easily with the best market value valuation.',
    exchangeBadge: 'Save More',
    openboxTitle:  'Open Box Deals',
    openboxDesc:   'Like-new premium phones at significantly lower prices with warranty.',
    openboxBadge:  'Top Seller',
    comboTitle:    'Accessories Combo',
    comboDesc:     'Get massive discounts when you bundle cases, glass, and chargers.',
    comboBadge:    'Best Value',
  },
  gallery: {
    label:   'Gallery',
    heading: 'Inside Our Store',
    subtext: "A glimpse into Narasaraopet's most premium mobile shopping experience.",
    view:    'View',
    close:   'Close lightbox',
    prev:    'Previous image',
    next:    'Next image',
    imgOf:   'Image',
  },
  contact: {
    label:       'Connect',
    heading:     'Get in Touch',
    subtext:     "Have a specific model in mind or need a repair quote? Reach out to Narasaraopet's most trusted mobile hub.",
    locTitle:    'Location',
    timeTitle:   'Store Timings',
    timeVal:     'Mon — Sat: 10:00 AM – 9:00 PM',
    phoneTitle:  'Phone',
    waBtn:       'Chat on WhatsApp',
    callBtn:     'Call Now',
    formTitle:   'Quick Inquiry',
    formName:    'Full Name',
    formPhone:   'Phone Number',
    formMsg:     'Message',
    placeName:   'Your full name',
    placePhone:  'e.g. +91 98765 43210',
    placeMsg:    'Which model or service are you looking for?',
    submitBtn:   'Send Inquiry',
    successMsg:  'Thank you! We will get back to you shortly.',
    errRequired: 'This field is required',
    errPhone:    'Enter a valid 10-digit phone number',
    errMsg:      'Message must be at least 10 characters',
  },
  location: {
    visitLabel:   'Visit Our Store',
    titleMain:    'Tirumala Cell Point',
    titleSub:     'Narasaraopeta',
    addrTitle:    'Our Address',
    addrVal:      'Opp. GVR Grand Lodge, Ameensaheb Palem, Arundelpet, Narasaraopeta, AP 522601',
    hoursTitle:   'Working Hours',
    hoursVal:     'Mon – Sat: 10:00 AM – 9:00 PM',
    sundayClosed: 'Sunday: Closed',
    phoneTitle:   'Phone',
    directions:   'Get Directions',
    whatsapp:     'WhatsApp Us',
    loadMap:      'Click to load map',
  },
  footer: {
    desc:         'Your trusted destination for premium mobile devices and expert service in Narasaraopet. Best price deals, every day.',
    linksTitle:   'Quick Links',
    contactTitle: 'Contact Us',
    followTitle:  'Follow Us',
    waBtn:        'Chat on WhatsApp',
    rights:       'All rights reserved.',
    auth:         'Authorized Retailer',
    spare:        'Genuine Spares',
  },
};

// ─────────────────────────────────────────────
// Telugu Strings
// ─────────────────────────────────────────────
const te: SiteContent = {
  meta: {
    title:       'తిరుమల సెల్ పాయింట్ — నరసరావుపేటలో అత్యుత్తమ మొబైల్ స్టోర్',
    description: 'నరసరావుపేటలో కొత్త, సెకండ్ హ్యాండ్ మరియు ఓపెన్ బాక్స్ స్మార్ట్‌ఫోన్‌లు కొనుగోలు చేయండి.',
    keywords:    'మొబైల్ స్టోర్ నరసరావుపేట, సెకండ్ హ్యాండ్ ఫోన్లు, ఓపెన్ బాక్స్ డీల్స్',
  },
  hero: {
    badge:        'నరసరావుపేటలో విశ్వసనీయ మొబైల్ దుకాణం',
    title:        'తిరుమల సెల్ పాయింట్',
    subtitle:     'సేల్స్ & సర్వీస్ – ఉత్తమ ధరలు',
    description:  'కొత్త మొబైల్‌లు, సర్టిఫైడ్ సెకండ్ హ్యాండ్, మరియు ఓపెన్ బాక్స్ పరికరాలతో పాటు మీ జీవనశైలికి తగిన ప్రీమియం యాక్సెసరీలను మా వద్ద పొందండి.',
    callBtn:      'కాల్ చేయండి',
    waBtn:        'వాట్సాప్',
    trust1:       'నిజాయితీ',
    trust1Sub:    '100% ఒరిజినల్ ఉత్పత్తులు',
    trust2:       'మద్దతు',
    trust2Sub:    'నిపుణుల రిపేర్ సర్వీస్',
    arrival:      'కొత్తగా వచ్చినవి',
    arrivalModel: 'ఓపెన్ బాక్స్ సిరీస్ 2026',
  },
  nav: {
    home:        'హోమ్',
    mobiles:     'మొబైల్స్',
    accessories: 'యాక్సెసరీస్',
    services:    'సేవలు',
    contact:     'సంప్రదించండి',
    whatsapp:    'వాట్సాప్',
  },
  services: {
    label:      'మా సేవలు',
    heading:    'మేము అందించేవి',
    subtext:    'నరసరావుపేట కోసం ప్రత్యేకంగా రూపొందించబడిన ప్రీమియం మొబైల్ పరిష్కారాలు.',
    cta:        'కలెక్షన్ చూడండి',
    newTitle:   'కొత్త మొబైల్స్',
    newDesc:    'Apple, Samsung మరియు OnePlus వంటి టాప్ బ్రాండ్‌ల నుండి లేటెస్ట్ స్మార్ట్‌ఫోన్‌లు.',
    preTitle:   'ప్రీ-ఓన్డ్',
    preDesc:    'మల్టీ-పాయింట్ క్వాలిటీ చెక్స్‌తో సర్టిఫైడ్ సెకండ్ హ్యాండ్ మొబైల్స్.',
    boxTitle:   'ఓపెన్ బాక్స్',
    boxDesc:    'భారీ తగ్గింపులతో వాడని సరికొత్త పరికరాలు.',
    accsTitle:  'యాక్సెసరీస్',
    accsDesc:   'అన్ని మోడళ్ల కోసం ప్రీమియం ఛార్జర్‌లు, కేబుల్స్ మరియు కేస్‌లు.',
    wearTitle:  'వేరబుల్స్',
    wearDesc:   'లేటెస్ట్ స్మార్ట్‌వాచ్‌లు మరియు ఫిట్‌నెస్ ట్రాకర్‌లు.',
  },
  offers: {
    heading:       'నరసరావుపేటలో ఉత్తమ ధరలు',
    subheading:    'మా ప్రత్యేక సీజనల్ ఆఫర్లతో ఈరోజే మీ టెక్నాలజీని అప్‌గ్రేడ్ చేయండి.',
    cta:           'సంప్రదించండి',
    check:         'అర్హతను తనిఖీ చేయండి',
    feat1:         'ఉత్తమ ధర హామీ',
    feat2:         'ఎక్స్ఛేంజ్ సౌకర్యం',
    feat3:         'ఒరిజినల్ స్పేర్స్',
    exchangeTitle: 'ఎక్స్ఛేంజ్ ఆఫర్',
    exchangeDesc:  'మీ పాత ఫోన్‌ను ఉత్తమ మార్కెట్ ధరతో సులభంగా అప్‌గ్రేడ్ చేసుకోండి.',
    exchangeBadge: 'ఎక్కువ ఆదా',
    openboxTitle:  'ఓపెన్ బాక్స్ డీల్స్',
    openboxDesc:   'వారంటీతో కూడిన సరికొత్త ప్రీమియం ఫోన్‌లు తక్కువ ధరకే.',
    openboxBadge:  'టాప్ సెల్లర్',
    comboTitle:    'యాక్సెసరీస్ కాంబో',
    comboDesc:     'కేస్‌లు, గ్లాస్ మరియు ఛార్జర్‌లను బండిల్‌గా కొని భారీ తగ్గింపు పొందండి.',
    comboBadge:    'ఉత్తమ విలువ',
  },
  gallery: {
    label:   'గ్యాలరీ',
    heading: 'మా షాప్ లోపల',
    subtext: 'నరసరావుపేటలో అత్యుత్తమ మొబైల్ షాపింగ్ అనుభవం యొక్క ఒక చిన్న చూపు.',
    view:    'చూడండి',
    close:   'మూసివేయండి',
    prev:    'మునుపటి చిత్రం',
    next:    'తదుపరి చిత్రం',
    imgOf:   'చిత్రం',
  },
  contact: {
    label:       'సంప్రదించండి',
    heading:     'మమ్మల్ని కలవండి',
    subtext:     'మీకు ఏదైనా నిర్దిష్ట మోడల్ కావాలా లేదా రిపేర్ కోట్ కావాలా? మమ్మల్ని సంప్రదించండి.',
    locTitle:    'చిరునామా',
    timeTitle:   'స్టోర్ సమయాలు',
    timeVal:     'సోమ — శని: ఉదయం 10:00 - రాత్రి 9:00',
    phoneTitle:  'ఫోన్',
    waBtn:       'వాట్సాప్ ద్వారా చాట్ చేయండి',
    callBtn:     'కాల్ చేయండి',
    formTitle:   'త్వరిత విచారణ',
    formName:    'పూర్తి పేరు',
    formPhone:   'ఫోన్ నంబర్',
    formMsg:     'సందేశం',
    placeName:   'మీ పూర్తి పేరు',
    placePhone:  'ఉదా: +91 98765 43210',
    placeMsg:    'మీకు ఏ మోడల్ లేదా సర్వీస్ కావాలి?',
    submitBtn:   'విచారణ పంపండి',
    successMsg:  'ధన్యవాదాలు! మేము మిమ్మల్ని త్వరలోనే సంప్రదిస్తాము.',
    errRequired: 'ఈ ఫీల్డ్ అవసరం',
    errPhone:    'చెల్లుబాటు అయ్యే 10-అంకెల ఫోన్ నంబర్ నమోదు చేయండి',
    errMsg:      'సందేశం కనీసం 10 అక్షరాలు ఉండాలి',
  },
  location: {
    visitLabel:   'మా షాప్‌ని సందర్శించండి',
    titleMain:    'తిరుమల సెల్ పాయింట్',
    titleSub:     'నరసరావుపేట',
    addrTitle:    'మా చిరునామా',
    addrVal:      'GVR గ్రాండ్ లాడ్జ్ ఎదురుగా, అమీన్‌సాహెబ్ పాలెం, అరుణ్‌దల్‌పేట, నరసరావుపేట, AP 522601',
    hoursTitle:   'పని వేళలు',
    hoursVal:     'సోమ – శని: ఉదయం 10:00 – రాత్రి 9:00',
    sundayClosed: 'ఆదివారం: మూసివేయబడింది',
    phoneTitle:   'ఫోన్',
    directions:   'దిశలు పొందండి',
    whatsapp:     'వాట్సాప్ చేయండి',
    loadMap:      'మ్యాప్ లోడ్ చేయడానికి క్లిక్ చేయండి',
  },
  footer: {
    desc:         'నరసరావుపేటలో ప్రీమియం మొబైల్ పరికరాలు మరియు నిపుణుల సేవ కోసం మీ నమ్మకమైన దుకాణం.',
    linksTitle:   'త్వరిత లింకులు',
    contactTitle: 'మమ్మల్ని సంప్రదించండి',
    followTitle:  'మమ్మల్ని అనుసరించండి',
    waBtn:        'వాట్సాప్‌లో చాట్ చేయండి',
    rights:       'అన్ని హక్కులు ప్రత్యేకించబడినవి.',
    auth:         'అధికారిక విక్రేత',
    spare:        'ఒరిజినల్ స్పేర్స్',
  },
};

// ─────────────────────────────────────────────
// Registry & Hook
// ─────────────────────────────────────────────
const CONTENT: Record<Lang, SiteContent> = { en, te };

/**
 * Drop-in replacement for per-component translation objects.
 * Returns fully-typed strings for the active language.
 *
 * @example
 * const t = useLang();
 * <h1>{t.hero.title}</h1>
 * <p>{t.footer.rights}</p>
 */
export const useLang = (): SiteContent => {
  const { lang } = useLanguage();
  return CONTENT[(lang as Lang) ?? 'en'];
};

/** Raw content map — use when you need both languages at once */
export const LANG_CONTENT = CONTENT;