'use client'

import { useEffect, useState } from 'react'
import { Quote } from 'lucide-react'
import testimonialsData from '@/data/testimonials.json'
import { useLanguage } from '@/lib/i18n'
import SectionHeader from './SectionHeader'

// Seconds for one full pass. Scaled by the number of testimonials so the
// perceived speed stays the same whatever the list length.
const SECONDS_PER_CARD = 7

type Kind = 'avis' | 'recommandation'

export default function Temoignage() {
  const { t } = useLanguage()
  const [paused, setPaused] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  // Text and role come from translations; author is a proper noun unless an override exists (e.g. "Maman de Guido" → "Guido's mum").
  const testimonials = testimonialsData.map((item, i) => ({
    ...item,
    kind: item.kind as Kind,
    text: t.temoignages.items[i]?.text ?? item.text,
    role: t.temoignages.items[i]?.role ?? item.role,
    author: t.temoignages.authorOverrides[item.author] ?? item.author,
  }))

  const duration = testimonials.length * SECONDS_PER_CARD

  const card = (testimonial: (typeof testimonials)[number], key: string) => (
    <figure
      key={key}
      className="card w-[19rem] sm:w-[22rem] lg:w-[24rem] flex-shrink-0 mr-5 sm:mr-6 p-6 flex flex-col hover:border-emerald-200 hover:shadow-[0_16px_40px_rgba(5,150,105,0.10)] transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-3 mb-4">
        {/* The lucide glyph is a closing mark — the mass sits at the top and the
            tails hang down — so the opening one is the rotated one */}
        <Quote
          aria-hidden="true"
          className="w-6 h-6 rotate-180 text-primary/25 flex-shrink-0"
          fill="currentColor"
          strokeWidth={0}
        />
        {/* A word rather than five stars: it says what kind of testimonial
            this is, which a rating never did */}
        <span
          className={`text-[10px] font-bold uppercase tracking-[0.14em] pt-1 ${
            testimonial.kind === 'recommandation' ? 'text-primary/80' : 'text-slate-400'
          }`}
        >
          {t.temoignages.kinds[testimonial.kind]}
        </span>
      </div>

      <blockquote className="mb-6">
        <p className="text-[15px] text-slate-700 leading-relaxed line-clamp-6">
          {testimonial.text}
        </p>
        {/* The closing mark follows the quote instead of sitting at a fixed
            spot, so it lands right after the last line whatever its length */}
        <Quote
          aria-hidden="true"
          className="block w-5 h-5 ml-auto mt-2 text-primary/25"
          fill="currentColor"
          strokeWidth={0}
        />
      </blockquote>

      <figcaption className="flex items-center gap-3 mt-auto pt-4 border-t border-slate-100">
        <div className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-primary font-bold text-sm flex-shrink-0">
          {testimonial.avatar}
        </div>
        <div className="min-w-0">
          <div className="font-semibold text-slate-900 text-sm truncate">{testimonial.author}</div>
          {testimonial.role && (
            <div className="text-xs text-slate-500 truncate">{testimonial.role}</div>
          )}
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
        <SectionHeader
          eyebrow={t.temoignages.eyebrow}
          title={t.temoignages.title}
          subtitle={t.temoignages.subtitle}
        />
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
