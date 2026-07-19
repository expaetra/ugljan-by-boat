import BoatHero from './BoatHero.jsx'
import BoatSpecs from './BoatSpecs.jsx'
import AboutTheBoat from './AboutTheBoat.jsx'
import ContactStrip from './ContactStrip.jsx'

export default function RentPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-10 sm:space-y-12">
      <BoatHero />
      <BoatSpecs />
      <AboutTheBoat />
      <ContactStrip />
    </div>
  )
}