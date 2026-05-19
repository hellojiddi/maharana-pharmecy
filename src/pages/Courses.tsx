import PageHeader from '@/components/PageHeader';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Link } from 'react-router-dom';
import { Clock, BookOpen, Award, Building2 } from 'lucide-react';

interface ProgramCardProps {
  badge: string;
  title: string;
  fullName: string;
  duration: string;
  eligibility: string;
  cta: string;
}

function ProgramCard({ badge, title, fullName, duration, eligibility, cta }: ProgramCardProps) {
  return (
    <div className="info-card sticky top-28">
      <span className="inline-block px-4 py-1.5 bg-burnt text-cream text-[12px] uppercase tracking-wider font-body rounded-full mb-4">
        {badge}
      </span>
      <h3 className="font-display text-3xl text-navy font-bold mb-1">{title}</h3>
      <p className="text-navy/60 font-body text-base mb-6">{fullName}</p>
      <div className="h-px bg-navy/10 mb-6" />
      <div className="space-y-3 mb-6">
        <div className="flex items-center gap-2 text-navy font-body text-sm">
          <Clock size={16} className="text-burnt" />
          Duration: {duration}
        </div>
        <div className="flex items-center gap-2 text-navy font-body text-sm">
          <BookOpen size={16} className="text-burnt" />
          Eligibility: {eligibility}
        </div>
        <div className="flex items-center gap-2 text-navy font-body text-sm">
          <Award size={16} className="text-burnt" />
          Approval: PCI Approved
        </div>
        <div className="flex items-center gap-2 text-navy font-body text-sm">
          <Building2 size={16} className="text-burnt" />
          Affiliation: BUHS, Patna
        </div>
      </div>
      <div className="h-px bg-navy/10 mb-6" />
      <Link to="/contact" className="btn-primary w-full text-center block">
        {cta}
      </Link>
      <Link
        to="/contact"
        className="btn-secondary w-full text-center block mt-3"
      >
        Download Syllabus
      </Link>
    </div>
  );
}

