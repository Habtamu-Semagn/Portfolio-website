import LaunchIcon from "@mui/icons-material/Launch";
function ProjectCard({ name, src, link, description, technologies = [] }) {
  return (
    <div className="flex flex-wrap lg:flex-row gap-10 xl:gap-20 text-white mt-10 mb-10 bg-slate-900 p-5 sm:p-10">
      <div className="relative flex lg:w-100 lg:h-100">
        <img
          src={src}
          alt={name}
          className={`object-cover w-full h-full hover:cursor-pointer grow-1`}
        />
        <a
          href={link}
          className="absolute inset-0 flex justify-center items-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300"
        >
          <LaunchIcon fontSize="large" />
        </a>
      </div>
      <div className="bg-slate-900  grow-1 flex-1 flex-col  h-full">
        <h3 className="text-2xl font-bold text-teal-400 mb-4">{name}</h3>

        <p className="text-slate-300 mb-6 leading-relaxed text-justify text-sm ">
          {description}
        </p>

        <div className="mb-6">
          <h4 className="text-slate-400 text-sm font-semibold mb-3 uppercase tracking-wider">
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-slate-800 text-teal-300 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors duration-200 font-medium mt-auto"
        >
          <span>View Project</span>
          <LaunchIcon fontSize="small" />
        </a>
      </div>
    </div>
  );
}
export default ProjectCard;
