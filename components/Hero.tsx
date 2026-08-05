'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Award, Clock, Download, GraduationCap, MapPin } from 'lucide-react'
import { assetPath } from '@/lib/assetPath'
import { useLanguage } from '@/lib/i18n'
import { MAPS_URL } from '@/lib/maps'
import Counter from './Counter'

interface HeroProps {
  nom: string
  moyenne: string
  moyenneSur: string
  diplomeFichier: string
}

export default function Hero({ nom, moyenne, moyenneSur, diplomeFichier }: HeroProps) {
  const { t } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="accueil" className="relative lg:min-h-screen flex items-center pt-24 sm:pt-28 pb-10 sm:pb-12 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_340px] xl:grid-cols-[1.7fr_380px] gap-6 sm:gap-8 lg:gap-10 xl:gap-12 items-stretch">
          <div
            className={`flex flex-col justify-between gap-4 sm:gap-5 ${
              mounted ? 'animate-[fadeInUp_1s_ease-out]' : 'opacity-0'
            }`}
          >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold leading-[1.08] tracking-tight text-slate-900 text-balance">
                {t.hero.title.p1}
                <span className="gradient-text">{t.hero.title.w1}</span>
                {t.hero.title.p2}
                <span className="gradient-text">{t.hero.title.w2}</span>
              </h1>

              <div className="space-y-2 sm:space-y-2.5 max-w-2xl">
                <p className="text-base sm:text-lg lg:text-[17px] xl:text-lg text-slate-600 leading-relaxed">
                  {t.hero.subtitle1}
                </p>
                <p className="text-sm sm:text-base text-slate-500 leading-relaxed text-balance">
                  {t.hero.subtitle2}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {t.hero.audienceChips.map((chip, i) => (
                  <span
                    key={chip}
                    className={`px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs sm:text-sm font-semibold text-emerald-800 ${
                      mounted ? 'animate-[fadeInUp_0.6s_ease-out_backwards]' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${0.35 + i * 0.12}s` }}
                  >
                    {chip}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="card p-3 sm:p-4 text-center hover:scale-105 transition-transform duration-300">
                  <Counter
                    value={100}
                    suffix="+"
                    className="block text-2xl sm:text-3xl font-extrabold gradient-text mb-0.5 tabular-nums"
                  />
                  <div className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wide font-semibold">{t.hero.statStudents}</div>
                </div>
                <div className="card p-3 sm:p-4 text-center hover:scale-105 transition-transform duration-300">
                  <Counter
                    value={3}
                    prefix="+"
                    duration={1000}
                    className="block text-2xl sm:text-3xl font-extrabold gradient-text mb-0.5 tabular-nums"
                  />
                  <div className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wide font-semibold">{t.hero.statExperience}</div>
                </div>
              </div>

              <blockquote className="hidden sm:block pl-4 border-l-2 border-primary/70">
                <p className="text-sm italic text-slate-500 leading-snug">
                  {t.hero.quote.part1}
                  <span className="text-primary font-semibold not-italic">{t.hero.quote.highlight}</span>
                </p>
              </blockquote>

              {/* Quiet proof of the degree: present, but it should not shout */}
              <div
                className={`rounded-xl border border-emerald-200/70 bg-white/60 backdrop-blur-sm px-3.5 py-2.5 sm:px-4 sm:py-3 ${
                  mounted ? 'animate-[fadeInUp_0.8s_ease-out_0.6s_backwards]' : 'opacity-0'
                }`}
              >
                <div className="flex items-center flex-wrap gap-x-2 gap-y-1">
                  <Award className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                  <span className="text-sm font-bold text-slate-900 tabular-nums">
                    {moyenne}/{moyenneSur}
                  </span>
                  <span className="text-slate-300" aria-hidden="true">·</span>
                  <span className="text-xs font-semibold text-emerald-800">
                    {t.hero.diploma.distinction}
                  </span>
                  {diplomeFichier && (
                    <a
                      href={assetPath(diplomeFichier)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/dl ml-auto inline-flex items-center gap-1 text-[11px] font-semibold text-primary hover:text-secondary transition-colors"
                    >
                      <Download className="w-3 h-3 group-hover/dl:translate-y-0.5 transition-transform" />
                      {t.hero.diploma.download}
                    </a>
                  )}
                </div>
                <p className="mt-1 text-[11px] text-slate-500 leading-snug">
                  {t.hero.diploma.school}
                </p>
                <p className="mt-0.5 text-[11px] italic text-slate-500 leading-snug">
                  {t.hero.diploma.note}
                </p>
              </div>

              <a
                href="#contact"
                className="group flex items-center justify-between gap-3 px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl bg-gradient-to-br from-primary to-secondary text-white shadow-[0_6px_20px_rgba(5,150,105,0.25)] hover:shadow-[0_10px_28px_rgba(5,150,105,0.35)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex items-center gap-3 sm:gap-3.5">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-white/15 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-base sm:text-lg leading-tight">{t.hero.ctaTitle}</div>
                    <div className="text-white/80 text-xs sm:text-sm">{t.hero.ctaSubtitle}</div>
                  </div>
                </div>
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
          </div>

          <div className={`${mounted ? 'animate-[fadeInUp_1s_ease-out_0.2s_backwards]' : 'opacity-0'}`}>
            <div className="card p-0 overflow-hidden group/card hover:shadow-[0_20px_50px_rgba(5,150,105,0.14)] hover:border-emerald-200 transition-all duration-500">
              <div className="relative w-full aspect-[4/3.8] overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
                <Image
                  src={assetPath('/face_image.jpg')}
                  alt={nom}
                  width={400}
                  height={380}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover/card:scale-[1.04]"
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                />
                {/* Gradient veil so the badge stays readable over any photo */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-900/70 to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-sm shadow-sm text-[10px] sm:text-xs font-bold text-emerald-800">
                    <span className="relative flex w-1.5 h-1.5">
                      <span className="motion-safe:animate-ping absolute inline-flex w-full h-full rounded-full bg-emerald-500 opacity-75" />
                      <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-emerald-600" />
                    </span>
                    {t.hero.diploma.badge}
                  </span>
                </div>
              </div>

              <div className="p-5 sm:p-6">
                {/* inline-block so the rule can grow to exactly the name's width */}
                <div className="inline-block max-w-full">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    {nom}
                  </h3>
                  <div className="mt-1.5 h-0.5 w-10 rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-500 group-hover/card:w-full" />
                </div>

                {/* Plain icons rather than tinted tiles: the card is about the
                    person, not about three little green squares */}
                <dl className="mt-5 space-y-4">
                  <div className="flex items-start gap-3">
                    <GraduationCap
                      className="w-[18px] h-[18px] mt-0.5 text-primary flex-shrink-0"
                      strokeWidth={1.9}
                    />
                    <div className="min-w-0">
                      <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                        {t.hero.labelModalites}
                      </dt>
                      <dd className="mt-0.5 text-[13px] sm:text-sm text-slate-700">
                        {t.hero.modalites.join(' · ')}
                      </dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock
                      className="w-[18px] h-[18px] mt-0.5 text-primary flex-shrink-0"
                      strokeWidth={1.9}
                    />
                    <div className="min-w-0">
                      <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                        {t.hero.labelDisponibilite}
                      </dt>
                      <dd className="mt-0.5 text-[13px] sm:text-sm text-slate-700">
                        {t.hero.disponibilite}
                      </dd>
                    </div>
                  </div>

                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/map flex items-start gap-3"
                  >
                    <MapPin
                      className="w-[18px] h-[18px] mt-0.5 text-primary flex-shrink-0"
                      strokeWidth={1.9}
                    />
                    <div className="min-w-0">
                      <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                        {t.hero.labelLocalisation}
                      </dt>
                      <dd className="mt-0.5 text-[13px] sm:text-sm text-slate-700 group-hover/map:text-primary transition-colors">
                        {t.hero.zone}
                      </dd>
                    </div>
                  </a>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
