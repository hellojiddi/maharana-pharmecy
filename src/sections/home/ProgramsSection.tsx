import { Link } from 'react-router-dom';
import { Clock, BookOpen } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const courses = [
  {
    badge: 'Diploma',
    title: 'D.Pharm — Diploma in Pharmacy',
    duration: '2 Years',
    eligibility: 'Class 12 (Science)',
    description:
      'A two-year career-oriented diploma course designed to prepare students to work under the guidance of experienced pharmacists. Covers pharmaceutics, pharmacology, pharmacognosy, and pharmaceutical chemistry.',
    image: '/assets/course-dpharm.jpg',
  },
  {
    badge: 'Degree',
    title: 'B.Pharm — Bachelor of Pharmacy',
    duration: '4 Years',
    eligibility: 'Class 12 (PCM/B with 50%)',
    description:
      'An undergraduate program providing deep knowledge of science and medicine. Learn healthcare, biochemical science, drug formulation, and clinical pharmacy with dedicated labs and experienced faculty.',
    image: '/assets/course-bpharm.jpg',
  },
];

export default function ProgramsSection() {
  const sectionRef = useScrollReveal<HTMLElement>();
  const cardsRef = useScrollReveal<HTMLDivElement>({ stagger: 0.15, children: true });

  return (
    <section ref={sectionRef} className="py-24 md:py-36 bg-navy">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label justify-center !text-burnt before:bg-burnt mb-4">Our Programs</span>
          <h2 className="font-display text-4xl md:text-5xl text-cream font-bold mb-4">
            Courses We Offer
          </h2>
          <p className="text-cream/60 font-body text-base max-w-xl mx-auto">
            PCI-approved programs designed for aspiring pharmacists
          </p>
        </div>

        {/* Course Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, i) => (
            <div
              key={i}
              className="group bg-ivory rounded-[20px] overflow-hidden transition-all duration-400 hover:shadow-[0_12px_40px_rgba(11,29,58,0.15)]"
            >
              {/* Image */}
              <div className="relative h-[220px] md:h-[260px] overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute top-4 right-4 px-4 py-1.5 bg-burnt text-cream text-[12px] uppercase tracking-wider font-body rounded-full">
                  {course.badge}
                </span>
              </div>

              {/* Content */}
              <div className="p-7 md:p-8">
                <h3 className="font-display text-xl md:text-2xl text-navy font-semibold mb-3">
                  {course.title}
                </h3>
                <div className="flex items-center gap-5 mb-4 text-navy/60 text-[13px] font-body">
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <BookOpen size={14} />
                    {course.eligibility}
                  </span>
                </div>
                <p className="text-navy/70 text-sm font-body leading-relaxed mb-6">
                  {course.description}
                </p>
                <div className="flex items-center gap-4">
                  <Link
                    to="/courses"
                    className="text-burnt font-body text-sm font-medium link-underline"
                  >
                    View Details &rarr;
                  </Link>
                  <Link
                    to="/contact"
                    className="px-5 py-2 border border-navy/20 text-navy rounded-md text-[12px] uppercase tracking-wider font-body hover:bg-navy hover:text-cream transition-all duration-300"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
