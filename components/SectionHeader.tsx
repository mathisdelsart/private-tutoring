interface SectionHeaderProps {
  eyebrow: string
  title: string
  subtitle: string
  /** Space between the header and the section content */
  className?: string
}

/**
 * The header every section shares. One component means one type scale: the
 * titles used to run to 60px, heavier than the content they announce.
 */
export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  className = 'mb-10 sm:mb-14',
}: SectionHeaderProps) {
  return (
    <div className={`text-center ${className}`}>
      <span className="eyebrow mb-4">{eyebrow}</span>
      <h2 className="text-[1.75rem] sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-3 sm:mb-4 text-balance">
        {title}
      </h2>
      <p className="text-base sm:text-lg text-textSecondary max-w-2xl mx-auto px-4 text-balance">
        {subtitle}
      </p>
    </div>
  )
}
