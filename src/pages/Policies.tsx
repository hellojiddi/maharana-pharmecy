import { useParams, Link } from 'react-router-dom';
import PageHeader from '@/components/PageHeader';

interface PolicyContent {
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: {
    heading?: string;
    paragraphs: string[];
    bullets?: string[];
  }[];
}

const policiesData: Record<string, PolicyContent> = {
  'privacy-policy': {
    title: 'Privacy Policy',
    subtitle: 'Learn how we collect, safeguard and process your official administrative inquiries.',
    lastUpdated: 'May 19, 2026',
    sections: [
      {
        paragraphs: [
          'Maharana Pratap College of Pharmacy ("we," "our," or "us") is dedicated to shielding the data privacy of students, sponsors and online visitors. This Privacy Policy clarifies our methods of collecting and securing your personal credentials when you access this domain.'
        ]
      },
      {
        heading: '1. Information We Collect',
        paragraphs: [
          'We collect academic background credentials and contact indicators that you submit voluntarily via our contact triggers:',
          'Information can be collected when you:',
        ],
        bullets: [
          'Submit Admission Inquiry Forms.',
          'Connect with admission offices via standard phone, whatsapp or email.',
          'Download documents (PCI Approval Letters, Bihar Govt NOCs).'
        ]
      },
      {
        heading: '2. Method of Information Usage',
        paragraphs: [
          'The credentials collected by this domain are processed strictly to:',
        ],
        bullets: [
          'Provide authentic eligibility assistance and counseling.',
          'Improve user interfaces and educational accessibility.',
          'Observe regulatory mandates laid down by Bihar University of Health Sciences (BUHS).'
        ]
      },
      {
        heading: '3. Data Security & Storage',
        paragraphs: [
          'We implement industry-grade technical and organizational protection barriers to shield your personal details from unauthorized exposures. All contact forms submit directly over secure HTTPS tunnels to certified partners.'
        ]
      }
    ]
  },
  'terms-and-conditions': {
    title: 'Terms & Conditions',
    subtitle: 'Review the official rules and guidelines for accessing our online academic catalog.',
    lastUpdated: 'May 19, 2026',
    sections: [
      {
        paragraphs: [
          'By browsing this educational website, you acknowledge that you accept the terms and conditions outlined below. If you reject any clause of these guidelines, you must immediately terminate access to our portals.'
        ]
      },
      {
        heading: '1. Academic Integrity of Content',
        paragraphs: [
          'All material, including syllabus info, eligibility matrices, regulatory NOC PDFs, and photographs published on this site are the intellectual properties of Maharana Pratap College of Pharmacy. Any copying, redistribution, or illegal commercial usage is punishable.'
        ]
      },
      {
        heading: '2. Accurate Student Credentials',
        paragraphs: [
          'Students fill online admissions forms under the strict rule of truthfulness. Providing forged marks certificates or misleading mobile credentials will result in immediate disqualification of admission.'
        ]
      }
    ]
  },
  'disclaimer': {
    title: 'Disclaimer Notice',
    subtitle: 'Understand the legal limits and conditions regarding the accuracy of web portal information.',
    lastUpdated: 'May 19, 2026',
    sections: [
      {
        paragraphs: [
          'The content provided on this website is compiled strictly to offer general educational updates for Maharana Pratap College of Pharmacy. While we strive to maintain perfect accuracy, errors can occur.'
        ]
      },
      {
        heading: '1. Affiliation and Regulatory Approvals',
        paragraphs: [
          'All admissions are subject to the direct rules of Bihar University of Health Sciences (BUHS), Patna and Pharmacy Council of India (PCI), New Delhi. Information published on this site does not constitute an absolute legal contract of admission.'
        ]
      },
      {
        heading: '2. External Web Links',
        paragraphs: [
          'This site includes hyperlinks pointing towards third-party regulatory dashboards (like BUHS or PCI). We bear zero legal liability for contents published on external domains.'
        ]
      }
    ]
  },
  'refund-policy': {
    title: 'Fee Refund Policy',
    subtitle: 'Transparent norms for registration cancellations and academic fee refunds.',
    lastUpdated: 'May 19, 2026',
    sections: [
      {
        paragraphs: [
          'We follow a crystal-clear fee collection protocol aligned with the regulatory guidelines of Department of Health Services, Government of Bihar.'
        ]
      },
      {
        heading: '1. Registration Window Fees',
        paragraphs: [
          'The minor registration fee submitted along with online enquiry forms is non-refundable under all normal situations.'
        ]
      },
      {
        heading: '2. Academic Fees Cancellation',
        paragraphs: [
          'If a student requests cancellation of admission before the official commencement of classes, refunds will be processed after deducting statutory processing fees as per BUHS standards. No refunds are eligible once regular classes have started.'
        ]
      }
    ]
  },
  'anti-ragging': {
    title: 'Anti-Ragging Policy',
    subtitle: 'Our campus maintains a strict zero-tolerance code against ragging activities.',
    lastUpdated: 'May 19, 2026',
    sections: [
      {
        paragraphs: [
          'Maharana Pratap College of Pharmacy preserves an absolute zero-tolerance policy towards ragging in any form on the campus premises, hostels, or transportation buses.'
        ]
      },
      {
        heading: '1. Definition of Ragging',
        paragraphs: [
          'Any conduct by any student whether by words spoken or written or by an act which has the effect of teasing, treating or handling with rudeness a fresher or any other student, will be treated as ragging.'
        ]
      },
      {
        heading: '2. Penalty for Offenses',
        paragraphs: [
          'Any student found guilty of ragging on campus will face:',
        ],
        bullets: [
          'Immediate suspension from attending regular classes.',
          'Forfeiture of hostel accommodation.',
          'Filing of official First Information Report (FIR) with the local police station.',
          'Rustication from the college for a period ranging from one to four semesters.'
        ]
      }
    ]
  },
  'rules-and-discipline': {
    title: 'Rules & Discipline',
    subtitle: 'Guidelines for student conduct, attendance, and campus decorum.',
    lastUpdated: 'May 19, 2026',
    sections: [
      {
        paragraphs: [
          'To maintain high academic standards, every student at Maharana Pratap College of Pharmacy must strictly observe the code of conduct.'
        ]
      },
      {
        heading: '1. Mandatory Attendance',
        paragraphs: [
          'Students must secure a minimum of 75% attendance in both regular theory lectures and practical laboratory sessions. Students falling short of this attendance threshold will not be allowed to sit in university exams.'
        ]
      },
      {
        heading: '2. Lab Decorum and Safety',
        paragraphs: [
          'Wearing clean white lab coats and protective goggles is mandatory during chemistry and pharmacology practicals. Any damage to laboratory glassware due to negligence must be compensated.'
        ]
      }
    ]
  }
};

