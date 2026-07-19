import { site } from '../../lib/siteConfig.js'
import AreaMap from '../../components/shared/AreaMap.jsx'

export default function Area() {
  return (
    <section>
      <h2 className="font-display text-3xl sm:text-4xl mb-3">Where we go</h2>
      <p className="text-ink/60 mb-5 max-w-2xl">{site.taxi.area}</p>
      <AreaMap src="https://www.google.com/maps/d/u/3/embed?mid=1OalOyHtsURGHOL0YXxjYM3zv59Qf2I8&ehbc=2E312F&noprof=1" title="Taxi boat destinations" />
    </section>
  )
}