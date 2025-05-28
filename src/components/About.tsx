'use client';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function About() {
  return (
    <section id="about" className="relative bg-[#43455C] px-4 py-20">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
      <div className="container mx-auto relative">
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          About <span className="text-[#3BBA9C]">Me</span>
        </motion.h2>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[#2E3047] p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 group"
            >
              <div className="text-[#3BBA9C] text-4xl mb-4 group-hover:scale-110 transition-transform">
                <span className="font-bold">4+</span>
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">Years Experience</h3>
              <p className="text-[#707793]">
                Dedicated to crafting exceptional web experiences and solving complex problems.
              </p>
            </motion.div>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-[#2E3047] p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 group"
            >
              <div className="text-[#3BBA9C] text-4xl mb-4 group-hover:scale-110 transition-transform">
                <span className="font-bold">50+</span>
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">Projects Completed</h3>
              <p className="text-[#707793]">
                Successfully delivered projects ranging from small businesses to enterprise solutions.
              </p>
            </motion.div>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#2E3047] p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 group"
            >
              <div className="text-[#3BBA9C] text-4xl mb-4 group-hover:scale-110 transition-transform">
                <span className="font-bold">20+</span>
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">Happy Clients</h3>
              <p className="text-[#707793]">
                Building lasting relationships through quality work and reliable service.
              </p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 bg-[#2E3047] p-8 rounded-lg shadow-xl"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-[#3BBA9C] mb-6">Who I Am</h3>
                <p className="text-[#707793] mb-4 leading-relaxed">
                  A passionate frontend developer with a keen eye for design and a commitment to creating 
                  seamless user experiences. I blend technical expertise with creative problem-solving 
                  to build modern web applications.
                </p>
                <p className="text-[#707793] leading-relaxed">
                  My approach combines clean code principles with innovative design thinking, 
                  ensuring both functionality and aesthetics in every project.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-white">Name:</span>
                  <span className="text-[#707793]">Jacob Aiden</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white">Age:</span>
                  <span className="text-[#707793]">25</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white">Location:</span>
                  <span className="text-[#707793]">New York, USA</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white">Email:</span>
                  <span className="text-[#707793]">contact@example.com</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white">Availability:</span>
                  <span className="text-[#3BBA9C]">Open for Work</span>
                </div>
                <div className="pt-4 flex gap-4">
                  <a href="/resume.pdf" className="px-6 py-3 bg-[#3BBA9C] text-[#2E3047] rounded-md hover:bg-opacity-90 transition-all">
                    Download CV
                  </a>
                  <div className="flex gap-4 items-center">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                       className="text-2xl text-[#707793] hover:text-[#3BBA9C] transition-colors">
                      <FaGithub />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                       className="text-2xl text-[#707793] hover:text-[#3BBA9C] transition-colors">
                      <FaLinkedin />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                       className="text-2xl text-[#707793] hover:text-[#3BBA9C] transition-colors">
                      <FaTwitter />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 