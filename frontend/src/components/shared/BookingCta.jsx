import { Link } from 'react-router-dom'
import { site } from '../../lib/siteConfig.js'

export default function BookingCta({ image, imageAlt, title }) {
  const telHref = 'tel:' + site.phone

  return (
    <section className="relative overflow-hidden rounded-xl">
      <img src={image} alt={imageAlt} className="w-full h-[380px] sm:h-[420px] object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-t from-deep/90 via-deep/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10 flex flex-wrap items-end justify-between gap-6">
        <h2 className="font-display text-3xl sm:text-4xl text-white leading-tight max-w-md">{title}</h2>
        <div className="flex items-center gap-3">
          <a href={telHref} className="bg-white text-ink font-semibold px-7 py-3.5 rounded-full hover:bg-mist transition-colors">Call now</a>
          <Link to="/contact" className="text-white font-semibold px-4 py-3.5 hover:text-sky transition-colors">Contact form →</Link>
        </div>
      </div>
    </section>
  )
}