import { Layout } from '@/components/layout/Layout'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { projects } from '@/data/projects'

export default function Projects() {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-section py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Loyihalar
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Ilmiy tadqiqot va innovatsion loyihalarimiz bilan tanishing.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Barcha loyihalar"
            subtitle="Turli yo'nalishlarda olib borilayotgan tadqiqot va amaliy loyihalar"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
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
    </Layout>
  )
}
