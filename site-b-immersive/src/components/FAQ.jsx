import { useState } from 'react'
import { faq } from '../data/content'
import { Icon } from './Icons'

function Item({ item, isOpen, onToggle, index }) {
  const panelId = `faq-panel-${index}`
  const btnId = `faq-button-${index}`
  return (
    <div className="reveal border-b border-smoke/10">
      <h3>
        <button
          id={btnId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-gold focus:outline-none focus-visible:text-gold"
        >
          <span className="font-serif text-xl text-smoke md:text-2xl">{item.q}</span>
          <Icon
            name="plus"
            className={`h-5 w-5 flex-shrink-0 text-gold transition-transform duration-300 ${
              isOpen ? 'rotate-45' : ''
            }`}
          />
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={btnId}
        className={`grid overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="min-h-0">
          <p className="max-w-2xl pb-6 leading-relaxed text-mist">{item.a}</p>
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
          <span className="eyebrow">{faq.eyebrow}</span>
          <h2 className="mt-4 font-serif text-4xl text-smoke md:text-5xl">{faq.title}</h2>
        </div>

        <div className="mt-14">
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
