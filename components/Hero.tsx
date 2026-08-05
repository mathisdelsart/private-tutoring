'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ArrowRight, Award, Clock, Download, GraduationCap, MapPin } from 'lucide-react'
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
    <section
      id="accueil"
      className="relative lg:min-h-screen flex items-center pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.55fr_340px] xl:grid-cols-[1.6fr_380px] gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center">
          <div className={mounted ? 'animate-[fadeInUp_1s_ease-out]' : 'opacity-0'}>
            <h1 className="text-[2rem] sm:text-5xl lg:text-[3.25rem] xl:text-6xl font-extrabold leading-[1.08] tracking-tight text-slate-900 text-balance">
              {t.hero.title.p1}
              <span className="gradient-text">{t.hero.title.w1}</span>
              {t.hero.title.p2}
              <span className="gradient-text">{t.hero.title.w2}</span>
            </h1>

            <div className="mt-5 sm:mt-6 space-y-2 max-w-xl">
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                {t.hero.subtitle1}
              </p>
              <p className="text-sm sm:text-[15px] text-slate-500 leading-relaxed text-balance">
                {t.hero.subtitle2}
              </p>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {t.hero.audienceChips.map((chip, i) => (
                <span
                  key={chip}
                  className={`px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-xs sm:text-[13px] font-semibold text-emerald-800 ${
                    mounted ? 'animate-[fadeInUp_0.6s_ease-out_backwards]' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${0.35 + i * 0.12}s` }}
                >
                  {chip}
                </span>
              ))}
            </div>

            {/* One primary action, one way to keep looking */}
            <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="group btn-primary">
                {t.hero.ctaTitle}
                <ArrowRight className="w-[18px] h-[18px] transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a href="#matieres" className="btn-secondary">
                {t.hero.ctaSecondary}
              </a>
            </div>
            <p className="mt-3 text-xs sm:text-[13px] text-slate-500">{t.hero.ctaSubtitle}</p>

            {/* The proof, on a rule rather than in boxes */}
            <div className="mt-8 sm:mt-10 pt-6 border-t border-slate-200 space-y-4">
              <div className="flex flex-wrap items-baseline gap-x-7 sm:gap-x-10 gap-y-3">
                <div className="flex items-baseline gap-2">
                  <Counter
                    value={100}
                    suffix="+"
                    className="text-2xl sm:text-3xl font-extrabold gradient-text tabular-nums"
                  />
                  <span className="text-[13px] sm:text-sm text-slate-500">
                    {t.hero.statStudents}
                  </span>
                </div>
                <span className="hidden sm:block w-px h-5 bg-slate-200" aria-hidden="true" />
                <div className="flex items-baseline gap-2">
                  <Counter
                    value={3}
                    prefix="+"
                    duration={1000}
                    className="text-2xl sm:text-3xl font-extrabold gradient-text tabular-nums"
                  />
                  <span className="text-[13px] sm:text-sm text-slate-500">
                    {t.hero.statExperience}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-[13px] sm:text-sm">
                <Award className="w-4 h-4 text-primary flex-shrink-0" strokeWidth={2} />
                <span className="font-bold text-slate-900 tabular-nums">
                  {moyenne}/{moyenneSur}
                </span>
                <span className="text-slate-300" aria-hidden="true">·</span>
                <span className="font-semibold text-emerald-800">
                  {t.hero.diploma.distinction}
                </span>
                <span className="text-slate-500">{t.hero.diploma.school}</span>
                {diplomeFichier && (
                  <a
                    href={assetPath(diplomeFichier)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/dl inline-flex items-center gap-1 font-semibold text-primary hover:text-secondary transition-colors"
                  >
                    <Download className="w-3.5 h-3.5 transition-transform duration-300 group-hover/dl:translate-y-0.5" />
                    {t.hero.diploma.download}
                  </a>
                )}
              </div>

              <p className="text-[13px] sm:text-sm italic text-slate-500">{t.hero.diploma.note}</p>
            </div>
          </div>

          <div className={mounted ? 'animate-[fadeInUp_1s_ease-out_0.2s_backwards]' : 'opacity-0'}>
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
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    {nom}
                  </h2>
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
