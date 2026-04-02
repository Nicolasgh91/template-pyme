import type { TemplateConfig } from '../../types/template'

interface Props {
  config: Pick<TemplateConfig, 'testimonialsTitle' | 'testimonials' | 'logos'>
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex text-primary mb-4">
      {Array.from({ length: rating }).map((_, i) => (
        <span key={i} aria-hidden="true">
          ★
        </span>
      ))}
    </div>
  )
}

export function TestimonialsSection({ config }: Props) {
  const { testimonialsTitle, testimonials, logos } = config

  return (
    <section id="nosotros" className="bg-surface-container-low py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold tracking-tight text-on-surface font-display">
            {testimonialsTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          {testimonials.map((t) => (
            <div key={`${t.name}-${t.company}`} className="space-y-6">
              <Stars rating={t.rating} />
              <p className="text-lg italic text-on-surface-variant font-medium leading-relaxed">
                &ldquo;{t.quote}&rdquo;
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
