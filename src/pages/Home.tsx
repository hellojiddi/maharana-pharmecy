import Hero from '@/sections/home/Hero';
import AnnouncementBar from '@/sections/home/AnnouncementBar';
import WelcomeSection from '@/sections/home/WelcomeSection';
import ProgramsSection from '@/sections/home/ProgramsSection';
import FacilitiesPreview from '@/sections/home/FacilitiesPreview';
import WhyChooseSection from '@/sections/home/WhyChooseSection';
import GalleryPreview from '@/sections/home/GalleryPreview';
import AffiliationsSection from '@/sections/home/AffiliationsSection';
import CTASection from '@/sections/home/CTASection';

export default function Home() {
  return (
    <>
      <Hero />
      <AnnouncementBar />
      <WelcomeSection />
      <ProgramsSection />
      <FacilitiesPreview />
      <WhyChooseSection />
      <GalleryPreview />
      <AffiliationsSection />
      <CTASection />
    </>
  );
}
