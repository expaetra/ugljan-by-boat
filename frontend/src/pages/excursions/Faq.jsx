const faqs = [
  { q: 'Do I need a boat licence?', a: 'For self-drive rental of the 150hp Bluline, a valid boat licence (Croatian voditelj brodice or an equivalent international permit) is required. No licence? Add our skipper, or book an excursion - skipper included.' },
  { q: 'What if the weather turns bad?', a: 'If we cancel due to weather, you choose a full refund or free rebooking. Safety first - the captain makes the final call.' },
  { q: 'Is fuel included?', a: 'Fuel is not included in rental prices and is charged on usage at return. Excursions and sunset tours include fuel.' },
  { q: 'Is there a deposit?', a: 'A security deposit is required for self-drive rentals, returned in full after the boat is checked. No deposit for skippered trips.' },
  { q: 'What should we bring?', a: 'Swimsuits, towels, sunscreen, and water. Snorkeling gear, life jackets, a bluetooth speaker, and a GoPro Hero 12 are already on board.' },
  { q: 'Can we bring kids?', a: 'Yes - children are welcome, kids\u2019 life jackets are on board. Tell us ages when booking.' },
  { q: 'Where do we depart from?', a: 'Excursions and sunset tours can start from anywhere around Zadar or the islands - we pick you up. Boat rental pickup is in Lukoran on Ugljan.' },
  { q: 'Can the sunset tour end with dinner in Zadar?', a: 'Yes - on the premium sunset tour we can drop you at the old town peninsula for dinner and pick you up by boat afterwards. Just tell us when booking.' },
]

export default function Faq() {
  return (
    <section>
      <h2 className="font-display text-3xl sm:text-4xl mb-6">Good to know</h2>
      <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6 max-w-5xl">
        {faqs.map(f => (
          <div key={f.q}>
            <div className="font-semibold mb-1">{f.q}</div>
            <p className="text-ink/60 text-[15px] leading-relaxed">{f.a}</p>
          </div>
        ))}
      </div>
    </section>
  )
}