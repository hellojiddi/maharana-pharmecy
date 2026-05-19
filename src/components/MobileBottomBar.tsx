import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-navy/10 p-3 flex gap-3 z-50 md:hidden shadow-[0_-4px_15px_rgba(0,0,0,0.05)]">
      <a
        href="tel:+919279881832"
        className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-md border-2 border-navy text-navy font-body font-bold text-[13px] uppercase tracking-wider bg-white active:bg-navy/5"
      >
        <Phone size={16} />
        Call Now
      </a>
      <Link
        to="/admissions"
        className="flex-1 flex items-center justify-center py-3 px-4 rounded-md bg-burnt text-cream font-body font-bold text-[13px] uppercase tracking-wider shadow-md active:bg-burnt/90"
      >
        Apply Now
      </Link>
    </div>
  );
}
