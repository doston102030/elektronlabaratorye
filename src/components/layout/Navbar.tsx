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
  BookOpen,
  Users,
  Briefcase,
  FileText,
  Globe,
  Building2,
  Sun,
  Moon,
} from 'lucide-react'
import { cn } from '@/lib/utils'

// ... (languages va navContent o'zgarishsiz qoladi)
const languages = {
  uz: { code: 'uz', name: "O'zbek", flag: '🇺🇿', label: 'UZ' },
  ru: { code: 'ru', name: 'Русский', flag: '🇷🇺', label: 'RU' },
  en: { code: 'en', name: 'English', flag: '🇺🇸', label: 'EN' },
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
            label: 'Kompaniya',
            href: '/about/company',
            desc: 'Tarix va maqsadlar',
            icon: Briefcase,
          },
          {
            label: 'Universitet',
            href: '/about/university',
            desc: 'Akademik muhit',
            icon: GraduationCap,
          },
          {
            label: 'Qabul',
            href: '/about/admissions',
            desc: 'Talablar',
            icon: Users,
          },
          {
            label: 'Hujjatlar',
            href: '/about/documents',
            desc: 'Litsenziyalar',
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
            desc: 'Bizning innovatsiyalar',
            icon: Briefcase,
          },
          {
            label: 'Ilm-fan',
            href: '/activities/science',
            desc: 'Tadqiqot ishlari',
            icon: BookOpen,
          },
        ],
      },
      {
        label: 'Hamkorlar',
        dropdown: [
          {
            label: 'Mahalliy hamkorlar',
            href: '/partners/local',
            desc: "O'zimizdagi hamkorlar",
            icon: Building2,
          },
          {
            label: 'Xalqaro hamkorlar',
            href: '/partners/international',
            desc: 'Chet eldagi hamkorlar',
            icon: Globe,
          },
        ],
      },
      {
        label: 'Resurslar',
        dropdown: [
          {
            label: 'Maqolalar',
            href: '/resources/articles',
            desc: 'Bilimlar bazasi',
            icon: FileText,
          },
          {
            label: 'Kutubxona',
            href: '/resources/library',
            desc: 'Raqamli kutubxona',
            icon: BookOpen,
          },
        ],
      },
    ],
  },
  ru: {
    navItems: [
      { label: 'Главная', href: '/' },
      {
        label: 'О нас',
        dropdown: [
          {
            label: 'Компания',
            href: '/about/company',
            desc: 'История и цели',
            icon: Briefcase,
          },
          {
            label: 'Университет',
            href: '/about/university',
            desc: 'Среда',
            icon: GraduationCap,
          },
          {
            label: 'Прием',
            href: '/about/admissions',
            desc: 'Требования',
            icon: Users,
          },
          {
            label: 'Документы',
            href: '/about/documents',
            desc: 'Лицензии',
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
            desc: 'Инновации',
            icon: Briefcase,
          },
          {
            label: 'Наука',
            href: '/activities/science',
            desc: 'Исследования',
            icon: BookOpen,
          },
        ],
      },
      {
        label: 'Партнеры',
        dropdown: [
          {
            label: 'Местные партнеры',
            href: '/partners/local',
            desc: 'Партнеры в Узбекистане',
            icon: Building2,
          },
          {
            label: 'Международные партнеры',
            href: '/partners/international',
            desc: 'Зарубежные партнеры',
            icon: Globe,
          },
        ],
      },
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
            desc: 'Библиотека',
            icon: BookOpen,
          },
        ],
      },
    ],
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
            desc: 'Environment',
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
            desc: 'Innovations',
            icon: Briefcase,
          },
          {
            label: 'Science',
            href: '/activities/science',
            desc: 'Research',
            icon: BookOpen,
          },
        ],
      },
      {
        label: 'Partners',
        dropdown: [
          {
            label: 'Local Partners',
            href: '/partners/local',
            desc: 'Partners in Uzbekistan',
            icon: Building2,
          },
          {
            label: 'International Partners',
            href: '/partners/international',
            desc: 'Global partners',
            icon: Globe,
          },
        ],
      },
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
  },
}

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [selectedLang, setSelectedLang] = useState<LanguageCode>('uz')
  const [langDropdownOpen, setLangDropdownOpen] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>(
    (localStorage.getItem('theme') as 'light' | 'dark') || 'light'
  )
  const location = useLocation()
  const currentContent = navContent[selectedLang]

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''
  }, [mobileMenuOpen])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const ThemeToggle = () => (
    <motion.button
      whileHover={{ scale: 1.05, rotateX: 2 }}
      whileTap={{ scale: 0.95, rotateX: -1 }}
      onClick={toggleTheme}
      className={cn(
        'relative flex items-center h-8 w-[68px] rounded-lg transition-all duration-1000 overflow-hidden border-2',
        theme === 'light'
          ? 'bg-gradient-to-br from-slate-50 via-white to-blue-50 border-blue-300/60 shadow-[0_0_20px_rgba(59,130,246,0.2),inset_0_1px_2px_rgba(255,255,255,0.9)]'
          : 'bg-gradient-to-br from-[#0a0e1a] via-[#0f172a] to-[#1e293b] border-blue-900/80 shadow-[0_0_30px_rgba(30,64,175,0.5),inset_0_-1px_2px_rgba(0,0,0,0.5)]'
      )}
    >
      {/* KOMPLEKS ELEKTRON FON - Har doim */}
      <div className="absolute inset-0 opacity-[0.12] pointer-events-none overflow-hidden">
        {/* Mikrochip pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(90deg, currentColor 1px, transparent 1px),
              linear-gradient(0deg, currentColor 1px, transparent 1px),
              radial-gradient(circle at 25% 25%, currentColor 0.5px, transparent 0.5px),
              radial-gradient(circle at 75% 75%, currentColor 0.5px, transparent 0.5px)
            `,
            backgroundSize: '8px 8px, 8px 8px, 16px 16px, 16px 16px',
          }}
        />

        {/* Harakatlanuvchi elektronlar - Aylanma harakat */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/4 left-1/4 w-8 h-8 border border-blue-500/30 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-1 -right-1 w-6 h-6 border border-cyan-500/30 rounded-full"
        />
      </div>

      {/* QATTIQ ILMIY SENSOR - 3D Effekt bilan */}
      <motion.div
        animate={{
          x: theme === 'light' ? 3 : 38,
          rotateY: theme === 'light' ? 0 : 180,
        }}
        transition={{
          type: 'spring',
          stiffness: 180,
          damping: 25,
          mass: 1.2,
        }}
        className={cn(
          'z-20 h-6 w-7 flex items-center justify-center rounded-md transition-all duration-700 relative',
          theme === 'light'
            ? 'bg-gradient-to-br from-white via-slate-50 to-white shadow-[0_2px_8px_rgba(0,0,0,0.1),inset_0_1px_2px_rgba(255,255,255,0.8)]'
            : 'bg-gradient-to-br from-blue-800 via-blue-700 to-blue-800 shadow-[0_0_15px_rgba(59,130,246,0.8),inset_0_-1px_2px_rgba(0,0,0,0.3)]'
        )}
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Sensorning 3D yon qismi */}
        <div
          className={cn(
            'absolute left-0 top-0 bottom-0 w-1 rounded-l-md',
            theme === 'light'
              ? 'bg-gradient-to-r from-slate-300 to-slate-200'
              : 'bg-gradient-to-r from-blue-900 to-blue-800'
          )}
        />

        {/* Asosiy ikonka */}
        <AnimatePresence mode="wait">
          {theme === 'light' ? (
            <motion.div
              key="lab-light"
              initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.5, rotate: 90 }}
              className="relative z-10"
            >
              {/* Yonib turuvchi quyosh */}
              <div className="relative">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  className="absolute -inset-1 border border-amber-400/30 rounded-full"
                />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="lab-dark"
              initial={{ opacity: 0, scale: 0.5, rotate: 90 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.5, rotate: -90 }}
              className="relative z-10"
            >
              {/* Ko'p qirrali oy */}
              <div className="relative">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -inset-0.5 border border-cyan-400/40 rounded-full"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Sensor LED indikatorlari */}
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex gap-[2px]">
          {[1, 2, 3].map(i => (
            <motion.div
              key={i}
              animate={{
                scale: theme === 'dark' ? [1, 1.3, 1] : 1,
                opacity: theme === 'dark' ? [0.4, 1, 0.4] : 0.3,
              }}
              transition={{
                duration: 1,
                delay: i * 0.1,
                repeat: Infinity,
              }}
              className={cn(
                'w-[2px] h-[2px] rounded-full',
                theme === 'light' ? 'bg-blue-500' : 'bg-cyan-400'
              )}
            />
          ))}
        </div>

        {/* Sensor ustidagi nur effekti */}
        <motion.div
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className={cn(
            'absolute inset-0 rounded-md',
            theme === 'light'
              ? 'bg-gradient-to-t from-blue-400/20 to-transparent'
              : 'bg-gradient-to-t from-cyan-400/20 to-transparent'
          )}
        />
      </motion.div>

      {/* ILMIY INTERFEYS YOZUVLARI - Professional */}
      <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none font-mono">
        <motion.div
          animate={{
            opacity: theme === 'dark' ? 1 : 0.15,
            textShadow:
              theme === 'dark' ? '0 0 6px rgba(59,130,246,0.6)' : 'none',
          }}
          className="flex flex-col items-start"
        >
          <span className="text-[5px] font-bold text-blue-300 leading-none tracking-widest">
            <h1> DRK</h1>
          </span>
          <div className="flex items-center gap-[1px] mt-[1px]"></div>
        </motion.div>

        <motion.div
          animate={{
            opacity: theme === 'light' ? 1 : 0.15,
            textShadow:
              theme === 'light' ? '0 0 4px rgba(59,130,246,0.3)' : 'none',
          }}
          className="flex flex-col items-end"
        >
          <span className="text-[5px] font-bold text-slate-600 leading-none tracking-widest">
            <h1>LITE</h1>
          </span>
        </motion.div>
      </div>

      {/* AKTIV ELEKTRON SKANER - ZOR Effekt */}
      <motion.div
        animate={{
          x: theme === 'dark' ? [-30, 100] : [-30, -30],
          opacity: theme === 'dark' ? [0, 0.4, 0] : 0,
        }}
        transition={{
          repeat: Infinity,
          duration: 1.8,
          ease: 'linear',
        }}
        className="absolute top-0 bottom-0 w-6 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent skew-x-12 blur-[1px]"
      />

      {/* IKKINCHI SKANER - Teskari yo'nalishda */}
      <motion.div
        animate={{
          x: theme === 'dark' ? [100, -30] : [100, 100],
          opacity: theme === 'dark' ? [0, 0.2, 0] : 0,
        }}
        transition={{
          repeat: Infinity,
          duration: 2.2,
          delay: 0.5,
          ease: 'linear',
        }}
        className="absolute top-0 bottom-0 w-4 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent skew-x-12"
      />

      {/* HARAKATLANUVCHI ENERGIYA NUQTALARI */}
      {[1, 2, 3].map(i => (
        <motion.div
          key={i}
          animate={{
            y: theme === 'dark' ? [0, -10, 0] : [0, 0, 0],
            opacity: theme === 'dark' ? [0.3, 0.8, 0.3] : 0,
          }}
          transition={{
            duration: 1.5,
            delay: i * 0.3,
            repeat: Infinity,
          }}
          className={cn(
            'absolute w-[1px] h-[1px] rounded-full',
            i === 1
              ? 'left-2 top-1 bg-blue-400'
              : i === 2
                ? 'left-4 top-3 bg-cyan-400'
                : 'left-6 top-2 bg-blue-300'
          )}
        />
      ))}

      {/* KUCHLI GLASS MORPHISM EFFEKT */}
      <div
        className={cn(
          'absolute inset-0 pointer-events-none rounded-lg mix-blend-overlay',
          theme === 'light'
            ? 'bg-gradient-to-b from-white/40 via-transparent to-white/20'
            : 'bg-gradient-to-b from-white/10 via-transparent to-black/20'
        )}
      />

      {/* KUCHLI CHEKKA CHIZIQLAR */}
      <div className="absolute inset-0 border border-transparent pointer-events-none rounded-lg">
        <div
          className={cn(
            'absolute inset-0 rounded-lg border',
            theme === 'light' ? 'border-white/30' : 'border-blue-900/40'
          )}
        />
        <div
          className={cn(
            'absolute inset-[1px] rounded-lg border',
            theme === 'light' ? 'border-blue-200/20' : 'border-blue-800/30'
          )}
        />
      </div>

      {/* YO'NALISH KO'RSATKICHLARI */}
      <div className="absolute top-1 left-2 right-2 flex justify-between pointer-events-none">
        <motion.div
          animate={{ opacity: theme === 'light' ? 0.6 : 0.2 }}
          className="w-1 h-[2px] bg-gradient-to-r from-blue-400 to-transparent rounded-full"
        />
        <motion.div
          animate={{ opacity: theme === 'dark' ? 0.6 : 0.2 }}
          className="w-1 h-[2px] bg-gradient-to-l from-cyan-400 to-transparent rounded-full"
        />
      </div>
    </motion.button>
  )

  return (
    <>
      {/* Main kontent bilan orani ochish uchun:
          Headerga 'fixed' berilgani uchun u main ustiga chiqib qoladi.
          Shu sababli bo'sh div (spacer) qo'shildi. 
      */}
      {/* <div className={cn("transition-all duration-500", scrolled ? "h-[70px]" : "h-[90px]")} /> */}

      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-[1000] transition-all duration-500',
          scrolled
            ? 'py-2 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md shadow-lg'
            : 'py-4'
        )}
      >
        <nav className="container mx-auto px-4">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="relative rounded-2xl lg:rounded-3xl px-4 lg:px-6 py-2 flex items-center justify-between bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl"
          >
            <Link
              to="/"
              className="flex items-center gap-2 shrink-0 group transition-transform active:scale-95"
            >
              <img
                src={logo2}
                alt="Logo"
                className="h-8 lg:h-11 w-auto group-hover:brightness-110 transition-all"
              />
              <div className="h-6 w-[1px] bg-slate-300 dark:bg-slate-700 mx-1" />
              <img
                src={logo1}
                alt="Logo"
                className="h-6 lg:h-9 w-auto group-hover:brightness-110 transition-all"
              />
            </Link>

            <div className="hidden xl:flex items-center gap-1">
              {currentContent.navItems.map(item => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() =>
                    item.dropdown && setActiveDropdown(item.label)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      to={item.href || '#'}
                      className={cn(
                        'px-3 py-2 text-[15px] font-bold flex items-center gap-1 transition-all rounded-xl',
                        location.pathname === item.href
                          ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/20'
                          : 'text-slate-700 dark:text-slate-200 hover:text-blue-600 hover:bg-slate-50 dark:hover:bg-slate-800'
                      )}
                    >
                      {item.label}
                      {item.dropdown && (
                        <ChevronDown
                          size={14}
                          className={cn(
                            'transition-transform duration-300',
                            activeDropdown === item.label && 'rotate-180'
                          )}
                        />
                      )}
                    </Link>
                  </motion.div>

                  <AnimatePresence>
                    {item.dropdown && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 15, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        className="absolute top-full left-0 pt-3 w-72"
                      >
                        <div className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl p-2 shadow-2xl overflow-hidden">
                          {item.dropdown.map((drop, idx) => (
                            <motion.div
                              key={drop.label}
                              initial={{ x: -10, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: idx * 0.05 }}
                            >
                              <Link
                                to={drop.href}
                                className="flex items-start gap-4 p-3 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all group"
                              >
                                <div className="p-2 bg-slate-50 dark:bg-slate-700 group-hover:bg-blue-600 group-hover:text-white text-blue-600 dark:text-blue-400 rounded-lg transition-colors">
                                  <drop.icon size={20} />
                                </div>
                                <div>
                                  <div className="text-sm font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                                    {drop.label}
                                  </div>
                                  <div className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">
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

            <div className="flex items-center gap-3 lg:gap-4">
              <div className="hidden sm:block">
                <ThemeToggle />
              </div>

              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  className="h-9 px-3 flex items-center gap-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700 transition-all font-bold text-sm text-slate-700 dark:text-slate-200"
                >
                  <span className="w-5">{languages[selectedLang].label}</span>
                  <ChevronDown
                    size={14}
                    className={cn(
                      'transition-transform',
                      langDropdownOpen && 'rotate-180'
                    )}
                  />
                </motion.button>
                <AnimatePresence>
                  {langDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute top-full right-0 mt-2 w-40 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl p-1 shadow-2xl z-50"
                    >
                      {Object.values(languages).map(lang => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setSelectedLang(lang.code)
                            setLangDropdownOpen(false)
                          }}
                          className={cn(
                            'w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-all',
                            selectedLang === lang.code
                              ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/30'
                              : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/50'
                          )}
                        >
                          {lang.name}{' '}
                          <span className="text-base">{lang.flag}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileMenuOpen(true)}
                className="xl:hidden w-9 h-9 flex items-center justify-center rounded-xl bg-slate-900 dark:bg-blue-600 text-white shadow-lg shadow-blue-500/20"
              >
                <Menu size={20} />
              </motion.button>
            </div>
          </motion.div>

          <AnimatePresence>
            {mobileMenuOpen && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[1008] xl:hidden"
                />
                <motion.div
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                  className="fixed top-0 right-0 bottom-0 w-[85%] max-w-[320px] bg-white dark:bg-slate-900 z-[1009] flex flex-col shadow-2xl"
                >
                  <div className="p-5 border-b dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/20">
                    <div className="flex items-center gap-2">
                      <img src={logo2} alt="Logo" className="h-7" />
                      <img src={logo1} alt="Logo" className="h-5" />
                    </div>
                    <div className="flex items-center gap-2">
                      <ThemeToggle />
                      <button
                        onClick={() => setMobileMenuOpen(false)}
                        className="w-9 h-9 flex items-center justify-center rounded-full bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm"
                      >
                        <X size={20} />
                      </button>
                    </div>
                  </div>
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {currentContent.navItems.map((item, idx) => (
                      <motion.div
                        key={item.label}
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className="space-y-2"
                      >
                        {item.href ? (
                          <Link
                            to={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-lg font-bold block p-2 text-slate-900 dark:text-white hover:text-blue-600 transition-colors"
                          >
                            {item.label}
                          </Link>
                        ) : (
                          <div className="space-y-2">
                            <div className="px-2 text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                              {item.label}
                            </div>
                            <div className="grid gap-2">
                              {item.dropdown?.map(drop => (
                                <Link
                                  key={drop.label}
                                  to={drop.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="flex items-center gap-4 p-3 bg-slate-50 dark:bg-slate-800/40 rounded-xl active:bg-blue-50 dark:active:bg-blue-900/20 transition-all"
                                >
                                  <div className="p-2 bg-white dark:bg-slate-800 rounded-lg text-blue-600 shadow-sm">
                                    <drop.icon size={18} />
                                  </div>
                                  <div>
                                    <div className="text-sm font-bold text-slate-900 dark:text-white">
                                      {drop.label}
                                    </div>
                                    <div className="text-[10px] text-slate-500">
                                      {drop.desc}
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </nav>
      </header>
    </>
  )
}
