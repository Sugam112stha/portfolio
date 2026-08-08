import projects from "../../data/project";
import ProjectCard from "../ui/ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
            My Projects
          </h2>

            <p className="mt-5 max-w-2xl text-base md:text-lg leading-7 md:leading-8 text-slate-500">
              A collection of projects I've built using modern technologies,
             focusing on responsive design, clean code, and real-world
              problem solving.
            </p>

            <div className="w-32 md:w-48 h-[2px] bg-blue-500 mt-6 rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.map((project) => (
                <ProjectCard
                key={project.id}
                title={project.title}
                subtitle={project.subtitle}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                live={project.live}
              />
             ))}
          </div>
      </div>
    </section>
  );
};

export default Projects;