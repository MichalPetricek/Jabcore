import { Button } from '@/components/ui/button'
import { Moon, Sun, GithubLogo, LinkedinLogo, TwitterLogo, InstagramLogo, Code } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

interface FooterProps {
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

export default function Footer({ theme, onToggleTheme }: FooterProps) {
  const currentYear = new Date().getFullYear()

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
            <Link to="/" className="inline-flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Code className="w-6 h-6 text-primary-foreground" weight="bold" />
              </div>
              <span className="font-display text-2xl font-bold text-foreground">
                Jabcore
              </span>
            </Link>
            <p className="text-muted-foreground mb-4">
              Premium software development with AI integration. Building world-class digital products that transform businesses.
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
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/studio"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Studio
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
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
          <p>© {currentYear} Jabcore. All rights reserved. Engineered with precision and passion.</p>
        </div>
      </div>
    </footer>
  )
}
