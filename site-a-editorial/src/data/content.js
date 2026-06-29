// Shared, realistic copy for Lustre Detailing (placeholder brand).
// No lorem ipsum — every line is written to fit a mobile detailing /
// exterior paint-correction business.

export const brand = {
  name: 'Lustre',
  full: 'Lustre Detailing',
  tagline: 'Mobile detailing & paint correction',
  phone: '(555) 248-7390',
  phoneHref: 'tel:+15552487390',
  email: 'hello@lustredetailing.ca',
  area: 'Serving the metro area, on-site',
}

// ── Online booking ──────────────────────────────────────────────────────────
// Paste the client's Square Appointments booking-page URL between the quotes,
// e.g. 'https://book.squareup.com/appointments/xxxx/location/yyyy'.
// While this is empty, every "Book an appointment" button smooth-scrolls to the
// on-page contact form (mockup behavior). Once a URL is set, those same buttons
// open the live Square booking page in a new tab — no other code change needed.
export const bookingUrl = ''

export const nav = [
  { label: 'Services', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'How it works', href: '#how' },
  { label: 'FAQ', href: '#faq' },
]

export const hero = {
  eyebrow: 'On-site detailing & paint correction',
  // Split for a word-by-word reveal; last word is the gold emphasis.
  headlineLead: 'Showroom shine, delivered to your',
  headlineEmphasis: 'door.',
  sub: 'We bring multi-stage paint correction and concours-level detailing to your driveway — so your day never stops for it.',
  primaryCta: 'Book an appointment',
  secondaryCta: 'See packages',
  stats: [
    { value: 1200, suffix: '+', label: 'Vehicles restored' },
    { value: 4.9, decimals: 1, suffix: '★', label: 'Average rating' },
    { value: 100, suffix: '%', label: 'Mobile — we come to you' },
  ],
}

export const socialProof = {
  label: 'Trusted by owners of',
  logos: ['Porsche', 'BMW', 'Audi', 'Mercedes-Benz', 'Tesla', 'Lexus'],
}

export const features = {
  eyebrow: 'Why Lustre',
  title: 'Care your car can actually see.',
  sub: 'Every package is built around one outcome: paintwork that looks deeper, cleaner, and protected for the long run.',
  items: [
    {
      icon: 'sparkle',
      title: 'Multi-stage paint correction',
      desc: 'We machine-polish away swirls, scratches, and oxidation to bring back true depth and gloss.',
    },
    {
      icon: 'shield',
      title: 'Long-lasting ceramic protection',
      desc: 'Optional ceramic coatings lock in the finish and make every future wash effortless.',
    },
    {
      icon: 'home',
      title: 'Fully mobile service',
      desc: 'We arrive fully self-sufficient with our own power and water — your driveway is our studio.',
    },
    {
      icon: 'leaf',
      title: 'Interior renewal',
      desc: 'Deep extraction, leather conditioning, and a careful detail of every surface inside.',
    },
    {
      icon: 'clock',
      title: 'Scheduling that respects your time',
      desc: 'Pick a window that works, get reminders, and reclaim the half-day you used to lose.',
    },
    {
      icon: 'badge',
      title: 'Backed by a finish guarantee',
      desc: "If a detail isn't right, we make it right before we leave. No exceptions.",
    },
  ],
}

export const beforeAfter = {
  eyebrow: 'See the difference',
  title: 'The proof is in the paint.',
  sub: 'Drag the handle. The left is dull, swirled, oxidized clear coat — the right is the same panel after a Lustre multi-stage correction.',
  // A single high-res paint shot; the "before" layer is rendered with a
  // desaturating filter so the contrast reads clearly without two assets.
  image:
    'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1400&q=80',
  alt: 'Close detail of a sports car body panel with a deep, glossy finish',
  beforeLabel: 'Before',
  afterLabel: 'After',
}

export const testimonials = {
  eyebrow: 'In their words',
  title: 'The kind of finish people notice.',
  items: [
    {
      quote:
        'My 911 had years of swirl marks from a previous shop. After their two-stage correction the paint looks wet — and they did it in my own garage on a Saturday morning.',
      name: 'Daniel R.',
      role: 'Porsche 911 owner',
      avatar: 'https://i.pravatar.cc/160?img=12',
    },
    {
      quote:
        'Booked the Signature package before selling my Model 3. The detailer was meticulous and the car photographed like new. It sold the same week, over asking.',
      name: 'Priya M.',
      role: 'Tesla Model 3 owner',
      avatar: 'https://i.pravatar.cc/160?img=45',
    },
    {
      quote:
        'I travel constantly and never had time for a detailer. They come to the office, I hand over the keys, and by lunch my X5 looks better than the showroom.',
      name: 'Marcus T.',
      role: 'BMW X5 owner',
      avatar: 'https://i.pravatar.cc/160?img=33',
    },
  ],
}

