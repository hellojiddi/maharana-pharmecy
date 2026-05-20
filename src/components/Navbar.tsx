import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
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
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav
      className="sticky top-0 left-0 w-full z-50 transition-all duration-500 bg-navy/95 backdrop-blur-xl border-b border-cream/10 shadow-lg"
      style={{ height: 80 }}
    >
      <div className="max-w-[1440px] mx-auto px-4 xl:px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3" aria-label="Maharana Pratap College of Pharmacy - Home">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-burnt flex items-center justify-center flex-shrink-0">
            <img src="/assets/logo.png" alt="MPCP Logo" className="w-full h-full object-cover" />
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
            <button className="text-cream w-10 h-10 rounded-full bg-cream/5 border border-cream/10 flex items-center justify-center hover:bg-cream/10 hover:border-cream/20 active:scale-95 transition-all" aria-label="Open Menu">
              <Menu size={20} />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="!bg-navy !border-navy text-cream w-full sm:w-[350px] p-8 pt-16">
            <div className="flex flex-col gap-5 mt-6 overflow-y-auto max-h-[80vh]">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`font-body text-[15px] font-medium uppercase tracking-[0.08em] pb-3.5 border-b border-cream/10 transition-all duration-300 flex items-center justify-between group transform hover:translate-x-1.5 ${
                    isActive(link.path) 
                      ? 'text-[#E5A900] border-[#E5A900]/30 font-bold' 
                      : 'text-cream/80 hover:text-[#E5A900] hover:border-cream/20'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive(link.path) ? (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E5A900] shadow-[0_0_8px_#E5A900] transition-all" />
                  ) : (
                    <span className="w-1 h-1 rounded-full bg-cream/10 group-hover:bg-[#E5A900]/50 transition-colors" />
                  )}
                </Link>
              ))}
              <Link
                to="/admissions"
                onClick={() => setMobileOpen(false)}
                className="btn-primary mt-6 text-center text-xs py-4 shadow-lg !bg-burnt hover:!bg-burnt/90 text-cream font-semibold tracking-wider"
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
