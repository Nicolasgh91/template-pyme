# Tareas técnicas — subproyecto `template-pymes`

*Documento de instrucciones para el agente de código. Cada tarea indica: archivo, acción, código exacto o referencia. El agente no debe tomar ninguna decisión de diseño ni crear archivos no listados aquí.*

*Fecha: 2026-04-01*

---

## Reglas de ejecución obligatorias

1. Seguir el orden de fases sin excepción: A → B → C → D → E → F.
2. No crear archivos no listados en este documento.
3. No modificar código de componentes durante la fase D (solo datos).
4. Leer el archivo existente antes de modificarlo. Nunca sobreescribir sin leer.
5. Ejecutar `npm run build` al finalizar cada fase. Si hay error, detener y reportar el stacktrace completo antes de continuar.
6. La fase F modifica el repo padre. Ejecutar `npm run build` del repo padre post-modificación.

---

## Fase A — Scaffolding y schema

### A1 — Crear el repo desde cero

```bash
npm create vite@latest template-pyme -- --template react-ts
cd template-pyme
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install react-router-dom
npm install @fontsource-variable/inter
npm install @fontsource-variable/outfit
```

No instalar shadcn/ui ni ninguna otra dependencia no listada.

### A2 — Configurar `tailwind.config.js`

Reemplazar el contenido del archivo generado por:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Tokens del design system — fuente: design.md
        primary: 'var(--color-primary)',
        'primary-container': 'var(--color-primary-container)',
        secondary: 'var(--color-secondary)',
        'secondary-container': 'var(--color-secondary-container)',
        'on-secondary-container': 'var(--color-on-secondary-container)',
        surface: 'var(--color-surface)',
        'surface-container-lowest': 'var(--color-surface-container-lowest)',
        'surface-container-low': 'var(--color-surface-container-low)',
        'surface-container': 'var(--color-surface-container)',
        'surface-container-high': 'var(--color-surface-container-high)',
        'surface-container-highest': 'var(--color-surface-container-highest)',
        'on-surface': 'var(--color-on-surface)',
        'on-surface-variant': 'var(--color-on-surface-variant)',
        'outline-variant': 'var(--color-outline-variant)',
        'on-primary': '#ffffff',
        error: '#ba1a1a',
        'primary-fixed': '#d8e2ff',
        'on-primary-fixed': '#001a41',
      },
      fontFamily: {
        display: 'var(--font-display)',
        body: 'var(--font-body)',
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '3rem',
      },
    },
  },
  plugins: [],
}
```

### A3 — Crear `src/styles/tokens.css`

Crear el archivo con los dos temas. Las clases semánticas de glassmorphism y gradiente van aquí, no en `global.css`.

```css
/* ─── Fuentes ─────────────────────────────────────────────── */
@import '@fontsource-variable/inter';
@import '@fontsource-variable/outfit';

