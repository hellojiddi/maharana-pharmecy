import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Phone, GraduationCap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const heroImages = [
  '/assets/hero-img-1.png',
  '/assets/hero-img-2.jpg',
  '/assets/hero-img-3.jpg',
  '/assets/hero-img-4.jpg',
  '/assets/hero-img-5.jpg',
  '/assets/hero-img-6.jpg',
  '/assets/hero-img-7.jpg',
  '/assets/hero-img-8.jpg',
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const minSwipeDistance = 50;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      setActiveIndex((prev) => (prev + 1) % heroImages.length);
    } else if (isRightSwipe) {
      setActiveIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
    }
  };

  useEffect(() => {
    const text = textRef.current;
    const bar = barRef.current;
    if (!text || !bar) return;

    // Entrance animation for text
    const tl = gsap.timeline({ delay: 0.3 });
    tl.fromTo(
      text.querySelectorAll('.hero-animate'),
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
    )
    .fromTo(
      bar,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
      '-=0.3'
    );

    // Smooth image rotation interval
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => {
      tl.kill();
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="relative h-[55vh] md:h-[70vh] bg-navy overflow-hidden flex items-center pt-20"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Premium Ken Burns Fade Slider */}
        <div className="absolute inset-0 w-full h-full">
          {heroImages.map((img, i) => (
            <div
              key={i}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                i === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img
                src={img}
                alt={`College life ${i + 1}`}
                className={`w-full h-full object-cover transition-transform duration-[5000ms] ease-out ${
                  i === activeIndex ? 'scale-105' : 'scale-100'
                }`}
                loading="eager"
              />
              {/* Premium dark gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
            </div>
          ))}

          {/* Slider Indicators (Dots) */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {heroImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === activeIndex ? 'bg-burnt w-6 shadow-md' : 'bg-cream/40 hover:bg-cream/70'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy relative overflow-hidden border-t border-cream/5">
        {/* Silhouette Background */}
        <div className="absolute bottom-0 right-0 z-[1] pointer-events-none opacity-20">
          <img
            src="/assets/hero-silhouette.png"
            alt=""
            className="h-[40vh] w-auto object-contain"
          />
        </div>

        {/* Text Content */}
        <div
          ref={textRef}
          className="relative z-[3] max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24 flex flex-col items-center text-center"
        >
          {/* Badge */}
          <div className="hero-animate inline-flex items-center gap-2 px-4 py-2 bg-burnt rounded-full mb-6 shadow-md">
            <span className="text-cream text-[12px] md:text-[13px] uppercase tracking-[0.08em] font-body">
              PCI Approved &bull; BUHS Affiliated
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="hero-animate font-display text-4xl sm:text-5xl md:text-6xl text-cream font-bold leading-[1.1] tracking-tight max-w-4xl mb-6">
            Maharana Pratap College of Pharmacy
          </h1>

          {/* Sub-heading */}
          <p className="hero-animate font-body text-lg md:text-2xl text-cream/80 font-light tracking-wide mb-6">
            Shaping Future Pharmacists in Buxar, Bihar
          </p>

          {/* Description */}
          <p className="hero-animate font-body text-sm md:text-base text-cream/60 max-w-[600px] mb-10 leading-relaxed">
            Approved by Pharmacy Council of India, New Delhi and Affiliated to Bihar University of Health Sciences, Patna. Offering D.Pharm and B.Pharm programs with world-class facilities.
          </p>

          {/* CTA Buttons */}
          <div className="hero-animate flex flex-wrap justify-center gap-4 mb-16">
            <Link to="/courses" className="btn-primary shadow-lg">
              Explore Courses
            </Link>
            <Link to="/contact" className="inline-flex items-center px-8 py-3.5 border border-cream text-cream rounded-md text-[13px] uppercase tracking-[0.08em] font-body transition-all duration-300 hover:bg-cream hover:text-navy">
              Contact Us
            </Link>
          </div>

          {/* Bottom Info Bar */}
          <div ref={barRef} className="w-full border-t border-cream/10 pt-10">
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-cream/60" />
                <span className="text-cream/70 text-[13px] font-body">Chilhari, Buxar, Bihar</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-cream/60" />
                <a href="tel:+919279881832" className="text-cream/70 text-[13px] font-body hover:text-cream transition-colors">
                  +91 92798 81832
                </a>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap size={16} className="text-cream/60" />
                <span className="text-cream/70 text-[13px] font-body">Est. 2018</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
