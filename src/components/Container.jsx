// Horizontal layout primitive: centers content and applies the shared
// max-width + responsive gutter. Everything on the page aligns to this.
export default function Container({ as: Tag = 'div', className = '', children }) {
  return (
    <Tag className={`mx-auto w-full max-w-[var(--container-content)] px-6 sm:px-8 ${className}`}>
      {children}
    </Tag>
  )
}
