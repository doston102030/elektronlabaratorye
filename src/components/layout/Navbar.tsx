import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import logo1 from '@/assets/images/logo-1.png'
import logo2 from '@/assets/images/logo-2.png'

import {
  ChevronDown,
  Menu,
  X,
  GraduationCap,
  ArrowRight,
  User,
  BookOpen,
  Users,
  Briefcase,
  FileText,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const languages = {
  uz: { code: 'uz', name: "O'zbek", flag: '🇺🇿' },
  ru: { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  en: { code: 'en', name: 'English', flag: '🇺🇸' },
} as const

type LanguageCode = keyof typeof languages

const navContent = {
  uz: {
    navItems: [
      { label: 'Bosh sahifa', href: '/' },
      {
        label: 'Biz haqimizda',
        dropdown: [
          {
            label: 'Kompaniya haqida',
            href: '/about/company',
            desc: 'Bizning tariximiz va maqsadlarimiz',
            icon: Briefcase,
          },
          {
            label: 'Universitet haqida',
            href: '/about/university',
            desc: 'Akademik muhit va imkoniyatlar',
            icon: GraduationCap,
          },
          {
            label: 'Qabul',
            href: '/about/admissions',
            desc: 'Hujjat topshirish va talablar',
            icon: Users,
          },
          {
            label: 'Hujjatlar',
            href: '/about/documents',
            desc: 'Litsenziya va sertifikatlar',
            icon: FileText,
          },
        ],
      },
      {
        label: 'Faoliyat',
        dropdown: [
          {
            label: 'Loyihalar',
            href: '/activities/projects',
            desc: 'Innovatsion ishlanmalarimiz',
            icon: Briefcase,
          },
          {
            label: 'Ilmiy ishlar',
            href: '/activities/scientific-works',
            desc: 'Tadqiqotlar va kashfiyotlar',
            icon: BookOpen,
          },
        ],
      },
      { label: 'Hamkorlar', href: '/partners' },
      {
        label: 'Resurslar',
        dropdown: [
          {
            label: 'Maqolalar',
            href: '/resources/articles',
            desc: 'Bilim ulashish markazi',
            icon: FileText,
          },
          {
            label: 'Kutubxona',
            href: '/resources/library',
            desc: 'Raqamli manbalar bazasi',
            icon: BookOpen,
          },
        ],
      },
    ],
    login: 'Kirish',
  },
  ru: {
    navItems: [
      { label: 'Главная', href: '/' },
      {
        label: 'О нас',
        dropdown: [
          {
            label: 'О компании',
            href: '/about/company',
            desc: 'Наша история и цели',
            icon: Briefcase,
          },
          {
            label: 'Об университете',
            href: '/about/university',
            desc: 'Академическая среда и возможности',
            icon: GraduationCap,
          },
          {
            label: 'Поступление',
            href: '/about/admissions',
            desc: 'Требования к поступлению',
            icon: Users,
          },
          {
            label: 'Документы',
            href: '/about/documents',
            desc: 'Лицензии и сертификаты',
            icon: FileText,
          },
        ],
      },
      {
        label: 'Деятельность',
        dropdown: [
          {
            label: 'Проекты',
            href: '/activities/projects',
            desc: 'Наши инновации',
            icon: Briefcase,
          },
          {
            label: 'Научные работы',
            href: '/activities/scientific-works',
            desc: 'Исследования',
            icon: BookOpen,
          },
        ],
      },
      { label: 'Партнеры', href: '/partners' },
      {
        label: 'Ресурсы',
        dropdown: [
          {
            label: 'Статьи',
            href: '/resources/articles',
            desc: 'База знаний',
            icon: FileText,
          },
          {
            label: 'Библиотека',
            href: '/resources/library',
            desc: 'Цифровые ресурсы',
            icon: BookOpen,
          },
        ],
      },
    ],
    login: 'Вход',
  },
  en: {
    navItems: [
      { label: 'Home', href: '/' },
      {
        label: 'About Us',
        dropdown: [
          {
            label: 'Company',
            href: '/about/company',
            desc: 'History and goals',
            icon: Briefcase,
          },
          {
            label: 'University',
            href: '/about/university',
            desc: 'Academic environment',
            icon: GraduationCap,
          },
          {
            label: 'Admissions',
            href: '/about/admissions',
            desc: 'Requirements',
            icon: Users,
          },
          {
            label: 'Documents',
            href: '/about/documents',
            desc: 'Licenses',
            icon: FileText,
          },
        ],
      },
      {
        label: 'Activities',
        dropdown: [
          {
            label: 'Projects',
            href: '/activities/projects',
            desc: 'Our innovations',
            icon: Briefcase,
          },
          {
            label: 'Science',
            href: '/activities/scientific-works',
            desc: 'Research works',
            icon: BookOpen,
          },
        ],
      },
      { label: 'Partners', href: '/partners' },
      {
        label: 'Resources',
        dropdown: [
          {
            label: 'Articles',
            href: '/resources/articles',
            desc: 'Knowledge base',
            icon: FileText,
          },
          {
            label: 'Library',
            href: '/resources/library',
            desc: 'Digital library',
            icon: BookOpen,
          },
        ],
      },
    ],
    login: 'Login',
  },
}

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [selectedLang, setSelectedLang] = useState<LanguageCode>('uz')
  const [langDropdownOpen, setLangDropdownOpen] = useState(false)
  const location = useLocation()

  const currentContent = navContent[selectedLang]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      if (window.scrollY > 20) setActiveDropdown(null)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])

  const changeLanguage = (lang: LanguageCode) => {
    setSelectedLang(lang)
    setLangDropdownOpen(false)
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-[1000] transition-all duration-500',
        scrolled ? 'py-2' : 'py-4'
      )}
    >
      <nav className="container mx-auto px-4">
        <motion.div
          layout
          className={cn(
            'relative rounded-2xl lg:rounded-3xl px-4 lg:px-8 py-2 lg:py-3 flex items-center justify-between transition-all duration-500',
            'bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/50 shadow-lg'
          )}
        >
          {/* LOGO SECTION */}
          <Link to="/" className="flex items-center gap-4 sm:gap-3 shrink-0">
            <motion.img
              whileHover={{ scale: 1.05, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
              src={logo2}
              alt="Electron"
              className="h-10 sm:h-12 lg:h-16 w-auto object-contain"
            />
            <motion.img
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              src={logo1}
              alt="Laboratory"
              className="h-10 sm:h-12 lg:h-16 w-auto object-contain"
            />
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden xl:flex items-center gap-1">
            {currentContent.navItems.map(item => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.href || '#'}
                  className={cn(
                    'px-4 py-2 text-sm font-bold transition-all rounded-xl flex items-center gap-1.5 whitespace-nowrap relative',
                    location.pathname === item.href
                      ? 'text-primary'
                      : 'text-slate-700 dark:text-slate-300'
                  )}
                >
                  {item.label}
                  {item.dropdown && (
                    <ChevronDown
                      className={cn(
                        'w-4 h-4 transition-transform duration-300',
                        activeDropdown === item.label && 'rotate-180'
                      )}
                    />
                  )}
                </Link>

                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute top-full left-0 w-80 pt-4"
                    >
                      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-3 shadow-2xl grid gap-1">
                        {item.dropdown.map((drop, idx) => (
                          <motion.div
                            key={drop.href}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                          >
                            <Link
                              to={drop.href}
                              className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group"
                            >
                              <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                                <drop.icon className="w-4 h-4" />
                              </div>
                              <div>
                                <div className="text-sm font-bold">
                                  {drop.label}
                                </div>
                                <div className="text-[11px] text-slate-500">
                                  {drop.desc}
                                </div>
                              </div>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* ACTIONS */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Language Selector */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm"
              >
                <span className="text-base sm:text-lg">
                  {languages[selectedLang].flag}
                </span>
                <span className="text-xs font-bold hidden md:inline uppercase">
                  {selectedLang}
                </span>
              </motion.button>

              <AnimatePresence>
                {langDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.9 }}
                    className="absolute top-full right-0 mt-2 w-40 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-xl overflow-hidden z-[1001]"
                  >
                    {Object.entries(languages).map(([code, lang]) => (
                      <button
                        key={code}
                        onClick={() => changeLanguage(code as LanguageCode)}
                        className={cn(
                          'w-full px-4 py-2.5 flex items-center gap-3 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors',
                          selectedLang === code && 'text-primary bg-primary/5'
                        )}
                      >
                        <span>{lang.flag}</span> {lang.name}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Login Button */}
            <Link to="/login" className="hidden sm:block">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-bold rounded-xl flex items-center gap-2"
              >
                <User className="w-4 h-4" />
                {currentContent.login}
              </motion.button>
            </Link>

            {/* Mobile Toggle */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </motion.div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="xl:hidden absolute top-full left-4 right-4 mt-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="p-4 space-y-4">
                {currentContent.navItems.map(item => (
                  <div
                    key={item.label}
                    className="border-b border-slate-100 dark:border-slate-800 pb-2 last:border-0"
                  >
                    {item.href ? (
                      <Link
                        to={item.href}
                        className="flex items-center justify-between py-2 text-lg font-bold"
                      >
                        {item.label}
                        <ArrowRight className="w-5 h-5 text-slate-400" />
                      </Link>
                    ) : (
                      <div className="space-y-3">
                        <div className="text-[10px] font-black uppercase text-primary">
                          {item.label}
                        </div>
                        <div className="grid gap-2">
                          {item.dropdown?.map(drop => (
                            <Link
                              key={drop.href}
                              to={drop.href}
                              className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl"
                            >
                              <drop.icon className="w-5 h-5 text-primary" />
                              <div className="text-sm font-bold">
                                {drop.label}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
