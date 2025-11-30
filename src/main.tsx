import { createRoot } from 'react-dom/client'
import { ErrorBoundary } from "react-error-boundary";

import App from './App.tsx'
import { ErrorFallback } from './ErrorFallback.tsx'
import './lib/i18n'

import "./main.css"
import "./index.css"

// Přesměruj jabcore.eu na jabcore.cz
if (window.location.hostname === 'jabcore.eu' || window.location.hostname === 'www.jabcore.eu') {
  window.location.replace('https://jabcore.cz' + window.location.pathname + window.location.search + window.location.hash)
} else {
  createRoot(document.getElementById('root')!).render(
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <App />
    </ErrorBoundary>
  )
}
