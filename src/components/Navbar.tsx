import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { useNavScroll } from '@/hooks/useNavScroll';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Courses', path: '/courses' },
  { label: 'Admissions', path: '/admissions' },
  { label: 'Facilities', path: '/facilities' },
  { label: 'Faculty', path: '/faculty' },
  { label: 'Placements', path: '/placements' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Documents', path: '/documents' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const isScrolled = useNavScroll(100);
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-navy-85 backdrop-blur-xl shadow-lg'
          : 'bg-transparent'
      }`}
      style={{ height: 80 }}
    >
      <div className="max-w-[1440px] mx-auto px-4 xl:px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-burnt flex items-center justify-center">
            <span className="text-cream font-display font-bold text-lg">R</span>
            <span className="text-cream font-display font-bold text-xs absolute ml-3 mt-1">x</span>
          </div>
          <div className="block">
            <span className="text-cream font-display font-semibold text-xl leading-none tracking-wide block">MPCP</span>
            <span className="text-cream/70 font-body text-[8px] xs:text-[10px] leading-tight block tracking-wider uppercase mt-0.5">Maharana Pratap College of Pharmacy</span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-3.5 xl:gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[11px] xl:text-[12px] uppercase tracking-[0.06em] font-body transition-colors duration-300 ${
                isActive(link.path)
                  ? 'text-burnt font-bold'
                  : 'text-cream hover:text-burnt'
              }`}
            >
              {link.label}
              {isActive(link.path) && (
                <span className="block h-[2px] bg-burnt mt-1" />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link
            to="/admissions"
            className="inline-flex items-center px-5 py-2 bg-burnt text-cream rounded-md text-[11px] xl:text-[12px] uppercase tracking-[0.06em] font-body font-medium transition-all duration-300 hover:scale-[1.03] shadow-lg"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <button className="text-cream p-2">
              <Menu size={24} />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-navy border-navy w-full sm:w-[400px]">
            <div className="flex flex-col gap-8 mt-12">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`font-display text-2xl md:text-3xl pb-3 border-b border-cream/10 transition-colors duration-300 ${
                    isActive(link.path) ? 'text-burnt border-burnt/30' : 'text-cream hover:text-burnt hover:border-cream/30'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/admissions"
                onClick={() => setMobileOpen(false)}
                className="btn-primary mt-4 text-center"
              >
                Apply Now
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
