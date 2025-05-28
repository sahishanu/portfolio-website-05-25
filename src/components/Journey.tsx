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
                  year: '2017 - 2021',
                  title: 'B.Tech CSE - DIT University',
                  description: 'Graduated with 7.9 CGPA from DIT University, Dehradun.'
                },
                {
                  year: '2016',
                  title: '12th CBSE - Nosegay Public School',
                  description: 'Completed 12th grade with 84.5% from Nosegay Public School, Uttarakhand.'
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
                  year: 'Oct 2021 - Present',
                  title: 'Specialist Programmer',
                  company: 'Infosys',
                  description: 'Working on healthcare domain projects including IAAS Platform and MedTrack. Developed features using Spring Boot, Angular, and React. Led development of ingestion module and improved service performance by 40%.'
                },
                {
                  year: '2023',
                  title: 'UCC HUB Project',
                  company: 'Infosys',
                  description: 'Developed features for telecom service provider platform using Spring microservices, Angular, and Spring Batch. Implemented authentication, data processing, and inter-service communication.'
                },
                {
                  year: '2022',
                  title: 'Personal Projects',
                  company: 'Self',
                  description: 'Built Instagram clone using Spring Microservices & Angular, E-commerce website using React & Next.js, and Portfolio website using Next.js & Tailwind CSS.'
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