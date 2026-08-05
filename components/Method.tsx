'use client'

import { Target, Lightbulb, MessageCircle, FileText } from 'lucide-react'
import { useLanguage } from '@/lib/i18n'
import SectionHeader from './SectionHeader'

const icons = [Target, Lightbulb, MessageCircle, FileText]

export default function Method() {
  const { t } = useLanguage()

  return (
    <section id="methode" className="py-12 sm:py-16 lg:py-20 relative reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={t.method.eyebrow}
          title={t.method.title}
          subtitle={t.method.subtitle}
        />

        {/* Four claims on a rule each, rather than four boxes: the eye reads the
            titles first and the section stays lighter than the subjects grid */}
        <div className="grid md:grid-cols-2 gap-x-10 lg:gap-x-16 gap-y-9 sm:gap-y-11 max-w-5xl mx-auto">
          {t.method.items.map((item, index) => {
            const Icon = icons[index % icons.length]

            return (
              <div key={item.title} className="group relative pt-5 border-t border-slate-200">
                {/* The rule carries the accent: a short green segment that runs
                    the full width on hover */}
                <span
                  aria-hidden="true"
                  className="absolute -top-px left-0 h-px w-10 bg-primary transition-all duration-700 ease-out group-hover:w-full"
                />

                <div className="flex items-start gap-2.5">
                  <Icon
                    aria-hidden="true"
                    strokeWidth={1.75}
                    className="w-5 h-5 mt-[3px] flex-shrink-0 text-primary"
                  />
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                    {item.title}
                  </h3>
                </div>

                <p className="mt-3 text-sm sm:text-[0.9375rem] text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
