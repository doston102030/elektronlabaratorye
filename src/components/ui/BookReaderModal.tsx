import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  ZoomIn,
  ZoomOut,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Book } from '@/data/books'
import { cn } from '@/lib/utils'

interface BookReaderModalProps {
  book: Book
  isOpen: boolean
  onClose: () => void
}

export function BookReaderModal({
  book,
  isOpen,
  onClose,
}: BookReaderModalProps) {
  const [currentPage, setCurrentPage] = useState(0)
  const [fontSize, setFontSize] = useState(18)

  const contentPerPage = 3
  const totalPages = Math.ceil(book.content.length / contentPerPage)

  const currentContent = book.content.slice(
    currentPage * contentPerPage,
    (currentPage + 1) * contentPerPage
  )

  const goToNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((p) => p + 1)
    }
  }

  const goToPrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((p) => p - 1)
    }
  }

  // 🔴 MODAL OCHIQ BO‘LMASA — HECH NARSA CHIQARMAYDI
  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-background rounded-xl max-w-2xl w-full p-6 relative"
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
        >
          {/* Close */}
          <Button
            size="icon"
            variant="ghost"
            className="absolute top-3 right-3"
            onClick={onClose}
          >
            <X />
          </Button>

          {/* Title */}
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5" />
            {book.title}
          </h2>

          {/* Content */}
          <div className="space-y-4 mb-6">
            {currentContent.map((text, i) => (
              <p
                key={i}
                style={{ fontSize }}
                className="leading-relaxed text-muted-foreground"
              >
                {text}
              </p>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between">
            <Button onClick={goToPrevPage} disabled={currentPage === 0}>
              <ChevronLeft /> Oldingi
            </Button>

            <span className="text-sm">
              {currentPage + 1} / {totalPages}
            </span>

            <Button
              onClick={goToNextPage}
              disabled={currentPage === totalPages - 1}
            >
              Keyingi <ChevronRight />
            </Button>
          </div>

          {/* Zoom */}
          <div className="flex gap-2 mt-4">
            <Button size="icon" onClick={() => setFontSize((f) => f + 2)}>
              <ZoomIn />
            </Button>
            <Button
              size="icon"
              onClick={() => setFontSize((f) => Math.max(12, f - 2))}
            >
              <ZoomOut />
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
