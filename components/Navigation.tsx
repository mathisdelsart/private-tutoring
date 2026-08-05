'use client'

import { useEffect, useState } from 'react'
import { Menu, X, GraduationCap } from 'lucide-react'
import { useLanguage } from '@/lib/i18n'
import type { Lang } from '@/locales/translations'

// Section ids are the same in every language, so they can live outside the component.
const SECTION_IDS = ['accueil', 'matieres', 'methode', 'temoignages', 'apropos', 'faq', 'contact']

const LANGS: Lang[] = ['fr', 'en', 'nl']

export default function Navigation() {
  const { lang, setLang, t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState(SECTION_IDS[0])
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      setProgress(scrollable > 0 ? Math.min(100, (window.scrollY / scrollable) * 100) : 0)

      // The section currently sitting under the navbar is the active one.
      const threshold = 140
      let current = SECTION_IDS[0]
      SECTION_IDS.forEach((id) => {
        const element = document.getElementById(id)
        if (element && element.getBoundingClientRect().top <= threshold) {
          current = id
        }
      })
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  const menuItems = t.nav.items

  const handleMenuClick = () => {
    setIsMobileMenuOpen(false)
  }

  const LangToggle = () => (
    <div
      className="flex items-center rounded-lg border border-primary/30 overflow-hidden text-xs sm:text-sm font-bold"
      role="group"
      aria-label={t.nav.toggleLabel}
    >
      {LANGS.map((code) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          className={`px-2 sm:px-3 py-1.5 transition-colors duration-300 ${
            lang === code ? 'bg-primary text-white' : 'text-slate-500 hover:bg-primary/10'
          }`}
          aria-pressed={lang === code}
        >
          {t.langName[code]}
        </button>
      ))}
    </div>
  )

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90' : 'bg-white/70'
      } backdrop-blur-xl border-b border-slate-200`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4 sm:py-5 lg:py-6">
          {/* Logo */}
          <a href="#accueil" className="flex items-center gap-2 sm:gap-2.5 group">
            <div className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 shadow-sm shadow-emerald-600/20 group-hover:scale-105 transition-transform duration-300">
              <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={2.2} />
            </div>
            <div className="font-display text-base sm:text-lg md:text-xl lg:text-2xl font-bold tracking-tight">
              <span className="gradient-text">{t.nav.brand}</span>
            </div>
          </a>

          {/* Right side: menu (desktop) + language toggle + mobile menu button */}
          <div className="flex items-center gap-4 lg:gap-6 xl:gap-10">
            {/* Desktop Menu */}
            <ul className="hidden lg:flex gap-5 xl:gap-8 list-none">
              {menuItems.map(([label, id]) => {
                const isActive = activeSection === id
                return (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      aria-current={isActive ? 'true' : undefined}
                      className={`text-sm xl:text-base font-medium transition-all duration-300 relative py-2 hover:text-accent
                        before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:h-0.5
                        before:bg-gradient-to-r before:from-primary before:to-accent before:transition-all before:duration-300
                        hover:before:w-full ${
                          isActive ? 'text-primary before:w-full' : 'text-slate-700 before:w-0'
                        }`}
                    >
                      {label}
                    </a>
                  </li>
                )
              })}
            </ul>

            <LangToggle />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 border border-primary/30 hover:bg-primary/20 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-slate-700" />
              ) : (
                <Menu className="w-6 h-6 text-slate-700" />
              )}
            </button>
          </div>
        </div>

        {/* Reading progress */}
        <div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-accent"
          style={{ width: `${progress}%` }}
          aria-hidden="true"
        />
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-slate-900/30 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={`absolute top-[73px] sm:top-[81px] left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-slate-200 transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <ul className="px-4 py-6 space-y-1">
            {menuItems.map(([label, id]) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={handleMenuClick}
                  className={`block px-4 py-3 font-medium text-lg rounded-lg transition-all duration-300 border ${
                    activeSection === id
                      ? 'bg-primary/10 text-primary border-primary/30'
                      : 'text-slate-700 border-transparent hover:bg-primary/10 hover:text-accent hover:border-primary/30'
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
