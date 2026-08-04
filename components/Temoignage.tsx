'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import testimonialsData from '@/data/testimonials.json'
import { useLanguage } from '@/lib/i18n'

const AUTOPLAY_DELAY = 6000

export default function Temoignage() {
  const { t } = useLanguage()
  const [slideIndex, setSlideIndex] = useState(0)
  const [itemsPerSlide, setItemsPerSlide] = useState(3)
  const [isPaused, setIsPaused] = useState(false)
  const touchStartX = useRef(0)
  const touchCurrentX = useRef(0)

  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth < 768) {
        setItemsPerSlide(1) // Mobile: 1 témoignage
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(2) // Tablette: 2 témoignages
      } else {
        setItemsPerSlide(3) // Desktop: 3 témoignages
      }
    }

    updateItemsPerSlide()
    window.addEventListener('resize', updateItemsPerSlide)
    return () => window.removeEventListener('resize', updateItemsPerSlide)
  }, [])

  // Text and role come from translations; author is a proper noun unless an override exists (e.g. "Maman de Guido" → "Guido's mum").
  const testimonials = testimonialsData.map((item, i) => ({
    ...item,
    text: t.temoignages.items[i]?.text ?? item.text,
    role: t.temoignages.items[i]?.role ?? item.role,
    author: t.temoignages.authorOverrides[item.author] ?? item.author,
  }))

  const maxSlides = Math.ceil(testimonials.length / itemsPerSlide)

  // Fewer slides fit on a narrow screen, so the current one can fall out of range.
  useEffect(() => {
    setSlideIndex((prev) => (prev >= maxSlides ? 0 : prev))
  }, [maxSlides])

  const nextSlide = useCallback(() => {
    setSlideIndex((prev) => (prev + 1) % maxSlides)
  }, [maxSlides])

  const prevSlide = useCallback(() => {
    setSlideIndex((prev) => (prev - 1 + maxSlides) % maxSlides)
  }, [maxSlides])

  // Autoplay, paused on hover/focus, on touch, and when the tab is hidden.
  useEffect(() => {
    if (isPaused || maxSlides <= 1) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const interval = window.setInterval(() => {
      if (!document.hidden) nextSlide()
    }, AUTOPLAY_DELAY)

    return () => window.clearInterval(interval)
  }, [isPaused, maxSlides, nextSlide])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX
    touchCurrentX.current = touchStartX.current
    setIsPaused(true)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchCurrentX.current = e.changedTouches[0].clientX
  }

  const handleTouchEnd = () => {
    const delta = touchCurrentX.current - touchStartX.current
    if (Math.abs(delta) > 50) {
      if (delta < 0) nextSlide()
      else prevSlide()
    }
    setIsPaused(false)
  }

  return (
    <section id="temoignages" className="py-12 sm:py-16 lg:py-20 relative reveal bg-gradient-to-b from-transparent to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 text-slate-900">
            {t.temoignages.title}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-textSecondary max-w-3xl mx-auto px-4">
            {t.temoignages.subtitle}
          </p>
        </div>

        <div
          className="relative max-w-7xl mx-auto mb-8 sm:mb-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={() => setIsPaused(false)}
        >
          <div
            className="overflow-hidden px-2 sm:px-0"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${slideIndex * 100}%)` }}
            >
              {Array.from({ length: maxSlides }).map((_, index) => (
                <div
                  key={index}
                  className={`w-full flex-shrink-0 grid gap-4 sm:gap-6 ${
                    itemsPerSlide === 1 ? 'grid-cols-1' :
                    itemsPerSlide === 2 ? 'grid-cols-2' :
                    'grid-cols-3'
                  }`}
                >
                  {testimonials
                    .slice(index * itemsPerSlide, index * itemsPerSlide + itemsPerSlide)
                    .map((testimonial, i) => (
                      <div key={i} className="card p-5 sm:p-6 lg:p-8 relative flex flex-col justify-between min-h-[280px] sm:min-h-[320px]">
                        <div className="absolute top-4 sm:top-6 left-4 sm:left-6 text-4xl sm:text-5xl lg:text-6xl text-primary opacity-20 leading-none -rotate-12">"</div>

                        <div className="relative mt-6 sm:mt-8 mb-4 sm:mb-6">
                          <p className="text-sm sm:text-base italic text-slate-600 leading-relaxed pb-4 sm:pb-6">
                            {testimonial.text}
                          </p>
                          <div className="absolute -bottom-2 sm:-bottom-4 right-0 text-4xl sm:text-5xl lg:text-6xl text-primary opacity-20 leading-none rotate-[168deg] pointer-events-none">"</div>
                        </div>

                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm flex-shrink-0">
                            {testimonial.avatar}
                          </div>
                          <div className="min-w-0">
                            <h4 className="font-semibold text-slate-900 text-sm sm:text-base truncate">
                              {testimonial.author}
                            </h4>
                            <p className="text-xs text-textSecondary truncate">
                              {testimonial.role}
                            </p>
                            <div className="flex gap-0.5 sm:gap-1 mt-1 text-yellow-500 text-xs sm:text-sm">
                              ⭐⭐⭐⭐⭐
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 sm:-left-4 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-primary/80 hover:bg-primary rounded-full flex items-center justify-center transition-all hover:scale-110 backdrop-blur-sm text-white z-10 shadow-lg"
            aria-label={t.temoignages.prevLabel}
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" strokeWidth={2.5} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-primary/80 hover:bg-primary rounded-full flex items-center justify-center transition-all hover:scale-110 backdrop-blur-sm text-white z-10 shadow-lg"
            aria-label={t.temoignages.nextLabel}
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" strokeWidth={2.5} />
          </button>
        </div>

        <div className="flex justify-center gap-2">
          {Array.from({ length: maxSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setSlideIndex(index)}
              aria-label={t.temoignages.dotLabel.replace('{n}', String(index + 1))}
              className={`transition-all duration-300 rounded-full ${
                slideIndex === index
                  ? 'w-6 sm:w-8 h-2 sm:h-3 bg-primary'
                  : 'w-2 sm:w-3 h-2 sm:h-3 bg-primary/30 hover:bg-primary/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
