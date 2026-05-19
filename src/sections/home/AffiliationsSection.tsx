import { Award, Building2, FileText, FileCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const badges = [
  { icon: Award, label: 'PCI Approval Letter', link: '/pdf/PCI-approval-Letter-of-Maharana-Pratap.pdf' },
  { icon: Building2, label: 'BUHS Affiliation', link: '/pdf/Affiliation-Letter-BUHS-Patna.pdf' },
  { icon: FileText, label: 'Bihar Govt. NOC', link: '/pdf/Bihar-State-Govt-NOC-for-D.Pharm-B.Pharm.pdf' },
  { icon: FileCheck, label: 'Consent of Affiliation', link: '/pdf/Consent-of-affiliation-B.Pharm-D.pharm.pdf' },
];

export default function AffiliationsSection() {
  const sectionRef = useScrollReveal<HTMLElement>();
  const badgesRef = useScrollReveal<HTMLDivElement>({ stagger: 0.1, children: true });

  return (
    <section ref={sectionRef} className="py-16 md:py-20 bg-ivory">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="font-display text-3xl md:text-4xl text-navy font-bold text-center mb-10">
          Recognized & Approved By
        </h2>

        <div ref={badgesRef} className="flex flex-wrap justify-center gap-8 md:gap-12">
          {badges.map((badge, i) => (
            <a
              key={i}
              href={badge.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 group transition-transform duration-300 hover:scale-105"
              title={`Click to Verify ${badge.label}`}
            >
              <div className="w-20 h-20 rounded-lg bg-navy/5 flex items-center justify-center shadow-sm group-hover:bg-burnt/10 group-hover:border-burnt/20 border border-transparent transition-all duration-300">
                <badge.icon size={32} className="text-burnt transition-transform group-hover:scale-110 duration-300" strokeWidth={1.5} />
              </div>
              <span className="text-navy/70 text-[13px] font-body text-center max-w-[120px] group-hover:text-burnt font-medium transition-colors duration-300">
                {badge.label}
              </span>
            </a>
          ))}
        </div>

        <p className="text-center text-burnt font-body text-sm mt-8 mb-3">
          All mandatory documents available for verification
        </p>
        <div className="text-center">
          <Link
            to="/documents"
            className="link-underline text-navy font-body text-sm font-medium"
          >
            View All Documents &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
