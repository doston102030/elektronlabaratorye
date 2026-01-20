
import { Article } from '@/components/ui/ArticleCard';

export interface ArticleFull extends Article {
  content: string[];
  readTime: string;
}

export const articles: ArticleFull[] = [
  {
    id: 'future-of-education',
    title: "Ta'lim kelajagi: 2030 yilga qadar o'zgarishlar",
    excerpt: "Ta'lim tizimida kutilayotgan transformatsiyalar va ularga tayyorgarlik ko'rish yo'llari haqida ekspert fikrlari.",
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop',
    author: 'Dr. Aziza Karimova',
    date: '2024-06-15',
    category: "Ta'lim",
    readTime: '8 daqiqa',
    content: [
      "Ta'lim tizimi insoniyat tarixida hech qachon bugungi kabi tez sur'atlar bilan o'zgarmagan. Raqamli texnologiyalar, sun'iy intellekt va global pandemiya ta'sirida ta'lim paradigmasi tubdan qayta ko'rib chiqilmoqda.",
      "2030 yilga kelib ta'lim tizimida quyidagi asosiy o'zgarishlar kutilmoqda:",
      "1. Personallashtirilgan ta'lim",
      "Sun'iy intellekt yordamida har bir talabaning o'ziga xos o'rganish uslubi, sur'ati va qiziqishlariga moslashtirilgan ta'lim dasturlari yaratiladi. Adaptiv o'quv tizimlari talabalarning kuchli va zaif tomonlarini aniqlab, ularga mos kontentni taqdim etadi.",
      "2. Aralash ta'lim modeli",
      "An'anaviy sinf xonasi ta'limi va onlayn ta'lim uyg'unlashadi. Talabalar nazariy bilimlarni mustaqil o'rganadilar, sinf xonasida esa amaliy mashg'ulotlar, muhokamalar va loyihalar ustida ishlaydilar.",
      "3. Ko'nikmaga asoslangan ta'lim",
      "Diplom va sertifikatlardan ko'ra, aniq ko'nikmalar muhimroq bo'ladi. Ish beruvchilar nomzodlarning amaliy qobiliyatlarini baholash uchun mikro-sertifikatlar va portfolio asosida tanlov o'tkazadilar.",
      "4. Umrbod ta'lim",
      "Kasbiy bilimlar tezlik bilan eskirib bormoqda. Kelajakda odamlar butun hayotlari davomida yangi ko'nikmalar o'rganishga majbur bo'ladilar. Ta'lim muassasalari barcha yoshdagi o'quvchilar uchun moslashuvchan dasturlar taklif etadilar.",
      "5. Virtual va kengaytirilgan reallik",
      "VR va AR texnologiyalari ta'limda keng qo'llaniladi. Talabalar virtual laboratoriyalarda eksperimentlar o'tkazadilar, tarixiy voqealarni 'jonli' ko'radilar va murakkab tushunchalarni 3D modellarda o'rganadilar.",
      "Xulosa",
      "Ta'lim tizimidagi bu o'zgarishlarga tayyorlanish uchun pedagoglar, talabalar va ota-onalar yangi texnologiyalarni o'rganishlari, moslashuvchan bo'lishlari va doimiy o'z ustlarida ishlashlari kerak. Kelajak ta'limi shunchaki bilim berish emas, balki mustaqil fikrlash, muammolarni hal qilish va hayot bo'yi o'rganish ko'nikmalarini rivojlantirishga yo'naltirilgan bo'ladi."
    ],
  },
  {
    id: 'innovation-hub',
    title: "Innovatsiya markazlari va ularning roli",
    excerpt: "Zamonaviy innovatsiya ekotizimini shakllantirishda markazlarning ahamiyati va rivojlanish strategiyalari.",
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop',
    author: 'Prof. Bobur Rahmonov',
    date: '2024-06-10',
    category: 'Innovatsiya',
    readTime: '6 daqiqa',
    content: [
      "Innovatsiya markazlari zamonaviy iqtisodiyotning harakatlantiruvchi kuchiga aylandi. Ular startaplar, tadqiqotchilar va investorlarni birlashtiruvchi muhim platforma vazifasini bajarmoqda.",
      "Innovatsiya markazlarining asosiy vazifalari:",
      "• Startaplarni qo'llab-quvvatlash va mentorlik",
      "• Tadqiqot va tijoratlashtirish o'rtasidagi ko'prik",
      "• Investitsiyalarni jalb qilish",
      "• Bilim va tajriba almashish platformasi",
      "O'zbekistonda innovatsiya ekotizimi",
      "So'nggi yillarda O'zbekistonda innovatsiya infratuzilmasi jadal rivojlanmoqda. IT Park, texnoparklar va biznes-inkubatorlar faol ishlayapti. Ammo rivojlangan mamlakatlarga yetib olish uchun yana ko'p ish qilish kerak.",
      "Muvaffaqiyatli innovatsiya markazining kaliti - bu ochiq va hamkorlikka asoslangan madaniyat yaratishdir. Turli sohalar vakillari o'rtasidagi sinergiya eng yaxshi g'oyalar tug'ilishiga olib keladi.",
      "Xulosa o'rnida shuni ta'kidlash mumkinki, innovatsiya markazlari nafaqat iqtisodiy rivojlanish, balki ijtimoiy muammolarni hal qilish va yashash sifatini oshirish uchun ham muhim ahamiyatga ega."
    ],
  },
  {
    id: 'research-methods',
    title: "Ilmiy tadqiqot metodologiyasi: zamonaviy yondashuvlar",
    excerpt: "Ilmiy izlanishlarda qo'llaniladigan eng samarali usullar va ularning amaliy qo'llanilishi.",
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&auto=format&fit=crop',
    author: 'Dr. Malika Tosheva',
    date: '2024-06-05',
    category: 'Metodologiya',
    readTime: '10 daqiqa',
    content: [
      "Ilmiy tadqiqot metodologiyasi - bu bilim olish va muammolarni hal qilishning tizimli yondashuvidir. Zamonaviy tadqiqotlarda an'anaviy usullar bilan birga yangi, innovatsion metodlar ham qo'llanilmoqda.",
      "Sifat tadqiqot usullari:",
      "Sifat tadqiqoti hodisalarni chuqur tushunish, ma'nolarni ochib berish va nazariyalar yaratishga qaratilgan. Asosiy usullari: intervyu, kuzatuv, fokus-guruhlar va kontent tahlili.",
      "Miqdoriy tadqiqot usullari:",
      "Miqdoriy tadqiqot raqamli ma'lumotlar asosida umumlashtirilgan xulosalar chiqarishga yo'naltirilgan. So'rovnomalar, eksperimentlar va statistik tahlil asosiy vositalaridir.",
      "Aralash usullar:",
      "Zamonaviy tadqiqotlarda ko'pincha sifat va miqdoriy usullar birgalikda qo'llaniladi. Bu yondashuv tadqiqot mavzusini har tomonlama o'rganish imkonini beradi.",
      "Katta ma'lumotlar tahlili:",
      "Big Data va mashina o'rganish algoritmlari tadqiqotlarda yangi imkoniyatlar ochdi. Katta hajmdagi ma'lumotlarni tahlil qilish orqali ilgari ko'rinmas bo'lgan qonuniyatlarni aniqlash mumkin.",
      "Etik jihatlar:",
      "Har qanday tadqiqotda axloqiy me'yorlarga rioya qilish muhim. Ishtirokchilarning roziligi, maxfiylik va ma'lumotlar xavfsizligi asosiy talablardir.",
      "Xulosa",
      "To'g'ri metodologiyani tanlash tadqiqot muvaffaqiyatining kalitidir. Tadqiqotchi o'z maqsadlariga qarab eng mos usullarni tanlashi va ularni professional darajada qo'llashi kerak."
    ],
  },
  {
    id: 'digital-transformation',
    title: "Raqamli transformatsiya: biznes va jamiyat",
    excerpt: "Raqamlashtirish jarayonlari jamiyat va biznes sohasida qanday o'zgarishlar olib kelmoqda.",
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop',
    author: 'Jasur Aliyev',
    date: '2024-05-28',
    category: 'Texnologiya',
    readTime: '7 daqiqa',
    content: [
      "Raqamli transformatsiya - bu raqamli texnologiyalar yordamida biznes jarayonlari, kompaniya madaniyati va mijoz tajribasini tubdan o'zgartirish jarayonidir.",
      "Raqamli transformatsiyaning asosiy yo'nalishlari:",
      "1. Bulutli texnologiyalar - ma'lumotlarni saqlash va qayta ishlashni bulutga ko'chirish",
      "2. Sun'iy intellekt - qaror qabul qilish va avtomatlashtirish",
      "3. Internet of Things - qurilmalarni ulash va ma'lumot yig'ish",
      "4. Blockchain - ishonchli va shaffof tranzaksiyalar",
      "O'zbekistonda raqamli transformatsiya",
      "Mamlakatimizda 'Raqamli O'zbekiston - 2030' strategiyasi doirasida keng ko'lamli islohotlar olib borilmoqda. Davlat xizmatlari raqamlashtirilmoqda, elektron tijorat rivojlanmoqda va IT-soha tez sur'atlarda o'sib bormoqda.",
      "Muammolar va imkoniyatlar:",
      "Raqamli transformatsiya jarayonida bir qator qiyinchiliklar mavjud: kadrlar yetishmasligi, infratuzilma muammolari va kiberxavfsizlik xatarlari. Biroq, bu jarayon katta imkoniyatlar ham ochadi: samaradorlikni oshirish, yangi bozorlarni egallash va innovatsion mahsulotlar yaratish.",
      "Kelajak tendensiyalari:",
      "Kelgusi yillarda metaverse, Web 3.0 va kvant hisoblash kabi texnologiyalar raqamli transformatsiyaning yangi bosqichini boshlab beradi."
    ],
  },
];

export const getArticleById = (id: string): ArticleFull | undefined => {
  return articles.find((article) => article.id === id);
};

export const getRelatedArticles = (currentId: string, limit: number = 3): ArticleFull[] => {
  return articles.filter((article) => article.id !== currentId).slice(0, limit);
};
