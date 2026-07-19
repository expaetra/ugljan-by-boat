export default function AreaMap({ src, title = 'Map' }) {
  return (
    <div className="overflow-hidden rounded-xl shadow-sm relative h-[55vh] sm:h-[45vh] lg:h-[65vh]">
      <iframe src={src} title={title} className="absolute -top-16 left-0 w-full h-[calc(100%+8rem)] border-0" loading="lazy" allowFullScreen />
    </div>
  )
}