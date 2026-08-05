'use client'

import { useEffect, useState } from 'react'
import { Check } from 'lucide-react'
import { useLanguage } from '@/lib/i18n'
import { onAudienceSelect } from '@/lib/audience'
import { withOrdinals } from '@/lib/ordinals'
import Segmented from './Segmented'
import SectionHeader from './SectionHeader'

// Two subjects breathe on one row, four read best as a 2×2 block, three keep the
// original three-up layout.
function gridClassFor(count: number) {
  if (count <= 2) return 'md:grid-cols-2 max-w-4xl mx-auto'
  if (count === 4) return 'md:grid-cols-2 max-w-5xl mx-auto'
  return 'md:grid-cols-2 xl:grid-cols-3'
}

export default function Services() {
  const { t } = useLanguage()
  const audiences = t.services.audiences
  const [activeId, setActiveId] = useState(audiences[0].id)

  // The footer links to a level or a subject: opening the matching tab is what
  // makes those links worth clicking.
  useEffect(() => onAudienceSelect(setActiveId), [])

  const active = audiences.find((audience) => audience.id === activeId) ?? audiences[0]

  return (
    <section id="matieres" className="py-12 sm:py-16 lg:py-20 relative reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={t.services.eyebrow}
          title={t.services.title}
          subtitle={t.services.subtitle}
          className="mb-8 sm:mb-10"
        />

        {/* Audience switcher */}
        <div className="flex justify-center">
          <Segmented
            options={audiences}
            value={active.id}
            onChange={setActiveId}
            ariaLabel={t.services.title}
            panelPrefix="panel-"
            className="w-full sm:w-auto max-w-2xl"
          />
        </div>

        {/* Remounting on tab change replays the staggered card animation */}
        <div id={`panel-${active.id}`} role="tabpanel" key={active.id}>
          <p className="mt-5 sm:mt-6 mb-8 sm:mb-10 text-center text-[15px] sm:text-base text-slate-600 max-w-2xl mx-auto px-4 animate-[fadeInUp_0.4s_ease-out]">
            {withOrdinals(active.tagline)}
          </p>

          <div className={`grid grid-cols-1 gap-5 sm:gap-6 ${gridClassFor(active.subjects.length)}`}>
            {active.subjects.map((subject, index) => (
              <article
                key={subject.title}
                className="group relative overflow-hidden flex flex-col rounded-2xl bg-white border border-slate-200 p-5 sm:p-6 lg:p-7 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_8px_24px_rgba(15,23,42,0.05)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-[0_20px_45px_rgba(5,150,105,0.16)] animate-[fadeInUp_0.5s_ease-out_backwards]"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                {/* Two quiet green signs of life on hover: a line drawn along
                    the top edge, and a wash falling from it */}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-primary to-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-emerald-50/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* The level leads as a label so the subject can be the only
                    heading — the old badge repeated it inside a coloured tile */}
                <p className="relative text-[13px] font-semibold tracking-wide text-slate-500">
                  {withOrdinals(subject.levels)}
                </p>
                <h3 className="relative mt-1.5 text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  {subject.title}
                </h3>

                <div className="relative mt-5 pt-5 border-t border-slate-100">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {subject.topics.map((topic) => (
                      <span
                        key={topic}
                        className="px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200 text-[11px] sm:text-xs font-medium text-slate-600"
                      >
                        {topic}
                      </span>
                    ))}

                    {/* Entrance exams follow a fixed official syllabus, so
                        promising "and much more" there would be wrong */}
                    {active.id !== 'examens' && (
                      <span className="pl-0.5 text-[11px] sm:text-xs italic text-slate-400 select-none">
                        {t.services.ellipsis}
                      </span>
                    )}
                  </div>

                  <ul className="mt-5 space-y-2.5 list-none">
                    {subject.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Check
                          aria-hidden="true"
                          strokeWidth={2.75}
                          className="w-3.5 h-3.5 mt-[5px] flex-shrink-0 text-primary"
                        />
                        <span className="text-sm text-slate-600 leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
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
