export default function Trainings() {
  const timeline = [
    {
      title: "Python",
      provider: "Texas College of Management and IT",
      year: "2023",
    },
    {
      title: "React.js",
      provider: "Texas College of Management and IT and Dursikshya",
      year: "2024",
    },
    {
      title: "SEO Training Program",
      provider: "Digital Tech Mastery Nepal",
      year: "2025",
    },
  ];

  return (
    <section id="trainings" className="bg-[#f9f9f6] py-20 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Section Heading */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#2d2d2d]">
            Trainings & Certifications
          </h2>
          <div className="w-16 h-1 mx-auto bg-[#3b82f6] rounded-full" />
        </div>

        {/* Timeline */}
        <ol className="relative border-l-2 border-gray-300 space-y-12 ml-4">
          {timeline.map((item, index) => (
            <li key={index} className="pl-6 relative group">
              <span className="absolute left-[-0.65rem] top-2 w-4 h-4 bg-[#3b82f6] rounded-full border-4 border-white transition-transform group-hover:scale-110"></span>
              <h3 className="text-xl sm:text-2xl font-semibold text-[#1f1f1f] group-hover:text-[#3b82f6] transition-colors">
                {item.title}
              </h3>
              <p className="text-base sm:text-lg text-gray-700">{item.provider}</p>
              <span className="text-sm text-gray-500">{item.year}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
