import { features } from '../data/content'
import { openBooking } from '../hooks/useScrollReveal'
import { Icon } from './Icons'

// Indices that become wide "highlight" tiles — breaks the uniform 6-up grid.
const WIDE = new Set([0, 3])

export default function Features() {
  return (
    <section id="features" className="atmosphere section-pad">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="reveal grid items-end gap-6 md:grid-cols-[1.4fr_1fr]">
          <div>
            <span className="eyebrow-line">{features.eyebrow}</span>
            <h2 className="mt-5 statement text-display-sm">{features.title}</h2>
          </div>
          <p className="text-lg leading-relaxed text-mist md:pb-2">{features.sub}</p>
        </div>

        <div className="reveal-stagger mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.items.map((item, i) => {
            const wide = WIDE.has(i)
            return (
              <div
                key={item.title}
                className={`group card-surface relative overflow-hidden p-8 ${
                  wide ? 'sm:col-span-2' : ''
                }`}
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gold/0 blur-2xl transition-all duration-500 group-hover:bg-gold/20" />

                <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-obsidian text-gold transition-all duration-500 group-hover:scale-110 group-hover:bg-gold group-hover:text-obsidian">
                  <Icon name={item.icon} />
                </span>
                <h3 className={`relative mt-6 font-serif text-smoke ${wide ? 'text-3xl' : 'text-2xl'}`}>
                  {item.title}
                </h3>
                <p className={`relative mt-3 leading-relaxed text-mist ${wide ? 'max-w-md text-lg' : ''}`}>
                  {item.desc}
                </p>
              </div>
            )
          })}

          {/* CTA tile completes the bento and adds a mid-page conversion point */}
          <button
            onClick={openBooking}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-gold to-bronze p-8 text-left text-obsidian transition-all duration-500 hover:-translate-y-1 hover:shadow-glow-gold"
          >
            <span className="relative font-serif text-2xl">Ready when you are.</span>
            <span className="relative mt-6 inline-flex items-center gap-2 text-sm font-semibold tracking-wide">
              Book an appointment
              <Icon name="arrow" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
