'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { useLanguage } from '@/lib/i18n'

export default function Faq() {
  const { t } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-12 sm:py-16 lg:py-20 relative reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <span className="eyebrow mb-4">{t.faq.eyebrow}</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 text-slate-900">
            {t.faq.title}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-textSecondary max-w-3xl mx-auto px-4">
            {t.faq.subtitle}
          </p>
        </div>

        {/* No cards here: thin rules on the page background keep the section
            quiet next to the sections that do use cards. The list is narrower
            than a prose column so the answers stay comfortable to read. */}
        <div className="max-w-[44rem] mx-auto border-t border-slate-200">
          {t.faq.items.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <div key={item.q} className="border-b border-slate-200">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="group w-[calc(100%+2rem)] -ml-4 px-4 py-5 flex items-start justify-between gap-6 text-left rounded-xl hover:bg-white/80 transition-colors duration-200"
                >
                  <span className="text-[15px] sm:text-[17px] font-semibold text-slate-900 leading-snug tracking-tight">
                    {item.q}
                  </span>
                  <Plus
                    aria-hidden="true"
                    strokeWidth={2}
                    className={`w-[18px] h-[18px] mt-0.5 flex-shrink-0 transition-[transform,color] duration-300 ${
                      isOpen
                        ? 'rotate-45 text-primary'
                        : 'text-slate-400 group-hover:text-slate-700'
                    }`}
                  />
                </button>

                {/* grid-template-rows animates from 0fr to 1fr, so the panel slides
                    open smoothly without measuring its height in JS */}
                <div
                  id={`faq-answer-${index}`}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div
                      className={`pb-6 pr-10 max-w-[36rem] space-y-3 text-[15px] text-slate-600 leading-[1.75] transition-opacity duration-300 ${
                        isOpen ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      {item.a.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
