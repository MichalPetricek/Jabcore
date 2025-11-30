import Hero from '@/components/sections/Hero'
import CollaborationProcess from '@/components/sections/CollaborationProcess'
import ServicesPreview from '@/components/sections/ServicesPreview'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import TechStack from '@/components/sections/TechStack'
import CTA from '@/components/sections/CTA'
import { useSEO } from '@/hooks/useSEO'

export default function HomePage() {
  useSEO({ page: 'home', url: 'https://jabcore.cz/' })

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
