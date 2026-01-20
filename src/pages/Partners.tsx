import { Layout } from '@/components/layout/Layout'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/button'
import {
  Handshake,
  Globe,
  Building,
  GraduationCap,
  ArrowRight,
} from 'lucide-react'
import { partners } from '@/data/partners'

const partnerCategories = [
  {
    icon: GraduationCap,
    title: 'Universitetlar',
    count: 15,
    description:
      "Xalqaro va mahalliy oliy ta'lim muassasalari bilan hamkorlik.",
  },
  {
    icon: Building,
    title: 'Kompaniyalar',
    count: 25,
    description: 'Yetakchi texnologik va sanoat korxonalari bilan sheriklik.',
  },
  {
    icon: Globe,
    title: 'Xalqaro tashkilotlar',
    count: 10,
    description: 'Davlatlararo va nodavlat tashkilotlar bilan aloqalar.',
  },
  {
    icon: Handshake,
    title: 'Davlat tuzilmalari',
    count: 8,
    description: 'Davlat muassasalari va vazirliklar bilan hamkorlik.',
  },
]

export default function Partners() {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-section py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Hamkorlar
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Bizning ishonchli hamkorlarimiz va strategik sheriklarimiz.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Hamkorlik yo'nalishlari"
            subtitle="Turli sohalardagi hamkorlik aloqalarimiz"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerCategories.map((category, index) => (
              <div
                key={category.title}
                className="bg-card rounded-xl p-6 card-elevated text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <category.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="font-serif text-3xl font-bold text-foreground mb-1">
                  {category.count}+
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {category.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Bizning hamkorlarimiz"
            subtitle="Biz bilan hamkorlik qilayotgan tashkilotlar"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner, index) => (
              <div
                key={partner.id}
                className="bg-card rounded-xl p-6 flex items-center justify-center card-elevated group animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-12 w-auto object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-2xl p-8 md:p-12 card-elevated text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Biz bilan hamkor bo'ling
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Ta'lim va ilm-fan sohasida hamkorlik qilish imkoniyatlari haqida
              batafsil ma'lumot olish uchun biz bilan bog'laning.
            </p>
            <Button className="btn-primary h-12 px-8 rounded-full">
              Hamkorlik taklifini yuborish{' '}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  )
}
