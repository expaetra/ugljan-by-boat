import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-32 text-center">
      <p className="font-display text-7xl text-sea mb-4">404</p>
      <h1 className="text-2xl font-semibold mb-2">Lost at sea</h1>
      <p className="text-ink/60 mb-8">This page doesn&apos;t exist - but the boat does.</p>
      <Link to="/" className="inline-block bg-sea text-foam font-semibold px-7 py-3.5 rounded-full hover:bg-wine transition-colors">Back to shore</Link>
    </div>
  )
}