/* ─── Tema base: servicios (azul técnico) ─────────────────── */
:root {
  /* Colores */
  --color-primary: #0058bc;
  --color-primary-container: #0070eb;
  --color-secondary: #5f5e60;
  --color-secondary-container: #e2dfe1;
  --color-on-secondary-container: #636264;
  --color-surface: #f9f9fb;
  --color-surface-container-lowest: #ffffff;
  --color-surface-container-low: #f3f3f5;
  --color-surface-container: #eeeef0;
  --color-surface-container-high: #e8e8ea;
  --color-surface-container-highest: #e2e2e4;
  --color-on-surface: #1a1c1d;
  --color-on-surface-variant: #414755;
  --color-outline-variant: #c1c6d7;

  /* Tipografía */
  --font-display: 'Inter Variable', sans-serif;
  --font-body: 'Inter Variable', sans-serif;

  /* Glassmorphism — nav */
  --glass-bg: rgba(249, 249, 251, 0.8);
  --glass-blur: blur(20px);

  /* Gradiente primario */
  --gradient-primary: linear-gradient(135deg, #0058bc 0%, #0070eb 100%);

  /* Sombra atmosférica */
  --shadow-card: 0 4px 32px rgba(26, 28, 29, 0.04);
}

/* ─── Tema productos: gastronomía (verde esmeralda) ────────── */
[data-theme='productos'] {
  /* Colores */
  --color-primary: #059669;
  --color-primary-container: #10b981;
  --color-secondary: #6b7280;
  --color-secondary-container: #d1fae5;
  --color-on-secondary-container: #065f46;
  --color-surface: #f9fafb;
  --color-surface-container-lowest: #ffffff;
  --color-surface-container-low: #f0fdf4;
  --color-surface-container: #dcfce7;
  --color-surface-container-high: #bbf7d0;
  --color-surface-container-highest: #a7f3d0;
  --color-on-surface: #1c1917;
  --color-on-surface-variant: #374151;
  --color-outline-variant: #a7f3d0;

  /* Tipografía */
  --font-display: 'Outfit Variable', sans-serif;
  --font-body: 'Outfit Variable', sans-serif;

  /* Glassmorphism — nav */
  --glass-bg: rgba(249, 250, 251, 0.85);
  --glass-blur: blur(20px);

  /* Gradiente primario */
  --gradient-primary: linear-gradient(135deg, #065f46 0%, #059669 100%);

  /* Sombra atmosférica */
  --shadow-card: 0 4px 32px rgba(28, 25, 23, 0.04);
}

/* ─── Utilidades globales ──────────────────────────────────── */
@layer utilities {
  .glass-nav {
    background: var(--glass-bg);
    backdrop-filter: var(--glass-blur);
    -webkit-backdrop-filter: var(--glass-blur);
  }

  .gradient-primary {
    background: var(--gradient-primary);
  }

  .text-gradient-primary {
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .card-shadow {
    box-shadow: var(--shadow-card);
  }
}
```

### A4 — Actualizar `src/index.css`

Reemplazar el contenido completo por:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import './styles/tokens.css';

body {
  font-family: var(--font-body);
  background-color: var(--color-surface);
  color: var(--color-on-surface);
}

::selection {
  background-color: #d8e2ff;
  color: #001a41;
}
```

### A5 — Crear `src/types/template.ts`

Este es el contrato único. Ningún componente acepta props fuera de este tipo.

```ts
export interface BusinessConfig {
  name: string
  tagline: string
  whatsapp: string       // número sin formato, ej: "5491112345678"
  email: string
  address: string
  year: number
}

export interface HeroConfig {
  badge: string
  title: string
  titleAccent: string    // porción del título en color primario
  description: string
  cta1Label: string
  cta1Href: string
  cta2Label: string
  cta2Href: string
  image: string          // URL de imagen
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
```

### A6 — Crear `src/data/content-servicios.ts`

Empresa ficticia: "Pérez & Asociados — Estudio contable". Branding azul, prototipo original.

```ts
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
```

### A7 — Crear `src/data/content-productos.ts`

Empresa ficticia: "La Miga — panadería artesanal". Branding verde esmeralda.

```ts
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
```

### A8 — Crear `src/data/site-config.ts`

Este es el archivo que el cliente edita en su fork. Comienza como copia de la variante servicios.

```ts
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
  theme: 'servicios',          // ← cambiá a 'productos' si vendés artículos
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
```

**Validación A:** ejecutar `npm run build`. No debe haber errores de TypeScript. Si los hay, corregirlos antes de continuar.

---

## Fase B — Componentes UI

Todos los componentes reciben `config` como prop tipado. Ninguno contiene lógica de negocio ni strings hardcodeados.

### B1 — Crear `src/components/layout/Navbar.tsx`

Extraído fielmente del prototipo `services_code.html` (líneas 95–108). Usa variables CSS del tema activo.

```tsx
import type { TemplateConfig } from '../../types/template'

interface Props {
  config: Pick<TemplateConfig, 'business' | 'nav'>
}

export function Navbar({ config }: Props) {
  const { business, nav } = config

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav shadow-sm shadow-slate-200/50">
      <div className="flex justify-between items-center px-6 py-3 max-w-7xl mx-auto">
        <div className="text-xl font-bold tracking-tighter text-on-surface font-display">
          {business.name}
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm tracking-tight">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-secondary hover:text-on-surface transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href={nav.ctaHref}
          className="gradient-primary text-white px-5 py-2 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
        >
          {nav.ctaLabel}
        </a>
      </div>
    </nav>
  )
}
```

### B2 — Crear `src/components/layout/Footer.tsx`

```tsx
import type { TemplateConfig } from '../../types/template'

interface Props {
  config: Pick<TemplateConfig, 'business' | 'nav'>
}

export function Footer({ config }: Props) {
  const { business, nav } = config

  return (
    <footer className="w-full border-t border-outline-variant/20 bg-surface-container-low">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 py-12 gap-6 max-w-7xl mx-auto">
        <div className="text-lg font-bold tracking-tighter text-on-surface font-display">
          {business.name}
        </div>

        <div className="flex gap-8">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-widest font-bold text-secondary hover:text-primary transition-colors opacity-80 hover:opacity-100"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-secondary">
          © {business.year} {business.name}
        </div>
      </div>
    </footer>
  )
}
```

### B3 — Crear `src/components/ui/HeroAsymmetric.tsx`

Extraído de `services_code.html` (líneas 110–126) combinado con el hero de `landing_code.html`.

```tsx
import type { TemplateConfig } from '../../types/template'

interface Props {
  config: Pick<TemplateConfig, 'hero' | 'business'>
}

export function HeroAsymmetric({ config }: Props) {
  const { hero } = config

  return (
    <header className="max-w-7xl mx-auto px-6 pt-32 pb-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
        {/* Columna izquierda — texto */}
        <div className="max-w-2xl">
          <span className="text-[0.6875rem] font-bold uppercase tracking-[0.1em] text-secondary mb-4 block">
            {hero.badge}
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-on-surface leading-[1.1] mb-6 font-display">
            {hero.title}{' '}
            <span className="text-gradient-primary">{hero.titleAccent}</span>
          </h1>
          <p className="text-lg text-secondary leading-relaxed mb-8 max-w-md">
            {hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={hero.cta1Href}
              className="gradient-primary text-white px-8 py-4 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity text-center"
            >
              {hero.cta1Label}
            </a>
            <a
              href={hero.cta2Href}
              className="bg-surface-container-highest text-primary px-8 py-4 rounded-xl font-bold text-sm hover:bg-surface-container-high transition-colors text-center"
            >
              {hero.cta2Label}
            </a>
          </div>
        </div>

        {/* Columna derecha — imagen */}
        <div className="w-full md:w-[45%] aspect-[4/3] rounded-4xl overflow-hidden bg-surface-container-low flex-shrink-0">
          <img
            src={hero.image}
            alt={hero.imageAlt}
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
      </div>
    </header>
  )
}
```

### B4 — Crear `src/components/ui/BentoGrid.tsx`

Grilla de 12 columnas. Renderiza las 4 cards según su `variant`. Extraído de `services_code.html` (líneas 128–222).

```tsx
import type { TemplateConfig, FeatureCard } from '../../types/template'

interface Props {
  config: Pick<TemplateConfig, 'sectionTitle' | 'sectionSubtitle' | 'features'>
}

function tagColorClass(color: FeatureCard['tagColor']) {
  const map = { primary: 'text-primary', error: 'text-error', secondary: 'text-secondary' }
  return map[color]
}

function WideCard({ card, reverse }: { card: FeatureCard; reverse?: boolean }) {
  return (
    <div
      className={`md:col-span-8 group bg-surface-container-lowest card-shadow rounded-4xl overflow-hidden flex flex-col md:flex-row items-center border border-outline-variant/5 ${reverse ? 'md:flex-row-reverse' : ''}`}
    >
      <div className="p-12 flex-1">
        <span className={`text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-wider mb-6 inline-block bg-secondary-container ${tagColorClass(card.tagColor)}`}>
          {card.tag}
        </span>
        <h3 className="text-3xl font-bold tracking-tight mb-4 text-on-surface font-display">
          {card.title}
        </h3>
        <p className="text-secondary mb-8 leading-relaxed max-w-md">{card.description}</p>
        {card.bullets && (
          <ul className="space-y-3 mb-10">
            {card.bullets.map((b) => (
              <li key={b} className="flex items-center gap-3 text-sm font-medium text-on-surface-variant">
                <span className="text-primary">✓</span> {b}
              </li>
            ))}
          </ul>
        )}
        {card.ctaLabel && (
          <a
            href={card.ctaHref}
            className="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all duration-300"
          >
            {card.ctaLabel} →
          </a>
        )}
      </div>
      <div className="w-full md:w-1/2 h-full min-h-[360px] bg-surface-container-low relative overflow-hidden flex-shrink-0">
        <img
          src={card.image}
          alt={card.imageAlt}
          className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
      </div>
    </div>
  )
}

function NarrowCard({ card }: { card: FeatureCard }) {
  return (
    <div className="md:col-span-4 group bg-surface-container-lowest card-shadow rounded-4xl overflow-hidden flex flex-col border border-outline-variant/5">
      <div className="h-56 bg-surface-container-low relative overflow-hidden flex-shrink-0">
        <img
          src={card.image}
          alt={card.imageAlt}
          className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
      </div>
      <div className="p-10 flex-1 flex flex-col">
        <span className={`text-[10px] font-bold uppercase tracking-widest mb-3 block ${tagColorClass(card.tagColor)}`}>
          {card.tag}
        </span>
        <h3 className="text-2xl font-bold tracking-tight mb-3 text-on-surface font-display">
          {card.title}
        </h3>
        <p className="text-sm text-secondary leading-relaxed">{card.description}</p>
      </div>
    </div>
  )
}

export function BentoGrid({ config }: Props) {
  const { sectionTitle, sectionSubtitle, features } = config
  const [f1, f2, f3, f4] = features

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-on-surface mb-4 font-display">
          {sectionTitle}
        </h2>
        <p className="text-lg text-secondary">{sectionSubtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Fila 1: wide-left (8 cols) + narrow (4 cols) */}
        <WideCard card={f1} />
        <NarrowCard card={f2} />

        {/* Fila 2: narrow (4 cols) + wide-right (8 cols) */}
        <NarrowCard card={f3} />
        <WideCard card={f4} reverse />
      </div>
    </section>
  )
}
```

### B5 — Crear `src/components/ui/TestimonialsSection.tsx`

Extraído de `services_code.html` (líneas 224–284).

```tsx
import type { TemplateConfig } from '../../types/template'

interface Props {
  config: Pick<TemplateConfig, 'testimonialsTitle' | 'testimonials' | 'logos'>
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex text-primary mb-4">
      {Array.from({ length: rating }).map((_, i) => (
        <span key={i} aria-hidden="true">★</span>
      ))}
    </div>
  )
}

export function TestimonialsSection({ config }: Props) {
  const { testimonialsTitle, testimonials, logos } = config

  return (
    <section className="bg-surface-container-low py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold tracking-tight text-on-surface font-display">
            {testimonialsTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          {testimonials.map((t) => (
            <div key={t.name} className="space-y-6">
              <Stars rating={t.rating} />
              <p className="text-lg italic text-on-surface-variant font-medium leading-relaxed">
                "{t.quote}"
              </p>
              <div>
                <h4 className="font-bold text-on-surface">{t.name}</h4>
                <p className="text-xs uppercase tracking-widest text-secondary">
                  {t.role}, {t.company}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale">
          {logos.map((logo) => (
            <span key={logo} className="text-xl font-black tracking-tighter text-on-surface">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
```

### B6 — Crear `src/components/ui/CtaSection.tsx`

Extraído de `services_code.html` (líneas 286–298).

```tsx
import type { TemplateConfig } from '../../types/template'

interface Props {
  config: Pick<TemplateConfig, 'cta'>
}

export function CtaSection({ config }: Props) {
  const { cta } = config

  return (
    <section className="max-w-4xl mx-auto px-6 mt-32 mb-32 text-center">
      <div className="bg-on-surface rounded-5xl p-16 relative overflow-hidden">
        {/* Destellos de fondo */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-primary-container/10 rounded-full blur-3xl" />

        <span className="relative z-10 text-[0.6875rem] font-bold uppercase tracking-[0.2em] text-secondary-container mb-4 block">
          {cta.badge}
        </span>
        <h2 className="relative z-10 text-4xl font-bold text-white tracking-tight mb-6 font-display">
          {cta.title}
        </h2>
        <p className="relative z-10 text-secondary mb-10 text-lg max-w-lg mx-auto">
          {cta.description}
        </p>
        <div className="relative z-10 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={cta.primaryHref}
            className="px-10 py-4 bg-white text-on-surface rounded-xl font-bold hover:scale-105 transition-transform text-center"
          >
            {cta.primary}
          </a>
          <a
            href={cta.secondaryHref}
            className="px-10 py-4 border border-white/20 text-white rounded-xl font-bold hover:bg-white/5 transition-colors text-center"
          >
            {cta.secondary}
          </a>
        </div>
      </div>
    </section>
  )
}
```

**Validación B:** ejecutar `npm run build`. Sin errores de TypeScript ni imports rotos.

---

## Fase C — Router y composición de páginas

### C1 — Actualizar `src/App.tsx`

```tsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { contentServicios } from './data/content-servicios'
import { contentProductos } from './data/content-productos'
import { TemplatePage } from './pages/TemplatePage'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/servicios" replace />} />
        <Route
          path="/servicios"
          element={<TemplatePage config={contentServicios} />}
        />
        <Route
          path="/productos"
          element={<TemplatePage config={contentProductos} />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
```

### C2 — Crear `src/pages/TemplatePage.tsx`

Compone todos los componentes. Inyecta `data-theme` en el contenedor raíz.

```tsx
import type { TemplateConfig } from '../types/template'
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { HeroAsymmetric } from '../components/ui/HeroAsymmetric'
import { BentoGrid } from '../components/ui/BentoGrid'
import { TestimonialsSection } from '../components/ui/TestimonialsSection'
import { CtaSection } from '../components/ui/CtaSection'

interface Props {
  config: TemplateConfig
}

export function TemplatePage({ config }: Props) {
  return (
    <div data-theme={config.theme === 'productos' ? 'productos' : undefined}>
      <Navbar config={config} />
      <main>
        <HeroAsymmetric config={config} />
        <BentoGrid config={config} />
        <TestimonialsSection config={config} />
        <CtaSection config={config} />
      </main>
      <Footer config={config} />
    </div>
  )
}
```

Nota: `data-theme` se omite en el tema servicios porque `:root` ya aplica por defecto.

### C3 — Actualizar `src/main.tsx`

```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
```

### C4 — Crear `vercel.json` en la raíz del repo

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### C5 — Actualizar `index.html`

Reemplazar el `<head>` generado por Vite con:

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- DEMO BASE: no indexar. Eliminar esta línea en el fork del cliente antes del go-live. -->
    <meta name="robots" content="noindex, nofollow" />

    <title>Demo de template — escalatunegocioconia.com</title>
    <meta name="description" content="Demo interactivo de template web profesional." />

    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

**Validación C:** ejecutar `npm run dev`. Verificar manualmente que `/servicios` muestra branding azul y `/productos` muestra branding verde. Si el tema no cambia, revisar que el selector CSS `[data-theme='productos']` esté en `tokens.css` y que `data-theme` se aplique en el `div` raíz de `TemplatePage.tsx`.

---

## Fase D — Archivos de soporte al cliente

### D1 — Crear `public/robots.txt`

```
# Demo base — no indexar
User-agent: *
Disallow: /
```

### D2 — Crear `public/docs/robots-produccion.txt`

```
# Copiar este archivo como public/robots.txt antes del go-live
User-agent: *
Allow: /
Sitemap: https://tusitio.com/sitemap.xml
```

### D3 — Crear `README.md` en la raíz del repo

```markdown
# Template web profesional

Demo en vivo: https://template-pyme.escalatunegocioconia.com

---

## Cómo personalizar tu sitio

### 1. Forkeá este repo en GitHub

Usá el botón "Fork" en GitHub. Tu fork es tuyo y está desconectado de este repo base.

### 2. Editá `src/data/site-config.ts`

Es el único archivo que necesitás editar. Tiene comentarios en cada campo explicando qué poner.

Elegí tu tema de colores:
- `theme: 'servicios'` → azul (estudios, consultoras, servicios profesionales)
- `theme: 'productos'` → verde (alimentos, comercios, gastronomía)

### 3. Conectá el fork a Vercel

1. Andá a vercel.com → "New Project" → importá tu fork de GitHub.
2. Vercel detecta Vite automáticamente. No hace falta configurar nada.
3. El deploy tarda menos de 2 minutos.

### 4. Conectá tu dominio

En el dashboard de Vercel → Settings → Domains → agregá tu dominio.

### 5. Antes de publicar (obligatorio)

⚠️ Estos dos pasos son obligatorios. Sin ellos, Google no va a indexar tu sitio.

**Paso 5a:** reemplazá `public/robots.txt` con el contenido de `public/docs/robots-produccion.txt`.

```bash
cp public/docs/robots-produccion.txt public/robots.txt
```

**Paso 5b:** eliminá esta línea de `index.html`:

```html
<meta name="robots" content="noindex, nofollow" />
```

Después de esto, hacé push a main y tu sitio quedará indexable por Google.

---

## Stack

Vite · React · TypeScript · Tailwind CSS

## Soporte

Si necesitás ayuda con la personalización o querés agregar funcionalidades (chatbot, formulario, catálogo de productos), escribí a contacto@escalatunegocioconia.com
```

---

## Fase E — Deploy

### E1 — Crear proyecto Vercel

1. Ir al dashboard de Vercel.
2. "New Project" → importar el repo `template-pyme`.
3. Framework preset: **Vite**.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. No agregar variables de entorno.
7. Asignar dominio: `template-pyme.escalatunegocioconia.com`.

### E2 — Verificar post-deploy

Confirmar manualmente que estas URLs responden correctamente:

- `https://template-pyme.escalatunegocioconia.com/` → redirige a `/servicios`
- `https://template-pyme.escalatunegocioconia.com/servicios` → branding azul, contenido Pérez & Asociados
- `https://template-pyme.escalatunegocioconia.com/productos` → branding verde, contenido La Miga

---

## Fase F — Registro en el catálogo del repo padre

**Advertencia:** esta fase modifica el repo padre (`escalatunegocioconia.com`). Ejecutar `npm run build` del repo padre al finalizar.

### F1 — Leer `src/data/landing-templates.ts` antes de modificar

El agente debe leer el archivo completo, identificar la interfaz existente y replicarla exactamente. No asumir la estructura; leerla.

### F2 — Agregar dos entradas al array existente

Agregar al final del array, sin modificar entradas existentes:

```ts
{
  slug: 'template-pyme-servicios',
  title: 'Sitio profesional — servicios',
  description: 'Template editorial para estudios, consultoras y servicios profesionales. Branding azul, diseño editorial.',
  tags: ['servicios', 'b2b', 'editorial', 'estudio contable'],
  demoUrl: '/servicios',
},
{
  slug: 'template-pyme-productos',
  title: 'Sitio profesional — gastronomía',
  description: 'Template cálido para panaderías, viandas y negocios de alimentos. Branding verde, tipografía orgánica.',
  tags: ['productos', 'gastronomía', 'alimentos', 'panadería'],
  demoUrl: '/productos',
},
```

### F3 — Ejecutar build del repo padre

```bash
wsl npm run build
```

Si hay error de TypeScript en `landing-templates.ts`, significa que los campos agregados no coinciden con la interfaz existente. Corregir los campos, no la interfaz.

---

## Checklist de validación final

| Ítem | Resultado esperado |
|---|---|
| `/servicios` carga con branding azul | ✅ |
| `/productos` carga con branding verde | ✅ |
| `/` redirige a `/servicios` | ✅ |
| Fuente en `/servicios` es Inter | ✅ |
| Fuente en `/productos` es Outfit | ✅ |
| `robots.txt` tiene `Disallow: /` en demo base | ✅ |
| `index.html` tiene `noindex, nofollow` en demo base | ✅ |
| `wsl npm run build` del repo padre sin errores | ✅ |
| Dos nuevas tarjetas visibles en catálogo del sitio principal | ✅ |
| `src/data/site-config.ts` tiene comentarios en español | ✅ |
| `README.md` incluye paso 5a y 5b resaltados | ✅ |
```
