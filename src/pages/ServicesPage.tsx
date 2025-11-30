import Services from '@/components/sections/Services'
import CTA from '@/components/sections/CTA'
import { useSEO } from '@/hooks/useSEO'

export default function ServicesPage() {
  useSEO({ page: 'services', url: 'https://jabcore.cz/services' })

  return (
    <div className="pt-20">
      <Services />
      <CTA variant="services" />
    </div>
  )
}
