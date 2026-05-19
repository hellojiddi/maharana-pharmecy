import { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Calendar, FileText, CheckCircle, Clock, Phone, Loader2, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Admissions() {
  const scrollRef1 = useScrollReveal<HTMLElement>();
  const scrollRef2 = useScrollReveal<HTMLElement>();
  
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'D.Pharm',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const applicationSteps = [
    {
      step: '01',
      title: 'Submit Inquiry Form',
      description: 'Fill out the online admission inquiry form below with your authentic personal and academic details.'
    },
    {
      step: '02',
      title: 'Receive Counselling Call',
      description: 'Our experienced admissions desk will contact you within 24 hours to explain the next steps and eligibility.'
    },
    {
      step: '03',
      title: 'Document Verification',
      description: 'Submit your 10th/12th marks sheets, transfer certificate, and other required documents for official verification.'
    },
    {
      step: '04',
      title: 'Secure Your Seat',
      description: 'Complete the official registration by depositing the nominal admission fee to confirm your admission.'
    }
  ];

  const importantDates = [
    { event: 'Registration Window Starts', date: 'June 1, 2026' },
    { event: 'Registration Window Closes', date: 'July 31, 2026' },
    { event: 'Document Verification Phase', date: 'August 1-15, 2026' },
    { event: 'Admission Confirmation List', date: 'August 20, 2026' },
    { event: 'Classes Commencing From', date: 'September 1, 2026' }
  ];

  const standardDocuments = [
    '10th Mark sheet & Passing Certificate (Photocopy)',
    '12th Mark sheet & Passing Certificate (Photocopy)',
    'Aadhar Card (Photocopy)',
    'College Leaving Certificate (CLC/TC) (Original)',
    'Migration Certificate (Original)',
    'Passport Size Photo (5 Piece)',
    'Caste Certificate (If required)',
    'B.U.H.S, Entrance Score Card (if available - Only B.Pharm)'
  ];

  const lateralEntryDocuments = [
    '10th & 12th Mark sheet & Passing Certificate (Photocopy)',
    'Aadhar Card (Photocopy)',
    'College Leaving Certificate (CLC/TC) (Original)',
    'D.Pharm Migration Certificate (Original)',
    'D.Pharm Mark Sheet & Certificate (Photocopy)',
    'Internship / Training Certificate (Photocopy)',
    'Passport Size Photo (5 Piece)',
    'Caste Certificate (If required)'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.phone) {
      setErrorMessage('कृपया नाम और मोबाइल नंबर अवश्य भरें।');
      return;
    }
    
    setIsSubmitting(true);
    setErrorMessage('');
    
    try {
      // 100% Free and Professional Web3Forms Integration
      // This sends an email directly to the college without needing technical databases!
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '2dfb313d-1fed-440b-8023-62beb795262a',
          name: formState.name,
          email: formState.email || 'No email provided',
          phone: formState.phone,
          course: formState.course,
          message: formState.message || 'New admission inquiry from website',
          subject: `Admission Inquiry: ${formState.name} (${formState.course})`,
          from_name: 'MPCP Buxar Admissions Gateway'
        })
      });
      
      const result = await response.json();
      
      if (result.success) {
        setIsSuccess(true);
        setFormState({ name: '', email: '', phone: '', course: 'D.Pharm', message: '' });
      } else {
        setErrorMessage('कुछ तकनीकी खराबी हुई। कृपया सीधे कॉल करें।');
      }
    } catch (err) {
      setErrorMessage('नेटवर्क समस्या। कृपया सीधे कॉल या व्हाट्सएप (+91 92798 81832) के माध्यम से संपर्क करें।');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <PageHeader
        title="Admissions 2026"
        subtitle="Secure your career in pharmaceutical sciences with PCI & BUHS approved D.Pharm & B.Pharm programs"
        backgroundImage="/assets/about-campus.jpg"
      />

      {/* BSCC Notice Bar */}
      <div className="bg-burnt text-cream py-4 px-6 relative z-10 shadow-md">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cream opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cream"></span>
            </span>
            <span className="font-body font-bold text-[15px] tracking-wide">
              नोट: स्टूडेंट क्रेडिट कार्ड (BSCC) की सुविधा उपलब्ध है | (केवल बी०फार्म० के लिए)
            </span>
          </div>
          <a href="/pdf/maharana-pratap-pharmacy-details.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-cream text-burnt px-5 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform shadow-lg">
            <Download size={16} />
            Download College Details PDF
          </a>
        </div>
      </div>

      {/* Application Steps */}
      <section ref={scrollRef1} className="py-20 bg-cream">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-label mb-4">Procedure</span>
            <h2 className="font-display text-4xl text-navy font-bold leading-tight">
              Admission Process
            </h2>
            <p className="font-body text-navy/70 text-base mt-4 leading-relaxed">
              We have designed a simplified, transparent admission workflow to help aspiring students register and secure their seats with absolute ease.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applicationSteps.map((stepItem, index) => (
              <div
                key={index}
                className="bg-ivory p-8 rounded-2xl border border-navy/5 shadow-sm transition-all duration-300 hover:shadow-md group hover:-translate-y-1"
              >
                <div className="font-display text-5xl font-bold text-burnt/20 mb-6 group-hover:text-burnt/40 transition-colors">
                  {stepItem.step}
                </div>
                <h3 className="font-body text-lg font-bold text-navy mb-3">
                  {stepItem.title}
                </h3>
                <p className="font-body text-sm text-navy/70 leading-relaxed">
                  {stepItem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents Section */}
      <section ref={scrollRef2} className="py-20 bg-ivory border-t border-navy/5">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-burnt/10 text-burnt mb-6">
              <FileText size={32} />
            </div>
            <h2 className="font-display text-4xl text-navy font-bold mb-4">Required Documents</h2>
            <p className="text-navy/60 max-w-2xl mx-auto">Please ensure you have the following documents ready at the time of admission verification.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Standard Admissions */}
            <div className="bg-white p-8 md:p-10 rounded-2xl border border-navy/10 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-burnt/5 rounded-bl-full -z-0"></div>
              <h3 className="font-display text-2xl text-navy font-bold mb-6 relative z-10 border-b border-navy/10 pb-4">
                For B.Pharm & D.Pharm
              </h3>
              <ul className="space-y-4 relative z-10">
                {standardDocuments.map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-burnt mt-0.5 flex-shrink-0" />
                    <span className="font-body text-navy/80 leading-relaxed">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Lateral Entry Admissions */}
            <div className="bg-white p-8 md:p-10 rounded-2xl border border-navy/10 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-burnt/5 rounded-bl-full -z-0"></div>
              <h3 className="font-display text-2xl text-navy font-bold mb-6 relative z-10 border-b border-navy/10 pb-4">
                For B.Pharm (Lateral Entry)
              </h3>
              <ul className="space-y-4 relative z-10">
                {lateralEntryDocuments.map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-burnt mt-0.5 flex-shrink-0" />
                    <span className="font-body text-navy/80 leading-relaxed">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Form Submission */}
      <section className="py-24 bg-cream border-t border-navy/5">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="bg-ivory rounded-3xl p-8 md:p-12 border border-navy/5 shadow-xl relative overflow-hidden">
            <div className="text-center mb-10 relative z-10">
              <h2 className="font-display text-3xl md:text-4xl text-navy font-bold">
                Online Inquiry Form
              </h2>
              <p className="font-body text-sm text-navy/60 mt-3 max-w-md mx-auto">
                Submit the enquiry form below, and our admission cell will contact you immediately.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 justify-center">
                <a
                  href="tel:+919279881832"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-burnt text-cream font-bold hover:bg-burnt/90 transition-colors shadow-sm text-sm"
                >
                  <Phone size={16} />
                  +91 92798 81832
                </a>
              </div>
            </div>

            {isSuccess ? (
              <div className="text-center py-12 bg-green-50 rounded-2xl border border-green-200 relative z-10">
                <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6">
                  <CheckCircle size={36} />
                </div>
                <h3 className="font-display text-2xl font-bold text-green-800">धन्यवाद! (Thank You!)</h3>
                <p className="font-body text-green-700 mt-3 max-w-sm mx-auto text-sm leading-relaxed">
                  आपका फॉर्म कॉलेज के ईमेल पर भेज दिया गया है। हमारा स्टाफ आपसे अतिशीघ्र संपर्क करेगा।
                </p>
                <Button 
                  onClick={() => setIsSuccess(false)}
                  className="mt-8 bg-green-600 text-white hover:bg-green-700 font-body px-8 py-2 text-[13px] uppercase tracking-wider"
                >
                  Submit Another Inquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[13px] uppercase tracking-wider font-body font-semibold text-navy/80 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter student's full name"
                      className="w-full px-4 py-3 rounded-lg border border-navy/10 bg-white focus:outline-none focus:border-burnt/50 focus:ring-1 focus:ring-burnt/50 text-sm font-body shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] uppercase tracking-wider font-body font-semibold text-navy/80 mb-2">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formState.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="10-digit mobile number"
                      className="w-full px-4 py-3 rounded-lg border border-navy/10 bg-white focus:outline-none focus:border-burnt/50 focus:ring-1 focus:ring-burnt/50 text-sm font-body shadow-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[13px] uppercase tracking-wider font-body font-semibold text-navy/80 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleInputChange}
                      placeholder="e.g. name@domain.com"
                      className="w-full px-4 py-3 rounded-lg border border-navy/10 bg-white focus:outline-none focus:border-burnt/50 focus:ring-1 focus:ring-burnt/50 text-sm font-body shadow-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] uppercase tracking-wider font-body font-semibold text-navy/80 mb-2">
                      Select Course *
                    </label>
                    <select
                      name="course"
                      value={formState.course}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-navy/10 bg-white focus:outline-none focus:border-burnt/50 focus:ring-1 focus:ring-burnt/50 text-sm font-body text-navy shadow-sm"
                    >
                      <option value="D.Pharm">Diploma in Pharmacy (D.Pharm) - 2 Years</option>
                      <option value="B.Pharm">Bachelor of Pharmacy (B.Pharm) - 4 Years</option>
                      <option value="B.Pharm Lateral">B.Pharm (Lateral Entry) - 3 Years</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[13px] uppercase tracking-wider font-body font-semibold text-navy/80 mb-2">
                    Remarks / Academic Background
                  </label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Enter 12th marks or any other academic details"
                    className="w-full px-4 py-3 rounded-lg border border-navy/10 bg-white focus:outline-none focus:border-burnt/50 focus:ring-1 focus:ring-burnt/50 text-sm font-body resize-none shadow-sm"
                  />
                </div>

                {errorMessage && (
                  <p className="text-red-500 font-body text-sm text-center font-semibold bg-red-50 p-3 rounded-lg">{errorMessage}</p>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-burnt text-cream hover:bg-burnt/95 font-body py-4 h-14 rounded-lg flex items-center justify-center gap-2 tracking-wider text-[14px] uppercase font-bold shadow-lg transition-transform hover:-translate-y-0.5"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" size={18} />
                      Submitting Form...
                    </>
                  ) : (
                    'Submit Inquiry'
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
