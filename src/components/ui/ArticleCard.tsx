import { Link } from 'react-router-dom'
import { Calendar, User, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface Article {
  id: string
  title: string
  excerpt: string
  image: string
  author: string
  date: string
  category: string
}

interface ArticleCardProps {
  article: Article
  variant?: 'default' | 'horizontal'
  className?: string
  style?: React.CSSProperties
}

export function ArticleCard({
  article,
  variant = 'default',
  className,
  style,
}: ArticleCardProps) {
  if (variant === 'horizontal') {
    return (
      <Link
        to={`/resources/articles/${article.id}`}
        className={cn(
          'group flex gap-4 bg-card rounded-xl overflow-hidden card-elevated p-4',
          className
        )}
      >
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden shrink-0">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="flex-1 min-w-0">
          <span className="text-xs font-semibold text-secondary uppercase tracking-wide">
            {article.category}
          </span>
          <h3 className="font-serif text-base md:text-lg font-semibold text-foreground mt-1 mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {article.title}
          </h3>
          <div className="flex items-center gap-3 text-muted-foreground text-xs">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {article.date}
            </span>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link
      to={`/resources/articles/${article.id}`}
      className={cn(
        'group block bg-card rounded-xl overflow-hidden card-elevated',
        className
      )}
      style={style}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
            {article.category}
          </span>
        </div>
      </div>
      <div className="p-5 md:p-6">
        <h3 className="font-serif text-lg md:text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {article.title}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-muted-foreground text-xs">
            <span className="flex items-center gap-1">
              <User className="w-3 h-3" />
              {article.author}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {article.date}
            </span>
          </div>
          <ArrowRight className="w-4 h-4 text-primary transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  )
}
