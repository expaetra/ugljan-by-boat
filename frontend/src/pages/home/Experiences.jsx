import airRound from '../../assets/aerial/air_round.webp'

export default function Experiences() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 sm:py-24">
      <div className="flex flex-col lg:grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center">
        <div className="order-2 lg:order-1 overflow-hidden rounded-xl">
          <img src={airRound} alt="The Bluline circling in open water near Ugljan" className="w-full aspect-[4/5] sm:aspect-[4/3] object-cover" loading="lazy" />
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="font-display text-3xl sm:text-5xl leading-tight mb-6">Ready for this summer&rsquo;s adventure?</h2>
          <div className="space-y-4 text-ink/65 text-lg leading-relaxed">
            <p>Ugljan, Ošljak, Galevac and a scatter of islets - some of the calmest island-hopping waters in Croatia. Rent the boat and set your own course, or let the captain show you the channels only locals know.</p>
            <p>Swim and snorkel in hidden coves - drop anchor in places you can&rsquo;t reach by road. Snorkeling gear and masks are on board, and the GoPro Hero 12 comes free, so the underwater part of your Croatian holiday comes home with you.</p>
            <p>Then there&rsquo;s the famous Zadar sunset. Hitchcock called it the most beautiful in the world. From the water, with the islands in silhouette, it&rsquo;s another thing entirely. See it on the evening tour.</p>
          </div>
        </div>
      </div>
    </section>
  )
}