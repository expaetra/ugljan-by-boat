import aerialZadar from '../../assets/aerial/air_zadar.webp'
import Channels from './Channels.jsx'
import ContactForm from './ContactForm.jsx'

export default function ContactPage() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <img src={aerialZadar} alt="On the water at golden hour" className="w-full h-[35vh] sm:h-[38vh] lg:h-[45vh] object-cover" fetchpriority="high" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep/80 via-deep/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="max-w-6xl mx-auto px-4 pb-8 sm:pb-12 text-white">
            <h1 className="font-display text-5xl sm:text-7xl leading-none">Contact <span className="text-sky">us</span></h1>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 items-start">
          <ContactForm />
          <Channels />
        </div>
      </div>
    </div>
  )
}