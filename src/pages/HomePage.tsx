import Hero from '@/components/sections/Hero'
import CollaborationProcess from '@/components/sections/CollaborationProcess'
import Services from '@/components/sections/Services'
import Studio from '@/components/sections/Studio'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import TechStack from '@/components/sections/TechStack'
import CTA from '@/components/sections/CTA'

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Services />
      <WhyChooseUs />
      <TechStack />
      <CollaborationProcess />
      <Studio />
      <CTA />
    </div>
  )
}
