import Offer from './Offer.jsx'
import Packages from './Packages.jsx'
import Faq from './Faq.jsx'
import ContactStrip from './ContactStrip.jsx'
import AreaMap from '../../components/shared/AreaMap.jsx'
import Highlights from './Highlights.jsx'

export default function ExcursionsPage() {
  return (
    <div>
      <Offer />
      <div className="max-w-6xl mx-auto px-4 py-14 space-y-16 sm:space-y-20">
        <Packages />
        <section>
          <h2 className="font-display text-3xl sm:text-4xl mb-3">The area</h2>
          <p className="text-ink/60 mb-5 max-w-2xl">Beaches, snorkel spots, hiking trails, tavernas - even a sunken ship. Everything marked here is reachable on our trips.</p>
          <Highlights />
          <h3 className="font-display text-2xl mt-12 mb-5">On the map</h3>
          <AreaMap src="https://www.google.com/maps/d/embed?mid=1q_cxyrtqFTl2MuV2FeJND77B-7TzowI&ehbc=2E312F&noprof=1" title="Boat rental area - things to see and do" />
        </section>
        <Faq />
        <ContactStrip />
      </div>
    </div>
  )
}