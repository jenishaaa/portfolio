export default function ProjectCard({
  title,
  description,
  image,
  techStack = [],
  demoLink,
  codeLink
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-10 hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
      
      {/* Project Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-60 object-cover rounded-xl mb-6"
      />

      {/* Project Title */}
      <h3 className="text-3xl text-center font-bold text-[#3b3b3b] mb-4">
        {title}
      </h3>

      {/* Project Description */}
      <p className="text-lg text-[#6b6b6b] mb-6">
        {description}
      </p>

      {/* Tech Stack Tags */}
      <div className="flex flex-wrap gap-3 mb-6">
        {techStack.map((tech, index) => (
          <span
            key={index}
            className="bg-gray-200 text-[#10214b] px-3 py-1 rounded-full text-lg font-medium shadow-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links: Live Demo & GitHub */}
      <div className="flex gap-4">
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#3b82f6] text-white px-4 py-2 rounded-lg font-medium text-lg hover:bg-[#2563ec] transition"
          >
            Live Demo
          </a>
        )}
        {codeLink && (
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium text-lg hover:bg-green-700 transition"
          >
            GitHub Link
          </a>
        )}
      </div>
    </div>
  );
}
