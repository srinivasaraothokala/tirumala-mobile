import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/sections/Hero';
import Services from '@/sections/Services';
import BrandSlider from '@/sections/BrandSlider';
import Offers from '@/sections/Offers';
import Gallery from '@/sections/Gallery';
import Location from '@/sections/Location'; // New Import
import Contact from '@/sections/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-white">
      {/* Sticky Navigation: brand identity & language toggle */}
      <Navbar />

      {/* Hero Section: Apple-style minimalist layout */}
      <Hero />

      {/* Services Section: Bento-style grid for categories */}
      <Services />

      {/* BRAND SCROLL: High-end moving logo showcase */}
      <BrandSlider />

      {/* Promotion Marquee: Scrolling sales alert */}
      <div className="bg-[#FBC02D] py-6 overflow-hidden whitespace-nowrap border-y border-yellow-500/20">
        <div className="inline-block animate-marquee">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="mx-8 font-black text-xl text-gray-900 italic tracking-widest uppercase">
              Limited Time Deals • Best Prices in Narasaraopet • Tirumala Cell Point •
            </span>
          ))}
        </div>
      </div>

      {/* Offers Section: Exchange & Open Box deals */}
      <Offers />

      {/* Gallery Section: Product and store showcase */}
      <Gallery />

      {/* Location Section: Interactive Map and Store Details */}
      <Location />

      {/* Contact Section: Lead generation & WhatsApp access */}
      <Contact />

      {/* Trust Banner: Final brand authority reinforcement */}
      <section className="bg-gray-50 py-16 border-t border-gray-100">
        <div className="container mx-auto max-w-7xl px-4 flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
          <span className="text-gray-900 font-black text-xl italic tracking-tighter uppercase">Authorized Retailer</span>
          <span className="text-gray-900 font-black text-xl italic tracking-tighter uppercase">Genuine Spares</span>
          <span className="text-gray-900 font-black text-xl italic tracking-tighter uppercase">Instant Exchange</span>
          <span className="text-gray-900 font-black text-xl italic tracking-tighter uppercase">Open Box Certified</span>
        </div>
      </section>

      {/* Premium Modular Footer */}
      <Footer />
    </main>
  );
}