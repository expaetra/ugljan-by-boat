import { site } from '../../lib/siteConfig.js'

export default function PricesAvailability() {
  return (
    <section>
      <h2 className="font-display text-3xl sm:text-4xl mb-5">Simple pricing</h2>
      <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <div className="font-display text-5xl text-sea">€{site.taxi.pricePerNm}</div>
          <div className="mt-1 text-ink/60">per nautical mile</div>
        </div>
        <div className="bg-white rounded-lg p-8 shadow-sm">
          <div className="font-display text-5xl text-sea">€{site.taxi.waitingPerHour}</div>
          <div className="mt-1 text-ink/60">waiting, per hour</div>
        </div>
      </div>
      <p className="text-sm text-ink/50 mt-4">{site.taxi.discountNote} Weather permitting.</p>
    </section>
  )
}