'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-b from-[#2E3047] to-[#43455C] px-4 py-20 items-center text-left min-h-[90vh] flex">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="container mx-auto relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 w-full text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Hi, I'm{" "}
              <span className="text-[#3BBA9C] inline-block">
                <Typewriter
                  options={{
                    strings: ['Sahishanu Chand', 'a Developer', 'a Full Stack Engineer'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h1>
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="text-xl md:text-2xl text-[#3BBA9C] mb-6"
            >
              Specialist Programmer at Infosys
            </motion.h2>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="text-[#707793] mb-8 max-w-lg text-base md:text-lg mx-auto md:mx-0"
            >
              Full stack developer with expertise in Java, Spring Boot, Angular, and React.
              Passionate about building scalable applications and optimizing system performance.
            </motion.p>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="flex gap-4 justify-center md:justify-start"
            >
              <button className="px-4 md:px-6 py-3 bg-[#3BBA9C] text-[#2E3047] rounded-md hover:bg-opacity-90 transition-all text-sm md:text-base">
                Hire Me
              </button>
              <button className="px-4 md:px-6 py-3 border border-[#3BBA9C] text-[#3BBA9C] rounded-md hover:bg-[#3BBA9C] hover:text-[#2E3047] transition-all text-sm md:text-base">
                Let's Talk
              </button>
            </motion.div>
          </motion.div>
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 w-full flex justify-center"
          >
            <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden">
              <Image
                src="/photo.png"
                alt="Profile"
                fill
                className="object-cover"
                style={{ filter: 'brightness(0.9) contrast(1.1)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#3BBA9C]/20 to-transparent mix-blend-overlay"></div>
              <div className="absolute inset-0 border-2 border-[#3BBA9C]/20 rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 