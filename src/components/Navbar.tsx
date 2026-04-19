'use client';

// C:\Users\styli\tirumala-mobile\src\components\Navbar.tsx

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// ✅ Updated to WebP — 40-75% smaller than PNG
import logo  from '../assets/thirumla logo-Photoroom.webp';
import venky from '../assets/venky-Photoroom.webp';

import { Menu, X, MessageCircle, ChevronRight } from 'lucide-react';
import { useLanguage, type Lang } from '../utils/LanguageContext';

const WHATSAPP_NUMBER = '919848442266';

const Navbar = () => {
  const { lang, setLang } = useLanguage();
  const safeLang = (lang as Lang) ?? 'en';

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled,       setIsScrolled]       = useState(false);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: safeLang === 'en' ? 'Home'        : 'హోమ్',          href: '#'            },
    { name: safeLang === 'en' ? 'Mobiles'     : 'మొబైల్స్',      href: '#mobiles'     },
    { name: safeLang === 'en' ? 'Accessories' : 'యాక్సెసరీస్',   href: '#accessories' },
    { name: safeLang === 'en' ? 'Contact'     : 'సంప్రదించండి',  href: '#contact'     },
  ];

  // ✅ typed href parameter — fixes TypeScript red underline
  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href !== '#') {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-shadow duration-300 ${
        isScrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">

          {/* LEFT — Deity + Logo */}
          <div className="flex items-center gap-3">

            {/*
              ✅ venky-Photoroom.webp
              - fill + sizes → Vercel serves exact pixel size (no oversized download)
              - priority     → preloads in <head>, eliminates LCP delay
              - placeholder  → instant blur preview, zero layout shift
              - quality={85} → sharp but compressed
            */}
            <div className="relative w-12 h-12 md:w-16 md:h-16 flex-shrink-0">
              <Image
                src={venky}
                alt="Lord Venkateswara"
                fill
                sizes="(max-width: 768px) 48px, 64px"
                className="object-contain"
                priority
                quality={85}
                placeholder="blur"
              />
            </div>

            {/*
              ✅ thirumla logo-Photoroom.webp
              - width + height both set → no layout shift (CLS = 0)
              - sizes → browser picks right size per viewport
            */}
            <a href="#" aria-label="Tirumala Cell Point — Go to homepage">
              <Image
                src={logo}
                alt="Tirumala Cell Point Logo"
                width={150}
                height={45}
                sizes="(max-width: 768px) 120px, 150px"
                className="object-contain"
                priority
                quality={90}
                placeholder="blur"
              />
            </a>
          </div>

          {/* CENTER — Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="text-sm font-semibold text-gray-600 hover:text-[#E53935] transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#E53935] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* RIGHT — Lang + WhatsApp + Hamburger */}
          <div className="flex items-center gap-3 md:gap-4">

            {/* Language Toggle */}
            <div
              role="group"
              aria-label="Language selector"
              className="flex items-center bg-gray-100 rounded-full p-1 border border-gray-200"
            >
              <button
                onClick={() => setLang('en')}
                aria-pressed={safeLang === 'en'}
                className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all duration-200 ${
                  safeLang === 'en' ? 'bg-white text-black shadow-sm' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('te')}
                aria-pressed={safeLang === 'te'}
                className={`px-2.5 py-1 text-xs font-semibold rounded-full transition-all duration-200 ${
                  safeLang === 'te' ? 'bg-white text-black shadow-sm' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                తెలుగు
              </button>
            </div>

            {/* WhatsApp — Desktop */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-[#E53935] text-white text-sm font-semibold rounded-full hover:bg-[#c62828] active:scale-95 transition-all duration-200 shadow-sm"
            >
              <MessageCircle size={16} aria-hidden="true" />
              {safeLang === 'en' ? 'WhatsApp' : 'వాట్సాప్'}
            </a>

            {/* Hamburger — Mobile */}
            <button
              className="md:hidden p-2 text-gray-600 hover:text-[#E53935] transition-colors"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        role="menu"
        aria-hidden={!isMobileMenuOpen}
        className={`absolute top-full left-0 right-0 bg-white border-b border-gray-100 transition-all duration-300 md:hidden ${
          isMobileMenuOpen
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : '-translate-y-4 opacity-0 pointer-events-none'
        }`}
      >
        <div className="p-5 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              role="menuitem"
              className="flex items-center justify-between px-2 py-3 text-base font-medium text-gray-700 hover:text-[#E53935] hover:bg-red-50 rounded-lg transition-colors duration-150"
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
            >
              {link.name}
              <ChevronRight size={18} className="text-gray-300" aria-hidden="true" />
            </a>
          ))}

          <div className="pt-4 border-t border-gray-100">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="flex items-center justify-center gap-2 w-full py-3 bg-[#E53935] text-white font-semibold rounded-xl hover:bg-[#c62828] active:scale-95 transition-all duration-200 shadow-sm"
            >
              <MessageCircle size={18} aria-hidden="true" />
              {safeLang === 'en' ? 'Chat on WhatsApp' : 'వాట్సాప్‌లో చాట్ చేయండి'}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;