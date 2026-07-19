export default function Carousel({ images }) {
  return (
    <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar -mx-4 px-4 py-2">
      {images.map(img => (
        <figure key={img.src} className="snap-center shrink-0 w-[85%] sm:w-[55%] lg:w-[40%]">
          <img src={img.src} alt={img.alt} className="w-full aspect-[4/3] object-cover rounded-lg shadow-md" loading="lazy" />
          {img.caption ? <figcaption className="text-sm text-ink/60 mt-2">{img.caption}</figcaption> : null}
        </figure>
      ))}
    </div>
  )
}