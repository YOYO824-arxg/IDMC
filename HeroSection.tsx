interface FeatureCardProps {
  icon: string
  title: string
  description: string
  variant?: 'light' | 'dark'
}

export function FeatureCard({ icon, title, description, variant = 'light' }: FeatureCardProps) {
  const isDark = variant === 'dark'
  return (
    <div
      className={`p-7 rounded-xl border transition-all duration-300 group ${
        isDark
          ? 'border-white/10 hover:border-white/20 hover:bg-white/5'
          : 'border-slate-100 hover:border-transparent hover:shadow-xl hover:-translate-y-1'
      }`}
    >
      <div
        className="text-xl mb-4 font-mono"
        style={{ color: '#c49a2e' }}
        aria-hidden="true"
      >
        {icon}
      </div>
      <h3
        className={`text-lg font-bold mb-3 ${isDark ? 'text-white' : ''}`}
        style={{ fontFamily: 'var(--font-display)', color: isDark ? 'white' : '#102a43' }}
      >
        {title}
      </h3>
      <p className={`text-sm leading-relaxed ${isDark ? 'text-white/55' : 'text-slate-500'}`}>
        {description}
      </p>
    </div>
  )
}
