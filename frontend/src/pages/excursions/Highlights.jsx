const g = q => 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(q)

const spots = [
  { name: 'Beach Sakarun', text: 'White sand and shallow turquoise water. Easiest to reach by boat.', mapUrl: g('Sakarun beach Dugi otok') },
  { name: 'Golubinka Sea Cave', text: 'A sea cave you can swim into. Bring the mask.', mapUrl: g('Golubinka cave Dugi otok') },
  { name: 'Veli Rat Lighthouse', text: 'Croatia\u2019s tallest lighthouse, surrounded by pine woods and pebble coves.', mapUrl: g('Veli Rat lighthouse') },
  { name: 'Telašćica Nature Park', text: 'Protected bay with high cliffs and a salt lake.', mapUrl: g('Telašćica Nature Park') },
  { name: 'Sunken ship Michele', text: 'A wreck close to the surface - good snorkel stop, GoPro-friendly.', mapUrl: g('Sunken ship Michele Ugljan') },
  { name: 'Božava', text: 'Quiet bays with clear water on the north side of Dugi otok.', mapUrl: g('Božava Dugi otok') },
  { name: 'Zadar from the sea', text: 'The old town, St. Donatus and the Sea Organ from the water side.', mapUrl: g('Zadar old town') },
  { name: 'Sunset point', text: 'Where we anchor for the sunset. Ask the captain.', mapUrl: '' },
]

export default function Highlights() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-5">
      {spots.map(s => {
        const inner = (
          <>
            <div className="font-semibold group-hover:text-sea transition-colors">{s.name} {s.mapUrl ? '↗' : ''}</div>
            <p className="text-sm text-ink/60 mt-1 leading-relaxed">{s.text}</p>
          </>
        )
        return s.mapUrl
          ? <a key={s.name} href={s.mapUrl} target="_blank" rel="noopener noreferrer" className="group block border-l-2 border-mist pl-4 hover:border-sea transition-colors">{inner}</a>
          : <div key={s.name} className="border-l-2 border-mist pl-4">{inner}</div>
      })}
    </div>
  )
}