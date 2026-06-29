import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const reduced = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** Magnetic hover: the element drifts toward the cursor and springs back. */
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

/** Counts a number up from 0 when it scrolls into view. Returns { ref, display }. */
export function useCountUp(value, format = (n) => Math.round(n).toLocaleString()) {
  const ref = useRef(null)
  const [display, setDisplay] = useState(reduced() ? format(value) : format(0))

  useEffect(() => {
    const el = ref.current
    if (!el || reduced()) return

    const obj = { n: 0 }
    const tween = gsap.to(obj, {
      n: value,
      duration: 1.6,
      ease: 'power2.out',
      paused: true,
      onUpdate: () => setDisplay(format(obj.n)),
    })

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
  }, [value, format])

  return { ref, display }
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
