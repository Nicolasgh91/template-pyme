import type { TemplateConfig } from '../types/template'

export const contentServicios: TemplateConfig = {
  theme: 'servicios',
  business: {
    name: 'Pérez & Asociados',
    tagline: 'Estudio contable y asesoría impositiva',
    whatsapp: '5491123456789',
    email: 'contacto@perezasociados.com.ar',
    address: 'Av. Corrientes 1234, CABA',
    year: 2024,
  },
  nav: {
    links: [
      { label: 'Inicio', href: '/servicios' },
      { label: 'Servicios', href: '#servicios' },
      { label: 'Nosotros', href: '#nosotros' },
      { label: 'Contacto', href: '#contacto' },
    ],
    ctaLabel: 'Consulta gratis',
    ctaHref: '#contacto',
  },
  hero: {
    badge: 'Estudio contable',
    title: 'Números claros,',
    titleAccent: 'empresa que crece.',
    description:
      'Impuestos, sueldos y asesoría para pymes y monotributistas. Más de 15 años acompañando negocios en CABA y GBA.',
    cta1Label: 'Ver servicios',
    cta1Href: '#servicios',
    cta2Label: 'Consultá hoy',
    cta2Href: '#contacto',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop&q=60',
    imageAlt: 'Escritorio profesional con documentos contables y computadora',
  },
  sectionTitle: 'Todo lo que tu empresa necesita.',
  sectionSubtitle: 'Servicios integrales para que vos te enfoques en crecer.',
  features: [
    {
      tag: 'Impuestos',
      tagColor: 'primary',
      title: 'Liquidación de impuestos',
      description:
        'IVA, Ganancias, Ingresos Brutos y monotributo. Presentamos todo a tiempo para que nunca pagues multas.',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop&q=60',
      imageAlt: 'Declaración impositiva digital',
      bullets: ['Vencimientos monitoreados', 'Alertas anticipadas'],
      ctaLabel: 'Ver detalle',
      ctaHref: '#contacto',
      variant: 'wide-left',
    },
    {
      tag: 'Nómina',
      tagColor: 'secondary',
      title: 'Sueldos y AFIP',
      description: 'Liquidación de sueldos, cargas sociales y presentación ante AFIP sin errores.',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&auto=format&fit=crop&q=60',
      imageAlt: 'Recibo de sueldo digital',
      variant: 'narrow',
    },
    {
      tag: 'Auditoría',
      tagColor: 'secondary',
      title: 'Estados contables',
      description: 'Balances, estados de resultados y certificaciones para bancos, licitaciones o inversores.',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&auto=format&fit=crop&q=60',
      imageAlt: 'Revisión de estados contables',
      variant: 'narrow',
    },
    {
      tag: 'Asesoría',
      tagColor: 'primary',
      title: 'Consultoría para pymes',
      description:
        'Te ayudamos a tomar decisiones financieras con información real: costos, rentabilidad y proyecciones.',
      image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&auto=format&fit=crop&q=60',
      imageAlt: 'Reunión de consultoría empresarial',
      variant: 'wide-right',
    },
  ],
  testimonialsTitle: 'Lo que dicen nuestros clientes.',
  testimonials: [
    {
      quote:
        'Desde que trabajo con Pérez & Asociados no tuve más sorpresas con impuestos. Todo llega en tiempo y forma.',
      name: 'Martina Rodríguez',
      role: 'Propietaria',
      company: 'Farmacia San Martín',
      rating: 5,
    },
    {
      quote:
        'Me ayudaron a pasar de monotributo a responsable inscripto sin ningún inconveniente. El acompañamiento fue total.',
      name: 'Diego Sosa',
      role: 'Fotógrafo freelance',
      company: 'DS Fotografía',
      rating: 5,
    },
    {
      quote:
        'Necesitaba un balance para el banco y en tres días tenía todo listo. Muy ágiles y confiables.',
      name: 'Carolina Méndez',
      role: 'Directora',
      company: 'Textil Mendoza SRL',
      rating: 5,
    },
  ],
  logos: ['AFIP', 'AGIP', 'CAME', 'CPCE', 'BCRA'],
  cta: {
    badge: 'Primera consulta sin cargo',
    title: '¿Listo para ordenar tu contabilidad?',
    description: 'Hablá con un contador hoy. Sin compromisos, sin letra chica.',
    primary: 'Escribir por WhatsApp',
    primaryHref: 'https://wa.me/5491123456789',
    secondary: 'Enviar un email',
    secondaryHref: 'mailto:contacto@perezasociados.com.ar',
  },
}
