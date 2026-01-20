import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, GraduationCap } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DropdownItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href?: string;
  dropdown?: DropdownItem[];
}

const navItems: NavItem[] = [
  { label: 'Bosh sahifa', href: '/' },
  {
    label: 'Biz haqimizda',
    dropdown: [
      { label: 'Kompaniya haqida', href: '/about/company' },
      { label: 'Universitet haqida', href: '/about/university' },
      { label: "Qabul", href: '/about/admissions' },
      { label: 'Hujjatlar', href: '/about/documents' },
    ],
  },
  {
    label: 'Faoliyat',
    dropdown: [
      { label: 'Loyihalar', href: '/activities/projects' },
      { label: 'Ilmiy ishlar', href: '/activities/scientific-works' },
    ],
  },
  { label: 'Hamkorlar', href: '/partners' },
  {
    label: 'Resurslar',
    dropdown: [
      { label: 'Maqolalar', href: '/resources/articles' },
      { label: 'Kutubxona', href: '/resources/library' },
      { label: 'Hujjatlar', href: '/resources/documents' },
    ],
  },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;
  const isDropdownActive = (items: DropdownItem[]) =>
    items.some((item) => location.pathname === item.href);

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-serif text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              EduCenter
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.href ? (
                  <Link
                    to={item.href}
                    className={cn(
                      'nav-link',
                      isActive(item.href) && 'nav-link-active'
                    )}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    className={cn(
                      'nav-link flex items-center gap-1',
                      item.dropdown && isDropdownActive(item.dropdown) && 'nav-link-active'
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        'w-4 h-4 transition-transform duration-200',
                        openDropdown === item.label && 'rotate-180'
                      )}
                    />
                  </button>
                )}

                {item.dropdown && (
                  <div
                    className={cn(
                      'dropdown-menu',
                      openDropdown === item.label && 'open'
                    )}
                  >
                    {item.dropdown.map((dropItem) => (
                      <Link
                        key={dropItem.href}
                        to={dropItem.href}
                        className={cn(
                          'dropdown-item',
                          isActive(dropItem.href) && 'bg-muted text-primary'
                        )}
                      >
                        {dropItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            'lg:hidden overflow-hidden transition-all duration-300',
            mobileMenuOpen ? 'max-h-[500px] pb-4' : 'max-h-0'
          )}
        >
          <div className="flex flex-col gap-1 pt-2">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.href ? (
                  <Link
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      'block px-4 py-3 rounded-lg text-foreground/80 hover:bg-muted hover:text-primary transition-colors',
                      isActive(item.href) && 'bg-muted text-primary'
                    )}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <div>
                    <button
                      onClick={() =>
                        setOpenDropdown(openDropdown === item.label ? null : item.label)
                      }
                      className={cn(
                        'w-full flex items-center justify-between px-4 py-3 rounded-lg text-foreground/80 hover:bg-muted transition-colors',
                        item.dropdown && isDropdownActive(item.dropdown) && 'text-primary'
                      )}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          'w-4 h-4 transition-transform duration-200',
                          openDropdown === item.label && 'rotate-180'
                        )}
                      />
                    </button>
                    <div
                      className={cn(
                        'overflow-hidden transition-all duration-200',
                        openDropdown === item.label ? 'max-h-[200px]' : 'max-h-0'
                      )}
                    >
                      {item.dropdown?.map((dropItem) => (
                        <Link
                          key={dropItem.href}
                          to={dropItem.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={cn(
                            'block pl-8 pr-4 py-2.5 text-sm text-foreground/70 hover:text-primary transition-colors',
                            isActive(dropItem.href) && 'text-primary'
                          )}
                        >
                          {dropItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
