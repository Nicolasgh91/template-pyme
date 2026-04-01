import type { TemplateConfig } from '../types/template'

interface Props {
  config: TemplateConfig
}

/** Stub visual: sustituir por secciones del plan técnico (Navbar, Hero, Bento, etc.). */
export function TemplatePage({ config }: Props) {
  return (
    <div data-theme={config.theme === 'productos' ? 'productos' : undefined}>
      <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
        <h1 style={{ marginTop: 0 }}>{config.label}</h1>
        <p style={{ opacity: 0.8 }}>
          Placeholder — implementar UI según{' '}
          <code>plan_implementacion/tareas-tecnicas-template-pymes.md</code>.
        </p>
      </main>
    </div>
  )
}
