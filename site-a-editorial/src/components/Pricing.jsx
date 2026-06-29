import { pricing } from '../data/content'
import { openBooking } from '../hooks/useScrollReveal'
import { Icon } from './Icons'

export default function Pricing() {
  return (
    <section id="pricing" className="section-pad">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow">{pricing.eyebrow}</span>
          <h2 className="mt-4 font-serif text-4xl text-ink md:text-5xl">{pricing.title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-stone">{pricing.sub}</p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center">
          {pricing.tiers.map((tier) => (
            <div
              key={tier.name}
              className={`reveal relative flex flex-col rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-1 ${
                tier.featured
                  ? 'bg-ink text-ivory shadow-2xl shadow-ink/20 lg:scale-105'
                  : 'bg-ivory text-ink ring-1 ring-ink/10'
              }`}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-xs font-medium uppercase tracking-widest text-ivory">
                  Most popular
                </span>
              )}

              <h3 className="font-serif text-2xl">{tier.name}</h3>
              <p className={`mt-2 text-sm ${tier.featured ? 'text-ivory/70' : 'text-stone'}`}>
                {tier.blurb}
              </p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-sm">$</span>
                <span className="font-serif text-5xl">{tier.price}</span>
                <span className={`ml-2 text-sm ${tier.featured ? 'text-ivory/60' : 'text-stone'}`}>
                  {tier.cadence}
                </span>
              </div>

              <ul className="mt-8 flex-1 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Icon
                      name="check"
                      className={`mt-0.5 h-4 w-4 flex-shrink-0 ${tier.featured ? 'text-gold' : 'text-gold'}`}
                    />
                    <span className={tier.featured ? 'text-ivory/90' : 'text-ink/80'}>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={openBooking}
                className={`mt-8 w-full rounded-full px-6 py-4 text-sm font-medium tracking-wide transition-all duration-300 ${
                  tier.featured
                    ? 'bg-gold text-ivory hover:bg-champagne hover:text-ink'
                    : 'bg-ink text-ivory hover:bg-gold'
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>

        <p className="reveal mt-10 text-center text-sm text-stone">{pricing.note}</p>
      </div>
    </section>
  )
}
