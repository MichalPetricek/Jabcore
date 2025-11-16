import { useState, useEffect } from 'react'
import { Moon, Sun } from '@phosphor-icons/react'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Studio from '@/components/sections/Studio'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'
import Navigation from '@/components/sections/Navigation'
import { Toaster } from '@/components/ui/sonner'

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.classList.toggle('dark', savedTheme === 'dark')
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      const initialTheme = prefersDark ? 'dark' : 'light'
      setTheme(initialTheme)
      document.documentElement.classList.toggle('dark', prefersDark)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Services />
        <Studio />
        <About />
        <Contact />
      </main>
      <Footer theme={theme} onToggleTheme={toggleTheme} />
      <Toaster position="bottom-right" />
    </div>
  )
}

export default App
