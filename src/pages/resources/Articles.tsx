import { Layout } from '@/components/layout/Layout'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ArticleCard } from '@/components/ui/ArticleCard'
import { articles } from '@/data/articles'

export default function Articles() {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-section py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Maqolalar
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Ilm-fan, ta'lim va texnologiyalar bo'yicha maqolalar to'plami.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Barcha maqolalar"
            subtitle="Ekspertlar tomonidan yozilgan qiziqarli va foydali maqolalar"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {articles.map((article, index) => (
              <ArticleCard
                key={article.id}
                article={article}
                className="animate-slide-up"
                style={
                  { animationDelay: `${index * 0.1}s` } as React.CSSProperties
                }
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
