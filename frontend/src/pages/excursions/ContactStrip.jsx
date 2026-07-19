import BookingCta from '../../components/shared/BookingCta.jsx'
import seatBack from '../../assets/boat/seat_back.webp'

export default function ContactStrip() {
  return <BookingCta image={seatBack} imageAlt="The Bluline cutting across the water" title="Ready for a tour?" subtitle="Tell us a date and how many of you there are - we answer within minutes." prefill="Hi! I want to book an excursion. Which tour: ___  Date: ___  People: ___" />
}