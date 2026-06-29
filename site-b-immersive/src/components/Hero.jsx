import { hero } from '../data/content'
import { scrollToId } from '../hooks/useScrollReveal'
import { Icon } from './Icons'
import VantaBackground from './VantaBackground'

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Static gradient fallback — always present */}
      <div className="absolute inset-0 bg-gradient-to-br from-obsidian via-graphite to-carbon" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(201,163,92,0.18),transparent_55%)]" />

      {/* WebGL layer (desktop, motion-allowed only) */}
      <VantaBackground />

      {/* Vignette for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />

      <div className="relative mx-auto w-full max-w-content px-6 py-32 md:px-10">
        <div className="max-w-3xl">
          <span className="reveal eyebrow inline-block">{hero.eyebrow}</span>
          <h1 className="reveal mt-6 font-serif text-5xl leading-[1.04] text-smoke sm:text-6xl md:text-7xl lg:text-8xl">
            {hero.headline}
          </h1>
          <p className="reveal mt-7 max-w-xl text-lg leading-relaxed text-mist md:text-xl">
            {hero.sub}
          </p>

          <div className="reveal mt-10 flex flex-wrap items-center gap-4">
            <button onClick={() => scrollToId('contact')} className="btn-primary">
              {hero.primaryCta}
            </button>
            <button onClick={() => scrollToId('pricing')} className="btn-ghost">
              {hero.secondaryCta}
              <Icon name="arrow" className="ml-2 h-4 w-4" />
            </button>
          </div>

          <dl className="reveal mt-16 grid max-w-xl grid-cols-3 gap-6 border-t border-smoke/15 pt-8">
            {hero.stats.map((s) => (
              <div key={s.label}>
                <dt className="font-serif text-3xl text-gold md:text-4xl">{s.value}</dt>
                <dd className="mt-1 text-xs leading-snug text-mist">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-mist/60 md:flex">
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <span className="h-10 w-px animate-pulse bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  )
}
