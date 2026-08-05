'use client'

import { useState } from 'react'
import { useLanguage } from '@/lib/i18n'
import { withOrdinals } from '@/lib/ordinals'

// A single brand gradient across the site: per-card colour shifts carried no
// meaning and read as inconsistency.
const BRAND_GRADIENT = 'from-emerald-500 to-teal-600'

// Two subjects breathe on one row, four read best as a 2×2 block, three keep the
// original three-up layout.
function gridClassFor(count: number) {
  if (count <= 2) return 'md:grid-cols-2 max-w-5xl mx-auto'
  if (count === 4) return 'md:grid-cols-2 max-w-6xl mx-auto'
  return 'md:grid-cols-2 xl:grid-cols-3'
}

export default function Services() {
  const { t } = useLanguage()
  const audiences = t.services.audiences
  const [activeId, setActiveId] = useState(audiences[0].id)

  const activeIndex = Math.max(
    0,
    audiences.findIndex((a) => a.id === activeId)
  )
  const active = audiences[activeIndex]

  return (
    <section id="matieres" className="py-12 sm:py-16 lg:py-20 relative reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <span className="eyebrow mb-4">{t.services.eyebrow}</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 text-slate-900">
            {t.services.title}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-textSecondary max-w-3xl mx-auto px-4">
            {t.services.subtitle}
          </p>
        </div>

        {/* Audience switcher — a segmented control with a sliding indicator */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div
            role="tablist"
            aria-label={t.services.title}
            className="relative grid grid-cols-3 gap-1 p-1 rounded-2xl bg-slate-100 border border-slate-200 w-full max-w-2xl"
          >
            <div
              aria-hidden="true"
              className="absolute top-1 bottom-1 left-1 rounded-xl bg-white shadow-sm border border-slate-200 transition-transform duration-300 ease-out"
              style={{
                width: 'calc((100% - 1rem) / 3)',
                transform: `translateX(calc(${activeIndex} * (100% + 0.25rem)))`,
              }}
            />
            {audiences.map((audience) => {
              const isActive = audience.id === activeId
              return (
                <button
                  key={audience.id}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  aria-controls={`panel-${audience.id}`}
                  onClick={() => setActiveId(audience.id)}
                  className={`relative z-10 px-2 sm:px-4 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold transition-colors duration-300 ${
                    isActive ? 'text-primary' : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <span className="sm:hidden">{audience.labelShort}</span>
                  <span className="hidden sm:inline">{audience.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Remounting on tab change replays the staggered card animation */}
        <div id={`panel-${active.id}`} role="tabpanel" key={active.id}>
          <p className="text-center text-sm sm:text-base text-slate-500 max-w-2xl mx-auto mb-8 sm:mb-12 px-4 animate-[fadeInUp_0.4s_ease-out]">
            {withOrdinals(active.tagline)}
          </p>

          <div className={`grid grid-cols-1 gap-6 sm:gap-8 lg:gap-10 ${gridClassFor(active.subjects.length)}`}>
            {active.subjects.map((subject, index) => (
                <div
                  key={subject.title}
                  className="group relative overflow-hidden rounded-2xl sm:rounded-3xl transform transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 flex animate-[fadeInUp_0.5s_ease-out_backwards]"
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  {/* Shine sweeping across the card — desktop only */}
                  <div className="hidden sm:block absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                  </div>

                  <div className="relative bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-7 xl:p-8 border border-slate-200 group-hover:border-emerald-200 transition-all duration-500 flex-1 flex flex-col">
                    {/* Accent line revealed on hover */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${BRAND_GRADIENT} origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-t-2xl sm:rounded-t-3xl`}
                      aria-hidden="true"
                    />

                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4 sm:mb-6 gap-3">
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 flex-1">
                          {subject.title}
                        </h3>
                        <div
                          className={`flex items-center justify-center min-w-[2.25rem] h-9 sm:min-w-[2.5rem] sm:h-10 px-2 rounded-lg bg-gradient-to-br ${BRAND_GRADIENT} shadow-sm shadow-emerald-600/20 transform group-hover:scale-105 transition-all duration-300 flex-shrink-0`}
                        >
                          <span className="text-xs sm:text-sm font-bold text-white">{subject.badge}</span>
                        </div>
                      </div>

                      <p className="text-sm sm:text-base text-slate-600 font-semibold mb-3 sm:mb-4">
                        {withOrdinals(subject.levels)}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-4 sm:mb-6">
                        {subject.topics.map((topic) => (
                          <span
                            key={topic}
                            className="px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-full bg-slate-100 border border-slate-200 text-[10px] sm:text-xs font-medium text-slate-700 hover:bg-slate-200 sm:hover:scale-105 transition-all duration-200"
                          >
                            {topic}
                          </span>
                        ))}

                        <span className="px-2 py-1 sm:py-1.5 text-[10px] sm:text-xs italic text-slate-400 select-none">
                          {t.services.ellipsis}
                        </span>
                      </div>

                      <ul className="space-y-2 sm:space-y-3">
                        {subject.benefits.map((benefit, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 sm:gap-3 text-slate-600 group-hover:text-slate-700 transition-colors duration-300"
                          >
                            <svg
                              className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-500 flex-shrink-0 mt-0.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm sm:text-base leading-relaxed">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {active.note && (
            <p className="mt-6 sm:mt-8 text-center text-xs sm:text-sm text-slate-500 italic max-w-2xl mx-auto px-4">
              {active.note}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
