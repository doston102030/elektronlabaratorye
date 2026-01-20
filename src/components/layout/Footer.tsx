import { Link } from 'react-router-dom'
import {
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from 'lucide-react'

const quickLinks = [
  { label: 'Bosh sahifa', href: '/' },
  { label: 'Kompaniya haqida', href: '/about/company' },
  { label: 'Loyihalar', href: '/activities/projects' },
  { label: 'Hamkorlar', href: '/partners' },
  { label: 'Maqolalar', href: '/resources/articles' },
]

const resourceLinks = [
  { label: 'Kutubxona', href: '/resources/library' },
  { label: 'Hujjatlar', href: '/resources/documents' },
  { label: 'Ilmiy ishlar', href: '/activities/scientific-works' },
  { label: 'Qabul', href: '/about/admissions' },
]

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-secondary-foreground" />
              </div>
              <span className="font-serif text-xl font-bold">EduCenter</span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Zamonaviy ta'lim va ilmiy tadqiqot markazi. Bilim va
              innovatsiyalar bilan kelajakni shakllantiramiz.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">
              Tezkor havolalar
            </h4>
            <ul className="space-y-3">
              {quickLinks.map(link => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Resurslar</h4>
            <ul className="space-y-3">
              {resourceLinks.map(link => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Aloqa</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">
                  Toshkent shahar, Universitet ko'chasi, 7-uy
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <a
                  href="tel:+998712345678"
                  className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                >
                  +998 71 234 56 78
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <a
                  href="mailto:info@educenter.uz"
                  className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                >
                  info@educenter.uz
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} EduCenter. Barcha huquqlar
            himoyalangan.
          </p>
        </div>
      </div>
    </footer>
  )
}
