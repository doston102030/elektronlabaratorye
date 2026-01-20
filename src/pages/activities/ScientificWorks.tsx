import { Layout } from '@/components/layout/Layout'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { FileText, Calendar, User, ExternalLink, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'

const scientificWorks = [
  {
    id: 1,
    title: "Sun'iy intellektni ta'lim tizimida qo'llash: amaliy tajribalar",
    authors: ['Dr. Aziza Karimova', 'Prof. Bobur Rahmonov'],
    journal: 'International Journal of Education Technology',
    year: 2024,
    type: 'Jurnal maqolasi',
    citations: 15,
  },
  {
    id: 2,
    title: "Qayta tiklanuvchi energiya manbalari: O'zbekiston kontekstida",
    authors: ['Dr. Jasur Aliyev', 'Dr. Malika Tosheva'],
    journal: 'Energy and Environment Journal',
    year: 2024,
    type: 'Jurnal maqolasi',
    citations: 23,
  },
  {
    id: 3,
    title: 'Raqamli transformatsiya va biznes samaradorligi',
    authors: ['Prof. Nodira Qodirova'],
    journal: 'Business Innovation Review',
    year: 2023,
    type: 'Konferensiya maqolasi',
    citations: 8,
  },
  {
    id: 4,
    title: "Qishloq xo'jaligida IoT texnologiyalari",
    authors: ['Dr. Sherzod Kamolov', 'Dr. Dilnoza Rahimova'],
    journal: 'Agricultural Technology Journal',
    year: 2023,
    type: 'Jurnal maqolasi',
    citations: 31,
  },
  {
    id: 5,
    title: 'Aqlli shahar infratuzilmasini rivojlantirish strategiyalari',
    authors: ['Prof. Bobur Rahmonov', 'Dr. Aziza Karimova'],
    journal: 'Urban Development Quarterly',
    year: 2024,
    type: 'Monografiya',
    citations: 12,
  },
]

const stats = [
  { value: '150+', label: 'Ilmiy maqolalar' },
  { value: '25', label: 'Monografiyalar' },
  { value: '500+', label: 'Sitata' },
  { value: '10', label: 'Xalqaro konferensiyalar' },
]

export default function ScientificWorks() {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-section py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Ilmiy ishlar
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Ilmiy tadqiqotlar va nashr etilgan maqolalar to'plami.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(stat => (
              <div key={stat.label} className="text-center">
                <div className="font-serif text-3xl md:text-4xl font-bold text-primary mb-1">
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

      {/* Works List */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Ilmiy nashrlar"
            subtitle="So'nggi ilmiy maqolalar va tadqiqotlar"
          />
          <div className="space-y-6">
            {scientificWorks.map((work, index) => (
              <div
                key={work.id}
                className="bg-card rounded-xl p-6 card-elevated animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                      {work.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {work.authors.join(', ')}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {work.year}
                      </span>
                      <span className="flex items-center gap-1">
                        <FileText className="w-4 h-4" />
                        {work.citations} sitata
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                        {work.type}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {work.journal}
                      </span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="shrink-0 rounded-lg"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Ko'rish
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
