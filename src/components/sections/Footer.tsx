import { GithubLogo, LinkedinLogo, TwitterLogo, InstagramLogo, Code, EnvelopeSimple, Phone } from '@phosphor-icons/react'
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

  const contactInfo = [
    {
      icon: EnvelopeSimple,
      label: 'General Inquiries',
      value: 'info@jabcore.cz',
      href: 'mailto:info@jabcore.cz',
    },
    {
      icon: EnvelopeSimple,
      label: 'Development Team',
      value: 'dev@jabcore.cz',
      href: 'mailto:dev@jabcore.cz',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+420 792 219 454',
      href: 'tel:+420792219454',
    },
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
                  to="/products"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/stack"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Stack
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
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <li key={index}>
                    <a
                      href={info.href}
                      className="flex items-start gap-2 text-muted-foreground hover:text-foreground transition-colors group"
                    >
                      <Icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" weight="bold" />
                      <div className="flex flex-col">
                        <span className="text-xs text-muted-foreground/80 uppercase tracking-wide">
                          {info.label}
                        </span>
                        <span className="font-medium">
                          {info.value}
                        </span>
                      </div>
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-muted-foreground">
          <p>© {currentYear} Jabcore. All rights reserved. Engineered with precision and passion.</p>
        </div>
      </div>
    </footer>
  )
}
