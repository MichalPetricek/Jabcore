import About from '@/components/sections/About'
import { useSEO } from '@/hooks/useSEO'

export default function AboutPage() {
  useSEO({ page: 'about', url: 'https://jabcore.cz/about' })

  return (
    <div className="pt-20">
      <About />
    </div>
  )
}
