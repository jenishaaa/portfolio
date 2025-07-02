import ProjectCard from '../components/ProjectCard';
import projects from '../data/projectsData';

export default function Projects() {
  return (
    <section id="projects" className="bg-[#f3f3f3] text-[#1a1a1a] py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Heading */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Projects</h2>
          <div className="w-16 h-1 mx-auto bg-[#3b82f6] rounded"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        
      </div>
    </section>
  );
}
