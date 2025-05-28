'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Height of the fixed navbar
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false); // Close mobile menu after clicking
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100; // Add offset for better detection

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navigationItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="container mx-auto px-4 py-6 flex justify-between items-center backdrop-blur-md bg-[#2E3047]/80 sticky top-0 z-50 border-b border-[#3BBA9C]/10">
      <motion.div 
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold text-[#3BBA9C]"
      >
        Jacob.
      </motion.div>

      {/* Desktop Menu */}
      <motion.div 
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="hidden md:flex gap-8 text-[#707793]"
      >
        {navigationItems.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className={`hover:text-[#3BBA9C] transition-colors relative ${
              activeSection === id ? 'text-[#3BBA9C]' : ''
            }`}
          >
            {label}
            {activeSection === id && (
              <motion.div
                layoutId="activeSection"
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#3BBA9C]"
                initial={false}
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        ))}
      </motion.div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-[#707793] hover:text-[#3BBA9C] transition-colors z-50"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <motion.div
          animate={isMobileMenuOpen ? "open" : "closed"}
          className="w-6 h-6 relative"
        >
          <motion.span
            className="absolute w-6 h-0.5 bg-current transform transition-transform duration-300"
            style={{ top: "45%" }}
            variants={{
              open: { rotate: 45, translateY: 0 },
              closed: { rotate: 0, translateY: -8 }
            }}
          />
          <motion.span
            className="absolute w-6 h-0.5 bg-current transform transition-opacity duration-300"
            style={{ top: "45%" }}
            variants={{
              open: { opacity: 0 },
              closed: { opacity: 1 }
            }}
          />
          <motion.span
            className="absolute w-6 h-0.5 bg-current transform transition-transform duration-300"
            style={{ top: "45%" }}
            variants={{
              open: { rotate: -45, translateY: 0 },
              closed: { rotate: 0, translateY: 8 }
            }}
          />
        </motion.div>
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-[300px] bg-[#1E3047] h-screen shadow-xl z-50 md:hidden"
            >
              {/* Close button */}
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-6 right-6 text-[#707793] hover:text-[#3BBA9C] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Menu items */}
              <div className="flex flex-col items-center pt-24 px-6">
                {navigationItems.map(({ id, label }) => (
                  <motion.button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className={`w-full py-4 text-center text-lg ${
                      activeSection === id ? 'text-[#3BBA9C]' : 'text-[#707793]'
                    } hover:text-[#3BBA9C] transition-colors border-b border-[#3BBA9C]/10`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
} 