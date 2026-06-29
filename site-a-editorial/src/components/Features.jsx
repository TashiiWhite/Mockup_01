import { features } from '../data/content'
import { Icon } from './Icons'

export default function Features() {
  return (
    <section id="features" className="section-pad">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow">{features.eyebrow}</span>
          <h2 className="mt-4 font-serif text-4xl text-ink md:text-5xl">{features.title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-stone">{features.sub}</p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-3xl bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
          {features.items.map((item) => (
            <div
              key={item.title}
              className="reveal group bg-ivory p-8 transition-colors duration-300 hover:bg-cream/60"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-cream text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-ivory">
                <Icon name={item.icon} />
              </span>
              <h3 className="mt-6 font-serif text-2xl text-ink">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-stone">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
