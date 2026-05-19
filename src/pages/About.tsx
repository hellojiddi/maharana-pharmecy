import PageHeader from '@/components/PageHeader';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useCountUp } from '@/hooks/useCountUp';
import { Train, Bus, Car } from 'lucide-react';

function OurStorySection() {
  const ref = useScrollReveal<HTMLElement>();
  return (
    <section ref={ref} className="py-24 md:py-32 bg-cream">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="/assets/about-campus.jpg"
              alt="College Campus"
              className="w-full aspect-[3/4] object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <span className="section-label mb-4">Our Story</span>
            <h2 className="font-display text-3xl md:text-4xl text-navy font-bold mb-6">
              Committed to Excellence in Pharmacy Education
            </h2>
            <div className="space-y-4 text-navy/70 font-body text-base leading-relaxed mb-8">
              <p>
                Under the auspicious of Indian Computer Education Society, the Maharana Pratap College of Education (Pharmacy College) was started with a vision to provide quality pharmaceutical education in the Buxar region of Bihar.
              </p>
              <p>
                The College is recognized by the Bihar University of Health Sciences (Chanakya National Law University Campus, Mithapur, Patna) and Approved by Pharmacy Council of India, New Delhi — the highest regulatory authority for pharmacy education in India.
              </p>
              <p>
                Our mission is to nurture competent pharmacists who can contribute meaningfully to healthcare delivery, pharmaceutical research, and community wellness. We combine rigorous academic training with hands-on practical experience.
              </p>
            </div>
            <blockquote className="border-l-[3px] border-burnt pl-6">
              <p className="font-display text-xl text-navy italic mb-2">
                "This institute is committed to implementing all initiatives and guidelines issued by Pharmacy Council of India and the Government of Bihar in the field of Pharmacy."
              </p>
              <cite className="text-burnt text-sm font-body not-italic">— College Chairman</cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChairmanSection() {
  const ref = useScrollReveal<HTMLElement>();
  return (
    <section ref={ref} className="py-24 md:py-32 bg-ivory">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-12 items-center">
          <div className="flex flex-col items-center">
            <div className="w-[240px] h-[240px] md:w-[280px] md:h-[280px] rounded-full border-[3px] border-burnt overflow-hidden bg-navy/10 mb-6 flex items-center justify-center">
              <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#0B1D3A" strokeWidth="1" className="opacity-30">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <h3 className="font-body text-lg font-semibold text-navy">College Chairman</h3>
            <p className="text-navy/60 text-sm font-body">Founder & Chairman</p>
          </div>
          <div>
            <span className="section-label mb-4">Leadership</span>
            <h2 className="font-display text-3xl md:text-4xl text-navy font-bold mb-6">
              Chairman's Message
            </h2>
            <div className="space-y-4 text-navy/70 font-body text-base leading-relaxed">
              <p>
                I take immense pleasure to welcome you all to the Maharana Pratap Pharmacy College, Chilhari, Buxar. This institute is a part of our efforts to establish institutions of high repute.
              </p>
              <p>
                The institute is committed to implementing all the initiatives and guidelines issued by Pharmacy Council of India, New Delhi and Department of Health Services, the Government of Bihar in the field of Pharmacy.
              </p>
              <p>
                This institute ensures quality education through well-qualified faculty, modern laboratories, and a comprehensive curriculum designed to meet industry standards.
              </p>
              <p>
                We welcome aspiring pharmacists to join us in this journey of learning, discovery, and professional growth.
              </p>
            </div>
            <div className="mt-8">
              <div className="w-20 h-[2px] bg-burnt mb-3" />
              <p className="text-navy/60 text-sm font-body">With best wishes,</p>
              <p className="font-display text-2xl text-navy mt-1">Chairman</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LocationSection() {
  const ref = useScrollReveal<HTMLElement>();
  return (
    <section ref={ref} className="py-24 md:py-32 bg-cream">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="section-label mb-4">Location</span>
            <h2 className="font-display text-3xl md:text-4xl text-navy font-bold mb-6">
              Our City — Buxar
            </h2>
            <div className="space-y-4 text-navy/70 font-body text-base leading-relaxed mb-8">
              <p>
                The quiet town of Buxar has earned its place in history books because of two famous battles — first fought in 1539 A.D. between Sher Shah Suri and Humayun, and the second in 1764 when Mir Kasim stood against the British.
              </p>
              <p>
                Situated along the banks of the sacred Ganges River, Buxar offers a pleasant surrounding with a number of religious sites for pilgrims, including the famous Brameshwar Nath temple and the Bihariji temple.
              </p>
              <p>
                The College is located in Chilhari, just 12 km from Buxar Railway Station and 7 km from Dumraon Railway Station. It is situated near Buxar-Patna highway (NH-922) with frequent bus services available for transportation.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-navy font-body text-sm">
                <Train size={18} className="text-burnt" />
                12 km from Buxar Railway Station
              </div>
              <div className="flex items-center gap-3 text-navy font-body text-sm">
                <Train size={18} className="text-burnt" />
                7 km from Dumraon Railway Station
              </div>
              <div className="flex items-center gap-3 text-navy font-body text-sm">
                <Bus size={18} className="text-burnt" />
                On Buxar-Patna Highway (NH-922)
              </div>
              <div className="flex items-center gap-3 text-navy font-body text-sm">
                <Car size={18} className="text-burnt" />
                Frequent bus services available
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57559.52719068148!2d84.0167!3d25.5667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3992c1c0f0f0f0f1%3A0x0!2zMjXCsDM0JzAwLjAiTiA4NMKwMDEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: 16 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="College Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function KeyFactsSection() {
  const sectionRef = useScrollReveal<HTMLElement>();
  const stat1 = useCountUp(2, 2, '+');
  const stat2 = useCountUp(8, 2, '+');
  const stat3 = useCountUp(1000, 2, '+');

  return (
    <section ref={sectionRef} className="py-16 md:py-20 bg-navy">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <span ref={stat1.ref} className="font-display text-5xl md:text-6xl text-burnt font-bold">
              {stat1.displayValue}
            </span>
            <p className="text-cream/70 text-sm font-body mt-2">Programs</p>
          </div>
          <div>
            <span ref={stat2.ref} className="font-display text-5xl md:text-6xl text-burnt font-bold">
              {stat2.displayValue}
            </span>
            <p className="text-cream/70 text-sm font-body mt-2">Labs</p>
          </div>
          <div>
            <span ref={stat3.ref} className="font-display text-5xl md:text-6xl text-burnt font-bold">
              {stat3.displayValue}
            </span>
            <p className="text-cream/70 text-sm font-body mt-2">Library Books</p>
          </div>
          <div>
            <span className="font-display text-5xl md:text-6xl text-burnt font-bold">2018</span>
            <p className="text-cream/70 text-sm font-body mt-2">Established</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <>
      <PageHeader
        title="About Our College"
        subtitle="Building a legacy of pharmaceutical excellence in Bihar"
        backgroundImage="/assets/about-campus.jpg"
      />
      <OurStorySection />
      <ChairmanSection />
      <LocationSection />
      <KeyFactsSection />
    </>
  );
}
