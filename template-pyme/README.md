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
