'use client'

import { GraduationCap, Mail, MessageSquare, MapPin, ArrowRight } from 'lucide-react'
import { useLanguage } from '@/lib/i18n'
import { MAPS_URL } from '@/lib/maps'
import WhatsAppIcon from './WhatsAppIcon'

interface FooterProps {
  nom: string
  ville: string
  email: string
  whatsapp: string
}

export default function Footer({ nom, ville, email, whatsapp }: FooterProps) {
  const { t } = useLanguage()

  const links = [
    { icon: WhatsAppIcon, label: 'WhatsApp', href: `https://wa.me/${whatsapp}`, external: true },
    { icon: MessageSquare, label: '+32 468.38.63.54', href: `sms:+${whatsapp}`, external: false },
    { icon: Mail, label: email, href: `mailto:${email}`, external: false },
  ]

  return (
    <footer className="relative border-t border-slate-200 mt-8">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      {/* Closing call to action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 text-slate-900">
          {t.footer.title}
        </h3>
        <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          {t.footer.line1} <br />
          <span className="gradient-text font-semibold">{t.footer.line2}</span>
        </p>

        <a
          href="#contact"
          className="group inline-flex items-center gap-2.5 mt-8 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white font-semibold shadow-[0_6px_20px_rgba(5,150,105,0.25)] hover:shadow-[0_10px_28px_rgba(5,150,105,0.35)] hover:-translate-y-0.5 transition-all duration-300"
        >
          {t.footer.cta}
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </a>
      </div>

      {/* Site map and contact details */}
      <div className="border-t border-slate-200 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14">
          <div className="grid grid-cols-1 md:grid-cols-[1.7fr_1fr] gap-10 md:gap-12 lg:gap-16">
            <div>
              <a href="#accueil" className="inline-flex items-center gap-2.5 group mb-3">
                <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 shadow-sm shadow-emerald-600/20 group-hover:scale-105 transition-transform duration-300">
                  <GraduationCap className="w-6 h-6 text-white" strokeWidth={2.2} />
                </div>
                <span className="font-display text-lg sm:text-xl font-bold tracking-tight gradient-text">
                  {t.nav.brand}
                </span>
              </a>
              <p className="text-sm text-slate-600 leading-relaxed max-w-sm mb-7">{t.footer.tagline}</p>

              {/* What is on offer, laid out instead of restated as a paragraph */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                    {t.footer.levelsTitle}
                  </h4>
                  <ul className="space-y-2 list-none">
                    {t.hero.audienceChips.map((level) => (
                      <li key={level} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="mt-[0.4rem] w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {level}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                    {t.footer.subjectsTitle}
                  </h4>
                  <ul className="space-y-2 list-none">
                    {t.footer.subjects.map((subject) => (
                      <li key={subject} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="mt-[0.4rem] w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        {subject}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
                {t.footer.contactTitle}
              </h4>
              <ul className="space-y-3 list-none">
                {links.map((link) => {
                  const Icon = link.icon
                  return (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={link.external ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2.5 text-sm text-slate-600 hover:text-primary transition-colors duration-300 break-all"
                      >
                        <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-emerald-50 border border-emerald-200 flex-shrink-0 group-hover:bg-emerald-100 transition-colors">
                          <Icon className="w-3.5 h-3.5 text-primary" />
                        </span>
                        {link.label}
                      </a>
                    </li>
                  )
                })}
                <li>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2.5 text-sm text-slate-600 hover:text-primary transition-colors duration-300"
                  >
                    <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-emerald-50 border border-emerald-200 flex-shrink-0 group-hover:bg-emerald-100 transition-colors">
                      <MapPin className="w-3.5 h-3.5 text-primary" />
                    </span>
                    {t.hero.zone}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Legal line */}
      <div className="border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <p className="text-xs sm:text-sm text-textSecondary">
            © {new Date().getFullYear()} <span className="font-medium text-slate-900">{nom}</span> ·{' '}
            {t.footer.role.replace('{ville}', ville)}
          </p>
          <p className="text-xs text-slate-400">{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  )
}
