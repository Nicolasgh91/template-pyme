/**
 * Contrato para el fork asistido: copiá la estructura de `content-servicios` o
 * `content-productos` y reemplazá los imports en `App.tsx` por este default export
 * con una sola ruta (ver README del repo).
 */
import type { TemplateConfig } from '../types/template'

const siteConfig: TemplateConfig = {
  theme: 'servicios',
  label: 'Tu empresa',
}

export default siteConfig
