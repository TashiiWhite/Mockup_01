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
    `w-full rounded-xl border bg-obsidian px-4 py-3 text-smoke outline-none transition-colors placeholder:text-mist/40 focus:border-gold ${
      errors[name] ? 'border-red-500/70' : 'border-smoke/15'
    }`

  return (
    <section id="contact" className="section-pad bg-graphite/40">
      <div className="mx-auto grid max-w-content grid-cols-1 gap-14 px-6 md:px-10 lg:grid-cols-2">
        <div className="reveal">
          <span className="eyebrow">{contact.eyebrow}</span>
          <h2 className="mt-4 font-serif text-4xl text-smoke md:text-5xl">{contact.title}</h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-mist">{contact.sub}</p>

          <dl className="mt-10 space-y-4">
            <div>
              <dt className="text-xs uppercase tracking-widest text-mist">Email</dt>
              <dd className="font-serif text-xl text-smoke">{brand.email}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-mist">Phone</dt>
              <dd className="font-serif text-xl text-smoke">{brand.phone}</dd>
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
              className="flex h-full min-h-[18rem] flex-col items-center justify-center rounded-3xl border border-gold/30 bg-carbon p-10 text-center"
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
              className="rounded-3xl border border-smoke/10 bg-carbon p-8 md:p-10"
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
