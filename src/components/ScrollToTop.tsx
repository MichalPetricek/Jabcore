import { useEffect, memo } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = memo(function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Use requestAnimationFrame for smoother scroll
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'instant' })
    })
  }, [pathname])

  return null
})

export default ScrollToTop
