import { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Train, Bus, Car, Phone, Mail, Clock, Lock, CheckCircle } from 'lucide-react';

function QuickContactCards() {
  const ref = useScrollReveal<HTMLDivElement>({ stagger: 0.12, children: true });

  return (
    <section className="pt-10 pb-16 bg-cream">
      <div className="max-w-[1200px] mx-auto px-6">
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* WhatsApp */}
          <div className="bg-ivory rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="w-16 h-16 rounded-full bg-[#25D366]/15 flex items-center justify-center mx-auto mb-4">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="#25D366">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            <h3 className="font-body text-lg font-semibold text-navy mb-2">WhatsApp</h3>
            <p className="text-navy/60 text-sm font-body mb-4">Get instant replies on WhatsApp. Send us your queries anytime.</p>
            <p className="text-burnt font-body font-medium mb-1">+91 92798 81832</p>
            <p className="text-navy/50 text-xs font-body mb-5">+91 98129 81215</p>
            <a
              href="https://wa.me/919279881832"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* Phone */}
          <div className="bg-ivory rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="w-16 h-16 rounded-full bg-burnt/15 flex items-center justify-center mx-auto mb-4">
              <Phone size={28} className="text-burnt" />
            </div>
            <h3 className="font-body text-lg font-semibold text-navy mb-2">Call Us</h3>
            <p className="text-navy/60 text-sm font-body mb-4">Speak directly with our admission counselor during office hours.</p>
            <a href="tel:+919279881832" className="text-burnt font-body font-medium block mb-1">+91 92798 81832</a>
            <a href="tel:+919812981215" className="text-navy/50 text-sm font-body block mb-1">+91 98129 81215</a>
            <p className="text-navy/40 text-xs font-body mb-5">Mon - Sat, 10 AM - 5 PM</p>
            <a href="tel:+919279881832" className="btn-primary w-full block text-center">
              Call Now
            </a>
          </div>

          {/* Email */}
          <div className="bg-ivory rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="w-16 h-16 rounded-full bg-navy/10 flex items-center justify-center mx-auto mb-4">
              <Mail size={28} className="text-navy" />
            </div>
            <h3 className="font-body text-lg font-semibold text-navy mb-2">Email Us</h3>
            <p className="text-navy/60 text-sm font-body mb-4">Send detailed queries and we'll respond within 24 hours.</p>
            <a href="mailto:maharanapratapcoe@gmail.com" className="text-burnt font-body font-medium text-sm block mb-4">
              maharanapratapcoe@gmail.com
            </a>
            <p className="text-navy/40 text-xs font-body mb-5">Usually replies within 24 hours</p>
            <a href="mailto:maharanapratapcoe@gmail.com" className="btn-secondary w-full block text-center">
              Send Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function InquiryForm() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', course: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useScrollReveal<HTMLElement>();

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.phone.trim()) errs.phone = 'Phone is required';
    if (!formData.course) errs.course = 'Please select a course';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-ivory">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-16">
          {/* Form */}
          <div>
            <span className="section-label mb-4">Get in Touch</span>
            <h2 className="font-display text-3xl md:text-4xl text-navy font-bold mb-8">
              Send Us an Inquiry
            </h2>
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <CheckCircle size={48} className="text-green-500 mb-4" />
                <h3 className="font-body text-xl text-navy font-semibold mb-2">Thank you! We'll get back to you soon.</h3>
                <p className="text-navy/60 text-sm font-body">Usually responds within 24 hours</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <input
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-3.5 bg-cream border border-navy/10 rounded-lg text-navy font-body text-sm placeholder:text-navy/40 focus:outline-none focus:border-burnt transition-colors"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1 font-body">{errors.name}</p>}
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="+91 Mobile number"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-5 py-3.5 bg-cream border border-navy/10 rounded-lg text-navy font-body text-sm placeholder:text-navy/40 focus:outline-none focus:border-burnt transition-colors"
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1 font-body">{errors.phone}</p>}
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your email address (optional)"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-3.5 bg-cream border border-navy/10 rounded-lg text-navy font-body text-sm placeholder:text-navy/40 focus:outline-none focus:border-burnt transition-colors"
                  />
                </div>
                <div>
                  <select
                    value={formData.course}
                    onChange={e => setFormData({ ...formData, course: e.target.value })}
                    className="w-full px-5 py-3.5 bg-cream border border-navy/10 rounded-lg text-navy font-body text-sm focus:outline-none focus:border-burnt transition-colors appearance-none"
                  >
                    <option value="">Select Course</option>
                    <option value="dpharm">D.Pharm</option>
                    <option value="bpharm">B.Pharm</option>
                    <option value="both">Both</option>
                  </select>
                  {errors.course && <p className="text-red-500 text-xs mt-1 font-body">{errors.course}</p>}
                </div>
                <div>
                  <textarea
                    placeholder="Your query or message..."
                    rows={4}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-5 py-3.5 bg-cream border border-navy/10 rounded-lg text-navy font-body text-sm placeholder:text-navy/40 focus:outline-none focus:border-burnt transition-colors resize-none"
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Submit Inquiry
                </button>
                <p className="flex items-center gap-1.5 text-navy/40 text-xs font-body">
                  <Lock size={12} /> Your information is secure and will never be shared.
                </p>
              </form>
            )}
          </div>

          {/* Address */}
          <div>
            <span className="section-label mb-4">Visit Us</span>
            <h2 className="font-display text-3xl md:text-4xl text-navy font-bold mb-8">
              College Address
            </h2>
            <div className="bg-ivory rounded-2xl p-7 shadow-sm mb-6">
              <h4 className="font-body text-base font-semibold text-navy mb-3">
                Maharana Pratap College of Education (Pharmacy College)
              </h4>
              <a 
                href="https://maps.google.com/?q=Maharana+Pratap+College+of+Pharmacy+Chilhari+Buxar" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block space-y-1 text-navy/70 text-sm font-body leading-relaxed mb-4 hover:text-burnt transition-colors duration-300"
                title="Click to view on Google Maps"
              >
                <p>Village: Chilhari</p>
                <p>Block: Dumraon</p>
                <p>District: Buxar, Bihar - 802133</p>
              </a>
              <div className="h-px bg-navy/10 my-4" />
              <div className="space-y-3 mb-4">
                <a href="tel:+919279881832" className="flex items-center gap-2 text-navy text-sm font-body">
                  <Phone size={15} className="text-burnt" /> +91 92798 81832
                </a>
                <a href="tel:+919812981215" className="flex items-center gap-2 text-navy/70 text-sm font-body">
                  <Phone size={15} className="text-burnt/60" /> +91 98129 81215
                </a>
                <a href="mailto:maharanapratapcoe@gmail.com" className="flex items-center gap-2 text-navy/70 text-sm font-body">
                  <Mail size={15} className="text-burnt/60" /> maharanapratapcoe@gmail.com
                </a>
              </div>
              <div className="h-px bg-navy/10 my-4" />
              <div className="flex items-center gap-2 text-navy/60 text-sm font-body">
                <Clock size={15} className="text-burnt/60" /> Mon - Sat: 10 AM - 5 PM
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57559.52719068148!2d84.0167!3d25.5667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3992c1c0f0f0f0f1%3A0x0!2zMjXCsDM0JzAwLjAiTiA4NMKwMDEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                width="100%"
                height="350"
                style={{ border: 0, borderRadius: 16 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="College Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowToReach() {
  const ref = useScrollReveal<HTMLElement>();
  const cardsRef = useScrollReveal<HTMLDivElement>({ stagger: 0.1, children: true });

  return (
    <section ref={ref} className="py-20 md:py-24 bg-navy">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-12">
          <span className="section-label justify-center !text-burnt before:bg-burnt mb-4">Directions</span>
          <h2 className="font-display text-3xl md:text-4xl text-cream font-bold">How to Reach Us</h2>
        </div>
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Train, title: 'By Train', desc: 'Nearest railway stations: Buxar Railway Station (12 km) and Dumraon Railway Station (7 km). Both stations are well-connected to Patna, Varanasi, and Delhi.' },
            { icon: Bus, title: 'By Bus', desc: 'The college is situated near Buxar-Patna Highway (NH-922). Frequent buses are available from Buxar bus stand and Patna. Ask for Chilhari/Dumraon.' },
            { icon: Car, title: 'By Road', desc: 'From Buxar town, take the Dumraon road for approximately 12 km. The college is located in Chilhari village, clearly visible from the highway.' },
          ].map((r, i) => (
            <div key={i} className="p-7 rounded-2xl bg-cream/5">
              <r.icon size={32} className="text-burnt mb-4" strokeWidth={1.5} />
              <h3 className="font-body text-lg font-semibold text-cream mb-3">{r.title}</h3>
              <p className="text-cream/60 text-sm font-body leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RulesAccordion() {
  const ref = useScrollReveal<HTMLElement>();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const rules = [
    { title: 'Conduct', content: 'Students must maintain perfect discipline in the college premises and hostel. They should conduct themselves courteously with other students and staff members.' },
    { title: 'Punctuality', content: 'Students coming to classes late may not be permitted to enter the class. Regular attendance is mandatory for all sessions.' },
    { title: 'Attendance', content: 'Students not satisfying the minimum attendance requirements of the examination authority will not be permitted to take the annual examination.' },
    { title: 'Laboratory Safety', content: "Students must wear aprons during practical work in the laboratory. They should not meddle with machines and equipment without the guide's supervision." },
    { title: 'Property', content: 'Students are forbidden from pasting posters in the college premises and doing any damage to the property of the Institute.' },
    { title: 'Library', content: 'Students must maintain silence in the library, classroom, and work quietly in the laboratory. Books are issued for home study and must be returned on time.' },
    { title: 'Identity Cards', content: 'Students should carry their identity cards during college hours at all times.' },
    { title: 'Notice Boards', content: "Students are not to affix any notice to or remove any official notice from the institute's notice boards." },
  ];

  return (
    <section ref={ref} className="py-20 md:py-24 bg-cream">
      <div className="max-w-[1000px] mx-auto px-6">
        <div className="text-center mb-10">
          <span className="section-label justify-center mb-4">Guidelines</span>
          <h2 className="font-display text-3xl md:text-4xl text-navy font-bold mb-3">
            College Rules & Discipline
          </h2>
          <p className="text-navy/60 font-body text-base">
            We maintain high standards of discipline to ensure a focused learning environment
          </p>
        </div>
        <div className="space-y-0">
          {rules.map((rule, i) => (
            <div key={i} className="border-b border-navy/10">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-4 text-left"
              >
                <span className="font-body text-base font-medium text-navy">{rule.title}</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`text-navy/40 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-40 pb-4' : 'max-h-0'}`}
              >
                <p className="text-navy/60 text-sm font-body leading-relaxed">{rule.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Contact() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="We're here to help with your admission queries"
        backgroundImage="/assets/hero-img-1.jpg"
      />
      <QuickContactCards />
      <InquiryForm />
      <HowToReach />
      <RulesAccordion />
    </>
  );
}
