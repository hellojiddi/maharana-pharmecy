import PageHeader from '@/components/PageHeader';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Link } from 'react-router-dom';
import { Clock, BookOpen, Award, Building2, Users, IndianRupee } from 'lucide-react';

interface ProgramCardProps {
  badge: string;
  title: string;
  fullName: string;
  duration: string;
  eligibility: string;
  intake: string;
  fee: string;
  cta: string;
}

function ProgramCard({ badge, title, fullName, duration, eligibility, intake, fee, cta }: ProgramCardProps) {
  return (
    <div className="info-card sticky top-28 bg-white shadow-xl rounded-xl p-8 border border-navy/5">
      <span className="inline-block px-4 py-1.5 bg-burnt text-cream text-[12px] uppercase tracking-wider font-body rounded-full mb-4">
        {badge}
      </span>
      <h3 className="font-display text-3xl text-navy font-bold mb-1">{title}</h3>
      <p className="text-navy/60 font-body text-base mb-6">{fullName}</p>
      <div className="h-px bg-navy/10 mb-6" />
      <div className="space-y-4 mb-6">
        <div className="flex items-center gap-3 text-navy font-body text-sm">
          <Clock size={18} className="text-burnt shrink-0" />
          <span><strong className="font-semibold">Duration:</strong> {duration}</span>
        </div>
        <div className="flex items-center gap-3 text-navy font-body text-sm">
          <BookOpen size={18} className="text-burnt shrink-0" />
          <span><strong className="font-semibold">Eligibility:</strong> {eligibility}</span>
        </div>
        <div className="flex items-center gap-3 text-navy font-body text-sm">
          <Users size={18} className="text-burnt shrink-0" />
          <span><strong className="font-semibold">Intake:</strong> {intake}</span>
        </div>
        <div className="flex items-center gap-3 text-navy font-body text-sm">
          <IndianRupee size={18} className="text-burnt shrink-0" />
          <span><strong className="font-semibold">Fee:</strong> {fee} <span className="text-xs text-navy/50">(Min. deposit at admission)</span></span>
        </div>
        <div className="flex items-center gap-3 text-navy font-body text-sm">
          <Award size={18} className="text-burnt shrink-0" />
          <span><strong className="font-semibold">Approval:</strong> PCI Approved</span>
        </div>
        <div className="flex items-center gap-3 text-navy font-body text-sm">
          <Building2 size={18} className="text-burnt shrink-0" />
          <span><strong className="font-semibold">Affiliation:</strong> BUHS, Patna</span>
        </div>
      </div>
      <div className="h-px bg-navy/10 mb-6" />
      <Link to="/admissions" className="btn-primary w-full text-center block py-3">
        {cta}
      </Link>
    </div>
  );
}

