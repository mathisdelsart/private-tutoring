'use client'

import { useEffect, useLayoutEffect, useState } from 'react'
import { ChevronDown, GraduationCap, Award, Brain, ExternalLink } from 'lucide-react'
import { assetPath } from '@/lib/assetPath'
import { useLanguage } from '@/lib/i18n'
import { withHighlights } from '@/lib/highlight'

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

const credentialIcons = [GraduationCap, Award, Brain]

interface AboutProps {
  diplomeFichier: string
}

export default function About({ diplomeFichier }: AboutProps) {
  const { t } = useLanguage()
  const [activeIndex, setActiveIndex] = useState(0)
  // The accordion is the server-rendered layout: it works at any width and
  // survives without JavaScript. The layout effect upgrades wide screens to the
  // two-column view before the first paint, so nothing flashes.
  const [isWide, setIsWide] = useState(false)

  useIsomorphicLayoutEffect(() => {
    const query = window.matchMedia('(min-width: 1024px)')
    const sync = () => setIsWide(query.matches)
    sync()
    query.addEventListener('change', sync)
    return () => query.removeEventListener('change', sync)
  }, [])

  const items = t.about.items
  const active = items[activeIndex]

  return (
    <section id="apropos" className="py-12 sm:py-16 lg:py-20 relative reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <span className="eyebrow mb-4">{t.about.eyebrow}</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 text-slate-900">
            {t.about.title}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-textSecondary max-w-3xl mx-auto px-4">
            {t.about.subtitle}
          </p>
        </div>

        {/* Credentials: a banded strip framed by two rules, columns split by
            vertical dividers, rather than three separate white cards */}
        <div className="max-w-5xl mx-auto mb-10 sm:mb-14 border-y border-slate-200">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
          {t.about.credentials.map((credential, index) => {
            const Icon = credentialIcons[index % credentialIcons.length]
            // 'file' points at the local certificate, whose name lives in prof.json
            const linkHref =
              credential.linkKind === 'file'
                ? diplomeFichier && assetPath(diplomeFichier)
                : credential.linkUrl
            return (
              <div
                key={credential.label}
                className="group/cred p-5 sm:p-6 flex items-start gap-3 sm:gap-4"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center flex-shrink-0 shadow-sm shadow-emerald-600/20">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={2.2} />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wide font-semibold mb-0.5">
                    {credential.label}
                  </div>
                  <div className="text-sm sm:text-base font-semibold text-slate-900 leading-snug">
                    {credential.value}
                  </div>
                  {linkHref && (
                    <a
                      href={linkHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-1 mt-1.5 text-[11px] sm:text-xs font-semibold text-primary hover:text-secondary transition-colors"
                    >
                      {credential.linkLabel}
                      <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  )}
                  {/* Balanced wrapping keeps a trailing year from landing alone on its own line */}
                  <ul className="mt-1 space-y-0.5 list-none">
                    {credential.details.map((line) => (
                      <li key={line} className="text-[11px] text-slate-500 leading-snug text-balance">
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
          </div>
        </div>

        {isWide ? (
          /* Wide screens: questions on the left, the selected answer on the right */
          <div className="grid grid-cols-[minmax(0,22rem)_1fr] gap-8 xl:gap-12 max-w-6xl mx-auto items-start">
            <ul role="tablist" aria-label={t.about.title} className="space-y-1.5 list-none">
              {items.map((item, index) => {
                const isActive = index === activeIndex
                return (
                  <li key={item.q}>
                    <button
                      role="tab"
                      type="button"
                      aria-selected={isActive}
                      aria-controls={`about-panel-${index}`}
                      onClick={() => setActiveIndex(index)}
                      className={`w-full text-left pl-4 pr-2 py-3 border-l-2 text-sm xl:text-base transition-all duration-300 ${
                        isActive
                          ? 'border-primary text-primary font-semibold'
                          : 'border-slate-200 text-slate-600 hover:border-primary/40 hover:text-slate-900'
                      }`}
                    >
                      {item.q}
                    </button>
                  </li>
                )
              })}
            </ul>

            <div
              id={`about-panel-${activeIndex}`}
              role="tabpanel"
              key={activeIndex}
              className="border-l border-slate-200 pl-8 xl:pl-12 animate-[fadeInUp_0.4s_ease-out]"
            >
              <h3 className="text-xl xl:text-2xl font-bold text-slate-900 mb-5">{active.q}</h3>
              <div className="space-y-4">
                {active.a.map((paragraph, i) => (
                  <p key={i} className="text-sm xl:text-base text-slate-600 leading-relaxed">
                    {withHighlights(paragraph)}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Narrow screens: accordion */
          <div className="max-w-3xl mx-auto border-t border-slate-200">
            {items.map((item, index) => {
              const isOpen = index === activeIndex
              return (
                <div key={item.q} className="border-b border-slate-200">
                  <button
                    type="button"
                    onClick={() => setActiveIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    aria-controls={`about-answer-${index}`}
                    className="w-full flex items-center justify-between gap-4 text-left py-4 sm:py-5"
                  >
                    <span className={`text-base sm:text-lg font-semibold transition-colors duration-300 ${isOpen ? 'text-primary' : 'text-slate-900'}`}>{item.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 flex-shrink-0 text-primary transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <div
                    id={`about-answer-${index}`}
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pb-5 sm:pb-6 pr-8 space-y-3">
                        {item.a.map((paragraph, i) => (
                          <p key={i} className="text-sm sm:text-base text-slate-600 leading-relaxed">
                            {withHighlights(paragraph)}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
