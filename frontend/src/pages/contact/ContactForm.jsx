import { useState } from 'react'
import { site } from '../../lib/siteConfig.js'
import ThankYou from './ThankYou.jsx'

const field = 'w-full border border-mist rounded-lg px-4 py-3 bg-white focus:outline-none focus:border-sea focus:ring-1 focus:ring-sea transition-colors'
const label = 'block text-sm font-semibold text-ink/70 mb-1.5'

export default function ContactForm() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    const data = new FormData(e.target)
    try {
      const res = await fetch('https://formsubmit.co/ajax/' + site.email, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: data,
      })
      if (!res.ok) throw new Error('failed')
      setStatus('sent')
      e.target.reset()
    } catch {
      setStatus('error')
    }
  }

 if (status === 'sent') {
    return <ThankYou />
  }

  return (
    <section className="bg-white rounded-xl shadow-md p-8 sm:p-10">
      <h2 className="font-display text-3xl mb-1">Request a booking</h2>
      <p className="text-sm text-ink/50 mb-7">Sends straight to our inbox.</p>
      <form onSubmit={handleSubmit} className="space-y-5">
        <input type="hidden" name="_subject" value="Booking request - ugljanbyboat.com" />
        <input type="hidden" name="_template" value="table" />
        <input type="text" name="_honey" className="hidden" tabIndex="-1" autoComplete="off" />

        <div>
          <label className={label} htmlFor="service">What would you like?</label>
          <select id="service" name="service" required className={field}>
            <option>Boat rental - full day</option>
            <option>Boat rental - half day</option>
            <option>Excursion</option>
            <option>Sunset tour</option>
            <option>Sunset tour premium</option>
            <option>Taxi boat</option>
            <option>Just a question</option>
          </select>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className={label} htmlFor="date">Date</label>
            <input id="date" name="date" type="date" required className={field} />
          </div>
          <div>
            <label className={label} htmlFor="people">People</label>
            <input id="people" name="people" type="number" min="1" max="8" placeholder="2" required className={field} />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className={label} htmlFor="name">Your name</label>
                        <input id="name" name="name" required placeholder="Ivan Horvat" className={field} />
          </div>
          <div>
            <label className={label} htmlFor="phone">Phone / WhatsApp</label>
            <input id="phone" name="phone" required placeholder="+385 ..." className={field} />
          </div>
        </div>
        <div>
          <label className={label} htmlFor="message">Anything else? <span className="font-normal text-ink/40">(optional)</span></label>
          <textarea id="message" name="message" rows="3" placeholder="Pickup point, kids' ages, special requests…" className={field} />
        </div>

        {status === 'error' && <p className="text-sm text-wine font-semibold">Sending failed - try again, or use WhatsApp/call above.</p>}

        <button type="submit" disabled={status === 'sending'} className="w-full sm:w-auto bg-sea text-foam font-semibold px-10 py-4 rounded-full hover:bg-deep transition-colors shadow-sm disabled:opacity-60">
          {status === 'sending' ? 'Sending…' : 'Send request'}
        </button>
      </form>
    </section>
  )
}