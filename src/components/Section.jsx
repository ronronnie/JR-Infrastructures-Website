import Container from './Container'

// Vertical section shell: scroll anchor id, consistent vertical rhythm,
// optional surface tint, and a centered Container for its content.
const surfaces = {
  cream: 'bg-cream',
  sand: 'bg-sand',
}

export default function Section({
  id,
  surface = 'cream',
  className = '',
  containerClassName = '',
  children,
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 py-20 md:py-28 ${surfaces[surface] ?? ''} ${className}`}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  )
}
