import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { bookingUrl } from '../data/content'

gsap.registerPlugin(ScrollTrigger)

/**
 * Animates every element with the `.reveal` class into view on scroll.
 * Respects prefers-reduced-motion (CSS already shows them; we just skip GSAP).
 */
export function useScrollReveal() {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const ctx = gsap.context(() => {
      gsap.utils.toArray('.reveal').forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            once: true,
          },
        })
      })
    })

    // Recompute trigger positions after fonts/images settle (remote images can
    // grow the page after triggers are first measured, leaving lower ones stale).
    const refresh = () => ScrollTrigger.refresh()
    const timers = [setTimeout(refresh, 200), setTimeout(refresh, 1200)]
    window.addEventListener('load', refresh)

    return () => {
      timers.forEach(clearTimeout)
      window.removeEventListener('load', refresh)
      ctx.revert()
    }
  }, [])
}

/** Smooth-scroll helper used by the CTAs. */
export function scrollToId(id) {
  const el = document.getElementById(id)
  if (!el) return
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' })
}

/**
 * Booking action shared by every "Book an appointment" CTA.
 * If a Square Appointments URL is configured (see bookingUrl in data/content.js)
 * it opens the live booking page in a new tab; otherwise it falls back to
 * smooth-scrolling to the on-page contact form.
 */
export function openBooking() {
  if (bookingUrl) {
    window.open(bookingUrl, '_blank', 'noopener,noreferrer')
  } else {
    scrollToId('contact')
  }
}
