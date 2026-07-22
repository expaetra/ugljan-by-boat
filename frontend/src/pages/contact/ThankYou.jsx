import { Link } from 'react-router-dom'
import { site } from '../../lib/siteConfig.js'
import sunsetFront from '../../assets/sunset/sunset_front.webp'

function Wheel() {
  return (
    <svg viewBox="0 0 100 100" className="w-20 h-20 mx-auto mb-6 animate-[spin_9s_linear_infinite] text-sun" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round">
      <circle cx="50" cy="50" r="28" />
      <circle cx="50" cy="50" r="8" fill="currentColor" stroke="none" />
      <path d="M50 22V6M50 78v16M22 50H6M78 50h16M30 30L19 19M70 70l11 11M70 30l11-11M30 70L19 81" />
    </svg>
  )
}

export default function ThankYou() {
  return (
    <div className="relative min-h-[80vh] overflow-hidden">
      <img src={sunsetFront} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-deep/60" />
      <div className="relative min-h-[80vh] flex flex-col items-center justify-center text-center text-white px-6 py-20">
        <Wheel />
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