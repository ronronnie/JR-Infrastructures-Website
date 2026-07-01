// Central site config. Keep copy/content here so sections stay presentational.

export const brand = {
  // Swap `name` for the business / owner's name when finalized.
  name: 'JR Infrastructures',
  tagline:
    'Interior Design · Construction · Civil Work · Architecture — your complete build partner',
  logo: '/images/logo.png', // full horizontal logo (263×45)
  logoMark: '/images/logo-mark.png', // square badge / monogram (44×45)
}

// Hero copy — headline falls back to the brand name above.
export const hero = {
  headline: 'JR Infrastructures',
  intro:
    'From first sketch to final handover, we design and build complete spaces — one accountable team across interiors, architecture, and civil work.',
  image: '/images/hero.jpg',
}

// Order here drives the navbar and the on-page section order.
// Note: "Work" links to the #portfolio section.
export const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'portfolio', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

// `icon` maps to a lucide-react icon, resolved in Services.jsx.
export const services = [
  {
    icon: 'Sofa',
    title: 'Interior Design',
    description:
      'Bespoke interiors that balance form, function, and material warmth.',
  },
  {
    icon: 'Hammer',
    title: 'Construction',
    description:
      'End-to-end building with quality workmanship, on budget and on time.',
  },
  {
    icon: 'HardHat',
    title: 'Civil Work',
    description:
      'Foundations, site, and structural civil work built to specification.',
  },
  {
    icon: 'PencilRuler',
    title: 'Architecture',
    description:
      'Considered architectural design from first sketch to working drawings.',
  },
]

// About — edit the heading, paragraphs, image, and stats freely.
export const about = {
  heading: 'Design and build, under one roof',
  image: '/images/about.jpg',
  // Replace with the real about copy. Each string is its own paragraph.
  paragraphs: [
    'For over two decades, JR Infrastructures - Cyril Manoraj, has helped clients turn ideas into finished, livable spaces — combining the eye of an interior designer with the discipline of a builder.',
    'By keeping design, architecture, construction, and civil work under one roof, every project moves with a single point of accountability — fewer surprises, clearer communication, and results that are built to last.',
  ],
  // Easy-to-edit highlight stats.
  stats: [
    { value: '40+', label: 'Years Experience' },
    { value: '150+', label: 'Projects Completed' },
    { value: '12', label: 'Cities Served' },
  ],
}

// Contact — edit display text and the underlying tel/wa.me/mailto values.
export const contact = {
  heading: "Let's build something together",
  subtitle:
    'Reach out for a quote or a conversation about your project — we usually reply within a day.',
  // `tel` is digits only with country code for the tel: link.
  phone: { display: '+91 91085 51539', tel: '+919108551539' },
  email: 'jrinfrastructure2@gmail.com',
  email2: 'manorajcyril@gmail.com',
  serviceArea:
    'No 183, Rampo Apartments, C1, Canara Bank Colony, Nagarbhavi Main Road, Bangalore - 560040',
  // Query used for the embedded Google Map (full address).
  mapQuery:
    'No 183, Rampo Apartments, C1, Canara Bank Colony, Nagarbhavi Main Road, Bangalore 560040',
}

// Social links — replace the `href` placeholders with real profiles.
export const socials = [
  { label: 'Instagram', icon: 'Instagram', href: '#' },
  { label: 'Facebook', icon: 'Facebook', href: '#' },
  { label: 'LinkedIn', icon: 'Linkedin', href: '#' },
]
