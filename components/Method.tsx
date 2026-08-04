'use client'

import { UserCog, ClipboardCheck, MessageCircle, FileText } from 'lucide-react'
import { useLanguage } from '@/lib/i18n'

const icons = [UserCog, ClipboardCheck, MessageCircle, FileText]

export default function Method() {
  const { t } = useLanguage()

  return (
    <section id="methode" className="py-12 sm:py-16 lg:py-20 relative reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <span className="eyebrow mb-4">{t.method.eyebrow}</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 text-slate-900">
            {t.method.title}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-textSecondary max-w-3xl mx-auto px-4">
            {t.method.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-7 xl:gap-8 max-w-6xl mx-auto">
          {t.method.items.map((item, index) => {
            const Icon = icons[index % icons.length]

            return (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl p-5 sm:p-6 md:p-7 xl:p-8 bg-white border border-slate-200 hover:border-emerald-200 hover:shadow-[0_16px_40px_rgba(5,150,105,0.10)] transition-all duration-500"
              >
                {/* The icon sits in the corner as a watermark rather than a tile,
                    so the text gets the whole card */}
                <Icon
                  aria-hidden="true"
                  strokeWidth={1.25}
                  className="pointer-events-none absolute top-5 right-5 sm:top-6 sm:right-6 w-16 h-16 sm:w-20 sm:h-20 text-emerald-600 opacity-[0.09] group-hover:opacity-[0.16] group-hover:-rotate-6 group-hover:scale-105 transition-all duration-500"
                />

                <div className="hidden sm:block absolute inset-0 bg-gradient-to-br from-emerald-50/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Accent bar keeps a small anchor of colour on each card */}
                <div className="relative z-10 h-1 w-9 rounded-full bg-gradient-to-r from-primary to-accent mb-4 sm:mb-5 group-hover:w-16 transition-all duration-500" />

                <h4 className="relative z-10 text-xl sm:text-2xl font-bold mb-2.5 sm:mb-3 text-slate-900 pr-10">
                  {item.title}
                </h4>
                <p className="relative z-10 text-sm sm:text-base text-slate-600 leading-relaxed">
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
