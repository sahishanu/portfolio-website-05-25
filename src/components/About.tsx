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
                Dedicated to building scalable applications and optimizing system performance.
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
                <span className="font-bold">600+</span>
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">DSA Problems Solved</h3>
              <p className="text-[#707793]">
                Solved problems on Leetcode, GeeksForGeeks, and HackerRank platforms.
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
                <span className="font-bold">8+</span>
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">Projects Completed</h3>
              <p className="text-[#707793]">
                Successfully delivered projects in healthcare and e-commerce domains.
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
                  A full stack developer with expertise in Java, Spring Boot, Angular, and React. Currently working as a
                  Specialist Programmer at Infosys, focusing on healthcare domain projects.
                </p>
                <p className="text-[#707793] leading-relaxed">
                  Passionate about building scalable applications and optimizing system performance. Strong problem-solving skills
                  with 600+ DSA problems solved across various platforms.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-white">Name:</span>
                  <span className="text-[#707793]">Sahishanu Chand</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white">Location:</span>
                  <span className="text-[#707793]">Chandigarh, India</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white">Email:</span>
                  <span className="text-[#707793]">sahiscord@gmail.com</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white">Phone:</span>
                  <span className="text-[#707793]">+91 8449308713</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white">Availability:</span>
                  <span className="text-[#3BBA9C]">Open to Opportunities</span>
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