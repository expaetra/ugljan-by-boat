import sideCloseup from '../../assets/boat/side_closeup.webp'

export default function BoatHero() {
  return (
    <section className="-mx-4 sm:mx-0">
      <div className="relative overflow-hidden">
        <img src={sideCloseup} alt="The Bluline 21 Open at speed" className="w-full h-[50vh] sm:h-[48vh] lg:h-[65vh] object-cover" fetchpriority="high" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-deep/70 to-transparent" />
      </div>
      <div className="px-4 sm:px-2 -mt-[10vw] sm:-mt-24 relative">
          <h1 className="text-[13vw] sm:text-[7rem] font-bold leading-none text-white tracking-tighter drop-shadow-lg">BLULINE</h1>        
          <div className="flex items-baseline gap-4 mt-2">
          <span className="font-display italic text-3xl sm:text-4xl text-sea">21 Open</span>
          <span className="h-px flex-1 bg-ink/20"></span>
        </div>
      </div>
    </section>
  )
}