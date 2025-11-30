import Contact from '@/components/sections/Contact'
import { useSEO } from '@/hooks/useSEO'

export default function ContactPage() {
  useSEO({
    title: 'Kontakt | Jabcore - Spojte se s námi',
    description: 'Kontaktujte nás pro nezávaznou konzultaci vašeho projektu. Rádi vám pomůžeme s webovým vývojem, mobilními aplikacemi nebo AI řešeními.',
    keywords: 'kontakt, konzultace, projekt, spolupráce, Jabcore',
    url: 'https://jabcore.cz/contact',
  })

  return (
    <div className="pt-20">
      <Contact />
    </div>
  )
}
