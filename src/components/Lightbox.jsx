import { useEffect, useRef } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

// Accessible gallery lightbox. `items` is the list of images for one project;
// `index` is the active image. Navigation wraps around. Esc / arrow keys and a
// thumbnail strip are supported.
export default function Lightbox({ items, index, onClose, onNavigate }) {
  const current = items[index]
  const total = items.length
  const activeThumbRef = useRef(null)

  const goPrev = () => onNavigate((index - 1 + total) % total)
  const goNext = () => onNavigate((index + 1) % total)

  // Keyboard controls + lock background scroll while open.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowLeft') goPrev()
      else if (e.key === 'ArrowRight') goNext()
    }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [index, total]) // eslint-disable-line react-hooks/exhaustive-deps

  // Keep the active thumbnail in view as you navigate.
  useEffect(() => {
    activeThumbRef.current?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    })
  }, [index])

  if (!current) return null

  const iconBtn =
    'flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 text-cream backdrop-blur transition-colors hover:bg-cream/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream/70'

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${current.title} — ${current.category} gallery`}
      onClick={onClose}
      className="animate-overlay-in fixed inset-0 z-[60] flex flex-col bg-charcoal/92 backdrop-blur-sm"
    >
      {/* Top bar: title + counter + close */}
      <div className="flex items-center justify-between gap-4 p-4 sm:p-6">
        <span className="min-w-0 truncate text-sm font-medium tracking-wide text-cream/80">
          {current.title}
          <span className="text-cream/50">
            {' '}
            · {index + 1} / {total}
          </span>
        </span>
        <button
          type="button"
          aria-label="Close gallery"
          onClick={onClose}
          className={`${iconBtn} flex-none`}
        >
          <X size={20} aria-hidden="true" />
        </button>
      </div>

      {/* Stage */}
      <div
        className="flex min-h-0 flex-1 items-center justify-center gap-2 px-2 sm:gap-4 sm:px-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Previous image"
          onClick={goPrev}
          className={`${iconBtn} flex-none`}
        >
          <ChevronLeft size={22} aria-hidden="true" />
        </button>

        <figure className="animate-lightbox-in flex min-h-0 min-w-0 flex-1 flex-col items-center">
          <img
            key={current.id}
            src={current.image}
            alt={`${current.title} — image ${index + 1} of ${total}`}
            className="max-h-[58vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
          />
          <figcaption className="mt-4 max-w-xl px-2 text-center">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-clay">
              {current.category}
            </p>
            <p className="mt-2 hidden text-sm leading-relaxed text-cream/75 sm:block">
              {current.description}
            </p>
          </figcaption>
        </figure>

        <button
          type="button"
          aria-label="Next image"
          onClick={goNext}
          className={`${iconBtn} flex-none`}
        >
          <ChevronRight size={22} aria-hidden="true" />
        </button>
      </div>

      {/* Thumbnail strip */}
      <div
        className="flex gap-2 overflow-x-auto px-4 py-4 sm:px-6"
        onClick={(e) => e.stopPropagation()}
      >
        {items.map((item, i) => {
          const active = i === index
          return (
            <button
              key={item.id}
              ref={active ? activeThumbRef : null}
              type="button"
              aria-label={`Go to image ${i + 1}`}
              aria-current={active ? 'true' : undefined}
              onClick={() => onNavigate(i)}
              className={`relative h-12 w-16 flex-none overflow-hidden rounded-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream/70 sm:h-14 sm:w-20 ${
                active
                  ? 'ring-2 ring-clay'
                  : 'opacity-50 hover:opacity-90'
              }`}
            >
              <img
                src={item.image}
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </button>
          )
        })}
      </div>
    </div>
  )
}
