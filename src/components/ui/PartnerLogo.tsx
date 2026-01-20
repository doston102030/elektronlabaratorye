import { cn } from '@/lib/utils'

export interface Partner {
  id: string
  name: string
  logo: string
}

interface PartnerLogoProps {
  partner: Partner
  className?: string
  style?: React.CSSProperties
}

export function PartnerLogo({ partner, className, style }: PartnerLogoProps) {
  return (
    <div
      className={cn(
        'bg-card rounded-xl p-6 md:p-8 flex items-center justify-center card-elevated group',
        className
      )}
      style={style}
    >
      <img
        src={partner.logo}
        alt={partner.name}
        className="max-h-12 md:max-h-16 w-auto object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0"
      />
    </div>
  )
}
