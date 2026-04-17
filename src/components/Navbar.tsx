'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../assets/thirumla logo.png';
import venky from '../assets/venky.png';
import { Menu, X, MessageCircle, ChevronRight } from 'lucide-react';
import { useLanguage } from '../utils/LanguageContext';

const Navbar = () => {
  const { lang, setLang } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: lang === 'en' ? 'Home' : 'హోమ్', href: '#' },
    { name: lang === 'en' ? 'Mobiles' : 'మొబైల్స్', href: '#mobiles' },
    { name: lang === 'en' ? 'Accessories' : 'యాక్సెసరీస్', href: '#accessories' },
    { name: lang === 'en' ? 'Contact' : 'సంప్రదించండి', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Reduced height */}
        <div className="flex justify-between items-center h-16 md:h-20">

          {/* LEFT SIDE */}
          <div className="flex items-center gap-3">

            {/* ✅ Venkateswara Image FIXED */}
            <div className="flex items-center justify-center w-20 h-20 md:w-41 md:h-41">
              <Image
                src={venky}
                alt="Venkateswara"
                width={80}
                height={80}
                className="object-contain"
                priority
              />
            </div>

            {/* Logo */}
            <a href="#" className="flex items-center">
              <Image
                src={logo}
                alt="Tirumala Cell Point Logo"
                width={150}
                height={45}
                className="object-contain"
                priority
              />
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-gray-600 hover:text-black transition"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3 md:gap-4">

            {/* Language Toggle */}
            <div className="flex items-center bg-gray-100 rounded-full p-1 border border-gray-200">
              <button
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-full ${
                  lang === 'en'
                    ? 'bg-white text-black shadow-sm'
                    : 'text-gray-500'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('te')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-full ${
                  lang === 'te'
                    ? 'bg-white text-black shadow-sm'
                    : 'text-gray-500'
                }`}
              >
                తెలుగు
              </button>
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919999999999"
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-[#E53935] text-white text-sm font-semibold rounded-full hover:bg-[#c62828] transition"
            >
              <MessageCircle size={16} />
              {lang === 'en' ? 'WhatsApp' : 'వాట్సాప్'}
            </a>

            {/* Mobile Toggle */}
            <button
              className="md:hidden p-2 text-gray-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 right-0 bg-white border-b border-gray-100 transition-all duration-300 md:hidden ${
          isMobileMenuOpen
            ? 'translate-y-0 opacity-100'
            : '-translate-y-4 opacity-0 pointer-events-none'
        }`}
      >
        <div className="p-5 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="flex items-center justify-between text-base font-medium text-gray-600 hover:text-[#E53935]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
              <ChevronRight size={18} className="text-gray-300" />
            </a>
          ))}

          <div className="pt-4 border-t border-gray-100">
            <a
              href="https://wa.me/919999999999"
              className="flex items-center justify-center gap-2 w-full py-3 bg-[#E53935] text-white font-semibold rounded-xl"
            >
              <MessageCircle size={18} />
              {lang === 'en'
                ? 'Chat on WhatsApp'
                : 'వాట్సాప్‌లో చాట్ చేయండి'}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;