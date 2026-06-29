import { testimonials } from '../data/content'
import { Icon } from './Icons'

export default function Testimonials() {
  return (
    <section className="section-pad bg-graphite/40">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow">{testimonials.eyebrow}</span>
          <h2 className="mt-4 font-serif text-4xl text-smoke md:text-5xl">{testimonials.title}</h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.items.map((t) => (
            <figure
              key={t.name}
              className="reveal flex flex-col rounded-2xl border border-smoke/10 bg-carbon p-8 transition-transform duration-300 hover:-translate-y-1"
            >
              <Icon name="quote" className="h-8 w-8 text-gold/70" />
              <blockquote className="mt-5 flex-1 font-serif text-xl leading-relaxed text-smoke/90">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-4 border-t border-smoke/10 pt-6">
                <img
                  src={t.avatar}
                  alt={t.name}
                  loading="lazy"
                  className="h-12 w-12 rounded-full object-cover ring-1 ring-gold/40"
                />
                <div>
                  <p className="font-medium text-smoke">{t.name}</p>
                  <p className="text-sm text-mist">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
