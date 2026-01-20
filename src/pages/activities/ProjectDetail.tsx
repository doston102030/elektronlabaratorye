import { useParams, Link } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { Button } from '@/components/ui/button'
import { Calendar, ArrowLeft, Tag, Users, Target } from 'lucide-react'
import { getProjectById, getRelatedProjects } from '@/data/projects'

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>()
  const project = id ? getProjectById(id) : undefined
  const relatedProjects = id ? getRelatedProjects(id, 3) : []

  if (!project) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="font-serif text-3xl font-bold text-foreground mb-4">
            Loyiha topilmadi
          </h1>
          <p className="text-muted-foreground mb-8">
            Kechirasiz, siz izlagan loyiha topilmadi.
          </p>
          <Button asChild className="btn-primary rounded-full">
            <Link to="/activities/projects">Loyihalarga qaytish</Link>
          </Button>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0 h-[400px] md:h-[500px]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>
        <div className="container mx-auto px-4 pt-24 md:pt-32 pb-16 relative">
          <Link
            to="/activities/projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Barcha loyihalar
          </Link>
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-sm font-semibold rounded-full mb-4">
              {project.category}
            </span>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {project.title}
            </h1>
            <div className="flex items-center gap-4 text-muted-foreground">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {project.date}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Loyiha haqida
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Bu loyiha doirasida zamonaviy texnologiyalar va ilmiy
                  yondashuvlar qo'llanilmoqda. Loyiha natijalari amaliyotda keng
                  qo'llanilishi va jamiyat rivojiga sezilarli hissa qo'shishi
                  kutilmoqda.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Tadqiqot jarayonida olingan natijalar xalqaro ilmiy
                  jurnallarda nashr etilmoqda va turli ilmiy konferensiyalarda
                  taqdim etilmoqda.
                </p>

                <h2 className="font-serif text-2xl font-bold text-foreground mb-4 mt-8">
                  Maqsad va vazifalar
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Target className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span>
                      Zamonaviy texnologiyalarni joriy etish va
                      optimallashtirish
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span>
                      Ilmiy tadqiqotlar orqali yangi yechimlar ishlab chiqish
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span>Amaliy natijalarni joriy etish va sinash</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span>Xalqaro hamkorlik aloqalarini mustahkamlash</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-xl p-6 card-elevated sticky top-24">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
                  Loyiha ma'lumotlari
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Tag className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        Kategoriya
                      </div>
                      <div className="font-medium text-foreground">
                        {project.category}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Sana</div>
                      <div className="font-medium text-foreground">
                        {project.date}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        Ishtirokchilar
                      </div>
                      <div className="font-medium text-foreground">
                        12 nafar
                      </div>
                    </div>
                  </div>
                </div>
                <Button className="w-full mt-6 btn-primary rounded-lg">
                  Hamkorlik qilish
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="Boshqa loyihalar"
              subtitle="Siz qiziqishingiz mumkin bo'lgan boshqa loyihalar"
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {relatedProjects.map((relatedProject, index) => (
                <ProjectCard
                  key={relatedProject.id}
                  project={relatedProject}
                  className="animate-slide-up"
                  style={
                    { animationDelay: `${index * 0.1}s` } as React.CSSProperties
                  }
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  )
}
