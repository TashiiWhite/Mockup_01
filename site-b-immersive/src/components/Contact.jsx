import { useState } from 'react'
import { contact, brand } from '../data/content'
import { Icon } from './Icons'
import { SectionLabel } from './SectionLabel'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Contact() {
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const validate = () => {
    const e = {}
    if (!values.name.trim()) e.name = 'Please enter your name.'
    if (!values.email.trim()) e.email = 'Please enter your email.'
    else if (!EMAIL_RE.test(values.email)) e.email = 'Please enter a valid email address.'
    if (!values.message.trim()) e.message = 'Tell us a little about your vehicle.'
    return e
  }

  const onSubmit = (ev) => {
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length === 0) setSent(true)
  }

  const field = (name) => ({
    value: values[name],
    onChange: (ev) => {
      setValues((v) => ({ ...v, [name]: ev.target.value }))
      if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
    },
    'aria-invalid': errors[name] ? 'true' : 'false',
  })

  const inputClass = (name) =>
    `w-full rounded-xl border bg-graphite px-4 py-3 text-smoke outline-none transition-all placeholder:text-mist/50 focus:border-gold focus:ring-2 focus:ring-gold/25 ${
      errors[name] ? 'border-red-500/70' : 'border-white/15'
    }`

  return (
    <section id="contact" className="atmosphere section-pad">
      <div className="mx-auto grid max-w-content grid-cols-1 gap-14 px-6 md:px-10 lg:grid-cols-2">
        <div className="reveal">
          <SectionLabel index="07">{contact.eyebrow}</SectionLabel>
          <h2 className="mt-5 statement text-display-sm">{contact.title}</h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-mist">{contact.sub}</p>

          <dl className="mt-10 space-y-4">
            <div>
              <dt className="text-xs uppercase tracking-widest text-mist">Email</dt>
              <dd className="font-serif text-xl text-smoke">
                <a href={`mailto:${brand.email}`} className="transition-colors hover:text-gold">
                  {brand.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-mist">Phone</dt>
              <dd className="font-serif text-xl text-smoke">
                <a href={brand.phoneHref} className="inline-flex items-center gap-2 transition-colors hover:text-gold">
                  {brand.phone}
                  <span className="rounded-full bg-carbon px-2.5 py-0.5 text-[10px] font-sans font-semibold uppercase tracking-widest text-gold">
                    Tap to call
                  </span>
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-mist">Service area</dt>
              <dd className="font-serif text-xl text-smoke">{brand.area}</dd>
            </div>
          </dl>
        </div>

        <div className="reveal">
          {sent ? (
            <div
              role="status"
              className="flex h-full min-h-[18rem] flex-col items-center justify-center rounded-3xl border border-gold/30 bg-gradient-to-b from-carbon to-graphite p-10 text-center"
            >
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold text-obsidian">
                <Icon name="check" className="h-7 w-7" />
              </span>
              <p className="mt-6 font-serif text-2xl text-smoke">{contact.success}</p>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              noValidate
              className="rounded-3xl bg-gradient-to-b from-carbon to-graphite p-8 ring-1 ring-white/10 md:p-10"
            >
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm text-smoke">
                    Name
                  </label>
                  <input id="name" type="text" placeholder="Jordan Avery" className={inputClass('name')} {...field('name')} />
                  {errors.name && <p className="mt-1.5 text-sm text-red-400">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm text-smoke">
                    Email
                  </label>
                  <input id="email" type="email" placeholder="you@example.com" className={inputClass('email')} {...field('email')} />
                  {errors.email && <p className="mt-1.5 text-sm text-red-400">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm text-smoke">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    placeholder="Tell us your vehicle make/model and what you're after."
                    className={inputClass('message')}
                    {...field('message')}
                  />
                  {errors.message && <p className="mt-1.5 text-sm text-red-400">{errors.message}</p>}
                </div>

                <button type="submit" className="btn-primary w-full">
                  Book an appointment
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
