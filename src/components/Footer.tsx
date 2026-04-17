'use client';

import React from 'react';
import { MessageCircle, Phone, MapPin, Smartphone } from 'lucide-react';

// Inline SVG icons for social platforms (lucide-react version compatibility)
const InstagramIcon = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
  </svg>
);

const YoutubeIcon = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/>
  </svg>
);

const FacebookIcon = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
import { SITE_CONFIG } from '../data/content';
import { useLanguage } from '../utils/LanguageContext';

const Footer = () => {
  const { lang } = useLanguage();
  const currentYear = new Date().getFullYear();

  const SOCIAL_LINKS = {
    instagram: 'https://www.instagram.com/tirumala_cell_point/',
    youtube: 'https://www.youtube.com/@TirumalaMobilestore/shorts',
    facebook: 'https://www.facebook.com/tirumala_cell_point', // update if different
  };

  const t = {
    en: {
      desc: "Your trusted destination for premium mobile devices and expert service in Narasaraopet. Best price deals, every day.",
      linksTitle: "Quick Links",
      links: [
        { name: 'Home', href: '#' },
        { name: 'Mobiles', href: '#mobiles' },
        { name: 'Accessories', href: '#accessories' },
        { name: 'Contact', href: '#contact' },
      ],
      contactTitle: "Contact Us",
      followTitle: "Follow Us",
      loc: `Main Road, ${SITE_CONFIG.location}`,
      wa: "Chat on WhatsApp",
      rights: "All rights reserved.",
      auth: "Authorized Retailer",
      spare: "Genuine Spares"
    },
    te: {
      desc: "నరసరావుపేటలో ప్రీమియం మొబైల్ పరికరాలు మరియు నిపుణుల సేవ కోసం మీ నమ్మకమైన దుకాణం. ప్రతిరోజూ ఉత్తమ ధరలు.",
      linksTitle: "త్వరిత లింకులు",
      links: [
        { name: 'హోమ్', href: '#' },
        { name: 'మొబైల్స్', href: '#mobiles' },
        { name: 'యాక్సెసరీస్', href: '#accessories' },
        { name: 'కాంటాక్ట్', href: '#contact' },
      ],
      contactTitle: "మమ్మల్ని సంప్రదించండి",
      followTitle: "మమ్మల్ని అనుసరించండి",
      loc: `మెయిన్ రోడ్, ${SITE_CONFIG.location}`,
      wa: "వాట్సాప్ చాట్",
      rights: "అన్ని హక్కులు ప్రత్యేకించబడినవి.",
      auth: "అధికారిక విక్రేత",
      spare: "ఒరిజినల్ స్పేర్స్"
    }
  };

  const content = lang === 'en' ? t.en : t.te;

  const socialLinks = [
    {
      name: 'Instagram',
      href: SOCIAL_LINKS.instagram,
      icon: InstagramIcon,
      hoverColor: 'hover:text-pink-500',
      label: '@tirumala_cell_point',
    },
    {
      name: 'YouTube',
      href: SOCIAL_LINKS.youtube,
      icon: YoutubeIcon,
      hoverColor: 'hover:text-red-600',
      label: '@TirumalaMobilestore',
    },
    {
      name: 'Facebook',
      href: SOCIAL_LINKS.facebook,
      icon: FacebookIcon,
      hoverColor: 'hover:text-blue-600',
      label: 'Tirumala Cell Point',
    },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Column 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#E53935] rounded-lg flex items-center justify-center shadow-sm">
                <Smartphone className="text-white w-5 h-5" />
              </div>
              <span className="font-bold text-xl tracking-tight text-gray-900 uppercase">
                Tirumala<span className="text-[#E53935]">.</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              {content.desc}
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="font-bold text-gray-900 uppercase tracking-widest text-xs mb-6">
              {content.linksTitle}
            </h4>
            <ul className="space-y-4">
              {content.links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-[#E53935] text-sm transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & WhatsApp CTA */}
          <div>
            <h4 className="font-bold text-gray-900 uppercase tracking-widest text-xs mb-6">
              {content.contactTitle}
            </h4>
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3 text-gray-600 text-sm">
                <Phone size={16} className="text-gray-400" />
                <span>{SITE_CONFIG.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 text-sm">
                <MapPin size={16} className="text-gray-400" />
                <span>{content.loc}</span>
              </div>
            </div>

            <a
              href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-full text-sm font-bold hover:bg-gray-100 hover:border-gray-300 transition-all duration-300 active:scale-95 shadow-sm"
            >
              <MessageCircle size={16} className="text-green-600" />
              {content.wa}
            </a>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h4 className="font-bold text-gray-900 uppercase tracking-widest text-xs mb-6">
              {content.followTitle}
            </h4>
            <ul className="space-y-4">
              {socialLinks.map(({ name, href, icon: Icon, hoverColor, label }) => (
                <li key={name}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 text-gray-500 ${hoverColor} text-sm transition-colors duration-300 group`}
                  >
                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-gray-200 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                      <Icon size={15} />
                    </span>
                    <span className="font-medium">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-xs font-medium uppercase tracking-widest">
              © {currentYear} Tirumala Cell Point. {content.rights}
            </p>
            <div className="flex gap-6">
              <span className="text-[10px] text-gray-400 uppercase font-bold tracking-tighter">
                {content.auth}
              </span>
              <span className="text-[10px] text-gray-400 uppercase font-bold tracking-tighter">
                {content.spare}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;