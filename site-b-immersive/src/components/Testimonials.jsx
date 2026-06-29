import { testimonials } from '../data/content'
import { Icon } from './Icons'
import { SectionLabel } from './SectionLabel'

function Stars({ className = '' }) {
  return (
    <div className={`flex gap-0.5 text-gold ${className}`} aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2.5l2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 18.6 6 20.7l1.2-6.6L2.4 9.5l6.6-.9L12 2.5z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [featured, ...rest] = testimonials.items

  return (
    <section className="atmosphere section-pad">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="reveal max-w-2xl">
          <SectionLabel index="03">{testimonials.eyebrow}</SectionLabel>
          <h2 className="mt-5 statement text-display-sm">{testimonials.title}</h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.25fr_1fr]">
          {/* Featured pull-quote */}
          <figure className="reveal relative flex flex-col justify-between overflow-hidden rounded-[2rem] bg-gradient-to-br from-carbon to-graphite p-10 ring-1 ring-gold/20 md:p-14">
            <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-gold/20 blur-3xl" />
            <Icon name="quote" className="relative h-10 w-10 text-gold" />
            <blockquote className="relative mt-6 font-serif text-3xl leading-[1.25] text-smoke md:text-4xl">
              “{featured.quote}”
            </blockquote>
            <figcaption className="relative mt-10 flex items-center gap-4 border-t border-white/10 pt-7">
              <img
                src={featured.avatar}
                alt={featured.name}
                loading="lazy"
                className="h-16 w-16 rounded-full object-cover ring-2 ring-gold/50"
              />
              <div className="flex-1">
                <p className="font-medium text-smoke">{featured.name}</p>
                <p className="text-sm text-champagne/80">{featured.role}</p>
              </div>
              <Stars />
            </figcaption>
          </figure>

          {/* Supporting cards */}
          <div className="grid gap-6">
            {rest.map((t) => (
              <figure key={t.name} className="reveal card-surface flex flex-col p-8">
                <Stars className="mb-4" />
                <blockquote className="flex-1 font-serif text-xl leading-relaxed text-smoke/90">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                  <img src={t.avatar} alt={t.name} loading="lazy" className="h-11 w-11 rounded-full object-cover" />
                  <div>
                    <p className="text-sm font-medium text-smoke">{t.name}</p>
                    <p className="text-xs text-mist">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
