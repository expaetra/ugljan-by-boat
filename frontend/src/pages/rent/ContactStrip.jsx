import BookingCta from '../../components/shared/BookingCta.jsx'
import backAway from '../../assets/boat/back_away.webp'

export default function ContactStrip() {
  return <BookingCta image={backAway} imageAlt="The Bluline underway" title="Ready to book the Bluline?" subtitle="Half day or full day - tell us when and we'll confirm fast." prefill="Hi! I want to rent the Bluline. Date: ___  People: ___  Half or full day? ___" />
}