interface ProjectCardProps {
    title : string;
    subtitle : string;
    description: string;
    image: string;
    technologies: string[];
    live: string;
}
const ProjectCard = ({
  title,
  subtitle,
  description,
  image,
  technologies,
  live,
}: ProjectCardProps) => {
  return (
  <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:translate-y-2 hover:shadow-2xl">
    <img
    src={image}
    alt={title}
    className="w-full p-2 h-56 object-cover transition-transform duration-500 rounded-xl group-hover:scale-105"/>
    <div className="p-6">
      <p className="text-sm font-medium text-blue-600">
        {subtitle}
      </p>
      <h3 className="mt-2 text-2xl font-bold text-slate-900">
        {title}
      </h3>
      <p className="mt-4 leading-7 text-slate-600">
        {description}
      </p>
      <div className="my-5 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span key={tech}
          className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
            {tech}
          </span>
        ))}
      </div>

      {live && (
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-500"
        >
          Live Demo
        </a>
      )}

    </div>
  </div>
);
};

export default ProjectCard;