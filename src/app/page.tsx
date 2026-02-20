import { Suspense } from 'react';
import { GlobalShapesBackground } from '@/components/screen/home/shared/GlobalShapesBackground';
import { Navbar } from '@/components/screen/home/layout/Navbar';
import { Footer } from '@/components/screen/home/layout/Footer';
import { HeroSection } from '@/components/screen/home/sections/HeroSection';
import { JourneySection } from '@/components/screen/home/sections/JourneySection';
import { AboutSection } from '@/components/screen/home/sections/AboutSection';
import { ExperienceTimerSection } from '@/components/screen/home/sections/ExperienceTimerSection';
import { SkillsSection } from '@/components/screen/home/sections/SkillsSection';
import { ProjectsSection } from '@/components/screen/home/sections/ProjectsSection';
import { CertificatesSection } from '@/components/screen/home/sections/CertificatesSection';
import { BlogSection } from '@/components/screen/home/sections/BlogSection';
import { ContactSection } from '@/components/screen/home/sections/ContactSection';
import { ChatWidget } from '@/components/screen/home/ChatWidget';

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-white">
      <GlobalShapesBackground />
      <Navbar />
      <main>
        <Suspense fallback={null}>
          <HeroSection />
        </Suspense>
        <JourneySection />
        <AboutSection />
        <ExperienceTimerSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificatesSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}