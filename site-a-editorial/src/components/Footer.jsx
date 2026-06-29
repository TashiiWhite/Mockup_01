import { brand, footer } from '../data/content'
import { openBooking } from '../hooks/useScrollReveal'
import { Icon } from './Icons'

const SOCIAL_ICON = { Instagram: 'instagram', Facebook: 'facebook', TikTok: 'tiktok', YouTube: 'youtube' }

export default function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      <div className="mx-auto max-w-content px-6 py-16 md:px-10">
        {/* Top: brand + tap-to-call CTA */}
        <div className="flex flex-col gap-8 border-b border-ivory/10 pb-12 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-serif text-3xl">
              {brand.name}
              <span className="text-gold">.</span>
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ivory/60">{footer.blurb}</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={brand.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-ivory/20 px-6 py-3 text-sm font-medium transition-colors hover:border-gold hover:text-gold"
            >
              <Icon name="phone" className="h-4 w-4" />
              {brand.phone}
            </a>
            <button onClick={openBooking} className="btn-primary !bg-gold !text-ink hover:!bg-champagne">
              Book an appointment
            </button>
          </div>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 gap-10 py-12 md:grid-cols-4">
          {footer.columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs uppercase tracking-widest text-gold">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#contact" className="text-sm text-ivory/70 transition-colors hover:text-ivory">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-gold">Follow</h3>
            <div className="mt-4 flex gap-3">
              {footer.social.map((s) => (
                <a
                  key={s}
                  href="#top"
                  aria-label={s}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/15 text-ivory/70 transition-all hover:border-gold hover:text-gold"
                >
                  <Icon name={SOCIAL_ICON[s]} className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="border-t border-ivory/10 pt-8 text-sm text-ivory/50">
          © {new Date().getFullYear()} {brand.full}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
