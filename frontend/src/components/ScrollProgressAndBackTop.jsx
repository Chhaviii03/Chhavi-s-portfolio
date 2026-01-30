import { useEffect, useState } from 'react'

const SCROLL_THRESHOLD_PX = 300

export default function ScrollProgressAndBackTop() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showBackTop, setShowBackTop] = useState(false)

  useEffect(() => {
    const update = () => {
      const y = window.scrollY
      setShowBackTop(y > SCROLL_THRESHOLD_PX)
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const pct = docHeight > 0 ? Math.min(100, (y / docHeight) * 100) : 0
      setScrollProgress(pct)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Scroll progress bar — fixed top, high z-index, does not block navbar */}
      <div
        className="fixed top-0 left-0 right-0 h-0.5 z-[60] pointer-events-none"
        aria-hidden
      >
        <div
          className="h-full bg-pink-primary/80 transition-[width] duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Back to top — fixed bottom-right, appears after ~300px */}
      {showBackTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-[55] w-10 h-10 rounded-full border border-pink-primary/40 
                     bg-black-bg/90 backdrop-blur-sm flex items-center justify-center
                     hover:border-pink-primary/60 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-pink-primary/40"
          aria-label="Back to top"
        >
          <svg
            className="w-5 h-5 text-pink-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </>
  )
}
