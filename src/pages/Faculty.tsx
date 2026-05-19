import PageHeader from '@/components/PageHeader';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { GraduationCap, Award, Calendar, BookOpen } from 'lucide-react';

export default function Faculty() {
  const scrollRef1 = useScrollReveal<HTMLElement>();

  const facultyMembers = [
    {
      name: 'Dr. Rajesh Kumar Singh',
      qualification: 'M.Pharm, Ph.D.',
      specialization: 'Pharmaceutical Chemistry',
      experience: '15 Years',
    },
    {
      name: 'Dr. Priya Sharma',
      qualification: 'M.Pharm, Ph.D.',
      specialization: 'Pharmacology',
      experience: '12 Years',
    },
    {
      name: 'Prof. Amit Verma',
      qualification: 'M.Pharm',
      specialization: 'Pharmaceutics',
      experience: '18 Years',
    },
    {
      name: 'Dr. Sunita Devi',
      qualification: 'M.Pharm, Ph.D.',
      specialization: 'Pharmacognosy',
      experience: '10 Years',
    },
    {
      name: 'Prof. Vikram Yadav',
      qualification: 'M.Pharm',
      specialization: 'Pharmaceutical Analysis',
      experience: '14 Years',
    },
    {
      name: 'Dr. Neha Gupta',
      qualification: 'M.Pharm, Ph.D.',
      specialization: 'Clinical Pharmacy',
      experience: '8 Years',
    },
    {
      name: 'Prof. Manoj Kumar',
      qualification: 'M.Pharm',
      specialization: 'Pharmaceutical Biotechnology',
      experience: '11 Years',
    },
    {
      name: 'Dr. Anjali Mishra',
      qualification: 'M.Pharm, Ph.D.',
      specialization: 'Pharmaceutical Jurisprudence',
      experience: '9 Years',
    }
  ];

  return (
    <>
      <PageHeader
        title="Faculty & Staff"
        subtitle="Meet our experienced mentors and dedicated educators shaping the future of pharmacy"
        backgroundImage="/assets/about-campus.jpg"
      />

      <section ref={scrollRef1} className="py-24 bg-cream">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-label mb-4">Scholars</span>
            <h2 className="font-display text-3xl md:text-4xl text-navy font-bold leading-tight">
              Our Expert Faculty Members
            </h2>
            <p className="font-body text-navy/70 text-base mt-4 leading-relaxed">
              Maharana Pratap College of Pharmacy boasts highly qualified teaching professors who possess extensive research backgrounds, pharmaceutical industry experience, and academic teaching excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facultyMembers.map((fac, index) => (
              <div
                key={index}
                className="bg-ivory rounded-2xl p-6 border border-navy/5 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 group"
              >
                {/* Visual Avatar Placeholder */}
                <div className="w-16 h-16 rounded-full bg-burnt/10 flex items-center justify-center text-burnt mb-6 group-hover:bg-burnt group-hover:text-cream transition-all duration-300">
                  <GraduationCap size={28} />
                </div>
                
                <h3 className="font-body text-lg font-bold text-navy mb-4 leading-tight group-hover:text-burnt transition-colors">
                  {fac.name}
                </h3>

                <div className="space-y-3 font-body text-xs text-navy/70 border-t border-navy/5 pt-4">
                  <div className="flex items-center gap-2">
                    <Award size={14} className="text-burnt" />
                    <span><strong>Degree:</strong> {fac.qualification}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen size={14} className="text-burnt" />
                    <span><strong>Specialty:</strong> {fac.specialization}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-burnt" />
                    <span><strong>Exp:</strong> {fac.experience}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Message */}
      <section className="py-24 bg-ivory border-t border-navy/5">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <span className="section-label mb-4">Academic Integrity</span>
          <h2 className="font-display text-2xl md:text-3xl text-navy font-bold mb-6">
            Committed to Continuous Mentorship
          </h2>
          <p className="font-body text-navy/70 text-sm leading-relaxed max-w-2xl mx-auto">
            Our classroom sessions extend beyond textbook guidelines. Faculty members continuously supervise practical research labs, mentor individual students for university research projects, and collaborate with industrial experts to keep curriculum insights highly relevant.
          </p>
        </div>
      </section>
    </>
  );
}
