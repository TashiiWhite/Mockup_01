import { useState } from 'react'
import { contact, brand } from '../data/content'
import { Icon } from './Icons'

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
    if (Object.keys(e).length === 0) {
      // No backend: simulate a successful submission.
      setSent(true)
    }
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
    `w-full rounded-xl border bg-ivory px-4 py-3 text-ink outline-none transition-colors placeholder:text-stone/50 focus:border-gold ${
      errors[name] ? 'border-red-400' : 'border-ink/15'
    }`

  return (
    <section id="contact" className="section-pad bg-cream/40">
      <div className="mx-auto grid max-w-content grid-cols-1 gap-14 px-6 md:px-10 lg:grid-cols-2">
        <div className="reveal">
          <span className="eyebrow-line">{contact.eyebrow}</span>
          <h2 className="mt-5 statement text-display-sm">{contact.title}</h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-stone">{contact.sub}</p>

          <dl className="mt-10 space-y-4 text-ink">
            <div>
              <dt className="text-xs uppercase tracking-widest text-stone">Email</dt>
              <dd className="font-serif text-xl">
                <a href={`mailto:${brand.email}`} className="transition-colors hover:text-bronze">
                  {brand.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-stone">Phone</dt>
              <dd className="font-serif text-xl">
                <a href={brand.phoneHref} className="inline-flex items-center gap-2 transition-colors hover:text-bronze">
                  {brand.phone}
                  <span className="rounded-full bg-cream px-2.5 py-0.5 text-[10px] font-sans font-semibold uppercase tracking-widest text-bronze">
                    Tap to call
                  </span>
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-stone">Service area</dt>
              <dd className="font-serif text-xl">{brand.area}</dd>
            </div>
          </dl>
        </div>

        <div className="reveal">
          {sent ? (
            <div
              role="status"
              className="flex h-full min-h-[18rem] flex-col items-center justify-center rounded-3xl bg-ivory p-10 text-center ring-1 ring-ink/10"
            >
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold text-ivory">
                <Icon name="check" className="h-7 w-7" />
              </span>
              <p className="mt-6 font-serif text-2xl text-ink">{contact.success}</p>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              noValidate
              className="rounded-3xl bg-ivory p-8 ring-1 ring-ink/10 md:p-10"
            >
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm text-ink">
                    Name
                  </label>
                  <input id="name" type="text" placeholder="Jordan Avery" className={inputClass('name')} {...field('name')} />
                  {errors.name && <p className="mt-1.5 text-sm text-red-500">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm text-ink">
                    Email
                  </label>
                  <input id="email" type="email" placeholder="you@example.com" className={inputClass('email')} {...field('email')} />
                  {errors.email && <p className="mt-1.5 text-sm text-red-500">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm text-ink">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    placeholder="Tell us your vehicle make/model and what you're after."
                    className={inputClass('message')}
                    {...field('message')}
                  />
                  {errors.message && <p className="mt-1.5 text-sm text-red-500">{errors.message}</p>}
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
