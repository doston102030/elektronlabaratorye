import { Layout } from '@/components/layout/Layout'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { GraduationCap, BookOpen, Users, Globe } from 'lucide-react'

const features = [
  {
    icon: GraduationCap,
    title: "Sifatli ta'lim",
    description:
      "Xalqaro standartlarga mos keluvchi o'quv dasturlari va zamonaviy pedagogik yondashuvlar.",
  },
  {
    icon: BookOpen,
    title: 'Ilmiy tadqiqotlar',
    description:
      'Amaliy va fundamental ilmiy izlanishlar, laboratoriya tadqiqotlari va innovatsion loyihalar.',
  },
  {
    icon: Users,
    title: 'Tajribali jamoa',
    description:
      "Doktorlar, professorlar va xalqaro tajribaga ega mutaxassislardan iborat o'qituvchilar jamoasi.",
  },
  {
    icon: Globe,
    title: 'Xalqaro hamkorlik',
    description:
      'Yetakchi xorijiy universitetlar bilan hamkorlik va talabalar almashinuv dasturlari.',
  },
]

const faculties = [
  { name: 'Axborot texnologiyalari', students: 450 },
  { name: 'Iqtisodiyot va menejment', students: 380 },
  { name: 'Muhandislik va texnika', students: 320 },
  { name: 'Tabiiy fanlar', students: 280 },
]

export default function UniversityAbout() {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-section py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Universitet haqida
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Zamonaviy ta'lim va ilmiy tadqiqotlar orqali kelajak
              mutaxassislarini tayyorlaymiz.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Bizning afzalliklarimiz"
            subtitle="Nima uchun aynan bizni tanlashingiz kerak"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-card rounded-xl p-6 card-elevated animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&auto=format&fit=crop"
                alt="Universitet"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                Universitet tarixi
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Universitetimiz 2010 yilda tashkil etilgan bo'lib, bugungi
                  kunga qadar minglab malakali mutaxassislarni tayyorlab
                  chiqargan. Biz zamonaviy ta'lim standartlariga rioya qilamiz.
                </p>
                <p>
                  Kampusimiz 15 gektar maydonda joylashgan bo'lib, zamonaviy
                  o'quv binolari, kutubxona, sport majmuasi va talabalar turar
                  joyini o'z ichiga oladi.
                </p>
                <p>
                  Har yili 500 dan ortiq yangi talabalarni qabul qilamiz va
                  ularning 95% dan ortig'i bitirgandan so'ng ish bilan
                  ta'minlanadi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculties */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Fakultetlarimiz"
            subtitle="Turli yo'nalishlar bo'yicha sifatli ta'lim"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {faculties.map((faculty, index) => (
              <div
                key={faculty.name}
                className="bg-card rounded-xl p-6 card-elevated text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="font-serif text-3xl font-bold text-primary mb-2">
                  {faculty.students}+
                </div>
                <h3 className="font-medium text-foreground mb-1">
                  {faculty.name}
                </h3>
                <p className="text-muted-foreground text-sm">Talabalar</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
