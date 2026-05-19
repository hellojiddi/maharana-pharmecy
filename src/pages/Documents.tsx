import PageHeader from '@/components/PageHeader';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Award, Building2, FileText, FileCheck } from 'lucide-react';

const approvals = [
  { icon: Award, label: 'PCI Approval', status: 'Approved' },
  { icon: Building2, label: 'BUHS Affiliation', status: 'Affiliated' },
  { icon: FileText, label: 'Bihar Govt. NOC', status: 'Issued' },
  { icon: FileCheck, label: 'Consent Letter', status: 'Granted' },
];

const documents = [
  {
    num: '01',
    icon: Award,
    title: 'Pharmacy Council of India Approval Letter',
    desc: 'Official approval from PCI, New Delhi for running D.Pharm and B.Pharm programs. This is the primary regulatory approval required for any pharmacy college in India.',
    link: 'https://maharanapharmacy.com/pci_approval_letter.html',
  },
  {
    num: '02',
    icon: FileText,
    title: 'Mandatory Disclosure',
    desc: 'Comprehensive disclosure of college information, infrastructure details, faculty qualifications, and student intake as required by regulatory bodies.',
    link: 'https://maharanapharmacy.com/mandatory_disclosure.html',
  },
  {
    num: '03',
    icon: Building2,
    title: 'Affiliation Letter — Bihar University of Health Sciences',
    desc: 'Official affiliation letter from Bihar University of Health Sciences, Patna confirming the college\'s affiliation for conducting D.Pharm and B.Pharm programs.',
    link: 'https://maharanapharmacy.com/affiliation_letter_buhs.html',
  },
  {
    num: '04',
    icon: FileText,
    title: 'Bihar State Govt. NOC for D.Pharm & B.Pharm',
    desc: 'No Objection Certificate from the Government of Bihar, Department of Health Services, permitting the college to offer pharmacy programs.',
    link: 'https://maharanapharmacy.com/noc_dpharm_bpharm.html',
  },
  {
    num: '05',
    icon: FileCheck,
    title: 'Consent of Affiliation for B.Pharm & D.Pharm',
    desc: 'Formal consent of affiliation from the affiliating university for both B.Pharm and D.Pharm programs, valid for the current academic session.',
    link: 'https://maharanapharmacy.com/consent_affiliation.html',
  },
];

export default function Documents() {
  const sectionRef = useScrollReveal<HTMLElement>();
  const docRef = useScrollReveal<HTMLDivElement>({ stagger: 0.1, children: true });

  return (
    <>
      <PageHeader
        title="Mandatory Documents"
        subtitle="All regulatory approvals and affiliations for verification"
        backgroundImage="/assets/about-campus.jpg"
      />

      {/* Overview Bar */}
      <section className="py-14 bg-ivory">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {approvals.map((a, i) => (
              <div key={i} className="flex flex-col items-center gap-3">
                <a.icon size={36} className="text-burnt" strokeWidth={1.5} />
                <div>
                  <p className="text-navy font-body font-medium text-sm">{a.label}</p>
                  <p className="text-burnt text-xs font-body mt-0.5">\u2713 {a.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Document List */}
      <section ref={sectionRef} className="py-24 md:py-32 bg-cream">
        <div className="max-w-[1000px] mx-auto px-6">
          <span className="section-label mb-4">Official Documents</span>
          <h2 className="font-display text-3xl md:text-4xl text-navy font-bold mb-12">
            Regulatory Approvals & Affiliations
          </h2>
          <div ref={docRef} className="space-y-5">
            {documents.map((doc, i) => (
              <a
                key={i}
                href={doc.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 bg-ivory rounded-2xl p-7 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex-shrink-0 flex items-center gap-3">
                  <span className="font-display text-3xl text-burnt/20 font-bold">{doc.num}</span>
                  <doc.icon size={28} className="text-navy" strokeWidth={1.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-body text-lg font-semibold text-navy mb-1">{doc.title}</h3>
                  <p className="text-navy/60 text-sm font-body leading-relaxed">{doc.desc}</p>
                </div>
                <div className="flex-shrink-0 hidden sm:flex items-center gap-2 px-5 py-2.5 border border-navy/20 rounded-md text-navy text-[12px] uppercase tracking-wider font-body group-hover:bg-navy group-hover:text-cream group-hover:border-navy transition-all duration-300">
                  View
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" /></svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Verification Guide */}
      <section className="py-20 md:py-24 bg-navy">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="section-label justify-center !text-burnt before:bg-burnt mb-4">Verification</span>
            <h2 className="font-display text-3xl md:text-4xl text-cream font-bold">
              How to Verify Our Approvals
            </h2>
          </div>
          <div className="relative max-w-[600px] mx-auto">
            {/* Timeline line */}
            <div className="absolute left-[23px] top-0 bottom-0 w-[2px] bg-burnt/30" />
            <div className="space-y-10">
              {[
                {
                  step: '1',
                  title: 'Visit PCI Website',
                  desc: 'Go to www.pci.nic.in and navigate to the approved institutions list to verify our PCI approval status.',
                },
                {
                  step: '2',
                  title: 'Check BUHS Affiliation',
                  desc: 'Visit the Bihar University of Health Sciences website to confirm our affiliation for the current academic year.',
                },
                {
                  step: '3',
                  title: 'Contact Us',
                  desc: 'Feel free to visit our campus to see the original documents in person. Our administration office is open Monday to Saturday, 10 AM to 5 PM.',
                },
              ].map((s, i) => (
                <div key={i} className="flex items-start gap-6 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-burnt flex items-center justify-center flex-shrink-0">
                    <span className="text-cream font-body font-semibold">{s.step}</span>
                  </div>
                  <div>
                    <h3 className="text-cream font-body font-semibold text-lg mb-2">{s.title}</h3>
                    <p className="text-cream/60 text-sm font-body leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-burnt">
        <div className="max-w-[700px] mx-auto px-6 text-center">
          <h2 className="font-display text-3xl text-cream font-bold mb-3">Still Have Questions?</h2>
          <p className="text-cream/80 font-body mb-8">Our administration team is happy to help with any verification queries.</p>
          <a href="/contact" className="px-8 py-4 bg-ivory text-burnt rounded-md text-[13px] uppercase tracking-wider font-body font-medium hover:scale-[1.03] transition-transform inline-block">
            Contact Administration
          </a>
        </div>
      </section>
    </>
  );
}
