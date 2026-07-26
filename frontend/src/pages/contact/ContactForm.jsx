import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { site } from '../../lib/siteConfig.js'

const field = 'w-full border border-mist rounded-lg px-4 py-3 bg-white focus:outline-none focus:border-sea focus:ring-1 focus:ring-sea transition-colors'
const fieldError = 'w-full border border-wine rounded-lg px-4 py-3 bg-white focus:outline-none focus:border-wine focus:ring-1 focus:ring-wine transition-colors'
const label = 'block text-sm font-semibold text-ink/70 mb-1.5'

const LIMITS = {
  name: 100,
  email: 254,
  phone: 30,
  message: 2000,
}

const SERVICES = [
  'Boat rental - full day',
  'Boat rental - half day',
  'Excursion',
  'Sunset tour',
  'Sunset tour premium',
  'Taxi boat',
  'Just a question',
]

const QUESTION = 'Just a question'

const MAX_PEOPLE = 8
const SEND_TIMEOUT_MS = 15000
const MIN_FILL_MS = 3000

function clean(value, max) {
  return String(value ?? '')
    .replace(/[\u0000-\u001F\u007F\u200B-\u200D\uFEFF]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, max)
}

function cleanMultiline(value, max) {
  return String(value ?? '')
    .replace(/\r\n?/g, '\n')
    .replace(/[\u0000-\u0008\u000B-\u001F\u007F\u200B-\u200D\uFEFF]/g, ' ')
    .replace(/[^\S\n]+/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
    .slice(0, max)
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const PHONE_ALLOWED_RE = /^[\d\s+\-().\/]+$/

function localToday() {
  return new Date().toLocaleDateString('en-CA')
}

function toDisplayDate(iso) {
  const [y, m, d] = iso.split('-')
  return `${d}/${m}/${y}`
}

function validate(values) {
  const errors = {}

  if (!SERVICES.includes(values.service)) {
    errors.service = 'Choose one of the listed options.'
  }

  const dateOptional = values.service === QUESTION
  if (!values.date) {
    if (!dateOptional) errors.date = 'Pick a date.'
  } else if (!/^\d{4}-\d{2}-\d{2}$/.test(values.date) || Number.isNaN(Date.parse(values.date))) {
    errors.date = 'That date is not valid.'
  } else if (values.date < localToday()) {
    errors.date = 'The date has already passed.'
  }

  const people = Number(values.people)
  if (!Number.isInteger(people) || people < 1 || people > MAX_PEOPLE) {
    errors.people = `Between 1 and ${MAX_PEOPLE} people.`
  }

  if (values.name.length < 2) {
    errors.name = 'Enter your name.'
  }

  if (!EMAIL_RE.test(values.email)) {
    errors.email = 'Enter a valid email address, e.g. name@example.com.'
  }

  const digits = values.phone.replace(/\D/g, '')
  if (!PHONE_ALLOWED_RE.test(values.phone) || digits.length < 7 || digits.length > 15) {
    errors.phone = 'Enter a phone number with country code, e.g. +385 91 234 5678.'
  }

  return errors
}

export default function ContactForm() {
  const [status, setStatus] = useState('idle')
  const [errors, setErrors] = useState({})
  const [service, setService] = useState(SERVICES[0])
  const isQuestion = service === QUESTION
  const navigate = useNavigate()
  const openedAt = useRef(Date.now())
  const today = localToday()

  async function handleSubmit(e) {
    e.preventDefault()
    if (status === 'sending') return

    const form = e.target
    const raw = new FormData(form)

    const values = {
      service: clean(raw.get('service'), 60),
      date: clean(raw.get('date'), 10),
      people: clean(raw.get('people'), 3),
      name: clean(raw.get('name'), LIMITS.name),
      email: clean(raw.get('email'), LIMITS.email).toLowerCase(),
      phone: clean(raw.get('phone'), LIMITS.phone),
      message: cleanMultiline(raw.get('message'), LIMITS.message),
    }

    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      form.querySelector(`[name="${Object.keys(nextErrors)[0]}"]`)?.focus()
      return
    }

    if (raw.get('_honey') || Date.now() - openedAt.current < MIN_FILL_MS) {
      navigate('/thank-you')
      return
    }

    setStatus('sending')

    const payload = new FormData()
    payload.set('_subject', 'Booking request - ugljanbyboat.com')
    payload.set('_template', 'table')
    payload.set('service', values.service)
    if (values.date) payload.set('date', toDisplayDate(values.date))
    payload.set('people', values.people)
    payload.set('name', values.name)
    payload.set('email', values.email)
    payload.set('phone', values.phone)
    if (values.message) payload.set('message', values.message)

    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), SEND_TIMEOUT_MS)

    try {
      const res = await fetch('https://formsubmit.co/ajax/' + site.email, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: payload,
        signal: controller.signal,
      })
      const json = await res.json().catch(() => ({}))
      if (!res.ok || String(json.success) !== 'true') throw new Error('rejected')
      form.reset()
      navigate('/thank-you')
    } catch {
      setStatus('error')
    } finally {
      clearTimeout(timeout)
    }
  }

  function fieldClass(nameKey) {
    return errors[nameKey] ? fieldError : field
  }

  function FieldError({ id, nameKey }) {
    if (!errors[nameKey]) return null
    return (
      <p id={id} role="alert" className="mt-1.5 text-sm text-wine font-semibold">
        {errors[nameKey]}
      </p>
    )
  }

  return (
    <section className="bg-white rounded-xl shadow-md p-8 sm:p-10">
      <h2 className="font-display text-3xl mb-1">Request a booking</h2>
      <p className="text-sm text-ink/50 mb-7">Sends straight to our inbox.</p>
      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <input type="text" name="_honey" className="hidden" tabIndex="-1" autoComplete="off" aria-hidden="true" />

        <div>
          <label className={label} htmlFor="service">What would you like?</label>
          <select
            id="service"
            name="service"
            required
            value={service}
            onChange={(e) => {
              setService(e.target.value)
              if (e.target.value === QUESTION) {
                setErrors((prev) => ({ ...prev, date: undefined }))
              }
            }}
            className={fieldClass('service')}
            aria-invalid={!!errors.service}
            aria-describedby={errors.service ? 'service-error' : undefined}
          >
            {SERVICES.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
          <FieldError id="service-error" nameKey="service" />
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className={label} htmlFor="date">
              Date {isQuestion && <span className="font-normal text-ink/40">(optional)</span>}
            </label>
            <input
              id="date"
              name="date"
              type="date"
              min={today}
              required={!isQuestion}
              className={fieldClass('date')}
              aria-invalid={!!errors.date}
              aria-describedby={errors.date ? 'date-error' : undefined}
            />
            <FieldError id="date-error" nameKey="date" />
          </div>
          <div>
            <label className={label} htmlFor="people">People</label>
            <input
              id="people"
              name="people"
              type="number"
              inputMode="numeric"
              min="1"
              max={MAX_PEOPLE}
              step="1"
              placeholder="2"
              required
              className={fieldClass('people')}
              aria-invalid={!!errors.people}
              aria-describedby={errors.people ? 'people-error' : undefined}
            />
            <FieldError id="people-error" nameKey="people" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className={label} htmlFor="name">Your name</label>
            <input
              id="name"
              name="name"
              required
              maxLength={LIMITS.name}
              placeholder="Ivan Horvat"
              autoComplete="name"
              className={fieldClass('name')}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            <FieldError id="name-error" nameKey="name" />
          </div>
          <div>
            <label className={label} htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              maxLength={LIMITS.email}
              placeholder="name@example.com"
              autoComplete="email"
              className={fieldClass('email')}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            <FieldError id="email-error" nameKey="email" />
          </div>
        </div>

        <div>
          <label className={label} htmlFor="phone">Phone / WhatsApp</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            maxLength={LIMITS.phone}
            placeholder="+385 ..."
            autoComplete="tel"
            className={fieldClass('phone')}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
          />
          <FieldError id="phone-error" nameKey="phone" />
        </div>

        <div>
          <label className={label} htmlFor="message">
            Anything else? <span className="font-normal text-ink/40">(optional)</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows="3"
            maxLength={LIMITS.message}
            placeholder="Pickup point, kids' ages, special requests…"
            className={field}
          />
        </div>

        {status === 'error' && (
          <p role="alert" className="text-sm text-wine font-semibold">
            The request didn't go through. Try again, or reach us on WhatsApp or by phone above.
          </p>
        )}

        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full sm:w-auto bg-sea text-foam font-semibold px-10 py-4 rounded-full hover:bg-deep transition-colors shadow-sm disabled:opacity-60"
        >
          {status === 'sending' ? 'Sending…' : 'Send request'}
        </button>
      </form>
    </section>
  )
}
