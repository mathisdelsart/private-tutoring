'use client'

import { ArrowRight, GraduationCap, Mail, MessageSquare } from 'lucide-react'
import { useLanguage } from '@/lib/i18n'
import { selectAudience } from '@/lib/audience'
import WhatsAppIcon from './WhatsAppIcon'

interface FooterProps {
  nom: string
  ville: string
  email: string
  whatsapp: string
}

// t.footer.subjects is the same four subjects in every language, so the audience
// each one belongs to can be addressed by position.
const SUBJECT_AUDIENCES = ['secondaire', 'secondaire', 'secondaire', 'superieur']

export default function Footer({ nom, ville, email, whatsapp }: FooterProps) {
  const { t } = useLanguage()

  const contactLinks = [
    { icon: WhatsAppIcon, label: 'WhatsApp', href: `https://wa.me/${whatsapp}`, external: true },
    { icon: MessageSquare, label: '+32 468.38.63.54', href: `sms:+${whatsapp}`, external: false },
    { icon: Mail, label: email, href: `mailto:${email}`, external: false },
  ]

  // Levels and subjects are not decoration: each one jumps to the subjects
  // section and opens the tab it belongs to.
  const audienceLink = (id: string) => ({
    href: '#matieres',
    onClick: () => selectAudience(id),
  })

  return (
    <footer className="relative mt-12 sm:mt-16 border-t border-slate-200">
      {/* The one flourish of the footer: a green hairline riding the top border */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-20 pb-8 sm:pb-10">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-[minmax(0,18rem)_1fr] lg:gap-16 xl:gap-24">
          {/* Identity */}
          <div>
            <a href="#accueil" className="group inline-flex items-center gap-2.5">
              <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 shadow-sm shadow-emerald-600/20 transition-transform duration-300 group-hover:scale-105">
                <GraduationCap className="w-6 h-6 text-white" strokeWidth={2.2} />
              </span>
              <span className="font-display text-lg font-bold tracking-tight gradient-text">
                {t.nav.brand}
              </span>
            </a>

            <p className="mt-5 text-sm text-slate-600 leading-relaxed max-w-[30ch]">
              {t.footer.tagline}
            </p>

            {/* A single quiet way out of the footer, rather than a second CTA block */}
            <a
              href="#contact"
              className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 hover:text-primary transition-colors duration-200"
            >
              {t.footer.cta}
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Site map */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:gap-x-12">
            <div>
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                {t.footer.levelsTitle}
              </h4>
              <ul className="mt-5 space-y-3 list-none">
                {t.services.audiences.map((audience) => (
                  <li key={audience.id}>
                    <a
                      {...audienceLink(audience.id)}
                      className="text-sm text-slate-600 hover:text-slate-900 transition-colors duration-200"
                    >
                      {audience.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                {t.footer.subjectsTitle}
              </h4>
              <ul className="mt-5 space-y-3 list-none">
                {t.footer.subjects.map((subject, index) => (
                  <li key={subject}>
                    <a
                      {...audienceLink(SUBJECT_AUDIENCES[index] ?? 'secondaire')}
                      className="text-sm text-slate-600 hover:text-slate-900 transition-colors duration-200"
                    >
                      {subject}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                {t.footer.contactTitle}
              </h4>
              <ul className="mt-5 space-y-3 list-none">
                {contactLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={link.external ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2.5 text-sm text-slate-600 hover:text-slate-900 transition-colors duration-200 break-words"
                      >
                        <Icon
                          className="w-4 h-4 flex-shrink-0 text-slate-400 group-hover:text-primary transition-colors duration-200"
                          aria-hidden="true"
                        />
                        {link.label}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>

        {/* Sign-off. The rule stops at the content width instead of running edge
            to edge, so the footer reads as one block rather than two bands. */}
        <div className="mt-10 sm:mt-16 pt-6 sm:pt-7 border-t border-slate-200 flex flex-col-reverse gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} <span className="font-medium text-slate-700">{nom}</span> ·{' '}
            {t.footer.role.replace('{ville}', ville)}
          </p>

          <nav aria-label={t.footer.navLabel}>
            <ul className="flex flex-wrap gap-x-5 gap-y-2 list-none">
              {t.nav.items
                .filter(([, id]) => id !== 'accueil')
                .map(([label, id]) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      className="text-xs text-slate-500 hover:text-slate-900 transition-colors duration-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
