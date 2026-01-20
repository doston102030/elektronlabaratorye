import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Layout } from '@/components/layout/Layout'
import { ArticleCard } from '@/components/ui/ArticleCard'
import { Button } from '@/components/ui/button'
import {
  Calendar,
  ArrowLeft,
  User,
  Clock,
  Share2,
  Bookmark,
  Facebook,
  Twitter,
  Linkedin,
} from 'lucide-react'
import { getArticleById, getRelatedArticles } from '@/data/articles'
import { SectionHeader } from '@/components/ui/SectionHeader'

export default function ArticleDetail() {
  const { id } = useParams<{ id: string }>()
  const article = id ? getArticleById(id) : undefined
  const relatedArticles = id ? getRelatedArticles(id, 3) : []

  if (!article) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="font-serif text-3xl font-bold text-foreground mb-4">
            Maqola topilmadi
          </h1>
          <p className="text-muted-foreground mb-8">
            Kechirasiz, siz izlagan maqola topilmadi.
          </p>
          <Button asChild className="btn-primary rounded-full">
            <Link to="/resources/articles">Maqolalarga qaytish</Link>
          </Button>
        </div>
      </Layout>
    )
  }

  const handleShare = (platform: string) => {
    const url = window.location.href
    const title = article.title

    let shareUrl = ''
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
        break
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`
        break
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
        break
    }

    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400')
    }
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0 h-[450px] md:h-[550px]">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/30" />
        </div>
        <div className="container mx-auto px-4 pt-28 md:pt-36 pb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link
              to="/resources/articles"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Barcha maqolalar
            </Link>
            <div className="max-w-3xl">
              <span className="badge-category mb-4">{article.category}</span>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                {article.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                <span className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium">{article.author}</span>
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {article.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {article.readTime}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <motion.article
              className="lg:col-span-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="prose prose-lg max-w-none">
                {article.content.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                    className={`mb-6 text-foreground/85 leading-relaxed text-lg ${
                      paragraph.startsWith('•') ? 'pl-6' : ''
                    } ${
                      /^\d\./.test(paragraph) ||
                      paragraph === 'Xulosa' ||
                      (paragraph.includes(':') && paragraph.length < 50)
                        ? 'font-serif text-xl font-bold text-foreground mt-8 mb-4'
                        : ''
                    }`}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
            </motion.article>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-28 space-y-6">
                {/* Share */}
                <div className="bg-card rounded-2xl p-6 card-elevated">
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
                    Ulashish
                  </h3>
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full w-12 h-12 hover:bg-[#1877f2] hover:text-white hover:border-[#1877f2]"
                      onClick={() => handleShare('facebook')}
                    >
                      <Facebook className="w-5 h-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full w-12 h-12 hover:bg-[#1da1f2] hover:text-white hover:border-[#1da1f2]"
                      onClick={() => handleShare('twitter')}
                    >
                      <Twitter className="w-5 h-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full w-12 h-12 hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5]"
                      onClick={() => handleShare('linkedin')}
                    >
                      <Linkedin className="w-5 h-5" />
                    </Button>
                  </div>
                </div>

                {/* Author */}
                <div className="bg-card rounded-2xl p-6 card-elevated">
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
                    Muallif haqida
                  </h3>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xl font-bold">
                      {article.author
                        .split(' ')
                        .map(n => n[0])
                        .join('')}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {article.author}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Ekspert, tadqiqotchi
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="O'xshash maqolalar"
              subtitle="Sizni qiziqtirishi mumkin bo'lgan boshqa maqolalar"
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {relatedArticles.map((relatedArticle, index) => (
                <motion.div
                  key={relatedArticle.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ArticleCard article={relatedArticle} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  )
}
