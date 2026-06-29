// Lightweight inline SVG icons (stroke-based, inherit currentColor).
const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function Icon({ name, className = '' }) {
  const paths = {
    sparkle: (
      <>
        <path d="M12 3l1.6 4.6L18 9.2l-4.4 1.6L12 15l-1.6-4.2L6 9.2l4.4-1.6L12 3z" />
        <path d="M19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14z" />
      </>
    ),
    shield: <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />,
    home: (
      <>
        <path d="M4 11l8-7 8 7" />
        <path d="M6 10v9h12v-9" />
        <path d="M10 19v-5h4v5" />
      </>
    ),
    leaf: (
      <>
        <path d="M5 19c0-7 5-12 14-13 0 9-5 14-13 14a4 4 0 01-1-1z" />
        <path d="M9 15c2-3 4-4 7-5" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7.5V12l3 2" />
      </>
    ),
    badge: (
      <>
        <circle cx="12" cy="9" r="5.5" />
        <path d="M8.5 13.5L7 21l5-2.5L17 21l-1.5-7.5" />
      </>
    ),
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
    check: <path d="M5 12l4.5 4.5L19 7" />,
    plus: <path d="M12 5v14M5 12h14" />,
    quote: <path d="M9 7H5v6h4v-2H7a2 2 0 012-2V7zm10 0h-4v6h4v-2h-2a2 2 0 012-2V7z" />,
  }
  return (
    <svg {...base} className={className} aria-hidden="true">
      {paths[name] || null}
    </svg>
  )
}
