import HoverGallery from '../../components/shared/HoverGallery.jsx'
import boatFront from '../../assets/boat/boat_front.webp'
import boatAbove from '../../assets/boat/boat_above.webp'
import birdeye from '../../assets/boat/baot_birdeye.webp'
import boardNav from '../../assets/boat/board_nav.webp'
import seatBack from '../../assets/boat/seat_back.webp'
import boatRide from '../../assets/boat/boat_ride.webp'
import boatSlow from '../../assets/boat/baot_slow.webp'
import boatNight from '../../assets/boat/boat_night.webp'

const photos = [
  
  { src: boatAbove, alt: 'The Bluline from above' },
  { src: boatFront, alt: 'The Bluline 21 Open from the front' },
  { src: birdeye, alt: 'The boat from above' },
  { src: boatRide, alt: 'Cutting across the water' },
  { src: boardNav, alt: 'Boat equipment' },
  { src: seatBack, alt: 'Seating at the back' },
  { src: boatSlow, alt: 'The cruising slowly' },
  { src: boatNight, alt: 'Bluline at night' },
]

export default function AboutTheBoat() {
  return (
    <section>
      <h2 className="font-display text-3xl sm:text-4xl mb-6">Gallery</h2>
      <HoverGallery images={photos} />
    </section>
  )
}