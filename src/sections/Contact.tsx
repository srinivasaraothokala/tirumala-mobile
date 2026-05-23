'use client';

// C:\Users\styli\tirumala-mobile\src\sections\Contact.tsx

import React, { useState, useCallback, useMemo } from 'react';
import { Phone, MapPin, Clock, Send, CheckCircle, Loader2 } from 'lucide-react';
import { useLanguage } from '../utils/LanguageContext';

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────
type Lang = 'en' | 'te';

interface FormData {
  name:    string;
  phone:   string;
  message: string;
}

interface FormErrors {
  name?:    string;
  phone?:   string;
  message?: string;
}

interface Translation {
  label:           string;
  heading:         string;
  subtext:         string;
  locTitle:        string;
  locVal:          string;
  timeTitle:       string;
  timeVal:         string;
  waBtn:           string;
  callBtn:         string;
  formTitle:       string;
  formName:        string;
  formPhone:       string;
  formMsg:         string;
  formPlaceName:   string;
  formPlacePhone:  string;
  formPlaceMsg:    string;
  formSubmit:      string;
  successMsg:      (name: string) => string;
  errRequired:     string;
  errPhone:        string;
  errMsg:          string;
}

// ─────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────
const WHATSAPP_NUMBER = '919848442266';
const PHONE_NUMBER    = '9848442266';
const WA_GREEN        = '#25D366';

const TRANSLATIONS: Record<Lang, Translation> = {
  en: {
    label:          'Connect',
    heading:         'Get in Touch',
    subtext:         "Have a specific model in mind or need a repair quote? Reach out to Narasaraopet's most trusted mobile hub.",
    locTitle:        'Location',
    locVal:          'Siri Dental Line Shope ,OPP GMR grands Palnadu Narasaraopet 522601',
    timeTitle:       'Store Timings',
    timeVal:         'Mon — Sat: 10:00 AM – 9:00 PM',
    waBtn:           'Chat on WhatsApp',
    callBtn:         'Call Now',
    formTitle:       'Quick Inquiry',
    formName:        'Full Name',
    formPhone:       'Phone Number',
    formMsg:         'Message',
    formPlaceName:   'Your full name',
    formPlacePhone:  'e.g. +91 98765 43210',
    formPlaceMsg:    'Which model or service are you looking for?',
    formSubmit:      'Send Inquiry',
    successMsg:      (name) => `Thank you ${name}! We will get back to you shortly.`,
    errRequired:     'This field is required',
    errPhone:        'Enter a valid 10-digit phone number',
    errMsg:          'Message must be at least 10 characters',
  },
  te: {
    label:          'సంప్రదించండి',
    heading:         'మమ్మల్ని కలవండి',
    subtext:         'మీకు ఏదైనా నిర్దిష్ట మోడల్ కావాలా లేదా రిపేర్ కోట్ కావాలా? నరసరావుపేటలో అత్యంత విశ్వసనీయమైన మొబైల్ హబ్‌ను సంప్రదించండి.',
    locTitle:        'చిరునామా',
    locVal:          'సిరి డెంటల్, జీఎమ్ఆర్ గ్రాండ్స్ (GMR Grands) ఎదురుగా, పల్నాడు రోడ్, నరసరావుపేట, ఆంధ్రప్రదేశ్ - 522601',
    timeTitle:       'స్టోర్ సమయాలు',
    timeVal:         'సోమ — శని: ఉదయం 10:00 - రాత్రి 9:00',
    waBtn:           'వాట్సాప్ ద్వారా చాట్ చేయండి',
    callBtn:         'కాల్ చేయండి',
    formTitle:       'త్వరిత విచారణ',
    formName:        'పూర్తి పేరు',
    formPhone:       'ఫోన్ నంబర్',
    formMsg:         'సందేశం',
    formPlaceName:   'మీ పూర్తి పేరు',
    formPlacePhone:  'ఉదా: +91 98765 43210',
    formPlaceMsg:    'మీకు ఏ మోడల్ లేదా సర్వీస్ కావాలి?',
    formSubmit:      'విచారణ పంపండి',
    successMsg:      (name) => `ధన్యవాదాలు ${name}! మేము మిమ్మల్ని త్వరలోనే సంప్రదిస్తాము.`,
    errRequired:     'ఈ ఫీల్డ్ అవసరం',
    errPhone:        'చెల్లుబాటు అయ్యే 10-అంకెల ఫోన్ నంబర్ నమోదు చేయండి',
    errMsg:          'సందేశం కనీసం 10 అక్షరాలు ఉండాలి',
  },
};

const INITIAL_FORM: FormData = { name: '', phone: '', message: '' };

const validate = (data: FormData, t: Translation): FormErrors => {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = t.errRequired;
  if (!data.phone.trim()) errors.phone = t.errRequired;
  else if (!/^\d{10}$/.test(data.phone.replace(/\D/g, ''))) errors.phone = t.errPhone;
  if (!data.message.trim()) errors.message = t.errRequired;
  else if (data.message.trim().length < 10) errors.message = t.errMsg;
  return errors;
};

// Official WhatsApp SVG Logo for professional look
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.411.001 12.045c0 2.12.554 4.189 1.604 6.04L0 24l6.117-1.605a11.803 11.803 0 005.925 1.583h.005c6.634 0 12.046-5.411 12.049-12.047.002-3.216-1.248-6.241-3.517-8.512z" />
  </svg>
);



