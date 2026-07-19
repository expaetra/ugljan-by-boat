export default function TaxiStripe({ size = 8 }) {
  const s = size + 'px'
  return (
    <div aria-hidden="true" className="w-full" style={{
      height: size * 2,
      backgroundImage:
        'linear-gradient(45deg, transparent 0, transparent 0), ' +
        'repeating-linear-gradient(90deg, #111 0 ' + s + ', #FFC107 ' + s + ' ' + (size * 2) + 'px)',
      position: 'relative',
    }}>
      <div className="absolute inset-x-0 top-0 h-1/2" style={{
        backgroundImage: 'repeating-linear-gradient(90deg, #FFC107 0 ' + s + ', #111 ' + s + ' ' + (size * 2) + 'px)',
      }} />
    </div>
  )
}