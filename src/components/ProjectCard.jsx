import { useState } from 'react'
import { Images } from 'lucide-react'

// A single portfolio tile: lazy-loaded cover image with a skeleton loading
// state, hover zoom, and a caption overlay. The whole tile is a button that
// opens the project's image gallery.
export default function ProjectCard({ project, onOpen }) {
  const [loaded, setLoaded] = useState(false)
  const count = project.images?.length ?? 0

  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`${project.title} — ${project.category}. Open gallery of ${count} photos.`}
      className="group relative block aspect-[4/3] w-full overflow-hidden rounded-xl bg-stone/40 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
    >
      {/* Skeleton shown until the image decodes */}
      {!loaded && (
        <span className="absolute inset-0 animate-pulse bg-stone/50" aria-hidden="true" />
      )}

      <img
        src={project.cover}
        alt={`${project.title} — ${project.category} project`}
        width="1200"
        height="900"
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`h-full w-full object-cover transition-[transform,opacity] duration-500 ease-out group-hover:scale-105 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Legibility gradient (always present, deepens on hover) */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-charcoal/85 via-charcoal/30 to-transparent transition-opacity duration-300 group-hover:from-charcoal/90"
      />

      {/* Photo-count badge, top-right — signals a multi-image gallery */}
      {count > 0 && (
        <span className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-cream/15 px-3 py-1.5 text-xs font-medium text-cream backdrop-blur-sm transition-colors duration-300 group-hover:bg-clay">
          <Images size={14} strokeWidth={2} aria-hidden="true" />
          {count}
        </span>
      )}

      {/* Caption */}
      <span className="absolute inset-x-0 bottom-0 p-5">
        <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-clay">
          {project.category}
        </span>
        <span className="mt-1 block font-serif text-xl leading-snug text-cream">
          {project.title}
        </span>
        {/* Accent underline grows in on hover */}
        <span
          aria-hidden="true"
          className="mt-2 block h-px w-8 origin-left scale-x-0 bg-clay transition-transform duration-300 group-hover:scale-x-100"
        />
      </span>
    </button>
  )
}
