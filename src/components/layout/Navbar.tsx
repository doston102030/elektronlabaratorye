import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import logo1 from '@/assets/images/logo-1.png'
import logo2 from '@/assets/images/logo-2.png'

import {
  ChevronDown,
  Menu,
  X,
  User,
  GraduationCap,
  BookOpen,
  Users,
  Briefcase,
  FileText,
} from 'lucide-react'
import { cn } from '@/lib/utils'

// 1. Tillar ro'yxati
const languages = {
  uz: { code: 'uz', name: "O'zbek", flag: '🇺🇿', label: 'UZ' },
  ru: { code: 'ru', name: 'Русский', flag: '🇷🇺', label: 'RU' },
  en: { code: 'en', name: 'English', flag: '🇺🇸', label: 'EN' },
} as const

type LanguageCode = keyof typeof languages

// 2. Rasmdagi barcha ma'lumotlar kiritilgan kontent
const navContent = {
  uz: {
    navItems: [
      { label: 'Bosh sahifa', href: '/' },
      {
        label: 'Biz haqimizda',
        dropdown: [
          { label: 'Kompaniya', href: '/about/company', desc: 'Tarix va maqsadlar', icon: Briefcase },
          { label: 'Universitet', href: '/about/university', desc: 'Akademik muhit', icon: GraduationCap },
          { label: 'Qabul', href: '/about/admissions', desc: 'Talablar', icon: Users },
          { label: 'Hujjatlar', href: '/about/documents', desc: 'Litsenziyalar', icon: FileText },
        ],
      },
      {
        label: 'Faoliyat',
        dropdown: [
          { label: 'Loyihalar', href: '/activities/projects', desc: 'Bizning innovatsiyalar', icon: Briefcase },
          { label: 'Ilm-fan', href: '/activities/science', desc: 'Tadqiqot ishlari', icon: BookOpen },
        ],
      },
      { label: 'Hamkorlar', href: '/partners' },
      {
        label: 'Resurslar',
        dropdown: [
          { label: 'Maqolalar', href: '/resources/articles', desc: 'Bilimlar bazasi', icon: FileText },
          { label: 'Kutubxona', href: '/resources/library', desc: 'Raqamli kutubxona', icon: BookOpen },
        ],
      },
    ],
    login: 'Login',
  },
  ru: {
    navItems: [
      { label: 'Главная', href: '/' },
      {
        label: 'О нас',
        dropdown: [
          { label: 'Компания', href: '/about/company', desc: 'История и цели', icon: Briefcase },
          { label: 'Университет', href: '/about/university', desc: 'Академическая среда', icon: GraduationCap },
          { label: 'Прием', href: '/about/admissions', desc: 'Требования', icon: Users },
          { label: 'Документы', href: '/about/documents', desc: 'Лицензии', icon: FileText },
        ],
      },
      {
        label: 'Деятельность',
        dropdown: [
          { label: 'Проекты', href: '/activities/projects', desc: 'Наши инновации', icon: Briefcase },
          { label: 'Наука', href: '/activities/science', desc: 'Исследования', icon: BookOpen },
        ],
      },
      { label: 'Партнеры', href: '/partners' },
      {
        label: 'Ресурсы',
        dropdown: [
          { label: 'Статьи', href: '/resources/articles', desc: 'База знаний', icon: FileText },
          { label: 'Библиотека', href: '/resources/library', desc: 'Цифровая библиотека', icon: BookOpen },
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
          { label: 'Company', href: '/about/company', desc: 'History and goals', icon: Briefcase },
          { label: 'University', href: '/about/university', desc: 'Academic environment', icon: GraduationCap },
          { label: 'Admissions', href: '/about/admissions', desc: 'Requirements', icon: Users },
          { label: 'Documents', href: '/about/documents', desc: 'Licenses', icon: FileText },
        ],
      },
      {
        label: 'Activities',
        dropdown: [
          { label: 'Projects', href: '/activities/projects', desc: 'Our innovations', icon: Briefcase },
          { label: 'Science', href: '/activities/science', desc: 'Research works', icon: BookOpen },
        ],
      },
      { label: 'Partners', href: '/partners' },
      {
        label: 'Resources',
        dropdown: [
          { label: 'Articles', href: '/resources/articles', desc: 'Knowledge base', icon: FileText },
          { label: 'Library', href: '/resources/library', desc: 'Digital library', icon: BookOpen },
        ],
      },
    ],
    login: 'Login',
  }
}

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [selectedLang, setSelectedLang] = useState<LanguageCode>('uz')
  const [langDropdownOpen, setLangDropdownOpen] = useState(false)
  const location = useLocation()

  const currentContent = navContent[selectedLang]

  // Tilni almashtirish funksiyasi
  const changeLanguage = (code: LanguageCode) => {
    setSelectedLang(code)
    setLangDropdownOpen(false)
  }

  // Scrollni qulflash
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''
  }, [mobileMenuOpen])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => { setMobileMenuOpen(false) }, [location])

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-[1000] transition-all duration-500',
      scrolled ? 'py-2' : 'py-4'
    )}>
      <nav className="container mx-auto px-4">
        <motion.div className="relative rounded-2xl lg:rounded-3xl px-4 lg:px-6 py-2 flex items-center justify-between bg-white/90 backdrop-blur-xl border border-slate-200 shadow-lg">
          
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img src={logo2} alt="Logo" className="h-8 lg:h-11 w-auto" />
            <div className="h-6 w-[1px] bg-slate-300 mx-1" />
            <img src={logo1} alt="Logo" className="h-6 lg:h-9 w-auto" />
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden xl:flex items-center gap-1">
            {currentContent.navItems.map((item) => (
              <div 
                key={item.label} 
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link to={item.href || '#'} className="px-3 py-2 text-[15px] font-bold text-slate-700 hover:text-blue-600 flex items-center gap-1 transition-colors">
                  {item.label}
                  {item.dropdown && <ChevronDown size={14} className={cn('transition-transform', activeDropdown === item.label && 'rotate-180')} />}
                </Link>

                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.label && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute top-full left-0 pt-2 w-72">
                      <div className="bg-white border border-slate-100 rounded-2xl p-2 shadow-2xl">
                        {item.dropdown.map((drop) => (
                          <Link key={drop.label} to={drop.href} className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-all">
                            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                              <drop.icon size={20} />
                            </div>
                            <div>
                              <div className="text-sm font-bold text-slate-900 leading-none mb-1">{drop.label}</div>
                              <div className="text-[11px] text-slate-500">{drop.desc}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* ACTIONS */}
          <div className="flex items-center gap-3">
            {/* Til Tanlash */}
            <div className="relative">
              <button 
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="h-10 px-3 flex items-center gap-2 rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors font-bold text-sm"
              >
                <span>{languages[selectedLang].label}</span>
                <ChevronDown size={14} className={cn('transition-transform', langDropdownOpen && 'rotate-180')} />
              </button>
              
              <AnimatePresence>
                {langDropdownOpen && (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="absolute top-full right-0 mt-2 w-36 bg-white border border-slate-100 rounded-xl p-1 shadow-xl z-50">
                    {Object.values(languages).map((lang) => (
                      <button 
                        key={lang.code} 
                        onClick={() => changeLanguage(lang.code)}
                        className={cn(
                          "w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors",
                          selectedLang === lang.code && "text-blue-600 bg-blue-50"
                        )}
                      >
                        {lang.name} <span>{lang.flag}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Desktop Login */}
            <Link to="/login" className="hidden lg:flex items-center gap-2 px-6 py-2.5 bg-[#0f172a] text-white rounded-xl font-bold text-sm hover:bg-blue-600 transition-all">
              <User size={18} /> {currentContent.login}
            </Link>

            {/* Hamburger */}
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="xl:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-[#0f172a] text-white"
            >
              <Menu size={22} />
            </button>
          </div>
        </motion.div>

        {/* MOBILE MENU PANEL */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setMobileMenuOpen(false)} className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[1008] xl:hidden" />
              <motion.div 
                initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} 
                transition={{ type: 'spring', damping: 25, stiffness: 120 }} // Mayin animatsiya
                className="fixed top-0 right-0 bottom-0 w-[85%] max-w-[400px] bg-white z-[1009] flex flex-col shadow-2xl"
              >
                <div className="p-5 border-b flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <img src={logo2} alt="Logo" className="h-8" />
                    <img src={logo1} alt="Logo" className="h-6" />
                  </div>
                  <button onClick={() => setMobileMenuOpen(false)} className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100"><X size={24} /></button>
                </div>
                
                <div className="flex-1 overflow-y-auto p-6 space-y-8">
                  {currentContent.navItems.map((item) => (
                    <div key={item.label} className="space-y-4">
                      {item.href ? (
                        <Link to={item.href} className="text-xl font-bold block text-slate-900">{item.label}</Link>
                      ) : (
                        <div className="space-y-4">
                          <div className="text-[11px] font-black text-blue-600 uppercase tracking-widest">{item.label}</div>
                          <div className="grid gap-3">
                            {item.dropdown?.map((drop) => (
                              <Link key={drop.label} to={drop.href} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl active:bg-blue-50 transition-all">
                                <div className="p-2 bg-white rounded-lg text-blue-600 shadow-sm"><drop.icon size={20} /></div>
                                <div>
                                  <div className="text-sm font-bold text-slate-900">{drop.label}</div>
                                  <div className="text-[10px] text-slate-500">{drop.desc}</div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="p-6 border-t bg-white">
                  <Link to="/login" className="w-full py-4 bg-[#0f172a] text-white rounded-2xl font-bold flex justify-center items-center gap-2 shadow-lg active:scale-95 transition-all">
                    <User size={20} /> {currentContent.login}
                  </Link>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}