function DPharmSection() {
  const ref = useScrollReveal<HTMLElement>();
  return (
    <section ref={ref} className="py-24 md:py-32 bg-cream">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-12">
          <div>
            <ProgramCard
              badge="Diploma"
              title="D.Pharm"
              fullName="Diploma in Pharmacy"
              duration="2 Years"
              eligibility="Class 12 (Science)"
              cta="Apply for D.Pharm"
            />
          </div>
          <div>
            <span className="section-label mb-4">Diploma Program</span>
            <h2 className="font-display text-3xl md:text-4xl text-navy font-bold mb-6">
              D.Pharm — Diploma in Pharmacy
            </h2>
            <div className="space-y-6 text-navy/70 font-body text-base leading-relaxed">
              <p>
                D.Pharma (Diploma in Pharmacy) is a two-year career-oriented diploma course. Maharana Pratap Pharmacy College, Chilhari, Buxar is one of the top D.Pharm Colleges in Bihar providing this diploma course. For students who want to pursue their career in pharmaceutical science, this course is the perfect starting point.
              </p>
              <div>
                <h3 className="font-body text-lg font-semibold text-navy mb-3">Eligibility</h3>
                <p>To be eligible to apply for the D.Pharm course, aspirants must have completed Class 12 or equivalent in the Science stream (Physics, Chemistry, Biology/Mathematics) from a recognized board.</p>
              </div>
              <div>
                <h3 className="font-body text-lg font-semibold text-navy mb-3">Course Structure</h3>
                <p className="mb-3">The 2-year program is divided into four semesters, covering theoretical knowledge and practical training in:</p>
                <ul className="space-y-2 ml-5 list-disc">
                  <li>Pharmaceutics — Drug formulation and manufacturing</li>
                  <li>Pharmaceutical Chemistry — Drug synthesis and analysis</li>
                  <li>Pharmacology — Drug action and therapeutic effects</li>
                  <li>Pharmacognosy — Medicinal plants and natural products</li>
                  <li>Biochemistry & Clinical Pathology — Lab diagnostics</li>
                  <li>Hospital & Clinical Pharmacy — Patient care practice</li>
                </ul>
              </div>
              <div>
                <h3 className="font-body text-lg font-semibold text-navy mb-3">Career Opportunities</h3>
                <p className="mb-3">After completing D.Pharm, graduates can work as:</p>
                <ul className="space-y-2 ml-5 list-disc">
                  <li>Registered Pharmacist in hospitals and retail pharmacies</li>
                  <li>Quality Control Officer in pharmaceutical companies</li>
                  <li>Medical Representative</li>
                  <li>Entrepreneur — start own pharmacy business</li>
                  <li>Pursue B.Pharm for advanced studies</li>
                </ul>
              </div>
              <div>
                <h3 className="font-body text-lg font-semibold text-navy mb-3">Admission Process</h3>
                <p>Application forms for admission along with the prospectus may be obtained from the college office on all working days between 10 AM to 5 PM. The duly filled application form with necessary enclosures should be submitted to the college office on or before the last date.</p>
                <p className="text-burnt text-sm mt-2">Note: Fee once paid is not refundable under any circumstance.</p>
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
    <section ref={ref} className="py-24 md:py-32 bg-ivory">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12">
          <div>
            <span className="section-label mb-4">Degree Program</span>
            <h2 className="font-display text-3xl md:text-4xl text-navy font-bold mb-6">
              B.Pharm — Bachelor of Pharmacy
            </h2>
            <div className="space-y-6 text-navy/70 font-body text-base leading-relaxed">
              <p>
                B.Pharma (Bachelor of Pharmacy) is an undergraduate program where students learn the science and process of making drugs. Maharana Pratap Pharmacy College provides experienced and specialized faculties along with state-of-the-art facilities. During this course, faculty members impart deep knowledge about healthcare and biochemical science.
              </p>
              <div>
                <h3 className="font-body text-lg font-semibold text-navy mb-3">Eligibility</h3>
                <p>To be eligible for B.Pharm, aspirants must have completed Class 12 or equivalent in the Science stream (Physics, Chemistry, Mathematics/Biology) with a minimum of 50% marks from a recognized board.</p>
              </div>
              <div>
                <h3 className="font-body text-lg font-semibold text-navy mb-3">Course Structure</h3>
                <p className="mb-3">The 4-year program is divided into eight semesters, providing comprehensive education in:</p>
                <ul className="space-y-2 ml-5 list-disc">
                  <li>Pharmaceutical Chemistry — Advanced drug synthesis and analysis</li>
                  <li>Pharmaceutics — Formulation science and drug delivery systems</li>
                  <li>Pharmacology — Mechanism of drug action and clinical pharmacology</li>
                  <li>Pharmacognosy & Phytochemistry — Medicinal plant biotechnology</li>
                  <li>Pharmaceutical Analysis — Instrumental methods and quality assurance</li>
                  <li>Pharmacy Practice — Clinical pharmacy and patient counseling</li>
                  <li>Industrial Pharmacy — Manufacturing technology and regulatory affairs</li>
                  <li>Research Methodology — Biostatistics and drug discovery</li>
                </ul>
              </div>
              <div>
                <h3 className="font-body text-lg font-semibold text-navy mb-3">Career Opportunities</h3>
                <p className="mb-3">B.Pharm graduates have diverse career options:</p>
                <ul className="space-y-2 ml-5 list-disc">
                  <li>Production & Manufacturing Manager in pharma companies</li>
                  <li>Quality Assurance & Quality Control Executive</li>
                  <li>Research & Development Scientist</li>
                  <li>Regulatory Affairs Officer</li>
                  <li>Hospital Pharmacist & Clinical Pharmacist</li>
                  <li>Pharmaceutical Marketing & Sales Manager</li>
                  <li>Pursue M.Pharm, MBA (Pharma), or Ph.D.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-body text-lg font-semibold text-navy mb-3">Admission Process</h3>
                <p>Application forms for admission along with the prospectus may be obtained from the college office on all working days between 10 AM to 5 PM. Candidates should come for an interview for selection. Selected candidates must pay the prescribed fee on or before the notified date.</p>
                <p className="text-burnt text-sm mt-2">Note: Fee once paid is not refundable under any circumstance.</p>
              </div>
            </div>
          </div>
          <div>
            <ProgramCard
              badge="Degree"
              title="B.Pharm"
              fullName="Bachelor of Pharmacy"
              duration="4 Years"
              eligibility="Class 12 (PCM/B with 50%)"
              cta="Apply for B.Pharm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ComparisonSection() {
  const ref = useScrollReveal<HTMLElement>();
  const rows = [
    ['Duration', '2 Years', '4 Years'],
    ['Degree Type', 'Diploma', "Bachelor's Degree"],
    ['Eligibility', 'Class 12 (Science)', 'Class 12 (PCM/B, 50%)'],
    ['PCI Approved', '\u2713', '\u2713'],
    ['Hospital Training', '\u2713', '\u2713'],
    ['Research Opportunities', '\u2014', '\u2713'],
    ['Higher Studies', 'B.Pharm', 'M.Pharm, MBA, Ph.D.'],
    ['Industry Roles', 'Pharmacist, QC', 'Manager, R&D, RA'],
    ['Own Pharmacy', '\u2713', '\u2713'],
  ];

  return (
    <section ref={ref} className="py-20 md:py-24 bg-navy">
      <div className="max-w-[1000px] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl text-cream font-bold mb-3">
            Program Comparison
          </h2>
          <p className="text-cream/60 font-body text-base">
            Choose the right program for your career goals
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-burnt">
                <th className="px-4 py-3 text-cream text-[13px] uppercase tracking-wider font-body font-medium rounded-tl-lg">Feature</th>
                <th className="px-4 py-3 text-cream text-[13px] uppercase tracking-wider font-body font-medium text-center">D.Pharm</th>
                <th className="px-4 py-3 text-cream text-[13px] uppercase tracking-wider font-body font-medium text-center rounded-tr-lg">B.Pharm</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-navy/50' : 'bg-navy/30'}>
                  <td className="px-4 py-3 text-cream/80 font-body text-sm">{row[0]}</td>
                  <td className="px-4 py-3 text-cream/70 font-body text-sm text-center">{row[1]}</td>
                  <td className="px-4 py-3 text-cream/70 font-body text-sm text-center">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function AdmissionCTA() {
  const ref = useScrollReveal<HTMLElement>();
  return (
    <section ref={ref} className="py-16 md:py-20 bg-burnt">
      <div className="max-w-[700px] mx-auto px-6 text-center">
        <h2 className="font-display text-3xl md:text-4xl text-cream font-bold mb-3">
          Ready to Start Your Journey?
        </h2>
        <p className="text-cream/80 font-body text-base mb-8">
          Applications are open for the academic year 2025-26. Contact us to get your admission form.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/contact" className="px-8 py-4 bg-ivory text-burnt rounded-md text-[13px] uppercase tracking-wider font-body font-medium hover:scale-[1.03] transition-transform">
            Download Application
          </Link>
          <Link to="/contact" className="inline-flex items-center px-8 py-4 border border-cream text-cream rounded-md text-[13px] uppercase tracking-wider font-body transition-all duration-300 hover:bg-cream hover:text-burnt">
            Contact Admission Office
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Courses() {
  return (
    <>
      <PageHeader
        title="Our Programs"
        subtitle="PCI-approved D.Pharm and B.Pharm courses for aspiring pharmacists"
        backgroundImage="/assets/course-dpharm.jpg"
      />
      <DPharmSection />
      <BPharmSection />
      <ComparisonSection />
      <AdmissionCTA />
    </>
  );
}
