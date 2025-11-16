import { Button } from '@/components/ui/button'
import { Moon, Sun, GithubLogo, LinkedinLogo, TwitterLogo, InstagramLogo } from '@phosphor-icons/react'

interface FooterProps {
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

export default function Footer({ theme, onToggleTheme }: FooterProps) {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const socialLinks = [
    { icon: GithubLogo, label: 'GitHub', href: '#' },
    { icon: LinkedinLogo, label: 'LinkedIn', href: '#' },
    { icon: TwitterLogo, label: 'Twitter', href: '#' },
    { icon: InstagramLogo, label: 'Instagram', href: '#' },
  ]

  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Jabcore
            </h3>
            <p className="text-muted-foreground mb-4">
              The core of your new app. Building world-class digital products since day one.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                  >
                    <Icon className="w-5 h-5 text-primary" weight="fill" />
                  </a>
                )
              })}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('#services')}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#studio')}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Studio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#about')}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Theme</h4>
            <div className="flex items-center gap-3">
              <Button
                onClick={onToggleTheme}
                variant="outline"
                size="lg"
                className="gap-2"
              >
                {theme === 'light' ? (
                  <>
                    <Moon className="h-5 w-5" />
                    Dark Mode
                  </>
                ) : (
                  <>
                    <Sun className="h-5 w-5" />
                    Light Mode
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-muted-foreground">
          <p>© {currentYear} Jabcore. All rights reserved. Made with precision by Jabcore.</p>
        </div>
      </div>
    </footer>
  )
}
