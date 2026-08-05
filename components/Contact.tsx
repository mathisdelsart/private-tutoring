'use client'

import { useState } from 'react'
import { ArrowUpRight, Mail, MessageSquare } from 'lucide-react'
import ContactForm from './ContactForm'
import Segmented from './Segmented'
import SectionHeader from './SectionHeader'
import WhatsAppIcon from './WhatsAppIcon'
import { useLanguage } from '@/lib/i18n'

interface ContactProps {
  email: string
  whatsapp: string
  nom: string
}

export default function Contact({ email, whatsapp, nom }: ContactProps) {
  const { t } = useLanguage()
  // Writing directly is the lightest way in, so it is the one on screen first
  const [mode, setMode] = useState<'form' | 'direct'>('direct')
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
      icon: MessageSquare,
      title: 'SMS',
      value: phoneDisplay,
      link: smsLink,
      newTab: false,
      description: t.contact.smsDesc,
    },
    {
      icon: WhatsAppIcon,
      title: 'WhatsApp',
      value: phoneDisplay,
      link: whatsappLink,
      newTab: true,
      description: t.contact.whatsappDesc,
    },
    {
      icon: Mail,
      title: 'Email',
      value: email,
      link: emailLink,
      newTab: false,
      description: t.contact.emailDesc,
    },
  ]

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 relative reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={t.contact.eyebrow}
          title={t.contact.title}
          subtitle={t.contact.subtitle}
          className="mb-8 sm:mb-10"
        />

        {/* Same switcher as the subjects section, so the two read as one system */}
        <div className="flex justify-center">
          <Segmented
            options={[
              { id: 'direct', label: t.contact.tabDirect },
              { id: 'form', label: t.contact.tabForm },
            ]}
            value={mode}
            onChange={(id) => setMode(id as 'form' | 'direct')}
            ariaLabel={t.contact.title}
            panelPrefix="contact-panel-"
            className="w-full sm:w-auto max-w-md"
          />
        </div>
        {/* The caption says what the chosen route is, instead of pushing one */}
        <p
          key={mode}
          className="mt-4 mb-8 sm:mb-10 text-center text-[13px] sm:text-sm text-slate-500 max-w-xl mx-auto px-4 animate-[fadeInUp_0.35s_ease-out]"
        >
          {mode === 'direct' ? t.contact.hintDirect : t.contact.hintForm}
        </p>

        <div id={`contact-panel-${mode}`} role="tabpanel">
          {mode === 'form' ? (
            <ContactForm email={email} whatsapp={whatsapp} nom={nom} />
          ) : (
            /* Three rows in one block rather than three tall cards: the same
               information, a third of the height, and every row is a real target */
            <div className="max-w-2xl mx-auto rounded-2xl border border-slate-200 bg-white divide-y divide-slate-100 overflow-hidden shadow-[0_1px_2px_rgba(15,23,42,0.04),0_8px_24px_rgba(15,23,42,0.05)]">
              {contactMethods.map((method) => {
                const Icon = method.icon
                return (
                  <a
                    key={method.title}
                    href={method.link}
                    target={method.newTab ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 px-4 sm:px-6 py-4 sm:py-5 hover:bg-slate-50 transition-colors duration-200"
                  >
                    <span className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0 text-primary group-hover:bg-emerald-100 transition-colors duration-200">
                      <Icon className="w-[18px] h-[18px]" />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-semibold text-slate-900">
                        {method.title}
                      </span>
                      <span className="block text-sm text-slate-600 break-words">
                        {method.value}
                      </span>
                    </span>

                    <span className="hidden sm:block text-xs text-slate-500 whitespace-nowrap">
                      {method.description}
                    </span>

                    <ArrowUpRight
                      aria-hidden="true"
                      className="w-4 h-4 flex-shrink-0 text-slate-300 group-hover:text-primary transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
