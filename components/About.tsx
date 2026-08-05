'use client'

import { useEffect, useRef, useState } from 'react'
import { ChevronDown, GraduationCap, Award, Brain, ArrowUpRight } from 'lucide-react'
import { assetPath } from '@/lib/assetPath'
import { useLanguage } from '@/lib/i18n'
import { useIsomorphicLayoutEffect } from '@/lib/layoutEffect'
import { withHighlights } from '@/lib/highlight'
import SectionHeader from './SectionHeader'

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

  // The marker that slides along the rail of the question list
  const questionRefs = useRef<(HTMLButtonElement | null)[]>([])
  const [marker, setMarker] = useState<{ top: number; height: number } | null>(null)

  useEffect(() => {
    if (!isWide) {
      setMarker(null)
      return
    }

    const measure = () => {
      const button = questionRefs.current[activeIndex]
      if (button) setMarker({ top: button.offsetTop, height: button.offsetHeight })
    }

    measure()

    const list = questionRefs.current[activeIndex]?.closest('ul')
    if (!list || typeof ResizeObserver === 'undefined') return
    const observer = new ResizeObserver(measure)
    observer.observe(list)
    return () => observer.disconnect()
  }, [activeIndex, isWide, items])

  return (
    <section id="apropos" className="py-12 sm:py-16 lg:py-20 relative reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={t.about.eyebrow}
          title={t.about.title}
          subtitle={t.about.subtitle}
          className="mb-8 sm:mb-12"
        />

        {/* Credentials: a banded strip framed by two rules, split by vertical
            dividers. Typography carries it — the icon only labels the column. */}
        {/* 56rem is the measure of the whole section: the band and the two
            columns below start and end on the same lines */}
        <div className="max-w-[56rem] mx-auto mb-12 sm:mb-16 border-y border-slate-200">
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
                  className="py-6 sm:py-7 sm:px-7 sm:first:pl-0 sm:last:pr-0"
                >
                  <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                    <Icon className="w-3.5 h-3.5 text-primary flex-shrink-0" strokeWidth={2.25} />
                    {credential.label}
                  </div>

                  <p className="mt-3 text-[15px] sm:text-base font-semibold text-slate-900 leading-snug text-balance">
                    {credential.value}
                  </p>

                  {/* Balanced wrapping keeps a trailing year from landing alone on its own line */}
                  <ul className="mt-2 space-y-0.5 list-none">
                    {credential.details.map((line) => (
                      <li key={line} className="text-[11px] text-slate-500 leading-snug text-balance">
                        {line}
                      </li>
                    ))}
                  </ul>

                  {linkHref && (
                    <a
                      href={linkHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-1 mt-3 text-xs font-semibold text-primary hover:text-secondary transition-colors"
                    >
                      {credential.linkLabel}
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {isWide ? (
          /* Wide screens: questions on the left, the selected answer on the right */
          /* Both columns are sized, and the pair is centred: the answer keeps a
             comfortable line length instead of stretching to the container */
          <div className="grid grid-cols-[19rem_minmax(0,34rem)] justify-center gap-12 items-start">
            <ul
              role="tablist"
              aria-label={t.about.title}
              className="relative border-l border-slate-200 list-none"
            >
              {/* One rail for the whole list, with a marker that slides to the
                  open question — instead of a border on every item */}
              {marker && (
                <span
                  aria-hidden="true"
                  className="absolute -left-px w-0.5 bg-primary rounded-full transition-[top,height] duration-300 ease-out"
                  style={{ top: `${marker.top}px`, height: `${marker.height}px` }}
                />
              )}

              {items.map((item, index) => {
                const isActive = index === activeIndex
                return (
                  <li key={item.q}>
                    <button
                      ref={(node) => {
                        questionRefs.current[index] = node
                      }}
                      role="tab"
                      type="button"
                      aria-selected={isActive}
                      aria-controls={`about-panel-${index}`}
                      onClick={() => setActiveIndex(index)}
                      className={`w-full text-left pl-5 pr-2 py-3 text-sm xl:text-[15px] leading-snug transition-colors duration-300 ${
                        isActive
                          ? 'text-slate-900 font-semibold'
                          : 'text-slate-500 hover:text-slate-800'
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
              className="border-l border-slate-200 pl-8 animate-[fadeInUp_0.4s_ease-out]"
            >
              <h3 className="text-xl xl:text-2xl font-bold text-slate-900 tracking-tight mb-5">
                {active.q}
              </h3>
              <div className="space-y-4">
                {active.a.map((paragraph, i) => (
                  <p
                    key={i}
                    className={
                      // The opening paragraph carries the answer; the rest
                      // supports it. Same size as the body text everywhere else
                      // on the site — the weight of the colour is enough.
                      i === 0
                        ? 'text-[15px] text-slate-700 leading-[1.75]'
                        : 'text-[15px] text-slate-600 leading-[1.75]'
                    }
                  >
                    {withHighlights(paragraph)}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Narrow screens: accordion */
          <div className="max-w-[44rem] mx-auto border-t border-slate-200">
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
                    <span
                      className={`text-base sm:text-lg font-semibold transition-colors duration-300 ${
                        isOpen ? 'text-primary' : 'text-slate-900'
                      }`}
                    >
                      {item.q}
                    </span>
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
                      <div className="pb-5 sm:pb-6 pr-2 max-w-[36rem] space-y-3.5">
                        {item.a.map((paragraph, i) => (
                          <p
                            key={i}
                            className={
                              i === 0
                                ? 'text-[15px] text-slate-700 leading-[1.75]'
                                : 'text-[15px] text-slate-600 leading-[1.75]'
                            }
                          >
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
