import resumePDF from '../assets/Jenisha_Adhikari-CV_webdev.pdf';

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-[#f3f3f3] text-[#1f1f1f]">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Section Heading */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#2d2d2d]">Skills</h2>
          <div className="w-16 h-1 mx-auto bg-[#3b82f6] rounded" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Technical Skills Box */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm space-y-6">
            <h3 className="text-2xl sm:text-3xl text-center font-semibold text-[#2d2d2d] border-b pb-2">
              ✅ Technical Skills
            </h3>
            <div className="flex flex-wrap gap-3 text-lg">
              {[
                'React.js',
                'JavaScript (ES6+)',
                'HTML5',
                'CSS3',
                'Tailwind CSS',
                'Responsive Design',
                'Git & GitHub',
                'React Router DOM',
              ].map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-[#e7e7e7] text-[#2c2c2c] px-3 py-1 rounded-full font-medium shadow-sm hover:scale-105 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Soft Skills Box */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm space-y-6">
            <h3 className="text-2xl sm:text-3xl text-center font-semibold text-[#2d2d2d] border-b pb-2">
              💡 Soft Skills
            </h3>
            <div className="text-lg flex flex-wrap gap-3">
              {[
                'Communication',
                'Collaboration',
                'Quick Learner',
                'Curious',
                'Problem Solving',
                'Adaptability',
                'Time Management',
              ].map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-[#f0efeb] text-[#2c2c2c] px-3 py-1 rounded-full font-medium shadow-sm hover:scale-105 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Download Resume CTA */}
        <div className="text-center">
          <a
            href={resumePDF}
            download
            className="inline-block bg-[#3b82f6] hover:bg-[#2563eb] hover:scale-105 text-white text-xl sm:text-2xl px-6 py-3 rounded-lg font-medium transition duration-300 shadow-sm"
          >
            Download Resume
          </a>
        </div>

      </div>
    </section>
  );
}
