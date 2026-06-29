import { hero, brand } from '../data/content'
import { scrollToId, openBooking } from '../hooks/useScrollReveal'
import { useMagnetic, useCountUp, useParallax } from '../hooks/useMotion'
import { Icon } from './Icons'

function Stat({ stat }) {
  const format = (n) =>
    (stat.decimals ? n.toFixed(stat.decimals) : Math.round(n).toLocaleString()) + (stat.suffix || '')
  const { ref, display } = useCountUp(stat.value, format)
  return (
    <div>
      <dt ref={ref} className="font-serif text-3xl text-ink md:text-4xl">
        {display}
      </dt>
      <dd className="mt-1 text-xs leading-snug text-stone">{stat.label}</dd>
    </div>
  )
}

export default function Hero() {
  const magneticRef = useMagnetic()
  const imgRef = useParallax(50)

  return (
    <section id="top" className="relative overflow-hidden pt-32 md:pt-40">
      {/* Ambient gold wash behind the hero */}
      <div className="pointer-events-none absolute -right-32 -top-24 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(176,141,79,0.18),transparent_70%)] blur-2xl" />

      <div className="relative mx-auto grid max-w-content grid-cols-1 items-center gap-14 px-6 pb-24 md:grid-cols-[1.05fr_0.95fr] md:px-10 md:pb-32">
        {/* Copy */}
        <div>
          <span className="reveal eyebrow-line">{hero.eyebrow}</span>
          <h1 className="reveal mt-6 statement text-balance">
            {hero.headlineLead}{' '}
            <span className="italic text-gold">{hero.headlineEmphasis}</span>
          </h1>
          <p className="reveal mt-7 max-w-md text-lg leading-relaxed text-stone">{hero.sub}</p>

          <div className="reveal mt-9 flex flex-wrap items-center gap-4">
            <span ref={magneticRef} className="inline-block">
              <button onClick={openBooking} className="btn-primary">
                {hero.primaryCta}
                <Icon name="arrow" className="h-4 w-4" />
              </button>
            </span>
            <button onClick={() => scrollToId('pricing')} className="btn-ghost">
              {hero.secondaryCta}
            </button>
          </div>

          <dl className="reveal mt-14 grid grid-cols-3 gap-6 border-t border-ink/10 pt-8">
            {hero.stats.map((s) => (
              <Stat key={s.label} stat={s} />
            ))}
          </dl>
        </div>

        {/* Image */}
        <div className="reveal relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-cream shadow-luxe">
            <img
              ref={imgRef}
              src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=900&q=80"
              alt="A glossy, freshly detailed luxury car finish"
              loading="eager"
              className="h-[112%] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />
          </div>

          {/* Floating credibility card */}
          <div className="absolute -bottom-6 -left-4 hidden animate-float rounded-2xl bg-ivory/95 px-6 py-4 shadow-luxe-sm ring-1 ring-ink/5 backdrop-blur sm:block">
            <p className="font-serif text-2xl text-ink">4.9★</p>
            <p className="text-xs text-stone">from 600+ local reviews</p>
          </div>

          <div className="absolute -right-3 -top-3 hidden rounded-full bg-gold px-5 py-3 text-xs font-medium uppercase tracking-widest text-ivory shadow-lg md:block">
            {brand.tagline}
          </div>
        </div>
      </div>
    </section>
  )
}
