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
              key={`${link.label}-${link.href}`}
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
