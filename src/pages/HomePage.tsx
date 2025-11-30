import Hero from '@/components/sections/Hero'
import CollaborationProcess from '@/components/sections/CollaborationProcess'
import ServicesPreview from '@/components/sections/ServicesPreview'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import TechStack from '@/components/sections/TechStack'
import CTA from '@/components/sections/CTA'
import { useSEO } from '@/hooks/useSEO'

export default function HomePage() {
  useSEO({
    title: 'Jabcore | Profesionální webový vývoj a digitální řešení',
    description: 'Jabcore nabízí profesionální webový vývoj, moderní digitální řešení a konzultace. Specializujeme se na React, TypeScript a moderní technologie.',
    url: 'https://jabcore.cz/',
  })

  return (
    <div>
      <Hero />
      <ServicesPreview />
      <WhyChooseUs />
      <CollaborationProcess />
      <TechStack />
      <CTA />
    </div>
  )
}
