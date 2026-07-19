import { site } from '../../lib/siteConfig.js'

const prefill = encodeURIComponent('Hi! Date: ___  People: ___')
const waHref = 'https://wa.me/' + site.whatsapp + '?text=' + prefill
const viberHref = 'viber://chat?number=' + encodeURIComponent(site.viber)

const row = 'flex items-baseline justify-between gap-4 py-3 border-b border-mist/60'
const k = 'text-xs uppercase tracking-[0.18em] text-ink/45'
const v = 'font-semibold text-sea hover:underline'

export default function Channels() {
  return (
    <aside className="lg:pt-2">
      <div className={row}><span className={k}>Phone</span><a href={'tel:' + site.phone} className={v}>{site.phone}</a></div>
      <div className={row}><span className={k}>WhatsApp</span><a href={waHref} target="_blank" rel="noopener noreferrer" className={v}>Message us</a></div>
      <div className={row}><span className={k}>Viber</span><a href={viberHref} className={v}>Message us</a></div>
      <div className={row}><span className={k}>Email</span><a href={'mailto:' + site.email} className={v}>{site.email}</a></div>
      <div className={row}><span className={k}>Instagram</span><a href={site.instagram} target="_blank" rel="noopener noreferrer" className={v}>@ugljanbyboat</a></div>
      <div className="flex items-baseline justify-between gap-4 py-3"><span className={k}>Facebook</span><a href={site.facebook} target="_blank" rel="noopener noreferrer" className={v}>Ugljan by Boat</a></div>

      <div className="mt-8 bg-mist/30 rounded-xl p-6">
        <div className="text-xs uppercase tracking-[0.18em] text-ink/45 mb-2">Find us</div>
        <a href="https://www.google.com/maps/search/?api=1&query=%C5%A0etali%C5%A1te%20sv.%20Lovre%2C%2023274%20Lukoran" target="_blank" rel="noopener noreferrer" className="font-semibold text-sea hover:underline">⚓ Šetalište sv. Lovre, Lukoran - island of Ugljan</a>
        <p className="text-sm text-ink/55 mt-1">Boat rental pickup point. Excursions, sunset tours and taxi can start from anywhere around Zadar or the islands.</p>
      </div>

      <div className="mt-4 bg-mist/30 rounded-xl p-6">
        <div className="text-xs uppercase tracking-[0.18em] text-ink/45 mb-2">Hours</div>
        <p className="text-sm text-ink/70">Every day in season, sunrise to sunset. We reply as soon as we&apos;re back at the dock.</p>
      </div>
    </aside>
  )
}