import { pricing } from '../data/content'
import { openBooking } from '../hooks/useScrollReveal'
import { Icon } from './Icons'
import { SectionLabel } from './SectionLabel'

const featured = pricing.tiers.find((t) => t.featured)
const others = pricing.tiers.filter((t) => !t.featured)

/** Large, feature-led card for the recommended tier. */
function FeaturedCard() {
  return (
    <div className="relative flex flex-col overflow-hidden rounded-[2rem] bg-ink p-10 text-ivory shadow-luxe md:p-12">
      <span className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold/20 blur-3xl" />
      <div className="relative flex items-center gap-3">
        <h3 className="font-serif text-3xl">{featured.name}</h3>
        <span className="rounded-full bg-gold px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-ivory">
          Most popular
        </span>
      </div>
      <p className="relative mt-2 text-champagne/80">{featured.blurb}</p>

      <div className="relative mt-7 flex items-baseline gap-1">
        <span className="text-lg">$</span>
        <span className="font-serif text-7xl leading-none">{featured.price}</span>
        <span className="ml-2 text-sm text-champagne/60">{featured.cadence}</span>
      </div>

      <ul className="relative mt-9 flex-1 grid gap-3 sm:grid-cols-2">
        {featured.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm">
            <Icon name="check" className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
            <span className="text-ivory/90">{f}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={openBooking}
        className="relative mt-10 w-full rounded-full bg-gold px-6 py-4 text-sm font-medium tracking-wide text-ivory transition-all duration-300 hover:bg-champagne hover:text-ink"
      >
        {featured.cta}
      </button>
    </div>
  )
}

/** Compact card for the supporting tiers. */
function CompactCard({ tier }) {
  return (
    <div className="card-surface flex flex-col p-7">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-serif text-2xl text-ink">{tier.name}</h3>
        <div className="flex items-baseline gap-0.5">
          <span className="text-xs text-stone">$</span>
          <span className="font-serif text-4xl text-ink">{tier.price}</span>
        </div>
      </div>
      <p className="mt-1 text-sm text-stone">{tier.blurb}</p>

      <ul className="mt-5 flex-1 space-y-2.5">
        {tier.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm">
            <Icon name="check" className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
            <span className="text-ink/80">{f}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={openBooking}
        className="mt-6 w-full rounded-full bg-ink px-6 py-3.5 text-sm font-medium tracking-wide text-ivory transition-all duration-300 hover:bg-gold"
      >
        {tier.cta}
      </button>
    </div>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" className="section-pad bg-cream/40">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="reveal grid items-end gap-6 md:grid-cols-[1.4fr_1fr]">
          <div>
            <SectionLabel index="04">{pricing.eyebrow}</SectionLabel>
            <h2 className="mt-5 statement text-display-sm">{pricing.title}</h2>
          </div>
          <p className="text-lg leading-relaxed text-stone md:pb-3">{pricing.sub}</p>
        </div>

        {/* Asymmetric: the recommended tier leads at ~55% width; the two
            supporting tiers stack alongside it — deliberately not a 3-up grid. */}
        <div className="reveal mt-14 grid items-stretch gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <FeaturedCard />
          <div className="grid gap-6">
            {others.map((tier) => (
              <CompactCard key={tier.name} tier={tier} />
            ))}
          </div>
        </div>

        <p className="reveal mt-10 text-sm text-stone">{pricing.note}</p>
      </div>
    </section>
  )
}