export const pricing = {
  eyebrow: 'Packages',
  title: 'Choose the level of shine.',
  sub: 'Prices shown are for a standard sedan. Larger vehicles and add-ons are quoted at booking.',
  note: 'Sedan pricing • SUV / truck tiers and add-ons available • Square & e-transfer accepted',
  tiers: [
    {
      name: 'Essential',
      price: '149',
      cadence: 'from / visit',
      blurb: 'A thorough refresh, inside and out.',
      features: [
        'Hand wash & wheel deep-clean',
        'Interior vacuum & wipe-down',
        'Streak-free glass',
        'Tire dressing & exterior finish',
      ],
      cta: 'Book Essential',
      featured: false,
    },
    {
      name: 'Signature',
      price: '399',
      cadence: 'from / visit',
      blurb: 'Our most popular — correction plus protection.',
      features: [
        'Everything in Essential',
        'Single-stage paint correction',
        '6-month sealant protection',
        'Interior deep clean & conditioning',
        'Engine bay tidy',
      ],
      cta: 'Book Signature',
      featured: true,
    },
    {
      name: 'Concours',
      price: '749',
      cadence: 'from / visit',
      blurb: 'Show-ready, with ceramic coating.',
      features: [
        'Everything in Signature',
        'Multi-stage paint correction',
        '2-year ceramic coating',
        'Leather & trim restoration',
        'Final inspection walkthrough',
      ],
      cta: 'Book Concours',
      featured: false,
    },
  ],
}

export const howItWorks = {
  eyebrow: 'How it works',
  title: 'Three steps to a flawless finish.',
  steps: [
    {
      n: '01',
      title: 'Book online',
      desc: 'Pick your package, vehicle size, and a time window that fits your day.',
    },
    {
      n: '02',
      title: 'We come to you',
      desc: 'Our mobile studio arrives fully equipped — power, water, everything. You carry on.',
    },
    {
      n: '03',
      title: 'Drive away flawless',
      desc: 'We walk you through the finish and leave your vehicle looking its absolute best.',
    },
  ],
}

export const faq = {
  eyebrow: 'Good to know',
  title: 'Questions, answered.',
  items: [
    {
      q: 'How long does paint correction take?',
      a: 'A single-stage correction usually takes 3–5 hours; a full multi-stage correction on a sedan can run 6–9 hours. We confirm the exact window when you book based on your vehicle and its condition.',
    },
    {
      q: 'Do you really come to me?',
      a: 'Yes — we are fully mobile. We arrive self-sufficient with our own power and water supply, so all we need is reasonable access to your vehicle at home or work.',
    },
    {
      q: "What's the difference between detailing and paint correction?",
      a: 'Detailing cleans and protects what is already there. Paint correction goes further — we machine-polish the clear coat to permanently remove swirls, scratches, and oxidation, restoring depth and gloss.',
    },
    {
      q: 'How should I prepare my vehicle?',
      a: 'Just clear out personal items and make sure we can reach the car. There is no need to pre-wash — that is what we are there for.',
    },
    {
      q: 'Do you offer ceramic coating?',
      a: 'We do. Our Concours package includes a 2-year ceramic coating, and coatings can be added to other packages. Ceramic protection makes washing easier and keeps the finish looking new for longer.',
    },
    {
      q: 'How do I pay?',
      a: 'We currently accept Square (all major cards) and e-transfer. Payment plans are available on request for larger correction and coating jobs.',
    },
  ],
}

export const contact = {
  eyebrow: 'Get in touch',
  title: 'Ready when you are.',
  sub: 'Tell us about your vehicle and what you have in mind. We usually reply within a few hours.',
  success: "Thanks — we've got your message and will be in touch shortly.",
}

export const footer = {
  blurb: 'Mobile vehicle detailing and exterior paint correction, brought to your door.',
  columns: [
    {
      title: 'Services',
      links: ['Paint correction', 'Ceramic coating', 'Interior detailing', 'Maintenance washes'],
    },
    {
      title: 'Company',
      links: ['About', 'How it works', 'Reviews', 'Service area'],
    },
    {
      title: 'Contact',
      links: ['Book online', 'hello@lustredetailing.ca', '(555) 248-7390'],
    },
  ],
  social: ['Instagram', 'Facebook', 'TikTok', 'YouTube'],
}
