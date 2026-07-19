const spots = [
  { name: 'Hidden coves', desc: 'Quiet swimming spots you can only reach by boat.' },
  { name: 'Beach hopping', desc: 'Three beaches in one day, no crowds, no parking.' },
  { name: 'Taverna by sea', desc: 'Dock for lunch at a waterfront taverna.' },
]

export default function Routes() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Where you can go</h2>
      <div className="grid sm:grid-cols-3 gap-4">
        {spots.map(s => (
          <div key={s.name} className="bg-white border border-slate-200 rounded-xl p-5">
            <div className="font-semibold mb-1">{s.name}</div>
            <p className="text-sm text-slate-500">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}