import type { TemplateConfig } from '../../types/template'

interface Props {
  config: Pick<TemplateConfig, 'hero' | 'business'>
}

export function HeroAsymmetric({ config }: Props) {
  const { hero } = config

  return (
    <header className="max-w-7xl mx-auto px-6 pt-32 pb-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
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
