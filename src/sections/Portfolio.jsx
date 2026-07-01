import { useMemo, useState } from 'react'
import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import Lightbox from '../components/Lightbox'
import { projects } from '../data/projects'

export default function Portfolio() {
  // gallery holds the open project + the active image index within it.
  const [gallery, setGallery] = useState(null)

  // Map the open project's image URLs into lightbox items, each carrying the
  // shared project caption so the gallery shows consistent context.
  const galleryItems = useMemo(() => {
    if (!gallery) return []
    return gallery.project.images.map((src, i) => ({
      id: i,
      image: src,
      title: gallery.project.title,
      category: gallery.project.category,
      description: gallery.project.description,
    }))
  }, [gallery])

  return (
    <Section id="portfolio">
      <SectionHeading
        eyebrow="Work"
        title="Selected projects"
        subtitle="A look across interiors, construction, civil works, and architecture."
      />

      {/* Grid */}
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <div
            key={project.id}
            className="animate-tile-in"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <ProjectCard
              project={project}
              onOpen={() => setGallery({ project, index: 0 })}
            />
          </div>
        ))}
      </div>

      {gallery && (
        <Lightbox
          items={galleryItems}
          index={gallery.index}
          onClose={() => setGallery(null)}
          onNavigate={(index) => setGallery((g) => ({ ...g, index }))}
        />
      )}
    </Section>
  )
}
