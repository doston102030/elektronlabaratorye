import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Users, Lightbulb, Award } from 'lucide-react'
import { Layout } from '@/components/layout/Layout'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { ArticleCard } from '@/components/ui/ArticleCard'
import { PartnerLogo } from '@/components/ui/PartnerLogo'
import { Button } from '@/components/ui/button'
import { projects } from '@/data/projects'
import { articles } from '@/data/articles'
import { partners } from '@/data/partners'

const stats = [
  { icon: BookOpen, value: '50+', label: 'Loyihalar' },
  { icon: Users, value: '1000+', label: 'Talabalar' },
  { icon: Lightbulb, value: '120+', label: 'Innovatsiyalar' },
  { icon: Award, value: '25+', label: 'Mukofotlar' },
]

const activities = [
  {
    title: 'Ilmiy tadqiqotlar',
    description:
      'Zamonaviy metodologiya va texnologiyalar asosida ilmiy izlanishlar olib borish.',
    icon: Lightbulb,
  },
  {
    title: "Ta'lim dasturlari",
    description:
      "Xalqaro standartlarga mos professional ta'lim va malaka oshirish kurslari.",
    icon: BookOpen,
  },
  {
    title: 'Xalqaro hamkorlik',
    description:
      "Dunyo bo'ylab etakchi universitetlar va tashkilotlar bilan hamkorlik.",
    icon: Users,
  },
]

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 py-20 md:py-32 relative">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in">
              Bilim va Innovatsiyalar Markazi
            </h1>
            <p
              className="text-lg md:text-xl text-primary-foreground/80 mb-8 animate-slide-up"
              style={{ animationDelay: '0.1s' }}
            >
              Zamonaviy ta'lim, ilmiy tadqiqotlar va innovatsion yechimlar
              orqali kelajakni birga shakllantiramiz.
            </p>
            <div
              className="flex flex-wrap gap-4 animate-slide-up"
              style={{ animationDelay: '0.2s' }}
            >
              <Button asChild className="btn-hero h-12 px-8 rounded-full">
                <Link to="/activities/projects">Loyihalarimiz</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="btn-hero-outline h-12 px-8 rounded-full"
              >
                <Link to="/about/company">Biz haqimizda</Link>
              </Button>
            </div>
          </div>
        </div>
        {/* Decorative shapes */}
        <div className="absolute right-0 bottom-0 w-1/3 h-1/2 bg-secondary/20 rounded-tl-[100px] -z-10" />
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 md:mb-12">
            <SectionHeader
              title="Loyihalarimiz"
              subtitle="Eng so'nggi va muhim loyihalarimiz bilan tanishing"
              centered={false}
              className="mb-6 md:mb-0"
            />
            <Link
              to="/activities/projects"
              className="flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
            >
              Barcha loyihalar <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.slice(0, 3).map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                className="animate-slide-up"
                style={
                  { animationDelay: `${index * 0.1}s` } as React.CSSProperties
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* Activities Overview */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Faoliyatimiz"
            subtitle="Bilim va innovatsiyalar yo'lida asosiy yo'nalishlarimiz"
          />
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {activities.map((activity, index) => (
              <div
                key={activity.title}
                className="bg-card rounded-xl p-6 md:p-8 card-elevated text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <activity.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {activity.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Hamkorlarimiz"
            subtitle="Bizning ishonchli hamkorlarimiz va sheriklik aloqalarimiz"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {partners.map((partner, index) => (
              <PartnerLogo
                key={partner.id}
                partner={partner}
                className="animate-fade-in"
                style={
                  { animationDelay: `${index * 0.05}s` } as React.CSSProperties
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* Articles Preview */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 md:mb-12">
            <SectionHeader
              title="So'nggi maqolalar"
              subtitle="Ilm-fan va ta'lim sohasidagi eng so'nggi yangiliklar"
              centered={false}
              className="mb-6 md:mb-0"
            />
            <Link
              to="/resources/articles"
              className="flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
            >
              Barcha maqolalar <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {articles.slice(0, 4).map((article, index) => (
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

      {/* CTA Section */}
      <section className="py-16 md:py-24 hero-section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Biz bilan bog'laning
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Hamkorlik, loyihalar yoki ta'lim dasturlari haqida batafsil ma'lumot
            olish uchun biz bilan bog'laning.
          </p>
          <Button asChild className="btn-hero h-12 px-8 rounded-full">
            <Link to="/about/company">Batafsil ma'lumot</Link>
          </Button>
        </div>
      </section>
    </Layout>
  )
}
