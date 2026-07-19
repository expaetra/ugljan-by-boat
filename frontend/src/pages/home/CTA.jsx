import BookingCta from '../../components/shared/BookingCta.jsx'
import boatMotion2 from '../../assets/boat/boat_motion2.webp'

export default function CTA() {
  return (
    <section id="day" className="max-w-6xl mx-auto px-4 pb-16 sm:pb-24">
      <BookingCta image={boatMotion2} imageAlt="The Bluline underway near Ugljan" title="Your day on the Adriatic starts here" />
    </section>
  )
}