import goPro from '../../assets/boat/goPro.webp'
import { Umbrella, ShowerHead, Sun, Compass, Plug, Speaker, Waves, Snowflake } from 'lucide-react'

const plate = [
  { label: 'Model', value: 'Bluline 21 Open' },
  { label: 'Length × width', value: '6.50 × 2.38 m' },
  { label: 'Engine', value: 'Yamaha 150 hp' },
  { label: 'Cruising / max', value: '22 / 28 knots' },
  { label: 'Fuel · water', value: '140 l · 60 l' },
  { label: 'Capacity', value: 'max 8 persons' },
]

export default function BoatSpecs() {
  return (
    <section className="grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-16 items-center">

      <div className="bg-white rounded-lg shadow-xl p-10 sm:p-12 sm:rotate-[-1.5deg] border border-mist/60">
        <div className="border-b-2 border-ink/80 pb-4 mb-5">
          <span className="font-display text-3xl sm:text-4xl">Technical sheet</span>
        </div>
        {plate.map(r => (
          <div key={r.label} className="flex justify-between items-baseline gap-4 py-4 border-b border-mist/50 last:border-0">
            <span className="text-xs sm:text-sm uppercase tracking-[0.15em] text-ink/45">{r.label}</span>
            <span className="font-semibold text-right text-lg sm:text-xl">{r.value}</span>
          </div>
        ))}
      </div>

      <div>
        <img src={goPro} alt="The helm of the Bluline 21 - GoPro Hero 12 included on every trip" className="rounded-lg shadow-md w-full" loading="lazy" />

        <h3 className="font-display text-2xl mt-8 mb-3">On board</h3>
        <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
          <li className="flex items-center gap-3 text-ink/75"><Umbrella size={18} className="text-sea shrink-0" /> Bimini sun cover</li>
          <li className="flex items-center gap-3 text-ink/75"><Sun size={18} className="text-sea shrink-0" /> Expandable sundeck with table</li>
          <li className="flex items-center gap-3 text-ink/75"><ShowerHead size={18} className="text-sea shrink-0" /> Water shower</li>
          <li className="flex items-center gap-3 text-ink/75"><Compass size={18} className="text-sea shrink-0" /> GPS plotter · compass · sounder</li>
          <li className="flex items-center gap-3 text-ink/75"><Plug size={18} className="text-sea shrink-0" /> USB &amp; USB-C plugs</li>
          <li className="flex items-center gap-3 text-ink/75"><Speaker size={18} className="text-sea shrink-0" /> Radio · Bluetooth speaker</li>
          <li className="flex items-center gap-3 text-ink/75"><Waves size={18} className="text-sea shrink-0" /> Snorkeling gear &amp; masks</li>
          <li className="flex items-center gap-3 text-ink/75"><Snowflake size={18} className="text-sea shrink-0" /> Ice cooler on request</li>
        </ul>
      </div>

    </section>
  )
}