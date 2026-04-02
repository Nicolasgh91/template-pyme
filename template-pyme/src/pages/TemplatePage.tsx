import { useEffect } from 'react'
import type { TemplateConfig } from '../types/template'
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { HeroAsymmetric } from '../components/ui/HeroAsymmetric'
import { BentoGrid } from '../components/ui/BentoGrid'
import { TestimonialsSection } from '../components/ui/TestimonialsSection'
import { CtaSection } from '../components/ui/CtaSection'

interface Props {
  config: TemplateConfig
}

const PAGE_TITLE: Record<TemplateConfig['theme'], string> = {
  servicios: 'Plantilla empresa de servicios',
  productos: 'Plantilla home oferta de productos',
}

export function TemplatePage({ config }: Props) {
  useEffect(() => {
    document.title = PAGE_TITLE[config.theme]
  }, [config.theme])

  return (
    <div data-theme={config.theme === 'productos' ? 'productos' : undefined}>
      <Navbar config={config} />
      <main>
        <HeroAsymmetric config={config} />
        <BentoGrid config={config} />
        <TestimonialsSection config={config} />
        <CtaSection config={config} />
      </main>
      <Footer config={config} />
    </div>
  )
}
