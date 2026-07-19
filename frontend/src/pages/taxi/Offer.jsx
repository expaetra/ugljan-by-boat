import boatMotion3 from '../../assets/boat/boat_motion3.webp'

export default function Offer() {
  return (
    <section className="relative overflow-hidden">
      <div className="hidden lg:block absolute inset-y-0 right-0 w-2/3">
        <img src={boatMotion3} alt="" aria-hidden="true" className="w-full h-full object-cover [mask-image:linear-gradient(to_left,black_55%,transparent)]" />
      </div>
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="pt-10 pb-8 lg:pt-16 lg:pb-24 max-w-lg">
          <h1 className="font-display text-5xl lg:text-7xl leading-none">Taxi <span className="text-sky">Boat</span></h1>
          <p className="mt-5 text-lg text-ink/60">Skip the road. We take you across the channel and along the coast - beaches, tavernas, the harbor. Call, message, or wave from the dock.</p>
        </div>
      </div>
      <div className="lg:hidden relative">
        <img src={boatMotion3} alt="The Bluline crossing the channel" className="w-full h-56 sm:h-72 object-cover" fetchpriority="high" />
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-foam to-transparent" aria-hidden="true" />
      </div>
    </section>
  )
}