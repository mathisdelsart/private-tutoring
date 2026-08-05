'use client'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'

// The page is prerendered, so the layout effect only exists on the client.
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

interface CounterProps {
  value: number
  prefix?: string
  suffix?: string
  duration?: number
  className?: string
}

export default function Counter({
  value,
  prefix = '',
  suffix = '',
  duration = 1400,
  className,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  // Render the final value on the server and on the first client render so the
  // markup matches; the layout effect rewinds it to zero before the first paint.
  const [display, setDisplay] = useState(value)

  useIsomorphicLayoutEffect(() => {
    const node = ref.current
    if (!node) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    setDisplay(0)

    let frame = 0
    let started = false

    const runAnimation = () => {
      const startTime = performance.now()
      const tick = (now: number) => {
        const progress = Math.min(1, (now - startTime) / duration)
        const eased = 1 - Math.pow(1 - progress, 3)
        setDisplay(Math.round(value * eased))
        if (progress < 1) frame = requestAnimationFrame(tick)
      }
      frame = requestAnimationFrame(tick)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            started = true
            observer.disconnect()
            runAnimation()
          }
        })
      },
      { threshold: 0.4 }
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [value, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  )
}
