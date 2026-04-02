export interface BusinessConfig {
  name: string
  tagline: string
  whatsapp: string // número sin formato, ej: "5491112345678"
  email: string
  address: string
  year: number
}

export interface HeroConfig {
  badge: string
  title: string
  titleAccent: string // porción del título en color primario
  description: string
  cta1Label: string
  cta1Href: string
  cta2Label: string
  cta2Href: string
  image: string // URL de imagen
  imageAlt: string
}

export interface FeatureCard {
  tag: string
  tagColor: 'primary' | 'error' | 'secondary'
  title: string
  description: string
  image: string
  imageAlt: string
  bullets?: string[]
  ctaLabel?: string
  ctaHref?: string
  variant: 'wide-left' | 'wide-right' | 'narrow' | 'dark'
}

export interface Testimonial {
  quote: string
  name: string
  role: string
  company: string
  rating: 5 | 4 | 3
}

export interface CtaConfig {
  badge: string
  title: string
  description: string
  primary: string
  primaryHref: string
  secondary: string
  secondaryHref: string
}

export interface TemplateConfig {
  theme: 'servicios' | 'productos'
  business: BusinessConfig
  hero: HeroConfig
  sectionTitle: string
  sectionSubtitle: string
  features: FeatureCard[]
  testimonialsTitle: string
  testimonials: Testimonial[]
  logos: string[]
  cta: CtaConfig
  nav: {
    links: Array<{ label: string; href: string }>
    ctaLabel: string
    ctaHref: string
  }
}
