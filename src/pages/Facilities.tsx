import PageHeader from '@/components/PageHeader';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { FlaskConical, GraduationCap, Users, BookOpen, Microscope, Award, BookOpen as BookIcon } from 'lucide-react';

const features = [
  { icon: FlaskConical, title: 'Well-Equipped Labs', desc: 'State-of-the-art equipment as per PCI syllabus' },
  { icon: GraduationCap, title: 'Placement Guidance', desc: 'Assured placement support after course completion' },
  { icon: Users, title: 'Specialist Faculty', desc: 'Teaching team comprises domain specialists' },
  { icon: BookOpen, title: '1000+ Books', desc: 'Abundant collection of medical and pharmacy journals' },
];

const labs = [
  {
    title: 'Pharmaceutics Lab',
    desc: 'Equipped for drug formulation, manufacturing, and quality control. Students learn tablet preparation, capsule filling, and emulsion technology.',
    equipment: ['Tablet Compression Machine', 'Coating Pan', 'Dissolution Apparatus', 'Sieve Shaker'],
    image: '/assets/lab-pharmaceutics.jpg',
  },
  {
    title: 'Pharmaceutical Chemistry Lab',
    desc: 'Modern analytical lab for drug synthesis, identification, and purity testing using instrumental and chemical methods.',
    equipment: ['UV Spectrophotometer', 'pH Meter', 'Analytical Balance', 'Distillation Unit'],
    image: '/assets/hero-img-8.jpg',
  },
  {
    title: 'Physiology Lab',
    desc: 'Human anatomy and physiology study with models, charts, and practical demonstration equipment for understanding body systems.',
    equipment: ['Human Skeleton Model', 'Organ Models', 'Sphygmomanometer', 'Stethoscope'],
    image: '/assets/hero-img-2.jpg',
  },
  {
    title: 'Pharmacology Lab',
    desc: 'Advanced facility for studying drug action, toxicity testing, and bioassay procedures on isolated tissue preparations.',
    equipment: ["Sherrington's Kymograph", 'Pole Climbing Apparatus', 'Histamine Chamber', 'Organ Bath'],
    image: '/assets/lab-pharmacology.jpg',
  },
  {
    title: 'Pharmacognosy Lab',
    desc: 'Herbarium and microscopy facility for identification, classification, and study of medicinal plants and natural products.',
    equipment: ['Binocular Microscope', 'Microtome', 'Camera Lucida', 'Herbarium Sheets'],
    image: '/assets/hero-img-5.jpg',
  },
  {
    title: 'Biochemistry & Clinical Pathology Lab',
    desc: 'Diagnostic laboratory for biochemical testing, blood analysis, urine examination, and clinical pathology procedures.',
    equipment: ['Colorimeter', 'Centrifuge', 'Glucometer', 'Hemocytometer'],
    image: '/assets/hero-img-6.jpg',
  },
  {
    title: 'Hospital & Clinical Pharmacy Lab',
    desc: 'Simulated hospital pharmacy setup for learning patient counseling, prescription handling, and clinical pharmacy practice.',
    equipment: ['Medicine Cabinets', 'Mock Prescriptions', 'Drug Information Resources'],
    image: '/assets/hero-img-3.jpg',
  },
  {
    title: 'Machine Room',
    desc: 'Dedicated space housing heavy pharmaceutical machinery for large-scale formulation and manufacturing demonstrations.',
    equipment: ['Multi-Mill', 'Fluidized Bed Dryer', 'Blister Packing Machine', 'Ointment Mixer'],
    image: '/assets/hero-img-7.jpg',
  },
];

