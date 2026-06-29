import { features } from '../data/content'
import { openBooking } from '../hooks/useScrollReveal'
import { Icon } from './Icons'
import { SectionLabel } from './SectionLabel'

// Indices that become wide "highlight" tiles — breaks the uniform 6-up grid.
const WIDE = new Set([0, 3])

export default function Features() {
  return (
    <section id="features" className="section-pad">
      <div className="mx-auto max-w-content px-6 md:px-10">
        {/* Oversized editorial headline pinned left; copy tucked bottom-right */}
        <div className="reveal grid items-end gap-6 md:grid-cols-[1.55fr_1fr]">
          <div>
            <SectionLabel index="01">{features.eyebrow}</SectionLabel>
            <h2 className="mt-5 headline-bleed text-ink">
              Care your car<br className="hidden sm:block" /> can{' '}
              <span className="italic text-gold">actually</span> see.
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-stone md:pb-3">{features.sub}</p>
        </div>

        <div className="reveal-stagger mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.items.map((item, i) => {
            const wide = WIDE.has(i)
            return (
              <div
                key={item.title}
                className={`group card-surface relative overflow-hidden p-8 ${
                  wide ? 'sm:col-span-2' : ''
                } ${wide ? 'bg-gradient-to-br from-porcelain to-goldwash' : ''}`}
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gold/0 blur-2xl transition-all duration-500 group-hover:bg-gold/20" />

                <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-cream text-bronze transition-all duration-500 group-hover:scale-110 group-hover:bg-gold group-hover:text-ivory">
                  <Icon name={item.icon} />
                </span>
                <h3 className={`relative mt-6 font-serif text-ink ${wide ? 'text-3xl' : 'text-2xl'}`}>
                  {item.title}
                </h3>
                <p className={`relative mt-3 leading-relaxed text-stone ${wide ? 'max-w-md text-lg' : ''}`}>
                  {item.desc}
                </p>
              </div>
            )
          })}

          {/* CTA tile completes the bento and adds a mid-page conversion point */}
          <button
            onClick={openBooking}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-ink p-8 text-left text-ivory transition-all duration-500 hover:-translate-y-1 hover:shadow-luxe"
          >
            <div className="pointer-events-none absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-gold/20 blur-2xl transition-all duration-500 group-hover:bg-gold/40" />
            <span className="relative font-serif text-2xl">Ready when you are.</span>
            <span className="relative mt-6 inline-flex items-center gap-2 text-sm font-medium tracking-wide text-champagne">
              Book an appointment
              <Icon name="arrow" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
