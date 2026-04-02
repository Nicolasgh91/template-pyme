import type { TemplateConfig } from '../../types/template'

interface Props {
  config: Pick<TemplateConfig, 'cta'>
}

export function CtaSection({ config }: Props) {
  const { cta } = config

  return (
    <section id="contacto" className="max-w-4xl mx-auto px-6 mt-32 mb-32 text-center">
      <div id="pedidos" className="bg-on-surface rounded-5xl p-16 relative overflow-hidden">
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
