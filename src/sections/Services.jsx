import { Sofa, Hammer, HardHat, PencilRuler } from 'lucide-react'
import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { services } from '../data/site'

// Resolve the icon key from data to an actual lucide component.
const icons = { Sofa, Hammer, HardHat, PencilRuler }

export default function Services() {
  return (
    <Section id="services" surface="sand">
      <SectionHeading
        eyebrow="Services"
        title="A complete package for civil & build"
        subtitle="Design, architecture, construction, and civil work delivered by one accountable team — no juggling separate contractors."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, i) => {
          const Icon = icons[service.icon]
          return (
            <Reveal
              key={service.title}
              delay={i * 90}
              className="group rounded-2xl bg-cream p-7 shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-1.5"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sand text-clay transition-colors duration-300 group-hover:bg-clay group-hover:text-cream">
                {Icon && <Icon size={24} strokeWidth={1.75} aria-hidden="true" />}
              </span>
              <h3 className="mt-5 text-xl font-medium text-charcoal">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ash">
                {service.description}
              </p>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
