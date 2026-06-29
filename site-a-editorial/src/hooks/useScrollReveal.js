import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { bookingUrl } from '../data/content'

gsap.registerPlugin(ScrollTrigger)

/**
 * Scroll-reveal system.
 *  - `.reveal`          : single element fades/slides up when it enters view.
 *  - `.reveal-stagger`  : container whose direct children animate in sequence.
 * Respects prefers-reduced-motion (CSS shows everything; we skip GSAP).
 */
export function useScrollReveal() {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const ctx = gsap.context(() => {
      // Individual reveals
      gsap.utils.toArray('.reveal').forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        })
      })

      // Staggered groups
      gsap.utils.toArray('.reveal-stagger').forEach((group) => {
        const kids = group.children
        gsap.set(kids, { opacity: 0, y: 30 })
        gsap.to(kids, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.12,
          scrollTrigger: { trigger: group, start: 'top 85%', once: true },
        })
      })
    })

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

/** Drives the fixed top progress bar (.scroll-progress) as the page scrolls. */
export function useScrollProgress(ref) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const onScroll = () => {
      const h = document.documentElement
      const max = h.scrollHeight - h.clientHeight
      const p = max > 0 ? h.scrollTop / max : 0
      el.style.transform = `scaleX(${p})`
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [ref])
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
