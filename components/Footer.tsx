'use client'

import { GraduationCap, Mail, MessageSquare } from 'lucide-react'
import { useLanguage } from '@/lib/i18n'
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
    <footer className="relative border-t border-slate-200 mt-12 sm:mt-16">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      {/* Site map and contact details */}
      <div className="border-t border-slate-200 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14">
          {/* Four columns so every heading sits on the same line */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.1fr] gap-10 lg:gap-12">
            <div>
              <a href="#accueil" className="inline-flex items-center gap-2.5 group mb-3">
                <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 shadow-sm shadow-emerald-600/20 group-hover:scale-105 transition-transform duration-300">
                  <GraduationCap className="w-6 h-6 text-white" strokeWidth={2.2} />
                </div>
                <span className="font-display text-lg sm:text-xl font-bold tracking-tight gradient-text">
                  {t.nav.brand}
                </span>
              </a>
              <p className="text-sm text-slate-600 leading-relaxed max-w-xs">{t.footer.tagline}</p>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
                {t.footer.levelsTitle}
              </h4>
              <ul className="space-y-2.5 list-none">
                {t.hero.audienceChips.map((level) => (
                  <li key={level} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="mt-[0.4rem] w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {level}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
                {t.footer.subjectsTitle}
              </h4>
              <ul className="space-y-2.5 list-none">
                {t.footer.subjects.map((subject) => (
                  <li key={subject} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="mt-[0.4rem] w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    {subject}
                  </li>
                ))}
              </ul>
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
