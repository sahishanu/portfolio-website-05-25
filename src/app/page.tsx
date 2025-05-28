'use client';

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Journey from '@/components/Journey';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#2E3047]">
      <Navigation />
      <Hero />
      <About />
      <Journey />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
