const steps = [
  {
    num: '01',
    title: 'Discovery call',
    desc: 'We start with a free 30-min WhatsApp or video call to understand your vision, goals, and requirements.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Proposal & timeline',
    desc: 'You receive a detailed proposal with scope, timeline, and transparent pricing within 24 hours.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Design & develop',
    desc: "We build iteratively with regular updates, demos, and feedback loops — you're always in the loop.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Launch & support',
    desc: 'We deploy, test, and go live. Post-launch support and iterations included — no ghosting after delivery.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
  },
]

export default function Process() {
  return (
    <section id="process" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-eyebrow mb-4 inline-flex">How it works</span>
          <h2 className="section-heading mb-4">
            Simple, <span className="text-gradient">transparent</span> process
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            No surprises. Just clear communication and quality delivery — every time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {/* Connector line on desktop */}
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-brand-purple/20 z-0" />

          {steps.map((s, i) => (
            <div key={s.num} className="card-dark relative z-10 flex flex-col items-start gap-4">
              <div className="flex items-center justify-between w-full">
                <div className="w-9 h-9 rounded-xl bg-brand-purple/15 border border-brand-purple/30 flex items-center justify-center text-brand-purple-light">
                  {s.icon}
                </div>
                <span className="font-mono text-xs text-gray-600">{s.num}</span>
              </div>
              <div>
                <h3 className="font-medium text-white mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}