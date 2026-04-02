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
              key={`${link.label}-${link.href}`}
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
