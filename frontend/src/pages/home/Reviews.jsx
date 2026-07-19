const GOOGLE_REVIEWS_URL = 'https://maps.app.goo.gl/iEPXR1QasnEWQRpx9'

const reviews = [
  { name: 'Raimund R.', stars: 5, text: 'We had two fantastic days on the boat. Ante is very easygoing, friendly, and accommodating. He helps with docking and undocking, and the fuel charge is fair. We\u2019ll definitely be back to rent a boat from him again. Simply excellent!' },
  { name: 'Patricia R.', stars: 5, text: 'And then comes Ante - the kind of skipper anyone would want! Incredibly kind, attentive and cheerful. We felt completely safe in his hands the entire time. He knows every bay, hidden beach and corner of the island of Ugljan\u2026 We will definitely be back!' },
  { name: 'Dominik S.', stars: 5, text: 'Top deal for the price. Great boat, plus the use of diving masks and a GoPro camera and a chilled drink! Also compliments for the friendly staff when handing over the boat!' },
  { name: 'Jelena P.', stars: 5, text: 'The skipper was very professional and kind, always keeping us informed about rich stories of the island coastline. The cruise with the speedboat is ideal for experiencing the island from a different perspective, it was very fun, but safe. We know for sure we are going again next year!' },
]

function Stars({ n }) {
  return <div className="text-[#F4C430] tracking-tight" aria-label={n + ' out of 5 stars'}>{'★'.repeat(n)}{'☆'.repeat(5 - n)}</div>
}

export default function Reviews() {
  return (
    <section className="max-w-6xl mx-auto px-4 pb-16 sm:pb-24">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
        <h2 className="font-display text-3xl sm:text-4xl">What guests say <span className="text-[#F4C430]">· 4.9 ★</span></h2>
        <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="text-sea font-semibold hover:underline">Read all 11 reviews on Google →</a>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        {reviews.map(r => (
          <figure key={r.name} className="bg-white rounded-lg p-7 shadow-sm">
            <Stars n={r.stars} />
            <blockquote className="mt-3 text-ink/75 leading-relaxed">&ldquo;{r.text}&rdquo;</blockquote>
            <figcaption className="mt-4 text-sm font-semibold text-ink/60">{r.name} · Google review</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}