'use client';

export default function Contact() {
  return (
    <section id="contact" className="relative bg-gradient-to-b from-[#2E3047] to-[#43455C] px-4 py-20">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
      <div className="container mx-auto relative">
        <h2 className="text-4xl font-bold text-center text-white mb-4" data-aos="fade-up">
          Contact <span className="text-[#3BBA9C]">Me!</span>
        </h2>
        <p className="text-[#707793] text-center mb-12 max-w-xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          Let's work together to bring your ideas to life. Feel free to reach out for collaborations or just a friendly hello!
        </p>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div 
              className="bg-[#2E3047] p-6 rounded-xl text-center hover:shadow-xl transition-all hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="w-16 h-16 bg-[#3BBA9C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Location</h3>
              <p className="text-[#707793]">Chandigarh, India</p>
            </div>

            <div 
              className="bg-[#2E3047] p-6 rounded-xl text-center hover:shadow-xl transition-all hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="w-16 h-16 bg-[#3BBA9C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📧</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-[#707793]">sahiscord@gmail.com</p>
            </div>

            <div 
              className="bg-[#2E3047] p-6 rounded-xl text-center hover:shadow-xl transition-all hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="w-16 h-16 bg-[#3BBA9C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Phone</h3>
              <p className="text-[#707793]">+91 8449308713</p>
            </div>
          </div>

          <form className="bg-[#2E3047] p-8 rounded-xl shadow-xl" data-aos="fade-up" data-aos-delay="500">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-[#43455C] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3BBA9C] transition-all"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-[#43455C] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3BBA9C] transition-all"
                />
              </div>
            </div>
            <div className="mb-6">
              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-[#43455C] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3BBA9C] transition-all"
              />
            </div>
            <div className="mb-6">
              <textarea
                placeholder="Your Message"
                rows={6}
                className="w-full bg-[#43455C] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3BBA9C] transition-all resize-none"
              ></textarea>
            </div>
            <button className="w-full bg-[#3BBA9C] text-[#2E3047] py-4 rounded-lg hover:bg-opacity-90 transition-all font-semibold text-lg">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
} 