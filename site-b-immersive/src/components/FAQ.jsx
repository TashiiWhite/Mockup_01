import { useState } from 'react'
import { faq, brand } from '../data/content'
import { Icon } from './Icons'
import { SectionLabel } from './SectionLabel'

function Item({ item, isOpen, onToggle, index }) {
  const panelId = `faq-panel-${index}`
  const btnId = `faq-button-${index}`
  return (
    <div
      className={`reveal overflow-hidden rounded-2xl border transition-colors duration-300 ${
        isOpen ? 'border-gold/40 bg-gradient-to-b from-slate to-carbon' : 'border-white/10 bg-white/[0.02]'
      }`}
    >
      <h3>
        <button
          id={btnId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors hover:text-gold focus:outline-none focus-visible:text-gold"
        >
          <span className="font-serif text-xl text-smoke md:text-2xl">{item.q}</span>
          <span
            className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
              isOpen ? 'rotate-45 bg-gold text-obsidian' : 'bg-carbon text-gold'
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
          <p className="max-w-2xl px-6 pb-6 leading-relaxed text-mist">{item.a}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="atmosphere section-pad">
      <div className="mx-auto grid max-w-content gap-10 px-6 md:px-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="reveal lg:sticky lg:top-28 lg:self-start">
          <SectionLabel index="06">{faq.eyebrow}</SectionLabel>
          <h2 className="mt-5 statement text-display-sm">{faq.title}</h2>
          <p className="mt-6 max-w-xs text-mist">
            Still curious? Reach us directly at{' '}
            <a href={brand.phoneHref} className="font-medium text-gold underline-offset-4 hover:underline">
              {brand.phone}
            </a>
            .
          </p>
        </div>

        <div className="space-y-3">
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
