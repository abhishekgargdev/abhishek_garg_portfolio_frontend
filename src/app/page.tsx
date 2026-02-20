"use client";
import { AboutMe } from '@/components/screen/home/AboutMe';
import { BlogSection } from '@/components/screen/home/BlogSection';
import { CertificatesSection } from '@/components/screen/home/CertificatesSection';
import { ChatWidget } from '@/components/screen/home/ChatWidget';
import { ContactSection } from '@/components/screen/home/ContactSection';
import { ExperienceTimer } from '@/components/screen/home/ExperienceTimer';
import { Footer } from '@/components/screen/home/Footer';
import { GlobalShapesBackground } from '@/components/screen/home/GlobalShapesBackground';
import { Hero } from '@/components/screen/home/Hero';
import { JourneyLadder } from '@/components/screen/home/JourneyLadder';
import { Navbar } from '@/components/screen/home/Navbar';
import { ProjectsSection } from '@/components/screen/home/ProjectsSection';
import { SkillsSection } from '@/components/screen/home/SkillsSection';
import React from 'react';

const page = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300 relative">
      <GlobalShapesBackground />
       <Navbar />
        <main>
        <Hero />
        <JourneyLadder />
        <AboutMe />
        <ExperienceTimer />
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
};

export default page;
