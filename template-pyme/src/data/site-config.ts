// ─────────────────────────────────────────────────────────────
// GUÍA DE PERSONALIZACIÓN — leé esto antes de editar
//
// Este es el único archivo que debés editar para personalizar
// tu sitio web. Cambiá los valores entre comillas con la
// información de tu negocio.
//
// Para cambiar el tema de colores:
//   theme: 'servicios'  → azul (ideal para estudios y consultoras)
//   theme: 'productos'  → verde (ideal para alimentos y comercios)
//
// Para las imágenes, podés usar:
//   - URLs de tus propias fotos subidas a Cloudinary o similar
//   - URLs de Unsplash: https://images.unsplash.com/photo-ID?w=800&auto=format
//
// IMPORTANTE ANTES DE PUBLICAR:
//   1. Reemplazá public/robots.txt con el contenido de
//      public/docs/robots-produccion.txt
//   2. Eliminá la línea <meta name="robots"> del archivo index.html
// ─────────────────────────────────────────────────────────────

import type { TemplateConfig } from '../types/template'

const siteConfig: TemplateConfig = {
  theme: 'servicios', // ← cambiá a 'productos' si vendés artículos
  business: {
    name: 'Tu empresa',
    tagline: 'Tu propuesta de valor en una línea',
    whatsapp: '549XXXXXXXXXX', // sin + ni espacios
    email: 'contacto@tuempresa.com',
    address: 'Tu dirección, Ciudad',
    year: new Date().getFullYear(),
  },
  nav: {
    links: [
      { label: 'Inicio', href: '/' },
      { label: 'Servicios', href: '#servicios' },
      { label: 'Contacto', href: '#contacto' },
    ],
    ctaLabel: 'Contactanos',
    ctaHref: '#contacto',
  },
  hero: {
    badge: 'Tu categoría',
    title: 'Primera línea del título,',
    titleAccent: 'segunda línea destacada.',
    description: 'Descripción breve de tu propuesta de valor. 2 o 3 oraciones máximo.',
    cta1Label: 'Ver servicios',
    cta1Href: '#servicios',
    cta2Label: 'Contactar',
    cta2Href: '#contacto',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop&q=60',
    imageAlt: 'Descripción de la imagen para accesibilidad',
  },
  sectionTitle: 'Lo que ofrecemos.',
  sectionSubtitle: 'Subtítulo descriptivo de la sección.',
  features: [
    {
      tag: 'Principal',
      tagColor: 'primary',
      title: 'Servicio o producto 1',
      description: 'Descripción breve del primer servicio o producto principal.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop&q=60',
      imageAlt: 'Descripción de imagen',
      bullets: ['Beneficio 1', 'Beneficio 2'],
      ctaLabel: 'Ver más',
      ctaHref: '#contacto',
      variant: 'wide-left',
    },
    {
      tag: 'Servicio',
      tagColor: 'secondary',
      title: 'Servicio o producto 2',
      description: 'Descripción breve.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=60',
      imageAlt: 'Descripción de imagen',
      variant: 'narrow',
    },
    {
      tag: 'Servicio',
      tagColor: 'secondary',
      title: 'Servicio o producto 3',
      description: 'Descripción breve.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60',
      imageAlt: 'Descripción de imagen',
      variant: 'narrow',
    },
    {
      tag: 'Destacado',
      tagColor: 'primary',
      title: 'Servicio o producto 4',
      description: 'Descripción del cuarto servicio con detalle de propuesta de valor.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=60',
      imageAlt: 'Descripción de imagen',
      variant: 'wide-right',
    },
  ],
  testimonialsTitle: 'Lo que dicen nuestros clientes.',
  testimonials: [
    {
      quote: 'Testimonio real de un cliente satisfecho. Cuanto más específico, más credibilidad.',
      name: 'Nombre Apellido',
      role: 'Cargo',
      company: 'Empresa o barrio',
      rating: 5,
    },
    {
      quote: 'Otro testimonio de cliente.',
      name: 'Nombre Apellido',
      role: 'Cargo',
      company: 'Empresa',
      rating: 5,
    },
    {
      quote: 'Un tercer testimonio.',
      name: 'Nombre Apellido',
      role: 'Cargo',
      company: 'Empresa',
      rating: 5,
    },
  ],
  logos: ['Logo 1', 'Logo 2', 'Logo 3', 'Logo 4', 'Logo 5'],
  cta: {
    badge: 'Tu llamada a la acción',
    title: '¿Listo para empezar?',
    description: 'Frase de cierre que invita al contacto.',
    primary: 'Escribir por WhatsApp',
    primaryHref: 'https://wa.me/549XXXXXXXXXX',
    secondary: 'Enviar un email',
    secondaryHref: 'mailto:contacto@tuempresa.com',
  },
}

export default siteConfig
