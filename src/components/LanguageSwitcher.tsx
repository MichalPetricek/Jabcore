import { Globe } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '@/components/ui/select'
import { useTranslation } from 'react-i18next'
import { languages } from '@/lib/i18n'

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const handleLanguageChange = (value: string) => {
    i18n.changeLanguage(value)
  }

  const currentLanguage = languages[i18n.language as keyof typeof languages]

  return (
    <Select value={i18n.language} onValueChange={handleLanguageChange}>
      <SelectTrigger className="w-auto h-10 px-3 gap-2 border-0 bg-transparent hover:bg-accent/50 rounded-full">
        <Globe className="h-5 w-5" />
        <span className="hidden sm:inline">{currentLanguage?.flag}</span>
      </SelectTrigger>
      <SelectContent>
        {Object.entries(languages).map(([code, { name, flag }]) => (
          <SelectItem key={code} value={code}>
            <span className="flex items-center gap-2">
              <span>{flag}</span>
              <span>{name}</span>
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
