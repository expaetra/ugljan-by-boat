import TaxiStripe from '../../components/shared/TaxiStripe.jsx'
import Offer from './Offer.jsx'
import Area from './Area.jsx'
import PricesAvailability from './PricesAvailability.jsx'
import ContactStrip from './ContactStrip.jsx'

export default function TaxiPage() {
  return (
    <div>
      <TaxiStripe size={8} />
      <Offer />
      <div className="max-w-6xl mx-auto px-4 pt-12 pb-12 space-y-16 sm:space-y-20">
        <PricesAvailability />
        <Area />
        <ContactStrip />
      </div>
    </div>
  )
}