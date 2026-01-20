import { Layout } from '@/components/layout/Layout'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { FileText, Download, Calendar, FileType } from 'lucide-react'
import { Button } from '@/components/ui/button'

const resourceDocuments = [
  {
    id: 1,
    title: "O'quv dasturi: Informatika va axborot texnologiyalari",
    description: "Bakalavriatura bosqichi uchun o'quv dasturi va sillabus",
    type: 'PDF',
    size: '3.2 MB',
    date: '2024-02-15',
    category: "O'quv dasturi",
  },
  {
    id: 2,
    title: "Laboratoriya ishlari to'plami",
    description: "Fizika fani bo'yicha laboratoriya ishlari uchun qo'llanma",
    type: 'PDF',
    size: '5.8 MB',
    date: '2024-01-20',
    category: "Qo'llanma",
  },
  {
    id: 3,
    title: 'Ilmiy maqola yozish qoidalari',
    description:
      "Ilmiy maqolalarni tayyorlash va nashr etish bo'yicha yo'riqnoma",
    type: 'PDF',
    size: '1.4 MB',
    date: '2024-03-01',
    category: "Yo'riqnoma",
  },
  {
    id: 4,
    title: 'Konferensiya materiallari 2023',
    description: "Yillik ilmiy-amaliy konferensiya materiallari to'plami",
    type: 'ZIP',
    size: '45.6 MB',
    date: '2023-12-15',
    category: 'Materiallar',
  },
  {
    id: 5,
    title: "Talabalar uchun qo'llanma",
    description: "Yangi talabalar uchun yo'naltiruvchi ma'lumotlar",
    type: 'PDF',
    size: '2.1 MB',
    date: '2024-03-10',
    category: "Qo'llanma",
  },
  {
    id: 6,
    title: 'Diplom ishi talablari',
    description: "Bitiruv malakaviy ishini tayyorlash bo'yicha talablar",
    type: 'DOCX',
    size: '890 KB',
    date: '2024-02-28',
    category: 'Talablar',
  },
]

export default function ResourceDocuments() {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-section py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Hujjatlar
            </h1>
            <p className="text-lg text-primary-foreground/80">
              O'quv materiallari va foydali hujjatlar bazasi.
            </p>
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="O'quv resurslari"
            subtitle="Talabalar va o'qituvchilar uchun foydali materiallar"
          />
          <div className="space-y-4">
            {resourceDocuments.map((doc, index) => (
              <div
                key={doc.id}
                className="bg-card rounded-xl p-6 card-elevated animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-xs font-semibold text-secondary uppercase tracking-wide">
                        {doc.category}
                      </span>
                      <h3 className="font-semibold text-foreground mt-1 mb-1">
                        {doc.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-1">
                        {doc.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <FileType className="w-4 h-4" />
                        {doc.type}
                      </span>
                      <span>{doc.size}</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {doc.date}
                      </span>
                    </div>
                    <Button
                      size="sm"
                      className="btn-primary rounded-lg shrink-0"
                    >
                      <Download className="w-4 h-4 mr-1" />
                      Yuklab olish
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
