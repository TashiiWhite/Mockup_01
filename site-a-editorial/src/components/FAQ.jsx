import { useState } from 'react'
import { faq } from '../data/content'
import { Icon } from './Icons'

function Item({ item, isOpen, onToggle, index }) {
  const panelId = `faq-panel-${index}`
  const btnId = `faq-button-${index}`
  return (
    <div
      className={`reveal overflow-hidden rounded-2xl border transition-colors duration-300 ${
        isOpen ? 'border-gold/40 bg-porcelain shadow-luxe-sm' : 'border-ink/10 bg-transparent'
      }`}
    >
      <h3>
        <button
          id={btnId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors hover:text-bronze focus:outline-none focus-visible:text-bronze"
        >
          <span className="font-serif text-xl text-ink md:text-2xl">{item.q}</span>
          <span
            className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
              isOpen ? 'rotate-45 bg-gold text-ivory' : 'bg-cream text-bronze'
            }`}
          >
            <Icon name="plus" className="h-4 w-4" />
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={btnId}
        className={`grid overflow-hidden transition-all duration-500 ease-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="min-h-0">
          <p className="max-w-2xl px-6 pb-6 leading-relaxed text-stone">{item.a}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="section-pad">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <div className="reveal text-center">
          <span className="eyebrow-line justify-center">{faq.eyebrow}</span>
          <h2 className="mt-5 statement text-display-sm">{faq.title}</h2>
        </div>

        <div className="mt-14 space-y-3">
          {faq.items.map((item, i) => (
            <Item
              key={item.q}
              item={item}
              index={i}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