function DPharmSection() {
  const ref = useScrollReveal<HTMLElement>();
  return (
    <section ref={ref} className="py-24 bg-cream">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-12 lg:gap-20">
          <div className="order-2 lg:order-1">
            <ProgramCard
              badge="Diploma"
              title="D.Pharm"
              fullName="Diploma in Pharmacy"
              duration="2 Years (4 Semesters)"
              eligibility="Class 12 (Science PCM/B)"
              intake="60 Seats"
              fee="₹ 60,000/- Per Year"
              cta="Apply for D.Pharm"
            />
          </div>
          <div className="order-1 lg:order-2">
            <span className="section-label mb-4">Diploma Program</span>
            <h2 className="font-display text-3xl md:text-5xl text-navy font-bold mb-6">
              D.Pharm — Diploma in Pharmacy
            </h2>
            <div className="space-y-6 text-navy/80 font-body text-base leading-relaxed">
              <p className="text-lg">
                D.Pharma (Diploma in Pharmacy) is a two-year career-oriented diploma course. Maharana Pratap Pharmacy College is one of the top D.Pharm Colleges in Bihar providing this diploma course. For students who want to pursue their career in pharmaceutical science, this course is the perfect starting point.
              </p>
              
              <div className="bg-white p-6 rounded-lg border-l-4 border-burnt shadow-sm">
                <h3 className="font-display text-xl font-bold text-navy mb-2">Eligibility Criteria</h3>
                <p>To be eligible to apply for the D.Pharm course, aspirants must have completed Class 12 or equivalent in the Science stream (Physics, Chemistry, Biology/Mathematics) from a recognized board with minimum 17 years of age.</p>
              </div>

              <div>
                <h3 className="font-display text-2xl font-bold text-navy mb-4 mt-8">Course Structure</h3>
                <p className="mb-4">The 2-year program is divided into four semesters, covering theoretical knowledge and practical training in:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {['Pharmaceutics', 'Pharmaceutical Chemistry', 'Pharmacology', 'Pharmacognosy', 'Biochemistry & Pathology', 'Hospital Pharmacy'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-burnt shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-display text-2xl font-bold text-navy mb-4">Fee Structure</h3>
                <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-navy/10">
                  <table className="w-full text-left">
                    <tbody className="divide-y divide-navy/10">
                      <tr>
                        <td className="px-6 py-4 bg-navy/5 font-semibold text-navy w-1/3">Course Fee</td>
                        <td className="px-6 py-4 text-navy font-medium">₹ 60,000/- Per Year</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 bg-navy/5 font-semibold text-navy">Note</td>
                        <td className="px-6 py-4 text-burnt text-sm">Minimum amount deposited at admission time is ₹ 60,000/-. Fee once paid is not refundable.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BPharmSection() {
  const ref = useScrollReveal<HTMLElement>();
  return (
    <section ref={ref} className="py-24 bg-ivory relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-burnt/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 lg:gap-20">
          <div>
            <span className="section-label mb-4">Degree Program</span>
            <h2 className="font-display text-3xl md:text-5xl text-navy font-bold mb-6">
              B.Pharm — Bachelor of Pharmacy
            </h2>
            
            {/* Student Credit Card Badge */}
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 border border-green-200 px-4 py-2 rounded-lg font-medium text-sm mb-8 shadow-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              Bihar Student Credit Card (BSCC) Facility Available
            </div>

            <div className="space-y-6 text-navy/80 font-body text-base leading-relaxed">
              <p className="text-lg">
                B.Pharma (Bachelor of Pharmacy) is an undergraduate program where students learn the science and process of making drugs. We provide experienced and specialized faculties along with state-of-the-art facilities.
              </p>

              <div className="bg-white p-6 rounded-lg border-l-4 border-burnt shadow-sm">
                <h3 className="font-display text-xl font-bold text-navy mb-2">Eligibility Criteria</h3>
                <p>Class 12 or equivalent in the Science stream (Physics, Chemistry, Mathematics/Biology) with a minimum of 50% marks from a recognized board. Minimum age: 17 Years.</p>
              </div>

              <div className="mt-8">
                <h3 className="font-display text-2xl font-bold text-navy mb-4">Fee Structure</h3>
                <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-navy/10">
                  <table className="w-full text-left">
                    <tbody className="divide-y divide-navy/10">
                      <tr>
                        <td className="px-6 py-4 bg-navy/5 font-semibold text-navy w-1/3">Course Fee</td>
                        <td className="px-6 py-4 text-navy font-medium">₹ 1,00,000/- Per Year <span className="text-sm font-normal text-navy/60 block mt-1">(No Extra Hidden Charges)</span></td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 bg-navy/5 font-semibold text-navy">Note</td>
                        <td className="px-6 py-4 text-burnt text-sm">Minimum amount deposited at admission time is ₹ 1,00,000/-. Fee once paid is not refundable.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          </div>
          <div>
            <ProgramCard
              badge="Undergraduate Degree"
              title="B.Pharm"
              fullName="Bachelor of Pharmacy"
              duration="4 Years (8 Semesters)"
              eligibility="Class 12 (PCM/B, 50%)"
              intake="100 Seats"
              fee="₹ 1,00,000/- Per Year"
              cta="Apply for B.Pharm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function BPharmLateralSection() {
  const ref = useScrollReveal<HTMLElement>();
  return (
    <section ref={ref} className="py-24 bg-cream border-t border-navy/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-12 lg:gap-20">
          <div className="order-2 lg:order-1">
            <ProgramCard
              badge="Lateral Entry"
              title="B.Pharm (Lateral)"
              fullName="Bachelor of Pharmacy - Lateral Entry"
              duration="3 Years (6 Semesters)"
              eligibility="D.Pharm Completion"
              intake="Subject to availability"
              fee="₹ 1,00,000/- Per Year"
              cta="Apply for Lateral Entry"
            />
          </div>
          <div className="order-1 lg:order-2">
            <span className="section-label mb-4">Direct 2nd Year Admission</span>
            <h2 className="font-display text-3xl md:text-5xl text-navy font-bold mb-6">
              B.Pharm — Lateral Entry
            </h2>
            <div className="space-y-6 text-navy/80 font-body text-base leading-relaxed">
              <p className="text-lg">
                The Lateral Entry program is specifically designed for students who have successfully completed their Diploma in Pharmacy (D.Pharm). It allows direct admission into the second year (3rd Semester) of the B.Pharm degree program.
              </p>
              
              <div className="bg-white p-6 rounded-lg border-l-4 border-burnt shadow-sm mt-6">
                <h3 className="font-display text-xl font-bold text-navy mb-2">Eligibility & Requirements</h3>
                <p className="mb-4">Candidates must have passed D.Pharm course from an institution approved by the Pharmacy Council of India under section 12 of the Pharmacy Act.</p>
                <ul className="space-y-2 text-sm text-navy/70">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-burnt"></div> D.Pharm Mark Sheet & Certificate</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-burnt"></div> 500 Hours Internship / Training Certificate</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-burnt"></div> D.Pharm Migration Certificate (Original)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AdmissionCTA() {
  const ref = useScrollReveal<HTMLElement>();
  return (
    <section ref={ref} className="py-20 md:py-24 bg-burnt relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160550-2173ff9e5ee5?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
      <div className="max-w-[800px] mx-auto px-6 text-center relative z-10">
        <h2 className="font-display text-4xl md:text-5xl text-cream font-bold mb-6 leading-tight">
          Ready to Start Your <br/>Pharmacy Journey?
        </h2>
        <p className="text-cream/90 font-body text-lg mb-10 max-w-[600px] mx-auto">
          Applications are open for the academic session 2025-26. Submit your inquiry online and our admission cell will guide you through the process.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/admissions" className="px-8 py-4 bg-ivory text-burnt rounded-md text-[14px] uppercase tracking-wider font-body font-bold hover:scale-[1.03] shadow-xl hover:shadow-2xl transition-all">
            Apply Online Now
          </Link>
          <Link to="/contact" className="inline-flex items-center px-8 py-4 border border-cream/30 text-cream rounded-md text-[14px] uppercase tracking-wider font-body font-medium transition-all duration-300 hover:bg-cream hover:text-burnt">
            Contact Helpdesk
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Courses() {
  return (
    <div className="bg-cream min-h-screen">
      <PageHeader
        title="Academic Programs"
        subtitle="PCI-approved Pharmacy courses designed for tomorrow's healthcare leaders"
        backgroundImage="/assets/pharmacy-lab-premium.png"
      />
      <BPharmSection />
      <BPharmLateralSection />
      <DPharmSection />
      <AdmissionCTA />
    </div>
  );
}
