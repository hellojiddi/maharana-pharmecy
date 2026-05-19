import { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Calendar, FileText, CheckCircle, Clock, Phone, Loader2 } from 'lucide-react';
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
      description: 'Submit your 10th and 12th marks sheets, transfer certificate, and other required documents for official verification.'
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

  const requiredDocuments = [
    '10th Standard Passing Mark Sheet & Original Certificate',
    '12th Standard Passing Mark Sheet & Original Certificate (Science stream: PCM/PCB)',
    'Transfer Certificate (TC) from your last studied institution',
    'Migration Certificate (original copy for other state boards)',
    'Recent Passport Size Photographs (6 copies in professional attire)',
    'Aadhar Card Copy (Self-Attested)',
    'Caste or Category Certificate (if claiming quota benefits)',
    'Income Certificate (if seeking fee concessions/scholarships)'
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
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '2dfb313d-1fed-440b-8023-62beb795262a',
          name: formState.name,
          email: formState.email || 'no-email@provided.com',
          phone: formState.phone,
          course: formState.course,
          message: formState.message || 'Admission inquiry from website',
          subject: `New Admission Inquiry: ${formState.name} (${formState.course})`,
          from_name: 'MPCP Buxar Admissions'
        })
      });
      
      const result = await response.json();
      
      if (result.success) {
        setIsSuccess(true);
        setFormState({
          name: '',
          email: '',
          phone: '',
          course: 'D.Pharm',
          message: '',
        });
      } else {
        setErrorMessage('कुछ तकनीकी खराबी हुई। कृपया बाद में प्रयास करें या सीधे कॉल करें।');
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

      {/* Application Steps */}
      <section ref={scrollRef1} className="py-24 bg-cream">
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

      {/* Dates and Documents */}
      <section ref={scrollRef2} className="py-24 bg-ivory border-t border-navy/5">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Important Dates */}
            <div className="bg-cream/40 p-8 rounded-2xl border border-navy/5">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-12 w-12 rounded-xl bg-burnt/10 flex items-center justify-center text-burnt">
                  <Calendar size={24} />
                </div>
                <h3 className="font-display text-2xl text-navy font-bold">Important Dates</h3>
              </div>
              <div className="space-y-5">
                {importantDates.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 pb-4 border-b border-navy/10 last:border-0 last:pb-0">
                    <Clock size={18} className="text-burnt mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-body text-base font-bold text-navy">{item.event}</h4>
                      <p className="font-body text-sm text-navy/60 mt-0.5">{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Required Documents */}
            <div className="bg-cream/40 p-8 rounded-2xl border border-navy/5">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-12 w-12 rounded-xl bg-burnt/10 flex items-center justify-center text-burnt">
                  <FileText size={24} />
                </div>
                <h3 className="font-display text-2xl text-navy font-bold">Required Documents</h3>
              </div>
              <div className="space-y-4">
                {requiredDocuments.map((doc, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-burnt mt-1 flex-shrink-0" />
                    <span className="font-body text-sm text-navy/80 leading-relaxed">{doc}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Form Submission */}
      <section className="py-24 bg-cream border-t border-navy/5">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="bg-ivory rounded-3xl p-8 md:p-12 border border-navy/5 shadow-lg">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl md:text-4xl text-navy font-bold">
                Online Inquiry Form
              </h2>
              <p className="font-body text-sm text-navy/60 mt-3 max-w-md mx-auto">
                Submit the enquiry form below, or get in touch with our counselling wing directly for immediate assistance.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 justify-center">
                <a
                  href="tel:+919279881832"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cream text-navy font-bold hover:bg-cream/80 transition-colors shadow-sm text-sm"
                >
                  <Phone size={16} className="text-burnt" />
                  +91 92798 81832
                </a>
              </div>
            </div>

            {isSuccess ? (
              <div className="text-center py-12 bg-burnt/5 rounded-2xl border border-burnt/20">
                <div className="h-16 w-16 bg-burnt/10 rounded-full flex items-center justify-center text-burnt mx-auto mb-6">
                  <CheckCircle size={36} />
                </div>
                <h3 className="font-display text-2xl font-bold text-navy">धन्यवाद! (Thank You!)</h3>
                <p className="font-body text-navy/70 mt-3 max-w-sm mx-auto text-sm leading-relaxed">
                  आपका एडमिशन इंक्वायरी फॉर्म सफलतापूर्वक जमा कर दिया गया है। हमारा परामर्शदाता दल आपसे अतिशीघ्र संपर्क करेगा।
                </p>
                <Button 
                  onClick={() => setIsSuccess(false)}
                  className="mt-8 bg-burnt text-cream hover:bg-burnt/90 font-body px-8 py-2 text-[13px] uppercase tracking-wider"
                >
                  Submit Another Inquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
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
                      className="w-full px-4 py-3 rounded-lg border border-navy/10 bg-cream/10 focus:outline-none focus:border-burnt/50 text-sm font-body"
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
                      className="w-full px-4 py-3 rounded-lg border border-navy/10 bg-cream/10 focus:outline-none focus:border-burnt/50 text-sm font-body"
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
                      className="w-full px-4 py-3 rounded-lg border border-navy/10 bg-cream/10 focus:outline-none focus:border-burnt/50 text-sm font-body"
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
                      className="w-full px-4 py-3 rounded-lg border border-navy/10 bg-cream/10 focus:outline-none focus:border-burnt/50 text-sm font-body text-navy"
                    >
                      <option value="D.Pharm">Diploma in Pharmacy (D.Pharm) - 2 Years</option>
                      <option value="B.Pharm">Bachelor of Pharmacy (B.Pharm) - 4 Years</option>
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
                    className="w-full px-4 py-3 rounded-lg border border-navy/10 bg-cream/10 focus:outline-none focus:border-burnt/50 text-sm font-body resize-none"
                  />
                </div>

                {errorMessage && (
                  <p className="text-red-500 font-body text-xs font-semibold">{errorMessage}</p>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-burnt text-cream hover:bg-burnt/95 font-body py-4 rounded-lg flex items-center justify-center gap-2 tracking-wider text-[13px] uppercase font-bold"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" size={16} />
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
