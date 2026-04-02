import type { TemplateConfig, FeatureCard } from '../../types/template'

interface Props {
  config: Pick<TemplateConfig, 'sectionTitle' | 'sectionSubtitle' | 'features' | 'theme'>
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
        <span
          className={`text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-wider mb-6 inline-block bg-secondary-container ${tagColorClass(card.tagColor)}`}
        >
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
        <span
          className={`text-[10px] font-bold uppercase tracking-widest mb-3 block ${tagColorClass(card.tagColor)}`}
        >
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
  const { sectionTitle, sectionSubtitle, features, theme } = config
  const [f1, f2, f3, f4] = features
  const sectionId = theme === 'productos' ? 'catalogo' : 'servicios'

  return (
    <section id={sectionId} className="max-w-7xl mx-auto px-6 py-24">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-on-surface mb-4 font-display">
          {sectionTitle}
        </h2>
        <p className="text-lg text-secondary">{sectionSubtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <WideCard card={f1} />
        <NarrowCard card={f2} />

        <NarrowCard card={f3} />
        <WideCard card={f4} reverse />
      </div>
    </section>
  )
}
