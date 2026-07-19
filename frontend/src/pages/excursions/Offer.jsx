import boatSunset from '../../assets/sunset/boat_sunset.webp'

export default function Offer() {
  return (
    <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
      <div className="relative overflow-hidden">
        <img src={boatSunset} alt="The Bluline at sunset near Ugljan" className="w-full h-[45vh] sm:h-[42vh] lg:h-[55vh] object-cover" fetchpriority="high" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep/80 via-deep/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 text-white">
          <h1 className="font-display text-5xl sm:text-7xl leading-none">Excursions &amp; <span className="text-sky">tours</span></h1>
          <p className="mt-4 max-w-xl text-white/85 text-lg">Let the captain do the driving. Day trips along the coast, and the famous Zadar sunset from the best seat there is - the water.</p>
        </div>
      </div>
    </section>
  )
}