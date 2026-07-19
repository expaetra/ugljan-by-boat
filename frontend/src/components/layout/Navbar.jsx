import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ShipWheel } from 'lucide-react'
import { site } from '../../lib/siteConfig.js'

const links = [
  { to: '/', label: 'Home' },
  { to: '/rent', label: 'Rent a Boat' },
  { to: '/excursions', label: 'Excursions' },
  { to: '/taxi', label: 'Taxi Boat' },
  { to: '/contact', label: 'Contact' },
]

const linkBase = 'relative py-1 whitespace-nowrap after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:bg-wine after:transition-all after:duration-300'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const telHref = 'tel:' + site.phone

  return (
    <header className="sticky top-0 z-50 bg-foam/80 backdrop-blur-md border-b border-mist/60">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <NavLink to="/" className="font-brand text-2xl lg:text-3xl text-sea tracking-tight whitespace-nowrap">{site.name}</NavLink>

        <div className="hidden lg:flex items-center gap-6">
          {links.map(l => (
            <NavLink key={l.to} to={l.to} className={({ isActive }) => isActive ? linkBase + ' text-sea font-semibold after:w-full' : linkBase + ' text-ink/70 hover:text-wine after:w-0 hover:after:w-full'}>{l.label}</NavLink>
          ))}
          <a href={telHref} className="group inline-flex items-center gap-2 whitespace-nowrap bg-sea text-foam font-semibold px-5 py-2 rounded-full hover:bg-wine transition-colors"><ShipWheel size={17} className="group-hover:rotate-90 transition-transform duration-500" /> Book now</a>
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden text-sea text-2xl" aria-label="Menu" aria-expanded={open}>{open ? '✕' : '☰'}</button>
      </nav>

      <div className={open ? 'lg:hidden border-t border-mist/60 bg-foam px-4 pb-4 pt-2 flex flex-col gap-3' : 'hidden'}>
        {links.map(l => (
          <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)} className={({ isActive }) => isActive ? 'text-sea font-semibold py-1' : 'text-ink/80 py-1'}>{l.label}</NavLink>
        ))}
        <a href={telHref} className="flex items-center justify-center gap-2 bg-sea text-foam font-semibold px-5 py-2.5 rounded-full mt-1"><ShipWheel size={17} /> Book now</a>
      </div>
    </header>
  )
}