import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Phone, GraduationCap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const heroImages = [
  '/assets/hero-img-1.jpg',
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
  const carouselRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const carousel = carouselRef.current;
    const text = textRef.current;
    const bar = barRef.current;
    if (!section || !carousel || !text || !bar) return;

    // Entrance animation
    const tl = gsap.timeline({ delay: 0.3 });
    tl.fromTo(
      carousel.children,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, stagger: 0.1, ease: 'power3.out' }
    )
    .fromTo(
      text.querySelectorAll('.hero-animate'),
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' },
      '-=0.5'
    )
    .fromTo(
      bar,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
      '-=0.3'
    );

    // Auto-rotation for carousel
    const scrollTl = gsap.to(carousel, {
      rotateY: 360,
      duration: 30,
      repeat: -1,
      ease: 'none',
    });

    // Floating animation for cards
    const cards = carousel.querySelectorAll('.hero-card');
    cards.forEach((card, i) => {
      gsap.to(card, {
        y: Math.sin(i * 0.7) * 10,
        duration: 2 + i * 0.3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    });

    return () => {
      tl.kill();
      scrollTl.kill();
    };
  }, []);

  return (
  return (
    <>
      <section
        ref={sectionRef}
        className="relative h-[60vh] md:h-[70vh] bg-navy overflow-hidden flex items-center pt-20"
      >
        {/* 3D Image Carousel */}
        <div
          ref={carouselRef}
          className="absolute inset-0 flex items-center justify-center"
          style={{ perspective: '1200px' }}
        >
          <div
            className="relative w-full h-full mt-10"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {heroImages.map((img, i) => {
              const angle = (i / heroImages.length) * 360;
              const radius = window.innerWidth < 768 ? 300 : 500;
              return (
                <div
                  key={i}
                  className="hero-card absolute left-1/2 top-1/2 w-[240px] h-[160px] md:w-[360px] md:h-[260px] rounded-xl overflow-hidden shadow-2xl"
                  style={{
                    transform: `translate(-50%, -50%) rotateY(${angle}deg) translateZ(${radius}px)`,
                    backfaceVisibility: 'hidden',
                  }}
                >
                  <img
                    src={img}
                    alt={`College life ${i + 1}`}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-navy/10" />
                </div>
              );
            })}
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
