import { pricing } from '../data/content'
import { openBooking } from '../hooks/useScrollReveal'
import { Icon } from './Icons'

export default function Pricing() {
  return (
    <section id="pricing" className="atmosphere section-pad">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow-line justify-center">{pricing.eyebrow}</span>
          <h2 className="mt-5 statement text-display-sm">{pricing.title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-mist">{pricing.sub}</p>
        </div>

        <div className="reveal-stagger mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center">
          {pricing.tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1.5 ${
                tier.featured
                  ? 'bg-gradient-to-b from-carbon to-graphite shadow-glow-gold ring-1 ring-gold/50 lg:scale-[1.06]'
                  : 'card-surface'
              }`}
            >
              {tier.featured && (
                <>
                  <span className="pointer-events-none absolute inset-x-10 -top-px h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-xs font-medium uppercase tracking-widest text-obsidian shadow-glow-gold">
                    Most popular
                  </span>
                </>
              )}

              <h3 className="font-serif text-2xl text-smoke">{tier.name}</h3>
              <p className="mt-2 text-sm text-mist">{tier.blurb}</p>

              <div className="mt-6 flex items-baseline gap-1 text-smoke">
                <span className="text-sm">$</span>
                <span className="font-serif text-6xl">{tier.price}</span>
                <span className="ml-2 text-sm text-mist">{tier.cadence}</span>
              </div>

              <ul className="mt-8 flex-1 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Icon name="check" className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
                    <span className="text-smoke/80">{f}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={openBooking}
                className={`mt-8 w-full rounded-full px-6 py-4 text-sm font-medium tracking-wide transition-all duration-300 ${
                  tier.featured
                    ? 'bg-gold text-obsidian hover:bg-champagne'
                    : 'border border-smoke/25 text-smoke hover:border-gold hover:text-gold'
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>

        <p className="reveal mt-10 text-center text-sm text-mist">{pricing.note}</p>
      </div>
    </section>
  )
}
