Perfecto. Con esto tengo todo para cerrar el plan completo. No hay más ambigüedades.

---

## Plan definitivo — subproyecto Template Pymes

### Decisiones bloqueadas

| Decisión | Valor |
|---|---|
| Infraestructura | Un proyecto Vercel, un subdominio, dos rutas SPA |
| Subdominio | `template-pyme.escalatunegocioconia.com` |
| Rutas del demo | `/servicios` (estudio contable) · `/productos` (panadería/viandas) |
| Tarjetas en catálogo | Dos entradas en `landing-templates.ts` del repo padre |
| Branding servicios | Azul · deep-sea gradient (prototipo original intacto) |
| Branding productos | Verde esmeralda · tipografía más cálida · sin gradient técnico |

---

### Tokens CSS — dos temas en un mismo repo

El repo tiene un único `src/styles/tokens.css` con dos conjuntos de variables bajo selectores de ruta. No hay duplicación de componentes; cada componente lee variables, no valores hardcodeados.

```css
/* Tema base — servicios (azul técnico, prototipo original) */
:root {
  --color-primary: #0058bc;
  --color-primary-container: #0070eb;
  --color-gradient: linear-gradient(135deg, #0058bc, #0070eb);
  --color-surface: #f9f9fb;
  --color-on-surface: #1a1c1d;
  --font-display: 'Inter Variable', sans-serif;
}

/* Tema productos — gastronomía (verde esmeralda, cálido) */
[data-theme="productos"] {
  --color-primary: #059669;
  --color-primary-container: #10b981;
  --color-gradient: linear-gradient(135deg, #065f46, #059669);
  --color-surface: #f9fafb;
  --color-on-surface: #1c1917;
  --font-display: 'Outfit Variable', sans-serif;
}
```

`App.tsx` aplica `data-theme="productos"` al `<div>` raíz según la ruta activa. Los componentes no saben nada del tema; solo consumen variables CSS.

---

### Estructura del repo

```
template-pyme/                ← repo nuevo desde cero (no fork), nombre en GitHub: template-pyme
├── public/
│   ├── robots.txt            ← Disallow: / (demo base)
│   └── docs/
│       └── robots-produccion.txt  ← listo para copiar en fork de cliente
├── src/
│   ├── styles/
│   │   └── tokens.css        ← dos temas bajo :root y [data-theme="productos"]
│   ├── data/
│   │   ├── content-servicios.ts   ← "Pérez & Asociados Contadores"
│   │   ├── content-productos.ts   ← "La Miga — panadería artesanal"
│   │   └── site-config.ts         ← copia que el cliente edita (fork)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   └── ui/
│   │       ├── HeroAsymmetric.tsx
│   │       ├── BentoGrid.tsx
│   │       ├── FeatureCard.tsx
│   │       ├── TestimonialCard.tsx
│   │       ├── LogoStrip.tsx
│   │       └── CtaSection.tsx
│   ├── App.tsx               ← router + inyección de data-theme
│   └── main.tsx
├── index.html                ← noindex, nofollow (demo base)
├── vercel.json               ← rewrite "/(.*)" → /index.html
├── vite.config.ts
├── package.json
└── README.md                 ← guía de personalización en español
```

---

### Jerarquía de ejecución

**1 — Schema**

`TemplateConfig` es el contrato único. Ambos archivos de contenido lo implementan. El cliente fork edita solo `site-config.ts`, que es una copia de la variante elegida.

```ts
interface TemplateConfig {
  theme: 'servicios' | 'productos'       // controla data-theme
  business: { name, tagline, whatsapp, email, address }
  hero: { badge, title, titleAccent, description, cta1, cta2, image }
  features: Array<{ icon, tag, title, description, bullets?, cta? }>
  testimonials: Array<{ quote, name, role, company, rating }>
  logos: string[]
  cta: { title, description, primary, secondary }
}
```

**2 — Flow logic**

