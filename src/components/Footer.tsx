import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Twitter, Linkedin } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact Us', path: '/contact' },
  { label: 'Disclaimer Notice', path: '/policies/disclaimer' },
  { label: 'Privacy Policy', path: '/policies/privacy-policy' },
];

const discoverLinks = [
  { label: 'Academic Courses', path: '/courses' },
  { label: 'Admissions 2026', path: '/admissions' },
  { label: 'Campus Facilities', path: '/facilities' },
  { label: 'Training & Placements', path: '/placements' },
  { label: 'Photo Gallery', path: '/gallery' },
];

export default function Footer() {
  const footerRef = useScrollReveal<HTMLElement>({ stagger: 0.1, children: true });

  return (
    <footer className="bg-navy" ref={footerRef}>
      {/* Main Footer */}
      <div className="max-w-[1400px] mx-auto px-6 pt-20 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 - About */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-burnt flex items-center justify-center">
                <span className="text-cream font-display font-bold text-xl">R</span>
              </div>
              <div>
                <h3 className="text-cream font-display font-semibold text-lg">MPCP</h3>
              </div>
            </div>
            <p className="text-cream/70 text-sm leading-relaxed mb-6">
              Approved by PCI, New Delhi | Affiliated to BUHS, Patna
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://wa.me/919279881832" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-green-500 transition-colors" title="WhatsApp">
                <svg className="w-5 h-5 text-cream" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-blue-600 transition-colors" title="Facebook">
                <Facebook className="w-5 h-5 text-cream" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-pink-600 transition-colors" title="Instagram">
                <Instagram className="w-5 h-5 text-cream" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-red-600 transition-colors" title="YouTube">
                <Youtube className="w-5 h-5 text-cream" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-black transition-colors" title="X (Twitter)">
                <Twitter className="w-5 h-5 text-cream" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-blue-700 transition-colors" title="LinkedIn">
                <Linkedin className="w-5 h-5 text-cream" />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-[13px] uppercase tracking-[0.08em] text-cream/50 font-body mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-cream/70 text-sm hover:text-cream transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Discover */}
          <div>
            <h4 className="text-[13px] uppercase tracking-[0.08em] text-cream/50 font-body mb-6">Discover</h4>
            <ul className="space-y-3">
              {discoverLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-cream/70 text-sm hover:text-cream transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h4 className="text-[13px] uppercase tracking-[0.08em] text-cream/50 font-body mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-burnt mt-1 flex-shrink-0" />
                <p className="text-cream/70 text-sm">
                  Vill: Chilhari, Block: Dumraon,<br />
                  Dist. Buxar, Bihar - 802133
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-burnt flex-shrink-0" />
                <a href="tel:+919279881832" className="text-cream/70 text-sm hover:text-cream transition-colors">
                  +91 92798 81832
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-burnt flex-shrink-0" />
                <a href="mailto:maharanapratapcoe@gmail.com" className="text-cream/70 text-sm hover:text-cream transition-colors">
                  maharanapratapcoe@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Affiliations Bar */}
      <div className="border-t border-cream/10">
        <div className="max-w-[1200px] mx-auto px-6 py-6">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <span className="text-cream/50 text-xs uppercase tracking-wider">PCI Approved</span>
            <span className="text-cream/30">|</span>
            <span className="text-cream/50 text-xs uppercase tracking-wider">BUHS Affiliated</span>
            <span className="text-cream/30 hidden md:inline">|</span>
            <span className="text-cream/50 text-xs uppercase tracking-wider">Govt. of Bihar NOC</span>
          </div>
        </div>
      </div>

      {/* Policy and Compliance Footer Links */}
      <div className="border-t border-cream/5 bg-navy/20">
        <div className="max-w-[1400px] mx-auto px-6 py-4">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[12px] text-cream/40 font-body">
            <Link to="/policies/privacy-policy" className="hover:text-cream transition-colors">Privacy Policy</Link>
            <span>&bull;</span>
            <Link to="/policies/terms-and-conditions" className="hover:text-cream transition-colors">Terms &amp; Conditions</Link>
            <span>&bull;</span>
            <Link to="/policies/disclaimer" className="hover:text-cream transition-colors">Disclaimer Notice</Link>
            <span>&bull;</span>
            <Link to="/policies/refund-policy" className="hover:text-cream transition-colors">Fee Refund Policy</Link>
            <span>&bull;</span>
            <Link to="/policies/anti-ragging" className="hover:text-cream transition-colors">Anti-Ragging Code</Link>
            <span>&bull;</span>
            <Link to="/policies/rules-and-discipline" className="hover:text-cream transition-colors">Rules &amp; Discipline</Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-cream/5">
        <div className="max-w-[1400px] mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-center md:text-left text-cream/40 text-[13px]">
            &copy; {new Date().getFullYear()} Maharana Pratap College of Pharmacy. All Rights Reserved.
          </p>
          <p className="text-center md:text-right text-cream/40 text-[13px]">
            Designed &amp; Developed by <a href="https://mastermanikant.com" target="_blank" rel="noopener noreferrer" className="text-cream/60 hover:text-burnt font-medium transition-colors">Master Manikant</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
