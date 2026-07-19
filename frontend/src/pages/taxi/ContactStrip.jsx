import BookingCta from '../../components/shared/BookingCta.jsx'
import airZadar from '../../assets/aerial/air_zadar.webp'

export default function ContactStrip() {
  return <BookingCta image={airZadar} imageAlt="The Zadar coastline from above" title="Need a ride?" subtitle="Point to point along the coast - tell us from where to where." prefill="Hi! I need a taxi boat. From: ___  To: ___  When: ___" />
}