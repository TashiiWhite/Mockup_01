import { hero } from '../data/content'
import { scrollToId, openBooking } from '../hooks/useScrollReveal'
import { useMagnetic, useCountUp, useSpotlight } from '../hooks/useMotion'
import { Icon } from './Icons'
import VantaBackground from './VantaBackground'

function Stat({ stat }) {
  const format = (n) =>
    (stat.decimals ? n.toFixed(stat.decimals) : Math.round(n).toLocaleString()) + (stat.suffix || '')
  const { ref, display } = useCountUp(stat.value, format)
  return (
    <div>
      <dt ref={ref} className="font-serif text-3xl text-gold md:text-4xl">
        {display}
      </dt>
      <dd className="mt-1 text-xs leading-snug text-mist">{stat.label}</dd>
    </div>
  )
}

export default function Hero() {
  const magneticRef = useMagnetic()
  const shineRef = useSpotlight()

  return (
    <section
      id="top"
      ref={shineRef}
      className="shine-host relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Static gradient fallback — always present */}
      <div className="absolute inset-0 bg-gradient-to-br from-obsidian via-graphite to-carbon" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(201,163,92,0.18),transparent_55%)]" />

      {/* WebGL layer (desktop, motion-allowed only) */}
      <VantaBackground />

      {/* Vignette + left scrim for text legibility over the animated fog */}
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian/85 via-obsidian/30 to-transparent md:to-obsidian/0" />

      {/* Cursor-tracked "polish" shine — signature on-brand interaction */}
      <div className="shine" />

      <div className="relative mx-auto w-full max-w-content px-6 py-32 md:px-10">
        <div className="max-w-3xl">
          <span className="reveal eyebrow-line">{hero.eyebrow}</span>
          <h1 className="reveal mt-6 statement text-balance">
            {hero.headlineLead}{' '}
            <span className="italic text-gold">{hero.headlineEmphasis}</span>
          </h1>
          <p className="reveal mt-7 max-w-xl text-lg leading-relaxed text-mist md:text-xl">
            {hero.sub}
          </p>

          <div className="reveal mt-10 flex flex-wrap items-center gap-4">
            <span ref={magneticRef} className="inline-block">
              <button onClick={openBooking} className="btn-primary">
                {hero.primaryCta}
                <Icon name="arrow" className="h-4 w-4" />
              </button>
            </span>
            <button onClick={() => scrollToId('pricing')} className="btn-ghost">
              {hero.secondaryCta}
            </button>
          </div>

          <dl className="reveal mt-16 grid max-w-xl grid-cols-3 divide-x divide-smoke/15 border-y border-smoke/15 py-7">
            {hero.stats.map((s) => (
              <div key={s.label} className="px-4 first:pl-0">
                <Stat stat={s} />
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
