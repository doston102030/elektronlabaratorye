import { Layout } from '@/components/layout/Layout';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Target, Eye, Heart, CheckCircle } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Maqsad',
    description: "Zamonaviy ta'lim va ilmiy tadqiqotlar orqali jamiyat rivojiga hissa qo'shish.",
  },
  {
    icon: Eye,
    title: 'Ko\'rish',
    description: "Xalqaro miqyosda tan olingan ta'lim va ilm-fan markazi bo'lish.",
  },
  {
    icon: Heart,
    title: 'Qadriyatlar',
    description: "Halollik, innovatsiya, hamkorlik va doimiy rivojlanish.",
  },
];

const achievements = [
  "50 dan ortiq muvaffaqiyatli amalga oshirilgan loyihalar",
  "1000 dan ortiq bitiruvchilar",
  "25 ta xalqaro mukofot va tan olishlar",
  "10 ta xorijiy universitet bilan hamkorlik",
  "Yillik 30 dan ortiq ilmiy maqolalar nashr etish",
];

export default function CompanyAbout() {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-section py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Kompaniya haqida
            </h1>
            <p className="text-lg text-primary-foreground/80">
              EduCenter - zamonaviy ta'lim va ilmiy tadqiqotlar markazi sifatida 2015 yildan beri faoliyat yuritib kelmoqda.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                Bizning tarix
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  EduCenter 2015 yilda bir guruh ilm-fan va ta'lim sohasidagi mutaxassislar tomonidan tashkil etilgan. 
                  Asosiy maqsadimiz - O'zbekistonda sifatli ta'lim va ilmiy tadqiqotlarni rivojlantirishga hissa qo'shish.
                </p>
                <p>
                  Bugungi kunda biz 50 dan ortiq muvaffaqiyatli loyihalarni amalga oshirganmiz va minglab talabalarga 
                  sifatli ta'lim berishga muvaffaq bo'ldik. Bizning jamoamiz 100 dan ortiq malakali mutaxassislardan iborat.
                </p>
                <p>
                  Xalqaro hamkorlik doirasida biz dunyoning 10 ta davlatidagi universitetlar bilan mustahkam aloqalar 
                  o'rnatganmiz va har yili o'nlab talabalar almashinuv dasturlarida ishtirok etadi.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop"
                alt="Jamoa"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground px-6 py-4 rounded-xl shadow-lg">
                <div className="font-serif text-3xl font-bold">9+</div>
                <div className="text-sm">Yillik tajriba</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Bizning qadriyatlarimiz"
            subtitle="Faoliyatimizning asosiy tamoyillari va yo'nalishlari"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-card rounded-xl p-8 card-elevated text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                title="Yutuqlarimiz"
                subtitle="Yillar davomida erishgan natijalarimiz"
                centered={false}
              />
              <ul className="space-y-4">
                {achievements.map((achievement, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop"
                alt="Yutuqlar"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
