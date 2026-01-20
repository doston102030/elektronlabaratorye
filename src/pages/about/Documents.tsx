import { Layout } from '@/components/layout/Layout'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { FileText, Download, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

const documents = [
  {
    id: 1,
    title: 'Universitet ustavi',
    description: 'Tashkilot faoliyatining asosiy hujjati',
    type: 'PDF',
    size: '2.4 MB',
    date: '2024-01-15',
  },
  {
    id: 2,
    title: "Ta'lim litsenziyasi",
    description: "Ta'lim faoliyati uchun berilgan litsenziya",
    type: 'PDF',
    size: '1.2 MB',
    date: '2023-09-01',
  },
  {
    id: 3,
    title: 'Akkreditatsiya sertifikati',
    description: 'Davlat akkreditatsiyasi haqida sertifikat',
    type: 'PDF',
    size: '856 KB',
    date: '2023-06-20',
  },
  {
    id: 4,
    title: "O'quv rejalari",
    description: "Barcha yo'nalishlar bo'yicha o'quv rejalari",
    type: 'ZIP',
    size: '15.8 MB',
    date: '2024-02-10',
  },
  {
    id: 5,
    title: 'Ichki tartib qoidalari',
    description: 'Talabalar va xodimlar uchun qoidalar',
    type: 'PDF',
    size: '3.1 MB',
    date: '2024-01-05',
  },
  {
    id: 6,
    title: 'Moliyaviy hisobot 2023',
    description: 'Yillik moliyaviy faoliyat hisoboti',
    type: 'PDF',
    size: '4.7 MB',
    date: '2024-03-01',
  },
]

export default function Documents() {
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
              Rasmiy hujjatlar va me'yoriy aktlarni yuklab olish.
            </p>
          </div>
        </div>
      </section>

      {/* Documents List */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Rasmiy hujjatlar"
            subtitle="Tashkilot faoliyati bilan bog'liq barcha rasmiy hujjatlar"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc, index) => (
              <div
                key={doc.id}
                className="bg-card rounded-xl p-6 card-elevated animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground mb-1 line-clamp-1">
                      {doc.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {doc.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <span>
                    {doc.type} • {doc.size}
                  </span>
                  <span>{doc.date}</span>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 rounded-lg"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Ko'rish
                  </Button>
                  <Button size="sm" className="flex-1 btn-primary rounded-lg">
                    <Download className="w-4 h-4 mr-1" />
                    Yuklab olish
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
