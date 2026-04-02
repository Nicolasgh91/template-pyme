import type { TemplateConfig } from '../types/template'

export const contentProductos: TemplateConfig = {
  theme: 'productos',
  business: {
    name: 'La Miga',
    tagline: 'Panadería artesanal de barrio',
    whatsapp: '5491198765432',
    email: 'pedidos@lamigapanaderia.com.ar',
    address: 'Murillo 456, Villa Crespo, CABA',
    year: 2024,
  },
  nav: {
    links: [
      { label: 'Inicio', href: '/productos' },
      { label: 'Catálogo', href: '#catalogo' },
      { label: 'Pedidos', href: '#pedidos' },
      { label: 'Contacto', href: '#contacto' },
    ],
    ctaLabel: 'Hacer un pedido',
    ctaHref: '#pedidos',
  },
  hero: {
    badge: 'Panadería artesanal',
    title: 'Pan de verdad,',
    titleAccent: 'hecho con amor.',
    description:
      'Masa madre, facturas del día y viandas semanales. Todo sin conservantes, con ingredientes seleccionados y entrega a domicilio en Villa Crespo y alrededores.',
    cta1Label: 'Ver catálogo',
    cta1Href: '#catalogo',
    cta2Label: 'Pedir por WhatsApp',
    cta2Href: 'https://wa.me/5491198765432',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=60',
    imageAlt: 'Pan artesanal recién horneado sobre mesada de madera',
  },
  sectionTitle: 'Lo que hacemos con amor.',
  sectionSubtitle: 'Productos frescos, hechos todos los días.',
  features: [
    {
      tag: 'Estrella',
      tagColor: 'primary',
      title: 'Pan de masa madre',
      description:
        'Fermentación lenta de 24 horas. Corteza crujiente, miga esponjosa. Sin levadura comercial, sin aditivos.',
      image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=800&auto=format&fit=crop&q=60',
      imageAlt: 'Pan de masa madre con corteza dorada',
      bullets: ['Sin conservantes', 'Fermentación natural 24 h'],
      ctaLabel: 'Ver variedades',
      ctaHref: '#contacto',
      variant: 'wide-left',
    },
    {
      tag: 'Diario',
      tagColor: 'secondary',
      title: 'Facturas del día',
      description: 'Medialunas, vigilantes y cañoncitos. Horneados cada mañana desde las 7 am.',
      image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&auto=format&fit=crop&q=60',
      imageAlt: 'Bandeja de medialunas recién horneadas',
      variant: 'narrow',
    },
    {
      tag: 'Saludable',
      tagColor: 'secondary',
      title: 'Línea sin gluten y vegana',
      description: 'Alternativas para celíacos y veganos. Misma textura, mismo sabor, distintos ingredientes.',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop&q=60',
      imageAlt: 'Pan sin gluten con semillas',
      variant: 'narrow',
    },
    {
      tag: 'Semanal',
      tagColor: 'primary',
      title: 'Viandas y catering',
      description:
        'Cajas semanales de pan para oficinas y hogares. Tartas, sandwiches y preparados para eventos. Pedido mínimo: martes antes de las 18 h.',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop&q=60',
      imageAlt: 'Caja de viandas con productos de panadería',
      variant: 'wide-right',
    },
  ],
  testimonialsTitle: 'Nuestros clientes hablan.',
  testimonials: [
    {
      quote:
        'El pan de masa madre de La Miga cambió mis desayunos para siempre. Nunca más voy a comprar pan envasado.',
      name: 'Luciana Ferreyra',
      role: 'Cliente frecuente',
      company: 'Villa Crespo',
      rating: 5,
    },
    {
      quote:
        'Pedimos las cajas semanales para la oficina. Llegan siempre frescas y el equipo las agota en el día.',
      name: 'Sebastián Torres',
      role: 'Gerente',
      company: 'Estudio Torres & Gil',
      rating: 5,
    },
    {
      quote:
        'Las facturas del domingo son un ritual en casa. Siempre calientes, siempre perfectas.',
      name: 'Ana Gómez',
      role: 'Vecina del barrio',
      company: 'Palermo',
      rating: 5,
    },
  ],
  logos: ['SENASA', 'INAL', 'CAME', 'Sin TACC', 'BPF'],
  cta: {
    badge: 'Pedidos con 24 h de anticipación',
    title: '¿Te quedaste con ganas de algo rico?',
    description: 'Escribinos y armamos tu pedido. Entregamos en Villa Crespo, Palermo y Almagro.',
    primary: 'Pedir por WhatsApp',
    primaryHref: 'https://wa.me/5491198765432',
    secondary: 'Enviar un email',
    secondaryHref: 'mailto:pedidos@lamigapanaderia.com.ar',
  },
}
