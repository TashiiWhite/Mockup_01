import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { howItWorks } from '../data/content'
import { SectionLabel } from './SectionLabel'

gsap.registerPlugin(ScrollTrigger)

export default function HowItWorks() {
  const lineRef = useRef(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const line = lineRef.current
    if (!line) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      line.style.transform = 'scaleX(1)'
      return
    }
    const tween = gsap.fromTo(
      line,
      { scaleX: 0 },
      {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          end: 'bottom 75%',
          scrub: true,
        },
      },
    )
    return () => {
      if (tween.scrollTrigger) tween.scrollTrigger.kill()
      tween.kill()
    }
  }, [])

  return (
    <section id="how" ref={sectionRef} className="section-pad bg-ink text-ivory">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="reveal max-w-3xl">
          <SectionLabel index="05" dark>{howItWorks.eyebrow}</SectionLabel>
          <h2 className="mt-5 font-serif text-display-sm leading-[1.05] tracking-tight">
            {howItWorks.title}
          </h2>
        </div>

        <div className="relative mt-20 grid grid-cols-1 gap-14 md:grid-cols-3">
          {/* Connecting line (draws on scroll) */}
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-ivory/15 md:block">
            <div
              ref={lineRef}
              className="h-full origin-left bg-gradient-to-r from-gold via-champagne to-gold"
              style={{ transform: 'scaleX(0)' }}
            />
          </div>

          {howItWorks.steps.map((step) => (
            <div key={step.n} className="reveal relative text-center md:text-left">
              <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold/50 bg-ink font-serif text-2xl text-gold md:mx-0">
                {step.n}
                <span className="absolute inset-0 -z-10 rounded-full bg-gold/10 blur-md" />
              </div>
              <h3 className="mt-7 font-serif text-2xl">{step.title}</h3>
              <p className="mt-3 leading-relaxed text-ivory/70">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
