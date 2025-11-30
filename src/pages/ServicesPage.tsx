import Services from '@/components/sections/Services'
import CTA from '@/components/sections/CTA'
import { useSEO } from '@/hooks/useSEO'

export default function ServicesPage() {
  useSEO({
    title: 'Služby | Jabcore - Webový vývoj, mobilní aplikace, AI řešení',
    description: 'Nabízíme kompletní služby webového vývoje, tvorbu mobilních aplikací, AI integrace, cloud řešení a UX/UI design. Profesionální přístup a moderní technologie.',
    keywords: 'webový vývoj, mobilní aplikace, AI integrace, cloud řešení, UX design, UI design, React, TypeScript',
    url: 'https://jabcore.cz/services',
  })

  return (
    <div className="pt-20">
      <Services />
      <CTA variant="services" />
    </div>
  )
}
