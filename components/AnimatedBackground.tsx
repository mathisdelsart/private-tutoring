'use client'

import { useEffect, useRef } from 'react'

// The link check is O(n²), so the count is capped rather than left to scale
// with the viewport area.
const MAX_POINTS = 70
const LINK_DISTANCE = 130

interface Point {
  x: number
  y: number
  vx: number
  vy: number
}

export default function AnimatedBackground() {
  const layerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const layer = layerRef.current
    const canvas = canvasRef.current
    if (!layer || !canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const finePointer = window.matchMedia('(pointer: fine)')

    let points: Point[] = []
    let width = 0
    let height = 0
    let frame = 0
    let pointerFrame = 0
    let resizeTimer = 0
    let visible = true

    const seed = () => {
      const dpr = Math.min(2, window.devicePixelRatio || 1)
      const rect = layer.getBoundingClientRect()
      width = Math.round(rect.width)
      height = Math.round(rect.height)

      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      let count = Math.min(MAX_POINTS, Math.round((width * height) / 22000))
      if (width < 768) count = Math.round(count / 2)

      points = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
      }))
    }

    const draw = (advance: boolean) => {
      ctx.clearRect(0, 0, width, height)

      if (advance) {
        for (const p of points) {
          p.x += p.vx
          p.y += p.vy
          if (p.x <= 0 || p.x >= width) p.vx *= -1
          if (p.y <= 0 || p.y >= height) p.vy *= -1
        }
      }

      ctx.lineWidth = 1
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x
          const dy = points[i].y - points[j].y
          const d = Math.hypot(dx, dy)
          if (d < LINK_DISTANCE) {
            ctx.strokeStyle = `rgba(5, 150, 105, ${(1 - d / LINK_DISTANCE) * 0.16})`
            ctx.beginPath()
            ctx.moveTo(points[i].x, points[i].y)
            ctx.lineTo(points[j].x, points[j].y)
            ctx.stroke()
          }
        }
      }

      ctx.fillStyle = 'rgba(5, 150, 105, 0.38)'
      for (const p of points) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const loop = () => {
      draw(true)
      frame = requestAnimationFrame(loop)
    }

    // One entry point for every reason the animation may need to stop or
    // restart: reduced motion, hidden tab, scrolled past the layer.
    const sync = () => {
      cancelAnimationFrame(frame)
      if (reduceMotion.matches || document.hidden || !visible) {
        draw(false)
        return
      }
      frame = requestAnimationFrame(loop)
    }

    let pointerX = 0
    let pointerY = 0
    const onPointerMove = (event: PointerEvent) => {
      // Page coordinates: the layer sits at the top of the document, so the
      // halo stays under the cursor as the page scrolls.
      pointerX = event.pageX
      pointerY = event.pageY
      if (pointerFrame) return
      pointerFrame = requestAnimationFrame(() => {
        pointerFrame = 0
        layer.style.setProperty('--mx', `${pointerX}px`)
        layer.style.setProperty('--my', `${pointerY}px`)
      })
    }

    const onResize = () => {
      window.clearTimeout(resizeTimer)
      resizeTimer = window.setTimeout(() => {
        seed()
        sync()
      }, 150)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        visible = entries[0].isIntersecting
        sync()
      },
      { rootMargin: '100px' }
    )
    observer.observe(layer)

    seed()
    sync()

    if (finePointer.matches) {
      window.addEventListener('pointermove', onPointerMove, { passive: true })
    }
    window.addEventListener('resize', onResize)
    document.addEventListener('visibilitychange', sync)
    reduceMotion.addEventListener('change', sync)

    return () => {
      cancelAnimationFrame(frame)
      cancelAnimationFrame(pointerFrame)
      window.clearTimeout(resizeTimer)
      observer.disconnect()
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('resize', onResize)
      document.removeEventListener('visibilitychange', sync)
      reduceMotion.removeEventListener('change', sync)
    }
  }, [])

  return (
    <>
      <div className="app-bg" aria-hidden="true" />
      <div className="app-bg-accent" aria-hidden="true" />

      {/* Anchored to the top of the document rather than the viewport, so the
          effect fades out with the scroll instead of sitting behind every
          section. A fixed layer cannot do that with a static mask. */}
      <div ref={layerRef} className="app-bg-fx" aria-hidden="true">
        <div className="app-bg-grid" />
        <canvas ref={canvasRef} className="app-bg-canvas" />
      </div>
    </>
  )
}
