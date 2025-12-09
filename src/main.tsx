import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ErrorBoundary } from "react-error-boundary";

import App from './App.tsx'
import { ErrorFallback } from './ErrorFallback.tsx'
import './lib/i18n'
import { initEmailJS } from './lib/emailjs'

import "./main.css"
import "./index.css"

// Inicializace EmailJS
initEmailJS()

// Performance monitoring - report web vitals
const reportWebVitals = async () => {
  if (import.meta.env.PROD) {
    try {
      const { onCLS, onFCP, onLCP, onTTFB } = await import('web-vitals')
      onCLS(console.log)
      onFCP(console.log)
      onLCP(console.log)
      onTTFB(console.log)
    } catch {
      // web-vitals not available
    }
  }
}

// Přesměruj jabcore.eu na jabcore.cz
if (window.location.hostname === 'jabcore.eu' || window.location.hostname === 'www.jabcore.eu') {
  window.location.replace('https://jabcore.cz' + window.location.pathname + window.location.search + window.location.hash)
} else {
  const root = createRoot(document.getElementById('root')!)
  
  root.render(
    <StrictMode>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <App />
      </ErrorBoundary>
    </StrictMode>
  )

  // Report web vitals after render
  reportWebVitals()
}
