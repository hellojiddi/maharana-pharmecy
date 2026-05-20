import { Link } from 'react-router-dom';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useCountUp } from '@/hooks/useCountUp';

export default function WelcomeSection() {
  const sectionRef = useScrollReveal<HTMLElement>();
  const stat1 = useCountUp(2, 1.5, '+');
  const stat2 = useCountUp(1000, 1.5, '+');
  const stat3 = useCountUp(8, 1.5, '+');

  return (
    <section ref={sectionRef} className="py-24 md:py-36 bg-cream">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="/assets/about-campus.jpg"
              alt="Maharana Pratap College of Pharmacy Campus"
              className="w-full aspect-[4/3] object-cover"
              loading="lazy"
            />
          </div>

          {/* Right - Content */}
          <div>
            <span className="section-label mb-4">About the College</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-navy font-bold leading-tight mb-6">
              Welcome to Maharana Pratap College of Pharmacy
            </h2>
            <div className="space-y-4 text-navy/70 font-body text-base leading-relaxed mb-6">
              <p>
                Under the auspicious of Indian Computer Education Society, the Maharana Pratap College of Education (Pharmacy College) was started. The College is recognized by the Bihar University of Health Sciences, Chanakya National Law University Campus, Patna and Approved by Pharmacy Council of India, New Delhi.
              </p>
              <p>
                The College is established with fully equipped laboratories, digital classrooms, library and well qualified faculties to provide quality education in the field of pharmacy.
              </p>
              <p>
                Located in <a href="https://maps.google.com/?q=Maharana+Pratap+College+of+Pharmacy+Chilhari+Buxar" target="_blank" rel="noopener noreferrer" className="text-burnt hover:underline font-semibold">Chilhari, Buxar, Bihar</a> — a peaceful and pollution-free setting ideal for educational pursuits, just 12 km from Buxar Railway Station and 7 km from Dumraon Railway Station. Situated near Buxar-Patna highway (NH-922).
              </p>
            </div>

            <Link
              to="/about"
              className="link-underline text-burnt font-body text-sm font-medium mb-10 inline-block"
            >
              Learn More About Us &rarr;
            </Link>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-navy-10">
              <div>
                <span ref={stat1.ref} className="font-display text-3xl md:text-4xl text-burnt font-semibold">
                  {stat1.displayValue}
                </span>
                <p className="text-navy/60 text-[13px] font-body mt-1">Programs Offered</p>
              </div>
              <div>
                <span ref={stat2.ref} className="font-display text-3xl md:text-4xl text-burnt font-semibold">
                  {stat2.displayValue}
                </span>
                <p className="text-navy/60 text-[13px] font-body mt-1">Library Books</p>
              </div>
              <div>
                <span ref={stat3.ref} className="font-display text-3xl md:text-4xl text-burnt font-semibold">
                  {stat3.displayValue}
                </span>
                <p className="text-navy/60 text-[13px] font-body mt-1">Specialized Labs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
