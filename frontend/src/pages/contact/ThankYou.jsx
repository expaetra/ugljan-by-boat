import { Link } from 'react-router-dom'
import { ShipWheel } from 'lucide-react'
import { site } from '../../lib/siteConfig.js'
import sunsetFront from '../../assets/sunset/sunset_front.webp'

export default function ThankYou() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <img src={sunsetFront} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="relative min-h-screen flex flex-col items-center justify-center text-center text-white px-6 py-20">
        <ShipWheel size={80} strokeWidth={1.5} className="mb-6 animate-[spin_9s_linear_infinite] text-sun" />
        <h1 className="font-display text-4xl sm:text-6xl leading-tight max-w-2xl">Thank you for sailing with {site.name}!</h1>
        <p className="mt-4 max-w-md text-white/85">We&apos;ll get back to you shortly to confirm your booking. Meanwhile, check out our socials.</p>
        <div className="flex gap-4 mt-8">
          <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-white/15 hover:bg-white/30 transition-colors font-semibold">IG</a>
          <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-white/15 hover:bg-white/30 transition-colors font-semibold">FB</a>
        </div>
        <Link to="/" className="mt-10 text-white/70 underline hover:text-white">Back to home</Link>
      </div>
    </div>
  )
}