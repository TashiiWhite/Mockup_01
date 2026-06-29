import { hero, brand } from '../data/content'
import { scrollToId, openBooking } from '../hooks/useScrollReveal'
import { Icon } from './Icons'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 md:pt-40">
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-14 px-6 pb-20 md:grid-cols-2 md:px-10 md:pb-28">
        {/* Copy */}
        <div className="reveal">
          <span className="eyebrow">{hero.eyebrow}</span>
          <h1 className="mt-5 font-serif text-5xl leading-[1.05] text-ink sm:text-6xl md:text-7xl">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-stone">{hero.sub}</p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <button onClick={openBooking} className="btn-primary">
              {hero.primaryCta}
            </button>
            <button onClick={() => scrollToId('pricing')} className="btn-ghost">
              {hero.secondaryCta}
              <Icon name="arrow" className="ml-2 h-4 w-4" />
            </button>
          </div>

          <dl className="mt-14 grid grid-cols-3 gap-6 border-t border-ink/10 pt-8">
            {hero.stats.map((s) => (
              <div key={s.label}>
                <dt className="font-serif text-3xl text-ink">{s.value}</dt>
                <dd className="mt-1 text-xs leading-snug text-stone">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Image */}
        <div className="reveal relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-cream shadow-2xl shadow-ink/10">
            <img
              src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=900&q=80"
              alt="A glossy, freshly detailed luxury car finish"
              loading="eager"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/25 to-transparent" />
          </div>

          {/* Floating credibility card */}
          <div className="absolute -bottom-6 -left-4 hidden rounded-2xl bg-ivory/95 px-6 py-4 shadow-xl ring-1 ring-ink/5 backdrop-blur sm:block">
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
