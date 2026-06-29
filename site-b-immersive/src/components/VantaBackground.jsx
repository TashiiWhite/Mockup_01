import { useEffect, useRef, useState } from 'react'

/**
 * Animated WebGL fog background (THREE.js + VANTA), used only on the hero.
 *
 * Performance / a11y guards (Cuban + Greiner notes):
 *  - Skipped entirely on small screens (<= 768px).
 *  - Skipped under prefers-reduced-motion.
 *  - THREE + VANTA are dynamically imported, so the heavy WebGL code is split
 *    out of the main bundle and only fetched when actually needed.
 *  - A CSS gradient (rendered by the parent) always sits underneath as the
 *    fallback, so the hero looks finished even if WebGL never initializes.
 */
export default function VantaBackground() {
  const ref = useRef(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isMobile = window.matchMedia('(max-width: 768px)').matches
    if (reduced || isMobile) return

    let effect
    let cancelled = false

    ;(async () => {
      try {
        const THREE = await import('three')
        const FOG = (await import('vanta/dist/vanta.fog.min')).default
        if (cancelled || !ref.current) return

        effect = FOG({
          el: ref.current,
          THREE,
          mouseControls: true,
          touchControls: false,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          highlightColor: 0xc9a35c, // gold
          midtoneColor: 0x4a3c20, // deep bronze
          lowlightColor: 0x141417, // graphite
          baseColor: 0x0b0b0d, // obsidian
          blurFactor: 0.62,
          speed: 1.1,
          zoom: 0.9,
        })
        if (!cancelled) setActive(true)
      } catch (err) {
        // Fail silently — the gradient fallback remains visible.
        console.warn('VANTA hero background unavailable:', err)
      }
    })()

    return () => {
      cancelled = true
      if (effect) effect.destroy()
    }
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`absolute inset-0 transition-opacity duration-1000 ${active ? 'opacity-100' : 'opacity-0'}`}
    />
  )
}
