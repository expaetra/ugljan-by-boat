import { Link } from 'react-router-dom'
import sideCloseup from '../../assets/boat/side_closeup.webp'
import boatSunsetFront from '../../assets/sunset/boat_sunset_front.webp'
import airZadar from '../../assets/aerial/air_zadar.webp'

const services = [
  { to: '/rent', img: sideCloseup, alt: 'The Bluline 21 Open', title: 'Rent a Boat', text: 'Take the wheel of the Bluline 21 - half day or full day, skipper optional.', cta: 'Meet the boat' },
  { to: '/excursions', img: boatSunsetFront, alt: 'Sunset from the bow', title: 'Excursions & Tours', text: 'Guided day trips and the famous Zadar sunset tour, skipper included.', cta: 'See tours' },
  { to: '/taxi', img: airZadar, alt: 'The Zadar coastline from above', title: 'Taxi Boat', text: 'Point-to-point rides across the channel and along the coast.', cta: 'See where we go' },
]

export default function Services() {
  return (
    <section className="max-w-6xl mx-auto px-4 pb-16 sm:pb-24">
      <h2 className="font-display text-3xl sm:text-4xl mb-8">Three ways onto the water</h2>
      <div className="grid sm:grid-cols-3 gap-6">
        {services.map(s => (
          <Link key={s.to} to={s.to} className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow">
            <div className="overflow-hidden">
              <img src={s.img} alt={s.alt} className="w-full aspect-[3/2] object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-xl mb-2">{s.title}</h3>
              <p className="text-ink/60 text-sm leading-relaxed mb-4">{s.text}</p>
              <span className="text-sea font-semibold text-sm group-hover:underline">{s.cta} →</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}