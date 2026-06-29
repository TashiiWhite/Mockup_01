/**
 * Consistent numbered section label — the brand's editorial "index" device.
 * Used on every section so the page reads as one designed system rather than
 * a stack of independent blocks.
 */
export function SectionLabel({ index, children, center = false }) {
  return (
    <span className={`eyebrow-line ${center ? 'justify-center' : ''}`}>
      <span className="tabular-nums text-sm font-bold text-gold">{index}</span>
      <span className="text-gold/40">/</span>
      {children}
    </span>
  )
}
