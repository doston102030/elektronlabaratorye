import { Project } from '@/components/ui/ProjectCard'

export const projects: Project[] = [
  {
    id: 'smart-city',
    title: 'Aqlli shahar infratuzilmasini rivojlantirish loyihasi',
    description:
      "Zamonaviy texnologiyalar yordamida shahar infratuzilmasini avtomatlashtirish va optimallashtirish bo'yicha keng ko'lamli tadqiqot loyihasi.",
    image:
      'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800&auto=format&fit=crop',
    category: 'Texnologiya',
    date: '2024-01-15',
  },
  {
    id: 'renewable-energy',
    title: 'Qayta tiklanuvchi energiya manbalari tadqiqoti',
    description:
      "Quyosh va shamol energiyasini samarali ishlatish bo'yicha innovatsion yechimlar va amaliy tadqiqotlar.",
    image:
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format&fit=crop',
    category: 'Energiya',
    date: '2024-02-20',
  },
  {
    id: 'ai-education',
    title: "Ta'limda sun'iy intellekt qo'llanilishi",
    description:
      "O'quv jarayonini personalizatsiyalash va samaradorligini oshirish uchun AI texnologiyalaridan foydalanish.",
    image:
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop',
    category: "Ta'lim",
    date: '2024-03-10',
  },
  {
    id: 'water-management',
    title: 'Suv resurslarini boshqarish tizimi',
    description:
      "Suv resurslaridan oqilona foydalanish va ularni himoya qilish bo'yicha kompleks yondashuv.",
    image:
      'https://images.unsplash.com/photo-1468421870903-4df1664ac249?w=800&auto=format&fit=crop',
    category: 'Ekologiya',
    date: '2024-04-05',
  },
  {
    id: 'digital-health',
    title: "Raqamli sog'liqni saqlash platformasi",
    description:
      "Tibbiyot xizmatlarini raqamlashtirish va aholining sog'lig'ini nazorat qilish tizimini yaratish.",
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop',
    category: 'Tibbiyot',
    date: '2024-05-12',
  },
  {
    id: 'agritech',
    title: "Qishloq xo'jaligida zamonaviy texnologiyalar",
    description:
      "Fermer xo'jaliklarida IoT va dronlardan foydalanish orqali hosildorlikni oshirish loyihasi.",
    image:
      'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&auto=format&fit=crop',
    category: 'Agrotexnologiya',
    date: '2024-06-18',
  },
]

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id)
}

export const getRelatedProjects = (
  currentId: string,
  limit: number = 3
): Project[] => {
  return projects.filter(project => project.id !== currentId).slice(0, limit)
}
