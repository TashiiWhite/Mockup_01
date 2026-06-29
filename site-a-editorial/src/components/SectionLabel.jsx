/**
 * Consistent numbered section label — the brand's editorial "index" device.
 * Used on every section so the page reads as one designed system rather than
 * a stack of independent blocks.
 */
export function SectionLabel({ index, children, center = false, dark = false }) {
  return (
    <span className={`eyebrow-line ${center ? 'justify-center' : ''} ${dark ? '!text-champagne before:bg-gold/60' : ''}`}>
      <span className={`tabular-nums text-sm font-bold ${dark ? 'text-gold' : 'text-bronze'}`}>{index}</span>
      <span className={dark ? 'text-gold/50' : 'text-gold/40'}>/</span>
      {children}
    </span>
  )
}
