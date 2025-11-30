import About from '@/components/sections/About'
import { useSEO } from '@/hooks/useSEO'

export default function AboutPage() {
  useSEO({
    title: 'O nás | Jabcore - Náš tým a příběh',
    description: 'Poznejte tým Jabcore. Jsme skupina nadšených vývojářů a designérů, kteří vytváří moderní digitální řešení pro firmy všech velikostí.',
    keywords: 'o nás, tým, Jabcore, vývojáři, designéři, příběh firmy',
    url: 'https://jabcore.cz/about',
  })

  return (
    <div className="pt-20">
      <About />
    </div>
  )
}
