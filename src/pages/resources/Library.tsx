import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Layout } from '@/components/layout/Layout'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { BookReaderModal } from '@/components/ui/BookReaderModal'
import { Search, Download, Star, BookOpen, Filter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { books, Book, getBooksByCategory, searchBooks } from '@/data/books'
import { cn } from '@/lib/utils'

const categories = [
  'Hammasi',
  "Ta'lim",
  'Texnologiya',
  'Metodologiya',
  'Iqtisodiyot',
  'Dasturlash',
  'Ekologiya',
]

export default function Library() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Hammasi')
  const [selectedBook, setSelectedBook] = useState<Book | null>(null)
  const [isReaderOpen, setIsReaderOpen] = useState(false)

  const filteredBooks = useMemo(() => {
    let result = books

    if (searchQuery) {
      result = searchBooks(searchQuery)
    }

    if (selectedCategory !== 'Hammasi') {
      result = result.filter(book => book.category === selectedCategory)
    }

    return result
  }, [searchQuery, selectedCategory])

  const handleReadBook = (book: Book) => {
    setSelectedBook(book)
    setIsReaderOpen(true)
  }

  const handleDownloadBook = (book: Book) => {
    const content = `${book.title}\n${book.author}\n\n${book.description}\n\n${book.content.join('\n\n')}`
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `${book.title}.txt`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="hero-section py-20 md:py-28 relative">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="badge-category mb-4">Elektron kutubxona</span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
              Kutubxona
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80">
              Elektron kitoblar va o'quv qo'llanmalar bazasi. O'qing, o'rganing,
              yuklab oling.
            </p>
          </motion.div>
        </div>
        {/* Decorative elements */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" />
      </section>

      {/* Search & Filter */}
      <section className="py-6 md:py-8 bg-card border-b border-border sticky top-16 md:top-20 z-30 backdrop-blur-xl bg-card/95">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Kitob qidirish..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="pl-12 h-12 rounded-xl bg-muted border-0 focus-visible:ring-2 focus-visible:ring-primary"
              />
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={
                    category === selectedCategory ? 'default' : 'outline'
                  }
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={cn(
                    'rounded-full transition-all duration-300',
                    category === selectedCategory && 'btn-primary shadow-lg'
                  )}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Books Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeader
            title={`Mavjud kitoblar (${filteredBooks.length})`}
            subtitle="Turli fanlar bo'yicha elektron kitoblar to'plami"
          />

          {filteredBooks.length === 0 ? (
            <div className="text-center py-16">
              <BookOpen className="w-16 h-16 mx-auto text-muted-foreground/50 mb-4" />
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                Kitob topilmadi
              </h3>
              <p className="text-muted-foreground">
                Qidiruv so'rovingizni o'zgartiring yoki boshqa kategoriyani
                tanlang.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBooks.map((book, index) => (
                <motion.div
                  key={book.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-card rounded-2xl overflow-hidden card-elevated"
                >
                  <div className="flex gap-4 p-5">
                    <div className="w-28 h-36 rounded-xl overflow-hidden shrink-0 shadow-lg">
                      <img
                        src={book.cover}
                        alt={book.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="badge-category text-[10px] mb-2">
                        {book.category}
                      </span>
                      <h3 className="font-serif text-lg font-semibold text-foreground mt-1 mb-1 line-clamp-2 group-hover:text-primary transition-colors">
                        {book.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {book.author}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Star className="w-3.5 h-3.5 fill-secondary text-secondary" />
                          <span className="font-medium">{book.rating}</span>
                        </span>
                        <span>{book.pages} bet</span>
                        <span>{book.year}</span>
                      </div>
                    </div>
                  </div>
                  <div className="px-5 pb-5 flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 rounded-xl h-11 hover:bg-primary hover:text-primary-foreground transition-all"
                      onClick={() => handleReadBook(book)}
                    >
                      <BookOpen className="w-4 h-4 mr-2" />
                      O'qish
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 btn-primary rounded-xl h-11"
                      onClick={() => handleDownloadBook(book)}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Yuklab olish
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Book Reader Modal */}
      {selectedBook && (
        <BookReaderModal
          book={selectedBook}
          isOpen={isReaderOpen}
          onClose={() => {
            setIsReaderOpen(false)
            setSelectedBook(null)
          }}
        />
      )}
    </Layout>
  )
}
