import { Phone, Mail, MapPin } from 'lucide-react'
import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { contact } from '../data/site'

// Each contact method: icon, label, display value, and an optional href.
const methods = [
  {
    icon: Phone,
    label: 'Call',
    value: contact.phone.display,
    href: `tel:${contact.phone.tel}`,
  },
  {
    icon: Mail,
    label: 'Email',
    value: contact.email,
    href: `mailto:${contact.email}`,
  },
  {
    icon: Mail,
    label: 'Email',
    value: contact.email2,
    href: `mailto:${contact.email2}`,
  },
  {
    icon: MapPin,
    label: 'Address',
    value: contact.serviceArea,
  },
]

export default function Contact() {
  return (
    <Section id="contact">
      <Reveal>
        <SectionHeading
          eyebrow="Contact"
          title={contact.heading}
          subtitle={contact.subtitle}
        />
      </Reveal>

      <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Contact methods */}
        <Reveal>
          <ul className="space-y-3">
            {methods.map(({ icon: Icon, label, value, href, external }) => {
              const inner = (
                <>
                  <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-sand text-clay transition-colors duration-300 group-hover:bg-clay group-hover:text-cream">
                    <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs uppercase tracking-wider text-ash">
                      {label}
                    </span>
                    <span className="mt-0.5 block break-words text-lg text-charcoal">
                      {value}
                    </span>
                  </span>
                </>
              )

              return (
                <li key={label}>
                  {href ? (
                    <a
                      href={href}
                      {...(external
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                      className="group flex items-center gap-4 rounded-2xl p-3 transition-colors hover:bg-sand/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay/60"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="group flex items-center gap-4 p-3">
                      {inner}
                    </div>
                  )}
                </li>
              )
            })}
          </ul>
        </Reveal>

        {/* Embedded map */}
        <Reveal delay={120}>
          <div className="h-full overflow-hidden rounded-2xl shadow-[var(--shadow-soft)]">
            <iframe
              title={`Map of ${contact.mapQuery}`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                contact.mapQuery,
              )}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[320px] w-full border-0"
            />
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
