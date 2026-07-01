import useInView from '../hooks/useInView'

// Tasteful fade + slide-up as the element scrolls into view.
// Motion is gated behind `motion-safe:` so users who prefer reduced motion
// see content immediately, with no transform or transition.
export default function Reveal({
  as: Tag = 'div',
  delay = 0,
  className = '',
  children,
  ...props
}) {
  const [ref, inView] = useInView()

  return (
    <Tag
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${
        inView
          ? 'opacity-100 translate-y-0'
          : 'motion-safe:translate-y-6 motion-safe:opacity-0'
      } ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}
