import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Camera, Speaker } from 'lucide-react'
import { site } from '../../lib/siteConfig.js'
import boatSide from '../../assets/boat/boat_side.webp'
import boatMotion2 from '../../assets/boat/boat_motion2.webp'
import airRound from '../../assets/aerial/air_round.webp'
import sunsetFront from '../../assets/sunset/sunset_front.webp'
import sunsetPrem from '../../assets/sunset/sunset_prem.webp'

const cardMedia = {
  'Boat rental - full day': { img: boatSide, desc: 'The Bluline is yours for the whole day. Explore Ugljan\u2019s coves, drop anchor where you like, swim, snorkel, take your time. Pickup in Lukoran, Ugljan island.' },
  'Boat rental - half day': { img: boatMotion2, desc: 'Four hours on the water - enough for a beach, a swim stop, and lunch by the sea. Pickup in Lukoran, Ugljan.' },
  'Excursion': { img: airRound, desc: 'A guided full-day trip. The captain knows the hidden spots - you just enjoy the ride. Departure from anywhere around Zadar or the islands.' },
  'Sunset tour': { img: sunsetFront, desc: 'One hour fifteen on the water for golden hour, drink in hand - the famous Zadar sunset, seen properly.' },
  'Sunset tour premium': { img: sunsetPrem, desc: 'Two hours, champagne on board, and an option to drop you in Zadar\u2019s old town for dinner - we pick you up after.' },
}

function PerksCard() {
  return (
    <div className="flex items-center justify-center p-6">
      <div className="relative -rotate-3 hover:rotate-0 transition-transform w-full max-w-[280px]" style={{ color: '#8C2F39' }}>
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 190" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <filter id="stampRough">
              <feTurbulence type="fractalNoise" baseFrequency="0.06" numOctaves="2" result="n" />
              <feDisplacementMap in="SourceGraphic" in2="n" scale="3" />
            </filter>
          </defs>
          <rect x="5" y="5" width="290" height="180" rx="14" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.85" filter="url(#stampRough)" />
        </svg>

        <div className="relative px-8 py-8 space-y-4">
          <div className="flex items-center gap-3">
            <Camera size={22} strokeWidth={2} className="shrink-0" />
            <div className="font-semibold text-[15px] leading-snug uppercase tracking-wider">GoPro Hero 12 included</div>
          </div>
          <div className="flex items-center gap-3">
            <Speaker size={22} strokeWidth={2} className="shrink-0" />
            <div className="font-semibold text-[15px] leading-snug uppercase tracking-wider">Bluetooth speaker on board</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Packages() {
  const [season, setSeason] = useState('high')

  function Card({ p }) {
    const media = cardMedia[p.name] || {}
    return (
      <Link to="/contact" className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow">
        <div className="overflow-hidden">
          <img src={media.img} alt={p.name} className="w-full aspect-[3/2] object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
        </div>
        <div className="p-6">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="font-semibold text-lg leading-snug">{p.name}</h3>
            <span className="font-display text-2xl text-sea whitespace-nowrap">€{p[season]}</span>
          </div>
          <p className="text-ink/60 text-sm mt-2 leading-relaxed">{media.desc}</p>
          <p className="text-xs text-ink/45 mt-3">{p.note}</p>
          <span className="inline-block mt-4 text-sea font-semibold text-sm group-hover:underline">Book →</span>
        </div>
      </Link>
    )
  }

  return (
    <section>
      <div className="flex flex-wrap items-end justify-between gap-4 mb-2">
        <h2 className="font-display text-3xl sm:text-4xl">Packages &amp; prices</h2>
        <div className="flex rounded-full bg-mist/50 p-1">
          <button onClick={() => setSeason('high')} className={season === 'high' ? 'bg-sea text-foam px-5 py-2 rounded-full font-semibold text-sm' : 'px-5 py-2 rounded-full font-semibold text-sm text-ink/60'}>High season</button>
          <button onClick={() => setSeason('low')} className={season === 'low' ? 'bg-sea text-foam px-5 py-2 rounded-full font-semibold text-sm' : 'px-5 py-2 rounded-full font-semibold text-sm text-ink/60'}>Low season</button>
        </div>
      </div>
      <p className="text-sm text-ink/50 mb-8">{site.rent.seasonNote}</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {site.rent.packages.map(p => <Card key={p.name} p={p} />)}
        <PerksCard />
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        {site.rent.addons.map(a => (
          <div key={a.name} className="bg-mist/40 rounded-full px-5 py-2.5 text-sm font-semibold text-ink/80">{a.name}: €{a.price}{a.unit || ''}</div>
        ))}
      </div>
    </section>
  )
}