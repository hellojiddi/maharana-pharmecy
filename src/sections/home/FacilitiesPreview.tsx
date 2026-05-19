import { Link } from 'react-router-dom';
import { FlaskConical, Microscope, Leaf, BookOpen, Monitor, Beaker } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const facilities = [
  {
    icon: FlaskConical,
    title: 'Pharmaceutics Lab',
    description: 'Well-equipped lab for drug formulation, manufacturing, and quality control studies',
  },
  {
    icon: Microscope,
    title: 'Pharmacology Lab',
    description: 'Advanced equipment for studying drug action, toxicity, and therapeutic effects',
  },
  {
    icon: Leaf,
    title: 'Pharmacognosy Lab',
    description: 'Herbarium and microscopy facilities for medicinal plant research',
  },
  {
    icon: Beaker,
    title: 'Pharmaceutical Chemistry Lab',
    description: 'Modern analytical instruments for drug synthesis and analysis',
  },
  {
    icon: BookOpen,
    title: 'Library',
    description: '1000+ pharmacy books, journals, and digital resources. Open 10 AM – 5 PM',
  },
  {
    icon: Monitor,
    title: 'Computer Lab',
    description: 'Multiple sections with pharmacy software, internet, and programming applications',
  },
];

export default function FacilitiesPreview() {
  const sectionRef = useScrollReveal<HTMLElement>();
  const cardsRef = useScrollReveal<HTMLDivElement>({ stagger: 0.1, children: true });

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-cream">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="mb-14">
          <span className="section-label mb-4">Infrastructure</span>
          <h2 className="font-display text-4xl md:text-5xl text-navy font-bold mb-4">
            World-Class Facilities
          </h2>
          <p className="text-navy/60 font-body text-base max-w-xl">
            State-of-the-art laboratories and learning spaces approved by PCI
          </p>
        </div>

        {/* Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((f, i) => (
            <div
              key={i}
              className="p-7 bg-ivory rounded-2xl border-b-2 border-navy/10 transition-all duration-400 hover:-translate-y-1 hover:shadow-lg"
            >
              <f.icon size={36} className="text-burnt mb-4" strokeWidth={1.5} />
              <h3 className="font-body text-lg font-semibold text-navy mb-2">
                {f.title}
              </h3>
              <p className="text-navy/60 text-sm font-body leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/facilities"
            className="link-underline text-burnt font-body text-sm font-medium"
          >
            View All Facilities &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
