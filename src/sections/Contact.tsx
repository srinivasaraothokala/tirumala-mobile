
'use client';

import React, { useState } from 'react';
import { MessageCircle, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useLanguage } from '../utils/LanguageContext';

const Contact = () => {
  const { lang } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const t = {
    en: {
      label: "Connect",
      heading: "Get in Touch",
      subtext: "Have a specific model in mind or need a repair quote? Reach out to Narasaraopet's most trusted mobile hub.",
      locTitle: "Location",
      timeTitle: "Store Timings",
      timeVal: "Mon — Sat: 10:00 AM - 9:00 PM",
      waBtn: "Chat on WhatsApp",
      callBtn: "Call Now",
      formTitle: "Quick Inquiry",
      formName: "Name",
      formPhone: "Phone Number",
      formMsg: "Message",
      formPlaceName: "Your full name",
      formPlacePhone: "e.g. +91 9876543210",
      formPlaceMsg: "Which model or service are you looking for?",
      formSubmit: "Send Inquiry",
      success: (name: string) => `Thank you ${name}! We will get back to you shortly.`
    },
    te: {
      label: "సంప్రదించండి",
      heading: "మమ్మల్ని కలవండి",
      subtext: "మీకు ఏదైనా నిర్దిష్ట మోడల్ కావాలా లేదా రిపేర్ కోట్ కావాలా? నరసరావుపేటలో అత్యంత విశ్వసనీయమైన మొబైల్ హబ్‌ను సంప్రదించండి.",
      locTitle: "చిరునామా",
      timeTitle: "స్టోర్ సమయాలు",
      timeVal: "సోమ — శని: ఉదయం 10:00 - రాత్రి 9:00",
      waBtn: "వాట్సాప్ ద్వారా చాట్ చేయండి",
      callBtn: "కాల్ చేయండి",
      formTitle: "త్వరిత విచారణ",
      formName: "పేరు",
      formPhone: "ఫోన్ నంబర్",
      formMsg: "సందేశం",
      formPlaceName: "మీ పూర్తి పేరు",
      formPlacePhone: "ఉదా: +91 9876543210",
      formPlaceMsg: "మీకు ఏ మోడల్ లేదా సర్వీస్ కావాలి?",
      formSubmit: "విచారణ పంపండి",
      success: (name: string) => `ధన్యవాదాలు ${name}! మేము మిమ్మల్ని త్వరలోనే సంప్రదిస్తాము.`
    }
  };

  const content = lang === 'en' ? t.en : t.te;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nMessage: ${formData.message}`
    );

    // Open WhatsApp with form data
    window.open(`https://wa.me/919848442266?text=${message}`, '_blank');

    alert(content.success(formData.name));

    setFormData({ name: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* LEFT SIDE */}
          <div className="space-y-10">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#E53935] mb-3 block">
                {content.label}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {content.heading}
              </h2>
              <p className="text-gray-500 text-lg max-w-md">
                {content.subtext}
              </p>
            </div>

            {/* Info */}
            <div className="bg-white border border-gray-100 p-8 rounded-3xl space-y-6 shadow-sm">
              <div className="flex items-start gap-4">
                <MapPin className="text-[#E53935]" />
                <div>
                  <h4 className="font-bold text-gray-900">{content.locTitle}</h4>
                  <p className="text-gray-500 text-sm">Narasaraopet, AP</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="text-[#E53935]" />
                <div>
                  <h4 className="font-bold text-gray-900">{content.timeTitle}</h4>
                  <p className="text-gray-500 text-sm">{content.timeVal}</p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/919848442266?text=Hi%20I%20want%20to%20know%20about%20your%20mobile%20offers"
                target="_blank"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-[#E53935] text-white rounded-full font-bold hover:bg-[#c62828] transition"
              >
                <MessageCircle size={20} />
                {content.waBtn}
              </a>

              <a
                href="tel:9848442266"
                className="flex items-center justify-center gap-2 px-8 py-4 border border-gray-200 rounded-full font-bold text-gray-700 hover:bg-gray-50 transition"
              >
                <Phone size={18} />
                {content.callBtn}
              </a>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg">
            <h3 className="text-2xl font-bold mb-6">{content.formTitle}</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder={content.formPlaceName}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E53935] outline-none"
              />

              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder={content.formPlacePhone}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E53935] outline-none"
              />

              <textarea
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                placeholder={content.formPlaceMsg}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E53935] outline-none"
              />

              <button
                type="submit"
                className="w-full py-3 bg-[#E53935] text-white rounded-full font-bold hover:bg-[#c62828] transition flex items-center justify-center gap-2"
              >
                <Send size={18} />
                {content.formSubmit}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;