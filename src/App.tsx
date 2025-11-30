import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from '@/components/sections/Navigation'
import Footer from '@/components/sections/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import { Toaster } from '@/components/ui/sonner'
import HomePage from '@/pages/HomePage'
import ServicesPage from '@/pages/ServicesPage'
import ProductsPage from '@/pages/ProductsPage'
import StackPage from '@/pages/StackPage'
import AboutPage from '@/pages/AboutPage'
import ContactPage from '@/pages/ContactPage'

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
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-background text-foreground">
        <Navigation theme={theme} onToggleTheme={toggleTheme} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            {/* <Route path="/products" element={<ProductsPage />} /> */}
            <Route path="/stack" element={<StackPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer theme={theme} onToggleTheme={toggleTheme} />
        <Toaster position="bottom-right" />
      </div>
    </Router>
  )
}

export default App
