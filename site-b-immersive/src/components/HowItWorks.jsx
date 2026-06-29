import { howItWorks } from '../data/content'

export default function HowItWorks() {
  return (
    <section id="how" className="section-pad bg-graphite/40">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow">{howItWorks.eyebrow}</span>
          <h2 className="mt-4 font-serif text-4xl text-smoke md:text-5xl">{howItWorks.title}</h2>
        </div>

        <div className="relative mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="gold-line absolute left-0 right-0 top-7 hidden h-px md:block" />

          {howItWorks.steps.map((step) => (
            <div key={step.n} className="reveal relative text-center md:text-left">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/50 bg-obsidian font-serif text-xl text-gold md:mx-0">
                {step.n}
              </div>
              <h3 className="mt-6 font-serif text-2xl text-smoke">{step.title}</h3>
              <p className="mt-3 leading-relaxed text-mist">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
