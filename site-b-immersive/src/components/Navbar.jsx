import { useEffect, useState } from 'react'
import { brand, nav } from '../data/content'
import { scrollToId } from '../hooks/useScrollReveal'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (href) => {
    setOpen(false)
    scrollToId(href.replace('#', ''))
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-obsidian/80 backdrop-blur-md shadow-lg shadow-black/30' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-5 md:px-10">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="font-serif text-2xl tracking-wide text-smoke"
        >
          {brand.name}
          <span className="text-gold">.</span>
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {nav.map((item) => (
            <button
              key={item.href}
              onClick={() => go(item.href)}
              className="text-sm text-mist transition-colors hover:text-smoke"
            >
              {item.label}
            </button>
          ))}
          <button onClick={() => go('#contact')} className="btn-primary !px-6 !py-3">
            Book an appointment
          </button>
        </div>

        <button
          className="text-smoke md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-smoke/10 bg-obsidian/95 px-6 py-4 backdrop-blur md:hidden">
          <div className="flex flex-col gap-1">
            {nav.map((item) => (
              <button
                key={item.href}
                onClick={() => go(item.href)}
                className="py-3 text-left text-base text-smoke/80"
              >
                {item.label}
              </button>
            ))}
            <button onClick={() => go('#contact')} className="btn-primary mt-3 w-full">
              Book an appointment
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