`App.tsx` lee la ruta activa con `react-router-dom`, selecciona el archivo de contenido correspondiente e inyecta `data-theme` en el contenedor raíz. La resolución ocurre aquí y solo aquí.

```
/servicios → content-servicios.ts → data-theme="servicios" (default :root)
/productos → content-productos.ts → data-theme="productos"
```

Fallback: ruta `/` redirige a `/servicios`.

**3 — UI**

Componentes sin lógica de negocio. Reciben subconjuntos tipados de `TemplateConfig`. Leen variables CSS del tema activo automáticamente.

---

### Catálogo de landings — entradas en `landing-templates.ts`

Dos entradas nuevas. El agente debe leer el archivo existente antes de escribir y replicar la interfaz exacta. Las URLs apuntan a rutas del mismo subdominio.

```ts
{
  slug: 'template-pyme-servicios',
  title: 'Sitio profesional — servicios',
  description: 'Template editorial para estudios, consultoras y servicios B2B.',
  tags: ['servicios', 'b2b', 'editorial', 'azul'],
  demoUrl: '/servicios',
},
{
  slug: 'template-pyme-productos',
  title: 'Sitio profesional — gastronomía',
  description: 'Template cálido para panaderías, viandas y negocios de alimentos.',
  tags: ['productos', 'gastronomía', 'verde', 'alimentos'],
  demoUrl: '/productos',
},
```

---

### Contenido ficticio por variante

**Variante servicios — "Pérez & Asociados"**

Estudio contable de GBA. Mantiene branding azul del prototipo original. Secciones: hero asimétrico con claim de confianza → bento de 4 servicios (impuestos, sueldos, auditoría, asesoría) → testimoniales de 3 clientes pyme → logos de certificaciones → CTA dark.

**Variante productos — "La Miga"**

Panadería artesanal de barrio. Branding verde esmeralda, tipografía Outfit (más cálida que Inter). Secciones: hero asimétrico con foto de producto → bento de 4 categorías (pan artesanal, facturas, viandas semanales, pedidos por encargo) → testimoniales de clientes → logos de certificaciones locales → CTA en verde.

---

### Flujo plug & play del cliente

```
1. Fork del repo en GitHub
2. Abrir src/data/site-config.ts
3. Completar: nombre, textos, WhatsApp, email, imágenes (URLs Unsplash o propias)
4. Elegir variante: theme: 'servicios' | 'productos'
5. Push a main → Vercel detecta → deploy automático
6. Antes del go-live: copiar public/docs/robots-produccion.txt → public/robots.txt
                      y eliminar <meta name="robots" noindex> de index.html
```

El `README.md` del repo enumera estos pasos con el paso 6 resaltado como **obligatorio antes de publicar**.

---

### Impacto sobre proyectos existentes

| Proyecto | Impacto | Mitigación |
|---|---|---|
| Repo padre (Astro) | Solo se agregan 2 entradas a `landing-templates.ts` | Agente lee el archivo antes de escribir; build del padre se valida post-adición |
| Demo existente (subdominio actual) | Cero — repo independiente | No hay fork ni dependencia del repo de demos |
| Nuevo repo | Aislado por diseño | Sin dependencias cruzadas con ningún proyecto |

---

### Roadmap actualizado

```
✅ Prototipos HTML + design system
✅ Plan auditado

⬜ A1 — Schema: TemplateConfig + content-servicios.ts + content-productos.ts
⬜ A2 — tokens.css con dos temas (:root servicios / [data-theme] productos)
⬜ B  — Componentes UI (extraídos del prototipo, consumen variables CSS)
⬜ C  — App.tsx: router + inyección data-theme + vercel.json
⬜ D  — Contenido: "Pérez & Asociados" + "La Miga panadería"
⬜ E1 — Deploy: nuevo proyecto Vercel → template-pyme.escalatunegocioconia.com
⬜ E2 — Catálogo padre: 2 entradas en landing-templates.ts + build validation
⬜ E3 — README.md con guía plug & play y paso 6 de go-live
```
