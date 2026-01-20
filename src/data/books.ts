export interface Book {
  id: string
  title: string
  author: string
  year: number
  pages: number
  rating: number
  category: string
  cover: string
  description: string
  content: string[]
  downloadUrl?: string
}

export const books: Book[] = [
  {
    id: 'modern-education',
    title: "Zamonaviy ta'lim metodologiyasi",
    author: 'Prof. Abdulla Oripov',
    year: 2023,
    pages: 450,
    rating: 4.8,
    category: "Ta'lim",
    cover:
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&auto=format&fit=crop',
    description:
      "Bu kitob zamonaviy ta'lim metodologiyasi, pedagogik yondashuvlar va o'qitish usullari haqida batafsil ma'lumot beradi.",
    content: [
      'Kirish',
      "Zamonaviy ta'lim tizimi bugungi kunda tez sur'atlar bilan rivojlanmoqda. Raqamli texnologiyalar, sun'iy intellekt va innovatsion pedagogik yondashuvlar ta'lim jarayonini tubdan o'zgartirmoqda.",
      "1-bob: Ta'lim metodologiyasi asoslari",
      "Ta'lim metodologiyasi - bu o'qitish va o'rganish jarayonlarini tashkil etish, rejalashtirish va amalga oshirish usullari majmuasidir. Zamonaviy metodologiya talabalarning individual xususiyatlarini hisobga olishga asoslangan.",
      'Asosiy tamoyillar:',
      "• Talaba-markazli yondashuv - o'quvchi faol ishtirokchi sifatida",
      "• Amaliyotga yo'naltirilganlik - nazariyani amaliyot bilan bog'lash",
      '• Texnologik integratsiya - zamonaviy vositalardan foydalanish',
      "• Doimiy baholash - o'zluksiz monitoring va teskari aloqa",
      "2-bob: Raqamli ta'lim",
      "Raqamli ta'lim - bu axborot-kommunikatsiya texnologiyalaridan foydalangan holda ta'lim jarayonini tashkil etishdir. Bunga masofaviy ta'lim, onlayn kurslar va interaktiv o'quv materiallari kiradi.",
      "Raqamli ta'limning afzalliklari:",
      '• Vaqt va joydan mustaqillik',
      "• Individual sur'atda o'qish imkoniyati",
      "• Keng ko'lamli resurslarga kirish",
      "• O'zaro aloqa va hamkorlik imkoniyatlari",
      '3-bob: Innovatsion pedagogik texnologiyalar',
      "Zamonaviy ta'limda quyidagi innovatsion texnologiyalar keng qo'llanilmoqda: loyihaga asoslangan ta'lim, teskari sinf modeli, gamifikatsiya va boshqalar.",
      'Xulosa',
      "Zamonaviy ta'lim metodologiyasi doimiy rivojlanishda. Pedagoglar va ta'lim muassasalari yangi yondashuvlarni o'rganish va qo'llash orqali ta'lim sifatini yaxshilashlari mumkin.",
    ],
  },
  {
    id: 'ai-fundamentals',
    title: "Sun'iy intellekt asoslari",
    author: 'Dr. Jasur Aliyev',
    year: 2024,
    pages: 380,
    rating: 4.9,
    category: 'Texnologiya',
    cover:
      'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&auto=format&fit=crop',
    description:
      "Sun'iy intellekt texnologiyalari, mashina o'rganishi va chuqur o'rganish asoslari haqida to'liq qo'llanma.",
    content: [
      'Kirish',
      "Sun'iy intellekt (SI) - bu kompyuter tizimlarining inson intellektiga xos vazifalarni bajarishga qodirligidir. Bu kitob SI ning asosiy tushunchalari, algoritmlari va amaliy qo'llanilishi haqida.",
      "1-bob: Sun'iy intellekt tarixi",
      "Sun'iy intellekt g'oyasi 1950-yillarda paydo bo'lgan. Alan Tyuring mashinalar fikrlay olishi mumkinmi degan savolni qo'ygan va bu sohaning rivojlanishiga asos solgan.",
      "2-bob: Mashina o'rganishi",
      "Mashina o'rganishi - bu kompyuter tizimlarining ma'lumotlardan o'rganib, aniq dasturlashtirilmasdan qarorlar qabul qilish qobiliyatidir.",
      "Mashina o'rganishining turlari:",
      "• Nazorat ostidagi o'rganish (Supervised Learning)",
      "• Nazoratsiz o'rganish (Unsupervised Learning)",
      "• Mustahkamlovchi o'rganish (Reinforcement Learning)",
      '3-bob: Neyron tarmoqlar',
      "Neyron tarmoqlar inson miyasining ishlash tamoyillariga asoslangan hisoblash modellaridir. Ular tasvir va ovozni tanish, tabiiy tilni qayta ishlash kabi vazifalarda keng qo'llaniladi.",
      "4-bob: Chuqur o'rganish",
      "Chuqur o'rganish - bu ko'p qatlamli neyron tarmoqlardan foydalanadigan mashina o'rganish turi. U murakkab vazifalarni hal qilishda juda samarali.",
      'Xulosa',
      "Sun'iy intellekt kelajakda hayotimizning barcha sohalarida muhim rol o'ynaydi. Ushbu texnologiyani o'rganish va tushunish zamonaviy mutaxassislar uchun zarurdir.",
    ],
  },
  {
    id: 'research-methods',
    title: 'Ilmiy tadqiqot usullari',
    author: 'Dr. Malika Tosheva',
    year: 2023,
    pages: 320,
    rating: 4.7,
    category: 'Metodologiya',
    cover:
      'https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&auto=format&fit=crop',
    description:
      "Ilmiy tadqiqot metodologiyasi, ma'lumotlar to'plash va tahlil qilish usullari haqida amaliy qo'llanma.",
    content: [
      'Kirish',
      'Ilmiy tadqiqot - bu yangi bilimlarni kashf etish, mavjud nazariyalarni sinash va amaliy muammolarni hal qilish uchun ishlatiladigan tizimli jarayondir.',
      '1-bob: Tadqiqot turlari',
      "Ilmiy tadqiqotlar bir necha turga bo'linadi: fundamental, amaliy, miqdoriy, sifat va aralash usullar.",
      "Fundamental tadqiqot nazariy bilimlarni boyitishga qaratilgan bo'lsa, amaliy tadqiqot aniq muammolarni hal qilishga yo'naltirilgan.",
      '2-bob: Tadqiqot dizayni',
      "Tadqiqot dizayni - bu tadqiqotni rejalashtirish va tashkil etish jarayonidir. U tadqiqot savollarini shakllantirish, metodlarni tanlash va ma'lumotlar yig'ish strategiyasini belgilashni o'z ichiga oladi.",
      "3-bob: Ma'lumotlar to'plash usullari",
      'Asosiy usullar:',
      "• So'rovnoma va intervyu",
      '• Kuzatuv va eksperiment',
      '• Hujjatlar tahlili',
      '• Fokus-guruhlar',
      "4-bob: Ma'lumotlar tahlili",
      "To'plangan ma'lumotlarni tahlil qilish tadqiqotning muhim bosqichidir. Miqdoriy tahlilda statistik usullar, sifat tahlilida esa kontentni kodlash va tematik tahlil qo'llaniladi.",
      'Xulosa',
      "Ilmiy tadqiqot usullarini to'g'ri tanlash va qo'llash sifatli natijalar olishning kalitidir.",
    ],
  },
  {
    id: 'economics-theory',
    title: 'Iqtisodiyot nazariyasi',
    author: 'Prof. Nodira Qodirova',
    year: 2022,
    pages: 520,
    rating: 4.6,
    category: 'Iqtisodiyot',
    cover:
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&auto=format&fit=crop',
    description:
      "Mikroiqtisodiyot va makroiqtisodiyot asoslari, bozor iqtisodiyoti tamoyillari haqida to'liq darslik.",
    content: [
      'Kirish',
      "Iqtisodiyot - bu cheklangan resurslardan foydalanib, cheksiz ehtiyojlarni qondirish haqidagi fandir. Bu kitob iqtisodiyotning asosiy tushunchalari va tamoyillarini o'rgatadi.",
      '1-bob: Mikroiqtisodiyot asoslari',
      "Mikroiqtisodiyot individual iqtisodiy subyektlar - uy xo'jaliklari, firmalar va bozorlar - xatti-harakatlarini o'rganadi.",
      'Asosiy tushunchalar:',
      '• Talab va taklif qonuni',
      '• Bozor muvozanati',
      '• Elastiklik',
      '• Ishlab chiqarish xarajatlari',
      '2-bob: Makroiqtisodiyot',
      "Makroiqtisodiyot butun iqtisodiyotni o'rganadi: YAIMni, inflyatsiyani, ishsizlikni va iqtisodiy o'sishni tahlil qiladi.",
      '3-bob: Pul va bank tizimi',
      "Pul iqtisodiyotda muhim rol o'ynaydi. Markaziy banklar pul-kredit siyosati orqali iqtisodiyotni boshqaradilar.",
      '4-bob: Xalqaro savdo',
      "Xalqaro savdo mamlakatlar o'rtasida tovarlar va xizmatlar almashuvidir. U ixtisoslashuv va qiyosiy ustunlik tamoyillariga asoslanadi.",
      'Xulosa',
      'Iqtisodiyot nazariyasini tushunish biznes yuritish, siyosat shakllantirish va kundalik qarorlar qabul qilishda yordam beradi.',
    ],
  },
  {
    id: 'python-programming',
    title: 'Python dasturlash tili',
    author: 'Sherzod Kamolov',
    year: 2024,
    pages: 280,
    rating: 4.9,
    category: 'Dasturlash',
    cover:
      'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&auto=format&fit=crop',
    description:
      "Python dasturlash tilini noldan o'rganish uchun amaliy qo'llanma va mashqlar to'plami.",
    content: [
      'Kirish',
      "Python - bu o'rganish oson, ammo kuchli dasturlash tilidir. U veb-ishlab chiqish, ma'lumotlar tahlili, sun'iy intellekt va boshqa ko'plab sohalarda qo'llaniladi.",
      '1-bob: Python asoslari',
      "Python bilan ishlashni boshlash uchun avval uni o'rnatish kerak. Python.org saytidan yuklab olish mumkin.",
      'Asosiy tushunchalar:',
      "• O'zgaruvchilar va ma'lumot turlari",
      '• Arifmetik operatorlar',
      '• String (satr) bilan ishlash',
      "• Ro'yxatlar va lug'atlar",
      '2-bob: Boshqaruv tuzilmalari',
      'Dasturning oqimini boshqarish uchun shartli operatorlar va sikllardan foydalaniladi.',
      'Misollar:',
      '• if-elif-else shartli operatori',
      '• for va while sikllari',
      '• break va continue buyruqlari',
      '3-bob: Funksiyalar',
      "Funksiyalar kodni qayta ishlatish va tashkil qilish imkonini beradi. Pythonda funksiya def kalit so'zi bilan e'lon qilinadi.",
      "4-bob: Obyektga yo'naltirilgan dasturlash",
      "OYD - bu dasturlash paradigmasi bo'lib, unda ma'lumotlar va ular ustida bajariladigan amallar birgalikda 'obyekt' sifatida ifodalanadi.",
      'Xulosa',
      "Python o'rganish - bu dasturlash dunyosiga eng yaxshi kirishdir. Amaliyot qiling va yangi loyihalar yarating!",
    ],
  },
  {
    id: 'ecology-sustainability',
    title: 'Ekologiya va barqaror rivojlanish',
    author: 'Dr. Dilnoza Rahimova',
    year: 2023,
    pages: 340,
    rating: 4.5,
    category: 'Ekologiya',
    cover:
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&auto=format&fit=crop',
    description:
      "Atrof-muhit muhofazasi, iqlim o'zgarishi va barqaror rivojlanish haqida zamonaviy qo'llanma.",
    content: [
      'Kirish',
      "Ekologiya - bu tirik organizmlar va ularning atrof-muhit bilan o'zaro ta'sirini o'rganadigan fandir. Bugungi kunda ekologik muammolar global miqyosda dolzarb bo'lib qoldi.",
      '1-bob: Ekotizimlar',
      "Ekotizim - bu ma'lum bir hududdagi barcha tirik organizmlar va ularning notirik muhiti birligi. Ekotizimlar o'rmon, cho'l, okean va boshqalarni o'z ichiga oladi.",
      "2-bob: Iqlim o'zgarishi",
      "Iqlim o'zgarishi - bu Yer iqlimining uzoq muddatli o'zgarishidir. Asosan inson faoliyati natijasida atmosferaga chiqariladigan issiqxona gazlari bunga sabab bo'lmoqda.",
      'Oqibatlari:',
      "• Haroratning ko'tarilishi",
      '• Okean sathining oshishi',
      '• Ekstremal ob-havo hodisalari',
      "• Biodiversitetning yo'qolishi",
      '3-bob: Barqaror rivojlanish',
      'Barqaror rivojlanish - bu kelajak avlodlarning ehtiyojlarini qondirish qobiliyatiga zarar bermasdan, hozirgi ehtiyojlarni qondiruvchi rivojlanishdir.',
      '4-bob: Yashil texnologiyalar',
      "Yashil texnologiyalar atrof-muhitga zarar yetkazmasdan iqtisodiy rivojlanishni ta'minlaydi. Bularga qayta tiklanuvchi energiya manbalari, elektr transporti va boshqalar kiradi.",
      'Xulosa',
      'Har birimiz ekologik muammolarni hal qilishda ishtirok etishimiz va barqaror turmush tarzini tanlashimiz muhimdir.',
    ],
  },
]

export const getBookById = (id: string): Book | undefined => {
  return books.find(book => book.id === id)
}

export const getBooksByCategory = (category: string): Book[] => {
  if (category === 'Hammasi') return books
  return books.filter(book => book.category === category)
}

export const searchBooks = (query: string): Book[] => {
  const lowercaseQuery = query.toLowerCase()
  return books.filter(
    book =>
      book.title.toLowerCase().includes(lowercaseQuery) ||
      book.author.toLowerCase().includes(lowercaseQuery) ||
      book.category.toLowerCase().includes(lowercaseQuery)
  )
}
