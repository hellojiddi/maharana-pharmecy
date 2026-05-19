import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-3 px-4 flex gap-3 z-50 md:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <a
        href="tel:+919279881832"
        className="flex-1 flex items-center justify-center gap-2 py-2.5 px-2 rounded-full border border-navy text-navy font-body font-semibold text-[15px] bg-white active:bg-gray-50"
      >
        <Phone size={16} className="text-navy" />
        Call Now
      </a>
      <Link
        to="/admissions"
        className="flex-1 flex items-center justify-center py-2.5 px-2 rounded-full bg-[#E5A900] text-navy font-body font-bold text-[15px] shadow-sm active:bg-[#C99400]"
      >
        Apply Now
      </Link>
    </div>
  );
}
