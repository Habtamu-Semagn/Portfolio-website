import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ProjectCard from "../components/projectCard";
import { useNavigate } from "react-router-dom";
import { projectInfo } from "../data/projectsdata";
function Projects() {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div className="px-3 sm:px-10 md:px-20 xl:px-30 py-20 bg-slate-800">
      <span
        onClick={handleClick}
        className="absolute top-5 sm:left-5 text-white rounded-2xl p-2 bg-slate-900 hover:bg-slate-700 hover:cursor-pointer"
      >
        <ArrowBackIcon />
      </span>
      <h1 className="text-slate-500 text-xl flex gap-7">
        <span>||</span> <span>My Projects</span>{" "}
      </h1>
      <h2 className="text-white  text-4xl md:text-5xl lg:text-6xl mt-15 mb-20 font-serif">
        My Complete Projects.
      </h2>
      {projectInfo.map((projects, index) => (
        <ProjectCard
          key={index}
          name={projects.name}
          src={projects.src}
          link={projects.link}
          description={projects.description}
          technologies={projects.technologies}
        />
      ))}
    </div>
  );
}
export default Projects;
