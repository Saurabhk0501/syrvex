const services = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
      </svg>
    ),
    title: 'Web Development',
    desc: 'High-performance websites & web apps built with Next.js, React, and modern stacks. Fast, SEO-ready, and pixel-perfect.',
    tags: ['Next.js', 'React', 'Node.js'],
    color: 'purple',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
        <line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    ),
    title: 'App Development',
    desc: 'Cross-platform mobile apps for iOS & Android. Smooth UX, real-time features, and scalable architecture.',
    tags: ['React Native', 'Flutter', 'Firebase'],
    color: 'teal',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 19l7-7 3 3-7 7-3-3z"/>
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
        <path d="M2 2l7.586 7.586"/>
        <circle cx="11" cy="11" r="2"/>
      </svg>
    ),
    title: 'UI / UX Design',
    desc: 'Intuitive interfaces and seamless user journeys. From wireframes to Figma prototypes — design that converts.',
    tags: ['Figma', 'Prototyping', 'Design Systems'],
    color: 'purple',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="23 7 16 12 23 17 23 7"/>
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
      </svg>
    ),
    title: 'VFX & 3D',
    desc: 'Jaw-dropping 3D visuals, product renders, motion graphics, and VFX compositing that make brands unforgettable.',
    tags: ['Blender', 'After Effects', 'Cinema 4D'],
    color: 'teal',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 8v4l3 3"/>
      </svg>
    ),
    title: 'AI Video & Reels',
    desc: 'Next-gen AI video generation, social media reels, and short-form content that drives engagement and virality.',
    tags: ['AI Video', 'Reels', 'CapCut Pro'],
    color: 'purple',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    title: 'Graphics & Branding',
    desc: 'Logo design, brand identity, social media creatives, and print materials — visual storytelling that sticks.',
    tags: ['Illustrator', 'Photoshop', 'Branding'],
    color: 'teal',
  },
]

const colorMap = {
  purple: {
    icon: 'text-brand-purple-light bg-brand-purple/10',
    tag: 'bg-brand-purple/10 text-brand-purple-pale',
    border: 'hover:border-brand-purple/40',
  },
  teal: {
    icon: 'text-brand-teal-light bg-brand-teal/10',
    tag: 'bg-brand-teal/10 text-brand-teal-light',
    border: 'hover:border-brand-teal/40',
  },
}

export default function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-eyebrow mb-4 inline-flex">What we do</span>
          <h2 className="section-heading mb-4">
            Every service, <span className="text-gradient">precision-crafted</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            From concept to deployment — we handle the entire digital stack so you can focus on what matters.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => {
            const c = colorMap[s.color]
            return (
              <div
                key={s.title}
                className={`card-dark group ${c.border}`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${c.icon}`}>
                  {s.icon}
                </div>
                <h3 className="text-base font-medium text-white mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map(t => (
                    <span key={t} className={`text-xs px-2.5 py-1 rounded-full font-mono ${c.tag}`}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
