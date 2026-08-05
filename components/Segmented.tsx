'use client'

import { useRef, useState } from 'react'
import { useIsomorphicLayoutEffect } from '@/lib/layoutEffect'

export interface SegmentedOption {
  id: string
  /** Full label, shown from the sm breakpoint up */
  label: string
  /** Shorter label for narrow screens; falls back to the full one */
  labelShort?: string
}

interface SegmentedProps {
  options: SegmentedOption[]
  value: string
  onChange: (id: string) => void
  /** Names the group for assistive technology */
  ariaLabel: string
  /** Prefix of the id of the panel each tab controls */
  panelPrefix?: string
  className?: string
}

/**
 * One segmented control for the whole site: the subjects switcher and the
 * contact switcher are the same object, so they behave and look the same.
 * The pill is measured rather than divided into equal columns, so each option
 * only takes the width its label needs, in any of the three languages.
 */
export default function Segmented({
  options,
  value,
  onChange,
  ariaLabel,
  panelPrefix,
  className = '',
}: SegmentedProps) {
  const buttonsRef = useRef<(HTMLButtonElement | null)[]>([])
  const [pill, setPill] = useState<{ left: number; width: number } | null>(null)

  const activeIndex = Math.max(
    0,
    options.findIndex((option) => option.id === value)
  )

  useIsomorphicLayoutEffect(() => {
    const measure = () => {
      const button = buttonsRef.current[activeIndex]
      if (button) setPill({ left: button.offsetLeft, width: button.offsetWidth })
    }

    measure()

    // Labels reflow with the viewport and with the language, so the pill is
    // re-measured whenever the control itself changes size.
    const parent = buttonsRef.current[activeIndex]?.parentElement
    if (!parent || typeof ResizeObserver === 'undefined') return
    const observer = new ResizeObserver(measure)
    observer.observe(parent)
    return () => observer.disconnect()
  }, [activeIndex, options])

  // The arrow keys move between tabs, as the tablist pattern expects
  const handleKeyDown = (event: React.KeyboardEvent) => {
    const offsets: Record<string, number> = { ArrowLeft: -1, ArrowRight: 1 }
    let next = -1

    if (event.key in offsets) {
      next = (activeIndex + offsets[event.key] + options.length) % options.length
    } else if (event.key === 'Home') {
      next = 0
    } else if (event.key === 'End') {
      next = options.length - 1
    }

    if (next < 0) return
    event.preventDefault()
    onChange(options[next].id)
    buttonsRef.current[next]?.focus()
  }

  return (
    <div
      role="tablist"
      aria-label={ariaLabel}
      onKeyDown={handleKeyDown}
      className={`relative inline-flex p-1 rounded-2xl bg-slate-100/80 border border-slate-200 ${className}`}
    >
      {pill && (
        <span
          aria-hidden="true"
          className="absolute top-1 bottom-1 left-0 rounded-xl bg-white shadow-[0_1px_2px_rgba(15,23,42,0.05),0_4px_12px_rgba(15,23,42,0.06)] transition-[transform,width] duration-300 ease-out"
          style={{ transform: `translateX(${pill.left}px)`, width: `${pill.width}px` }}
        />
      )}

      {options.map((option, index) => {
        const isActive = option.id === value
        return (
          <button
            key={option.id}
            ref={(node) => {
              buttonsRef.current[index] = node
            }}
            role="tab"
            type="button"
            aria-selected={isActive}
            aria-controls={panelPrefix ? `${panelPrefix}${option.id}` : undefined}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onChange(option.id)}
            className={`relative z-10 flex-1 whitespace-nowrap px-3 sm:px-5 py-2.5 rounded-xl text-[13px] sm:text-sm font-semibold transition-colors duration-300 ${
              isActive ? 'text-slate-900' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <span className="sm:hidden">{option.labelShort ?? option.label}</span>
            <span className="hidden sm:inline">{option.label}</span>
          </button>
        )
      })}
    </div>
  )
}
