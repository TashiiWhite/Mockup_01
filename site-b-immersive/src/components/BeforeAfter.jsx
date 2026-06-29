import { useCallback, useEffect, useRef, useState } from 'react'
import { beforeAfter } from '../data/content'
import { SectionLabel } from './SectionLabel'

/**
 * Interactive before/after reveal slider. One source image is used for both
 * sides; the "before" layer gets a desaturating/dulling filter so the
 * correction reads clearly. Works with mouse, touch, and keyboard.
 */
export default function BeforeAfter() {
  const [pos, setPos] = useState(50)
  const [dragging, setDragging] = useState(false)
  const containerRef = useRef(null)

  const move = useCallback((clientX) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const p = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.max(0, Math.min(100, p)))
  }, [])

  useEffect(() => {
    if (!dragging) return
    const onMouseMove = (e) => move(e.clientX)
    const onTouchMove = (e) => move(e.touches[0].clientX)
    const stop = () => setDragging(false)
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('touchmove', onTouchMove, { passive: true })
    document.addEventListener('mouseup', stop)
    document.addEventListener('touchend', stop)
    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('touchmove', onTouchMove)
      document.removeEventListener('mouseup', stop)
      document.removeEventListener('touchend', stop)
    }
  }, [dragging, move])

  const onKey = (e) => {
    if (e.key === 'ArrowLeft') setPos((p) => Math.max(0, p - 4))
    if (e.key === 'ArrowRight') setPos((p) => Math.min(100, p + 4))
  }

  return (
    <section className="atmosphere relative section-pad overflow-hidden">
      {/* Luminous bronze glow — the brightest, most "lit" moment on the page,
          a deliberate rhythm break in the long dark scroll */}
      <div className="pointer-events-none absolute right-0 top-1/2 h-[42rem] w-[42rem] -translate-y-1/2 translate-x-1/3 rounded-full bg-[radial-gradient(circle,rgba(201,163,92,0.18),transparent_70%)] blur-2xl" />
      <div className="relative mx-auto max-w-content px-6 md:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.4fr]">
          {/* Copy — left, asymmetric */}
          <div className="reveal">
            <SectionLabel index="02">{beforeAfter.eyebrow}</SectionLabel>
            <h2 className="mt-5 statement text-display-sm">{beforeAfter.title}</h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-mist">{beforeAfter.sub}</p>
            <p className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-gold">
              <span className="h-2 w-2 animate-pulse rounded-full bg-gold" />
              Drag the handle to compare
            </p>
          </div>

          {/* Slider — right, larger */}
          <div className="reveal">
            <div
              ref={containerRef}
              className="relative aspect-[4/3] w-full select-none overflow-hidden rounded-[2rem] shadow-glow ring-1 ring-white/10 sm:aspect-[16/10]"
              onMouseDown={(e) => {
                setDragging(true)
                move(e.clientX)
              }}
              onTouchStart={(e) => {
                setDragging(true)
                move(e.touches[0].clientX)
              }}
            >
              {/* AFTER (clean) — base layer */}
              <img
                src={beforeAfter.image}
                alt={beforeAfter.alt}
                draggable="false"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-gold/90 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-obsidian backdrop-blur">
                {beforeAfter.afterLabel}
              </span>

              {/* BEFORE (dull) — clipped overlay */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
              >
                <img
                  src={beforeAfter.image}
                  alt=""
                  draggable="false"
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-cover [filter:grayscale(0.7)_brightness(0.5)_contrast(0.9)]"
                />
                <div className="absolute inset-0 bg-obsidian/30" />
                <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-obsidian/80 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-smoke backdrop-blur">
                  {beforeAfter.beforeLabel}
                </span>
              </div>

              {/* Handle */}
              <div
                className="absolute top-0 z-20 h-full w-0.5 bg-gold"
                style={{ left: `calc(${pos}% - 1px)` }}
              >
                <button
                  type="button"
                  aria-label="Drag to compare before and after"
                  role="slider"
                  aria-valuenow={Math.round(pos)}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  onKeyDown={onKey}
                  onMouseDown={(e) => {
                    e.stopPropagation()
                    setDragging(true)
                  }}
                  onTouchStart={(e) => {
                    e.stopPropagation()
                    setDragging(true)
                  }}
                  className={`absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-gold text-obsidian shadow-glow-gold transition-transform duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne ${
                    dragging ? 'scale-110' : 'hover:scale-105'
                  }`}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                  <svg className="-ml-2" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 6l6 6-6 6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
