'use client'

import { useEffect, useState } from 'react'
import { Quote } from 'lucide-react'
import testimonialsData from '@/data/testimonials.json'
import { useLanguage } from '@/lib/i18n'

// Seconds for one full pass. Scaled by the number of testimonials so the
// perceived speed stays the same whatever the list length.
const SECONDS_PER_CARD = 7

export default function Temoignage() {
  const { t } = useLanguage()
  const [paused, setPaused] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  // Text and role come from translations; author is a proper noun unless an override exists (e.g. "Maman de Guido" → "Guido's mum").
  const testimonials = testimonialsData.map((item, i) => ({
    ...item,
    text: t.temoignages.items[i]?.text ?? item.text,
    role: t.temoignages.items[i]?.role ?? item.role,
    author: t.temoignages.authorOverrides[item.author] ?? item.author,
  }))

  const duration = testimonials.length * SECONDS_PER_CARD

  const card = (testimonial: (typeof testimonials)[number], key: string) => (
    <figure
      key={key}
      className="card w-[19rem] sm:w-[22rem] lg:w-[24rem] flex-shrink-0 mr-5 sm:mr-6 p-5 sm:p-6 flex flex-col justify-between hover:border-emerald-200 hover:shadow-[0_16px_40px_rgba(5,150,105,0.10)] transition-all duration-300"
    >
      <Quote className="w-7 h-7 text-primary/25 mb-3 flex-shrink-0" fill="currentColor" strokeWidth={0} />

      <blockquote className="text-sm sm:text-[0.9375rem] italic text-slate-600 leading-relaxed mb-5 line-clamp-6">
        {testimonial.text}
      </blockquote>

      <figcaption className="flex items-center gap-3 mt-auto">
        <div className="w-10 h-10 sm:w-11 sm:h-11 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
          {testimonial.avatar}
        </div>
        <div className="min-w-0">
          <div className="font-semibold text-slate-900 text-sm truncate">{testimonial.author}</div>
          <div className="text-xs text-textSecondary truncate">{testimonial.role}</div>
          <div className="text-yellow-500 text-[11px] leading-tight mt-0.5">⭐⭐⭐⭐⭐</div>
        </div>
      </figcaption>
    </figure>
  )

  return (
    <section
      id="temoignages"
      className="py-12 sm:py-16 lg:py-20 relative reveal bg-gradient-to-b from-transparent to-primary/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <span className="eyebrow mb-4">{t.temoignages.eyebrow}</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 text-slate-900">
            {t.temoignages.title}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-textSecondary max-w-3xl mx-auto px-4">
            {t.temoignages.subtitle}
          </p>
        </div>
      </div>

      {/* Full-bleed track: the marquee runs edge to edge, faded at both ends */}
      <div
        className="relative marquee-mask"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
      >
        {/* Each card carries its own right margin instead of the track using a
            gap, so the two halves are exactly equal and -50% loops seamlessly */}
        <div
          className={`flex w-max ${mounted ? 'marquee-track' : ''}`}
          style={{ animationDuration: `${duration}s`, animationPlayState: paused ? 'paused' : 'running' }}
        >
          <div className="flex">{testimonials.map((item, i) => card(item, `a-${i}`))}</div>
          {/* Second pass makes the loop seamless; hidden from assistive tech
              so the quotes are not announced twice */}
          <div className="flex" aria-hidden="true">
            {testimonials.map((item, i) => card(item, `b-${i}`))}
          </div>
        </div>
      </div>
    </section>
  )
}