function SalientFeaturesBar() {
  const ref = useScrollReveal<HTMLDivElement>({ stagger: 0.1, children: true });
  return (
    <section className="py-14 bg-navy">
      <div className="max-w-[1400px] mx-auto px-6">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="flex items-start gap-4">
              <f.icon size={32} className="text-burnt flex-shrink-0" strokeWidth={1.5} />
              <div>
                <h4 className="text-cream font-body font-semibold text-sm mb-1">{f.title}</h4>
                <p className="text-cream/60 text-xs font-body leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LabsSection() {
  const ref = useScrollReveal<HTMLElement>();
  const cardsRef = useScrollReveal<HTMLDivElement>({ stagger: 0.12, children: true });
  return (
    <section ref={ref} className="py-24 md:py-32 bg-cream">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-14">
          <span className="section-label mb-4">Infrastructure</span>
          <h2 className="font-display text-4xl md:text-5xl text-navy font-bold mb-4">
            Specialized Laboratories
          </h2>
          <p className="text-navy/60 font-body text-base max-w-xl">
            All laboratories are well equipped as per the syllabus of Pharmacy Council of India, New Delhi
          </p>
        </div>
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {labs.map((lab, i) => (
            <div key={i} className="bg-ivory rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-[200px] overflow-hidden">
                <img src={lab.image} alt={lab.title} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-6 md:p-7">
                <h3 className="font-body text-lg font-semibold text-navy mb-2">{lab.title}</h3>
                <p className="text-navy/60 text-sm font-body leading-relaxed mb-4">{lab.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {lab.equipment.map((eq, j) => (
                    <span key={j} className="px-3 py-1 bg-navy/5 text-navy/60 text-xs font-body rounded-full">
                      {eq}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LibrarySection() {
  const ref = useScrollReveal<HTMLElement>();
  return (
    <section ref={ref} className="py-24 md:py-32 bg-ivory">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden">
            <img src="/assets/hero-img-4.jpg" alt="College Library" className="w-full aspect-[4/3] object-cover" loading="lazy" />
          </div>
          <div>
            <span className="section-label mb-4">Resources</span>
            <h2 className="font-display text-3xl md:text-4xl text-navy font-bold mb-6">College Library</h2>
            <div className="space-y-4 text-navy/70 font-body text-base leading-relaxed mb-6">
              <p>The College has a well-equipped library with more than 1000 selected books and subscribes to adequate pharmacy-oriented journals.</p>
              <p>The library is kept open from 10 AM to 5 PM from Monday to Saturday for reference. During the examination period, the library is kept open up to 8 PM on all working days.</p>
              <p>Books are also issued to students for home study. The collection covers all aspects of pharmaceutical sciences.</p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-navy/70 text-sm font-body">
                <BookIcon size={16} className="text-burnt" /> 1000+ pharmacy books and reference materials
              </div>
              <div className="flex items-center gap-2 text-navy/70 text-sm font-body">
                <Award size={16} className="text-burnt" /> Subscription to national and international pharmacy journals
              </div>
              <div className="flex items-center gap-2 text-navy/70 text-sm font-body">
                <Microscope size={16} className="text-burnt" /> Open 10 AM - 5 PM (Mon-Sat), extended to 8 PM during exams
              </div>
              <div className="flex items-center gap-2 text-navy/70 text-sm font-body">
                <BookOpen size={16} className="text-burnt" /> Home issue facility available
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ComputerLabSection() {
  const ref = useScrollReveal<HTMLElement>();
  return (
    <section ref={ref} className="py-24 md:py-32 bg-cream">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="section-label mb-4">Technology</span>
            <h2 className="font-display text-3xl md:text-4xl text-navy font-bold mb-6">Computer Lab</h2>
            <div className="space-y-4 text-navy/70 font-body text-base leading-relaxed mb-6">
              <p>The computer lab has several sections. Each section offers different software applications for support of various program areas across campus — standard applications, internet applications, programming, and art design applications. Students have access to pharmacy-related software for drug information, molecular modeling, and academic research.</p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-navy/70 text-sm font-body">
                <Microscope size={16} className="text-burnt" /> Multiple sections with modern workstations
              </div>
              <div className="flex items-center gap-2 text-navy/70 text-sm font-body">
                <Award size={16} className="text-burnt" /> High-speed internet connectivity
              </div>
              <div className="flex items-center gap-2 text-navy/70 text-sm font-body">
                <FlaskConical size={16} className="text-burnt" /> Pharmacy software and drug databases
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img src="/assets/computer-lab.jpg" alt="Computer Lab" className="w-full aspect-[4/3] object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ExtraCurricularSection() {
  const ref = useScrollReveal<HTMLElement>();
  const cardsRef = useScrollReveal<HTMLDivElement>({ stagger: 0.1, children: true });
  return (
    <section ref={ref} className="py-24 md:py-32 bg-ivory">
      <div className="max-w-[800px] mx-auto px-6 text-center">
        <span className="section-label justify-center mb-4">Beyond Academics</span>
        <h2 className="font-display text-3xl md:text-4xl text-navy font-bold mb-4">Extra Curricular Activities</h2>
        <p className="text-navy/70 font-body text-base mb-12">
          Regular sports, literary, and cultural competitions are conducted to improve the talent of students and enhance their self-confidence. The sports meet is held every year and prizes are awarded to winners in all competitions at the valedictory function.
        </p>
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Award, title: 'Sports', desc: 'Annual sports meet with track and field events' },
            { icon: BookIcon, title: 'Literary', desc: 'Debates, essay writing, and quiz competitions' },
            { icon: Users, title: 'Cultural', desc: 'Music, dance, and drama programs' },
          ].map((a, i) => (
            <div key={i} className="p-6 bg-ivory rounded-2xl border border-navy/5">
              <a.icon size={36} className="text-burnt mx-auto mb-4" strokeWidth={1.5} />
              <h3 className="font-body text-lg font-semibold text-navy mb-2">{a.title}</h3>
              <p className="text-navy/60 text-sm font-body">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HostelSection() {
  const ref = useScrollReveal<HTMLElement>();
  return (
    <section ref={ref} className="py-20 md:py-24 bg-navy">
      <div className="max-w-[1000px] mx-auto px-6">
        <div className="text-center mb-10">
          <span className="section-label justify-center !text-burnt before:bg-burnt mb-4">Accommodation</span>
          <h2 className="font-display text-3xl md:text-4xl text-cream font-bold">Hostel Facilities</h2>
        </div>
        <p className="text-cream/70 font-body text-base text-center max-w-2xl mx-auto mb-10">
          The college provides comfortable hostel accommodation for both male and female students. Hostels are located within the campus premises, ensuring safety and convenience.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            '🏠 Separate hostels for boys and girls',
            '🍽️ Nutritious mess facility',
            '📶 Wi-Fi connectivity',
            '🛡️ 24/7 security and warden supervision',
            '⚡ Uninterrupted power and water supply',
            '🏥 First-aid and medical assistance',
          ].map((item, i) => (
            <div key={i} className="p-4 bg-cream/5 rounded-xl text-cream/80 text-sm font-body">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Facilities() {
  return (
    <>
      <PageHeader
        title="Our Facilities"
        subtitle="State-of-the-art infrastructure approved by Pharmacy Council of India"
        backgroundImage="/assets/lab-pharmaceutics.jpg"
      />
      <SalientFeaturesBar />
      <LabsSection />
      <LibrarySection />
      <ComputerLabSection />
      <ExtraCurricularSection />
      <HostelSection />
    </>
  );
}
