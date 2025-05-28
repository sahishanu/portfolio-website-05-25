'use client';

export default function Journey() {
  return (
    <section id="education" className="relative bg-gradient-to-b from-[#43455C] to-[#2E3047] px-4 py-20">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
      <div className="container mx-auto relative">
        <h2 className="text-4xl font-bold text-white mb-16" data-aos="fade-up">
          My <span className="text-[#3BBA9C]">Journey</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {/* Education Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8" data-aos="fade-up">Education</h3>
            <div className="space-y-8">
              {[
                {
                  year: '2020 - 2022',
                  title: 'Master Degree - University',
                  description: 'Masters in Computer Science with focus on Web Technologies and UI/UX Design.'
                },
                {
                  year: '2016 - 2020',
                  title: 'Bachelor Degree - University',
                  description: 'Bachelor in Computer Science, graduated with honors.'
                },
                {
                  year: '2014 - 2016',
                  title: 'High School Diploma',
                  description: 'Advanced courses in Computer Science and Mathematics.'
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="relative pl-8 border-l-2 border-[#3BBA9C]"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="absolute w-4 h-4 bg-[#3BBA9C] rounded-full -left-[9px] top-0 shadow-lg shadow-[#3BBA9C]/20"></div>
                  <div className="bg-[#2E3047] p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                    <div className="text-[#3BBA9C] text-sm mb-2 font-semibold">{item.year}</div>
                    <h4 className="text-white font-semibold mb-2 text-lg">{item.title}</h4>
                    <p className="text-[#707793] text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8" data-aos="fade-up">Experience</h3>
            <div className="space-y-8">
              {[
                {
                  year: '2022 - Present',
                  title: 'Senior Frontend Developer',
                  company: 'Tech Solutions Inc.',
                  description: 'Leading frontend development team, implementing modern web technologies.'
                },
                {
                  year: '2020 - 2022',
                  title: 'Frontend Developer',
                  company: 'Digital Agency',
                  description: 'Developed responsive web applications using React and Next.js.'
                },
                {
                  year: '2019 - 2020',
                  title: 'Junior Developer',
                  company: 'Startup Hub',
                  description: 'Worked on various web development projects using modern frameworks.'
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="relative pl-8 border-l-2 border-[#3BBA9C]"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="absolute w-4 h-4 bg-[#3BBA9C] rounded-full -left-[9px] top-0 shadow-lg shadow-[#3BBA9C]/20"></div>
                  <div className="bg-[#2E3047] p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                    <div className="text-[#3BBA9C] text-sm mb-2 font-semibold">{item.year}</div>
                    <h4 className="text-white font-semibold mb-1 text-lg">{item.title}</h4>
                    <div className="text-[#3BBA9C]/80 text-sm mb-2">{item.company}</div>
                    <p className="text-[#707793] text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 