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

    // Scroll-driven carousel rotation
    const cards = carousel.querySelectorAll('.hero-card');
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: '+=200%',
        pin: true,
        scrub: 1,
      },
    });

    scrollTl.to(carousel, {
      rotateY: 360,
      duration: 1,
      ease: 'none',
    });

    scrollTl.to(
      text.querySelectorAll('.hero-animate'),
      { opacity: 0, y: -30, stagger: 0.05, duration: 0.3 },
      0.3
    );

    // Floating animation for cards
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
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] bg-navy overflow-hidden flex items-center"
    >
      {/* 3D Image Carousel */}
      <div
        ref={carouselRef}
        className="absolute inset-0 flex items-center justify-center"
        style={{ perspective: '1200px' }}
      >
        <div
          className="relative w-full h-full"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {heroImages.map((img, i) => {
            const angle = (i / heroImages.length) * 360;
            const radius = 500;
            return (
              <div
                key={i}
                className="hero-card absolute left-1/2 top-1/2 w-[280px] h-[200px] md:w-[360px] md:h-[260px] rounded-xl overflow-hidden shadow-2xl"
                style={{
                  transform: `translate(-50%, -50%) rotateY(${angle}deg) translateZ(${radius}px)`,
                  backfaceVisibility: 'hidden',
                }}
              >
                <img
                  src={img}
                  alt={`College life ${i + 1}`}
                  className="w-full h-full object-cover"
                  loading={i < 3 ? 'eager' : 'lazy'}
                />
                <div className="absolute inset-0 bg-navy/20" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Silhouette */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-[2] pointer-events-none opacity-40">
        <img
          src="/assets/hero-silhouette.png"
          alt=""
          className="h-[50vh] md:h-[60vh] w-auto object-contain"
          style={{ filter: 'brightness(0.3)' }}
        />
      </div>

      {/* Text Content */}
      <div
        ref={textRef}
        className="relative z-[3] max-w-[1400px] mx-auto px-6 md:px-12 pt-24 pb-32"
      >
        {/* Badge */}
        <div className="hero-animate inline-flex items-center gap-2 px-4 py-2 bg-burnt rounded-full mb-6">
          <span className="text-cream text-[13px] uppercase tracking-[0.08em] font-body">
            PCI Approved &bull; BUHS Affiliated
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="hero-animate font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream font-bold leading-[0.9] tracking-tight max-w-3xl mb-4">
          Maharana Pratap College of Pharmacy
        </h1>

        {/* Sub-heading */}
        <p className="hero-animate font-body text-xl md:text-2xl text-cream/80 font-light tracking-wide mb-4">
          Shaping Future Pharmacists in Buxar, Bihar
        </p>

        {/* Description */}
        <p className="hero-animate font-body text-base text-cream/60 max-w-[480px] mb-8 leading-relaxed">
          Approved by Pharmacy Council of India, New Delhi and Affiliated to Bihar University of Health Sciences, Patna. Offering D.Pharm and B.Pharm programs with world-class facilities.
        </p>

        {/* CTA Buttons */}
        <div className="hero-animate flex flex-wrap gap-4">
          <Link to="/courses" className="btn-primary">
            Explore Courses
          </Link>
          <Link to="/contact" className="inline-flex items-center px-8 py-3.5 border border-cream text-cream rounded-md text-[13px] uppercase tracking-[0.08em] font-body transition-all duration-300 hover:bg-cream hover:text-navy">
            Contact Us
          </Link>
        </div>
      </div>

      {/* Bottom Info Bar */}
      <div
        ref={barRef}
        className="absolute bottom-10 left-0 w-full z-[3]"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex flex-wrap items-center gap-6 md:gap-0">
            <div className="flex items-center gap-2 md:pr-8 md:border-r md:border-cream/20">
              <MapPin size={16} className="text-cream/60" />
              <span className="text-cream/70 text-[13px] font-body">Chilhari, Buxar, Bihar</span>
            </div>
            <div className="flex items-center gap-2 md:px-8 md:border-r md:border-cream/20">
              <Phone size={16} className="text-cream/60" />
              <a href="tel:+919279881832" className="text-cream/70 text-[13px] font-body hover:text-cream transition-colors">
                +91 92798 81832
              </a>
            </div>
            <div className="flex items-center gap-2 md:pl-8">
              <GraduationCap size={16} className="text-cream/60" />
              <span className="text-cream/70 text-[13px] font-body">Est. 2018</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
