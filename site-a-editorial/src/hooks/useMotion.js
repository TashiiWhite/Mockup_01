import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const reduced = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Magnetic hover: the element drifts toward the cursor and springs back.
 * Pointer-only, disabled for reduced motion. Returns a ref to attach.
 */
export function useMagnetic(strength = 0.35) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el || reduced()) return
    if (!window.matchMedia('(pointer: fine)').matches) return

    const onMove = (e) => {
      const r = el.getBoundingClientRect()
      const x = e.clientX - (r.left + r.width / 2)
      const y = e.clientY - (r.top + r.height / 2)
      gsap.to(el, { x: x * strength, y: y * strength, duration: 0.5, ease: 'power3.out' })
    }
    const onLeave = () => gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' })

    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [strength])
  return ref
}

/**
 * Counts a number up from 0 when it scrolls into view. Returns { ref, display }.
 * `value` is the raw target number; `format` shapes the printed string.
 */
export function useCountUp(value, format = (n) => Math.round(n).toLocaleString()) {
  const ref = useRef(null)
  const [display, setDisplay] = useState(reduced() ? format(value) : format(0))
  // Keep the latest formatter without making it an effect dependency — an inline
  // formatter changes identity each render and would otherwise restart the tween.
  const formatRef = useRef(format)
  formatRef.current = format

  useEffect(() => {
    const el = ref.current
    if (!el || reduced()) return

    const obj = { n: 0 }
    const tween = gsap.to(obj, {
      n: value,
      duration: 1.6,
      ease: 'power2.out',
      paused: true,
      onUpdate: () => setDisplay(formatRef.current(obj.n)),
    })

    // IntersectionObserver reliably fires for elements already on-screen at
    // mount (above the fold), which a scroll-based trigger can miss.
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          tween.play()
          io.disconnect()
        }
      },
      { threshold: 0.2 },
    )
    io.observe(el)

    return () => {
      tween.kill()
      io.disconnect()
    }
  }, [value])

  return { ref, display }
}

/**
 * Cursor "polish" spotlight: writes --mx/--my CSS variables (as %) on the
 * element so a child `.shine` radial highlight can track the pointer.
 * Pointer-only; on touch it simply never fires and the shine stays hidden.
 */
export function useSpotlight() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el || !window.matchMedia('(pointer: fine)').matches) return
    const onMove = (e) => {
      const r = el.getBoundingClientRect()
      el.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`)
      el.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`)
    }
    el.addEventListener('mousemove', onMove)
    return () => el.removeEventListener('mousemove', onMove)
  }, [])
  return ref
}

/** Subtle parallax: element shifts on the Y axis as it scrolls through view. */
export function useParallax(distance = 60) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el || reduced()) return
    const tween = gsap.fromTo(
      el,
      { y: -distance / 2 },
      {
        y: distance / 2,
        ease: 'none',
        scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true },
      },
    )
    return () => {
      if (tween.scrollTrigger) tween.scrollTrigger.kill()
      tween.kill()
    }
  }, [distance])
  return ref
}
