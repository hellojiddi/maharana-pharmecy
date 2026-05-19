import PageHeader from '@/components/PageHeader';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useCountUp } from '@/hooks/useCountUp';
import { Briefcase, TrendingUp, Award, Building2, Users } from 'lucide-react';

export default function Placements() {
  const scrollRef1 = useScrollReveal<HTMLElement>();
  const scrollRef2 = useScrollReveal<HTMLElement>();
  const scrollRef3 = useScrollReveal<HTMLElement>();

  const stat1 = useCountUp(87, 2, '%');
  const stat2 = useCountUp(45, 2, '+');
  const stat3 = useCountUp(240, 2, '+');

  const trainingPrograms = [
    {
      title: 'Soft Skills Development',
      description: 'Intensive communication, vocabulary, presentation, and interpersonal mock interviews to build robust corporate etiquettes.',
      icon: <Users className="h-6 w-6 text-cream" />
    },
    {
      title: 'Technical & Practical Training',
      description: 'Hands-on training in industry-standard pharmaceutical machinery and latest analysis software to ensure job-readiness.',
      icon: <Award className="h-6 w-6 text-cream" />
    },
    {
      title: 'Mock Placement Audits',
      description: 'Periodic mock tests, technical questionnaires, resume construction classes, and group discussions organized by corporate trainers.',
      icon: <Briefcase className="h-6 w-6 text-cream" />
    },
    {
      title: 'Industrial Encounters',
      description: 'Interactive guest lectures, technical workshops, and visits to major pharmaceutical fabrication hubs across India.',
      icon: <Building2 className="h-6 w-6 text-cream" />
    }
  ];

  const careerPathways = [
    {
      title: 'Pharmaceutical Industry',
      roles: ['Production Executive', 'Quality Control & Assay Analyst', 'Research & Development Associate', 'Regulatory Affairs Officer']
    },
    {
      title: 'Clinical Care & Pharmacy',
      roles: ['Hospital Pharmacist', 'Clinical Research Associate', 'Drug Information Specialist', 'Pharmacovigilance Associate']
    },
    {
      title: 'Corporate Sales & Marketing',
      roles: ['Medical Representative', 'Pharma Product Manager', 'Marketing & Liaison Executive', 'Distribution Sales Manager']
    },
    {
      title: 'Government Roles',
      roles: ['Central/State Drug Inspector', 'Government Hospital Pharmacist', 'Analytical Chemist (Gov Labs)', 'Research Scientist (ICMR/CSIR)']
    }
  ];

  return (
    <>
      <PageHeader
        title="Careers & Placements"
        subtitle="Empowering graduates to lead the healthcare sector with 87% robust placement records"
        backgroundImage="/assets/about-campus.jpg"
      />

      {/* Placement Statistics Counters */}
      <section ref={scrollRef1} className="py-16 bg-navy text-cream">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <span ref={stat1.ref} className="font-display text-5xl md:text-6xl text-burnt font-bold">
                {stat1.displayValue}
              </span>
              <p className="text-cream/70 text-sm font-body mt-2">Placement Rate</p>
            </div>
            <div>
              <span ref={stat2.ref} className="font-display text-5xl md:text-6xl text-burnt font-bold">
                {stat2.displayValue}
              </span>
              <p className="text-cream/70 text-sm font-body mt-2">Recruiting Partners</p>
            </div>
            <div>
              <span ref={stat3.ref} className="font-display text-5xl md:text-6xl text-burnt font-bold">
                {stat3.displayValue}
              </span>
              <p className="text-cream/70 text-sm font-body mt-2">Placed Alumni</p>
            </div>
            <div>
              <span className="font-display text-5xl md:text-6xl text-burnt font-bold">₹3.2 L</span>
              <p className="text-cream/70 text-sm font-body mt-2">Average Package</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cell Overview */}
      <section className="py-24 bg-cream">
        <div className="max-w-[1000px] mx-auto px-6 text-center">
          <span className="section-label mb-4">Dedicated Cell</span>
          <h2 className="font-display text-3xl md:text-4xl text-navy font-bold mb-6">
            Training & Placement Wing
          </h2>
          <p className="font-body text-navy/70 text-base leading-relaxed max-w-3xl mx-auto">
            At Maharana Pratap College of Pharmacy, our specialized corporate interface office works around the clock to foster robust relationships with medical organisations, manufacturing plants, and research agencies. We believe that professional preparation begins from day one, which is why we guide students through extensive interview drills, technical audits, and industrial excursions.
          </p>
        </div>
      </section>

      {/* Training Programs Grid */}
      <section ref={scrollRef2} className="py-24 bg-ivory border-t border-navy/5">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-label mb-4">Professional Grooming</span>
            <h2 className="font-display text-3xl md:text-4xl text-navy font-bold leading-tight">
              Pre-Placement Training Programs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trainingPrograms.map((program, idx) => (
              <div
                key={idx}
                className="bg-cream/40 p-8 rounded-2xl border border-navy/5 flex gap-6 items-start shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <div className="h-12 w-12 rounded-xl bg-burnt flex items-center justify-center flex-shrink-0">
                  {program.icon}
                </div>
                <div>
                  <h3 className="font-body text-lg font-bold text-navy mb-3">
                    {program.title}
                  </h3>
                  <p className="font-body text-sm text-navy/70 leading-relaxed">
                    {program.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Pathways */}
      <section ref={scrollRef3} className="py-24 bg-cream border-t border-navy/5">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-label mb-4">Opportunities</span>
            <h2 className="font-display text-3xl md:text-4xl text-navy font-bold leading-tight">
              Vast Placement Career Pathways
            </h2>
            <p className="font-body text-navy/70 text-sm mt-3">
              Completing B.Pharm and D.Pharm programs unlocks a wide spectrum of lucrative job possibilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {careerPathways.map((pathway, index) => (
              <div
                key={index}
                className="bg-ivory p-8 rounded-2xl border border-navy/5 shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <div className="h-10 w-10 rounded-full bg-burnt/10 flex items-center justify-center mb-6">
                  <TrendingUp className="h-5 w-5 text-burnt" />
                </div>
                <h3 className="font-body text-base font-bold text-navy mb-4 border-b border-navy/10 pb-3">
                  {pathway.title}
                </h3>
                <ul className="space-y-3">
                  {pathway.roles.map((role, roleIdx) => (
                    <li key={roleIdx} className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-burnt mt-2 flex-shrink-0" />
                      <span className="font-body text-xs text-navy/80 leading-relaxed">{role}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
