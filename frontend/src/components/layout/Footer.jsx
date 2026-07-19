import { Link } from 'react-router-dom'
import { site } from '../../lib/siteConfig.js'

export default function Footer() {
  return (
    <footer className="bg-deep text-foam/80 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12 grid sm:grid-cols-3 gap-8 text-sm">
        <div>
          <div className="font-brand text-xl text-foam mb-3">{site.name}</div>
          <p className="text-foam/60">Boat rental, water taxi and sunset tours on Ugljan &amp; the Zadar coast.</p>
        </div>
        <div>
          <div className="font-semibold text-foam mb-3">Contact</div>
          <ul className="space-y-2">
            <li><a href={'tel:' + site.phone} className="hover:text-foam">{site.phone}</a></li>
            <li><a href={'mailto:' + site.email} className="hover:text-foam">{site.email}</a></li>
            <li className="flex gap-4"><a href={site.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-foam">Instagram</a><a href={site.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-foam">Facebook</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-foam mb-3">Legal</div>
          <ul className="space-y-1 text-foam/60">
            <li>{site.impressum.company}</li>
            <li>OIB: {site.impressum.oib}</li>
            <li>{site.impressum.address}</li>
            <li className="pt-2"><Link to="/privacy" className="underline hover:text-foam">Privacy</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-foam/10">
        <div className="max-w-6xl mx-auto px-4 py-4 text-xs text-foam/50 flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <span>All prices in EUR · Weather permitting</span>
           <span>Website by <a href="https://www.linkedin.com/in/petra-ivas/" target="_blank" rel="noopener noreferrer" className="underline hover:text-foam">Petra Ivas</a></span>
        </div>
      </div>
    </footer>
  )
}