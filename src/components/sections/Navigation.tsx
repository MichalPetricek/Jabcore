import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun, List, X, GithubLogo, LinkedinLogo, TwitterLogo, InstagramLogo, Code, Envelope } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ContactModal from '@/components/ContactModal'

interface NavigationProps {
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

export default function Navigation({ theme, onToggleTheme }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Products', href: '/products' },
    { label: 'Stack', href: '/stack' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  const socialLinks = [
    { icon: GithubLogo, label: 'GitHub', href: '#' },
    { icon: LinkedinLogo, label: 'LinkedIn', href: '#' },
    { icon: TwitterLogo, label: 'Twitter', href: '#' },
    { icon: InstagramLogo, label: 'Instagram', href: '#' },
  ]

  const isActive = (href: string) => location.pathname === href

  const handleContactClick = () => {
    setIsOpen(false)
    setIsContactOpen(true)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Code className="w-5 h-5 text-primary-foreground" weight="bold" />
            </div>
            <span className="text-xl font-display font-bold gradient-text">Jabcore</span>
          </Link>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <Link
                to={item.href}
                className={`font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-primary'
                    : 'text-foreground/80 hover:text-foreground'
                }`}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
          <div className="flex items-center gap-2">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={onToggleTheme}
                className="rounded-full"
              >
                {theme === 'light' ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )}
              </Button>
            </motion.div>
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <motion.div
                  key={social.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55 + index * 0.05 }}
                >
                  <a
                    href={social.href}
                    aria-label={social.label}
                    className="text-foreground/60 hover:text-primary transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                </motion.div>
              )
            })}
          </div>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggleTheme}
            className="rounded-full"
          >
            {theme === 'light' ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <AnimatePresence mode="wait">
                  {!isOpen ? (
                    <motion.div
                      key="menu"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <List className="h-6 w-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="close"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-6 w-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px]">
              <div className="flex flex-col h-full">
                <div className="flex-1 flex flex-col gap-2 mt-12">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                    >
                      <Link
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`block px-4 py-3 rounded-lg text-lg font-medium transition-all duration-200 ${
                          isActive(item.href)
                            ? 'bg-primary text-primary-foreground shadow-md'
                            : 'text-foreground hover:bg-accent/10 hover:text-accent'
                        }`}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                  className="space-y-4 pt-6 border-t border-border"
                >
                  <Button
                    onClick={handleContactClick}
                    className="w-full h-12 text-base bg-primary hover:bg-primary/90 text-primary-foreground"
                    size="lg"
                  >
                    <Envelope className="mr-2" weight="bold" />
                    Contact Us
                  </Button>
                  
                  <div className="px-4">
                    <p className="text-xs text-muted-foreground mb-3">
                      Follow us
                    </p>
                    <div className="flex gap-3">
                      {socialLinks.map((social, index) => {
                        const Icon = social.icon
                        return (
                          <motion.a
                            key={social.label}
                            href={social.href}
                            aria-label={social.label}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + index * 0.05, duration: 0.2 }}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            <Icon className="w-5 h-5" />
                          </motion.a>
                        )
                      })}
                    </div>
                  </div>
                </motion.div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
      <ContactModal open={isContactOpen} onOpenChange={setIsContactOpen} />
    </motion.header>
  )
}
