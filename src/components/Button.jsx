// Single source of truth for calls-to-action. Renders an <a> when `href` is
// provided, otherwise a <button>. Variants/sizes keep CTAs identical site-wide.
const base =
  'inline-flex items-center justify-center rounded-full font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay/60 focus-visible:ring-offset-2 focus-visible:ring-offset-cream'

const variants = {
  primary: 'bg-charcoal text-cream hover:bg-graphite',
  outline: 'border border-stone text-charcoal hover:border-clay hover:text-clay',
  ghost: 'text-charcoal hover:text-clay',
}

const sizes = {
  md: 'px-7 py-3 text-sm',
  lg: 'px-8 py-3.5 text-base',
}

export default function Button({
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
