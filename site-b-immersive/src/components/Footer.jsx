import { brand, footer } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-smoke/10 bg-obsidian text-smoke">
      <div className="mx-auto max-w-content px-6 py-16 md:px-10">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <p className="font-serif text-2xl">
              {brand.name}
              <span className="text-gold">.</span>
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-mist">{footer.blurb}</p>
          </div>

          {footer.columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs uppercase tracking-widest text-gold">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#contact" className="text-sm text-mist transition-colors hover:text-smoke">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-smoke/10 pt-8 md:flex-row">
          <p className="text-sm text-mist">
            © {new Date().getFullYear()} {brand.full}. All rights reserved.
          </p>
          <div className="flex gap-5">
            {footer.social.map((s) => (
              <a key={s} href="#top" className="text-sm text-mist transition-colors hover:text-gold">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
