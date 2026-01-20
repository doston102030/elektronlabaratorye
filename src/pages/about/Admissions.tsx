import { Layout } from '@/components/layout/Layout';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { FileText, Calendar, CheckCircle, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const requirements = [
  'O\'rta ma\'lumot haqida attestat (asl nusxa)',
  'Passport nusxasi',
  '3x4 o\'lchamdagi 6 ta rasm',
  'Harbiy xizmat guvohnomasi (yigitlar uchun)',
  'Tibbiy ma\'lumotnoma (086-shakl)',
];

const timeline = [
  { date: '1-15 iyun', title: 'Hujjatlar qabuli boshlanishi' },
  { date: '16-30 iyun', title: 'Kirish imtihonlari' },
  { date: '1-10 iyul', title: 'Natijalar e\'loni' },
  { date: '15 iyul', title: 'Shartnoma tuzish' },
  { date: '1 sentyabr', title: 'O\'quv yili boshlanishi' },
];

const programs = [
  { name: 'Bakalavr', duration: '4 yil', fee: '12 000 000' },
  { name: 'Magistratura', duration: '2 yil', fee: '15 000 000' },
  { name: 'Doktorantura', duration: '3 yil', fee: '20 000 000' },
];

export default function Admissions() {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-section py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Qabul
            </h1>
            <p className="text-lg text-primary-foreground/80">
              EduCenter universitetiga qabul tartibi va zarur hujjatlar haqida ma'lumot.
            </p>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Ta'lim dasturlari"
            subtitle="Turli bosqichlardagi ta'lim yo'nalishlari"
          />
          <div className="grid md:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <div
                key={program.name}
                className="bg-card rounded-xl p-8 card-elevated animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                  {program.name}
                </h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>Davomiyligi: {program.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <FileText className="w-4 h-4" />
                    <span>Yillik to'lov: {program.fee} so'm</span>
                  </div>
                </div>
                <Button className="w-full btn-primary rounded-lg">
                  Ariza topshirish
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <SectionHeader
                title="Kerakli hujjatlar"
                subtitle="Qabul uchun talab qilinadigan hujjatlar ro'yxati"
                centered={false}
              />
              <ul className="space-y-4">
                {requirements.map((req, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeader
                title="Qabul jadvali"
                subtitle="2024-2025 o'quv yili uchun muhim sanalar"
                centered={false}
              />
              <div className="space-y-4">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 bg-card rounded-lg p-4 card-elevated animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{item.date}</div>
                      <div className="text-sm text-muted-foreground">{item.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
            Savollaringiz bormi?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Qabul jarayoni haqida batafsil ma'lumot olish uchun biz bilan bog'laning.
          </p>
          <Button className="btn-primary h-12 px-8 rounded-full">
            Bog'lanish <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>
    </Layout>
  );
}