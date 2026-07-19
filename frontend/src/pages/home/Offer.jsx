import { site } from '../../lib/siteConfig.js'
import { Link } from 'react-router-dom'
import posterImg from '../../assets/aerial/air_straight.webp'

export default function Offer() {
  const telHref = 'tel:' + site.phone

  return (
    <section className="relative h-[62vh] sm:h-[72vh] lg:h-[92vh] min-h-[420px] flex items-center overflow-hidden bg-deep">

      <video className="absolute inset-0 w-full h-full object-cover" src="/hero-drone.mp4" poster={posterImg} autoPlay muted loop playsInline aria-hidden="true" />
      <div className="absolute inset-y-0 left-0 w-2/3 backdrop-blur-sm [mask-image:linear-gradient(to_right,black_30%,transparent)]" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-r from-deep/60 to-deep/5" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-deep/70 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-4 w-full text-white">
        <h1 className="font-display text-5xl sm:text-8xl leading-[0.95] max-w-3xl">Explore the Zadar <span className="text-sky">archipelago</span></h1>
        <p className="mt-6 max-w-md text-white/85 text-lg">By yourself or with a skipper - rentals, taxi rides and sunset tours from Ugljan.</p>
        <div className="mt-8 flex flex-wrap gap-4 items-center">
          <a href={telHref} className="bg-white text-ink font-semibold px-7 py-3.5 rounded-full hover:bg-mist transition-colors">📞 Call to book</a>
          <Link to="/rent" className="text-white font-semibold hover:underline">See the boat →</Link>
        </div>
      </div>

      <div className="hidden sm:block absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-2xl animate-bounce">↓</div>
    </section>
  )
}