import { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const categories = ['All', 'Campus', 'Laboratories', 'Library', 'Events', 'Students'];

const galleryImages = [
  { src: 'https://maharanapharmacy.com/images/PG/1.jpeg', alt: 'College Campus', category: 'Campus', aspect: 'aspect-[4/3]' },
  { src: 'https://maharanapharmacy.com/images/PG/2.jpeg', alt: 'Lab Session', category: 'Laboratories', aspect: 'aspect-[16/9]' },
  { src: 'https://maharanapharmacy.com/images/PG/3.jpeg', alt: 'Students Group', category: 'Students', aspect: 'aspect-square' },
  { src: 'https://maharanapharmacy.com/images/PG/4.jpeg', alt: 'Library', category: 'Library', aspect: 'aspect-[4/3]' },
  { src: 'https://maharanapharmacy.com/images/PG/5.jpeg', alt: 'Lab Equipment', category: 'Laboratories', aspect: 'aspect-[16/9]' },
  { src: 'https://maharanapharmacy.com/images/PG/6.jpeg', alt: 'College Event', category: 'Events', aspect: 'aspect-[4/3]' },
  { src: 'https://maharanapharmacy.com/images/PG/7.jpeg', alt: 'Campus View', category: 'Campus', aspect: 'aspect-[4/3]' },
  { src: 'https://maharanapharmacy.com/images/PG/8.jpeg', alt: 'Student in Lab', category: 'Laboratories', aspect: 'aspect-square' },
  { src: 'https://maharanapharmacy.com/images/PG/9.jpeg', alt: 'Classroom', category: 'Students', aspect: 'aspect-[4/3]' },
  { src: 'https://maharanapharmacy.com/images/PG/10.jpeg', alt: 'Pharmacognosy Lab', category: 'Laboratories', aspect: 'aspect-[16/9]' },
  { src: 'https://maharanapharmacy.com/images/PG/11.jpeg', alt: 'Sports Event', category: 'Events', aspect: 'aspect-[4/3]' },
  { src: 'https://maharanapharmacy.com/images/PG/12.jpeg', alt: 'Campus Interior', category: 'Campus', aspect: 'aspect-square' },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const sectionRef = useScrollReveal<HTMLElement>();
  const gridRef = useScrollReveal<HTMLDivElement>({ stagger: 0.06, children: true });

  const filtered = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  const filteredIndices = galleryImages
    .map((img, i) => ({ ...img, originalIndex: i }))
    .filter(img => activeCategory === 'All' || img.category === activeCategory);

  return (
    <>
      <PageHeader
        title="Photo Gallery"
        subtitle="Glimpses of campus life, laboratories, and student activities"
        backgroundImage="/assets/hero-img-1.jpg"
      />
      <section ref={sectionRef} className="py-20 md:py-28 bg-cream">
        <div className="max-w-[1400px] mx-auto px-6">
          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-[13px] uppercase tracking-wider font-body transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-burnt text-cream'
                    : 'bg-transparent border border-navy/20 text-navy hover:bg-navy/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {filtered.map((img, i) => {
              const isWide = i % 5 === 1 || i % 5 === 4;
              return (
                <div
                  key={`${activeCategory}-${i}`}
                  className={`group relative overflow-hidden rounded-xl cursor-pointer ${img.aspect} ${
                    isWide ? 'md:col-span-2' : ''
                  }`}
                  onClick={() => setLightboxIndex(filteredIndices.findIndex(f => f.src === img.src))}
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
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-cream text-sm font-body">{img.alt}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[200] bg-navy/95 flex items-center justify-center"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            className="absolute top-6 right-6 text-cream/80 hover:text-cream transition-colors z-10"
            onClick={() => setLightboxIndex(null)}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
          </button>

          <button
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-cream/10 flex items-center justify-center text-cream hover:bg-burnt transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((lightboxIndex - 1 + filteredIndices.length) % filteredIndices.length);
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
          </button>

          <button
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-cream/10 flex items-center justify-center text-cream hover:bg-burnt transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((lightboxIndex + 1) % filteredIndices.length);
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
          </button>

          <div className="max-w-[90vw] max-h-[85vh]" onClick={(e) => e.stopPropagation()}>
            <img
              src={filteredIndices[lightboxIndex]?.src}
              alt={filteredIndices[lightboxIndex]?.alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream/60 text-sm font-body">
            {lightboxIndex + 1} / {filteredIndices.length}
          </div>
        </div>
      )}
    </>
  );
}
