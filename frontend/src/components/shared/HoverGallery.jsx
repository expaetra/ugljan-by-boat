import { useState, useEffect, useCallback } from 'react'

export default function HoverGallery({ images }) {
  const [open, setOpen] = useState(null) // index or null

  const next = useCallback(() => setOpen(i => (i + 1) % images.length), [images.length])
  const prev = useCallback(() => setOpen(i => (i - 1 + images.length) % images.length), [images.length])

  useEffect(() => {
    if (open === null) return
    function onKey(e) {
      if (e.key === 'Escape') setOpen(null)
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, next, prev])

  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {images.map((img, i) => (
          <button key={img.src} onClick={() => setOpen(i)} className="group overflow-hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-sea" aria-label={'Open photo: ' + img.alt}>
            <img src={img.src} alt={img.alt} className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
          </button>
        ))}
      </div>

      {open !== null && (
        <div className="fixed inset-0 z-[100] bg-deep/95 flex items-center justify-center p-4" onClick={() => setOpen(null)} role="dialog" aria-modal="true">
          <img src={images[open].src} alt={images[open].alt} className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg shadow-2xl" onClick={e => e.stopPropagation()} />
          <button onClick={e => { e.stopPropagation(); prev() }} aria-label="Previous photo" className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 text-white text-3xl transition-colors">‹</button>
          <button onClick={e => { e.stopPropagation(); next() }} aria-label="Next photo" className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 text-white text-3xl transition-colors">›</button>
          <button onClick={() => setOpen(null)} aria-label="Close" className="absolute top-4 right-4 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 text-white text-2xl transition-colors">✕</button>
          <div className="absolute bottom-5 inset-x-0 text-center text-white/60 text-sm">{open + 1} / {images.length}</div>
        </div>
      )}
    </div>
  )
}