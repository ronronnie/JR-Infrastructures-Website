import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { about } from '../data/site'

export default function About() {
  return (
    <Section id="about" surface="sand">
      <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-14">
        {/* Image */}
        <Reveal className="order-1">
          <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-soft)]">
            <img
              src={about.image}
              alt="JR Infrastructures — portrait and completed work"
              width="1000"
              height="1250"
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] h-full w-full object-cover"
            />
          </div>
        </Reveal>

        {/* Text */}
        <Reveal delay={120} className="order-2">
          <SectionHeading eyebrow="About" title={about.heading} />

          <div className="mt-5 space-y-4">
            {about.paragraphs.map((para, i) => (
              <p key={i} className="text-base leading-relaxed text-graphite">
                {para}
              </p>
            ))}
          </div>

          {/* Highlight stats */}
          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-stone/70 pt-8">
            {about.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-serif text-3xl text-charcoal md:text-4xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-ash sm:text-sm">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  )
}