export default function Policies() {
  const { type } = useParams<{ type: string }>();
  
  const policy = policiesData[type || 'privacy-policy'] || policiesData['privacy-policy'];

  return (
    <>
      <PageHeader
        title={policy.title}
        subtitle={policy.subtitle}
        backgroundImage="/assets/about-campus.jpg"
      />

      <section className="py-24 bg-cream">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="bg-ivory rounded-3xl p-8 md:p-12 border border-navy/5 shadow-sm">
            <p className="font-body text-xs text-navy/40 mb-8">
              <strong>Last Updated:</strong> {policy.lastUpdated}
            </p>

            <div className="space-y-8 font-body text-sm text-navy/80 leading-relaxed">
              {policy.sections.map((sec, idx) => (
                <div key={idx} className="space-y-4">
                  {sec.heading && (
                    <h3 className="font-display text-xl text-navy font-bold mt-8 border-b border-navy/5 pb-2">
                      {sec.heading}
                    </h3>
                  )}
                  {sec.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                  {sec.bullets && (
                    <ul className="list-disc pl-5 space-y-2">
                      {sec.bullets.map((b, bIdx) => (
                        <li key={bIdx}>{b}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-navy/5 text-center">
              <Link
                to="/"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-navy text-cream font-bold text-xs uppercase tracking-wider hover:bg-navy/90 transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
