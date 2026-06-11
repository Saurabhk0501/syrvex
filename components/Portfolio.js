'use client'
import { useState } from 'react'

const categories = ['All', 'Web', 'App', 'UI/UX', 'VFX & 3D', 'Branding']

const projects = [
  {
    title: 'FinTrack Dashboard',
    category: 'Web',
    tags: ['Next.js', 'Tailwind', 'Stripe'],
    desc: 'Real-time finance tracking SaaS for US-based startup. Custom charts, auth, and payment integration.',
    accent: '#534AB7',
    icon: '📊',
  },
  {
    title: 'MedLink Mobile App',
    category: 'App',
    tags: ['React Native', 'Firebase'],
    desc: 'Patient-doctor connect app with real-time chat, appointment booking, and push notifications.',
    accent: '#1D9E75',
    icon: '🏥',
  },
  {
    title: 'Luxe Brand Identity',
    category: 'Branding',
    tags: ['Illustrator', 'Brand System'],
    desc: 'Complete brand identity for a premium US fashion brand — logo, typography, and brand guidelines.',
    accent: '#D4537E',
    icon: '✦',
  },
  {
    title: 'Product 3D Showcase',
    category: 'VFX & 3D',
    tags: ['Blender', '3D Render', 'Motion'],
    desc: 'Photorealistic 3D product renders and animated showcase video for a tech hardware company.',
    accent: '#EF9F27',
    icon: '◈',
  },
  {
    title: 'Saas Landing Page',
    category: 'UI/UX',
    tags: ['Figma', 'Framer', 'Prototyping'],
    desc: 'High-converting landing page design for a B2B SaaS tool — A/B tested, 40% lift in signups.',
    accent: '#7F77DD',
    icon: '⬡',
  },
  {
    title: 'Ecom Mobile App',
    category: 'App',
    tags: ['Flutter', 'REST API', 'Animations'],
    desc: 'Feature-rich e-commerce app with smooth micro-animations, wishlist, and one-tap checkout.',
    accent: '#5DCAA5',
    icon: '🛍',
  },
]

export default function Portfolio() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <section id="portfolio" className="py-24 bg-brand-dark-2">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-eyebrow mb-4 inline-flex">Our work</span>
          <h2 className="section-heading mb-4">
            Built with <span className="text-gradient">precision</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            A selection of projects we've crafted for clients across the US and globally.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`text-xs px-4 py-2 rounded-full border transition-all duration-200 ${
                active === cat
                  ? 'bg-brand-purple border-brand-purple text-white'
                  : 'border-white/10 text-gray-400 hover:border-white/30 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p) => (
            <div
              key={p.title}
              className="group bg-brand-dark border border-white/5 rounded-2xl overflow-hidden hover:border-white/15 transition-all duration-300 cursor-pointer"
            >
              {/* Thumbnail */}
              <div
                className="h-44 flex items-center justify-center text-5xl relative"
                style={{ background: `${p.accent}18` }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl"
                  style={{ background: `${p.accent}25`, border: `1px solid ${p.accent}40` }}
                >
                  {p.icon}
                </div>
                <div
                  className="absolute top-3 right-3 text-xs px-2 py-1 rounded-full font-mono"
                  style={{ background: `${p.accent}20`, color: p.accent, border: `1px solid ${p.accent}30` }}
                >
                  {p.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-medium text-white mb-1.5">{p.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map(t => (
                    <span key={t} className="text-xs text-gray-500 bg-white/5 px-2.5 py-1 rounded-full font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm mb-4">Want to see more work? Let's connect.</p>
          <a
            href="https://wa.me/+919529085991?text=Hi Syrvex, I'd like to see more of your portfolio."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            Request full portfolio
          </a>
        </div>
      </div>
    </section>
  )
}
