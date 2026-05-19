import { Award, Users, Building2, GraduationCap } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const features = [
  {
    num: '01',
    icon: Award,
    title: 'PCI Approved Institution',
    description: 'Approved by Pharmacy Council of India, New Delhi. Programs meet national standards for pharmacy education.',
  },
  {
    num: '02',
    icon: Users,
    title: 'Experienced Faculty',
    description: 'Teaching team comprises of specialists with extensive academic and industry experience.',
  },
  {
    num: '03',
    icon: Building2,
    title: 'Modern Infrastructure',
    description: 'Fully equipped laboratories, digital classrooms, seminar hall, and hostel facilities.',
  },
  {
    num: '04',
    icon: GraduationCap,
    title: 'Placement Guidance',
    description: 'Assured placement support after successful completion. Spoken English classes for skill enhancement.',
  },
];

export default function WhyChooseSection() {
  const sectionRef = useScrollReveal<HTMLElement>();
  const gridRef = useScrollReveal<HTMLDivElement>({ stagger: 0.12, children: true });

  return (
    <section ref={sectionRef} className="py-24 md:py-36 bg-navy">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label justify-center !text-burnt before:bg-burnt mb-4">Why MPCP</span>
          <h2 className="font-display text-4xl md:text-5xl text-cream font-bold">
            Why Choose Our College?
          </h2>
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((f, i) => (
            <div key={i} className="relative p-8">
              <span className="absolute top-4 left-4 font-display text-6xl text-burnt/15 font-bold">
                {f.num}
              </span>
              <div className="relative z-10">
                <f.icon size={36} className="text-burnt mb-4" strokeWidth={1.5} />
                <h3 className="font-body text-xl font-semibold text-cream mb-3">
                  {f.title}
                </h3>
                <p className="text-cream/60 text-sm font-body leading-relaxed">
                  {f.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
