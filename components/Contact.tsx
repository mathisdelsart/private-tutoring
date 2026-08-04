'use client'

import { useState } from 'react'
import { Mail, MessageCircle, MessageSquare } from 'lucide-react'
import ContactForm from './ContactForm'
import WhatsAppIcon from './WhatsAppIcon'
import { useLanguage } from '@/lib/i18n'

interface ContactProps {
  email: string
  whatsapp: string
  nom: string
}

export default function Contact({ email, whatsapp, nom }: ContactProps) {
  const { t } = useLanguage()
  const [showForm, setShowForm] = useState(false)
  const phoneDisplay = '+32 468.38.63.54'
  const whatsappText = t.contact.directWhatsappText.replace('{nom}', nom)
  const whatsappLink = `https://wa.me/${whatsapp}?text=${encodeURIComponent(whatsappText)}`
  const emailLink = `mailto:${email}?subject=${encodeURIComponent(t.contact.directEmailSubject)}`
  // "?&body=" is the form both iOS and Android accept: iOS expects the body after
  // "&", Android after "?", and this satisfies each of them.
  const smsLink = `sms:+${whatsapp}?&body=${encodeURIComponent(
    t.contact.directSmsText.replace('{nom}', nom)
  )}`

  const contactMethods = [
    {
      icon: <MessageSquare className="w-7 h-7 sm:w-8 sm:h-8" />,
      title: 'SMS',
      value: phoneDisplay,
      link: smsLink,
      newTab: false,
      color: 'from-emerald-500 to-teal-600',
      description: t.contact.smsDesc
    },
    {
      icon: <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8" />,
      title: 'WhatsApp',
      value: phoneDisplay,
      link: whatsappLink,
      newTab: true,
      color: 'from-emerald-500 to-teal-600',
      description: t.contact.whatsappDesc
    },
    {
      icon: <Mail className="w-7 h-7 sm:w-8 sm:h-8" />,
      title: 'Email',
      value: email,
      link: emailLink,
      newTab: false,
      color: 'from-emerald-500 to-teal-600',
      description: t.contact.emailDesc
    },
  ]

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 relative reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="eyebrow mb-4">{t.contact.eyebrow}</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 text-slate-900">
            {t.contact.title}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-textSecondary max-w-3xl mx-auto mb-4 sm:mb-6 px-4">
            {t.contact.subtitle}
          </p>

          {/* Toggle buttons */}
          <div className="flex flex-col items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto px-4 sm:px-0">
              <button
                onClick={() => setShowForm(true)}
                className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base ${
                  showForm
                    ? 'bg-primary text-white shadow-lg shadow-primary/40'
                    : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
                }`}
              >
                <Mail className="w-4 h-4" />
                {t.contact.tabForm}
              </button>
              <button
                onClick={() => setShowForm(false)}
                className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base ${
                  !showForm
                    ? 'bg-primary text-white shadow-lg shadow-primary/40'
                    : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
                }`}
              >
                <MessageCircle className="w-4 h-4" />
                {t.contact.tabDirect}
              </button>
            </div>
            <p className="text-xs text-slate-400 italic px-4 text-center">{t.contact.tabHint}</p>
          </div>
        </div>

        {showForm ? (
          <ContactForm email={email} whatsapp={whatsapp} nom={nom} />
        ) : (
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 max-w-5xl mx-auto">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target={method.newTab ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="card relative overflow-hidden p-6 sm:p-8 group hover:-translate-y-1 hover:border-emerald-200 hover:shadow-[0_18px_45px_rgba(5,150,105,0.13)] transition-all duration-400 flex flex-col items-center text-center"
              >
                {/* Effet de brillance au hover - Désactivé sur mobile */}
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-emerald-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center text-white mb-4 sm:mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  {method.icon}
                </div>
                <div className="relative z-10">
                  <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-slate-900">{method.title}</h4>
                  <p className="text-slate-600 font-medium text-xs sm:text-sm mb-1 sm:mb-2 break-words">{method.value}</p>
                  <p className="text-xs text-textSecondary italic">{method.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
        )}
      </div>
    </section>
  )
}
