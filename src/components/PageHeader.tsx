import { Link } from 'react-router-dom';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

export default function PageHeader({ title, subtitle, backgroundImage }: PageHeaderProps) {
  const contentRef = useScrollReveal<HTMLDivElement>({ delay: 0.2 });

  return (
    <section className="relative h-[50vh] min-h-[320px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-navy/55" />
      </div>

      {/* Content */}
      <div ref={contentRef} className="relative z-10 text-center px-6 max-w-3xl">
        {/* Breadcrumb */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <Link to="/" className="text-cream/60 text-[13px] font-body hover:text-cream transition-colors">
            Home
          </Link>
          <span className="text-cream/40">/</span>
          <span className="text-cream/60 text-[13px] font-body">{title}</span>
        </div>

        {/* Title */}
        <h1 className="font-display text-5xl md:text-6xl text-cream font-bold leading-tight mb-4">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-cream/70 text-lg font-body max-w-xl mx-auto">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
