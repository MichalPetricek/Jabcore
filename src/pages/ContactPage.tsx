import Contact from '@/components/sections/Contact'
import { useSEO } from '@/hooks/useSEO'

export default function ContactPage() {
  useSEO({ page: 'contact', url: 'https://jabcore.cz/contact' })

  return (
    <div className="pt-20">
      <Contact />
    </div>
  )
}
