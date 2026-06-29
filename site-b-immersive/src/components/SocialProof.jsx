import { socialProof } from '../data/content'

export default function SocialProof() {
  return (
    <section className="border-y border-smoke/10 bg-graphite/60">
      <div className="mx-auto max-w-content px-6 py-12 md:px-10">
        <div className="reveal flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <p className="eyebrow whitespace-nowrap">{socialProof.label}</p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 md:gap-x-12">
            {socialProof.logos.map((logo) => (
              <span
                key={logo}
                className="font-serif text-xl tracking-wide text-mist/60 transition-colors duration-300 hover:text-smoke md:text-2xl"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