interface FieldProps {
  label:       string;
  error?:      string;
  children:    React.ReactNode;
  htmlFor:     string;
  required?:   boolean;
}

const Field = ({ label, error, children, htmlFor, required }: FieldProps) => (
  <div className="space-y-1">
    <label htmlFor={htmlFor} className="text-sm font-semibold text-gray-700">
      {label}{required && <span className="text-[#E53935] ml-0.5">*</span>}
    </label>
    {children}
    {error && <p role="alert" className="text-xs text-red-500 font-medium mt-0.5">{error}</p>}
  </div>
);

const INPUT_BASE =
  'w-full px-4 py-3 rounded-xl border text-sm transition-colors duration-200 outline-none ' +
  'focus:ring-2 focus:ring-[#E53935]/20 focus:border-[#E53935] placeholder:text-gray-400';

const Contact = () => {
  const { lang } = useLanguage();
  const safeLang = (lang as Lang) ?? 'en';
  const t = useMemo(() => TRANSLATIONS[safeLang], [safeLang]);

  const [formData, setFormData]   = useState<FormData>(INITIAL_FORM);
  const [errors,   setErrors]     = useState<FormErrors>({});
  const [loading,  setLoading]    = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (errors[name as keyof FormErrors]) {
        setErrors((prev) => ({ ...prev, [name]: undefined }));
      }
    },
    [errors]
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const validationErrors = validate(formData, t);
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }

      setLoading(true);
      const message = encodeURIComponent(
        `*New Inquiry — Tirumala Cell Point*\n\nName: ${formData.name}\nPhone: ${formData.phone}\nMessage: ${formData.message}`
      );

      setTimeout(() => {
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
        setLoading(false);
        setSubmitted(true);
        setFormData(INITIAL_FORM);
        setErrors({});
        setTimeout(() => setSubmitted(false), 5000);
      }, 600);
    },
    [formData, t]
  );

  const waGreetingLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi! I want to know about your mobile offers.')}`;

  return (
    <section id="contact" className="py-24 bg-gray-50/50" aria-label="Contact section">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* LEFT: Info */}
          <div className="space-y-10">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#E53935] mb-3 block">{t.label}</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t.heading}</h2>
              <p className="text-gray-500 text-lg max-w-md leading-relaxed">{t.subtext}</p>
            </div>

            <address className="not-italic bg-white border border-gray-100 p-8 rounded-3xl space-y-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-[#E53935]" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{t.locTitle}</h4>
                  <p className="text-gray-500 text-sm mt-0.5">{t.locVal}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                  <Phone size={16} className="text-[#E53935]" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Phone</h4>
                  <a href={`tel:+${PHONE_NUMBER}`} className="text-gray-500 text-sm mt-0.5 hover:text-[#E53935] transition-colors">
                    +91 {PHONE_NUMBER}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                  <Clock size={16} className="text-[#E53935]" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{t.timeTitle}</h4>
                  <p className="text-gray-500 text-sm mt-0.5">{t.timeVal}</p>
                </div>
              </div>
            </address>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* ✅ PRO UPDATE: Official WhatsApp Branding */}
              <a
                href={waGreetingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-8 py-4 bg-[#25D366] text-white rounded-full font-bold hover:bg-[#128C7E] active:scale-95 transition-all duration-200 shadow-lg shadow-green-900/10"
              >
                <WhatsAppIcon className="w-5 h-5" />
                {t.waBtn}
              </a>

              <a
                href={`tel:+${PHONE_NUMBER}`}
                className="flex items-center justify-center gap-2 px-8 py-4 border border-gray-200 rounded-full font-bold text-gray-700 hover:bg-gray-50 hover:border-gray-300 active:scale-95 transition-all duration-200"
              >
                <Phone size={18} />
                {t.callBtn}
              </a>
            </div>
          </div>

          {/* RIGHT: Form */}
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">{t.formTitle}</h3>

            {submitted && (
              <div role="status" className="mb-6 flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm font-medium animate-in fade-in">
                <CheckCircle size={18} className="shrink-0" />
                {t.successMsg(formData.name || 'there')}
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <Field label={t.formName} htmlFor="contact-name" error={errors.name} required>
                <input id="contact-name" type="text" name="name" autoComplete="name" required value={formData.name} onChange={handleChange} placeholder={t.formPlaceName} className={`${INPUT_BASE} ${errors.name ? 'border-red-400' : 'border-gray-200'}`} />
              </Field>

              <Field label={t.formPhone} htmlFor="contact-phone" error={errors.phone} required>
                <input id="contact-phone" type="tel" name="phone" autoComplete="tel" required value={formData.phone} onChange={handleChange} placeholder={t.formPlacePhone} className={`${INPUT_BASE} ${errors.phone ? 'border-red-400' : 'border-gray-200'}`} />
              </Field>

              <Field label={t.formMsg} htmlFor="contact-message" error={errors.message} required>
                <textarea id="contact-message" name="message" rows={4} required value={formData.message} onChange={handleChange} placeholder={t.formPlaceMsg} className={`${INPUT_BASE} resize-none ${errors.message ? 'border-red-400' : 'border-gray-200'}`} />
              </Field>

              <button type="submit" disabled={loading} className="w-full py-3.5 bg-[#E53935] text-white rounded-full font-bold hover:bg-[#c62828] active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70 shadow-sm">
                {loading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                {t.formSubmit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;