// Consistent section header: optional terracotta eyebrow, serif title, and
// optional subtitle. Used by every section so headings feel like one system.
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className = '',
}) {
  const alignment = align === 'center' ? 'mx-auto text-center' : ''

  return (
    <div className={`max-w-2xl ${alignment} ${className}`}>
      {eyebrow && (
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-clay">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-medium leading-tight tracking-tight text-charcoal md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-ash">{subtitle}</p>
      )}
    </div>
  )
}
