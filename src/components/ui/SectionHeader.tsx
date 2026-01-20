import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn('mb-10 md:mb-12', centered && 'text-center', className)}>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle mx-auto">{subtitle}</p>}
    </div>
  )
}
