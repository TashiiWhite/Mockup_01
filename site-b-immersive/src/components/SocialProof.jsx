import { socialProof } from '../data/content'

export default function SocialProof() {
  // Duplicate the list so the marquee can loop seamlessly (-50% keyframe).
  const loop = [...socialProof.logos, ...socialProof.logos]

  return (
    <section className="border-y border-white/5 bg-graphite/60">
      <div className="mx-auto max-w-content px-6 py-10 md:px-10">
        <p className="eyebrow-line mb-7 justify-center md:justify-start">{socialProof.label}</p>
        <div className="group mask-fade-x overflow-hidden">
          <div className="flex w-max animate-marquee items-center gap-x-14 group-hover:[animation-play-state:paused]">
            {loop.map((logo, i) => (
              <span
                key={`${logo}-${i}`}
                className="whitespace-nowrap font-serif text-2xl tracking-wide text-mist/50 transition-colors duration-300 hover:text-smoke md:text-3xl"
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
