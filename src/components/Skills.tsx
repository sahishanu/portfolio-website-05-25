'use client';
import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Skills() {
  const skillsRef = useRef(null);
  const isInView = useInView(skillsRef, { once: true });

  const technicalSkills = [
    { name: 'Frontend Development', level: 95 },
    { name: 'React & Next.js', level: 90 },
    { name: 'UI/UX Design', level: 85 },
    { name: 'Backend Development', level: 80 }
  ];

  const professionalSkills = [
    { name: 'Communication', value: 90, icon: '🗣️' },
    { name: 'Teamwork', value: 95, icon: '👥' },
    { name: 'Creativity', value: 85, icon: '🎨' },
    { name: 'Project Management', value: 88, icon: '📊' }
  ];

  return (
    <section id="skills" className="relative bg-[#2E3047] px-4 py-20">
      <div className="absolute inset-0 bg-[#3BBA9C]/5 bg-[radial-gradient(ellipse_at_top_right,rgba(59,186,156,0.15),transparent_50%)]"></div>
      <div className="container mx-auto relative">
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          My <span className="text-[#3BBA9C]">Skills</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 mt-12" ref={skillsRef}>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="p-4"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="relative">
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-[#3BBA9C]">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-[#43455C] rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-[#3BBA9C] rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="p-4"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Professional Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {professionalSkills.map((skill, index) => (
                <motion.div 
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#43455C] p-6 rounded-xl hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="text-4xl mb-4">{skill.icon}</div>
                  <h4 className="text-white font-semibold mb-2">{skill.name}</h4>
                  <div className="relative pt-2">
                    <div className="text-[#3BBA9C] font-bold mb-1">{skill.value}%</div>
                    <div className="h-1.5 bg-[#2E3047] rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-[#3BBA9C] rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.value}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 