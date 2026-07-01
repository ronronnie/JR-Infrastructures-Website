import { useEffect, useState } from 'react'
import Container from './Container'
import { brand, navLinks } from '../data/site'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('hero')

  // Solid/blurred background once the user scrolls past the hero top.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll-spy: highlight the nav link for the section currently in view.
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter(Boolean)
    if (!sections.length || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the most visible intersecting section.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  // When the bar has a light surface (scrolled, or mobile menu open) use dark
  // ink; while transparent over the dark hero use light ink.
  const onLight = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        onLight ? 'bg-cream/90 shadow-sm backdrop-blur' : 'bg-transparent'
      }`}
    >
      <Container>
        <nav className="flex h-20 items-center justify-between">
          <a
            href="#hero"
            onClick={() => setOpen(false)}
            aria-label={`${brand.name} — home`}
            className="relative block h-9 w-[150px] rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-4 focus-visible:ring-offset-transparent sm:w-[200px]"
          >
            {/* Full logo — shown on the light (scrolled) bar */}
            <img
              src={brand.logo}
              alt={brand.name}
              width="263"
              height="45"
              className={`absolute left-0 top-1/2 h-8 w-auto -translate-y-1/2 transition-opacity duration-300 sm:h-9 ${
                onLight ? 'opacity-100' : 'opacity-0'
              }`}
            />
            {/* Mark only — shown while transparent over the dark hero */}
            <img
              src={brand.logoMark}
              alt=""
              aria-hidden="true"
              width="44"
              height="45"
              className={`absolute left-0 top-1/2 h-9 w-auto -translate-y-1/2 transition-opacity duration-300 ${
                onLight ? 'opacity-0' : 'opacity-100'
              }`}
            />
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-9 md:flex">
            {navLinks.map((link) => {
              const isActive = active === link.id
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    aria-current={isActive ? 'true' : undefined}
                    className={`relative rounded-sm text-sm font-medium tracking-wide transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-clay after:transition-all after:duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-4 ${
                      isActive
                        ? 'text-clay after:w-full'
                        : `after:w-0 hover:text-clay ${
                            onLight ? 'text-graphite' : 'text-cream/90'
                          }`
                    } ${onLight ? 'focus-visible:ring-offset-cream' : 'focus-visible:ring-offset-transparent'}`}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative h-10 w-10 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay md:hidden"
          >
            {(() => {
              const bar = `absolute left-1/2 top-1/2 h-0.5 w-6 -translate-x-1/2 transition-all duration-300 ${
                onLight ? 'bg-charcoal' : 'bg-cream'
              }`
              return (
                <>
                  <span
                    className={`${bar} ${open ? 'rotate-45' : '-translate-y-2'}`}
                  />
                  <span
                    className={`${bar} -translate-y-1/2 ${open ? 'opacity-0' : 'opacity-100'}`}
                  />
                  <span
                    className={`${bar} ${open ? '-rotate-45' : 'translate-y-2'}`}
                  />
                </>
              )
            })()}
          </button>
        </nav>
      </Container>

      {/* Mobile menu panel: fades + slides open */}
      <div
        className={`overflow-hidden border-stone/60 bg-cream/95 backdrop-blur transition-all duration-300 ease-in-out md:hidden ${
          open ? 'max-h-96 border-t opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <Container>
          <ul className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => {
              const isActive = active === link.id
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? 'true' : undefined}
                    className={`block rounded-md py-3 text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay ${
                      isActive ? 'text-clay' : 'text-graphite hover:text-clay'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </Container>
      </div>
    </header>
  )
}
