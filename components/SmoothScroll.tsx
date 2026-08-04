'use client'

import { useEffect } from 'react'

export default function SmoothScroll() {
  useEffect(() => {
    // The navbar is fixed, so anchors have to land just below it.
    const getNavOffset = () => {
      const nav = document.querySelector('nav')
      return (nav?.getBoundingClientRect().height ?? 80) + 16
    }

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="#"]')
      if (!anchor) return

      const href = anchor.getAttribute('href')
      if (!href || href === '#') return

      const element = document.querySelector(href) as HTMLElement | null
      if (!element) return

      e.preventDefault()
      const top = element.getBoundingClientRect().top + window.scrollY - getNavOffset()
      window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' })
    }

    document.addEventListener('click', handleClick)

    // Scroll reveal: an observer only fires for sections that actually come into
    // view, instead of recomputing every element on every scroll event.
    const revealElements = Array.from(document.querySelectorAll('.reveal'))

    if (typeof IntersectionObserver === 'undefined') {
      revealElements.forEach((element) => element.classList.add('active'))
      return () => document.removeEventListener('click', handleClick)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
    )

    revealElements.forEach((element) => observer.observe(element))

    return () => {
      document.removeEventListener('click', handleClick)
      observer.disconnect()
    }
  }, [])

  return null
}
