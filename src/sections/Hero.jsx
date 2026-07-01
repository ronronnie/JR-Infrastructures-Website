import Container from '../components/Container'
import Button from '../components/Button'
import Reveal from '../components/Reveal'
import { brand, hero } from '../data/site'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background image — above the fold, so load eagerly with priority */}
      <img
        src={hero.image}
        alt=""
        aria-hidden="true"
        width="1920"
        height="1280"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Overlays: keep the left/bottom dark for legible text, let the photo
          breathe on the right. */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/45 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-charcoal/55 via-transparent to-charcoal/20"
        aria-hidden="true"
      />

      <Container className="relative z-10 pt-28 pb-20 md:pt-32">
        <Reveal>
          <p className="mb-5 max-w-2xl text-xs font-medium uppercase tracking-[0.22em] text-cream/80 sm:text-sm">
            {brand.tagline}
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="max-w-3xl text-4xl font-medium leading-[1.05] tracking-tight text-cream sm:text-5xl md:text-6xl lg:text-7xl">
            {hero.headline || brand.name}
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/80 md:text-lg">
            {hero.intro}
          </p>
        </Reveal>

        <Reveal delay={240} className="mt-10 flex flex-wrap gap-4">
          <Button href="#portfolio" size="lg">
            View Our Work
          </Button>
          <Button
            href="#contact"
            variant="outline"
            size="lg"
            className="border-cream/40 text-cream hover:border-cream hover:text-cream"
          >
            Get in Touch
          </Button>
        </Reveal>
      </Container>

      {/* Scroll cue */}
      <div
        className="absolute inset-x-0 bottom-8 flex justify-center"
        aria-hidden="true"
      >
        <span className="h-10 w-6 rounded-full border border-cream/40">
          <span className="mx-auto mt-2 block h-2 w-px animate-pulse bg-cream/70" />
        </span>
      </div>
    </section>
  )
}
