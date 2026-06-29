import { features } from '../data/content'
import { Icon } from './Icons'

export default function Features() {
  return (
    <section id="features" className="section-pad">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow">{features.eyebrow}</span>
          <h2 className="mt-4 font-serif text-4xl text-smoke md:text-5xl">{features.title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-mist">{features.sub}</p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.items.map((item) => (
            <div
              key={item.title}
              className="reveal group rounded-2xl border border-smoke/10 bg-graphite/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-carbon"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-obsidian text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-obsidian">
                <Icon name={item.icon} />
              </span>
              <h3 className="mt-6 font-serif text-2xl text-smoke">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-mist">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
