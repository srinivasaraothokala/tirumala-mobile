import React from 'react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

const Location = () => {
  return (
    <section className="py-24 bg-[#050505] border-t border-white/5" id="location">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side: Contact Details */}
            <div className="space-y-8">
              <div>
                <h3 className="text-[#E53935] font-bold text-sm uppercase tracking-widest mb-4">Visit Our Store</h3>
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  Tirumala Cell Point <br /> <span className="text-white/40 text-3xl">Narasaraopeta</span>
                </h2>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="p-3 rounded-xl bg-white/5 group-hover:bg-[#E53935]/10 transition-colors">
                    <MapPin className="text-[#E53935] w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-lg">Our Address</p>
                    <p className="text-white/50 leading-relaxed">
                      Opp. GVR Grand Lodge, Ameensaheb Palem,<br /> 
                      Arundelpet, Narasaraopeta, AP 522601
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-white/5">
                    <Clock className="text-[#FBC02D] w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-lg">Working Hours</p>
                    <p className="text-white/50">Mon - Sat: 10:00 AM - 9:00 PM</p>
                    <p className="text-red-500/80 text-sm font-medium">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=Tirumala+Cell+Point+Narasaraopet"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#E53935] hover:bg-[#c62828] text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-red-600/20"
              >
                <Navigation size={20} />
                Get Directions
              </a>
            </div>

            {/* Right Side: Map Embed */}
            <div className="relative h-[450px] w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <iframe
                title="Tirumala Cell Point Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.743111005697!2d80.04480427515088!3d16.23601898446869!2m3!1f0!2f0!3f0!3m2!1i1024!2i1028!4f13.1!3m3!1m2!1s0x3af4837bb4b1ea65%3A0x38e6c27c5164cc3f!2sTIRUMALA%20CELL%20POINT!5e0!3m2!1sen!2sin!4v1713123456789!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;