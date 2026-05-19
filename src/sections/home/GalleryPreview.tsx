import { Link } from 'react-router-dom';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const galleryImages = [
  { src: 'https://maharanapharmacy.com/images/PG/1.jpeg', alt: 'College Campus', aspect: 'aspect-[4/3]' },
  { src: 'https://maharanapharmacy.com/images/PG/2.jpeg', alt: 'Lab Session', aspect: 'aspect-[16/9]' },
  { src: 'https://maharanapharmacy.com/images/PG/3.jpeg', alt: 'Students Group', aspect: 'aspect-square' },
  { src: 'https://maharanapharmacy.com/images/PG/4.jpeg', alt: 'Library', aspect: 'aspect-[4/3]' },
  { src: 'https://maharanapharmacy.com/images/PG/5.jpeg', alt: 'Lab Equipment', aspect: 'aspect-[16/9]' },
  { src: 'https://maharanapharmacy.com/images/PG/6.jpeg', alt: 'College Event', aspect: 'aspect-[4/3]' },
];

export default function GalleryPreview() {
  const sectionRef = useScrollReveal<HTMLElement>();
  const gridRef = useScrollReveal<HTMLDivElement>({ stagger: 0.08, children: true });

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-cream">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="mb-14">
          <span className="section-label mb-4">Campus Life</span>
          <h2 className="font-display text-4xl md:text-5xl text-navy font-bold mb-4">
            Photo Gallery
          </h2>
          <p className="text-navy/60 font-body text-base max-w-xl">
            Glimpses of our campus, labs, and student life
          </p>
        </div>

        {/* Masonry Grid */}
        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((img, i) => (
            <Link
              key={i}
              to="/gallery"
              className={`group relative overflow-hidden rounded-xl ${img.aspect} ${
                i === 1 || i === 4 ? 'md:col-span-2' : ''
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/hero-img-1.jpg';
                }}
              />
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/30 transition-colors duration-300" />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            to="/gallery"
            className="link-underline text-burnt font-body text-sm font-medium"
          >
            View Full Gallery &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
