'use client';

/**
 * Tirumala Cell Point - Slim Premium Navbar
 * Path: src/components/Navbar.tsx
 * Design: Low-profile Floating Glass Dock
 */

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Assets
import logo from '../assets/thirumla logo-Photoroom.webp';
import venky from '../assets/venky-Photoroom.webp';

// Icons & Context
import { Menu, X, ChevronRight } from 'lucide-react';
import { useLanguage, type Lang } from '../utils/LanguageContext';

const WHATSAPP_NUMBER = '919848442266';
const FERRARI_RED = '#FF2800'; 

// Official WhatsApp Logo Component
const WhatsAppLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 448 512" className={className} fill="currentColor">
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.1 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.2-3.2-5.6-.3-8.6 2.4-11.3 2.5-2.4 5.5-6.5 8.3-9.7 2.8-3.3 3.7-5.6 5.5-9.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.5 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
  </svg>
);

const Navbar = () => {
  const { lang, setLang } = useLanguage();
  const safeLang = (lang as Lang) ?? 'en';

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: safeLang === 'en' ? 'Home' : 'హోమ్', href: '#' },
    { name: safeLang === 'en' ? 'Mobiles' : 'మొబైల్స్', href: '#mobiles' },
    { name: safeLang === 'en' ? 'Accessories' : 'యాక్సెసరీస్', href: '#accessories' },
    { name: safeLang === 'en' ? 'Contact' : 'సంప్రదించండి', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href !== '#') {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 pt-0 md:pt-2">
      <nav
        className={`transition-all duration-700 ease-in-out flex items-center justify-between
          ${isScrolled 
            ? 'w-[95%] md:w-[85%] lg:w-[80%] bg-white/80 backdrop-blur-xl border border-white/20 shadow-[0_15px_40px_rgba(0,0,0,0.08)] py-1.5 px-6 rounded-full' 
            : 'w-full bg-white py-2 px-4 md:px-10 border-b border-gray-100 shadow-none rounded-none'
          }`}
      >
        {/* LEFT SECTION: Slim Branding */}
        <div className="flex items-center gap-3 md:gap-6">
          
          {/* Deity Image: Reduced sizes */}
          <div className="relative group cursor-pointer hidden sm:block">
            <div className={`relative transition-all duration-500 rounded-full border-2 border-[#FFD700] p-0.5 bg-white
              ${isScrolled ? 'w-10 h-10' : 'w-14 h-14 md:w-16 md:h-16'}
              shadow-[0_0_10px_rgba(255,215,0,0.2)] group-hover:shadow-[0_0_20px_rgba(255,215,0,0.4)]
            `}>
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image src={venky} alt="Venkateswara" fill className="object-contain scale-110" priority />
              </div>
            </div>
            <div className="absolute inset-0 bg-yellow-400/10 blur-xl rounded-full -z-10 animate-pulse" />
          </div>

          {/* Logo: Slimmed down dimensions */}
          <a href="#" className="flex-shrink-0 transition-transform active:scale-95">
            <Image
              src={logo}
              alt="Tirumala Cell Point"
              width={280} 
              height={60}
              className={`object-contain transition-all duration-500 
                ${isScrolled ? 'w-[140px] md:w-[180px]' : 'w-[160px] md:w-[240px]'}`}
              priority
            />
          </a>
        </div>

        {/* CENTER SECTION: Nav Links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="px-5 py-1.5 text-[10px] font-black uppercase tracking-[0.15em] text-gray-500 hover:text-white hover:bg-[#FF2800] rounded-full transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* RIGHT SECTION: Compact Controls */}
        <div className="flex items-center gap-3">
          
          <div className="hidden md:flex bg-gray-50 rounded-full p-1 border border-gray-200">
            {(['en', 'te'] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1 text-[9px] font-black rounded-full transition-all duration-300 ${
                  safeLang === l ? 'bg-[#FF2800] text-white shadow-sm' : 'text-gray-400 hover:text-gray-900'
                }`}
              >
                {l === 'en' ? 'EN' : 'తెలుగు'}
              </button>
            ))}
          </div>

          {/* Compact WhatsApp Button */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center bg-[#25D366] text-white font-bold rounded-full transition-all duration-500 hover:bg-[#128C7E] active:scale-90
              ${isScrolled ? 'w-9 h-9' : 'px-5 py-2 gap-2 shadow-md shadow-green-500/10'}
            `}
          >
            <WhatsAppLogo className={isScrolled ? 'w-4 h-4' : 'w-3.5 h-3.5'} />
            {!isScrolled && <span className="text-[10px] uppercase font-black tracking-tighter">WhatsApp</span>}
          </a>

          <button
            className="lg:hidden w-9 h-9 flex items-center justify-center bg-gray-50 rounded-full text-gray-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* MOBILE OVERLAY */}
      <div
        className={`fixed inset-0 bg-white/95 backdrop-blur-2xl z-[60] transition-all duration-700 flex flex-col items-center justify-center gap-6 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full pointer-events-none'
        }`}
      >
        <button className="absolute top-6 right-6 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center" onClick={() => setIsMobileMenuOpen(false)}>
          <X size={20} />
        </button>

        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-3xl font-black uppercase tracking-tighter text-gray-900 hover:text-[#FF2800]"
            onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
          >
            {link.name}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Navbar;